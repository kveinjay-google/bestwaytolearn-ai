/* BestWayToLearn.AI — Comments with spam filtering (server-side) */

const BwtlComments = (function () {
  const API = '/api/comments';
  const mounts = new Map();

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

  function formatTime(ts) {
    if (!ts) return '';
    const d = new Date(ts * 1000);
    try {
      const loc = typeof I18n !== 'undefined' ? I18n.getDateLocale?.() : 'zh-CN';
      return d.toLocaleString(loc || 'zh-CN', {
        year: 'numeric', month: 'short', day: 'numeric',
        hour: '2-digit', minute: '2-digit',
      });
    } catch {
      return d.toISOString().slice(0, 16).replace('T', ' ');
    }
  }

  async function fetchComments(target) {
    const res = await fetch(`${API}?target=${encodeURIComponent(target)}`, { credentials: 'include' });
    const data = await res.json().catch(() => ({ ok: false, comments: [] }));
    if (!data.ok) return [];
    return data.comments || [];
  }

  async function postComment(target, body, honeypot = '') {
    const res = await fetch(API, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ target, body, _hp_url: honeypot }),
    });
    const data = await res.json().catch(() => ({ ok: false, error: t('comments.networkError', '网络错误，请稍后重试') }));
    return { res, data };
  }

  function renderList(container, comments) {
    const list = container.querySelector('.comments-list');
    if (!list) return;

    if (!comments.length) {
      list.innerHTML = `<li class="comments-empty">${escapeHtml(t('comments.empty', '还没有留言，来做第一个吧！'))}</li>`;
      return;
    }

    list.innerHTML = comments.map(c => `
      <li class="comments-item">
        <div class="comments-item-head">
          <span class="comments-author">${escapeHtml(c.displayName || t('comments.anonymous', '学员'))}</span>
          <time class="comments-time" datetime="${c.createdAt}">${escapeHtml(formatTime(c.createdAt))}</time>
        </div>
        <p class="comments-body">${escapeHtml(c.body)}</p>
      </li>
    `).join('');
  }

  function buildShell(target, { compact = false } = {}) {
    const loggedIn = typeof BwtlAuth !== 'undefined' && BwtlAuth.isLoggedIn();
    const user = typeof BwtlAuth !== 'undefined' ? BwtlAuth.getUser() : null;

    const sectionTitle = compact
      ? `<h4 class="comments-section-title">${escapeHtml(t('comments.sectionTitle', '读者留言'))}</h4>`
      : '';

    return `
      <div class="comments-panel${compact ? ' comments-panel--compact' : ''}" data-target="${escapeHtml(target)}">
        ${sectionTitle}
        <div class="comments-compose${loggedIn ? '' : ' comments-compose--locked'}">
          ${loggedIn ? `
            <label class="sr-only" for="comments-input-${escapeHtml(target)}">${escapeHtml(t('comments.placeholder', '写下你的想法…'))}</label>
            <textarea id="comments-input-${escapeHtml(target)}" class="comments-input" rows="3" maxlength="800" placeholder="${escapeHtml(t('comments.placeholder', '写下你的想法…'))}"></textarea>
            <input type="text" class="comments-hp" name="_hp_url" tabindex="-1" autocomplete="off" aria-hidden="true">
            <div class="comments-compose-actions">
              <p class="comments-hint">${escapeHtml(t('comments.hint', '请勿发布广告、外链或重复内容，留言将自动审核。'))}</p>
              <button type="button" class="btn btn-primary comments-submit">${escapeHtml(t('comments.submit', '发表留言'))}</button>
            </div>
            <p class="comments-status hidden" role="status"></p>
          ` : `
            <p class="comments-login-prompt">${escapeHtml(t('comments.loginPrompt', '登录后即可留言交流。'))}</p>
            <button type="button" class="btn btn-primary comments-login-btn">${escapeHtml(t('comments.loginBtn', '登录 / 注册'))}</button>
          `}
        </div>
        <ul class="comments-list" aria-live="polite"></ul>
      </div>`;
  }

  async function refresh(container) {
    const panel = container.querySelector('.comments-panel');
    if (!panel) return;
    const target = panel.dataset.target;
    if (!target) return;
    try {
      const comments = await fetchComments(target);
      renderList(container, comments);
    } catch {
      const list = container.querySelector('.comments-list');
      if (list) {
        list.innerHTML = `<li class="comments-empty comments-error">${escapeHtml(t('comments.loadError', '留言加载失败，请刷新重试'))}</li>`;
      }
    }
  }

  function bindEvents(container) {
    if (container.dataset.commentsBound) return;
    container.dataset.commentsBound = '1';

    container.addEventListener('click', async e => {
      const loginBtn = e.target.closest('.comments-login-btn');
      if (loginBtn) {
        if (typeof BwtlAuth !== 'undefined') BwtlAuth.openLogin();
        return;
      }

      const submitBtn = e.target.closest('.comments-submit');
      if (!submitBtn) return;

      const panel = container.querySelector('.comments-panel');
      const target = panel?.dataset.target;
      const input = container.querySelector('.comments-input');
      const status = container.querySelector('.comments-status');
      const hp = container.querySelector('.comments-hp');
      if (!target || !input) return;

      const body = input.value.trim();
      if (!body) {
        if (status) {
          status.textContent = t('comments.tooShort', '请输入留言内容');
          status.classList.remove('hidden');
        }
        return;
      }

      if (hp?.value) return;

      submitBtn.setAttribute('disabled', 'disabled');
      if (status) status.classList.add('hidden');

      const { data } = await postComment(target, body, hp?.value || '');
      submitBtn.removeAttribute('disabled');

      if (!data.ok) {
        if (status) {
          status.textContent = data.error || t('comments.submitFailed', '发表失败，请稍后重试');
          status.classList.remove('hidden');
        }
        return;
      }

      input.value = '';
      if (status) {
        status.textContent = data.pending
          ? (data.message || t('comments.pending', '留言已提交，正在审核中'))
          : t('comments.posted', '留言已发表');
        status.classList.remove('hidden');
      }
      await refresh(container);
    });
  }

  function remountCompose(container) {
    const panel = container.querySelector('.comments-panel');
    if (!panel) return;
    const target = panel.dataset.target;
    const compact = panel.classList.contains('comments-panel--compact');
    const listHtml = panel.querySelector('.comments-list')?.outerHTML || '<ul class="comments-list" aria-live="polite"></ul>';
    const shell = buildShell(target, { compact });
    container.innerHTML = shell;
    const newList = container.querySelector('.comments-list');
    const oldList = new DOMParser().parseFromString(listHtml, 'text/html').querySelector('.comments-list');
    if (newList && oldList) newList.innerHTML = oldList.innerHTML;
    bindEvents(container);
  }

  function mount(el, target, options = {}) {
    if (!el || !target) return;
    const compact = !!options.compact;
    el.innerHTML = buildShell(target, { compact });
    bindEvents(el);
    mounts.set(el, target);
    refresh(el);
  }

  function unmount(el) {
    if (!el) return;
    mounts.delete(el);
    el.innerHTML = '';
    delete el.dataset.commentsBound;
  }

  function init() {
    const guestbook = document.getElementById('guestbook-comments');
    if (guestbook) mount(guestbook, 'site:guestbook');

    if (typeof BwtlAuth !== 'undefined') {
      BwtlAuth.onChange(() => {
        mounts.forEach((target, el) => remountCompose(el));
      });
    }
  }

  return { mount, unmount, refresh, init };
})();