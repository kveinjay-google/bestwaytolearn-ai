import {
  checkRateLimit,
  clearSessionCookieHeader,
  hashPassword,
  normalizeDisplayName,
  normalizeEmail,
  nowSec,
  parseCookies,
  randomSalt,
  sessionCookieHeader,
  SESSION_COOKIE,
  SESSION_DAYS,
  uuid,
} from './utils.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function getSessionUser(db, request) {
  const cookies = parseCookies(request);
  const sessionId = cookies[SESSION_COOKIE];
  if (!sessionId) return null;

  const row = await db.prepare(`
    SELECT u.id, u.email, u.display_name, u.status, s.expires_at
    FROM sessions s
    JOIN users u ON u.id = s.user_id
    WHERE s.id = ? LIMIT 1
  `).bind(sessionId).first();

  if (!row || row.expires_at < nowSec() || row.status !== 'active') return null;
  return { id: row.id, email: row.email, displayName: row.display_name };
}

async function createSession(db, userId) {
  const sessionId = uuid();
  const created = nowSec();
  const expires = created + SESSION_DAYS * 86400;
  await db.prepare('INSERT INTO sessions (id, user_id, expires_at, created_at) VALUES (?, ?, ?, ?)')
    .bind(sessionId, userId, expires, created).run();
  return { sessionId, maxAge: SESSION_DAYS * 86400 };
}

export async function handleRegister(db, body, ip) {
  const allowed = await checkRateLimit(db, `reg:${ip}`, 5, 86400);
  if (!allowed) return { error: '注册过于频繁，请明天再试', status: 429 };

  const email = normalizeEmail(body.email);
  const password = String(body.password || '');
  const displayName = normalizeDisplayName(body.displayName || body.display_name);

  if (!EMAIL_RE.test(email)) return { error: '邮箱格式不正确', status: 400 };
  if (password.length < 8) return { error: '密码至少 8 位', status: 400 };
  if (displayName.length < 2) return { error: '昵称至少 2 个字符', status: 400 };

  const exists = await db.prepare('SELECT id FROM users WHERE email = ?').bind(email).first();
  if (exists) return { error: '该邮箱已注册', status: 409 };

  const salt = randomSalt();
  const passwordHash = await hashPassword(password, salt);
  const userId = uuid();
  const created = nowSec();

  await db.prepare(`
    INSERT INTO users (id, email, password_hash, password_salt, display_name, status, created_at)
    VALUES (?, ?, ?, ?, ?, 'active', ?)
  `).bind(userId, email, passwordHash, salt, displayName, created).run();

  const session = await createSession(db, userId);
  return {
    ok: true,
    user: { id: userId, email, displayName },
    session,
  };
}

export async function handleLogin(db, body, ip) {
  const allowed = await checkRateLimit(db, `login:${ip}`, 20, 3600);
  if (!allowed) return { error: '登录尝试过多，请稍后再试', status: 429 };

  const email = normalizeEmail(body.email);
  const password = String(body.password || '');

  const row = await db.prepare('SELECT * FROM users WHERE email = ?').bind(email).first();
  if (!row || row.status !== 'active') return { error: '邮箱或密码错误', status: 401 };

  const hash = await hashPassword(password, row.password_salt);
  if (hash !== row.password_hash) return { error: '邮箱或密码错误', status: 401 };

  const session = await createSession(db, row.id);
  return {
    ok: true,
    user: { id: row.id, email: row.email, displayName: row.display_name },
    session,
  };
}

export async function handleLogout(db, request) {
  const cookies = parseCookies(request);
  const sessionId = cookies[SESSION_COOKIE];
  if (sessionId) {
    await db.prepare('DELETE FROM sessions WHERE id = ?').bind(sessionId).run();
  }
  return { ok: true };
}

export function authResponse(result) {
  if (result.error) {
    return new Response(JSON.stringify({ ok: false, error: result.error }), {
      status: result.status || 400,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  }
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Set-Cookie': sessionCookieHeader(result.session.sessionId, result.session.maxAge),
  };
  return new Response(JSON.stringify({ ok: true, user: result.user }), { status: 200, headers });
}

export function logoutResponse() {
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Set-Cookie': clearSessionCookieHeader(),
    },
  });
}