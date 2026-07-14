import { json, nowSec, uuid } from './utils.js';
import { getSessionUser } from './auth.js';

const MAX_PROGRESS_BYTES = 512_000;
const MAX_ANALYTICS_BATCH = 40;

export async function handleGetProgress(db, request) {
  const user = await getSessionUser(db, request);
  if (!user) return json({ ok: false, error: '请先登录' }, 401);

  const row = await db.prepare(
    'SELECT data, updated_at FROM user_progress WHERE user_id = ?',
  ).bind(user.id).first();

  if (!row) return json({ ok: true, progress: null, updatedAt: 0 });

  let progress = null;
  try {
    progress = JSON.parse(row.data);
  } catch {
    progress = null;
  }

  return json({ ok: true, progress, updatedAt: row.updated_at });
}

export async function handlePutProgress(db, request) {
  const user = await getSessionUser(db, request);
  if (!user) return json({ ok: false, error: '请先登录' }, 401);

  let body = {};
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: '无效的 JSON' }, 400);
  }

  const incoming = body.progress;
  if (!incoming || typeof incoming !== 'object') {
    return json({ ok: false, error: 'progress 无效' }, 400);
  }

  const serialized = JSON.stringify(incoming);
  if (serialized.length > MAX_PROGRESS_BYTES) {
    return json({ ok: false, error: '进度数据过大' }, 413);
  }

  const updatedAt = nowSec();
  const clientUpdatedAt = Number(body.updatedAt || 0);

  const existing = await db.prepare(
    'SELECT data, updated_at FROM user_progress WHERE user_id = ?',
  ).bind(user.id).first();

  if (existing && clientUpdatedAt > 0 && existing.updated_at > clientUpdatedAt) {
    let serverProgress = null;
    try {
      serverProgress = JSON.parse(existing.data);
    } catch {
      serverProgress = null;
    }
    return json({
      ok: true,
      merged: false,
      progress: serverProgress,
      updatedAt: existing.updated_at,
      message: 'server_newer',
    });
  }

  await db.prepare(`
    INSERT INTO user_progress (user_id, data, updated_at)
    VALUES (?, ?, ?)
    ON CONFLICT(user_id) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at
  `).bind(user.id, serialized, updatedAt).run();

  return json({ ok: true, merged: true, updatedAt });
}

export async function handlePostAnalytics(db, request, ip) {
  let body = {};
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: '无效的 JSON' }, 400);
  }

  const events = Array.isArray(body.events) ? body.events.slice(0, MAX_ANALYTICS_BATCH) : [];
  if (!events.length) return json({ ok: true, stored: 0 });

  const user = await getSessionUser(db, request);
  const sessionId = String(body.sessionId || 'anon').slice(0, 64);
  const created = nowSec();

  const stmt = db.prepare(`
    INSERT INTO analytics_events (id, user_id, session_id, event_name, payload, created_at)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  const batch = [];
  for (const ev of events) {
    const name = String(ev?.name || '').slice(0, 64);
    if (!name) continue;
    const payload = ev?.payload != null ? JSON.stringify(ev.payload).slice(0, 4000) : null;
    batch.push(stmt.bind(uuid(), user?.id || null, sessionId, name, payload, created));
  }

  if (batch.length) await db.batch(batch);

  return json({ ok: true, stored: batch.length });
}