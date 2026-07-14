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
import {
  handleGoogleCallback,
  isGoogleAuthConfigured,
  startGoogleOAuth,
} from '../lib/google-auth.js';
import { analyzeComment, mapSpamError } from '../lib/spam.js';
import {
  handleGetProgress,
  handlePutProgress,
  handlePostAnalytics,
} from '../lib/progress.js';
import {
  handleAdminMe,
  handleAdminDashboard,
  handleAdminUsers,
  handleAdminAnalytics,
  handleAdminProgress,
} from '../lib/admin.js';

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
    if (segments[0] === 'progress') {
      return handleProgress(env, request, segments);
    }
    if (segments[0] === 'analytics') {
      if (request.method === 'POST') return handlePostAnalytics(env.DB, request, ip);
      return json({ ok: false, error: 'Method not allowed' }, 405);
    }
    if (segments[0] === 'admin') {
      return handleAdmin(env, request, segments);
    }
    return json({ ok: false, error: 'Not found' }, 404);
  } catch (err) {
    console.error('API error', url.pathname, err);
    return json({ ok: false, error: '服务器错误，请稍后重试' }, 500);
  }
}

async function handleAuth(env, request, segments, ip) {
  const action = segments[1] || '';
  const sub = segments[2] || '';

  if (request.method === 'GET' && action === 'me') {
    const user = await getSessionUser(env.DB, request);
    return json({ ok: true, user });
  }

  if (request.method === 'GET' && action === 'providers') {
    return json({
      ok: true,
      providers: { google: isGoogleAuthConfigured(env) },
    });
  }

  if (request.method === 'GET' && action === 'google' && sub === 'callback') {
    return handleGoogleCallback(request, env, ip);
  }

  if (request.method === 'GET' && action === 'google') {
    return startGoogleOAuth(request, env);
  }

  if (request.method === 'POST' && action === 'logout') {
    await handleLogout(env.DB, request);
    return logoutResponse();
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

  return json({ ok: false, error: 'Not found' }, 404);
}

async function handleAdmin(env, request, segments) {
  const action = segments[1] || 'dashboard';
  if (request.method !== 'GET') {
    return json({ ok: false, error: 'Method not allowed' }, 405);
  }
  switch (action) {
    case 'me':
      return handleAdminMe(env, request);
    case 'dashboard':
      return handleAdminDashboard(env, request);
    case 'users':
      return handleAdminUsers(env, request);
    case 'analytics':
      return handleAdminAnalytics(env, request);
    case 'progress':
      return handleAdminProgress(env, request);
    default:
      return json({ ok: false, error: 'Not found' }, 404);
  }
}

async function handleProgress(env, request, segments) {
  const action = segments[1] || '';
  if (action !== '' && action !== 'sync') {
    return json({ ok: false, error: 'Not found' }, 404);
  }
  if (request.method === 'GET') return handleGetProgress(env.DB, request);
  if (request.method === 'PUT' || request.method === 'POST') {
    return handlePutProgress(env.DB, request);
  }
  return json({ ok: false, error: 'Method not allowed' }, 405);
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

  const spam = analyzeComment(text, { honeypot });
  if (spam.action === 'reject') {
    return json({ ok: false, error: mapSpamError(spam.reasons), spamScore: spam.score }, 422);
  }

  const status = 'approved';
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