import {
  getClientIp,
  handleOptions,
  json,
  normalizeTargetId,
  normalizeGuestName,
  nowSec,
  uuid,
  checkRateLimit,
} from '../lib/utils.js';
import {
  authResponse,
  getSessionUser,
  handleLogin,
  handleLogout,
  handleRegister,
  logoutResponse,
} from '../lib/auth.js';
import { analyzeComment, mapSpamError } from '../lib/spam.js';

export async function onRequest(context) {
  const { request, env } = context;
  if (request.method === 'OPTIONS') return handleOptions(request);

  if (!env.DB) {
    return json({ ok: false, error: '社区服务未配置数据库，请联系管理员' }, 503);
  }

  const url = new URL(request.url);
  const segments = parsePathSegments(context.params.path);
  const ip = getClientIp(request);

  try {
    if (segments[0] === 'auth') {
      return handleAuth(env, request, segments, ip);
    }
    if (segments[0] === 'comments') {
      return handleComments(env, request, segments, ip);
    }
    return json({ ok: false, error: 'Not found' }, 404);
  } catch (err) {
    console.error('API error', url.pathname, err);
    return json({ ok: false, error: '服务器错误，请稍后重试' }, 500);
  }
}

async function handleAuth(env, request, segments, ip) {
  const action = segments[1] || '';

  if (request.method === 'GET' && action === 'me') {
    const user = await getSessionUser(env.DB, request);
    return json({ ok: true, user });
  }

  if (request.method !== 'POST') return json({ ok: false, error: 'Method not allowed' }, 405);

  let body = {};
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: '无效的 JSON' }, 400);
  }

  if (action === 'register') {
    const result = await handleRegister(env.DB, body, ip);
    return authResponse(result);
  }
  if (action === 'login') {
    const result = await handleLogin(env.DB, body, ip);
    return authResponse(result);
  }
  if (action === 'logout') {
    await handleLogout(env.DB, request);
    return logoutResponse();
  }

  return json({ ok: false, error: 'Not found' }, 404);
}

async function handleComments(env, request, segments, ip) {
  if (request.method === 'GET') {
    const target = normalizeTargetId(urlTarget(request));
    if (!target) return json({ ok: false, error: '缺少 target 参数' }, 400);

    const rows = await env.DB.prepare(`
      SELECT c.id, c.body, c.created_at, c.guest_name, u.display_name
      FROM comments c
      LEFT JOIN users u ON u.id = c.user_id
      WHERE c.target_id = ? AND c.status = 'approved'
      ORDER BY c.created_at DESC
      LIMIT 80
    `).bind(target).all();

    return json({
      ok: true,
      comments: (rows.results || []).map(r => ({
        id: r.id,
        body: r.body,
        createdAt: r.created_at,
        displayName: r.display_name || r.guest_name || '匿名',
        isAnonymous: !r.display_name,
      })),
    });
  }

  if (request.method !== 'POST') return json({ ok: false, error: 'Method not allowed' }, 405);

  const user = await getSessionUser(env.DB, request);

  let body = {};
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: '无效的 JSON' }, 400);
  }

  const target = normalizeTargetId(body.target || body.targetId);
  const text = String(body.body || '').trim();
  const honeypot = String(body._hp_url || body.website || '').trim();
  const guestName = normalizeGuestName(body.guestName || body.guest_name);

  if (!target) return json({ ok: false, error: '留言目标无效' }, 400);

  const isAnonymous = !user;
  if (isAnonymous && guestName.length < 2) {
    return json({ ok: false, error: '匿名留言请填写昵称（至少 2 个字符）' }, 400);
  }

  const ipLimit = await checkRateLimit(
    env.DB,
    isAnonymous ? `cmt:anon:ip:${ip}` : `cmt:ip:${ip}`,
    isAnonymous ? 6 : 15,
    3600,
  );
  if (!ipLimit) {
    return json({ ok: false, error: '留言过于频繁，请稍后再试' }, 429);
  }

  if (user) {
    const userLimit = await checkRateLimit(env.DB, `cmt:user:${user.id}`, 8, 3600);
    if (!userLimit) {
      return json({ ok: false, error: '留言过于频繁，请稍后再试' }, 429);
    }

    const dup = await env.DB.prepare(`
      SELECT id FROM comments
      WHERE user_id = ? AND body = ? AND created_at > ?
      LIMIT 1
    `).bind(user.id, text, nowSec() - 3600).first();
    if (dup) return json({ ok: false, error: '请勿重复发送相同留言' }, 409);
  } else {
    const dup = await env.DB.prepare(`
      SELECT id FROM comments
      WHERE user_id IS NULL AND guest_name = ? AND body = ? AND created_at > ?
      LIMIT 1
    `).bind(guestName, text, nowSec() - 3600).first();
    if (dup) return json({ ok: false, error: '请勿重复发送相同留言' }, 409);
  }

  const spam = analyzeComment(text, {
    userEmail: user?.email || '',
    honeypot,
    isAnonymous,
  });
  if (spam.action === 'reject') {
    return json({ ok: false, error: mapSpamError(spam.reasons), spamScore: spam.score }, 422);
  }

  const status = spam.action === 'pending' ? 'pending' : 'approved';
  const commentId = uuid();
  const created = nowSec();
  const displayName = user?.displayName || guestName;

  await env.DB.prepare(`
    INSERT INTO comments (id, user_id, guest_name, target_id, body, status, spam_score, spam_reason, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    commentId,
    user?.id || null,
    isAnonymous ? guestName : null,
    target,
    text,
    status,
    spam.score,
    spam.reasons.join(','),
    created,
  ).run();

  if (status === 'pending') {
    return json({
      ok: true,
      pending: true,
      message: '留言已提交，正在审核中，通过后将会显示',
    });
  }

  return json({
    ok: true,
    comment: {
      id: commentId,
      body: text,
      createdAt: created,
      displayName,
      isAnonymous,
    },
  });
}

function urlTarget(request) {
  return new URL(request.url).searchParams.get('target');
}

function parsePathSegments(pathParam) {
  if (Array.isArray(pathParam)) return pathParam.filter(Boolean);
  return String(pathParam || '').split('/').filter(Boolean);
}