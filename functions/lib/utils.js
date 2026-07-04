export const SESSION_COOKIE = 'bwtl_session';
export const SESSION_DAYS = 30;
export const MAX_BODY_LEN = 800;
export const MIN_BODY_LEN = 2;

export function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...corsHeaders(),
      ...extraHeaders,
    },
  });
}

export function corsHeaders(origin = '*') {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Credentials': 'true',
  };
}

export function handleOptions(request) {
  const origin = request.headers.get('Origin') || '*';
  return new Response(null, { status: 204, headers: corsHeaders(origin) });
}

export function uuid() {
  return crypto.randomUUID();
}

export function nowSec() {
  return Math.floor(Date.now() / 1000);
}

export function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase();
}

export function normalizeDisplayName(name) {
  return String(name || '').trim().slice(0, 32);
}

export function normalizeTargetId(target) {
  const t = String(target || '').trim().slice(0, 120);
  if (!/^[\w:.@-]+$/.test(t)) return '';
  return t;
}

export function parseCookies(request) {
  const raw = request.headers.get('Cookie') || '';
  const out = {};
  raw.split(';').forEach(part => {
    const idx = part.indexOf('=');
    if (idx < 0) return;
    const k = part.slice(0, idx).trim();
    const v = part.slice(idx + 1).trim();
    if (k) out[k] = decodeURIComponent(v);
  });
  return out;
}

export function sessionCookieHeader(sessionId, maxAgeSec) {
  const secure = 'Secure; ';
  return `${SESSION_COOKIE}=${encodeURIComponent(sessionId)}; Path=/; HttpOnly; ${secure}SameSite=Lax; Max-Age=${maxAgeSec}`;
}

export function clearSessionCookieHeader() {
  return `${SESSION_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`;
}

export function getClientIp(request) {
  return request.headers.get('CF-Connecting-IP')
    || request.headers.get('X-Forwarded-For')?.split(',')[0]?.trim()
    || '0.0.0.0';
}

export async function hashPassword(password, salt) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({
    name: 'PBKDF2',
    salt: enc.encode(salt),
    iterations: 120000,
    hash: 'SHA-256',
  }, key, 256);
  return btoa(String.fromCharCode(...new Uint8Array(bits)));
}

export function randomSalt() {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  return btoa(String.fromCharCode(...bytes));
}

export async function checkRateLimit(db, bucket, limit, windowSec) {
  const now = nowSec();
  const row = await db.prepare('SELECT count, window_start FROM rate_limits WHERE bucket = ?').bind(bucket).first();
  if (!row) {
    await db.prepare('INSERT INTO rate_limits (bucket, count, window_start) VALUES (?, 1, ?)').bind(bucket, now).run();
    return true;
  }
  if (now - row.window_start >= windowSec) {
    await db.prepare('UPDATE rate_limits SET count = 1, window_start = ? WHERE bucket = ?').bind(now, bucket).run();
    return true;
  }
  if (row.count >= limit) return false;
  await db.prepare('UPDATE rate_limits SET count = count + 1 WHERE bucket = ?').bind(bucket).run();
  return true;
}