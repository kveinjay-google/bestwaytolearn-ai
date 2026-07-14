import { json, nowSec } from './utils.js';
import { getSessionUser } from './auth.js';

const PAGE_LABELS = {
  '': '首页',
  hero: '首页',
  roadmap: '学习地图',
  'phase-learn': '阶段·认知',
  'phase-tools': '阶段·工具',
  'phase-practice': '阶段·实战',
  'phase-validate': '阶段·检验',
  'ai-overview': 'AI 全景入门',
  fundamentals: 'AI 原理',
  knowledge: 'AI 知识库',
  apps: '主流应用',
  'prompt-lab': '模拟操作',
  'hands-on': '真实软件实操',
  practice: '实战场景',
  quiz: '知识测验',
  graduation: '结业报告',
  'ai-briefing': 'AI 时讯',
  'latest-tutorials': '最新教程',
  monetize: '变现指南',
  devices: '设备选购',
  'ai-nav': 'AI 导航',
  'ai-skills-nav': 'SKILL 推荐',
  'ai-mcp-nav': 'MCP 导航',
  'prompt-examples': '提示词示例',
};

function parseAdminEmails(env) {
  const raw = String(env.ADMIN_EMAILS || '').trim();
  if (!raw) return [];
  return raw.split(',').map(e => e.trim().toLowerCase()).filter(Boolean);
}

export function isAdminUser(env, user) {
  if (!user?.email) return false;
  const admins = parseAdminEmails(env);
  return admins.includes(user.email.toLowerCase());
}

export async function requireAdmin(env, request) {
  const user = await getSessionUser(env.DB, request);
  if (!user) return { error: json({ ok: false, error: '请先登录' }, 401) };
  if (!isAdminUser(env, user)) {
    return { error: json({ ok: false, error: '无管理员权限' }, 403) };
  }
  return { user };
}

function pageLabel(hash) {
  if (!hash) return '首页';
  const key = String(hash).replace(/^#/, '').split('-section')[0].split('/')[0];
  if (key.startsWith('ai-briefing-')) return 'AI 时讯·详情';
  if (key.startsWith('latest-tutorial-')) return '最新教程·详情';
  return PAGE_LABELS[key] || key || '其他';
}

function summarizeProgress(data) {
  if (!data || typeof data !== 'object') return null;
  const modules = data.modules || {};
  let moduleCount = 0;
  Object.values(modules).forEach(arr => {
    if (Array.isArray(arr)) moduleCount += arr.length;
  });
  return {
    completedDays: (data.completedDays || []).length,
    quizBestScore: data.quizBestScore || 0,
    role: data.role || 'general',
    graduated: Boolean(data.graduatedAt),
    graduatedAt: data.graduatedAt || null,
    moduleCount,
    wrongCount: Object.keys(data.quizWrong || {}).filter(k => !k.includes(':')).length,
    plan30Days: Object.keys(data.plan30Daily || {}).length,
  };
}

export async function handleAdminMe(env, request) {
  const user = await getSessionUser(env.DB, request);
  if (!user) return json({ ok: true, user: null, isAdmin: false });
  return json({
    ok: true,
    user: { id: user.id, email: user.email, displayName: user.displayName },
    isAdmin: isAdminUser(env, user),
  });
}

export async function handleAdminDashboard(env, request) {
  const auth = await requireAdmin(env, request);
  if (auth.error) return auth.error;

  const now = nowSec();
  const day = 86400;
  const week = now - 7 * day;
  const month = now - 30 * day;

  const [
    totalUsers,
    usersWeek,
    usersMonth,
    totalComments,
    totalProgress,
    totalEvents,
    sessionsWeek,
    sessionsMonth,
    eventsWeek,
    registrationsByDay,
    topPages,
    eventBreakdown,
    progressStats,
  ] = await Promise.all([
    env.DB.prepare('SELECT COUNT(*) AS n FROM users').first(),
    env.DB.prepare('SELECT COUNT(*) AS n FROM users WHERE created_at >= ?').bind(week).first(),
    env.DB.prepare('SELECT COUNT(*) AS n FROM users WHERE created_at >= ?').bind(month).first(),
    env.DB.prepare('SELECT COUNT(*) AS n FROM comments').first(),
    env.DB.prepare('SELECT COUNT(*) AS n FROM user_progress').first(),
    env.DB.prepare('SELECT COUNT(*) AS n FROM analytics_events').first(),
    env.DB.prepare(`
      SELECT COUNT(DISTINCT session_id) AS n FROM analytics_events
      WHERE event_name = 'session_start' AND created_at >= ?
    `).bind(week).first(),
    env.DB.prepare(`
      SELECT COUNT(DISTINCT session_id) AS n FROM analytics_events
      WHERE event_name = 'session_start' AND created_at >= ?
    `).bind(month).first(),
    env.DB.prepare('SELECT COUNT(*) AS n FROM analytics_events WHERE created_at >= ?').bind(week).first(),
    env.DB.prepare(`
      SELECT date(created_at, 'unixepoch') AS day, COUNT(*) AS count
      FROM users WHERE created_at >= ?
      GROUP BY day ORDER BY day DESC LIMIT 14
    `).bind(month).all(),
    env.DB.prepare(`
      SELECT payload, COUNT(*) AS views
      FROM analytics_events
      WHERE event_name IN ('navigate', 'page_view') AND created_at >= ?
      GROUP BY payload ORDER BY views DESC LIMIT 30
    `).bind(week).all(),
    env.DB.prepare(`
      SELECT event_name, COUNT(*) AS count
      FROM analytics_events WHERE created_at >= ?
      GROUP BY event_name ORDER BY count DESC
    `).bind(week).all(),
    env.DB.prepare(`
      SELECT data FROM user_progress
    `).all(),
  ]);

  let graduated = 0;
  let avgQuiz = 0;
  let quizCount = 0;
  let roleBreakdown = {};
  (progressStats.results || []).forEach(row => {
    let data;
    try { data = JSON.parse(row.data); } catch { return; }
    const s = summarizeProgress(data);
    if (!s) return;
    if (s.graduated) graduated += 1;
    if (s.quizBestScore > 0) {
      avgQuiz += s.quizBestScore;
      quizCount += 1;
    }
    roleBreakdown[s.role] = (roleBreakdown[s.role] || 0) + 1;
  });

  const pages = (topPages.results || []).map(row => {
    let hash = '';
    try {
      const p = JSON.parse(row.payload || '{}');
      hash = p.hash || p.page || '';
    } catch { /* */ }
    return { hash, label: pageLabel(hash), views: row.views };
  });

  return json({
    ok: true,
    overview: {
      totalUsers: totalUsers?.n || 0,
      usersWeek: usersWeek?.n || 0,
      usersMonth: usersMonth?.n || 0,
      totalComments: totalComments?.n || 0,
      totalProgress: totalProgress?.n || 0,
      totalEvents: totalEvents?.n || 0,
      sessionsWeek: sessionsWeek?.n || 0,
      sessionsMonth: sessionsMonth?.n || 0,
      eventsWeek: eventsWeek?.n || 0,
      graduated,
      avgQuizScore: quizCount ? Math.round(avgQuiz / quizCount) : 0,
      roleBreakdown,
    },
    registrationsByDay: registrationsByDay.results || [],
    topPages: pages,
    eventBreakdown: eventBreakdown.results || [],
  });
}

export async function handleAdminUsers(env, request) {
  const auth = await requireAdmin(env, request);
  if (auth.error) return auth.error;

  const url = new URL(request.url);
  const limit = Math.min(200, Math.max(1, parseInt(url.searchParams.get('limit') || '50', 10)));
  const offset = Math.max(0, parseInt(url.searchParams.get('offset') || '0', 10));

  const rows = await env.DB.prepare(`
    SELECT u.id, u.email, u.display_name, u.status,
           u.google_id IS NOT NULL AS google,
           u.created_at,
           up.updated_at AS progress_updated,
           up.data AS progress_data,
           (SELECT COUNT(*) FROM comments c WHERE c.user_id = u.id) AS comment_count
    FROM users u
    LEFT JOIN user_progress up ON up.user_id = u.id
    ORDER BY u.created_at DESC
    LIMIT ? OFFSET ?
  `).bind(limit, offset).all();

  const total = await env.DB.prepare('SELECT COUNT(*) AS n FROM users').first();

  const users = (rows.results || []).map(r => {
    let progress = null;
    try {
      progress = summarizeProgress(JSON.parse(r.progress_data || 'null'));
    } catch { /* */ }
    return {
      id: r.id,
      email: r.email,
      displayName: r.display_name,
      status: r.status,
      google: Boolean(r.google),
      createdAt: r.created_at,
      progressUpdated: r.progress_updated || null,
      progress,
      commentCount: r.comment_count || 0,
    };
  });

  return json({ ok: true, users, total: total?.n || 0, limit, offset });
}

export async function handleAdminAnalytics(env, request) {
  const auth = await requireAdmin(env, request);
  if (auth.error) return auth.error;

  const url = new URL(request.url);
  const days = Math.min(90, Math.max(1, parseInt(url.searchParams.get('days') || '7', 10)));
  const since = nowSec() - days * 86400;

  const [dailySessions, dailyEvents, recentEvents, langBreakdown] = await Promise.all([
    env.DB.prepare(`
      SELECT date(created_at, 'unixepoch') AS day, COUNT(DISTINCT session_id) AS sessions
      FROM analytics_events
      WHERE event_name = 'session_start' AND created_at >= ?
      GROUP BY day ORDER BY day ASC
    `).bind(since).all(),
    env.DB.prepare(`
      SELECT date(created_at, 'unixepoch') AS day, COUNT(*) AS events
      FROM analytics_events WHERE created_at >= ?
      GROUP BY day ORDER BY day ASC
    `).bind(since).all(),
    env.DB.prepare(`
      SELECT e.id, e.event_name, e.payload, e.session_id, e.created_at,
             u.display_name, u.email
      FROM analytics_events e
      LEFT JOIN users u ON u.id = e.user_id
      WHERE e.created_at >= ?
      ORDER BY e.created_at DESC LIMIT 100
    `).bind(since).all(),
    env.DB.prepare(`
      SELECT payload, COUNT(*) AS count
      FROM analytics_events
      WHERE event_name = 'session_start' AND created_at >= ?
      GROUP BY payload ORDER BY count DESC LIMIT 20
    `).bind(since).all(),
  ]);

  const events = (recentEvents.results || []).map(e => {
    let payload = {};
    try { payload = JSON.parse(e.payload || '{}'); } catch { /* */ }
    if (e.event_name === 'navigate' || e.event_name === 'page_view') {
      payload.pageLabel = pageLabel(payload.hash || payload.page);
    }
    return {
      id: e.id,
      name: e.event_name,
      payload,
      sessionId: e.session_id,
      createdAt: e.created_at,
      user: e.display_name ? { displayName: e.display_name, email: e.email } : null,
    };
  });

  const languages = (langBreakdown.results || []).map(r => {
    let lang = 'unknown';
    try { lang = JSON.parse(r.payload || '{}').lang || 'unknown'; } catch { /* */ }
    return { lang, count: r.count };
  });

  return json({
    ok: true,
    days,
    dailySessions: dailySessions.results || [],
    dailyEvents: dailyEvents.results || [],
    recentEvents: events,
    languages,
  });
}

export async function handleAdminProgress(env, request) {
  const auth = await requireAdmin(env, request);
  if (auth.error) return auth.error;

  const rows = await env.DB.prepare(`
    SELECT up.user_id, up.data, up.updated_at,
           u.email, u.display_name, u.created_at AS user_created
    FROM user_progress up
    JOIN users u ON u.id = up.user_id
    ORDER BY up.updated_at DESC
    LIMIT 200
  `).all();

  const items = (rows.results || []).map(r => {
    let summary = null;
    try { summary = summarizeProgress(JSON.parse(r.data || '{}')); } catch { /* */ }
    return {
      userId: r.user_id,
      email: r.email,
      displayName: r.display_name,
      userCreated: r.user_created,
      updatedAt: r.updated_at,
      summary,
    };
  });

  return json({ ok: true, items });
}