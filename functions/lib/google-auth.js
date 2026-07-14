import {
  checkRateLimit,
  getEnvString,
  normalizeDisplayName,
  normalizeEmail,
  nowSec,
  parseCookies,
  randomSalt,
  sessionCookieHeader,
  uuid,
} from './utils.js';

const OAUTH_STATE_COOKIE = 'bwtl_oauth_state';
const OAUTH_STATE_MAX_AGE = 600;
const OAUTH_ONLY_PASSWORD = '!oauth:google';
const GOOGLE_AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GOOGLE_USERINFO_URL = 'https://www.googleapis.com/oauth2/v3/userinfo';

export function isGoogleAuthConfigured(env) {
  return !!(getEnvString(env, 'GOOGLE_CLIENT_ID') && getEnvString(env, 'GOOGLE_CLIENT_SECRET'));
}

function getOrigin(request) {
  const url = new URL(request.url);
  return url.origin;
}

function getRedirectUri(request, env) {
  const override = getEnvString(env, 'GOOGLE_REDIRECT_URI');
  if (override) return override;
  return `${getOrigin(request)}/api/auth/google/callback`;
}

function oauthStateCookie(state) {
  return `${OAUTH_STATE_COOKIE}=${encodeURIComponent(state)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${OAUTH_STATE_MAX_AGE}`;
}

function clearOAuthStateCookie() {
  return `${OAUTH_STATE_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`;
}

function redirectWithCookies(location, cookies = []) {
  const headers = new Headers({ Location: location });
  cookies.forEach(c => headers.append('Set-Cookie', c));
  return new Response(null, { status: 302, headers });
}

function redirectError(request, code) {
  const origin = getOrigin(request);
  return redirectWithCookies(`${origin}/?auth_error=${encodeURIComponent(code)}`, [clearOAuthStateCookie()]);
}

export function startGoogleOAuth(request, env) {
  if (!isGoogleAuthConfigured(env)) {
    return redirectError(request, 'google_not_configured');
  }

  const state = crypto.randomUUID();
  const params = new URLSearchParams({
    client_id: getEnvString(env, 'GOOGLE_CLIENT_ID'),
    redirect_uri: getRedirectUri(request, env),
    response_type: 'code',
    scope: 'openid email profile',
    state,
    prompt: 'select_account',
    access_type: 'online',
  });

  return redirectWithCookies(`${GOOGLE_AUTH_URL}?${params}`, [oauthStateCookie(state)]);
}

async function fetchGoogleProfile(code, request, env) {
  const redirectUri = getRedirectUri(request, env);
  const tokenRes = await fetch(GOOGLE_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: getEnvString(env, 'GOOGLE_CLIENT_ID'),
      client_secret: getEnvString(env, 'GOOGLE_CLIENT_SECRET'),
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    }),
  });

  const tokenData = await tokenRes.json().catch(() => ({}));
  if (!tokenRes.ok || !tokenData.access_token) {
    throw new Error('token_exchange_failed');
  }

  const userRes = await fetch(GOOGLE_USERINFO_URL, {
    headers: { Authorization: `Bearer ${tokenData.access_token}` },
  });
  const profile = await userRes.json().catch(() => ({}));
  if (!userRes.ok || !profile.sub || !profile.email) {
    throw new Error('profile_fetch_failed');
  }

  return profile;
}

async function createSession(db, userId) {
  const sessionId = uuid();
  const created = nowSec();
  const expires = created + 30 * 86400;
  await db.prepare('INSERT INTO sessions (id, user_id, expires_at, created_at) VALUES (?, ?, ?, ?)')
    .bind(sessionId, userId, expires, created).run();
  return { sessionId, maxAge: 30 * 86400 };
}

async function upsertGoogleUser(db, profile) {
  const googleId = String(profile.sub);
  const email = normalizeEmail(profile.email);
  const displayName = normalizeDisplayName(profile.name || profile.given_name || email.split('@')[0]);

  const byGoogle = await db.prepare('SELECT * FROM users WHERE google_id = ?').bind(googleId).first();
  if (byGoogle) {
    if (byGoogle.status !== 'active') throw new Error('account_disabled');
    return {
      id: byGoogle.id,
      email: byGoogle.email,
      displayName: byGoogle.display_name,
    };
  }

  const byEmail = await db.prepare('SELECT * FROM users WHERE email = ?').bind(email).first();
  if (byEmail) {
    if (byEmail.status !== 'active') throw new Error('account_disabled');
    await db.prepare('UPDATE users SET google_id = ? WHERE id = ?').bind(googleId, byEmail.id).run();
    return {
      id: byEmail.id,
      email: byEmail.email,
      displayName: byEmail.display_name || displayName,
    };
  }

  const userId = uuid();
  const created = nowSec();
  const salt = randomSalt();
  await db.prepare(`
    INSERT INTO users (id, email, password_hash, password_salt, display_name, google_id, status, created_at)
    VALUES (?, ?, ?, ?, ?, ?, 'active', ?)
  `).bind(userId, email, OAUTH_ONLY_PASSWORD, salt, displayName, googleId, created).run();

  return { id: userId, email, displayName };
}

export async function handleGoogleCallback(request, env, ip) {
  if (!isGoogleAuthConfigured(env)) {
    return redirectError(request, 'google_not_configured');
  }

  const url = new URL(request.url);
  const err = url.searchParams.get('error');
  if (err) return redirectError(request, err);

  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const cookies = parseCookies(request);
  const savedState = cookies[OAUTH_STATE_COOKIE];

  if (!code || !state || !savedState || state !== savedState) {
    return redirectError(request, 'invalid_state');
  }

  const allowed = await checkRateLimit(env.DB, `google:${ip}`, 30, 3600);
  if (!allowed) return redirectError(request, 'rate_limited');

  try {
    const profile = await fetchGoogleProfile(code, request, env);
    const user = await upsertGoogleUser(env.DB, profile);
    const session = await createSession(env.DB, user.id);
    const origin = getOrigin(request);

    return redirectWithCookies(`${origin}/?auth=google_ok`, [
      clearOAuthStateCookie(),
      sessionCookieHeader(session.sessionId, session.maxAge),
    ]);
  } catch (e) {
    console.error('Google OAuth error', e);
    const code = e.message === 'account_disabled' ? 'account_disabled' : 'google_failed';
    return redirectError(request, code);
  }
}

export function isOAuthOnlyUser(row) {
  return row?.password_hash === OAUTH_ONLY_PASSWORD;
}