/* BestWayToLearn.AI — Extended learning progress, module tracking, cloud sync */
const LearningCore = (function () {
  const STORAGE_KEY = 'bwtl-ai-progress';
  const SCHEMA_VERSION = 2;
  const SYNC_DEBOUNCE_MS = 2500;
  let syncTimer = null;
  let syncing = false;

  const MODULE_KEYS = [
    'fundamentals', 'handsOn', 'promptLab', 'briefing',
    'tutorials', 'skills', 'mcp', 'prompts', 'apps',
  ];

  function t(key, fallback, vars) {
    if (typeof I18n !== 'undefined') {
      const v = I18n.t(key, vars);
      if (v && v !== key) return v;
    }
    let out = fallback;
    if (vars) Object.keys(vars).forEach(k => {
      out = out.replace(new RegExp(`\\{${k}\\}`, 'g'), vars[k]);
    });
    return out;
  }

  function emptyModules() {
    const m = {};
    MODULE_KEYS.forEach(k => { m[k] = []; });
    return m;
  }

  function normalize(raw = {}) {
    const modules = { ...emptyModules(), ...(raw.modules || {}) };
    MODULE_KEYS.forEach(k => {
      if (!Array.isArray(modules[k])) modules[k] = [];
    });
    return {
      schemaVersion: SCHEMA_VERSION,
      completedDays: Array.isArray(raw.completedDays) ? [...raw.completedDays] : [],
      quizBestScore: Number(raw.quizBestScore) || 0,
      quizWrong: raw.quizWrong && typeof raw.quizWrong === 'object' ? { ...raw.quizWrong } : {},
      quizHistory: Array.isArray(raw.quizHistory) ? raw.quizHistory.slice(-30) : [],
      quizTopicScores: raw.quizTopicScores && typeof raw.quizTopicScores === 'object'
        ? { ...raw.quizTopicScores } : {},
      modules,
      role: raw.role || 'general',
      practicePlan30: raw.practicePlan30 || {},
      plan30Daily: raw.plan30Daily && typeof raw.plan30Daily === 'object' ? { ...raw.plan30Daily } : {},
      plan30StartDate: raw.plan30StartDate || null,
      graduatedAt: raw.graduatedAt || null,
      phaseMastery: raw.phaseMastery || {},
      serverUpdatedAt: raw.serverUpdatedAt || 0,
      updatedAt: raw.updatedAt || Date.now(),
    };
  }

  function load() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
      return normalize(raw);
    } catch {
      return normalize({});
    }
  }

  function save(data) {
    const prog = normalize(data);
    prog.updatedAt = Date.now();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prog));
    scheduleSync(prog);
    return prog;
  }

  function mergeProgress(local, remote) {
    if (!remote) return normalize(local);
    const a = normalize(local);
    const b = normalize(remote);
    const merged = normalize({
      ...a,
      ...b,
      completedDays: [...new Set([...a.completedDays, ...b.completedDays])].sort((x, y) => x - y),
      quizBestScore: Math.max(a.quizBestScore, b.quizBestScore),
      quizWrong: { ...a.quizWrong, ...b.quizWrong },
      quizHistory: [...a.quizHistory, ...b.quizHistory].slice(-30),
      quizTopicScores: { ...a.quizTopicScores, ...b.quizTopicScores },
      modules: {},
      practicePlan30: { ...a.practicePlan30, ...b.practicePlan30 },
      plan30Daily: { ...a.plan30Daily, ...b.plan30Daily },
      plan30StartDate: a.plan30StartDate || b.plan30StartDate,
      graduatedAt: a.graduatedAt || b.graduatedAt,
      role: a.role !== 'general' ? a.role : b.role,
      serverUpdatedAt: Math.max(a.serverUpdatedAt, b.serverUpdatedAt),
    });
    MODULE_KEYS.forEach(k => {
      merged.modules[k] = [...new Set([...(a.modules[k] || []), ...(b.modules[k] || [])])];
    });
    return merged;
  }

  function isLoggedIn() {
    return typeof BwtlAuth !== 'undefined' && BwtlAuth.isLoggedIn?.();
  }

  async function pullFromServer() {
    if (!isLoggedIn()) return null;
    try {
      const res = await fetch('/api/progress', { credentials: 'include', cache: 'no-store' });
      const data = await res.json();
      if (!data.ok) return null;
      if (!data.progress) return null;
      const local = load();
      const merged = mergeProgress(local, {
        ...data.progress,
        serverUpdatedAt: (data.updatedAt || 0) * 1000,
      });
      merged.serverUpdatedAt = (data.updatedAt || 0) * 1000;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      return merged;
    } catch {
      return null;
    }
  }

  async function pushToServer(prog) {
    if (!isLoggedIn() || syncing) return;
    syncing = true;
    try {
      const res = await fetch('/api/progress', {
        method: 'PUT',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          progress: prog,
          updatedAt: Math.floor((prog.serverUpdatedAt || 0) / 1000),
        }),
      });
      const data = await res.json();
      if (data.ok && data.progress && data.message === 'server_newer') {
        const merged = mergeProgress(prog, data.progress);
        merged.serverUpdatedAt = (data.updatedAt || 0) * 1000;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
        document.dispatchEvent(new CustomEvent('bwtl:progress-synced', { detail: merged }));
      } else if (data.ok) {
        const next = load();
        next.serverUpdatedAt = (data.updatedAt || Date.now() / 1000) * 1000;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      }
    } catch { /* offline */ }
    syncing = false;
  }

  function scheduleSync(prog) {
    if (!isLoggedIn()) return;
    clearTimeout(syncTimer);
    syncTimer = setTimeout(() => pushToServer(prog || load()), SYNC_DEBOUNCE_MS);
  }

  function markModule(type, id) {
    if (!type || !id) return load();
    const prog = load();
    if (!MODULE_KEYS.includes(type)) return prog;
    if (!prog.modules[type].includes(id)) {
      prog.modules[type].push(id);
      save(prog);
      if (typeof LearningAnalytics !== 'undefined') {
        LearningAnalytics.track('module_complete', { type, id });
      }
    }
    return prog;
  }

  function isModuleDone(type, id) {
    const prog = load();
    return prog.modules[type]?.includes(id);
  }

  function setRole(role) {
    const prog = load();
    prog.role = role || 'general';
    return save(prog);
  }

  function getRole() {
    return load().role || 'general';
  }

  function getModuleProgressSummary() {
    const prog = load();
    const counts = {};
    let total = 0;
    let done = 0;
    MODULE_KEYS.forEach(k => {
      counts[k] = prog.modules[k]?.length || 0;
      total += counts[k];
      done += counts[k];
    });
    return { counts, done, modules: prog.modules };
  }

  function observeContentViews() {
    const seen = new Set();
    const mapHref = (hash) => {
      if (!hash) return null;
      if (hash.startsWith('#ai-briefing-')) return { type: 'briefing', id: hash.slice(14) };
      if (hash.startsWith('#latest-tutorial-') || hash.startsWith('#tutorial-')) {
        return { type: 'tutorials', id: hash.replace(/^#(?:latest-tutorial-|tutorial-)/, '') };
      }
      if (hash === '#fundamentals' || hash.startsWith('#fundamentals-')) {
        return { type: 'fundamentals', id: hash.replace('#fundamentals-', '') || 'overview' };
      }
      if (hash === '#hands-on' || hash.startsWith('#hands-on-')) {
        return { type: 'handsOn', id: hash.replace('#hands-on-', '') || 'list' };
      }
      if (hash === '#prompt-lab' || hash.startsWith('#prompt-lab-')) {
        return { type: 'promptLab', id: hash.replace('#prompt-lab-', '') || 'list' };
      }
      if (hash === '#prompt-examples' || hash.startsWith('#prompt-')) {
        return { type: 'prompts', id: hash.replace(/^#prompt-?/, '') || 'list' };
      }
      return null;
    };

    const onNav = () => {
      const hash = location.hash;
      const key = hash;
      if (!key || seen.has(key)) return;
      const mapped = mapHref(hash);
      if (mapped) {
        seen.add(key);
        markModule(mapped.type, mapped.id);
      }
    };

    window.addEventListener('hashchange', onNav);
    onNav();
  }

  function init() {
    if (typeof BwtlAuth !== 'undefined') {
      BwtlAuth.onChange(async (user) => {
        if (user) {
          const merged = await pullFromServer();
          if (merged) {
            document.dispatchEvent(new CustomEvent('bwtl:progress-synced', { detail: merged }));
            if (typeof updateAllProgress === 'function') updateAllProgress();
            if (typeof updateContinueLearningCTA === 'function') updateContinueLearningCTA();
            if (typeof LearningPlan30 !== 'undefined') LearningPlan30.render();
            if (typeof LearningQuiz !== 'undefined') LearningQuiz.renderExtras();
          }
        } else {
          scheduleSync(load());
        }
      });
      if (BwtlAuth.isLoggedIn?.()) pullFromServer().then(() => {
        if (typeof updateAllProgress === 'function') updateAllProgress();
      });
    }
    observeContentViews();
    document.addEventListener('bwtl:progress-save', () => scheduleSync(load()));
  }

  return {
    SCHEMA_VERSION,
    MODULE_KEYS,
    load,
    save,
    mergeProgress,
    markModule,
    isModuleDone,
    setRole,
    getRole,
    getModuleProgressSummary,
    pullFromServer,
    pushToServer,
    scheduleSync,
    init,
    t,
  };
})();