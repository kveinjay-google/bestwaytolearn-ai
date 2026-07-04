import {
  getClientIp,
  handleOptions,
  json,
  normalizeTargetId,
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
  const segments = (context.params.path || '').split('/').filter(Boolean);
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
      SELECT c.id, c.body, c.created_at, u.display_name
      FROM comments c
      JOIN users u ON u.id = c.user_id
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
        displayName: r.display_name,
      })),
    });
  }

  if (request.method !== 'POST') return json({ ok: false, error: 'Method not allowed' }, 405);

  const user = await getSessionUser(env.DB, request);
  if (!user) return json({ ok: false, error: '请先登录后再留言' }, 401);

  let body = {};
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: '无效的 JSON' }, 400);
  }

  const target = normalizeTargetId(body.target || body.targetId);
  const text = String(body.body || '').trim();
  const honeypot = String(body._hp_url || body.website || '').trim();

  if (!target) return json({ ok: false, error: '留言目标无效' }, 400);

  const userLimit = await checkRateLimit(env.DB, `cmt:user:${user.id}`, 8, 3600);
  const ipLimit = await checkRateLimit(env.DB, `cmt:ip:${ip}`, 15, 3600);
  if (!userLimit || !ipLimit) {
    return json({ ok: false, error: '留言过于频繁，请稍后再试' }, 429);
  }

  const dup = await env.DB.prepare(`
    SELECT id FROM comments
    WHERE user_id = ? AND body = ? AND created_at > ?
    LIMIT 1
  `).bind(user.id, text, nowSec() - 3600).first();
  if (dup) return json({ ok: false, error: '请勿重复发送相同留言' }, 409);

  const spam = analyzeComment(text, { userEmail: user.email, honeypot });
  if (spam.action === 'reject') {
    return json({ ok: false, error: mapSpamError(spam.reasons), spamScore: spam.score }, 422);
  }

  const status = spam.action === 'pending' ? 'pending' : 'approved';
  const commentId = uuid();
  const created = nowSec();

  await env.DB.prepare(`
    INSERT INTO comments (id, user_id, target_id, body, status, spam_score, spam_reason, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    commentId,
    user.id,
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
      displayName: user.displayName,
    },
  });
}

function urlTarget(request) {
  return new URL(request.url).searchParams.get('target');
}