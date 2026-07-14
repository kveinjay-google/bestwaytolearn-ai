/* BestWayToLearn.AI — Account auth (Cloudflare Pages Functions + D1) */

const BwtlAuth = (function () {
  const API = '/api/auth';
  const PANELS = {
    login: 'auth-login-panel',
    register: 'auth-register-panel',
    account: 'auth-account-panel',
  };

  let user = null;
  let activePanel = null;
  let googleEnabled = false;
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

  async function api(path, options = {}) {
    const res = await fetch(`${API}${path}`, {
      credentials: 'include',
      cache: 'no-store',
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

  function mapAuthError(code) {
    const map = {
      google_not_configured: t('auth.errGoogleNotConfigured', 'Google 登录尚未配置，请使用邮箱登录'),
      invalid_state: t('auth.errInvalidState', '登录状态已过期，请重试'),
      google_failed: t('auth.errGoogleFailed', 'Google 登录失败，请重试'),
      account_disabled: t('auth.errAccountDisabled', '账号已被停用'),
      rate_limited: t('auth.errRateLimited', '操作过于频繁，请稍后再试'),
      access_denied: t('auth.errAccessDenied', '你已取消 Google 授权'),
    };
    return map[code] || t('auth.errGoogleFailed', 'Google 登录失败，请重试');
  }

  function toggleGoogleButtons(show) {
    googleEnabled = !!show;
    document.querySelectorAll('[data-auth-google-wrap]').forEach(el => {
      el.classList.toggle('hidden', !googleEnabled);
    });
  }

  async function loadProviders() {
    try {
      const { data } = await api('/providers', { method: 'GET' });
      toggleGoogleButtons(data.ok && data.providers?.google);
    } catch {
      toggleGoogleButtons(false);
    }
  }

  async function handleAuthRedirect() {
    const params = new URLSearchParams(location.search);
    const auth = params.get('auth');
    const err = params.get('auth_error');
    if (!auth && !err) return;

    const cleanUrl = location.pathname + location.hash;
    history.replaceState(null, '', cleanUrl);

    if (auth === 'google_ok') {
      await fetchMe();
      if (user && typeof saveUser === 'function') {
        saveUser({ name: user.displayName, welcomed: true });
      }
      if (user && typeof showTeacherMessage === 'function') {
        showTeacherMessage(t('auth.googleWelcome', '{name}，已通过 Google 登录成功！', { name: user.displayName }));
      }
      return;
    }

    if (err) {
      openLogin();
      showFormError('account-login-error', mapAuthError(err));
    }
  }

  function notify() {
    listeners.forEach(fn => {
      try { fn(user); } catch (e) { console.error(e); }
    });
    updateHeader();
    renderAccountPanel();
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

  function closeAllPanels() {
    Object.values(PANELS).forEach(id => {
      document.getElementById(id)?.classList.add('hidden');
    });
    document.getElementById('header-user')?.setAttribute('aria-expanded', 'false');
    activePanel = null;
    document.body.classList.remove('auth-overlay-open');
  }

  function openPanel(name) {
    if (user && (name === 'login' || name === 'register')) {
      openPanel('account');
      return;
    }
    closeAllPanels();
    const id = PANELS[name];
    const panel = document.getElementById(id);
    if (!panel) return;
    panel.classList.remove('hidden');
    activePanel = name;
    document.body.classList.add('auth-overlay-open');
    if (name === 'account') {
      document.getElementById('header-user')?.setAttribute('aria-expanded', 'true');
    }
    const focusTarget = panel.querySelector('input, button:not(.auth-modal-close)');
    setTimeout(() => focusTarget?.focus(), 120);
  }

  function showFormError(elId, msg) {
    const el = document.getElementById(elId);
    if (!el) return;
    el.textContent = msg || '';
    el.classList.toggle('hidden', !msg);
  }

  function clearFormErrors() {
    showFormError('account-login-error', '');
    showFormError('account-register-error', '');
  }

  function renderAccountPanel() {
    const nameEl = document.getElementById('account-display-name');
    const emailEl = document.getElementById('account-email');
    if (!nameEl || !emailEl) return;
    if (user) {
      nameEl.textContent = user.displayName || '';
      emailEl.textContent = user.email || '';
    } else {
      nameEl.textContent = '';
      emailEl.textContent = '';
    }
  }

  async function fetchMe() {
    const { data } = await api('/me');
    user = data.ok && data.user ? data.user : null;
    notify();
    return user;
  }

  async function register({ email, password, displayName }) {
    const { data } = await api('/register', {
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
    const { data } = await api('/login', {
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

  function bindPanels() {
    if (document.body.dataset.authPanelsBound) return;
    document.body.dataset.authPanelsBound = '1';

    ['login', 'register', 'account'].forEach(name => {
      const panel = document.getElementById(PANELS[name]);
      panel?.addEventListener('click', e => {
        if (e.target === panel) closeAllPanels();
      });
    });

    document.getElementById('auth-login-close')?.addEventListener('click', closeAllPanels);
    document.getElementById('auth-register-close')?.addEventListener('click', closeAllPanels);
    document.getElementById('auth-account-close')?.addEventListener('click', closeAllPanels);

    document.getElementById('auth-goto-register')?.addEventListener('click', () => {
      clearFormErrors();
      openPanel('register');
    });
    document.getElementById('auth-goto-login')?.addEventListener('click', () => {
      clearFormErrors();
      openPanel('login');
    });

    document.getElementById('account-login-form')?.addEventListener('submit', async e => {
      e.preventDefault();
      const form = e.target;
      const submit = form.querySelector('[type="submit"]');
      submit?.setAttribute('disabled', 'disabled');
      showFormError('account-login-error', '');
      const result = await login({
        email: form.email?.value?.trim(),
        password: form.password?.value || '',
      });
      submit?.removeAttribute('disabled');
      if (!result.ok) {
        showFormError('account-login-error', result.error);
        return;
      }
      form.reset();
      closeAllPanels();
      if (typeof LearningCore !== 'undefined') await LearningCore.pullFromServer();
      if (typeof updateAllProgress === 'function') updateAllProgress();
      if (typeof showTeacherMessage === 'function') {
        showTeacherMessage(t('auth.welcomeBack', '{name}，欢迎回来！学习进度已同步，可以留言交流。', { name: result.user.displayName }));
      }
    });

    document.getElementById('account-register-form')?.addEventListener('submit', async e => {
      e.preventDefault();
      const form = e.target;
      const submit = form.querySelector('[type="submit"]');
      submit?.setAttribute('disabled', 'disabled');
      showFormError('account-register-error', '');
      const result = await register({
        email: form.email?.value?.trim(),
        password: form.password?.value || '',
        displayName: form.displayName?.value?.trim(),
      });
      submit?.removeAttribute('disabled');
      if (!result.ok) {
        showFormError('account-register-error', result.error);
        return;
      }
      form.reset();
      closeAllPanels();
      if (typeof LearningCore !== 'undefined') await LearningCore.pullFromServer();
      if (typeof updateAllProgress === 'function') updateAllProgress();
      if (typeof showTeacherMessage === 'function') {
        showTeacherMessage(t('auth.registered', '{name}，注册成功！学习进度已云端同步，可以留言、参与社区讨论。', { name: result.user.displayName }));
      }
    });

    document.getElementById('account-logout')?.addEventListener('click', async () => {
      if (!confirm(t('auth.logoutConfirm', '确定退出登录吗？'))) return;
      await logout();
      closeAllPanels();
      if (typeof showTeacherMessage === 'function') {
        showTeacherMessage(t('auth.loggedOut', '已退出登录。课程内容仍可免费学习。'));
      }
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && activePanel) closeAllPanels();
    });
  }

  function bindHeaderAuth() {
    if (document.getElementById('header-auth')?.dataset.authBound) return;
    document.getElementById('header-auth')?.setAttribute('data-auth-bound', '1');

    document.getElementById('header-auth-login')?.addEventListener('click', () => openLogin());
    document.getElementById('header-auth-register')?.addEventListener('click', () => openRegister());

    document.getElementById('header-user')?.addEventListener('click', () => openPanel('account'));
  }

  function onChange(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  }

  function openLogin() {
    clearFormErrors();
    loadProviders();
    openPanel('login');
  }

  function openRegister() {
    clearFormErrors();
    loadProviders();
    openPanel('register');
  }

  function setPanelOpen(open) {
    if (open) openPanel(user ? 'account' : 'login');
    else closeAllPanels();
  }

  async function init() {
    bindPanels();
    bindHeaderAuth();
    await handleAuthRedirect();
    await loadProviders();
    try {
      if (!user) await fetchMe();
    } catch {
      user = null;
      notify();
    }
    if (typeof I18n !== 'undefined') {
      I18n.onChange(() => renderAccountPanel());
    }
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
    closeAllPanels,
  };
})();