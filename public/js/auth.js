/* BestWayToLearn.AI — Account auth (Cloudflare Pages Functions + D1) */

const BwtlAuth = (function () {
  const API = '/api/auth';
  let user = null;
  let ready = false;
  let panelTab = 'login';
  const listeners = new Set();

  function t(key, fallback, vars) {
    if (typeof I18n !== 'undefined') {
      const v = I18n.t(key, vars);
      if (v && v !== key) return v;
    }
    let out = fallback;
    if (vars) {
      Object.keys(vars).forEach(k => {
        out = out.replace(new RegExp(`\\{${k}\\}`, 'g'), vars[k]);
      });
    }
    return out;
  }

  function escapeHtml(text) {
    return String(text ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  async function api(path, options = {}) {
    const res = await fetch(`${API}${path}`, {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
      ...options,
    });
    let data = {};
    try {
      data = await res.json();
    } catch {
      data = { ok: false, error: t('auth.networkError', '网络错误，请稍后重试') };
    }
    return { res, data };
  }

  function notify() {
    listeners.forEach(fn => {
      try { fn(user); } catch (e) { console.error(e); }
    });
    updateHeader();
    renderPanel();
    if (typeof applyLocalePersonalization === 'function') applyLocalePersonalization();
  }

  function getUser() {
    return user;
  }

  function isLoggedIn() {
    return !!user;
  }

  function updateHeader() {
    const guestBar = document.getElementById('header-auth-guest');
    const userBtn = document.getElementById('header-user');
    const headerName = document.getElementById('header-user-name');

    if (user) {
      guestBar?.classList.add('hidden');
      userBtn?.classList.remove('hidden');
      if (headerName) headerName.textContent = user.displayName || '';
      return;
    }

    guestBar?.classList.remove('hidden');
    userBtn?.classList.add('hidden');
    if (headerName && typeof getUserName === 'function') {
      headerName.textContent = getUserName();
    }
  }

  function setPanelOpen(open) {
    const panel = document.getElementById('user-profile-panel');
    const headerBtn = document.getElementById('header-user');
    if (!panel) return;
    panel.classList.toggle('hidden', !open);
    headerBtn?.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) renderPanel();
  }

  function showFormError(elId, msg) {
    const el = document.getElementById(elId);
    if (!el) return;
    el.textContent = msg || '';
    el.classList.toggle('hidden', !msg);
  }

  function renderPanel() {
    const guest = document.getElementById('account-guest-view');
    const logged = document.getElementById('account-user-view');
    const title = document.getElementById('user-profile-title');
    if (!guest || !logged) return;

    const closeGuest = document.getElementById('profile-close-guest');
    if (user) {
      guest.hidden = true;
      logged.hidden = false;
      if (closeGuest) closeGuest.hidden = true;
      if (title) title.textContent = t('auth.accountTitle', '我的账号');
      const nameEl = document.getElementById('account-display-name');
      const emailEl = document.getElementById('account-email');
      if (nameEl) nameEl.textContent = user.displayName || '';
      if (emailEl) emailEl.textContent = user.email || '';
      return;
    }

    guest.hidden = false;
    logged.hidden = true;
    if (closeGuest) closeGuest.hidden = false;
    if (title) {
      title.textContent = panelTab === 'register'
        ? t('auth.registerTitle', '注册账号')
        : t('auth.loginTitle', '登录账号');
    }

    const loginForm = document.getElementById('account-login-form');
    const registerForm = document.getElementById('account-register-form');
    if (loginForm) loginForm.hidden = panelTab !== 'login';
    if (registerForm) registerForm.hidden = panelTab !== 'register';

    document.querySelectorAll('.account-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === panelTab);
      btn.setAttribute('aria-selected', btn.dataset.tab === panelTab ? 'true' : 'false');
    });
  }

  async function fetchMe() {
    const { data } = await api('/me');
    if (data.ok && data.user) {
      user = data.user;
    } else {
      user = null;
    }
    ready = true;
    notify();
    return user;
  }

  async function register({ email, password, displayName }) {
    const { res, data } = await api('/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, displayName }),
    });
    if (!data.ok) {
      return { ok: false, error: data.error || t('auth.registerFailed', '注册失败') };
    }
    user = data.user;
    notify();
    if (typeof saveUser === 'function') {
      saveUser({ name: user.displayName, welcomed: true });
    }
    return { ok: true, user };
  }

  async function login({ email, password }) {
    const { res, data } = await api('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    if (!data.ok) {
      return { ok: false, error: data.error || t('auth.loginFailed', '登录失败') };
    }
    user = data.user;
    notify();
    if (typeof saveUser === 'function') {
      saveUser({ name: user.displayName, welcomed: true });
    }
    return { ok: true, user };
  }

  async function logout() {
    await api('/logout', { method: 'POST', body: '{}' });
    user = null;
    notify();
    return { ok: true };
  }

  function bindPanel() {
    const panel = document.getElementById('user-profile-panel');
    if (!panel || panel.dataset.authBound) return;
    panel.dataset.authBound = '1';

    document.getElementById('profile-close')?.addEventListener('click', () => setPanelOpen(false));
    document.getElementById('profile-close-guest')?.addEventListener('click', () => setPanelOpen(false));
    panel.addEventListener('click', e => {
      if (e.target === panel) setPanelOpen(false);
    });

    document.querySelectorAll('.account-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        panelTab = btn.dataset.tab || 'login';
        showFormError('account-login-error', '');
        showFormError('account-register-error', '');
        renderPanel();
      });
    });

    document.getElementById('account-login-form')?.addEventListener('submit', async e => {
      e.preventDefault();
      const form = e.target;
      const submit = form.querySelector('[type="submit"]');
      submit?.setAttribute('disabled', 'disabled');
      showFormError('account-login-error', '');
      const email = form.email?.value?.trim();
      const password = form.password?.value || '';
      const result = await login({ email, password });
      submit?.removeAttribute('disabled');
      if (!result.ok) {
        showFormError('account-login-error', result.error);
        return;
      }
      setPanelOpen(false);
      if (typeof showTeacherMessage === 'function') {
        showTeacherMessage(t('auth.welcomeBack', '{name}，欢迎回来！登录后可以留言交流。', { name: result.user.displayName }));
      }
    });

    document.getElementById('account-register-form')?.addEventListener('submit', async e => {
      e.preventDefault();
      const form = e.target;
      const submit = form.querySelector('[type="submit"]');
      submit?.setAttribute('disabled', 'disabled');
      showFormError('account-register-error', '');
      const email = form.email?.value?.trim();
      const password = form.password?.value || '';
      const displayName = form.displayName?.value?.trim();
      const result = await register({ email, password, displayName });
      submit?.removeAttribute('disabled');
      if (!result.ok) {
        showFormError('account-register-error', result.error);
        return;
      }
      setPanelOpen(false);
      if (typeof showTeacherMessage === 'function') {
        showTeacherMessage(t('auth.registered', '{name}，注册成功！现在可以留言、参与社区讨论。', { name: result.user.displayName }));
      }
    });

    document.getElementById('account-logout')?.addEventListener('click', async () => {
      if (!confirm(t('auth.logoutConfirm', '确定退出登录吗？'))) return;
      await logout();
      if (typeof showTeacherMessage === 'function') {
        showTeacherMessage(t('auth.loggedOut', '已退出登录。课程内容仍可免费学习。'));
      }
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !panel.classList.contains('hidden')) setPanelOpen(false);
    });
  }

  function onChange(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  }

  function openRegister() {
    panelTab = 'register';
    setPanelOpen(true);
  }

  function bindHeaderAuth() {
    if (document.getElementById('header-auth')?.dataset.authBound) return;
    document.getElementById('header-auth')?.setAttribute('data-auth-bound', '1');

    document.getElementById('header-auth-login')?.addEventListener('click', () => openLogin());
    document.getElementById('header-auth-register')?.addEventListener('click', () => openRegister());

    const headerBtn = document.getElementById('header-user');
    headerBtn?.addEventListener('click', () => setPanelOpen(true));
  }

  async function init() {
    bindPanel();
    bindHeaderAuth();
    try {
      await fetchMe();
    } catch {
      ready = true;
      user = null;
      notify();
    }
    if (typeof I18n !== 'undefined') {
      I18n.onChange(() => renderPanel());
    }
  }

  function openLogin() {
    panelTab = 'login';
    setPanelOpen(true);
  }

  return {
    init,
    getUser,
    isLoggedIn,
    fetchMe,
    register,
    login,
    logout,
    onChange,
    openLogin,
    openRegister,
    setPanelOpen,
    escapeHtml,
  };
})();