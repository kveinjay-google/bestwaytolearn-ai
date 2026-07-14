/* BestWayToLearn.AI — Anonymous learning analytics */
const LearningAnalytics = (function () {
  const QUEUE_KEY = 'bwtl-analytics-queue';
  const SESSION_KEY = 'bwtl-analytics-session';
  const FLUSH_INTERVAL_MS = 30000;
  const MAX_QUEUE = 50;
  let flushTimer = null;

  function sessionId() {
    try {
      let id = sessionStorage.getItem(SESSION_KEY);
      if (!id) {
        id = `s_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
        sessionStorage.setItem(SESSION_KEY, id);
      }
      return id;
    } catch {
      return `s_${Date.now()}`;
    }
  }

  function loadQueue() {
    try {
      return JSON.parse(localStorage.getItem(QUEUE_KEY)) || [];
    } catch {
      return [];
    }
  }

  function saveQueue(q) {
    try {
      localStorage.setItem(QUEUE_KEY, JSON.stringify(q.slice(-MAX_QUEUE)));
    } catch { /* quota */ }
  }

  function track(name, payload = {}) {
    const q = loadQueue();
    q.push({ name, payload, at: Date.now() });
    saveQueue(q);
    scheduleFlush();
  }

  async function flush() {
    const q = loadQueue();
    if (!q.length) return;
    try {
      const res = await fetch('/api/analytics', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: sessionId(), events: q }),
      });
      const data = await res.json();
      if (data.ok) saveQueue([]);
    } catch { /* offline */ }
  }

  function scheduleFlush() {
    clearTimeout(flushTimer);
    flushTimer = setTimeout(flush, FLUSH_INTERVAL_MS);
  }

  function hashToPage(hash) {
    const h = (hash || '').replace(/^#/, '') || 'hero';
    const base = h.split('-section')[0];
    if (base.startsWith('ai-briefing-')) return 'ai-briefing-detail';
    if (base.startsWith('latest-tutorial-')) return 'latest-tutorial-detail';
    return base;
  }

  function trackPageView() {
    const hash = location.hash || '#hero';
    track('page_view', { hash, page: hashToPage(hash) });
    track('navigate', { hash, page: hashToPage(hash) });
  }

  function init() {
    track('session_start', {
      path: location.pathname,
      lang: typeof I18n !== 'undefined' ? I18n.getLocale?.() : 'zh-CN',
      referrer: document.referrer || '',
    });
    trackPageView();
    window.addEventListener('beforeunload', () => { flush(); });
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') flush();
    });

    const orig = history.pushState;
    history.pushState = function (...args) {
      orig.apply(this, args);
      trackPageView();
    };
    window.addEventListener('hashchange', trackPageView);
  }

  return { track, flush, init };
})();