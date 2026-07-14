/* BestWayToLearn.AI — Admin dashboard */
const BwtlAdmin = (function () {
  const ROLE_LABELS = {
    general: '通用',
    developer: '开发者',
    marketing: '内容运营',
    ecommerce: '跨境电商',
  };

  let currentUser = null;
  let dashboardData = null;

  async function api(path) {
    const res = await fetch(`/api/admin/${path}`, { credentials: 'include', cache: 'no-store' });
    return res.json();
  }

  async function authApi(path, options = {}) {
    const res = await fetch(`/api/auth/${path}`, {
      credentials: 'include',
      cache: 'no-store',
      headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
      ...options,
    });
    return res.json();
  }

  function $(id) { return document.getElementById(id); }

  function fmtTime(ts) {
    if (!ts) return '—';
    const d = new Date(ts * 1000);
    return d.toLocaleString('zh-CN', {
      month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
    });
  }

  function fmtDate(ts) {
    if (!ts) return '—';
    return new Date(ts * 1000).toLocaleDateString('zh-CN');
  }

  function show(el) { el?.classList.remove('admin-hidden'); }
  function hide(el) { el?.classList.add('admin-hidden'); }

  function renderBarChart(container, items, { labelKey = 'label', valueKey = 'views', maxItems = 12 } = {}) {
    if (!container) return;
    const sorted = [...items].sort((a, b) => (b[valueKey] || 0) - (a[valueKey] || 0)).slice(0, maxItems);
    const max = sorted[0]?.[valueKey] || 1;
    if (!sorted.length) {
      container.innerHTML = '<p class="admin-loading">暂无数据</p>';
      return;
    }
    container.innerHTML = sorted.map(item => {
      const val = item[valueKey] || 0;
      const pct = Math.round((val / max) * 100);
      const label = item[labelKey] || item.hash || '—';
      return `<div class="admin-bar-row">
        <span class="admin-bar-label" title="${label}">${label}</span>
        <div class="admin-bar-track"><div class="admin-bar-fill" style="width:${pct}%"></div></div>
        <span class="admin-bar-val">${val}</span>
      </div>`;
    }).join('');
  }

  function renderOverview(data) {
    const o = data.overview;
    $('admin-stats').innerHTML = `
      <div class="admin-stat"><span class="admin-stat-num">${o.totalUsers}</span><span class="admin-stat-label">注册用户</span></div>
      <div class="admin-stat"><span class="admin-stat-num">${o.usersWeek}</span><span class="admin-stat-label">7 日新增</span></div>
      <div class="admin-stat"><span class="admin-stat-num">${o.sessionsWeek}</span><span class="admin-stat-label">7 日访问会话</span></div>
      <div class="admin-stat"><span class="admin-stat-num">${o.sessionsMonth}</span><span class="admin-stat-label">30 日访问会话</span></div>
      <div class="admin-stat"><span class="admin-stat-num">${o.totalProgress}</span><span class="admin-stat-label">云端进度</span></div>
      <div class="admin-stat"><span class="admin-stat-num">${o.graduated}</span><span class="admin-stat-label">已结业用户</span></div>
      <div class="admin-stat"><span class="admin-stat-num">${o.avgQuizScore || '—'}</span><span class="admin-stat-label">平均测验分</span></div>
      <div class="admin-stat"><span class="admin-stat-num">${o.totalComments}</span><span class="admin-stat-label">留言总数</span></div>`;

    renderBarChart($('admin-top-pages'), data.topPages, { labelKey: 'label', valueKey: 'views' });

    const regEl = $('admin-reg-chart');
    if (regEl) {
      const regs = [...(data.registrationsByDay || [])].reverse();
      renderBarChart(regEl, regs.map(r => ({ label: r.day, views: r.count })), { labelKey: 'label', valueKey: 'views' });
    }

    const eventsEl = $('admin-event-breakdown');
    if (eventsEl) {
      renderBarChart(eventsEl, (data.eventBreakdown || []).map(e => ({
        label: e.event_name,
        views: e.count,
      })), { labelKey: 'label', valueKey: 'views' });
    }

    const rolesEl = $('admin-role-breakdown');
    if (rolesEl && o.roleBreakdown) {
      renderBarChart(rolesEl, Object.entries(o.roleBreakdown).map(([k, v]) => ({
        label: ROLE_LABELS[k] || k,
        views: v,
      })), { labelKey: 'label', valueKey: 'views' });
    }
  }

  async function loadUsers() {
    const el = $('admin-users-table');
    el.innerHTML = '<p class="admin-loading">加载中…</p>';
    const data = await api('users?limit=100');
    if (!data.ok) { el.innerHTML = '<p class="admin-error">加载失败</p>'; return; }
    el.innerHTML = `<div class="admin-table-wrap"><table class="admin-table">
      <thead><tr>
        <th>昵称</th><th>邮箱</th><th>注册时间</th><th>登录方式</th>
        <th>学习天</th><th>测验</th><th>角色</th><th>结业</th><th>留言</th>
      </tr></thead>
      <tbody>${data.users.map(u => {
        const p = u.progress;
        return `<tr>
          <td>${u.displayName}</td>
          <td>${u.email}</td>
          <td>${fmtDate(u.createdAt)}</td>
          <td>${u.google ? 'Google' : '邮箱'}</td>
          <td>${p ? p.completedDays : '—'}/7</td>
          <td>${p?.quizBestScore || '—'}</td>
          <td>${p ? (ROLE_LABELS[p.role] || p.role) : '—'}</td>
          <td>${p?.graduated ? '<span class="admin-badge">已结业</span>' : '—'}</td>
          <td>${u.commentCount}</td>
        </tr>`;
      }).join('')}</tbody></table></div>
      <p style="color:var(--adm-muted);font-size:0.8rem;margin-top:0.5rem">共 ${data.total} 用户</p>`;
  }

  async function loadAnalytics() {
    const days = parseInt($('admin-analytics-days')?.value || '7', 10);
    const data = await api(`analytics?days=${days}`);
    if (!data.ok) return;

    renderBarChart($('admin-sessions-chart'), (data.dailySessions || []).map(d => ({
      label: d.day?.slice(5) || d.day,
      views: d.sessions,
    })), { labelKey: 'label', valueKey: 'views', maxItems: 30 });

    renderBarChart($('admin-lang-chart'), (data.languages || []).map(l => ({
      label: l.lang,
      views: l.count,
    })), { labelKey: 'label', valueKey: 'views' });

    const el = $('admin-events-table');
    el.innerHTML = `<div class="admin-table-wrap"><table class="admin-table">
      <thead><tr><th>时间</th><th>事件</th><th>详情</th><th>用户</th></tr></thead>
      <tbody>${(data.recentEvents || []).map(e => {
        let detail = '';
        if (e.name === 'navigate' || e.name === 'page_view') {
          detail = e.payload.pageLabel || e.payload.page || e.payload.hash || '';
        } else if (e.name === 'quiz_complete') {
          detail = `得分 ${e.payload.score}/${e.payload.total}`;
        } else if (e.name === 'module_complete') {
          detail = `${e.payload.type}: ${e.payload.id}`;
        } else {
          detail = JSON.stringify(e.payload).slice(0, 80);
        }
        return `<tr>
          <td>${fmtTime(e.createdAt)}</td>
          <td>${e.name}</td>
          <td>${detail}</td>
          <td>${e.user?.displayName || '匿名'}</td>
        </tr>`;
      }).join('')}</tbody></table></div>`;
  }

  async function loadProgress() {
    const el = $('admin-progress-table');
    el.innerHTML = '<p class="admin-loading">加载中…</p>';
    const data = await api('progress');
    if (!data.ok) { el.innerHTML = '<p class="admin-error">加载失败</p>'; return; }
    el.innerHTML = `<div class="admin-table-wrap"><table class="admin-table">
      <thead><tr>
        <th>用户</th><th>邮箱</th><th>完成天数</th><th>测验最佳</th>
        <th>错题数</th><th>模块进度</th><th>30天打卡</th><th>角色</th><th>更新</th>
      </tr></thead>
      <tbody>${(data.items || []).map(it => {
        const s = it.summary || {};
        return `<tr>
          <td>${it.displayName}</td>
          <td>${it.email}</td>
          <td>${s.completedDays || 0}/7</td>
          <td>${s.quizBestScore || '—'}</td>
          <td>${s.wrongCount || 0}</td>
          <td>${s.moduleCount || 0}</td>
          <td>${s.plan30Days || 0} 天</td>
          <td>${ROLE_LABELS[s.role] || s.role || '—'}</td>
          <td>${fmtTime(it.updatedAt)}</td>
        </tr>`;
      }).join('')}</tbody></table></div>`;
  }

  async function loadDashboard() {
    $('admin-stats').innerHTML = '<p class="admin-loading">加载中…</p>';
    dashboardData = await api('dashboard');
    if (!dashboardData.ok) return;
    renderOverview(dashboardData);
  }

  function switchTab(tabId) {
    document.querySelectorAll('.admin-tab').forEach(t => {
      t.classList.toggle('is-active', t.dataset.tab === tabId);
    });
    document.querySelectorAll('.admin-panel').forEach(p => {
      p.classList.toggle('is-active', p.dataset.panel === tabId);
    });
    if (tabId === 'users') loadUsers();
    if (tabId === 'analytics') loadAnalytics();
    if (tabId === 'progress') loadProgress();
  }

  async function checkAccess() {
    const me = await api('me');
    if (!me.user) {
      hide($('admin-app'));
      show($('admin-login'));
      hide($('admin-forbidden'));
      return;
    }
    currentUser = me.user;
    if (!me.isAdmin) {
      hide($('admin-login'));
      hide($('admin-app'));
      show($('admin-forbidden'));
      $('admin-forbidden-msg').textContent = `${me.user.email} 无管理员权限`;
      return;
    }
    hide($('admin-login'));
    hide($('admin-forbidden'));
    show($('admin-app'));
    $('admin-user-label').textContent = me.user.displayName || me.user.email;
    await loadDashboard();
  }

  function bindEvents() {
    $('admin-login-form')?.addEventListener('submit', async e => {
      e.preventDefault();
      const form = e.target;
      const err = $('admin-login-error');
      err.textContent = '';
      const result = await authApi('login', {
        method: 'POST',
        body: JSON.stringify({
          email: form.email.value.trim(),
          password: form.password.value,
        }),
      });
      if (!result.ok) {
        err.textContent = result.error || '登录失败';
        return;
      }
      await checkAccess();
    });

    $('admin-logout')?.addEventListener('click', async () => {
      await authApi('logout', { method: 'POST', body: '{}' });
      currentUser = null;
      await checkAccess();
    });

    $('admin-refresh')?.addEventListener('click', () => {
      const active = document.querySelector('.admin-tab.is-active')?.dataset.tab || 'overview';
      if (active === 'overview') loadDashboard();
      else switchTab(active);
    });

    document.querySelectorAll('.admin-tab').forEach(tab => {
      tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });

    $('admin-analytics-days')?.addEventListener('change', loadAnalytics);
  }

  function init() {
    bindEvents();
    checkAccess();
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', () => BwtlAdmin.init());