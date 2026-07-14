/* BestWayToLearn.AI — 30-day post-graduation daily tracking */
const LearningPlan30 = (function () {
  const TASKS = [
    { id: 'practice', labelKey: 'learning.plan30TaskPractice', label: '完成 1 次 AI 实践' },
    { id: 'read', labelKey: 'learning.plan30TaskRead', label: '阅读 1 条 AI 时讯或教程' },
    { id: 'skill', labelKey: 'learning.plan30TaskSkill', label: '探索 1 个 Skill 或 MCP' },
    { id: 'review', labelKey: 'learning.plan30TaskReview', label: '复习 3 道测验题' },
  ];

  function t(key, fallback, vars) {
    if (typeof LearningCore !== 'undefined') return LearningCore.t(key, fallback, vars);
    return fallback;
  }

  function ensureStartDate(prog) {
    if (!prog.plan30StartDate && typeof isGraduated === 'function' && isGraduated()) {
      prog.plan30StartDate = prog.graduatedAt || new Date().toISOString();
      if (typeof LearningCore !== 'undefined') LearningCore.save(prog);
    }
    return prog;
  }

  function getCurrentDayIndex(prog) {
    prog = ensureStartDate(prog || (typeof LearningCore !== 'undefined' ? LearningCore.load() : {}));
    if (!prog.plan30StartDate) return 0;
    const start = new Date(prog.plan30StartDate).getTime();
    return Math.min(29, Math.max(0, Math.floor((Date.now() - start) / 86400000)));
  }

  function getDayKey(dayIndex) {
    return `d${dayIndex}`;
  }

  function toggleTask(dayIndex, taskId) {
    if (typeof LearningCore === 'undefined') return;
    const prog = ensureStartDate(LearningCore.load());
    const key = getDayKey(dayIndex);
    if (!prog.plan30Daily[key]) prog.plan30Daily[key] = {};
    prog.plan30Daily[key][taskId] = !prog.plan30Daily[key][taskId];
    LearningCore.save(prog);
    if (typeof LearningAnalytics !== 'undefined') {
      LearningAnalytics.track('plan30_check', { day: dayIndex, task: taskId });
    }
    render();
  }

  function getWeekProgress(prog) {
    prog = prog || (typeof LearningCore !== 'undefined' ? LearningCore.load() : {});
    const dayIdx = getCurrentDayIndex(prog);
    const weekStart = Math.floor(dayIdx / 7) * 7;
    let done = 0;
    let total = 0;
    for (let d = weekStart; d < weekStart + 7 && d < 30; d++) {
      const key = getDayKey(d);
      const day = prog.plan30Daily[key] || {};
      TASKS.forEach(task => {
        total++;
        if (day[task.id]) done++;
      });
    }
    return { done, total, week: Math.floor(dayIdx / 7) + 1 };
  }

  function render() {
    const mount = document.getElementById('plan30-daily-tracker');
    if (!mount) return;

    if (typeof isGraduated === 'function' && !isGraduated()) {
      mount.classList.add('hidden');
      return;
    }

    const prog = ensureStartDate(typeof LearningCore !== 'undefined' ? LearningCore.load() : {});
    const dayIdx = getCurrentDayIndex(prog);
    const key = getDayKey(dayIdx);
    const day = prog.plan30Daily[key] || {};
    const week = getWeekProgress(prog);
    const doneToday = TASKS.filter(task => day[task.id]).length;

    mount.classList.remove('hidden');
    mount.innerHTML = `
      <div class="plan30-tracker">
        <div class="plan30-tracker-header">
          <h4>${t('learning.plan30Tracker', '30 天每日打卡')}</h4>
          <span class="plan30-tracker-day">${t('learning.plan30Day', '第 {n} / 30 天', { n: dayIdx + 1 })}</span>
        </div>
        <p class="plan30-tracker-week">${t('learning.plan30WeekProgress', '本周完成 {done}/{total} 项', { done: week.done, total: week.total })}</p>
        <ul class="plan30-task-list">
          ${TASKS.map(task => `
            <li>
              <label class="plan30-task">
                <input type="checkbox" data-plan30-task="${task.id}" ${day[task.id] ? 'checked' : ''}>
                <span>${t(task.labelKey, task.label)}</span>
              </label>
            </li>`).join('')}
        </ul>
        <p class="plan30-tracker-summary">${t('learning.plan30TodayDone', '今日已完成 {done}/{total}', { done: doneToday, total: TASKS.length })}</p>
        <div class="plan30-mini-cal" aria-label="30 day calendar">
          ${Array.from({ length: 30 }, (_, i) => {
            const k = getDayKey(i);
            const d = prog.plan30Daily[k] || {};
            const c = TASKS.filter(task => d[task.id]).length;
            const cls = i === dayIdx ? 'is-today' : c === TASKS.length ? 'is-done' : c > 0 ? 'is-partial' : '';
            return `<span class="plan30-cal-dot ${cls}" title="${i + 1}"></span>`;
          }).join('')}
        </div>
      </div>`;

    mount.querySelectorAll('[data-plan30-task]').forEach(cb => {
      cb.addEventListener('change', () => toggleTask(dayIdx, cb.dataset.plan30Task));
    });
  }

  function init() {
    render();
    document.addEventListener('bwtl:progress-synced', render);
    if (typeof isGraduated === 'function' && isGraduated()) render();
  }

  return {
    TASKS,
    getCurrentDayIndex,
    toggleTask,
    getWeekProgress,
    render,
    init,
  };
})();