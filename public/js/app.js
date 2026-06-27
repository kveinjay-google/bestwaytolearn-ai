/* BestWayToLearn.AI — Interactive Logic */

function migrateStorageKey(oldKey, newKey) {
  try {
    if (localStorage.getItem(newKey) == null && localStorage.getItem(oldKey) != null) {
      localStorage.setItem(newKey, localStorage.getItem(oldKey));
      localStorage.removeItem(oldKey);
    }
  } catch (_) { /* private mode */ }
}

const STORAGE_KEY = 'bwtl-ai-progress';
const USER_KEY = 'bwtl-ai-user';
migrateStorageKey('synapse-ai-progress', STORAGE_KEY);
migrateStorageKey('synapse-ai-user', USER_KEY);
const WELCOME_STEPS = 5;
function getTeacherName() {
  return typeof I18n !== 'undefined' ? I18n.getTeacherName() : '凯文';
}
const PLACEHOLDER_USER_NAMES = new Set(['测试', 'test', 'Test', 'TEST']);

function isPlaceholderUserName(name) {
  const n = name?.trim();
  return !n || PLACEHOLDER_USER_NAMES.has(n);
}

function loadUser() {
  try {
    const data = JSON.parse(localStorage.getItem(USER_KEY)) || { name: '', welcomed: false };
    if (isPlaceholderUserName(data.name)) {
      data.name = '';
      localStorage.setItem(USER_KEY, JSON.stringify(data));
    }
    return data;
  } catch {
    return { name: '', welcomed: false };
  }
}

let currentUser = loadUser();

function saveUser(data) {
  currentUser = { ...currentUser, ...data };
  if (isPlaceholderUserName(currentUser.name)) currentUser.name = '';
  localStorage.setItem(USER_KEY, JSON.stringify(currentUser));
}

function getUserName() {
  const name = currentUser.name?.trim();
  const fallback = typeof I18n !== 'undefined' ? I18n.getDefaultUserName() : '学员';
  return isPlaceholderUserName(name) ? fallback : (name || fallback);
}

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { completedDays: [] }; }
  catch { return { completedDays: [] }; }
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function formatEnLabel(item) {
  if (item.abbr && item.abbr !== '—') return `${item.abbr} · ${item.fullEn}`;
  return item.fullEn || item.en || '';
}

function termMatches(t, q) {
  if (!q) return true;
  const fields = [t.term, t.abbr, t.fullEn, t.def, t.example, t.category].filter(Boolean);
  return fields.some(f => f.toLowerCase().includes(q) || f.includes(q));
}

function isAllTermsCategory(category) {
  const all = new Set(['全部', 'All']);
  if (typeof I18n !== 'undefined') all.add(I18n.getTermCategoryAll());
  return all.has(category);
}

function filterTerms(query = '', category = '全部') {
  const q = query.toLowerCase().trim();
  return getTermsData().filter(t =>
    (isAllTermsCategory(category) || t.category === category) && termMatches(t, q)
  );
}

function getTermFilterLabel(cat) {
  if (cat === '全部') return typeof I18n !== 'undefined' ? I18n.getTermCategoryAll() : '全部';
  if (typeof I18n !== 'undefined' && I18n.getLocale() === 'en') {
    const map = I18n.getData('termCategories') || {};
    return map[cat] || cat;
  }
  return cat;
}

function isAllMonetizeCategory(category) {
  const all = new Set(['全部', 'All']);
  if (typeof I18n !== 'undefined') all.add(I18n.getMonetizeCategoryAll());
  return all.has(category);
}

function escapeHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function getTermsData() {
  return typeof I18n !== 'undefined' ? I18n.getTerms() : AI_TERMS;
}

function getAppsData() {
  return typeof I18n !== 'undefined' ? I18n.getApps() : APPS;
}

function getQuizData() {
  return typeof I18n !== 'undefined' ? I18n.getQuizData() : QUIZ_DATA;
}

function getAiOverviewData() {
  return typeof I18n !== 'undefined' ? I18n.getAiOverviewSections() : AI_OVERVIEW_SECTIONS;
}

function getFundamentalsData() {
  return typeof I18n !== 'undefined' ? I18n.getFundamentals() : FUNDAMENTALS;
}

function getHandsOnData() {
  return typeof I18n !== 'undefined' ? I18n.getHandsOnCases() : HANDS_ON_CASES;
}

function getPracticesData() {
  return typeof I18n !== 'undefined' ? I18n.getPractices() : PRACTICES;
}

function getPromptCasesData() {
  return typeof I18n !== 'undefined' ? I18n.getPromptCases() : PROMPT_CASES;
}

function getPromptTasksData() {
  return typeof I18n !== 'undefined' ? I18n.getPromptTasks() : PROMPT_TASKS;
}

function getPromptTaskPresetsData() {
  return typeof I18n !== 'undefined' ? I18n.getPromptTaskPresets() : PROMPT_TASK_PRESETS;
}

function getPromptToolsData() {
  return typeof I18n !== 'undefined' ? I18n.getPromptTools() : PROMPT_TOOLS;
}

function getMonetizeMetaData() {
  return typeof I18n !== 'undefined' ? I18n.getMonetizeMeta() : AI_MONETIZE_META;
}

function getMonetizeProjectsData() {
  return typeof I18n !== 'undefined' ? I18n.getMonetizeProjects() : AI_MONETIZE_PROJECTS;
}

function getCoachSectionsData() {
  return typeof I18n !== 'undefined' && I18n.getCoachSections() ? I18n.getCoachSections() : COACH_SECTIONS;
}

function getPhaseCoachHintsData() {
  return typeof I18n !== 'undefined' && I18n.getPhaseCoachHints() ? I18n.getPhaseCoachHints() : PHASE_COACH_HINTS;
}

function uiT(key, fallback = '', vars = {}) {
  if (typeof I18n === 'undefined') return interpolateFallback(fallback || key, vars);
  const v = I18n.t(key, vars);
  return v === key ? interpolateFallback(fallback || key, vars) : v;
}

function interpolateFallback(template, vars = {}) {
  return Object.entries(vars).reduce(
    (out, [k, v]) => out.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v ?? '')),
    template
  );
}

function getPhaseTabConfig(tabId) {
  return typeof I18n !== 'undefined'
    ? I18n.getResolvedPhaseTabConfig(tabId)
    : PHASE_TAB_CONFIG[tabId];
}

function getGraduationModulesData() {
  return typeof I18n !== 'undefined' ? I18n.getGraduationModules() : GRADUATION_MODULES;
}

function getQuizReviewLinksData() {
  return typeof I18n !== 'undefined' && I18n.getQuizReviewLinks()
    ? I18n.getQuizReviewLinks()
    : QUIZ_REVIEW_LINKS;
}

function getQuizTopicLinksData() {
  return typeof I18n !== 'undefined' && I18n.getQuizTopicLinks()
    ? I18n.getQuizTopicLinks()
    : QUIZ_TOPIC_LINKS;
}

function getSiteNavEntriesData() {
  return typeof I18n !== 'undefined' && I18n.getSiteNavEntries()
    ? I18n.getSiteNavEntries()
    : SITE_NAV_ENTRIES;
}

function getCoachQuickNavData() {
  return typeof I18n !== 'undefined' && I18n.getCoachQuickNav()
    ? I18n.getCoachQuickNav()
    : COACH_QUICK_NAV;
}

function termDisplayName(c) {
  if (typeof I18n !== 'undefined' && I18n.getLocale() === 'en') {
    return (c.abbr && c.abbr !== '—') ? c.abbr : c.fullEn;
  }
  return c.term;
}

function formatLocaleDate(iso) {
  if (!iso) return '';
  try {
    const loc = typeof I18n !== 'undefined' && I18n.getLocale() === 'en' ? 'en-US' : 'zh-CN';
    return new Date(iso).toLocaleDateString(loc, { year: 'numeric', month: 'long', day: 'numeric' });
  } catch {
    return '';
  }
}

function getDeviceLabels() {
  const en = typeof I18n !== 'undefined' ? I18n.getDeviceFieldLabels() : null;
  return en || {
    chooseWhen: '适合选它的场景',
    avoidWhen: '不太适合的情况',
    aiNotePrefix: 'AI 学习提示：',
    commonModels: '常见机型：',
    suitable: '适合：',
    aiCapability: 'AI 能力：',
    recommendedApps: '推荐应用',
    forWho: '适合谁：',
    canDo: '能做：',
    cannotDo: '吃力/不行：',
    examples: '代表硬件：',
    ram: '内存',
    gpu: '显卡',
    storage: '硬盘',
    needResultPrefix: '推荐关注：',
    needResultEmpty: '暂无',
    weekN: '第 {n} 周',
    focusThisWeek: '本周重点',
    practice1: '实践 1',
    practice2: '实践 2',
  };
}

function getSearchTypeLabel(key) {
  const map = {
    module: ['search.typeModule', '模块'],
    term: ['search.typeTerm', '术语'],
    app: ['search.typeApp', '应用'],
    day: ['search.typeDay', '学习日'],
    case: ['search.typeCase', '实操'],
    template: ['search.typeTemplate', '场景'],
    project: ['search.typeProject', '变现'],
    device: ['search.typeDevice', '设备'],
    preset: ['search.typePreset', '配置'],
    fundamental: ['search.typeFundamental', '原理'],
    overview: ['search.typeOverview', '入门'],
    monetize: ['search.typeMonetize', '变现'],
    aiBox: ['search.typeAiBox', 'AI 盒子'],
    config: ['search.typeConfig', '配置'],
    toolsNav: ['search.typeToolsNav', '工具导航'],
    skillsNav: ['search.typeSkillsNav', 'Skill'],
  };
  const [k, fb] = map[key] || ['search.typeModule', '模块'];
  return uiT(k, fb);
}

function getPracticePlanFocusLabel(value) {
  const focus = typeof I18n !== 'undefined' ? I18n.getPracticePlanFocus() : null;
  if (focus) {
    const item = focus.find(f => f.value === value);
    if (item) return item.label;
  }
  const zh = { 写作办公: '写作办公', 编程开发: '编程开发', 学习成长: '学习成长', 数据分析: '数据分析' };
  return zh[value] || value;
}

function legacyCopyText(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.setAttribute('readonly', '');
  ta.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0;pointer-events:none;';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  ta.setSelectionRange(0, text.length);
  let ok = false;
  try {
    ok = document.execCommand('copy');
  } catch {
    ok = false;
  }
  document.body.removeChild(ta);
  return ok;
}

async function copyToClipboard(text, btn, defaultLabel) {
  const copyLabel = defaultLabel || (typeof I18n !== 'undefined' ? I18n.t('common.copy') : '复制');
  const content = (text ?? '').toString();
  if (!content.trim()) {
    alert(typeof I18n !== 'undefined' ? I18n.t('common.noCopy') : '暂无内容可复制。');
    return false;
  }

  let copied = false;
  if (window.isSecureContext && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(content);
      copied = true;
    } catch {
      copied = false;
    }
  }
  if (!copied) copied = legacyCopyText(content);

  if (!copied) {
    alert(typeof I18n !== 'undefined' ? I18n.t('common.copyFail') : '复制失败，请手动选择下方文本复制。');
    return false;
  }

  if (btn) {
    const original = btn.textContent;
    btn.textContent = typeof I18n !== 'undefined' ? I18n.t('common.copied') : '已复制 ✓';
    btn.classList.add('copied');
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = copyLabel || original;
      btn.classList.remove('copied');
      btn.disabled = false;
    }, 2000);
  }
  return true;
}

function resolvePracticePromptText(btn) {
  const idx = parseInt(btn.dataset.idx, 10);
  if (btn.classList.contains('hands-on-copy-btn') && getHandsOnData()[idx]?.prompt) {
    return getHandsOnData()[idx].prompt;
  }
  if (getPracticesData()[idx]?.prompt) return getPracticesData()[idx].prompt;
  const pre = btn.closest('.practice-prompt-block')?.querySelector('.practice-prompt');
  return pre?.textContent?.trim() || '';
}

function initPracticeCopyButtons() {
  document.getElementById('hands-on-list')?.addEventListener('click', e => {
    const btn = e.target.closest('.hands-on-copy-btn');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    copyToClipboard(resolvePracticePromptText(btn), btn, '一键复制');
  });

  document.getElementById('practice-list')?.addEventListener('click', e => {
    const btn = e.target.closest('.practice-copy-btn');
    if (!btn || btn.classList.contains('hands-on-copy-btn')) return;
    e.preventDefault();
    e.stopPropagation();
    copyToClipboard(resolvePracticePromptText(btn), btn, '一键复制');
  });
}

// ─── Neural Canvas ────────────────────────────────────────────────────────────

function initNeuralCanvas() {
  const canvas = document.getElementById('neural-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let nodes = [];
  let animId = 0;
  let viewW = 0;
  let viewH = 0;
  const linkDist = 150;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    viewW = window.innerWidth;
    viewH = window.innerHeight;
    canvas.width = Math.floor(viewW * dpr);
    canvas.height = Math.floor(viewH * dpr);
    canvas.style.width = `${viewW}px`;
    canvas.style.height = `${viewH}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.floor((viewW * viewH) / 20000);
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * viewW,
      y: Math.random() * viewH,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.2 + 0.8,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, viewW, viewH);
    nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > viewW) n.vx *= -1;
      if (n.y < 0 || n.y > viewH) n.vy *= -1;
    });

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.hypot(dx, dy);
        if (dist < linkDist) {
          const alpha = (1 - dist / linkDist) * 0.22;
          ctx.strokeStyle = `rgba(45, 212, 191, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    nodes.forEach(n => {
      ctx.fillStyle = 'rgba(45, 212, 191, 0.55)';
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    });

    animId = requestAnimationFrame(draw);
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }

  resize();
  draw();
  window.addEventListener('resize', resize);
}

// ─── Render ───────────────────────────────────────────────────────────────────

const PHASE_DAY_MAP = { 1: [0, 1, 2], 2: [3, 4], 3: [5], 4: [6] };
const PHASE_IDS = ['', 'phase-learn', 'phase-tools', 'phase-practice', 'phase-validate'];
const PHASE_TAB_FROM_NUM = { 1: 'learn', 2: 'tools', 3: 'practice', 4: 'validate' };
const PHASE_HASH_FROM_NUM = { 1: 'phase-learn', 2: 'phase-tools', 3: 'phase-practice', 4: 'phase-validate' };
function getPhaseShortLabels() {
  return typeof I18n !== 'undefined' ? I18n.getPhaseShortLabels() : {
    1: '01 认知', 2: '02 工具', 3: '03 实战', 4: '04 检验',
  };
}

const GRADUATION_QUIZ_PASS = 80;
const GRADUATION_MODULES = [
  { phase: '01 认知', items: ['AI 全景入门', 'AI 原理（8 模块）', 'AI 知识库（100 术语）'] },
  { phase: '02 工具', items: ['主流应用（43 款）', '提示词实验室'] },
  { phase: '03 实战', items: ['真实软件实操（30 案例）', '场景提示词模板（16 个）'] },
  { phase: '04 检验', items: ['知识测验（100 题）', '未来 30 天实践计划'] },
];

const QUIZ_TOPIC_LINKS = {
  fundamentals: { href: '#fundamentals', label: 'AI 原理' },
  knowledge: { href: '#knowledge', label: 'AI 知识库' },
  'prompt-lab': { href: '#prompt-lab', label: '提示词实验室' },
  apps: { href: '#apps', label: '主流应用' },
  'hands-on': { href: '#hands-on', label: '真实软件实操' },
  'ai-overview': { href: '#ai-overview', label: 'AI 全景入门' },
  agent: { href: '#apps', label: 'Agent 自动化工具' },
  monetize: { href: '#monetize', label: '变现指南' },
  practice: { href: '#practice', label: '实战场景' },
};

function getQuizReviewLink(qIdx) {
  const q = getQuizData()[qIdx];
  const topicLinks = getQuizTopicLinksData();
  if (q?.topic && topicLinks[q.topic]) return topicLinks[q.topic];
  const reviewLinks = getQuizReviewLinksData();
  if (reviewLinks[qIdx]) return reviewLinks[qIdx];
  return topicLinks.fundamentals || { href: '#fundamentals', label: uiT('quiz.topicFallback', 'AI 原理') };
}

function getQuizDurationHint() {
  const mins = Math.max(15, Math.round(getQuizData().length * 0.45));
  if (typeof I18n !== 'undefined' && I18n.getLocale() === 'en') {
    return `~${mins} min`;
  }
  return `约需 ${mins} 分钟`;
}

function renderQuizPrelude() {
  const graduated = isGraduated();
  const hint = getGraduationProgressHint();
  const name = getUserName();
  const n = getQuizData().length;
  const duration = getQuizDurationHint();
  const pass = GRADUATION_QUIZ_PASS;
  const best = loadProgress().quizBestScore || 0;

  const title = document.getElementById('quiz-prelude-title');
  const congrats = document.getElementById('quiz-prelude-congrats');
  const journey = document.getElementById('quiz-prelude-journey');
  const purpose = document.getElementById('quiz-prelude-purpose');
  const purposeSub = document.getElementById('quiz-prelude-purpose-sub');
  const stats = document.getElementById('quiz-prelude-stats');
  const hintEl = document.getElementById('quiz-prelude-hint');
  const gradNote = document.getElementById('quiz-prelude-graduated');
  const startBtn = document.getElementById('start-quiz');
  const prelude = document.querySelector('.quiz-prelude');

  if (title) title.textContent = I18n.t('quiz.preludeTitle', { name });
  if (congrats) congrats.textContent = I18n.t('quiz.preludeCongrats');
  if (purpose) purpose.textContent = I18n.t('quiz.preludePurpose', { n });
  if (purposeSub) purposeSub.textContent = I18n.t('quiz.preludePurposeSub');

  if (journey) {
    const items = (typeof I18n !== 'undefined' ? I18n.localizePhases() : LEARNING_PHASES).map(p => p.title);
    journey.innerHTML = items.map((label, i) => `
      <span class="quiz-prelude-step ${i < items.length - 1 ? 'is-done' : 'is-current'}">
        <span class="quiz-prelude-step-num">${String(i + 1).padStart(2, '0')}</span>
        <span class="quiz-prelude-step-label">${label}</span>
      </span>${i < items.length - 1 ? '<span class="quiz-prelude-step-arrow" aria-hidden="true">→</span>' : ''}`
    ).join('');
  }

  if (stats) {
    stats.innerHTML = `
      <li><strong>${I18n.t('quiz.statQuestions', { n })}</strong></li>
      <li><strong>${I18n.t('quiz.statPass', { pass })}</strong></li>
      <li><strong>${I18n.t('quiz.statDuration', { duration })}</strong></li>`;
  }

  if (hintEl) {
    hintEl.textContent = hint || '';
    hintEl.classList.toggle('hidden', !hint);
  }

  if (gradNote) {
    if (graduated) {
      gradNote.textContent = I18n.t('quiz.graduatedNote', { score: best, total: n });
      gradNote.classList.remove('hidden');
    } else {
      gradNote.classList.add('hidden');
    }
  }

  if (startBtn) {
    startBtn.textContent = graduated
      ? I18n.t('quiz.startBtnShort')
      : I18n.t('quiz.startBtn');
  }

  prelude?.classList.toggle('quiz-prelude--graduated', graduated);
}

function getQuizResultTierMessage(score, total) {
  const pct = total ? score / total : 0;
  if (pct >= 1) return uiT('quiz.tierPerfect', '满分！已具备扎实 AI 基础，去场景中大展身手！');
  if (pct >= GRADUATION_QUIZ_PASS / getQuizData().length) return uiT('quiz.tierPass', '很棒！理解深入，已达标可结业，继续保持实践。');
  if (pct >= 0.6) return uiT('quiz.tierGood', '不错！已掌握 AI 基础知识，查漏补缺后再挑战。');
  return uiT('quiz.tierLow', '继续加油！回顾 AI 原理和核心概念后再次挑战。');
}

const QUIZ_REVIEW_LINKS = [
  { href: '#fundamentals', label: 'AI 原理' },
  { href: '#fundamentals', label: '大语言模型' },
  { href: '#fundamentals', label: '幻觉与局限' },
  { href: '#fundamentals', label: 'Transformer' },
  { href: '#fundamentals', label: 'RAG 与 Agent' },
  { href: '#prompt-lab', label: '提示词实验室' },
  { href: '#fundamentals', label: '生成式 AI' },
  { href: '#knowledge', label: 'AI 知识库' },
  { href: '#fundamentals', label: 'AI Agent' },
  { href: '#fundamentals', label: 'RLHF 对齐' },
  { href: '#prompt-lab', label: '链式思考 CoT' },
  { href: '#fundamentals', label: '模型微调' },
  { href: '#fundamentals', label: 'NLP 原理' },
  { href: '#fundamentals', label: 'GPU 与算力' },
  { href: '#ai-overview', label: 'AI 全景入门' },
  { href: '#ai-overview', label: 'AGI 与 ANI' },
  { href: '#prompt-lab', label: '提示词工程' },
  { href: '#knowledge', label: 'Temperature 参数' },
  { href: '#knowledge', label: '上下文窗口' },
  { href: '#fundamentals', label: '机器学习范式' },
  { href: '#hands-on', label: '图像生成实操' },
  { href: '#knowledge', label: 'Embedding 向量' },
  { href: '#knowledge', label: 'AI Skill' },
  { href: '#knowledge', label: 'MCP 协议' },
  { href: '#hands-on', label: 'Cursor 实操' },
  { href: '#hands-on', label: 'Midjourney 实操' },
  { href: '#hands-on', label: '声音克隆实操' },
  { href: '#hands-on', label: 'OpenClaw 实操' },
  { href: '#roadmap', label: '四阶段学习法' },
  { href: '#apps', label: '主流应用选型' },
];
const PHASE_TAB_KEY = 'bwtl-ai-phase-tab';
migrateStorageKey('synapse-ai-phase-tab', PHASE_TAB_KEY);
const PHASE_TAB_NUM = { learn: 1, tools: 2, practice: 3, validate: 4 };

const PHASE_TAB_CONFIG = {
  map: {
    label: '学习地图',
    navHash: 'roadmap',
    panelSelector: '#phase-view-map',
    hashes: ['', 'top', 'hero', 'roadmap'],
  },
  path: {
    label: '学习计划',
    navHash: 'path',
    panelSelector: '#phase-view-path',
    hashes: ['path', 'phase-path'],
  },
  monetize: {
    label: '变现指南',
    navHash: 'monetize',
    panelSelector: '#phase-view-monetize',
    hashes: ['monetize', 'ai-monetize'],
  },
  devices: {
    label: '设备选购',
    navHash: 'devices',
    panelSelector: '#phase-view-devices',
    hashes: ['devices', 'device-guide', 'device-ai-boxes', 'device-presets'],
  },
  toolsNav: {
    label: '工具导航',
    navHash: 'ai-tools-nav',
    panelSelector: '#phase-view-tools-nav',
    hashes: ['ai-tools-nav', 'tools-nav', 'ai-skills-nav', 'skills-nav'],
  },
  learn: {
    label: '认知基础',
    navHash: 'phase-learn',
    panelSelector: '#phase-learn',
    hashes: ['phase-learn', 'ai-overview', 'fundamentals', 'knowledge'],
    next: 'tools',
    nextLabel: '进入阶段二：工具掌握',
    nextDesc: '学会选型与提示词工程，让 AI 真正为你所用。',
    modules: [
      { label: '全景入门', href: '#ai-overview' },
      { label: 'AI 原理', href: '#fundamentals' },
      { label: '知识库', href: '#knowledge' },
    ],
  },
  tools: {
    label: '工具掌握',
    navHash: 'phase-tools',
    panelSelector: '#phase-tools',
    hashes: ['phase-tools', 'apps', 'prompt-lab'],
    next: 'practice',
    nextLabel: '进入阶段三：实战应用',
    nextDesc: '把 AI 嵌入真实工作流，跟着实操案例产出成果。',
    modules: [
      { label: '主流应用', href: '#apps' },
      { label: '提示词实验室', href: '#prompt-lab' },
    ],
  },
  practice: {
    label: '实战应用',
    navHash: 'phase-practice',
    panelSelector: '#phase-practice',
    hashes: ['phase-practice', 'hands-on', 'practice'],
    next: 'validate',
    nextLabel: '进入阶段四：检验巩固',
    nextDesc: '实战告一段落，来做最后测验复盘吧。',
    modules: [
      { label: '真实软件实操', href: '#hands-on' },
      { label: '场景模板', href: '#practice' },
    ],
  },
  validate: {
    label: '检验巩固',
    navHash: 'phase-validate',
    panelSelector: '#phase-validate',
    hashes: ['phase-validate', 'quiz', 'graduation'],
    next: 'map',
    nextLabel: '回顾学习地图',
    nextDesc: '四阶段全部完成！回顾路径或制定后续实践计划。',
    modules: [
      { label: '知识测验', href: '#quiz' },
      { label: '结业报告', href: '#graduation' },
    ],
  },
};

let currentPhaseTab = 'map';
let hashToPhaseTab = {};
let phaseTabNavigating = false;

function buildHashToPhaseTabMap() {
  const map = {};
  Object.entries(PHASE_TAB_CONFIG).forEach(([tabId, cfg]) => {
    (cfg.hashes || []).forEach(h => { map[h] = tabId; });
  });
  if (typeof AI_OVERVIEW_SECTIONS !== 'undefined') {
    AI_OVERVIEW_SECTIONS.forEach(s => { map[`overview-${s.id}`] = 'learn'; });
  }
  if (typeof HANDS_ON_CASES !== 'undefined') {
    HANDS_ON_CASES.forEach((_, i) => { map[`hands-on-${i}`] = 'practice'; });
  }
  if (typeof PRACTICES !== 'undefined') {
    PRACTICES.forEach((_, i) => { map[`practice-${i}`] = 'practice'; });
  }
  return map;
}

function resolvePhaseTabFromHash(hash) {
  const id = (hash || '').replace(/^#/, '');
  if (!id) return 'map';
  if (hashToPhaseTab[id]) return hashToPhaseTab[id];
  if (id.startsWith('overview-')) return 'learn';
  if (id.startsWith('hands-on-')) return 'practice';
  if (id.startsWith('practice-')) return 'practice';
  return 'map';
}

const PHASE_PANEL_SELECTOR = '.phase-view, .learning-phase';
function getNavTabLabels() {
  return typeof I18n !== 'undefined' ? I18n.getNavLabels() : {
    map: '首页', path: '学习计划', learn: '01 认知', tools: '02 工具',
    practice: '03 实战', validate: '04 检验', monetize: '变现', devices: '设备', toolsNav: '工具导航',
  };
}

function getPhasePanel(tabId) {
  const sel = PHASE_TAB_CONFIG[tabId]?.panelSelector;
  return sel ? document.querySelector(sel) : null;
}

function repairNavTabs() {
  document.querySelectorAll('.main-nav a[data-nav-tab]').forEach(link => {
    const tabId = link.dataset.navTab;
    link.textContent = getNavTabLabels()[tabId] || link.textContent;
    link.hidden = false;
    link.classList.remove('phase-view-active');
    link.querySelectorAll('.phase-next-bridge').forEach(el => el.remove());
  });
  document.querySelectorAll('.main-nav .phase-next-bridge').forEach(el => el.remove());
}

function updatePhaseTabNavUI(tabId) {
  document.querySelectorAll('.main-nav a[data-nav-tab]').forEach(link => {
    const active = link.dataset.navTab === tabId;
    link.classList.toggle('active', active);
    link.setAttribute('aria-selected', active ? 'true' : 'false');
  });
}

function scrollToPhaseTarget(targetId, { behavior = 'smooth' } = {}) {
  if (!targetId || targetId === 'top') {
    window.scrollTo({ top: 0, behavior });
    return;
  }
  const el = document.getElementById(targetId);
  if (!el) return;
  const headerEl = document.querySelector('.site-header');
  const headerOffset = (headerEl?.offsetHeight || 52) + 8;
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top: Math.max(0, top), behavior });
}

function switchPhaseTab(tabId, { scrollToId, behavior = 'smooth', save = true } = {}) {
  if (!PHASE_TAB_CONFIG[tabId]) tabId = 'map';
  currentPhaseTab = tabId;

  document.querySelectorAll(PHASE_PANEL_SELECTOR).forEach(panel => {
    const show = panel.dataset.phaseTab === tabId;
    panel.hidden = !show;
    panel.classList.toggle('phase-view-active', show);
  });

  updatePhaseTabNavUI(tabId);
  if (save) localStorage.setItem(PHASE_TAB_KEY, tabId);

  const scrollTarget = scrollToId || PHASE_TAB_CONFIG[tabId].navHash;
  requestAnimationFrame(() => {
    scrollToPhaseTarget(scrollTarget, { behavior });
    const panel = getPhasePanel(tabId);
    panel?.querySelectorAll('.reveal:not(.visible)').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 50);
    });
    if (tabId !== 'map') updatePhaseBridges();
  });
}

function navigateToHash(hash, { behavior = 'smooth', updateHistory = true } = {}) {
  const raw = hash || '#roadmap';
  const id = raw.replace(/^#/, '') || 'roadmap';
  const tabId = resolvePhaseTabFromHash(`#${id}`);

  phaseTabNavigating = true;
  switchPhaseTab(tabId, { scrollToId: id, behavior, save: true });

  if (updateHistory && location.hash !== `#${id}`) {
    history.pushState(null, '', `#${id}`);
  }
  phaseTabNavigating = false;
  stopPageReader();
}

function goToPhaseTab(tabId, { behavior = 'smooth' } = {}) {
  const cfg = PHASE_TAB_CONFIG[tabId];
  if (!cfg) return;
  navigateToHash(`#${cfg.navHash}`, { behavior });
}

function isPhaseDaysComplete(phaseNum) {
  const { done, total } = getPhaseProgress(phaseNum);
  return total > 0 && done === total;
}

function isPhaseTabComplete(tabId) {
  const phaseNum = PHASE_TAB_NUM[tabId];
  if (!phaseNum) return false;
  if (!isPhaseDaysComplete(phaseNum)) return false;
  if (tabId === 'validate') {
    const prog = loadProgress();
    return (prog.quizBestScore || 0) >= 24;
  }
  return true;
}

function getRecommendedPhaseTab() {
  if (loadProgress().completedDays.length === 0) return 'path';
  if (!isPhaseDaysComplete(1)) return 'learn';
  if (!isPhaseDaysComplete(2)) return 'tools';
  if (!isPhaseDaysComplete(3)) return 'practice';
  if (!isPhaseDaysComplete(4)) return 'validate';
  return 'map';
}

function renderPhaseBridges() {
  ['learn', 'tools', 'practice', 'validate'].forEach(tabId => {
    const panel = getPhasePanel(tabId);
    if (!panel || panel.querySelector('.phase-next-bridge')) return;
    const bridge = document.createElement('aside');
    bridge.className = 'phase-next-bridge';
    bridge.id = `phase-bridge-${tabId}`;
    bridge.setAttribute('aria-label', '阶段衔接引导');
    panel.appendChild(bridge);
  });
}

function formatPhaseNum(num) {
  return String(num).padStart(2, '0');
}

function getPhaseDayRangeLabel(phaseNum) {
  const indices = PHASE_DAY_MAP[phaseNum] || [];
  if (!indices.length) return '';
  const days = indices.map(i => LEARNING_PATH[i].day);
  if (days.length === 1) return `Day ${days[0]}`;
  return `Day ${days[0]}–${days[days.length - 1]}`;
}

function syncPathDayChecks() {
  const container = document.getElementById('path-timeline');
  if (!container) return;
  const prog = loadProgress();
  container.querySelectorAll('.path-day').forEach(dayEl => {
    const idx = parseInt(dayEl.dataset.day, 10);
    const done = prog.completedDays.includes(idx);
    const btn = dayEl.querySelector('.path-check');
    const dayNum = LEARNING_PATH[idx]?.day;
    dayEl.classList.toggle('completed', done);
    if (!btn) return;
    btn.classList.toggle('is-done', done);
    btn.setAttribute('aria-pressed', done ? 'true' : 'false');
    const box = btn.querySelector('.path-check-box');
    if (box) box.textContent = done ? '✓' : '';
    btn.title = done ? I18n.t('path.checkDone') : I18n.t('path.checkTodo');
    btn.setAttribute('aria-label', `${I18n.t('common.day')} ${dayNum}: ${done ? I18n.t('path.checkAriaDone') : I18n.t('path.checkAriaTodo')}`);
  });
}

function setDayMastery(dayIdx, mastered, { notify = true } = {}) {
  const prog = loadProgress();
  const pos = prog.completedDays.indexOf(dayIdx);
  const isDone = pos >= 0;
  const dayNum = LEARNING_PATH[dayIdx].day;

  if (mastered && !isDone) {
    prog.completedDays.push(dayIdx);
    saveProgress(prog);
    syncPathDayChecks();
    updateAllProgress();
    if (notify) showTeacherMessage(getDayCompleteMessage(dayIdx));
    maybeCelebrateGraduation();
    return true;
  }
  if (!mastered && isDone) {
    prog.completedDays.splice(pos, 1);
    saveProgress(prog);
    syncPathDayChecks();
    updateAllProgress();
    if (notify) {
      showTeacherMessage(uiT('path.unmarkDay', '{name}，已取消 Day {day} 的「已掌握」标记，需要时可以继续学习。', { name: getUserName(), day: dayNum }));
    }
    return false;
  }
  return isDone;
}

function setPhaseDaysMastery(phaseNum, mastered, { notify = true } = {}) {
  const indices = PHASE_DAY_MAP[phaseNum] || [];
  const prog = loadProgress();
  let changed = false;

  if (mastered) {
    indices.forEach(idx => {
      if (!prog.completedDays.includes(idx)) {
        prog.completedDays.push(idx);
        changed = true;
      }
    });
  } else {
    [...indices].reverse().forEach(idx => {
      const pos = prog.completedDays.indexOf(idx);
      if (pos >= 0) {
        prog.completedDays.splice(pos, 1);
        changed = true;
      }
    });
  }

  if (!changed) return;

  saveProgress(prog);
  syncPathDayChecks();
  updateAllProgress();

  if (notify) {
    const tabId = Object.entries(PHASE_TAB_NUM).find(([, n]) => n === phaseNum)?.[0];
    const label = getPhaseTabConfig(tabId)?.label || uiT('phaseBridge.learningMap', '本阶段');
    const range = getPhaseDayRangeLabel(phaseNum);
    if (mastered) {
      const lastIdx = indices[indices.length - 1];
      showTeacherMessage(getDayCompleteMessage(lastIdx), { expand: true });
    } else {
      showTeacherMessage(
        uiT('path.unmarkPhase', '{name}，已取消「{label}」{range} 的已掌握标记，需要时可以继续学习。', { name: getUserName(), label, range }),
        { expand: true }
      );
    }
  }
  maybeCelebrateGraduation();
}

function renderPhaseDayChips(phaseNum) {
  const prog = loadProgress();
  return (PHASE_DAY_MAP[phaseNum] || []).map(idx => {
    const day = LEARNING_PATH[idx];
    const done = prog.completedDays.includes(idx);
    return `<span class="phase-bridge-day-chip ${done ? 'is-done' : ''}">Day ${day.day}</span>`;
  }).join('');
}

function renderPhaseMasteryBlock(tabId, cfg, { done, total }) {
  const phaseNum = PHASE_TAB_NUM[tabId];
  const range = getPhaseDayRangeLabel(phaseNum);
  const dayChips = renderPhaseDayChips(phaseNum);
  const allDone = total > 0 && done === total;
  const remaining = total - done;

  if (allDone) {
    return `
      <section class="phase-bridge-mastery phase-bridge-mastery--done">
        <span class="phase-bridge-badge">${renderIcon({ image: UI_ICONS.brandStar, className: 'theme-icon theme-icon-badge', size: 16, alt: '' })} ${uiT('mastery.badgeDone', '本阶段已掌握')}</span>
        <h3>${uiT('phaseBridge.phaseRangeDone', '「{label}」{range} 已标记掌握', { label: cfg.label, range })}</h3>
        <p>${uiT('phaseBridge.phaseRangeDoneDesc', '学习计划已同步更新。需要复习可返回上方模块，或取消掌握标记。')}</p>
        <div class="phase-bridge-day-chips">${dayChips}</div>
        <div class="phase-bridge-modules">
          ${cfg.modules.map(m => `<a href="${m.href}" class="phase-bridge-module">${m.label}</a>`).join('')}
        </div>
        <div class="phase-bridge-actions">
          <button type="button" class="btn btn-ghost phase-bridge-unmaster-btn" data-phase-num="${phaseNum}">${uiT('phaseBridge.unmark', uiT('mastery.unmark', '取消已掌握标记'))}</button>
        </div>
      </section>`;
  }

  const markLabel = done > 0
    ? uiT('phaseBridge.markRemaining', '标记剩余 {n} 天已掌握', { n: remaining })
    : uiT('phaseBridge.markPhase', uiT('mastery.markPhase', '标记本阶段已掌握'));

  return `
    <section class="phase-bridge-mastery">
      <span class="phase-bridge-badge">${uiT('phaseBridge.masteryConfirm', uiT('mastery.badgeConfirm', '掌握确认'))}</span>
      <h3>${uiT('phaseBridge.masteryTitle', uiT('mastery.title', '掌握本页内容了吗？'))}</h3>
      <p>${uiT('phaseBridge.masteryDesc', '学完「{label}」各模块后，若内容已熟悉，可标记<strong>已掌握</strong>，学习计划将自动更新（对应 {range}）。', { label: cfg.label, range })}</p>
      <div class="phase-bridge-day-chips">${dayChips}</div>
      <p class="phase-bridge-mastery-progress">${uiT('phaseBridge.masteryProgress', '本阶段进度 <strong>{done}/{total}</strong> 天 · 也可在「学习计划」逐日勾选。', { done, total })}</p>
      <div class="phase-bridge-modules">
        ${cfg.modules.map(m => `<a href="${m.href}" class="phase-bridge-module">${m.label}</a>`).join('')}
      </div>
      <div class="phase-bridge-actions">
        <button type="button" class="btn btn-primary phase-bridge-master-btn" data-phase-num="${phaseNum}">
          <span class="phase-bridge-master-check" aria-hidden="true">✓</span>${markLabel}
        </button>
        <a href="#path" class="btn btn-ghost">${uiT('phaseBridge.viewPath', uiT('mastery.viewPath', '查看学习计划'))}</a>
      </div>
    </section>`;
}

function renderPhaseBridgeStatus(tabId, cfg, { done, total, daysDone, fullyDone, name }) {
  if (fullyDone) {
    const extra = tabId === 'validate'
      ? `<p class="phase-bridge-score">${uiT('phaseBridge.quizBest', '测验最佳成绩：<strong>{score}</strong> / {total}', { score: loadProgress().quizBestScore || 0, total: getQuizData().length })}</p>`
      : '';
    return `
      <section class="phase-bridge-status phase-bridge-status--done">
        <span class="phase-bridge-badge">${renderIcon({ image: UI_ICONS.brandStar, className: 'theme-icon theme-icon-badge', size: 16, alt: '' })} ${uiT('phaseBridge.phaseComplete', uiT('mastery.phaseDone', '本阶段完成'))}</span>
        <h3>${uiT('phaseBridge.phaseSolid', '{name}，「{label}」已扎实掌握', { name, label: cfg.label })}</h3>
        <p>${uiT('phaseBridge.phaseSolidDesc', '当前阶段学习目标已达成，可以进入下一阶段继续进阶。')}</p>
        ${extra}
      </section>`;
  }

  if (tabId === 'validate') {
    if (daysDone) {
      const best = loadProgress().quizBestScore || 0;
      return `
        <section class="phase-bridge-status phase-bridge-status--quiz">
          <span class="phase-bridge-badge">${uiT('phaseBridge.quizDayDone', uiT('mastery.quizDay', 'Day 7 已打卡'))}</span>
          <h3>${uiT('phaseBridge.quizFinalStep', uiT('mastery.quizTitle', '完成本阶段最后一步：知识测验'))}</h3>
          <p>${uiT('phaseBridge.quizTarget', '目标 {pass}/{total} 分以上。当前最佳：{score} 分。', { pass: GRADUATION_QUIZ_PASS, total: getQuizData().length, score: best })}</p>
          <div class="phase-bridge-actions">
            <a href="#quiz" class="btn btn-ghost">${uiT('phaseBridge.startQuiz', '开始 / 继续测验')}</a>
          </div>
        </section>`;
    }
    return '';
  }

  return renderPhaseMasteryBlock(tabId, cfg, { done, total });
}

function renderPhaseBridgeNextBlock(tabId, cfg, nextCfg, { highlight = false } = {}) {
  if (!cfg?.next || !nextCfg) return '';
  const currentNum = PHASE_TAB_NUM[tabId];
  const nextNum = PHASE_TAB_NUM[cfg.next];
  const isMap = cfg.next === 'map';

  const flow = isMap
    ? `<span class="phase-bridge-flow-pill">${uiT('phaseBridge.phaseFlowReview', '阶段 04 · 检验巩固')}</span>
       <span class="phase-bridge-flow-arrow" aria-hidden="true">→</span>
       <span class="phase-bridge-flow-pill phase-bridge-flow-pill--next">${uiT('phaseBridge.phaseFlowMap', '学习地图 · 复盘总结')}</span>`
    : `<span class="phase-bridge-flow-pill">${uiT('phaseBridge.phaseFlowFrom', '阶段 {num} · {label}', { num: formatPhaseNum(currentNum), label: cfg.label })}</span>
       <span class="phase-bridge-flow-arrow" aria-hidden="true">→</span>
       <span class="phase-bridge-flow-pill phase-bridge-flow-pill--next">${uiT('phaseBridge.phaseFlowFrom', '阶段 {num} · {label}', { num: formatPhaseNum(nextNum), label: nextCfg.label })}</span>`;

  return `
    <section class="phase-bridge-next ${highlight ? 'phase-bridge-next--highlight' : ''}" aria-label="前往下一阶段">
      <p class="phase-bridge-next-eyebrow">${uiT('phaseBridge.nextPhase', '下一阶段')}</p>
      <div class="phase-bridge-flow">${flow}</div>
      <p class="phase-bridge-next-desc">${cfg.nextDesc}</p>
      <button type="button" class="btn btn-primary phase-bridge-go-btn" data-goto-phase="${cfg.next}">
        ${cfg.nextLabel} →
      </button>
    </section>`;
}

function updatePhaseBridges() {
  ['learn', 'tools', 'practice', 'validate'].forEach(tabId => {
    const bridge = document.getElementById(`phase-bridge-${tabId}`);
    const cfg = getPhaseTabConfig(tabId);
    if (!bridge || !cfg) return;

    const phaseNum = PHASE_TAB_NUM[tabId];
    const { done, total } = getPhaseProgress(phaseNum);
    const daysDone = isPhaseDaysComplete(phaseNum);
    const fullyDone = isPhaseTabComplete(tabId);
    const name = getUserName();
    const nextCfg = getPhaseTabConfig(cfg.next);
    const statusClass = fullyDone ? 'done' : (daysDone && tabId === 'validate' ? 'quiz' : 'pending');

    const statusHtml = renderPhaseBridgeStatus(tabId, cfg, { done, total, daysDone, fullyDone, name });
    const nextHtml = tabId === 'validate'
      ? ''
      : renderPhaseBridgeNextBlock(tabId, cfg, nextCfg, { highlight: fullyDone || (daysDone && tabId !== 'validate') });

    if (!statusHtml && !nextHtml) {
      bridge.innerHTML = '';
      bridge.className = 'phase-next-bridge phase-next-bridge--empty';
      bridge.hidden = true;
      return;
    }

    bridge.hidden = false;
    bridge.className = `phase-next-bridge phase-next-bridge--${statusClass}`;
    bridge.innerHTML = `
      <div class="phase-bridge-inner">
        ${statusHtml}
        ${statusHtml && nextHtml ? '<div class="phase-bridge-divider" role="presentation"></div>' : ''}
        ${nextHtml}
      </div>`;
  });
}

function handlePhaseBridgeClick(e) {
  const btn = e.target.closest('.phase-bridge-go-btn');
  if (!btn) return;
  const tab = btn.dataset.gotoPhase;
  const name = getUserName();
  const label = getPhaseTabConfig(tab)?.label || uiT('phaseBridge.learningMap', '学习地图');
  const fromTab = currentPhaseTab;
  const jumpingAhead = fromTab !== 'map' && tab !== fromTab && !isPhaseTabComplete(fromTab);

  goToPhaseTab(tab);

  if (jumpingAhead) {
    showTeacherMessage(
      uiT('phaseBridge.jumpAhead', '{name}，已带你进入「{label}」。当前阶段还没全部完成也没关系，随时可以从学习地图回来继续。', { name, label }),
      { expand: true }
    );
  } else {
    showTeacherMessage(uiT('phaseBridge.jumpNext', '{name}，很好！我们进入「{label}」，继续加油。', { name, label }), { expand: true });
  }
}

function initPhaseTabs() {
  hashToPhaseTab = buildHashToPhaseTabMap();
  repairNavTabs();
  renderPhaseBridges();
  updatePhaseBridges();

  document.addEventListener('click', e => {
    const masterBtn = e.target.closest('.phase-bridge-master-btn');
    if (masterBtn) {
      const phaseNum = parseInt(masterBtn.dataset.phaseNum, 10);
      if (phaseNum) setPhaseDaysMastery(phaseNum, true);
      return;
    }
    const unmasterBtn = e.target.closest('.phase-bridge-unmaster-btn');
    if (unmasterBtn) {
      const phaseNum = parseInt(unmasterBtn.dataset.phaseNum, 10);
      if (phaseNum) setPhaseDaysMastery(phaseNum, false);
      return;
    }
    if (e.target.closest('.phase-bridge-go-btn')) {
      handlePhaseBridgeClick(e);
      return;
    }
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;
    if (anchor.target === '_blank' || anchor.hasAttribute('download')) return;
    e.preventDefault();
    navigateToHash(href);
    document.querySelector('.main-nav')?.classList.remove('open');
    document.querySelector('.nav-toggle')?.setAttribute('aria-expanded', 'false');
  });

  window.addEventListener('hashchange', () => {
    if (phaseTabNavigating) return;
    navigateToHash(location.hash, { updateHistory: false });
  });

  const initialHash = location.hash || (() => {
    const last = localStorage.getItem(PHASE_TAB_KEY);
    if (last && PHASE_TAB_CONFIG[last]) return `#${PHASE_TAB_CONFIG[last].navHash}`;
    return '#roadmap';
  })();

  navigateToHash(initialHash, { updateHistory: false, behavior: 'auto' });
}

function getPhaseProgress(phaseNum) {
  const prog = loadProgress();
  const dayIndices = PHASE_DAY_MAP[phaseNum] || [];
  const done = dayIndices.filter(i => prog.completedDays.includes(i)).length;
  return { done, total: dayIndices.length };
}

function isGraduated() {
  const prog = loadProgress();
  const allDaysDone = LEARNING_PATH.every((_, i) => prog.completedDays.includes(i));
  return allDaysDone && (prog.quizBestScore || 0) >= GRADUATION_QUIZ_PASS;
}

function getGraduationProgressHint() {
  const prog = loadProgress();
  const daysDone = prog.completedDays.length;
  const daysTotal = LEARNING_PATH.length;
  const quizScore = prog.quizBestScore || 0;
  if (isGraduated()) return null;
  const missingDays = daysTotal - daysDone;
  if (missingDays > 0 && quizScore >= GRADUATION_QUIZ_PASS) {
    return uiT('graduation.hintQuizPassNeedDays', '测验已达标，还差 {n} 天学习计划即可结业。', { n: missingDays });
  }
  if (missingDays === 0 && quizScore < GRADUATION_QUIZ_PASS) {
    return uiT('graduation.hintDaysDoneNeedQuiz', '7 天已全部完成，测验达到 {pass} 分即可结业。', { pass: GRADUATION_QUIZ_PASS });
  }
  return null;
}

function getContinueLearningTarget() {
  const prog = loadProgress();
  const allDaysDone = LEARNING_PATH.every((_, i) => prog.completedDays.includes(i));

  if (isGraduated()) {
    return {
      type: 'graduation',
      label: uiT('graduation.continueLabel', '查看结业报告'),
      sublabel: uiT('graduation.continueSublabel', '7 天学习已圆满完成'),
      href: '#graduation',
    };
  }

  if (!allDaysDone) {
    const dayIdx = LEARNING_PATH.findIndex((_, i) => !prog.completedDays.includes(i));
    const day = typeof I18n !== 'undefined' ? I18n.localizePathDay(LEARNING_PATH[dayIdx], dayIdx) : LEARNING_PATH[dayIdx];
    const firstGoto = day.goto?.[0];
    return {
      type: 'day',
      dayIdx,
      day,
      label: `${I18n.t('nav.continue').replace(/\s*→\s*$/, '')} Day ${day.day}`,
      sublabel: day.title,
      href: firstGoto?.href || '#path',
      phaseLabel: getPhaseShortLabels()[day.phase],
      phaseHash: `#${PHASE_HASH_FROM_NUM[day.phase]}`,
    };
  }

  return {
    type: 'quiz',
    label: uiT('graduation.continueQuizLabel', '去做知识测验'),
    sublabel: uiT('graduation.continueQuizSublabel', '目标 {pass}/{total} 分即可结业', {
      pass: GRADUATION_QUIZ_PASS,
      total: getQuizData().length,
    }),
    href: '#quiz',
  };
}

function updateContinueLearningCTA() {
  const target = getContinueLearningTarget();
  const headerBtn = document.getElementById('header-continue');
  const heroBtn = document.getElementById('hero-continue');

  const headerText = target.type === 'day'
    ? uiT('graduation.continueDayHeader', '继续 Day {day} →', { day: target.day.day })
    : target.type === 'graduation'
      ? uiT('graduation.continueGradHeader', '结业报告 →')
      : `${target.label} →`;
  const heroText = target.type === 'day'
    ? uiT('graduation.continueDayHero', '继续 Day {day}：{sublabel}', { day: target.day.day, sublabel: target.sublabel })
    : target.type === 'graduation'
      ? uiT('graduation.continueLabel', '查看结业报告')
      : target.label;

  [headerBtn, heroBtn].forEach(btn => {
    if (!btn) return;
    btn.href = target.href;
    btn.hidden = false;
    btn.title = target.sublabel || target.label;
  });
  if (headerBtn) headerBtn.textContent = headerText;
  if (heroBtn) heroBtn.textContent = heroText;
}

function updateAllProgress() {
  const prog = loadProgress();
  const total = LEARNING_PATH.length;
  const done = prog.completedDays.length;
  const pct = Math.round((done / total) * 100);

  document.getElementById('path-progress-fill').style.width = `${pct}%`;
  document.getElementById('path-progress-text').textContent = I18n.t('path.progress', { done, total });
  const pathTabProg = document.getElementById('path-tab-progress');
  if (pathTabProg) pathTabProg.textContent = I18n.t('path.tabProgress', { done });

  const overallFill = document.getElementById('roadmap-overall-fill');
  const overallText = document.getElementById('roadmap-overall-text');
  const headerProg = document.getElementById('header-progress');
  if (overallFill) overallFill.style.width = `${pct}%`;
  if (overallText) overallText.textContent = I18n.t('roadmap.overall', { pct });
  if (headerProg) headerProg.textContent = `${pct}%`;

  [1, 2, 3, 4].forEach(p => {
    const { done: pd, total: pt } = getPhaseProgress(p);
    const el = document.getElementById(`phase-progress-${p}`);
    if (el) el.textContent = I18n.t('roadmap.daysDone', { done: pd, total: pt });
    const card = document.querySelector(`.roadmap-card[data-phase="${p}"]`);
    if (card) card.classList.toggle('done', pd === pt && pt > 0);
    const cardProg = card?.querySelector('.roadmap-card-progress');
    if (cardProg) cardProg.textContent = I18n.t('roadmap.daysDone', { done: pd, total: pt });
  });
  updatePhaseBridges();
  updateContinueLearningCTA();
  updateGraduationUI();
}

function renderGraduationStats() {
  const prog = loadProgress();
  const name = getUserName();
  const statsEl = document.getElementById('graduation-stats');
  if (!statsEl) return;
  statsEl.innerHTML = `
    <div class="graduation-stat">
      <span class="graduation-stat-num">7/7</span>
      <span class="graduation-stat-label">${uiT('graduation.statPath', '学习计划')}</span>
    </div>
    <div class="graduation-stat">
      <span class="graduation-stat-num">${prog.quizBestScore || 0}</span>
      <span class="graduation-stat-label">${uiT('graduation.statQuiz', '测验最佳（/{total}）', { total: getQuizData().length })}</span>
    </div>
    <div class="graduation-stat">
      <span class="graduation-stat-num">4</span>
      <span class="graduation-stat-label">${uiT('graduation.statPhases', '阶段通关')}</span>
    </div>
    <div class="graduation-stat">
      <span class="graduation-stat-num">100+</span>
      <span class="graduation-stat-label">${uiT('graduation.statContent', '术语与案例')}</span>
    </div>`;

  const title = document.getElementById('graduation-title');
  const desc = document.getElementById('graduation-desc');
  const dateEl = document.getElementById('graduation-date');
  if (title) title.textContent = uiT('graduation.title', '{name}，7 天 AI 学习圆满完成！', { name });
  if (desc) desc.textContent = uiT('graduation.desc', '你已走完「认知 → 工具 → 实战 → 检验」全流程，具备系统的 AI 认知与实战起点。');
  if (dateEl) {
    const dateStr = formatLocaleDate(prog.graduatedAt);
    dateEl.textContent = dateStr ? uiT('graduation.date', '结业日期：{date}', { date: dateStr }) : '';
  }

  const listEl = document.getElementById('graduation-module-list');
  if (listEl) {
    listEl.innerHTML = getGraduationModulesData().map(g => `
      <li class="graduation-module-group">
        <span class="graduation-module-phase">${g.phase}</span>
        <ul>${g.items.map(item => `<li>${item}</li>`).join('')}</ul>
      </li>`).join('');
  }
}

function renderPracticePlanFocus() {
  const fieldset = document.querySelector('.practice-plan-focus');
  const focusData = typeof I18n !== 'undefined' ? I18n.getPracticePlanFocus() : null;
  if (!fieldset || !focusData) return;
  const saved = [...fieldset.querySelectorAll('input:checked')].map(cb => cb.value);
  fieldset.innerHTML = focusData.map(f =>
    `<label><input type="checkbox" name="focus" value="${f.value}"> ${f.label}</label>`
  ).join('');
  fieldset.querySelectorAll('input').forEach(cb => {
    cb.checked = saved.includes(cb.value);
  });
}

function renderPracticePlanWeeks({ force = false } = {}) {
  const container = document.getElementById('practice-plan-weeks');
  if (!container || (container.dataset.rendered && !force)) return;
  const labels = getDeviceLabels();
  const focusPh = uiT('graduation.focusPlaceholder', '例：用 AI 优化周报写作流程');
  const p1Ph = uiT('graduation.p1Placeholder', '例：周二用 ChatGPT 起草周报');
  const p2Ph = uiT('graduation.p2Placeholder', '例：周五用提示词模板做竞品简析');
  container.innerHTML = [1, 2, 3, 4].map(w => `
    <div class="practice-plan-week">
      <h4>${interpolateFallback(labels.weekN || '第 {n} 周', { n: w })}</h4>
      <label class="practice-plan-field">
        <span>${labels.focusThisWeek || '本周重点'}</span>
        <input type="text" name="week${w}-focus" placeholder="${focusPh}" maxlength="120">
      </label>
      <label class="practice-plan-field">
        <span>${labels.practice1 || '实践 1'}</span>
        <input type="text" name="week${w}-p1" placeholder="${p1Ph}" maxlength="120">
      </label>
      <label class="practice-plan-field">
        <span>${labels.practice2 || '实践 2'}</span>
        <input type="text" name="week${w}-p2" placeholder="${p2Ph}" maxlength="120">
      </label>
    </div>`).join('');
  container.dataset.rendered = 'true';
}

function loadPracticePlanForm() {
  const prog = loadProgress();
  const plan = prog.practicePlan30 || {};
  const form = document.getElementById('practice-plan-form');
  if (!form) return;
  form.querySelectorAll('input[type="checkbox"][name="focus"]').forEach(cb => {
    cb.checked = (plan.focus || []).includes(cb.value);
  });
  [1, 2, 3, 4].forEach(w => {
    const focus = form.querySelector(`[name="week${w}-focus"]`);
    const p1 = form.querySelector(`[name="week${w}-p1"]`);
    const p2 = form.querySelector(`[name="week${w}-p2"]`);
    if (focus) focus.value = plan[`week${w}Focus`] || '';
    if (p1) p1.value = plan[`week${w}P1`] || '';
    if (p2) p2.value = plan[`week${w}P2`] || '';
  });
}

function collectPracticePlan() {
  const form = document.getElementById('practice-plan-form');
  if (!form) return {};
  const focus = [...form.querySelectorAll('input[name="focus"]:checked')].map(cb => cb.value);
  const plan = { focus };
  [1, 2, 3, 4].forEach(w => {
    plan[`week${w}Focus`] = form.querySelector(`[name="week${w}-focus"]`)?.value?.trim() || '';
    plan[`week${w}P1`] = form.querySelector(`[name="week${w}-p1"]`)?.value?.trim() || '';
    plan[`week${w}P2`] = form.querySelector(`[name="week${w}-p2"]`)?.value?.trim() || '';
  });
  plan.savedAt = new Date().toISOString();
  return plan;
}

function savePracticePlan({ silent = false } = {}) {
  const prog = loadProgress();
  prog.practicePlan30 = collectPracticePlan();
  saveProgress(prog);
  const hint = document.getElementById('practice-plan-saved');
  if (!silent && hint) {
    hint.classList.remove('hidden');
    setTimeout(() => hint.classList.add('hidden'), 2000);
  }
}

function buildGraduationReportText() {
  const prog = loadProgress();
  const name = getUserName();
  const dateStr = formatLocaleDate(prog.graduatedAt) || uiT('graduation.today', '今日');
  const plan = prog.practicePlan30 || {};
  const focusLabels = (plan.focus || []).map(getPracticePlanFocusLabel);
  const focusSep = typeof I18n !== 'undefined' && I18n.getLocale() === 'en' ? ', ' : '、';
  const focus = focusLabels.join(focusSep) || uiT('graduation.unfilled', '（未填写）');
  const brand = typeof I18n !== 'undefined' ? I18n.getBrandName() : 'BestWayToLearn.AI';
  const siteUrl = typeof I18n !== 'undefined' ? I18n.getSiteUrl() : 'https://bestwaytolearn.ai/';
  const pending = uiT('graduation.reportPending', '（待填写）');
  let report = `${brand} · ${uiT('graduation.reportTitle', '结业报告')}\n`;
  report += `${siteUrl}\n`;
  report += `============================\n`;
  report += `${uiT('graduation.reportNickname', '昵称：{name}', { name })}\n`;
  report += `${uiT('graduation.reportDate', '结业日期：{date}', { date: dateStr })}\n`;
  report += `${uiT('graduation.reportPath', '学习计划：7/7 天完成')}\n`;
  report += `${uiT('graduation.reportQuiz', '测验最佳：{score} / {total}', { score: prog.quizBestScore || 0, total: getQuizData().length })}\n`;
  report += `\n【${uiT('graduation.reportFootprint', '学习足迹')}】\n`;
  getGraduationModulesData().forEach(g => {
    report += `\n${g.phase}\n`;
    g.items.forEach(item => { report += `  · ${item}\n`; });
  });
  report += `\n【${uiT('graduation.reportPlan', '未来 30 天实践计划')}】\n`;
  report += `${uiT('graduation.reportFocus', '重点方向：{focus}', { focus })}\n`;
  [1, 2, 3, 4].forEach(w => {
    report += `\n${uiT('graduation.reportWeek', '第 {n} 周', { n: w })}\n`;
    report += `${uiT('graduation.reportWeekFocus', '  重点：{text}', { text: plan[`week${w}Focus`] || pending })}\n`;
    report += `${uiT('graduation.reportWeekP1', '  实践 1：{text}', { text: plan[`week${w}P1`] || pending })}\n`;
    report += `${uiT('graduation.reportWeekP2', '  实践 2：{text}', { text: plan[`week${w}P2`] || pending })}\n`;
  });
  report += `\n${uiT('graduation.reportClosing', '—— 学习 AI 最好的方式，就是带着真实问题去实践。')}`;
  return report;
}

function maybeCelebrateGraduation() {
  if (!isGraduated()) return;
  const prog = loadProgress();
  if (!prog.graduatedAt) {
    prog.graduatedAt = new Date().toISOString();
    saveProgress(prog);
    showTeacherMessage(uiT('graduation.celebrate', '{name}，恭喜你正式结业！7 天学习 + 测验达标，快去查看结业报告，并填写未来 30 天实践计划 🎉', { name: getUserName() }));
  }
  updateGraduationUI();
}

function updateGraduationUI() {
  const graduated = isGraduated();
  const section = document.getElementById('graduation');
  const banner = document.getElementById('graduation-banner');
  const viewBtn = document.getElementById('view-graduation-btn');
  const hint = getGraduationProgressHint();

  section?.classList.toggle('hidden', !graduated);
  banner?.classList.toggle('hidden', !graduated);
  viewBtn?.classList.toggle('hidden', !graduated);

  if (graduated) {
    renderGraduationStats();
    loadPracticePlanForm();
    const bannerMsg = document.getElementById('graduation-banner-msg');
    if (bannerMsg) {
      bannerMsg.textContent = uiT('graduation.bannerMsg', '{name}，你已完成 7 天学习与知识测验，正式结业！', { name: getUserName() });
    }
  }

  renderQuizPrelude();
}

function initGraduation() {
  renderPracticePlanFocus();
  renderPracticePlanWeeks();
  loadPracticePlanForm();

  const form = document.getElementById('practice-plan-form');
  form?.addEventListener('input', () => savePracticePlan({ silent: true }));
  form?.addEventListener('change', () => savePracticePlan({ silent: true }));

  document.getElementById('export-practice-plan')?.addEventListener('click', () => {
    savePracticePlan({ silent: true });
    const text = buildGraduationReportText();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = uiT('graduation.exportFilename', 'BestWayToLearn-AI-结业报告-{name}.txt', { name: getUserName() });
    a.click();
    URL.revokeObjectURL(a.href);
    showTeacherMessage(uiT('graduation.exportMsg', '结业报告已导出为文本文件，可保存或分享。'));
  });

  document.getElementById('copy-graduation-report')?.addEventListener('click', async () => {
    savePracticePlan({ silent: true });
    const text = buildGraduationReportText();
    try {
      await navigator.clipboard.writeText(text);
      showTeacherMessage(uiT('graduation.copyMsg', '结业报告已复制到剪贴板。'));
    } catch {
      showTeacherMessage(uiT('graduation.copyFail', '复制失败，请使用「导出计划」下载文本文件。'));
    }
  });

  updateGraduationUI();
}

function renderRoadmap() {
  const container = document.getElementById('roadmap-grid');
  if (!container) return;
  const phases = typeof I18n !== 'undefined' ? I18n.localizePhases() : LEARNING_PHASES;
  container.innerHTML = phases.map((phase, i) => {
    const phaseNum = i + 1;
    const phaseId = PHASE_IDS[phaseNum];
    const total = PHASE_DAY_MAP[phaseNum].length;
    return `
      <div class="roadmap-card" data-phase="${phaseNum}">
        <span class="roadmap-card-num">${I18n.t('roadmap.phaseLabel', { num: phase.num })}</span>
        <h3>${phase.title}</h3>
        <p class="roadmap-card-sub">${phase.subtitle} · ${phase.days}</p>
        <p class="roadmap-card-desc">${phase.desc}</p>
        <div class="roadmap-modules">
          ${phase.modules.map(m => `<span class="roadmap-module-tag">${m}</span>`).join('')}
        </div>
        <div class="roadmap-card-footer">
          <span class="roadmap-card-days">${phase.days}</span>
          <span class="roadmap-card-progress" data-phase-progress="${phaseNum}">${I18n.t('roadmap.daysDone', { done: 0, total })}</span>
        </div>
        <a href="#${phaseId}" class="roadmap-card-link">${I18n.t('roadmap.enter')}</a>
      </div>`;
  }).join('');
  updateAllProgress();
}

function renderLearningPath() {
  const container = document.getElementById('path-timeline');
  const progress = loadProgress();
  const phaseLabels = getPhaseShortLabels();
  container.innerHTML = LEARNING_PATH.map((rawDay, i) => {
    const day = typeof I18n !== 'undefined' ? I18n.localizePathDay(rawDay, i) : rawDay;
    const done = progress.completedDays.includes(i);
    const phaseLabel = phaseLabels[day.phase] || `${I18n.t('common.phase')} ${day.phase}`;
    const phaseHash = `#${PHASE_HASH_FROM_NUM[day.phase]}`;
    const gotoLinks = (day.goto || []).map(g =>
      `<a href="${g.href}" class="path-goto-link">${g.label} →</a>`
    ).join('');
    return `
      <div class="path-day ${done ? 'completed' : ''}" data-day="${i}">
        <span class="path-day-num">${I18n.t('common.day')} ${day.day} · ${day.duration}</span>
        <div>
          <div class="path-day-phase-row">
            <span class="path-phase-tag path-phase-${day.phase}">${I18n.t('common.phase')} ${String(day.phase).padStart(2, '0')}</span>
            <span class="path-day-phase-label">${I18n.t('path.phaseBelongs', { phase: phaseLabel })}</span>
          </div>
          <h3>${day.title}</h3>
          <p class="path-goal"><strong>${I18n.t('path.goal')}</strong>${day.goal}</p>
          <p>${day.desc}</p>
          <ul>${day.tasks.map(t => `<li>${t}</li>`).join('')}</ul>
          <div class="path-goto">
            ${gotoLinks}
            <a href="${phaseHash}" class="path-phase-enter">${I18n.t('path.enterPhase', { phase: phaseLabel })}</a>
          </div>
          <p class="path-milestone">${renderIcon({ image: UI_ICONS.brandStar, className: 'theme-icon theme-icon-inline', size: 18, alt: '' })} ${day.milestone}</p>
        </div>
        <button class="path-check ${done ? 'is-done' : ''}" type="button"
          aria-pressed="${done}"
          title="${done ? I18n.t('path.checkDone') : I18n.t('path.checkTodo')}"
          aria-label="${I18n.t('common.day')} ${day.day}: ${done ? I18n.t('path.checkAriaDone') : I18n.t('path.checkAriaTodo')}">
          <span class="path-check-box" aria-hidden="true">${done ? '✓' : ''}</span>
          <span class="path-check-label">${I18n.t('path.mastered')}</span>
        </button>
      </div>`;
  }).join('');
  updateAllProgress();
  container.querySelectorAll('.path-check').forEach(btn => {
    btn.addEventListener('click', () => {
      const dayEl = btn.closest('.path-day');
      const idx = parseInt(dayEl.dataset.day, 10);
      const prog = loadProgress();
      setDayMastery(idx, !prog.completedDays.includes(idx));
    });
  });
}

function renderOverviewBlock(section) {
  let body = `
    <p class="overview-lead">${section.lead}</p>`;

  if (section.intro) {
    body += `<p class="overview-intro">${section.intro}</p>`;
  }

  if (section.subsections) {
    body += `<div class="overview-subsections">${section.subsections.map(sub => `
      <div class="overview-subsection">
        <h4>${sub.title}</h4>
        <p>${sub.text}</p>
        ${sub.items ? `<ul class="overview-subsection-list">${sub.items.map(i => `<li>${i}</li>`).join('')}</ul>` : ''}
      </div>`).join('')}</div>`;
  }

  if (section.points) {
    body += `<div class="overview-points">${section.points.map(p =>
      `<div class="overview-point"><strong>${p.label}</strong><span>${p.text}</span></div>`
    ).join('')}</div>`;
  }

  if (section.capabilities) {
    body += `<div class="overview-cap-grid">${section.capabilities.map(c => {
      const visual = c.image
        ? `<div class="overview-cap-visual"><img src="${c.image}" alt="${c.title}" loading="lazy" decoding="async" width="400" height="250"></div>`
        : `<span class="overview-cap-icon">${c.icon || '✦'}</span>`;
      const examples = c.examples?.length
        ? `<ul class="overview-cap-examples">${c.examples.map(e => `<li>${e}</li>`).join('')}</ul>`
        : '';
      const detail = c.detail ? `<p class="overview-cap-detail">${c.detail}</p>` : '';
      const tip = c.tip ? `<p class="overview-cap-tip"><strong>${uiT('overview.collabTip', '协作要点：')}</strong>${c.tip}</p>` : '';
      return `<div class="overview-cap-card">${visual}<div class="overview-cap-body"><strong>${c.title}</strong><p class="overview-cap-desc">${c.desc}</p>${detail}${examples}${tip}</div></div>`;
    }).join('')}</div>`;
  }

  if (section.boundaries) {
    body += `<div class="overview-boundaries">
      <h4>${section.boundaries.title}</h4>
      <ul>${section.boundaries.items.map(i => `<li>${i}</li>`).join('')}</ul>
    </div>`;
  }

  if (section.collabTips) {
    body += `<div class="overview-collab-tips">
      <h4>${section.collabTips.title}</h4>
      <div class="overview-points">${section.collabTips.items.map(p =>
        `<div class="overview-point"><strong>${p.label}</strong><span>${p.text}</span></div>`
      ).join('')}</div>
    </div>`;
  }

  if (section.toolGroups) {
    body += `<div class="overview-tool-grid">${section.toolGroups.map(g =>
      `<div class="overview-tool-card">
        <div class="overview-tool-head">${renderIcon({ emoji: g.emoji, className: 'theme-icon theme-icon-sm', size: 32, alt: g.category })}<strong>${g.category}</strong></div>
        <p class="overview-tool-names">${g.tools}</p>
        <p class="overview-tool-use">${uiT('overview.suitable', '适合：')}${g.use}</p>
      </div>`
    ).join('')}</div>
    <p class="overview-link-row"><a href="#apps" class="overview-link">${uiT('overview.appsLink', '查看 43 款主流应用详细介绍 →')}</a></p>`;
  }

  if (section.fields) {
    body += `<div class="overview-field-grid">${section.fields.map(f =>
      `<div class="overview-field-card">${renderIcon({ emoji: f.icon, className: 'theme-icon overview-field-icon', size: 40, alt: f.name })}<strong>${f.name}</strong><p>${f.cases}</p></div>`
    ).join('')}</div>`;
  }

  if (section.timeline) {
    body += `<div class="overview-timeline">${section.timeline.map(t =>
      `<div class="overview-timeline-item">
        <h4>${t.period}</h4>
        <ul>${t.items.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>`
    ).join('')}</div>`;
  }

  if (section.lifeChanges) {
    body += `<div class="overview-life-grid">${section.lifeChanges.map(l =>
      `<div class="overview-life-card">${renderIcon({ emoji: l.icon, className: 'theme-icon theme-icon-sm', size: 36, alt: l.title })}<strong>${l.title}</strong><p>${l.text}</p></div>`
    ).join('')}</div>`;
  }

  if (section.note) {
    body += `<div class="overview-note">${section.note}</div>`;
  }

  return body;
}

function renderAiOverview() {
  const nav = document.getElementById('overview-nav');
  const container = document.getElementById('overview-blocks');
  if (!nav || !container) return;

  const sections = getAiOverviewData();
  nav.innerHTML = sections.map(s =>
    `<a class="overview-nav-link" href="#overview-${s.id}">${s.navLabel || s.title}</a>`
  ).join('');

  container.innerHTML = sections.map(s => `
    <article class="overview-block" id="overview-${s.id}">
      <div class="overview-block-header" style="--block-accent:${s.color}">
        ${renderIcon({
          image: OVERVIEW_SECTION_ICON[s.id] ? iconPathFromSlug(OVERVIEW_SECTION_ICON[s.id]) : iconPathFromEmoji(s.icon),
          emoji: s.icon,
          className: 'theme-icon overview-block-icon',
          size: 48,
          alt: s.title
        })}
        <div>
          <span class="overview-block-tag">${s.tag}</span>
          <h3>${s.title}</h3>
        </div>
      </div>
      <div class="overview-block-body">${renderOverviewBlock(s)}</div>
    </article>`).join('');
}

function renderFundamentals() {
  const container = document.getElementById('fundamentals-grid');
  const fig = document.getElementById('fundamentals-diagram');
  if (fig) {
    const img = fig.querySelector('img');
    const cap = fig.querySelector('figcaption');
    if (img && typeof I18n !== 'undefined') {
      img.alt = I18n.getFundamentalsFigAlt();
    }
    if (cap && typeof I18n !== 'undefined') {
      cap.textContent = I18n.getFundamentalsFigcaption();
    }
  }
  container.innerHTML = getFundamentalsData().map((f, i) => `
    <div class="fundamental-card open" data-idx="${i}">
      <div class="fundamental-header">
        <div class="fundamental-icon" style="background:${f.color}">${renderIcon({ emoji: f.icon, className: 'theme-icon theme-icon-fundamental', size: 36, alt: f.title })}</div>
        <div>
          <h3>${f.title}${f.abbr && f.abbr !== '—' ? `（${f.abbr}）` : ''}</h3>
          <span class="subtitle">${formatEnLabel(f)}</span>
        </div>
        <span class="fundamental-toggle">+</span>
      </div>
      <div class="fundamental-body"><div class="fundamental-content">${f.content}</div></div>
    </div>`).join('');
  container.querySelectorAll('.fundamental-header').forEach(h => {
    h.addEventListener('click', () => h.closest('.fundamental-card').classList.toggle('open'));
  });
}

function renderTermFilters(containerId, activeCategory, onSelect) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const isActive = cat =>
    cat === activeCategory || (cat === '全部' && isAllTermsCategory(activeCategory));
  container.innerHTML = TERM_CATEGORIES.map(cat =>
    `<button class="filter-btn ${isActive(cat) ? 'active' : ''}" data-cat="${cat}" type="button">${getTermFilterLabel(cat)}</button>`
  ).join('');
  if (!container.dataset.bound) {
    container.dataset.bound = 'true';
    container.addEventListener('click', e => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      onSelect(btn.dataset.cat);
    });
  }
}

let conceptsFlipAllActive = false;
let conceptsAutoFlipEnabled = true;

function getVisibleConceptCards() {
  return [...document.querySelectorAll('#concepts-grid .concept-card')];
}

function syncConceptFlipAllButton() {
  const btn = document.getElementById('concepts-flip-all');
  if (!btn) return;
  const cards = getVisibleConceptCards();
  if (!cards.length) {
    btn.disabled = true;
    btn.textContent = uiT('terms.flipAll', typeof I18n !== 'undefined' ? I18n.t('terms.flipAll') : '全部翻转');
    btn.setAttribute('aria-pressed', 'false');
    return;
  }
  btn.disabled = false;
  const allFlipped = cards.every(c => c.classList.contains('flipped'));
  conceptsFlipAllActive = allFlipped;
  btn.textContent = allFlipped
    ? uiT('terms.flipAllBack', typeof I18n !== 'undefined' ? I18n.t('terms.flipAllBack') : '全部翻回')
    : uiT('terms.flipAll', typeof I18n !== 'undefined' ? I18n.t('terms.flipAll') : '全部翻转');
  btn.setAttribute('aria-pressed', allFlipped ? 'true' : 'false');
}

function setAllConceptCardsFlipped(flipped) {
  getVisibleConceptCards().forEach(card => card.classList.toggle('flipped', flipped));
  conceptsFlipAllActive = flipped;
  syncConceptFlipAllButton();
}

function syncConceptAutoFlipButton() {
  const btn = document.getElementById('concepts-auto-flip');
  const cardsView = document.getElementById('knowledge-cards');
  if (btn) {
    btn.setAttribute('aria-pressed', conceptsAutoFlipEnabled ? 'true' : 'false');
    if (typeof I18n !== 'undefined') {
      btn.textContent = conceptsAutoFlipEnabled ? I18n.t('terms.autoFlipOn') : I18n.t('terms.autoFlip');
    } else {
      btn.textContent = conceptsAutoFlipEnabled ? '自动翻转：开' : '自动翻转';
    }
  }
  if (cardsView) cardsView.classList.toggle('concepts-auto-flip-on', conceptsAutoFlipEnabled);
}

function flipConceptCard(card, flipped = true) {
  const next = typeof flipped === 'boolean' ? flipped : !card.classList.contains('flipped');
  card.classList.toggle('flipped', next);
  syncConceptFlipAllButton();
}

function bindConceptCard(card) {
  card.addEventListener('click', () => flipConceptCard(card));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      flipConceptCard(card);
    }
  });
  card.addEventListener('mouseenter', () => {
    if (!conceptsAutoFlipEnabled || card.classList.contains('flipped')) return;
    flipConceptCard(card, true);
  });
  card.addEventListener('focus', () => {
    if (!conceptsAutoFlipEnabled || card.classList.contains('flipped')) return;
    flipConceptCard(card, true);
  });
}

function renderConcepts(query = '', category = DEFAULT_TERM_CATEGORY) {
  const container = document.getElementById('concepts-grid');
  const terms = filterTerms(query, category);
  document.getElementById('concepts-count').textContent = typeof I18n !== 'undefined'
    ? I18n.t('terms.count', { n: `${terms.length} / ${getTermsData().length}` })
    : `显示 ${terms.length} / ${getTermsData().length} 条`;

  container.innerHTML = terms.map(c => {
    const abbrBadge = c.abbr && c.abbr !== '—' ? `<span class="concept-abbr">${c.abbr}</span>` : '';
    return `
      <div class="concept-card" tabindex="0" role="button" data-category="${c.category}">
        <div class="concept-inner">
          <div class="concept-front">
            <span class="concept-cat-tag">${c.categoryLabel || c.category}</span>
            <div class="concept-front-top">${abbrBadge}<h4>${termDisplayName(c)}</h4></div>
            <span class="concept-full-en">${c.fullEn}</span>
            <span class="hint">${uiT('terms.flipHintFront', '点击翻转查看详解 →')}</span>
          </div>
          <div class="concept-back">
            <span class="concept-cat-tag">${c.categoryLabel || c.category}</span>
            <div class="concept-front-top">${abbrBadge}<h4>${termDisplayName(c)}</h4></div>
            <span class="concept-full-en">${c.fullEn}</span>
            <p class="concept-back-def">${c.def}</p>
            ${c.example ? `<p class="concept-example"><strong>${uiT('terms.exampleLabel', '示例：')}</strong>${c.example}</p>` : ''}
            <span class="hint">${uiT('terms.flipHintBack', '点击返回正面 ←')}</span>
          </div>
        </div>
      </div>`;
  }).join('') || `<p class="empty-hint">${uiT('terms.empty', '未找到匹配术语，请换个关键词试试。')}</p>`;

  container.querySelectorAll('.concept-card').forEach(bindConceptCard);

  if (conceptsFlipAllActive) {
    container.querySelectorAll('.concept-card').forEach(card => card.classList.add('flipped'));
  }
  syncConceptFlipAllButton();
  syncConceptAutoFlipButton();
}

function renderApps(filter = DEFAULT_APP_CATEGORY) {
  const fc = document.getElementById('apps-filter');
  const labelFor = cat => (typeof I18n !== 'undefined' ? I18n.getAppCategoryLabel(cat) : cat);
  if (!fc.dataset.rendered) {
    fc.innerHTML = APP_CATEGORIES.map(cat =>
      `<button class="filter-btn ${cat === DEFAULT_APP_CATEGORY ? 'active' : ''}" data-cat="${cat}" role="tab">${labelFor(cat)}</button>`
    ).join('');
    fc.dataset.rendered = 'true';
    fc.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        fc.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderAppsGrid(btn.dataset.cat);
      });
    });
  }
  renderAppsGrid(filter);
}

let monetizeCategory = '全部';
let toolsNavQuery = '';

function getToolsNavMetaData() {
  return typeof I18n !== 'undefined' ? I18n.getToolsNavMeta() : (typeof AI_TOOLS_NAV_META !== 'undefined' ? AI_TOOLS_NAV_META : {});
}

function getToolsNavLinks() {
  const links = typeof buildAiToolsNavLinks === 'function' ? buildAiToolsNavLinks() : [];
  return links.map(t => (typeof I18n !== 'undefined' ? I18n.localizeToolsNavTool(t) : t));
}

function toolsNavMatchesQuery(tool, query) {
  if (!query) return true;
  const hay = [tool.name, tool.category, tool.desc, tool.url, ...(tool.tags || [])].join(' ').toLowerCase();
  return hay.includes(query.toLowerCase());
}

function renderToolsNav() {
  const meta = getToolsNavMetaData();
  const lead = document.getElementById('tools-nav-lead');
  if (lead) lead.textContent = meta.lead || '';

  const search = document.getElementById('tools-nav-search');
  if (search && meta.searchPlaceholder) search.placeholder = meta.searchPlaceholder;

  const links = getToolsNavLinks();
  const query = (toolsNavQuery || search?.value || '').trim();
  const categories = typeof AI_TOOLS_NAV_CATEGORIES !== 'undefined' ? AI_TOOLS_NAV_CATEGORIES : [];
  const filtered = links.filter(t => toolsNavMatchesQuery(t, query));
  const activeCats = categories.filter(cat => filtered.some(t => t.category === cat));

  const bannerStat = document.getElementById('tools-nav-banner-stat');
  if (bannerStat) {
    bannerStat.textContent = typeof I18n !== 'undefined'
      ? I18n.interpolate(I18n.t('toolsNavPage.bannerStat'), { n: links.length })
      : `${links.length} 个工具`;
  }

  const stats = document.getElementById('tools-nav-stats');
  if (stats) {
    stats.textContent = typeof I18n !== 'undefined'
      ? I18n.interpolate(meta.totalLabel, { n: filtered.length, c: activeCats.length })
      : `共 ${filtered.length} 个工具 · ${activeCats.length} 个分类`;
  }

  const jump = document.getElementById('tools-nav-jump');
  if (jump) {
    jump.innerHTML = activeCats.map(cat => {
      const slug = typeof getAiToolsNavCategorySlug === 'function' ? getAiToolsNavCategorySlug(cat) : cat;
      const label = typeof I18n !== 'undefined' ? I18n.getToolsNavCategoryLabel(cat) : cat;
      const count = filtered.filter(t => t.category === cat).length;
      return `<a class="tools-nav-jump-btn" href="#tools-nav-cat-${slug}">${label}<span>${count}</span></a>`;
    }).join('');
  }

  const body = document.getElementById('tools-nav-body');
  const empty = document.getElementById('tools-nav-empty');
  if (!body) return;

  if (!filtered.length) {
    body.innerHTML = '';
    if (empty) {
      empty.textContent = meta.empty || '';
      empty.classList.remove('hidden');
    }
    return;
  }
  if (empty) empty.classList.add('hidden');

  const featuredBadge = meta.featuredBadge || '本站推荐';
  const catLabel = cat => (typeof I18n !== 'undefined' ? I18n.getToolsNavCategoryLabel(cat) : cat);

  body.innerHTML = activeCats.map(cat => {
    const items = filtered.filter(t => t.category === cat);
    const slug = typeof getAiToolsNavCategorySlug === 'function' ? getAiToolsNavCategorySlug(cat) : cat;
    const countLabel = typeof I18n !== 'undefined'
      ? I18n.interpolate(meta.countLabel, { n: items.length })
      : `${items.length} 个工具`;
    return `
      <section class="tools-nav-category" id="tools-nav-cat-${slug}">
        <header class="tools-nav-category-head">
          <h3 class="tools-nav-category-title">${catLabel(cat)}</h3>
          <span class="tools-nav-category-count">${countLabel}</span>
        </header>
        <div class="tools-nav-chip-grid">
          ${items.map(tool => {
            const icon = renderIcon({
              image: iconPathForApp(tool.name, tool.emoji),
              emoji: tool.emoji,
              className: 'theme-icon tools-nav-chip-icon',
              size: 22,
              alt: '',
            });
            return `
            <a class="tools-nav-chip${tool.featured ? ' is-featured' : ''}" href="${tool.url}" target="_blank" rel="noopener noreferrer">
              <div class="tools-nav-chip-head">
                <span class="tools-nav-chip-icon-wrap">${icon}</span>
                <span class="tools-nav-chip-name">${tool.name}</span>
                ${tool.featured ? `<span class="tools-nav-chip-badge">${featuredBadge}</span>` : ''}
              </div>
              <p class="tools-nav-chip-desc">${tool.desc}</p>
            </a>`;
          }).join('')}
        </div>
      </section>`;
  }).join('');
}

function initToolsNav() {
  const search = document.getElementById('tools-nav-search');
  if (search && !search.dataset.bound) {
    search.dataset.bound = 'true';
    search.addEventListener('input', () => {
      toolsNavQuery = search.value.trim();
      renderToolsNav();
    });
  }
  renderToolsNav();
}

let skillsNavQuery = '';

function getSkillsNavMetaData() {
  return typeof I18n !== 'undefined' ? I18n.getSkillsNavMeta() : (typeof AI_SKILLS_NAV_META !== 'undefined' ? AI_SKILLS_NAV_META : {});
}

function getSkillsNavLinks() {
  const links = typeof buildAiSkillsNavLinks === 'function' ? buildAiSkillsNavLinks() : [];
  return links.map(s => (typeof I18n !== 'undefined' ? I18n.localizeSkillsNavItem(s) : s));
}

function skillsNavMatchesQuery(item, query) {
  if (!query) return true;
  const hay = [item.name, item.category, item.desc, item.github, item.install, item.installNote, ...(item.agents || [])].join(' ').toLowerCase();
  return hay.includes(query.toLowerCase());
}

function formatSkillsNavStars(stars, meta) {
  if (!stars) return '';
  const tpl = meta.starsLabel || '{n} ★';
  return typeof I18n !== 'undefined'
    ? I18n.interpolate(tpl, { n: stars >= 1000 ? `${(stars / 1000).toFixed(stars >= 10000 ? 0 : 1)}k` : stars })
    : `${stars} ★`;
}

function renderSkillsNav() {
  const meta = getSkillsNavMetaData();
  const lead = document.getElementById('skills-nav-lead');
  if (lead) lead.textContent = meta.lead || '';

  const search = document.getElementById('skills-nav-search');
  if (search && meta.searchPlaceholder) search.placeholder = meta.searchPlaceholder;

  const links = getSkillsNavLinks();
  const query = (skillsNavQuery || search?.value || '').trim();
  const categories = typeof AI_SKILLS_NAV_CATEGORIES !== 'undefined' ? AI_SKILLS_NAV_CATEGORIES : [];
  const filtered = links.filter(s => skillsNavMatchesQuery(s, query));
  const activeCats = categories.filter(cat => filtered.some(s => s.category === cat));

  const stats = document.getElementById('skills-nav-stats');
  if (stats) {
    stats.textContent = typeof I18n !== 'undefined'
      ? I18n.interpolate(meta.totalLabel, { n: filtered.length, c: activeCats.length })
      : `共 ${filtered.length} 个 Skill · ${activeCats.length} 个分类`;
  }

  const jump = document.getElementById('skills-nav-jump');
  if (jump) {
    jump.innerHTML = activeCats.map(cat => {
      const slug = typeof getAiSkillsNavCategorySlug === 'function' ? getAiSkillsNavCategorySlug(cat) : cat;
      const label = typeof I18n !== 'undefined' ? I18n.getSkillsNavCategoryLabel(cat) : cat;
      const count = filtered.filter(s => s.category === cat).length;
      return `<a class="tools-nav-jump-btn" href="#skills-nav-cat-${slug}">${label}<span>${count}</span></a>`;
    }).join('');
  }

  const body = document.getElementById('skills-nav-body');
  const empty = document.getElementById('skills-nav-empty');
  if (!body) return;

  if (!filtered.length) {
    body.innerHTML = '';
    if (empty) {
      empty.textContent = meta.empty || '';
      empty.classList.remove('hidden');
    }
    return;
  }
  if (empty) empty.classList.add('hidden');

  const copyLabel = meta.copyCmd || (typeof I18n !== 'undefined' ? I18n.t('common.copy') : '复制命令');
  const githubLabel = meta.openGithub || 'GitHub';
  const agentsLabel = meta.agentsLabel || '适用';
  const catLabel = cat => (typeof I18n !== 'undefined' ? I18n.getSkillsNavCategoryLabel(cat) : cat);
  const agentLabel = agent => (typeof I18n !== 'undefined' ? I18n.getSkillsNavAgentLabel(agent) : agent);

  body.innerHTML = activeCats.map(cat => {
    const items = filtered.filter(s => s.category === cat);
    const slug = typeof getAiSkillsNavCategorySlug === 'function' ? getAiSkillsNavCategorySlug(cat) : cat;
    const countLabel = typeof I18n !== 'undefined'
      ? I18n.interpolate(meta.countLabel, { n: items.length })
      : `${items.length} 个 Skill`;
    return `
      <section class="tools-nav-category skills-nav-category" id="skills-nav-cat-${slug}">
        <header class="tools-nav-category-head">
          <h3 class="tools-nav-category-title">${catLabel(cat)}</h3>
          <span class="tools-nav-category-count">${countLabel}</span>
        </header>
        <div class="skills-nav-card-grid">
          ${items.map(item => {
            const stars = formatSkillsNavStars(item.stars, meta);
            const agents = (item.agents || []).map(a =>
              `<span class="skills-nav-agent-tag">${agentLabel(a)}</span>`
            ).join('');
            const note = item.installNote
              ? `<p class="skills-nav-install-note">${escapeHtml(item.installNote)}</p>`
              : '';
            return `
            <article class="skills-nav-card">
              <div class="skills-nav-card-head">
                <div class="skills-nav-card-title-row">
                  <h4 class="skills-nav-card-name">${escapeHtml(item.name)}</h4>
                  ${stars ? `<span class="skills-nav-stars">${stars}</span>` : ''}
                </div>
                <div class="skills-nav-agents" aria-label="${agentsLabel}">
                  <span class="skills-nav-agents-label">${agentsLabel}</span>
                  ${agents}
                </div>
              </div>
              <p class="skills-nav-card-desc">${escapeHtml(item.desc)}</p>
              <div class="skills-nav-cmd-wrap">
                <pre class="skills-nav-cmd" aria-label="安装命令">${escapeHtml(item.install)}</pre>
                <button type="button" class="btn-copy skills-nav-copy-btn" aria-label="${copyLabel}">${copyLabel}</button>
              </div>
              ${note}
              <a class="skills-nav-github-link" href="${item.github}" target="_blank" rel="noopener noreferrer">${githubLabel} ↗</a>
            </article>`;
          }).join('')}
        </div>
      </section>`;
  }).join('');
}

function initSkillsNav() {
  const search = document.getElementById('skills-nav-search');
  if (search && !search.dataset.bound) {
    search.dataset.bound = 'true';
    search.addEventListener('input', () => {
      skillsNavQuery = search.value.trim();
      renderSkillsNav();
    });
  }

  const body = document.getElementById('skills-nav-body');
  if (body && !body.dataset.copyBound) {
    body.dataset.copyBound = 'true';
    body.addEventListener('click', e => {
      const btn = e.target.closest('.skills-nav-copy-btn');
      if (!btn) return;
      e.preventDefault();
      const text = btn.closest('.skills-nav-card')?.querySelector('.skills-nav-cmd')?.textContent?.trim() || '';
      copyToClipboard(text, btn, getSkillsNavMetaData().copyCmd || '复制命令');
    });
  }

  renderSkillsNav();
}

function renderMonetize() {
  const meta = getMonetizeMetaData();
  const lead = document.getElementById('monetize-lead');
  if (lead) lead.textContent = meta.lead;

  const workTypes = document.getElementById('monetize-work-types');
  if (workTypes) {
    workTypes.innerHTML = meta.workTypes.map(w => `
      <div class="monetize-work-card">
        <strong>${w.label}</strong>
        <p>${w.desc}</p>
      </div>`).join('');
  }

  const principles = document.getElementById('monetize-principles');
  if (principles) {
    principles.innerHTML = meta.principles.map(p =>
      `<span class="monetize-principle">${p}</span>`
    ).join('');
  }

  const filter = document.getElementById('monetize-filter');
  if (filter) {
    const labelFor = cat => (cat === '全部' ? I18n.getMonetizeCategoryAll() : I18n.getMonetizeCategoryLabel(cat));
    const isActive = cat =>
      cat === monetizeCategory || (cat === '全部' && isAllMonetizeCategory(monetizeCategory));
    filter.innerHTML = AI_MONETIZE_CATEGORIES.map(cat =>
      `<button class="filter-btn ${isActive(cat) ? 'active' : ''}" data-cat="${cat}" type="button" role="tab">${labelFor(cat)}</button>`
    ).join('');
    if (!filter.dataset.bound) {
      filter.dataset.bound = 'true';
      filter.addEventListener('click', e => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;
        filter.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        monetizeCategory = btn.dataset.cat;
        renderMonetizeGrid();
      });
    }
  }

  renderMonetizeGrid();
}

let deviceNeedFilter = '';

function renderDeviceOsCard(key, data) {
  const labels = getDeviceLabels();
  const list = (items, label) => `
    <div class="device-os-block">
      <strong>${label}</strong>
      <ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>
    </div>`;
  return `
    <article class="device-os-card" id="device-os-${key}">
      <div class="device-os-card-header">
        ${renderIcon({ emoji: data.emoji, className: 'theme-icon device-preset-icon', size: 36, alt: data.title })}
        <h4>${data.title}</h4>
      </div>
      <p class="device-os-tagline">${data.tagline}</p>
      ${list(data.chooseWhen, labels.chooseWhen)}
      ${list(data.avoidWhen, labels.avoidWhen)}
      <p class="device-os-note"><strong>${labels.aiNotePrefix}</strong>${data.aiNote}</p>
    </article>`;
}

function updateDeviceNeedHighlight() {
  const cards = document.querySelectorAll('.device-preset-card, .device-ai-box-card');
  const result = document.getElementById('device-need-result');
  if (!deviceNeedFilter) {
    cards.forEach(c => c.classList.remove('match', 'dimmed'));
    if (result) result.classList.add('hidden');
    return;
  }
  const need = DEVICE_NEED_OPTIONS.find(n => n.id === deviceNeedFilter);
  const presetMatches = DEVICE_PRESETS.filter(p => p.forNeeds.includes(deviceNeedFilter));
  const boxMatches = DEVICE_AI_BOXES.filter(b => b.forNeeds.includes(deviceNeedFilter));
  cards.forEach(c => {
    const match = c.dataset.needs?.split(',').includes(deviceNeedFilter);
    c.classList.toggle('match', match);
    c.classList.toggle('dimmed', !match);
  });
  if (result && need) {
    const names = [...presetMatches, ...boxMatches].map(m => `「${m.title}」`).join('、');
    const labels = getDeviceLabels();
    result.innerHTML = `<strong>${need.label}</strong> — ${need.desc}。${labels.needResultPrefix}${names || labels.needResultEmpty}。`;
    result.classList.remove('hidden');
  }
}

function renderDevices() {
  const guideMeta = typeof I18n !== 'undefined' ? I18n.localizeDeviceMeta() : DEVICE_GUIDE_META;
  const lead = document.getElementById('device-lead');
  if (lead) lead.textContent = guideMeta.lead;

  const principles = document.getElementById('device-principles');
  if (principles) {
    principles.innerHTML = guideMeta.principles.map(p =>
      `<span class="device-principle">${p}</span>`
    ).join('');
  }

  const needOptions = typeof I18n !== 'undefined' ? I18n.localizeNeedOptions() : DEVICE_NEED_OPTIONS;
  const picker = document.getElementById('device-need-picker');
  if (picker) {
    picker.innerHTML = needOptions.map(n => `
      <button type="button" class="device-need-btn" data-need="${n.id}" role="tab" aria-selected="false">
        <strong>${renderIcon({ emoji: n.emoji, className: 'theme-icon theme-icon-inline', size: 18, alt: '' })} ${n.label}</strong>
        <span>${n.desc}</span>
      </button>`).join('');
    if (deviceNeedFilter) {
      picker.querySelectorAll('.device-need-btn').forEach(b => {
        const active = b.dataset.need === deviceNeedFilter;
        b.classList.toggle('active', active);
        b.setAttribute('aria-selected', active ? 'true' : 'false');
      });
    }
    if (!picker.dataset.bound) {
      picker.dataset.bound = 'true';
      picker.addEventListener('click', e => {
        const btn = e.target.closest('.device-need-btn');
        if (!btn) return;
        const id = btn.dataset.need;
        if (deviceNeedFilter === id) {
          deviceNeedFilter = '';
          picker.querySelectorAll('.device-need-btn').forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-selected', 'false');
          });
        } else {
          deviceNeedFilter = id;
          picker.querySelectorAll('.device-need-btn').forEach(b => {
            const active = b.dataset.need === id;
            b.classList.toggle('active', active);
            b.setAttribute('aria-selected', active ? 'true' : 'false');
          });
        }
        updateDeviceNeedHighlight();
      });
    }
  }

  const osGrid = document.getElementById('device-os-grid');
  if (osGrid) {
    osGrid.innerHTML =
      renderDeviceOsCard('windows', typeof I18n !== 'undefined' ? I18n.localizeOsCompare('windows') : DEVICE_OS_COMPARE.windows) +
      renderDeviceOsCard('macos', typeof I18n !== 'undefined' ? I18n.localizeOsCompare('macos') : DEVICE_OS_COMPARE.macos);
  }

  const memTiers = typeof I18n !== 'undefined' ? I18n.localizeMemoryTiers() : DEVICE_MEMORY_TIERS;
  const memLabels = getDeviceLabels();
  const memGrid = document.getElementById('device-memory-grid');
  if (memGrid) {
    memGrid.innerHTML = memTiers.map(t => `
      <article class="device-tier-card ${t.highlight ? 'highlight' : ''}">
        <div class="device-tier-size">${t.size}</div>
        <div class="device-tier-level">${t.level}</div>
        ${t.platform ? `<p class="device-tier-field"><strong>${memLabels.commonModels}</strong>${t.platform}</p>` : ''}
        <p class="device-tier-field"><strong>${memLabels.suitable}</strong>${t.suitable}</p>
        <p class="device-tier-field"><strong>${memLabels.aiCapability}</strong>${t.aiUse}</p>
        ${t.recommendedApps?.length ? `
          <div class="device-tier-apps">
            <span class="device-tier-apps-label">${memLabels.recommendedApps}</span>
            ${t.recommendedApps.map(a => `<span class="device-tier-app-tag">${a}</span>`).join('')}
          </div>` : ''}
        <p class="device-tier-verdict">${t.verdict}</p>
      </article>`).join('');
  }

  const gpuTiers = typeof I18n !== 'undefined' ? I18n.localizeGpuTiers() : DEVICE_GPU_TIERS;
  const gpuGrid = document.getElementById('device-gpu-grid');
  if (gpuGrid) {
    gpuGrid.innerHTML = gpuTiers.map(g => `
      <article class="device-gpu-card">
        <div class="device-gpu-header">
          <h4>${renderIcon({ emoji: g.emoji, className: 'theme-icon theme-icon-inline', size: 18, alt: '' })} ${g.tier}</h4>
          <span class="device-gpu-vram">${g.vram}</span>
        </div>
        <p class="device-gpu-field"><strong>${memLabels.forWho}</strong>${g.forWho}</p>
        <p class="device-gpu-field"><strong>${memLabels.canDo}</strong>${g.canDo}</p>
        <p class="device-gpu-field"><strong>${memLabels.cannotDo}</strong>${g.cannotDo}</p>
        <p class="device-gpu-field"><strong>${memLabels.examples}</strong>${g.examples}</p>
        <p class="device-gpu-verdict">${g.verdict}</p>
      </article>`).join('');
  }

  const storageTiers = typeof I18n !== 'undefined' ? I18n.localizeStorageTiers() : DEVICE_STORAGE_TIERS;
  const storageRow = document.getElementById('device-storage-row');
  if (storageRow) {
    storageRow.innerHTML = storageTiers.map(s => `
      <div class="device-storage-chip">
        <strong>${s.size}</strong>
        <p>${s.verdict}</p>
      </div>`).join('');
  }

  const aiBoxesMeta = typeof I18n !== 'undefined' ? I18n.localizeAiBoxesMeta() : DEVICE_AI_BOXES_META;
  const aiBoxLead = document.getElementById('device-ai-boxes-lead');
  if (aiBoxLead) aiBoxLead.textContent = aiBoxesMeta.lead;

  const aiBoxCompare = document.getElementById('device-ai-boxes-compare');
  if (aiBoxCompare) aiBoxCompare.textContent = aiBoxesMeta.compareNote;

  const aiBoxGrid = document.getElementById('device-ai-box-grid');
  if (aiBoxGrid) {
    aiBoxGrid.innerHTML = DEVICE_AI_BOXES.map((raw, i) => {
      const b = typeof I18n !== 'undefined' ? I18n.localizeAiBox(raw, i) : raw;
      return `
      <article class="device-ai-box-card" id="device-ai-box-${i}" data-needs="${b.forNeeds.join(',')}">
        <div class="device-ai-box-header">
          ${renderIcon({ emoji: b.emoji, className: 'theme-icon device-preset-icon', size: 40, alt: b.title })}
          <div class="device-preset-title-wrap">
            <h4>${b.title}</h4>
            <div class="device-preset-badges">
              ${b.dedicated ? `<span class="device-preset-badge device-preset-badge-dedicated">${I18n.t('devices.dedicated')}</span>` : ''}
              <span class="device-preset-badge device-preset-badge-budget">${b.budget}</span>
              <span class="device-preset-badge">${b.vendor}</span>
              <span class="device-preset-badge">${b.form}</span>
            </div>
          </div>
        </div>
        <p class="device-ai-box-chip"><strong>${I18n.t('devices.chip')}</strong>${b.chip} · ${b.os}</p>
        <dl class="device-spec-table">
          <dt>${I18n.t('devices.compute')}</dt><dd>${b.specs.aiCompute}</dd>
          <dt>${I18n.t('devices.memory')}</dt><dd>${b.specs.memory}</dd>
          <dt>${I18n.t('devices.storage')}</dt><dd>${b.specs.storage}</dd>
          <dt>${I18n.t('devices.network')}</dt><dd>${b.specs.networking}</dd>
        </dl>
        <div class="device-ai-box-caps">
          <span class="device-ai-cap"><strong>${I18n.t('devices.infer')}</strong>${b.capabilities.inference}</span>
          <span class="device-ai-cap"><strong>${I18n.t('devices.finetune')}</strong>${b.capabilities.finetune}</span>
          <span class="device-ai-cap"><strong>${I18n.t('devices.agents')}</strong>${b.capabilities.agents}</span>
        </div>
        <p class="device-preset-best"><strong>${I18n.t('common.suitable')}</strong>${b.bestFor}</p>
        <ol class="device-preset-reasons">${b.reasoning.map(r => `<li>${r}</li>`).join('')}</ol>
        ${b.oemVariants?.length ? `<p class="device-ai-oem"><strong>${I18n.t('common.oem')}</strong>${b.oemVariants.join(' · ')}</p>` : ''}
        ${b.recommendedApps?.length ? `
          <div class="device-tier-apps">
            <span class="device-tier-apps-label">${I18n.t('common.apps')}</span>
            ${b.recommendedApps.map(a => `<span class="device-tier-app-tag">${a}</span>`).join('')}
          </div>` : ''}
        <p class="device-ai-vs"><strong>${I18n.t('common.vsDiy')}</strong>${b.vsDiy}</p>
        <p class="device-preset-tradeoff"><strong>${I18n.t('common.tradeoff')}</strong>${b.tradeoff}</p>
      </article>`;
    }).join('');
  }

  const presetGrid = document.getElementById('device-preset-grid');
  if (presetGrid) {
    presetGrid.innerHTML = DEVICE_PRESETS.map((raw, i) => {
      const p = typeof I18n !== 'undefined' ? I18n.localizePreset(raw) : raw;
      return `
      <article class="device-preset-card" id="device-preset-${i}" data-needs="${p.forNeeds.join(',')}">
        <div class="device-preset-header">
          ${renderIcon({ emoji: p.emoji, className: 'theme-icon device-preset-icon', size: 40, alt: p.title })}
          <div class="device-preset-title-wrap">
            <h4>${p.title}</h4>
            <div class="device-preset-badges">
              ${p.luxury ? `<span class="device-preset-badge device-preset-badge-luxury">${I18n.t('devices.luxury')}</span>` : ''}
              <span class="device-preset-badge device-preset-badge-budget">${p.budget}</span>
              <span class="device-preset-badge">${p.form}</span>
              <span class="device-preset-badge">${p.os}</span>
            </div>
          </div>
        </div>
        <dl class="device-spec-table">
          <dt>CPU</dt><dd>${p.specs.cpu}</dd>
          <dt>${getDeviceLabels().ram}</dt><dd>${p.specs.ram}</dd>
          <dt>${getDeviceLabels().gpu}</dt><dd>${p.specs.gpu}</dd>
          <dt>${getDeviceLabels().storage}</dt><dd>${p.specs.storage}</dd>
        </dl>
        <p class="device-preset-best"><strong>${I18n.t('common.suitable')}</strong>${p.bestFor}</p>
        <ol class="device-preset-reasons">${p.reasoning.map(r => `<li>${r}</li>`).join('')}</ol>
        <p class="device-preset-tradeoff"><strong>${I18n.t('common.tradeoff')}</strong>${p.tradeoff}</p>
      </article>`;
    }).join('');
  }

  updateDeviceNeedHighlight();
}

function renderMonetizeGrid() {
  const grid = document.getElementById('monetize-grid');
  if (!grid) return;

  const ui = typeof I18n !== 'undefined' ? I18n.getMonetizeUi() : {};
  const deliverLabel = ui.deliverables || '交付物：';
  const monetizeLabel = ui.monetize || '变现方式：';
  const channelsLabel = ui.channels || '获客渠道：';
  const noteLabel = ui.note || '注意：';

  grid.innerHTML = getMonetizeProjectsData().map((p, i) => {
    const show = isAllMonetizeCategory(monetizeCategory) || p.category === monetizeCategory;
    const catLabel = p.categoryLabel || p.category;
    const diffLabel = p.difficultyLabel || p.difficulty;
    return `
      <article class="monetize-card ${show ? '' : 'hidden-monetize'}" id="monetize-${i}">
        <div class="monetize-card-header">
          ${renderIcon({ emoji: p.emoji, className: 'theme-icon monetize-card-icon', size: 40, alt: p.title })}
          <div class="monetize-card-title-wrap">
            <div class="monetize-title-row">
              <span class="monetize-card-num">${String(i + 1).padStart(2, '0')}</span>
              <h3>${p.title}</h3>
            </div>
            <div class="monetize-card-badges">
              <span class="monetize-badge">${catLabel}</span>
              <span class="monetize-badge">${diffLabel}</span>
              <span class="monetize-badge monetize-badge-income">${p.income}</span>
            </div>
          </div>
        </div>
        <p class="monetize-card-desc">${p.desc}</p>
        <div class="monetize-card-tools">${p.tools.map(t => `<span class="monetize-tool-tag">${t}</span>`).join('')}</div>
        <p class="monetize-card-block"><strong>${deliverLabel}</strong>${p.deliverables}</p>
        <p class="monetize-card-block"><strong>${monetizeLabel}</strong>${p.monetize}</p>
        <p class="monetize-card-block"><strong>${channelsLabel}</strong>${p.channels}</p>
        <ol class="monetize-card-steps">${p.steps.map(s => `<li>${s}</li>`).join('')}</ol>
        <p class="monetize-card-tip"><strong>${noteLabel}</strong>${p.tip}</p>
      </article>`;
  }).join('');
}

function renderAppsGrid(category) {
  const bestForLabel = typeof I18n !== 'undefined' && I18n.getLocale() === 'en' ? 'Best for: ' : '适合：';
  const tipLabel = typeof I18n !== 'undefined' && I18n.getLocale() === 'en' ? 'Getting started: ' : '上手建议：';
  document.getElementById('apps-grid').innerHTML = getAppsData().map(app => {
    const show = category === '全部' || app.category === category;
    const catLabel = app.categoryLabel || app.category;
    const openTitle = typeof I18n !== 'undefined' && I18n.getLocale() === 'en'
      ? `Open ${app.name} website`
      : `打开 ${app.name} 官网`;
    return `
      <div class="app-card ${show ? '' : 'hidden-app'}">
        <div class="app-header">
          <div class="hands-on-meta">
            ${app.url
              ? `<a class="hands-on-software app-software-link" href="${app.url}" target="_blank" rel="noopener noreferrer" title="${openTitle}">${renderIcon({ image: iconPathForApp(app.name, app.emoji), emoji: app.emoji, className: 'theme-icon theme-icon-inline', size: 24, alt: app.name })} ${app.name}</a>`
              : `<span class="hands-on-software app-software-link">${renderIcon({ image: iconPathForApp(app.name, app.emoji), emoji: app.emoji, className: 'theme-icon theme-icon-inline', size: 24, alt: app.name })} ${app.name}</span>`}
            <span class="hands-on-cat-tag app-cat-tag">${catLabel}</span>
          </div>
        </div>
        <p class="app-full-en">${app.fullEn}</p>
        <p class="app-desc">${app.desc}</p>
        <ul class="app-features">${app.features.map(f => `<li>${f}</li>`).join('')}</ul>
        <div class="app-tags">${app.tags.map(t => `<span class="app-tag">${t}</span>`).join('')}</div>
        <p class="app-best-for"><strong>${bestForLabel}</strong>${app.bestFor}</p>
        <p class="app-tip"><strong>${tipLabel}</strong>${app.tip}</p>
      </div>`;
  }).join('');
}

function getHandsOnCategory(idx) {
  return HANDS_ON_CATEGORY_BY_IDX[idx] || '写作办公';
}

function getPracticeCategory(idx) {
  return PRACTICE_CATEGORY_BY_IDX[idx] || '职场办公';
}

let handsOnCategory = '全部';
let practiceCategory = '全部';

function initPracticeFilterBar(containerId, categories, getCategory, onFilter, labelFor = cat => cat) {
  const fc = document.getElementById(containerId);
  if (!fc || fc.dataset.rendered) return;
  fc.innerHTML = categories.map(cat =>
    `<button class="filter-btn ${cat === getCategory() ? 'active' : ''}" data-cat="${cat}" type="button" role="tab">${labelFor(cat)}</button>`
  ).join('');
  fc.dataset.rendered = 'true';
  fc.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      fc.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      onFilter(btn.dataset.cat);
    });
  });
}

function renderHandsOnCases() {
  const fc = document.getElementById('hands-on-filter');
  if (fc) {
    delete fc.dataset.rendered;
    delete fc.dataset.bound;
  }
  const labelFor = cat => (typeof I18n !== 'undefined' ? I18n.getHandsOnCategoryLabel(cat) : cat);
  initPracticeFilterBar('hands-on-filter', HANDS_ON_CATEGORIES, () => handsOnCategory, cat => {
    handsOnCategory = cat;
    renderHandsOnList();
  }, labelFor);
  renderHandsOnList();
}

function renderHandsOnList() {
  const container = document.getElementById('hands-on-list');
  if (!container) return;
  const cases = getHandsOnData();
  const total = cases.length;
  const visibleCount = cases.filter((_, i) =>
    handsOnCategory === '全部' || getHandsOnCategory(i) === handsOnCategory
  ).length;
  const countEl = document.getElementById('hands-on-count');
  const countText = typeof I18n !== 'undefined' && I18n.getLocale() === 'en'
    ? `${visibleCount} / ${total} shown`
    : `显示 ${visibleCount} / ${total} 个`;
  if (countEl) countEl.textContent = countText;

  document.querySelectorAll('#hands-on-filter .filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === handsOnCategory);
  });

  if (!visibleCount) {
    const emptyHint = typeof I18n !== 'undefined' && I18n.getLocale() === 'en'
      ? 'No cases in this category. Try another tag.'
      : '该分类下暂无案例，试试其他标签。';
    container.innerHTML = `<p class="empty-hint">${emptyHint}</p>`;
    return;
  }

  const resultLabel = typeof I18n !== 'undefined' && I18n.getLocale() === 'en' ? 'You will get: ' : '完成后你将得到：';
  const tipsLabel = typeof I18n !== 'undefined' && I18n.getLocale() === 'en' ? 'Tips: ' : '小贴士：';
  const copyLabel = typeof I18n !== 'undefined' ? I18n.t('common.copy') : '一键复制';
  const promptHeader = (c) => c.software === 'OpenClaw'
    ? (I18n?.getLocale() === 'en' ? 'Command / prompt' : '命令 / 提示词')
    : (I18n?.getLocale() === 'en' ? `Copy to ${c.software}` : `复制到 ${c.software}`);

  container.innerHTML = cases.map((c, i) => {
    const cat = getHandsOnCategory(i);
    const catLabel = typeof I18n !== 'undefined' ? I18n.getHandsOnCategoryLabel(cat) : cat;
    const show = handsOnCategory === '全部' || cat === handsOnCategory;
    const openTitle = I18n?.getLocale() === 'en' ? `Open ${c.software} website` : `打开 ${c.software} 官网`;
    return `
    <article class="hands-on-item ${show ? '' : 'hidden-practice-item'}" id="hands-on-${i}">
      <div class="hands-on-header">
        <span class="hands-on-num">${String(i + 1).padStart(2, '0')}</span>
        <div class="hands-on-meta">
          <a class="hands-on-software" href="${c.url}" target="_blank" rel="noopener noreferrer" title="${openTitle}">
            ${renderIcon({ image: iconPathForApp(c.software, c.emoji), emoji: c.emoji, className: 'theme-icon theme-icon-inline', size: 24, alt: c.software })} ${c.software}
          </a>
          <span class="hands-on-cat-tag">${catLabel}</span>
          <span class="hands-on-badge">${c.difficulty}</span>
          <span class="hands-on-badge hands-on-badge-time">${c.duration}</span>
        </div>
      </div>
      <h3>${c.title}</h3>
      <p class="hands-on-desc">${c.desc}</p>
      <ol class="hands-on-steps">${c.steps.map(s => `<li>${s}</li>`).join('')}</ol>
      <div class="hands-on-result">
        <strong>${resultLabel}</strong>${c.result}
      </div>
      ${c.tips ? `<p class="hands-on-tips"><strong>${tipsLabel}</strong>${c.tips}</p>` : ''}
      <div class="practice-prompt-block hands-on-prompt-block">
        <div class="practice-prompt-header">
          <span>${promptHeader(c)}</span>
          <button class="btn-copy practice-copy-btn hands-on-copy-btn" type="button" data-idx="${i}" aria-label="复制${c.title}内容">${copyLabel}</button>
        </div>
        <pre class="practice-prompt">${escapeHtml(c.prompt)}</pre>
      </div>
    </article>`;
  }).join('');

}

function renderPractices() {
  const fc = document.getElementById('practice-filter');
  if (fc) {
    delete fc.dataset.rendered;
    delete fc.dataset.bound;
  }
  const labelFor = cat => (typeof I18n !== 'undefined' ? I18n.getPracticeCategoryLabel(cat) : cat);
  initPracticeFilterBar('practice-filter', PRACTICE_CATEGORIES, () => practiceCategory, cat => {
    practiceCategory = cat;
    renderPracticeList();
  }, labelFor);
  renderPracticeList();
}

function renderPracticeList() {
  const container = document.getElementById('practice-list');
  if (!container) return;
  const practices = getPracticesData();
  const total = practices.length;
  const visibleCount = practices.filter((_, i) =>
    practiceCategory === '全部' || getPracticeCategory(i) === practiceCategory
  ).length;
  const countEl = document.getElementById('practice-count');
  const countText = typeof I18n !== 'undefined' && I18n.getLocale() === 'en'
    ? `${visibleCount} / ${total} shown`
    : `显示 ${visibleCount} / ${total} 个`;
  if (countEl) countEl.textContent = countText;

  document.querySelectorAll('#practice-filter .filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === practiceCategory);
  });

  if (!visibleCount) {
    const emptyHint = typeof I18n !== 'undefined' && I18n.getLocale() === 'en'
      ? 'No templates in this category. Try another tag.'
      : '该分类下暂无模板，试试其他标签。';
    container.innerHTML = `<p class="empty-hint">${emptyHint}</p>`;
    return;
  }

  const promptTplLabel = typeof I18n !== 'undefined' && I18n.getLocale() === 'en' ? 'Prompt template' : '提示词模板';
  const copyLabel = typeof I18n !== 'undefined' ? I18n.t('common.copy') : '一键复制';

  container.innerHTML = practices.map((p, i) => {
    const cat = getPracticeCategory(i);
    const catLabel = typeof I18n !== 'undefined' ? I18n.getPracticeCategoryLabel(cat) : cat;
    const show = practiceCategory === '全部' || cat === practiceCategory;
    return `
    <div class="practice-item ${show ? '' : 'hidden-practice-item'}" id="practice-${i}">
      <span class="practice-num">${String(i + 1).padStart(2, '0')}</span>
      <div>
        <div class="practice-item-head">
          <h3>${p.title}</h3>
          <span class="practice-cat-tag">${catLabel}</span>
        </div>
        <p class="tools">${p.tools}</p>
        <p>${p.desc}</p>
        <ol class="practice-steps">${p.steps.map(s => `<li>${s}</li>`).join('')}</ol>
        <div class="practice-prompt-block">
          <div class="practice-prompt-header">
            <span>${promptTplLabel}</span>
            <button class="btn-copy practice-copy-btn" type="button" data-idx="${i}" aria-label="复制${p.title}提示词">${copyLabel}</button>
          </div>
          <pre class="practice-prompt">${escapeHtml(p.prompt)}</pre>
        </div>
      </div>
    </div>`;
  }).join('');

}

function renderGlossary(query = '', category = DEFAULT_TERM_CATEGORY) {
  const container = document.getElementById('glossary-list');
  const terms = filterTerms(query, category);
  document.getElementById('glossary-count').textContent = typeof I18n !== 'undefined'
    ? I18n.t('terms.count', { n: `${terms.length} / ${getTermsData().length}` })
    : `显示 ${terms.length} / ${getTermsData().length} 条`;

  const grouped = {};
  terms.forEach(t => {
    if (!grouped[t.category]) grouped[t.category] = [];
    grouped[t.category].push(t);
  });

  const order = TERM_CATEGORIES.filter(cat => cat !== '全部');
  container.innerHTML = order
    .filter(cat => grouped[cat])
    .map(cat => `
      <div class="glossary-group">
        <h3 class="glossary-group-title">${getTermFilterLabel(cat)} <span class="glossary-group-count">${grouped[cat].length}</span></h3>
        <div class="glossary-group-items">
          ${grouped[cat].map(g => `
            <dl class="glossary-item">
              <dt>${g.term}${g.abbr && g.abbr !== '—' ? ` <span class="glossary-abbr">(${g.abbr})</span>` : ''}</dt>
              <dd class="glossary-en">${g.fullEn}</dd>
              <dd>${g.def}</dd>
            </dl>`).join('')}
        </div>
      </div>`).join('') || `<p class="empty-hint">${uiT('terms.empty', '未找到匹配术语，请换个关键词试试。')}</p>`;
}

let promptLabState = {};
let promptLabActiveCase = null;
let promptLabBusy = false;
let promptLabStreamToken = 0;

function isDeepLinkEntry() {
  if (!location.hash) return false;
  const id = location.hash.replace('#', '');
  return !['', 'top', 'hero', 'roadmap'].includes(id);
}

function buildPrompt(form) {
  const tasks = getPromptTasksData();
  const ui = typeof I18n !== 'undefined' ? I18n.getPromptLabUi() : {};
  const bp = ui.buildPrompt || {};
  const role = form.role || (ui.defaultRole || '资深专家');
  const context = form.context || (ui.defaultContext || '[请补充具体背景]');
  const output = form.output || (ui.defaultOutput || '[请描述期望输出]');
  const taskDesc = tasks[form.task];
  const tone = typeof I18n !== 'undefined' ? I18n.getPromptToneLabel(form.tone) : form.tone;
  if (bp.roleHeader) {
    return `${bp.roleHeader}\n${bp.rolePrefix || 'You are a'} ${role}.\n\n${bp.taskHeader}\n${taskDesc}\n\n${bp.contextHeader}\n${context}\n\n${bp.outputHeader}\n${output}\n\n${bp.requirementsHeader}\n- ${bp.toneLine || 'Tone:'} ${tone}\n- ${bp.clarifyLine || ''}\n- ${bp.structureLine || ''}\n- ${bp.uncertainLine || ''}`.replace(/\n- \n/g, '\n');
  }
  return `# 角色\n你是一位${role}。\n\n# 任务\n${taskDesc}\n\n# 背景信息\n${context}\n\n# 期望输出\n${output}\n\n# 要求\n- 语气风格：${form.tone}\n- 信息不足时先列出需确认的 2-3 个关键问题\n- 输出结构清晰，使用标题和列表\n- 不确定的内容明确标注，不要编造事实`;
}

function renderPromptCases() {
  const container = document.getElementById('prompt-cases');
  const cases = getPromptCasesData();
  if (!container || !cases.length) return;
  container.innerHTML = cases.map(c => `
    <button type="button" class="prompt-case-card" data-case-id="${c.id}" role="listitem" title="${c.scene}">
      ${renderIcon({ emoji: c.emoji, className: 'theme-icon prompt-case-emoji', size: 40, alt: c.title })}
      <span class="prompt-case-title">${c.title}</span>
      <span class="prompt-case-scene">${c.scene}</span>
    </button>`).join('');
  container.querySelectorAll('.prompt-case-card').forEach(btn => {
    btn.addEventListener('click', () => loadPromptCase(btn.dataset.caseId));
  });
}

function setActiveCaseCard(caseId) {
  document.querySelectorAll('.prompt-case-card').forEach(card => {
    card.classList.toggle('active', card.dataset.caseId === caseId);
  });
}

function fillPromptForm(caseData) {
  document.getElementById('prompt-task').value = caseData.task;
  document.getElementById('prompt-role').value = caseData.role;
  document.getElementById('prompt-context').value = caseData.context;
  document.getElementById('prompt-output').value = caseData.output;
  document.getElementById('prompt-tone').value = caseData.tone;
}

function applyTaskPreset(task) {
  const preset = getPromptTaskPresetsData()[task] || null;
  if (!preset) return;
  document.getElementById('prompt-role').value = preset.role;
  document.getElementById('prompt-context').value = preset.context;
  document.getElementById('prompt-output').value = preset.output;
  document.getElementById('prompt-tone').value = preset.tone;
}

function restoreSimEmpty() {
  const container = document.getElementById('sim-messages');
  if (!container) return;
  const ui = typeof I18n !== 'undefined' ? I18n.getPromptLabUi() : {};
  const title = ui.simEmptyTitle || '尚未开始模拟';
  const desc = ui.simEmptyDesc || '点击上方案例，或编辑左侧配置后点「生成并模拟」。提示词、AI 回复与操作引导都在此窗口展示。';
  const existing = document.getElementById('sim-empty');
  if (existing) {
    const strong = existing.querySelector('strong');
    const p = existing.querySelector('p');
    if (strong) strong.textContent = title;
    if (p) p.textContent = desc;
    return;
  }
  container.innerHTML = `
    <div class="sim-empty" id="sim-empty">
      <img class="sim-empty-icon theme-icon" src="assets/icons/chat.png" width="48" height="48" alt="">
      <strong>${title}</strong>
      <p>${desc}</p>
    </div>`;
}

function resetPromptLabToTask(task) {
  applyTaskPreset(task);
  promptLabActiveCase = null;
  setActiveCaseCard('');
  const ui = typeof I18n !== 'undefined' ? I18n.getPromptLabUi() : {};
  updateSimBadge(`${ui.taskPrefix || '任务：'}${typeof I18n !== 'undefined' ? I18n.getPromptTaskLabel(task) : task}`);
  renderFollowupChips(null);
  hidePromptGuide();
  clearSimMessages();
  restoreSimEmpty();
  enableSimFollowup(false);
  const copyBtn = document.getElementById('copy-prompt');
  if (copyBtn) copyBtn.disabled = true;
  promptLabState = getPromptForm();
  promptLabState.lastPrompt = '';
}

function hidePromptGuide() {
  document.getElementById('prompt-guide')?.classList.add('hidden');
}

function scrollPromptChat(to = 'bottom') {
  const scroller = document.getElementById('sim-scroll');
  if (!scroller) return;
  scroller.scrollTop = to === 'bottom' ? scroller.scrollHeight : 0;
}

function showPromptGuide(taskOrCase) {
  const guide = document.getElementById('prompt-guide');
  const guideData = taskOrCase?.realGuide;
  const task = taskOrCase?.task || taskOrCase;
  const tools = guideData?.tools || getPromptToolsData()[task] || ['ChatGPT', 'Claude'];
  const ui = typeof I18n !== 'undefined' ? I18n.getPromptLabUi() : {};
  const steps = guideData?.steps || ui.defaultGuideSteps || [
    '点击工具栏「复制提示词」',
    `打开 ${tools[0]} 或 ${tools[1] || '通义千问'}，新建对话`,
    '粘贴提示词并发送，将背景替换为你的真实场景',
    '根据回复迭代：「更简洁」「换成表格」「补充数据」'
  ];
  const stepPrefix = I18n?.getLocale() === 'en' ? 'Step' : '第';
  const stepSuffix = I18n?.getLocale() === 'en' ? '' : ' 步';
  document.getElementById('guide-steps').innerHTML = steps
    .map((s, i) => `<li><strong>${stepPrefix} ${i + 1}${stepSuffix}</strong> — ${s}</li>`).join('');
  document.getElementById('guide-tool-tags').innerHTML = tools
    .map(t => `<span class="guide-tool-tag">${t}</span>`).join('');
  const linkEl = document.getElementById('guide-link');
  if (guideData?.link) {
    linkEl.textContent = `→ ${guideData.link.label}`;
    linkEl.href = guideData.link.href;
    linkEl.classList.remove('hidden');
  } else {
    linkEl.classList.add('hidden');
  }
  guide.classList.remove('hidden');
  scrollPromptChat('bottom');
}

function clearSimMessages() {
  const container = document.getElementById('sim-messages');
  container.innerHTML = '';
}

function hideSimEmpty() {
  document.getElementById('sim-empty')?.remove();
}

function updateSimBadge(text) {
  const badge = document.getElementById('sim-case-badge');
  if (badge) badge.textContent = text;
}

function enableSimFollowup(enabled = true) {
  const input = document.getElementById('sim-followup');
  const send = document.getElementById('sim-send');
  if (input) input.disabled = !enabled;
  if (send) send.disabled = !enabled;
}

function setPromptLabBusy(busy) {
  promptLabBusy = busy;
  ['generate-prompt', 'sim-reset'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.disabled = busy;
  });
}

function showPromptLabError(message) {
  const container = document.getElementById('sim-messages');
  if (!container) return;
  hideSimEmpty();
  const err = document.createElement('div');
  err.className = 'sim-msg sim-msg-error';
  err.innerHTML = `<span class="sim-msg-label">系统</span>${escapeHtml(message)}`;
  container.appendChild(err);
  container.scrollTop = container.scrollHeight;
}

function renderFollowupChips(caseData) {
  const wrap = document.getElementById('sim-followup-chips');
  if (!wrap) return;
  const followups = caseData?.followups || [];
  if (!followups.length) {
    wrap.classList.add('hidden');
    wrap.innerHTML = '';
    return;
  }
  wrap.classList.remove('hidden');
  wrap.innerHTML = '<span class="sim-chips-label">试试追问：</span>' + followups
    .map((f, i) => `<button type="button" class="sim-chip" data-chip-idx="${i}">${f.user}</button>`)
    .join('');
  wrap.querySelectorAll('.sim-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const idx = parseInt(chip.dataset.chipIdx, 10);
      sendFollowup(followups[idx].user, followups[idx].ai);
    });
  });
}

function generateSimulatedResponse(form) {
  const { task, role, context, output, tone } = form;
  const ctx = context.length > 80 ? context.slice(0, 80) + '…' : context;
  const templates = {
    '内容写作': `好的，我以${role}的身份为你撰写内容。\n\n## 草稿\n\n基于你提供的背景「${ctx}」，以下是${output}：\n\n---\n\n[正文内容将在此展开，采用${tone}的语气风格，结构清晰、段落分明。]\n\n1. 开篇点明核心观点\n2. 展开论述与论据支撑\n3. 总结并给出行动建议\n\n---\n\n💡 如需调整篇幅、语气或补充具体案例，请告诉我。`,
    '问题分析': `作为${role}，以下是对该问题的分析：\n\n## 问题理解\n「${ctx}」\n\n## 核心分析\n\n**1. 关键矛盾点**\n从多个维度拆解问题的根本原因…\n\n**2. 影响因素**\n- 内部因素：…\n- 外部因素：…\n\n**3. 可行方案**\n| 方案 | 优势 | 风险 |\n|------|------|------|\n| A | … | … |\n| B | … | … |\n\n## 建议\n优先推荐方案 A，因为…\n\n（${tone}风格 · 目标输出：${output}）`,
    '代码开发': `\`\`\`python\n# ${output}\n# 基于需求自动生成的示例代码\n\ndef main():\n    # TODO: 根据「${ctx}」实现核心逻辑\n    pass\n\nif __name__ == "__main__":\n    main()\n\`\`\`\n\n## 代码说明\n\n1. **整体思路**：…\n2. **关键函数**：…\n3. **使用方法**：…\n\n⚠️ 请根据实际环境调整。需要我补充单元测试或错误处理吗？`,
    '学习辅导': `很高兴以${role}的身份教你！让我们用费曼学习法来理解这个主题。\n\n## 📖 核心概念\n\n**通俗类比**：这就像…\n\n## 🔍 深入理解\n\n基于「${ctx}」：\n\n1. 第一层：基础定义\n2. 第二层：工作原理\n3. 第三层：实际应用\n\n## ❌ 常见误解\n- 误解 1：…\n- 误解 2：…\n\n## ✅ 检验题\n**Q1**: …\n**A1**: …\n\n还想让我出题检验或深入某个子话题吗？`,
    '数据分析': `## 数据分析报告\n\n**分析目标**：${output}\n**数据来源**：${ctx}\n\n### 1. 数据概览\n- 样本量：…\n- 时间范围：…\n- 关键指标均值/中位数：…\n\n### 2. 关键发现\n🔹 **趋势 1**：…\n🔹 **趋势 2**：…\n🔹 **异常点**：…\n\n### 3. 图表建议\n- 折线图：展示时间趋势\n- 柱状图：对比分类数据\n\n### 4. 业务建议\n1. …\n2. …\n3. …\n\n需要我生成具体图表代码吗？`,
    '创意策划': `## 创意方案 🎯\n\n**场景**：${ctx}\n**目标**：${output}\n\n### 方案 A｜稳健型\n- 核心创意：…\n- 执行路径：…\n- 预期效果：…\n\n### 方案 B｜创新型\n- 核心创意：…\n- 差异化亮点：…\n\n### 方案 C｜低成本型\n- 最小可行方案：…\n\n**推荐**：方案 B，因为…\n\n（${tone}风格）需要我展开某个方案的完整执行计划吗？`,
    '翻译润色': `## 翻译/润色结果\n\n**原文摘要**：${ctx}\n\n### 润色后文本\n\n[译文/润色版本将在此呈现，保持${tone}的语气，符合目标语言习惯。]\n\n### 调整说明\n1. 「…」→「…」（适配本地表达）\n2. 「…」→「…」（文化语境调整）\n\n需要我提供另一种风格版本吗？`,
    '会议纪要': `## 会议纪要\n\n**会议主题**：[从背景提取]\n**背景**：${ctx}\n\n### 关键决议\n1. …\n2. …\n\n### 待办事项\n| 事项 | 负责人 | 截止日期 |\n|------|--------|----------|\n| … | … | … |\n\n### 未决问题\n- …\n\n---\n以上为结构化整理（${tone}风格）。需要补充参会人信息吗？`,
    '竞品调研': `## 竞品分析报告\n\n**调研范围**：${ctx}\n**输出目标**：${output}\n\n### 主要竞品\n| 竞品 | 核心优势 | 差异化 |\n|------|----------|--------|\n| A | … | … |\n| B | … | … |\n\n### SWOT 分析（我方视角）\n- **S** 优势：…\n- **W** 劣势：…\n- **O** 机会：…\n- **T** 威胁：…\n\n### 差异化机会\n1. …\n2. …\n\n⚠️ 标注「需核实」的数据请自行验证。`,
    '简历优化': `## 简历优化建议\n\n**目标岗位背景**：${ctx}\n\n### 优化后的工作经历描述\n\n> [突出与岗位匹配的核心成就，使用数据量化成果]\n\n**优化要点**：\n- 原描述偏泛泛 → 改为成果导向\n- 补充了匹配关键词\n- 量化：提升 X%、负责 Y 万用户\n\n### 求职信草稿（约 200 字）\n\n[求职信内容，${tone}风格]\n\n需要我针对另一个岗位再优化一版吗？`
  };
  return templates[task] || `好的，我以${role}的身份处理你的请求。\n\n基于背景「${ctx}」，以下是${output}：\n\n[AI 将根据你的提示词生成结构化内容，语气：${tone}]\n\n如需调整，请继续追问。`;
}

function generateFollowupResponse(followup, form) {
  const lower = followup.toLowerCase();
  if (/简洁|简短|精简|短一点/.test(followup)) {
    return `好的，以下是更简洁的版本：\n\n**核心要点**：\n1. …\n2. …\n3. …\n\n**一句话总结**：…\n\n还需要进一步压缩吗？`;
  }
  if (/表格|table|列表/.test(lower + followup)) {
    return `已转换为表格格式：\n\n| 项目 | 详情 | 优先级 |\n|------|------|--------|\n| … | … | 高 |\n| … | … | 中 |\n\n需要增加或删除列吗？`;
  }
  if (/详细|展开|更多|补充/.test(followup)) {
    return `好的，以下是更详细的展开：\n\n### 补充内容\n\n基于「${form.context?.slice(0, 40) || '你的需求'}…」，我补充了以下细节：\n\n1. …\n2. …\n3. …\n\n还有其他需要深化的部分吗？`;
  }
  if (/英文|english|翻译/.test(lower + followup)) {
    return `Here's the English version:\n\n[Translated content maintaining ${form.tone} tone]\n\nLet me know if you need adjustments.`;
  }
  return `收到你的补充要求：「${followup}」\n\n我已据此调整输出：\n\n[调整后的内容将在这里呈现，保持${form.tone}风格]\n\n如果满意，可以复制这段回复的思路；如果还需修改，请继续描述。`;
}

function cancelPromptLabStream() {
  promptLabStreamToken += 1;
}

function getStreamCharDelay(ch, lineIdx, charIdx) {
  if (/[。！？；.!?]/.test(ch)) return 48;
  if (/[，、,;：:]/.test(ch)) return 28;
  if (ch === ' ') return 10;
  if (ch === '\n') return 0;
  if (lineIdx === 0 && charIdx < 3) return 22;
  return 14 + Math.floor(Math.random() * 10);
}

function getStreamLinePause(line, lineIdx) {
  if (!line.trim()) return 90;
  if (/^#{1,3}\s/.test(line)) return 220;
  if (/^[-*•]\s/.test(line) || /^\d+\.\s/.test(line)) return 160;
  if (lineIdx === 0) return 120;
  return 100 + Math.min(line.length * 2, 180);
}

async function streamSimMessage(typingEl, msgEl, label, text, container, streamToken) {
  const isCancelled = () => streamToken !== promptLabStreamToken;
  const scrollIfNeeded = () => scrollPromptChat('bottom');

  await new Promise(r => setTimeout(r, 380));
  if (isCancelled()) return;

  typingEl.remove();
  msgEl.innerHTML = `<span class="sim-msg-label">${label}</span><span class="sim-text"></span><span class="sim-cursor" aria-hidden="true"></span>`;
  container.appendChild(msgEl);
  const span = msgEl.querySelector('.sim-text');
  const cursor = msgEl.querySelector('.sim-cursor');

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    span.textContent = text;
    cursor?.remove();
    enableSimFollowup(true);
    scrollIfNeeded();
    return;
  }

  const lines = text.split('\n');
  for (let li = 0; li < lines.length; li++) {
    if (isCancelled()) return;
    const line = lines[li];

    for (let ci = 0; ci < line.length; ci++) {
      if (isCancelled()) return;
      span.textContent += line[ci];
      await new Promise(r => setTimeout(r, getStreamCharDelay(line[ci], li, ci)));
      if (ci % 6 === 0) scrollIfNeeded();
    }

    if (li < lines.length - 1) {
      span.textContent += '\n';
      await new Promise(r => setTimeout(r, getStreamLinePause(line, li)));
      scrollIfNeeded();
    }
  }

  cursor?.remove();
  if (!isCancelled()) enableSimFollowup(true);
  scrollIfNeeded();
}

function appendSimMessage(role, text, animate = false) {
  const container = document.getElementById('sim-messages');
  if (!container) return Promise.resolve();
  const msg = document.createElement('div');
  msg.className = `sim-msg sim-msg-${role}`;
  const label = role === 'user' ? '你' : 'AI 助手';
  const useAnimate = animate && role === 'ai';

  if (useAnimate) {
    const streamToken = ++promptLabStreamToken;
    const typing = document.createElement('div');
    typing.className = 'sim-typing';
    typing.innerHTML = '<span></span><span></span><span></span>';
    container.appendChild(typing);
    scrollPromptChat('bottom');
    return streamSimMessage(typing, msg, label, text, container, streamToken);
  }

  msg.innerHTML = `<span class="sim-msg-label">${label}</span>${escapeHtml(text)}`;
  container.appendChild(msg);
  scrollPromptChat('bottom');
  if (role === 'ai') enableSimFollowup(true);
  return Promise.resolve();
}

function getSimulationResponse() {
  if (promptLabActiveCase?.response) return promptLabActiveCase.response;
  return generateSimulatedResponse(promptLabState);
}

async function runSimulation({ scroll = true } = {}) {
  if (promptLabBusy) return;
  try {
    cancelPromptLabStream();
    setPromptLabBusy(true);
    enableSimFollowup(false);
    if (!promptLabState.task) promptLabState = getPromptForm();
    clearSimMessages();
    hidePromptGuide();
    document.getElementById('sim-followup').value = '';
    scrollPromptChat('top');

    const prompt = promptLabState.lastPrompt || buildPrompt(promptLabState);
    promptLabState.lastPrompt = prompt;
    const copyBtn = document.getElementById('copy-prompt');
    if (copyBtn) copyBtn.disabled = false;

    hideSimEmpty();
    appendSimMessage('user', prompt);
    const response = getSimulationResponse();
    await appendSimMessage('ai', response, true);
    renderFollowupChips(promptLabActiveCase);
    showPromptGuide(promptLabActiveCase || { task: promptLabState.task });
    if (scroll) {
      document.getElementById('prompt-studio')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  } catch (err) {
    console.error('Prompt lab simulation failed:', err);
    showPromptLabError('模拟出错，请刷新页面后重试。若仍失败，请强制刷新（Cmd+Shift+R）清除缓存。');
    enableSimFollowup(false);
  } finally {
    setPromptLabBusy(false);
  }
}

async function loadPromptCase(caseId) {
  const cases = getPromptCasesData();
  if (!cases.length) {
    showPromptLabError('案例数据未加载，请强制刷新页面（Cmd+Shift+R）。');
    return;
  }
  const caseData = cases.find(c => c.id === caseId);
  if (!caseData) return;
  promptLabActiveCase = caseData;
  fillPromptForm(caseData);
  promptLabState = getPromptForm();
  promptLabState.lastPrompt = buildPrompt(promptLabState);
  setActiveCaseCard(caseId);
  const ui = typeof I18n !== 'undefined' ? I18n.getPromptLabUi() : {};
  updateSimBadge(`${ui.casePrefix || '案例：'}${caseData.title}`);
  await runSimulation({ scroll: true });
}

async function sendFollowup(text, presetReply = null) {
  const input = document.getElementById('sim-followup');
  if (input) input.value = '';
  cancelPromptLabStream();
  enableSimFollowup(false);
  hideSimEmpty();
  appendSimMessage('user', text);
  let reply = presetReply;
  if (!reply && promptLabActiveCase?.followups) {
    const matched = promptLabActiveCase.followups.find(f => f.user === text);
    reply = matched?.ai;
  }
  if (!reply) reply = generateFollowupResponse(text, promptLabState);
  await appendSimMessage('ai', reply, true);
}

function getPromptForm() {
  const taskSelect = document.getElementById('prompt-task');
  return {
    task: taskSelect.value,
    role: document.getElementById('prompt-role').value.trim() || '资深专家',
    context: document.getElementById('prompt-context').value.trim() || '[请补充具体背景]',
    output: document.getElementById('prompt-output').value.trim() || '[请描述期望输出]',
    tone: document.getElementById('prompt-tone').value
  };
}

function refreshPromptLabChrome() {
  const ui = typeof I18n !== 'undefined' ? I18n.getPromptLabUi() : {};
  const taskSelect = document.getElementById('prompt-task');
  const tasks = getPromptTasksData();
  if (taskSelect && Object.keys(tasks).length) {
    const current = taskSelect.value;
    taskSelect.innerHTML = Object.keys(tasks).map(t =>
      `<option value="${t}">${typeof I18n !== 'undefined' ? I18n.getPromptTaskLabel(t) : t}</option>`
    ).join('');
    if (current && tasks[current]) taskSelect.value = current;
  }
  const toneSelect = document.getElementById('prompt-tone');
  if (toneSelect) {
    const currentTone = toneSelect.value;
    [...toneSelect.options].forEach(opt => {
      opt.textContent = typeof I18n !== 'undefined' ? I18n.getPromptToneLabel(opt.value) : opt.value;
    });
    if (currentTone) toneSelect.value = currentTone;
  }
  const setText = (sel, key) => { const el = document.querySelector(sel); if (el && ui[key]) el.textContent = ui[key]; };
  setText('.prompt-studio-toolbar-label', 'casesLabel');
  setText('.prompt-studio-form-title', 'configTitle');
  setText('label[for="prompt-task"]', 'taskType');
  setText('label[for="prompt-role"]', 'role');
  setText('label[for="prompt-context"]', 'context');
  setText('label[for="prompt-output"]', 'output');
  setText('label[for="prompt-tone"]', 'tone');
  const roleInput = document.getElementById('prompt-role');
  if (roleInput && ui.rolePlaceholder) roleInput.placeholder = ui.rolePlaceholder;
  const ctxInput = document.getElementById('prompt-context');
  if (ctxInput && ui.contextPlaceholder) ctxInput.placeholder = ui.contextPlaceholder;
  const outInput = document.getElementById('prompt-output');
  if (outInput && ui.outputPlaceholder) outInput.placeholder = ui.outputPlaceholder;
  const genBtn = document.getElementById('generate-prompt');
  if (genBtn && ui.generateSimulate) genBtn.textContent = ui.generateSimulate;
  const simTitle = document.querySelector('.sim-title');
  if (simTitle && ui.chatTitle) simTitle.textContent = ui.chatTitle;
  const resetBtn = document.getElementById('sim-reset');
  if (resetBtn && ui.resetSim) resetBtn.textContent = ui.resetSim;
  const copyBtn = document.getElementById('copy-prompt');
  if (copyBtn && ui.copyPrompt) copyBtn.textContent = ui.copyPrompt;
  const followup = document.getElementById('sim-followup');
  if (followup && ui.followupPlaceholder) followup.placeholder = ui.followupPlaceholder;
  const sendBtn = document.getElementById('sim-send');
  if (sendBtn && ui.send) sendBtn.textContent = ui.send;
  const disclaimer = document.querySelector('.sim-disclaimer');
  if (disclaimer && ui.disclaimer) disclaimer.textContent = ui.disclaimer;
  const simBadge = document.getElementById('sim-case-badge');
  if (simBadge && ui.selectCaseStart && !promptLabActiveCase) simBadge.textContent = ui.selectCaseStart;
  restoreSimEmpty();
  const guideTitle = document.querySelector('#prompt-guide h4');
  if (guideTitle && ui.guideTitle) guideTitle.innerHTML = guideTitle.innerHTML.replace(/模拟完成.*$/, '').trim() + ' ' + ui.guideTitle;
  const guideToolsLabel = document.querySelector('.guide-tools-label');
  if (guideToolsLabel && ui.guideToolsLabel) guideToolsLabel.textContent = ui.guideToolsLabel;
  renderPromptCases();
}

function initPromptLab() {
  try {
    const taskSelect = document.getElementById('prompt-task');
    if (!taskSelect || typeof PROMPT_TASKS === 'undefined') {
      console.error('Prompt lab: missing DOM or PROMPT_TASKS');
      return;
    }
    refreshPromptLabChrome();
    applyTaskPreset(taskSelect.value);

    const markCustomScene = () => {
      if (promptLabActiveCase) {
        promptLabActiveCase = null;
        setActiveCaseCard('');
        renderFollowupChips(null);
      }
      const ui = typeof I18n !== 'undefined' ? I18n.getPromptLabUi() : {};
      updateSimBadge(ui.customScene || '自定义场景');
    };

    ['prompt-role', 'prompt-context', 'prompt-output'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', markCustomScene);
    });
    taskSelect.addEventListener('change', () => resetPromptLabToTask(taskSelect.value));
    document.getElementById('prompt-tone')?.addEventListener('change', markCustomScene);

    document.getElementById('generate-prompt')?.addEventListener('click', async () => {
      promptLabState = getPromptForm();
      promptLabState.lastPrompt = buildPrompt(promptLabState);
      markCustomScene();
      await runSimulation();
    });

    document.getElementById('copy-prompt')?.addEventListener('click', async () => {
      const text = promptLabState.lastPrompt || buildPrompt(getPromptForm());
      const btn = document.getElementById('copy-prompt');
      await copyToClipboard(text, btn, '复制提示词');
      showPromptGuide(promptLabActiveCase || { task: promptLabState.task || getPromptForm().task });
    });

    document.getElementById('sim-reset')?.addEventListener('click', () => runSimulation());

    document.getElementById('sim-send')?.addEventListener('click', () => {
      const text = document.getElementById('sim-followup')?.value.trim();
      if (!text) return;
      sendFollowup(text);
    });

    document.getElementById('sim-followup')?.addEventListener('keydown', e => {
      if (e.key === 'Enter') document.getElementById('sim-send')?.click();
    });
  } catch (err) {
    console.error('initPromptLab failed:', err);
    showPromptLabError('提示词实验室初始化失败，请强制刷新页面（Cmd+Shift+R）。');
  }
}

// ─── Quiz ─────────────────────────────────────────────────────────────────────

let quizState = {
  index: 0,
  score: 0,
  answered: false,
  wrongIndices: [],
  questionIndices: [],
  currentQIdx: 0,
  mode: 'full',
};

function initQuiz() {
  document.getElementById('start-quiz').addEventListener('click', () => startQuiz());
  document.getElementById('quiz-next').addEventListener('click', nextQuestion);
  document.getElementById('retry-quiz').addEventListener('click', () => resetQuizToStart());
  document.getElementById('retry-wrong-quiz')?.addEventListener('click', () => {
    if (!quizState.wrongIndices.length) return;
    startQuiz({ wrongOnly: true, indices: [...quizState.wrongIndices] });
  });
}

function resetQuizToStart() {
  document.getElementById('quiz-result').classList.add('hidden');
  document.getElementById('quiz-start').classList.remove('hidden');
  document.getElementById('quiz-review')?.classList.add('hidden');
  document.getElementById('retry-wrong-quiz')?.classList.add('hidden');
  quizState = {
    index: 0,
    score: 0,
    answered: false,
    wrongIndices: [],
    questionIndices: [],
    currentQIdx: 0,
    mode: 'full',
  };
}

function startQuiz({ wrongOnly = false, indices = null } = {}) {
  const questionIndices = wrongOnly && indices?.length
    ? [...indices]
    : getQuizData().map((_, i) => i);
  quizState = {
    index: 0,
    score: 0,
    answered: false,
    wrongIndices: [],
    questionIndices,
    currentQIdx: questionIndices[0] ?? 0,
    mode: wrongOnly ? 'wrong' : 'full',
  };
  document.getElementById('quiz-start').classList.add('hidden');
  document.getElementById('quiz-active').classList.remove('hidden');
  document.getElementById('quiz-result').classList.add('hidden');
  document.getElementById('quiz-review')?.classList.add('hidden');
  showQuestion();
}

function showQuestion() {
  const total = quizState.questionIndices.length;
  const qIdx = quizState.questionIndices[quizState.index];
  const q = getQuizData()[qIdx];
  quizState.currentQIdx = qIdx;
  quizState.answered = false;
  document.getElementById('quiz-counter').textContent = uiT('quiz.counter', '{cur} / {total}', { cur: quizState.index + 1, total });
  document.getElementById('quiz-bar-fill').style.width = `${total ? (quizState.index / total) * 100 : 0}%`;
  document.getElementById('quiz-question').textContent = q.q;
  document.getElementById('quiz-feedback').classList.add('hidden');
  document.getElementById('quiz-next').classList.add('hidden');
  const opts = document.getElementById('quiz-options');
  opts.innerHTML = q.options.map((o, i) => `<button class="quiz-option" data-idx="${i}">${o}</button>`).join('');
  opts.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => selectAnswer(parseInt(btn.dataset.idx, 10)));
  });
}

function selectAnswer(idx) {
  if (quizState.answered) return;
  quizState.answered = true;
  const q = getQuizData()[quizState.currentQIdx];
  const correct = idx === q.answer;
  if (correct) quizState.score++;
  else if (!quizState.wrongIndices.includes(quizState.currentQIdx)) {
    quizState.wrongIndices.push(quizState.currentQIdx);
  }
  document.querySelectorAll('.quiz-option').forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add('correct');
    else if (i === idx) btn.classList.add('wrong');
  });
  const fb = document.getElementById('quiz-feedback');
  fb.classList.remove('hidden', 'correct-fb', 'wrong-fb');
  fb.classList.add(correct ? 'correct-fb' : 'wrong-fb');
  fb.innerHTML = correct
    ? uiT('quiz.feedbackCorrect', '✓ 正确！{explain}', { explain: q.explain })
    : uiT('quiz.feedbackWrong', '✗ 正确答案是：{answer}<br><br>{explain}', { answer: q.options[q.answer], explain: q.explain });
  document.getElementById('quiz-next').classList.remove('hidden');
  const total = quizState.questionIndices.length;
  document.getElementById('quiz-next').textContent = quizState.index < total - 1
    ? (typeof I18n !== 'undefined' ? I18n.t('quiz.next') : '下一题')
    : uiT('quiz.seeResults', '查看结果');
}

function nextQuestion() {
  quizState.index++;
  if (quizState.index >= quizState.questionIndices.length) showQuizResult();
  else showQuestion();
}

function renderQuizReview(wrongIndices) {
  const reviewEl = document.getElementById('quiz-review');
  const listEl = document.getElementById('quiz-review-list');
  const retryWrongBtn = document.getElementById('retry-wrong-quiz');
  if (!reviewEl || !listEl) return;

  if (!wrongIndices.length) {
    reviewEl.classList.add('hidden');
    retryWrongBtn?.classList.add('hidden');
    return;
  }

  reviewEl.classList.remove('hidden');
  retryWrongBtn?.classList.remove('hidden');
  listEl.innerHTML = wrongIndices.map(qIdx => {
    const q = getQuizData()[qIdx];
    const link = getQuizReviewLink(qIdx);
    return `
      <li class="quiz-review-item">
        <p class="quiz-review-q">${q.q}</p>
        <p class="quiz-review-a">${uiT('quiz.reviewAnswer', '正确答案：{answer}', { answer: q.options[q.answer] })}</p>
        <a href="${link.href}" class="quiz-review-link">${uiT('quiz.reviewGo', '去「{label}」复习 →', { label: link.label })}</a>
      </li>`;
  }).join('');
}

function showQuizResult() {
  document.getElementById('quiz-active').classList.add('hidden');
  document.getElementById('quiz-result').classList.remove('hidden');
  const isFullRun = quizState.mode === 'full';
  const total = isFullRun ? getQuizData().length : quizState.questionIndices.length;
  const score = quizState.score;
  const prog = loadProgress();
  if (isFullRun) {
    prog.quizBestScore = Math.max(prog.quizBestScore || 0, score);
    saveProgress(prog);
    updatePhaseBridges();
    updateContinueLearningCTA();
  }
  const pct = total ? Math.round((score / total) * 100) : 0;
  document.getElementById('result-score').textContent = `${score} / ${total}`;
  const name = getUserName();
  let msg;
  if (isFullRun) {
    msg = getQuizResultTierMessage(score, total);
  } else if (score === total) {
    msg = uiT('quiz.wrongAllRight', '错题全部答对！可以再做一次完整测验巩固。');
  } else {
    msg = uiT('quiz.wrongSomeLeft', '还有错题，建议先复习下方链接，再练一次。');
  }
  document.getElementById('result-message').textContent = uiT('quiz.resultPrefix', '{name}，{pct}% — {msg}', { name, pct, msg });
  renderQuizReview(quizState.wrongIndices);
  if (isFullRun) maybeCelebrateGraduation();
}

// ─── Welcome & AI Teacher ───────────────────────────────────────────────────────

const COACH_SECTIONS = [
  { id: 'hero', msg: n => `${n}，我是${TEACHER_NAME}！准备好开始你的 AI 学习之旅了吗？` },
  { id: 'roadmap', msg: n => `${n}，这里是学习地图。按四个阶段顺序走，我会一路陪着你。` },
  { id: 'path', msg: n => `${n}，这是 7 天学习计划。按 Day 顺序学；已掌握的内容点「已掌握」勾选跳过，我会帮你记进度。` },
  { id: 'ai-overview', msg: n => `${n}，先读「AI 全景入门」！弄清 AI 是什么、能干什么，再学原理会轻松很多。` },
  { id: 'fundamentals', msg: n => `${n}，搞懂这 8 个原理模块，是理解一切 AI 工具的基石。` },
  { id: 'knowledge', msg: n => `${n}，100 个术语不用一次背完，遇到不懂的随时来速查。` },
  { id: 'apps', msg: n => `${n}，根据你的场景选对工具，注册试用一款是最快的上手方式。` },
  { id: 'prompt-lab', msg: n => `${n}，提示词是驾驭 AI 的钥匙，来这里练习结构化写法吧。` },
  { id: 'hands-on', msg: n => `${n}，先从「真实软件实操」开始！跟着 Cursor、Midjourney 等教程做一遍，最有成就感。` },
  { id: 'practice', msg: n => `${n}，挑一个和你工作相关的场景，复制提示词去真实试一试！` },
  { id: 'quiz', msg: n => `${n}，最后一关！完成测验检验你这 7 天的成果，加油！` },
  { id: 'graduation', msg: n => `${n}，恭喜结业！这是你的学习报告，记得填写未来 30 天实践计划。` },
  { id: 'monetize', msg: n => `${n}，学完工具想知道怎么赚钱？这里有 30 个可落地的变现方向，挑一个最适合你的开始验证。` },
  { id: 'devices', msg: n => `${n}，买电脑前先看这里！按你的学习路线选系统、内存和显卡，避免花冤枉钱。` },
];

const PHASE_COACH_HINTS = {
  'phase-learn': n => `${n}，阶段一：我们先打好认知基础，弄懂原理和术语。`,
  'phase-tools': n => `${n}，阶段二：学会选工具和写提示词，让 AI 真正为你所用。`,
  'phase-practice': n => `${n}，阶段三：把 AI 嵌入真实工作流，实战出真知！`,
  'phase-validate': n => `${n}，阶段四：检验巩固，复盘总结，持续精进。`,
};

function getDayCompleteMessage(idx) {
  const name = getUserName();
  const day = typeof I18n !== 'undefined' ? I18n.localizePathDay(LEARNING_PATH[idx], idx) : LEARNING_PATH[idx];
  const prog = loadProgress();
  const total = LEARNING_PATH.length;
  const done = prog.completedDays.length;
  const msgs = typeof I18n !== 'undefined' ? I18n.getDayCompleteMessages() : null;
  const teacher = getTeacherName();

  if (msgs) {
    if (done === total) return I18n.interpolate(msgs.allComplete, { name, teacher });
    if (day.phase === 1 && idx === 2) return I18n.interpolate(msgs.cognitionPhaseEnd, { name, teacher });
    if (day.phase === 2 && idx === 4) return I18n.interpolate(msgs.toolsPhaseEnd, { name, teacher });
    if (day.phase === 3) return I18n.interpolate(msgs.practiceDayComplete, { name, teacher });
    const next = typeof I18n !== 'undefined' ? I18n.localizePathDay(LEARNING_PATH[idx + 1], idx + 1) : LEARNING_PATH[idx + 1];
    const nextHint = next
      ? I18n.interpolate(msgs.nextDayHint, { nextDay: next.day, nextTitle: next.title })
      : '';
    return I18n.interpolate(msgs.dayComplete, { name, day: day.day, title: day.title, nextHint, teacher });
  }

  if (done === total) {
    return `${name}，7 天全部完成！你太棒了，去「检验巩固」做最后测验吧 🎉`;
  }
  if (day.phase === 1 && idx === 2) {
    return `${name}，Day 3 完成！认知基础阶段告一段落。滚动到底部可一键进入「工具掌握」👏`;
  }
  if (day.phase === 2 && idx === 4) {
    return `${name}，工具阶段完成！阶段底部的衔接引导可带你进入「实战应用」。`;
  }
  if (day.phase === 3) {
    return `${name}，实战日完成！进入「检验巩固」完成最后测验，冲刺吧！`;
  }
  const next = LEARNING_PATH[idx + 1];
  const nextHint = next ? `明天是 Day ${next.day}「${next.title}」。` : '';
  return `${name}，Day ${day.day}「${day.title}」完成！${nextHint}${teacher}为你骄傲 ✦`;
}

function getDefaultPersonalization() {
  return typeof I18n !== 'undefined' ? I18n.getDefaultPersonalization() : {
    headerName: '学员',
    greeting: 'bestwaytolearn.ai · 四阶段学习 · 7 天路径 · 100 个术语',
    titleHtml: '从零开始<br><span class="hero-accent">系统学会 <em class="hero-accent-ai">AI</em></span>',
    desc: '遵循「认知 → 工具 → 实战 → 检验」四步学习法，每天跟着路径走，7 天建立从原理理解到真实应用的完整 AI 能力。',
    pathBanner: '先看清全貌，再按 Day 1–7 逐日推进；已掌握的天数可勾选「已掌握」跳过。',
    roadmapHeader: '按顺序完成四个阶段，每个阶段有明确目标和对应模块。进度自动保存。',
    phaseBanners: [
      '弄懂 AI 原理与核心术语 · Day 1–3 · 约 2.5 小时',
      '选型主流应用、掌握提示词工程 · Day 4–5 · 约 1.5 小时',
      '将 AI 嵌入真实工作流 · Day 6 · 约 70 分钟',
      '测验成果、复盘总结 · Day 7 · 约 60 分钟',
    ],
  };
}

function applyLocalePersonalization() {
  if (currentUser.name?.trim() && !isPlaceholderUserName(currentUser.name)) {
    applyPersonalization(currentUser.name.trim());
  } else {
    clearPersonalization();
  }
}

function clearPersonalization() {
  const d = getDefaultPersonalization();
  const headerName = document.getElementById('header-user-name');
  if (headerName) headerName.textContent = d.headerName;

  const greeting = document.getElementById('hero-greeting');
  if (greeting) greeting.textContent = d.greeting;

  const title = document.getElementById('hero-title');
  if (title) title.innerHTML = d.titleHtml;

  const desc = document.getElementById('hero-desc');
  if (desc) desc.textContent = d.desc;

  ['phase-learn', 'phase-tools', 'phase-practice', 'phase-validate'].forEach((id, i) => {
    const p = document.getElementById(id)?.querySelector('.phase-banner-text p');
    if (p && d.phaseBanners[i]) p.textContent = d.phaseBanners[i];
  });

  const pathBanner = document.getElementById('path-banner-desc');
  if (pathBanner) pathBanner.textContent = d.pathBanner;

  const roadmapHeader = document.querySelector('#roadmap .section-header p');
  if (roadmapHeader) roadmapHeader.textContent = d.roadmapHeader;
}

function applyPersonalization(name) {
  const n = name?.trim();
  if (isPlaceholderUserName(n)) {
    clearPersonalization();
    return;
  }

  const named = typeof I18n !== 'undefined' ? I18n.getPersonalizationNamed() : null;
  const teacher = getTeacherName();
  const phases = typeof I18n !== 'undefined' ? I18n.localizePhases() : LEARNING_PHASES;

  const headerName = document.getElementById('header-user-name');
  if (headerName) headerName.textContent = n;

  const greeting = document.getElementById('hero-greeting');
  if (greeting) {
    greeting.textContent = named
      ? I18n.interpolate(named.greeting, { name: n, teacher })
      : `${n}，欢迎来到 ${typeof I18n !== 'undefined' ? I18n.getBrandName() : 'BestWayToLearn.AI'}`;
  }

  const title = document.getElementById('hero-title');
  if (title) {
    title.innerHTML = named
      ? I18n.interpolate(named.titleHtml, { name: n, teacher })
      : `${n}，让我们一起<br><span class="hero-accent">系统学会 <em class="hero-accent-ai">AI</em></span>`;
  }

  const desc = document.getElementById('hero-desc');
  if (desc) {
    desc.textContent = I18n?.getLocale() === 'en'
      ? `${teacher} will guide you through Cognition → Tools → Practice → Review in 7 days. I'll be with you every step.`
      : `${teacher}会带你按「认知 → 工具 → 实战 → 检验」四步学习法，7 天从零建立完整的 AI 能力。每天跟着路径走，我会一直陪着你。`;
  }

  const readyTitle = document.getElementById('welcome-ready-title');
  const readyDesc = document.getElementById('welcome-ready-desc');
  const readyQuote = document.getElementById('welcome-ready-quote');
  if (readyTitle) {
    readyTitle.textContent = named
      ? I18n.interpolate(named.readyTitle, { name: n, teacher })
      : `太好了，${n}，准备出发！`;
  }
  if (readyDesc) {
    readyDesc.textContent = named
      ? I18n.interpolate(named.readyDesc, { name: n, teacher })
      : `从今天起，我会用「${n}」这个昵称，一步步带你掌握 AI。`;
  }
  if (readyQuote) {
    readyQuote.textContent = named
      ? I18n.interpolate(named.readyQuote, { name: n, teacher })
      : `「${n}，学习 AI 最好的方式，就是带着真实问题去实践。」`;
  }

  ['phase-learn', 'phase-tools', 'phase-practice', 'phase-validate'].forEach((id, i) => {
    const p = document.getElementById(id)?.querySelector('.phase-banner-text p');
    const phaseData = phases[i];
    if (p && phaseData) {
      const descFirst = phaseData.desc?.split(/[。.!]/)[0] || phaseData.desc || '';
      p.textContent = named
        ? I18n.interpolate(named.phaseBannerTemplate, {
          name: n, teacher, subtitle: phaseData.subtitle, days: phaseData.days, descFirst,
        })
        : `${n}，${phaseData.subtitle} · ${phaseData.days} · ${descFirst}。`;
    }
  });

  const pathBanner = document.getElementById('path-banner-desc');
  if (pathBanner) {
    pathBanner.textContent = named
      ? I18n.interpolate(named.pathBanner, { name: n, teacher })
      : `${n}，先看清 7 天全貌再逐日推进；已掌握的天数可勾选「已掌握」跳过，我会为你记录进度。`;
  }

  const roadmapHeader = document.querySelector('#roadmap .section-header p');
  if (roadmapHeader) {
    roadmapHeader.textContent = named
      ? I18n.interpolate(named.roadmapHeader, { name: n, teacher })
      : `${n}，按顺序完成四个阶段，每个阶段有明确目标和对应模块。进度自动保存，随时可以继续。`;
  }
}

let teacherCoachCollapsed = false;

function showTeacherMessage(msg, { expand = true } = {}) {
  const coach = document.getElementById('teacher-coach');
  const msgEl = document.getElementById('teacher-coach-msg');
  if (!coach || !msgEl) return;
  coach.classList.remove('hidden');
  msgEl.textContent = msg;
  if (expand && teacherCoachCollapsed) {
    coach.classList.remove('collapsed');
    teacherCoachCollapsed = false;
    const toggle = document.getElementById('teacher-coach-toggle');
    if (toggle) {
      toggle.textContent = '−';
      toggle.setAttribute('aria-label', uiT('coach.collapse', '收起导师提示'));
    }
  }
}

function setWelcomeOpen(open) {
  document.body.classList.toggle('welcome-active', open);
}

function setProfilePanelOpen(open) {
  const panel = document.getElementById('user-profile-panel');
  const headerBtn = document.getElementById('header-user');
  const input = document.getElementById('profile-name-input');
  const error = document.getElementById('profile-name-error');
  if (!panel) return;
  panel.classList.toggle('hidden', !open);
  headerBtn?.setAttribute('aria-expanded', open ? 'true' : 'false');
  if (open) {
    if (input) input.value = currentUser.name || '';
    error?.classList.add('hidden');
    setTimeout(() => input?.focus(), 200);
  }
}

function saveProfileName(name) {
  const trimmed = name.trim();
  if (!trimmed) {
    document.getElementById('profile-name-error')?.classList.remove('hidden');
    document.getElementById('profile-name-input')?.focus();
    return false;
  }
  saveUser({ name: trimmed, welcomed: true });
  applyPersonalization(trimmed);
  setProfilePanelOpen(false);
  showTeacherMessage(uiT('profile.nameUpdated', '{name}，昵称已更新！接下来我会继续用这个昵称陪你学习。', { name: trimmed }));
  return true;
}

function clearProfileName() {
  if (!confirm(I18n.t('profile.clearConfirm'))) return;
  saveUser({ name: '', welcomed: currentUser.welcomed });
  clearPersonalization();
  setProfilePanelOpen(false);
  showTeacherMessage(uiT('profile.nameCleared', '已清除昵称。想再设置时，点击右上角或页脚「管理我的昵称」。'));
}

function initUserProfile() {
  const panel = document.getElementById('user-profile-panel');
  if (!panel) return;

  const open = () => setProfilePanelOpen(true);
  const close = () => setProfilePanelOpen(false);

  document.getElementById('header-user')?.addEventListener('click', open);
  document.getElementById('profile-manage-footer')?.addEventListener('click', open);
  document.getElementById('profile-close')?.addEventListener('click', close);

  panel.addEventListener('click', e => {
    if (e.target === panel) close();
  });

  document.getElementById('profile-save')?.addEventListener('click', () => {
    const input = document.getElementById('profile-name-input');
    saveProfileName(input?.value || '');
  });

  document.getElementById('profile-clear')?.addEventListener('click', clearProfileName);

  const input = document.getElementById('profile-name-input');
  input?.addEventListener('input', () => {
    document.getElementById('profile-name-error')?.classList.add('hidden');
  });
  input?.addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('profile-save')?.click();
    if (e.key === 'Escape') close();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !panel.classList.contains('hidden')) close();
  });
}

function finishWelcome(name) {
  saveUser({ name: name.trim(), welcomed: true });
  applyPersonalization(name);
  document.getElementById('welcome-overlay')?.classList.add('hidden');
  setWelcomeOpen(false);
  navigateToHash('#path', { behavior: 'smooth', updateHistory: true });
  showTeacherMessage(uiT('welcome.joined', '{name}，欢迎加入！先到「学习计划」看清 7 天路径；已掌握的内容可点「已掌握」勾选跳过，否则按 Day 顺序学。', { name: name.trim() }));
  initTeacherCoachObserver({ skipInitial: ['hero', 'path'] });
}

function initWelcome() {
  const overlay = document.getElementById('welcome-overlay');
  if (!overlay) return;

  const steps = overlay.querySelectorAll('.welcome-step');
  const dotsEl = document.getElementById('welcome-dots');
  const prevBtn = document.getElementById('welcome-prev');
  const nextBtn = document.getElementById('welcome-next');
  const nameInput = document.getElementById('welcome-name');
  const nameError = document.getElementById('welcome-name-error');
  const resetBtn = document.getElementById('reset-welcome');
  let step = 0;

  if (dotsEl) {
    dotsEl.innerHTML = Array.from({ length: WELCOME_STEPS }, (_, i) =>
      `<span class="welcome-dot${i === 0 ? ' active' : ''}" data-dot="${i}" aria-hidden="true"></span>`
    ).join('');
  }

  function goToStep(n) {
    step = Math.max(0, Math.min(WELCOME_STEPS - 1, n));
    steps.forEach(s => s.classList.toggle('active', parseInt(s.dataset.step, 10) === step));
    dotsEl?.querySelectorAll('.welcome-dot').forEach(d =>
      d.classList.toggle('active', parseInt(d.dataset.dot, 10) === step)
    );
    if (prevBtn) prevBtn.disabled = step === 0;
    if (nextBtn) {
      nextBtn.textContent = step === WELCOME_STEPS - 1 ? I18n.t('welcome.start') : I18n.t('welcome.next');
    }
    if (step === WELCOME_STEPS - 1 && nameInput?.value.trim()) {
      applyPersonalization(nameInput.value.trim());
    }
    if (step === 3) setTimeout(() => nameInput?.focus(), 300);
  }

  prevBtn?.addEventListener('click', () => goToStep(step - 1));
  nextBtn?.addEventListener('click', () => {
    if (step === 3) {
      const name = nameInput?.value.trim() || '';
      if (!name) {
        nameError?.classList.remove('hidden');
        nameInput?.focus();
        return;
      }
      nameError?.classList.add('hidden');
      applyPersonalization(name);
    }
    if (step < WELCOME_STEPS - 1) goToStep(step + 1);
    else finishWelcome(nameInput?.value.trim() || getUserName());
  });

  nameInput?.addEventListener('input', () => nameError?.classList.add('hidden'));
  nameInput?.addEventListener('keydown', e => {
    if (e.key === 'Enter' && step === 3) nextBtn?.click();
  });

  resetBtn?.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    setWelcomeOpen(true);
    if (currentUser.name) nameInput.value = currentUser.name;
    goToStep(0);
  });

  if (currentUser.welcomed) {
    if (currentUser.name) {
      applyPersonalization(currentUser.name);
      showTeacherMessage(uiT('welcome.welcomeBack', '{name}，欢迎回来！上次学到哪儿了？我们从学习地图继续吧。', { name: currentUser.name }));
    } else {
      clearPersonalization();
      showTeacherMessage(uiT('welcome.welcomeBackNoName', '欢迎回来！点击右上角或页脚「管理我的昵称」可以设置站内称呼。'));
    }
    overlay.classList.add('hidden');
    setWelcomeOpen(false);
    initTeacherCoachObserver({ skipInitial: ['hero'] });
    return;
  }

  if (isDeepLinkEntry()) {
    overlay.classList.add('hidden');
    setWelcomeOpen(false);
    showTeacherMessage(uiT('welcome.deepLink', '已进入学习模块。完成欢迎引导后，我会记住你的昵称并在各阶段陪伴你。'));
    initTeacherCoachObserver({ skipInitial: ['hero'] });
    return;
  }

  overlay.classList.remove('hidden');
  setWelcomeOpen(true);
  goToStep(0);
}

const COACH_QUICK_NAV = [
  { label: '首页', href: '#hero' },
  { label: '学习地图', href: '#roadmap' },
  { label: '学习计划', href: '#path' },
  { label: '全景入门', href: '#ai-overview' },
  { label: 'AI 原理', href: '#fundamentals' },
  { label: '知识库', href: '#knowledge' },
  { label: '主流应用', href: '#apps' },
  { label: '提示词', href: '#prompt-lab' },
  { label: '实操案例', href: '#hands-on' },
  { label: '实战场景', href: '#practice' },
  { label: '知识测验', href: '#quiz' },
  { label: '变现指南', href: '#monetize' },
  { label: '设备选购', href: '#devices' },
  { label: '工具导航', href: '#ai-tools-nav' },
];

const SITE_NAV_ENTRIES = [
  { type: '模块', title: '学习地图', subtitle: '四阶段路径总览', href: '#roadmap', keywords: '学习地图 路径 阶段 roadmap' },
  { type: '模块', title: '7 天学习计划', subtitle: '每日任务与进度打卡', href: '#path', keywords: '学习计划 7天 路径 day 打卡 已掌握' },
  { type: '模块', title: 'AI 全景入门', subtitle: '什么是AI、能干什么、工具、领域、未来', href: '#ai-overview', keywords: '全景 入门 介绍 概述' },
  { type: '模块', title: 'AI 原理', subtitle: '8 大原理模块', href: '#fundamentals', keywords: '原理 工作机制 transformer llm' },
  { type: '模块', title: 'AI 知识库', subtitle: '100 个术语', href: '#knowledge', keywords: '知识库 术语 词典 glossary' },
  { type: '模块', title: '主流应用', subtitle: '43 款 AI 工具', href: '#apps', keywords: '应用 工具 chatgpt cursor claude code codex grok zcode openclaw dify coze n8n manus agent' },
  { type: '模块', title: '提示词实验室', subtitle: '6 个实战案例同屏模拟', href: '#prompt-lab', keywords: '提示词 prompt 实验室 案例 模拟' },
  { type: '模块', title: '真实软件实操', subtitle: '30 个手把手教程', href: '#hands-on', keywords: '实操 教程 codex midjourney cursor chatgpt' },
  { type: '模块', title: '实战场景', subtitle: '16 个提示词模板', href: '#practice', keywords: '实战 场景 模板' },
  { type: '模块', title: '知识测验', subtitle: '100 道精选题', href: '#quiz', keywords: '测验 考试 题目 quiz' },
  { type: '模块', title: '结业报告', subtitle: '7 天学习总结与 30 天计划', href: '#graduation', keywords: '结业 毕业 报告 成就 证书' },
  { type: '模块', title: 'AI 技能变现指南', subtitle: '30 个可落地的副业与接单方向', href: '#monetize', keywords: '变现 赚钱 副业 接单 收入 项目 创业 自由职业 monetize' },
  { type: '模块', title: '设备选购指南', subtitle: 'Windows/macOS、内存、显卡与推荐配置', href: '#devices', keywords: '设备 电脑 笔记本 台式机 内存 显卡 GPU RAM mac windows 苹果 配置 选购 硬件' },
  { type: '模块', title: 'AI 工具导航', subtitle: '100+ 工具按分类直达官网', href: '#ai-tools-nav', keywords: '工具导航 大全 hao123 链接 官网 目录 directory' },
];

function buildSiteSearchIndex() {
  const entries = [...getSiteNavEntriesData()];

  getTermsData().forEach(t => {
    entries.push({
      type: getSearchTypeLabel('term'),
      title: typeof I18n !== 'undefined' && I18n.getLocale() === 'en' ? (t.abbr && t.abbr !== '—' ? t.abbr : t.fullEn) : t.term,
      subtitle: t.abbr && t.abbr !== '—' ? `${t.abbr} · ${t.fullEn}` : t.fullEn,
      keywords: [t.term, t.abbr, t.fullEn, t.def, t.category].filter(Boolean).join(' '),
      action: 'term',
      term: t.term,
      category: t.category,
      href: '#knowledge'
    });
  });

  getAppsData().forEach(app => {
    entries.push({
      type: getSearchTypeLabel('app'),
      title: app.name,
      subtitle: `${app.category} · ${app.bestFor}`,
      keywords: [app.name, app.fullEn, app.category, app.desc, app.url, app.tags?.join(' ')].filter(Boolean).join(' '),
      action: 'app',
      appCategory: app.category,
      href: '#apps'
    });
  });

  getToolsNavLinks().forEach(tool => {
    entries.push({
      type: getSearchTypeLabel('toolsNav'),
      title: tool.name,
      subtitle: tool.category,
      keywords: [tool.name, tool.category, tool.desc, tool.url, ...(tool.tags || [])].filter(Boolean).join(' '),
      href: '#ai-tools-nav',
      external: tool.url,
    });
  });

  if (typeof getSkillsNavLinks === 'function') {
    getSkillsNavLinks().forEach(skill => {
      entries.push({
        type: getSearchTypeLabel('skillsNav'),
        title: skill.name,
        subtitle: skill.category,
        keywords: [skill.name, skill.category, skill.desc, skill.github, skill.install, skill.installNote, ...(skill.agents || [])].filter(Boolean).join(' '),
        href: '#ai-skills-nav',
        external: skill.github,
      });
    });
  }

  getFundamentalsData().forEach((f, i) => {
    entries.push({
      type: getSearchTypeLabel('fundamental'),
      title: f.title,
      subtitle: formatEnLabel(f),
      keywords: [f.title, f.abbr, f.fullEn, f.content].filter(Boolean).join(' '),
      action: 'fundamental',
      idx: i,
      href: '#fundamentals'
    });
  });

  getMonetizeProjectsData().forEach((p, i) => {
    entries.push({
      type: getSearchTypeLabel('monetize'),
      title: p.title,
      subtitle: `${p.category} · ${p.income}`,
      keywords: [p.title, p.category, p.desc, p.monetize, p.channels, p.tools?.join(' ')].filter(Boolean).join(' '),
      href: '#monetize',
      scrollId: `monetize-${i}`
    });
  });

  DEVICE_AI_BOXES.forEach((b, i) => {
    const box = typeof I18n !== 'undefined' ? I18n.localizeAiBox(b, i) : b;
    entries.push({
      type: getSearchTypeLabel('aiBox'),
      title: box.title,
      subtitle: `${box.budget} · ${box.chip}`,
      keywords: [box.title, box.vendor, box.chip, box.budget, box.form, box.os, box.bestFor, box.tradeoff, box.vsDiy, ...box.reasoning, ...Object.values(box.specs), ...Object.values(box.capabilities), box.oemVariants?.join(' ')].filter(Boolean).join(' '),
      href: '#devices',
      scrollId: `device-ai-box-${i}`
    });
  });

  DEVICE_PRESETS.forEach((p, i) => {
    const preset = typeof I18n !== 'undefined' ? I18n.localizePreset(p) : p;
    entries.push({
      type: getSearchTypeLabel('config'),
      title: preset.title,
      subtitle: `${preset.budget} · ${preset.form}`,
      keywords: [preset.title, preset.budget, preset.form, preset.os, preset.bestFor, preset.tradeoff, ...preset.reasoning, Object.values(preset.specs).join(' ')].filter(Boolean).join(' '),
      href: '#devices',
      scrollId: `device-preset-${i}`
    });
  });

  getAiOverviewData().forEach(s => {
    entries.push({
      type: getSearchTypeLabel('overview'),
      title: s.title,
      subtitle: s.lead?.slice(0, 40) + '…',
      keywords: [s.title, s.lead, s.tag, s.note].filter(Boolean).join(' '),
      href: `#overview-${s.id}`
    });
  });

  LEARNING_PATH.forEach((rawDay, i) => {
    const day = typeof I18n !== 'undefined' ? I18n.localizePathDay(rawDay, i) : rawDay;
    entries.push({
      type: getSearchTypeLabel('day'),
      title: `Day ${day.day} · ${day.title}`,
      subtitle: day.goal?.slice(0, 36) + '…',
      keywords: [day.title, day.goal, day.desc, `day${day.day}`].filter(Boolean).join(' '),
      href: '#path',
      action: 'path-day',
      dayIdx: i
    });
  });

  getHandsOnData().forEach((c, i) => {
    entries.push({
      type: getSearchTypeLabel('case'),
      title: c.title,
      subtitle: c.software,
      keywords: [c.title, c.software, c.desc].filter(Boolean).join(' '),
      href: `#hands-on-${i}`
    });
  });

  getPracticesData().forEach((p, i) => {
    entries.push({
      type: getSearchTypeLabel('template'),
      title: p.title,
      subtitle: p.tools,
      keywords: [p.title, p.tools, p.desc, p.prompt].filter(Boolean).join(' '),
      href: `#practice-${i}`
    });
  });

  return entries;
}

let siteSearchIndex = [];

function searchSite(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  const scored = siteSearchIndex.map(item => {
    const title = item.title.toLowerCase();
    const keywords = (item.keywords || '').toLowerCase();
    let score = 0;
    if (title === q) score += 100;
    else if (title.startsWith(q)) score += 60;
    else if (title.includes(q)) score += 40;
    if (keywords.includes(q)) score += 20;
    if (item.subtitle?.toLowerCase().includes(q)) score += 10;
    return { item, score };
  }).filter(x => x.score > 0);
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 8).map(x => x.item);
}

function switchKnowledgeView(view) {
  const btn = document.querySelector(`.view-toggle-btn[data-view="${view}"]`);
  if (btn && !btn.classList.contains('active')) btn.click();
}

function navigateSearchResult(item) {
  const results = document.getElementById('teacher-coach-results');
  const input = document.getElementById('teacher-coach-search');
  results?.classList.add('hidden');
  if (input) input.value = '';

  const afterNav = (fn, delay = 280) => setTimeout(fn, delay);

  if (item.action === 'term') {
    switchKnowledgeView('cards');
    conceptCategory = item.category;
    renderTermFilters('concepts-filter', conceptCategory, cat => {
      conceptCategory = cat;
      renderConcepts(document.getElementById('concept-search').value, cat);
    });
    const searchEl = document.getElementById('concept-search');
    if (searchEl) searchEl.value = item.term;
    renderConcepts(item.term, conceptCategory);
    navigateToHash('#knowledge');
    afterNav(() => {
      const card = [...document.querySelectorAll('.concept-card h4')].find(h => h.textContent === item.term)?.closest('.concept-card');
      card?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 320);
  } else if (item.action === 'app') {
    renderApps(item.appCategory);
    navigateToHash('#apps');
    afterNav(() => {
      const card = [...document.querySelectorAll('.app-card h3, .app-card .app-software-link')].find(el => el.textContent === item.title)?.closest('.app-card');
      card?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  } else if (item.action === 'fundamental') {
    navigateToHash('#fundamentals');
    afterNav(() => {
      const card = document.querySelector(`.fundamental-card[data-idx="${item.idx}"]`);
      card?.classList.add('open');
      card?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  } else if (item.action === 'path-day') {
    navigateToHash('#path');
    afterNav(() => {
      document.querySelector(`.path-day[data-day="${item.dayIdx}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  } else if (item.href) {
    navigateToHash(item.href);
    if (item.scrollId) {
      afterNav(() => document.getElementById(item.scrollId)?.scrollIntoView({ behavior: 'smooth', block: 'center' }));
    } else if (item.href.startsWith('#hands-on-') || item.href.startsWith('#practice-')) {
      afterNav(() => document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth', block: 'center' }));
    }
  }

  const name = getUserName();
  showTeacherMessage(uiT('coach.searchOpened', '{name}，已带你定位到「{label}」，继续学习吧！', { name, label: item.title }), { expand: true });
}

function renderCoachSearchResults(query) {
  const list = document.getElementById('teacher-coach-results');
  if (!list) return;
  const results = searchSite(query);
  if (!query.trim()) {
    list.classList.add('hidden');
    list.innerHTML = '';
    return;
  }
  list.classList.remove('hidden');
  if (!results.length) {
    list.innerHTML = `<li class="teacher-coach-result-empty">${I18n.t('teacher.searchEmpty')}</li>`;
    return;
  }
  list.innerHTML = results.map((item, i) =>
    `<li role="option"><button class="teacher-coach-result" type="button" data-idx="${i}">
      <span class="teacher-coach-result-type">${item.type}</span>
      <span class="teacher-coach-result-text"><strong>${item.title}</strong><small>${item.subtitle || ''}</small></span>
    </button></li>`
  ).join('');
  list.querySelectorAll('.teacher-coach-result').forEach(btn => {
    btn.addEventListener('click', () => navigateSearchResult(results[parseInt(btn.dataset.idx, 10)]));
  });
}

function setCoachNavOpen(open) {
  const nav = document.getElementById('teacher-coach-nav');
  const grid = document.getElementById('teacher-coach-nav-grid');
  const toggle = document.getElementById('teacher-coach-nav-toggle');
  if (!nav || !grid || !toggle) return;
  nav.classList.toggle('open', open);
  grid.hidden = !open;
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
}

function navigateCoachQuick(href, label) {
  setCoachNavOpen(false);
  document.getElementById('teacher-coach-results')?.classList.add('hidden');
  const input = document.getElementById('teacher-coach-search');
  if (input) input.value = '';

  document.querySelector('.main-nav')?.classList.remove('open');
  document.querySelector('.nav-toggle')?.setAttribute('aria-expanded', 'false');

  navigateToHash(href);

  document.querySelectorAll('.teacher-coach-nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.href === href);
  });

  const name = getUserName();
  showTeacherMessage(uiT('coach.navGoto', '{name}，已前往「{label}」。', { name, label }), { expand: false });
}

function renderCoachQuickNav() {
  const grid = document.getElementById('teacher-coach-nav-grid');
  if (!grid) return;
  const navItems = getCoachQuickNavData();
  grid.innerHTML = navItems.map(item =>
    `<button type="button" class="teacher-coach-nav-btn" data-href="${item.href}">${item.label}</button>`
  ).join('');
  grid.querySelectorAll('.teacher-coach-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = navItems.find(n => n.href === btn.dataset.href);
      if (item) navigateCoachQuick(item.href, item.label);
    });
  });
}

function initTeacherCoachNav() {
  const navToggle = document.getElementById('teacher-coach-nav-toggle');
  if (!navToggle) return;

  setCoachNavOpen(false);
  renderCoachQuickNav();

  if (!navToggle.dataset.bound) {
    navToggle.dataset.bound = 'true';
    navToggle.addEventListener('click', () => {
      const open = document.getElementById('teacher-coach-nav')?.classList.contains('open');
      setCoachNavOpen(!open);
    });
  }
}

function initTeacherCoachSearch() {
  siteSearchIndex = buildSiteSearchIndex();
  const input = document.getElementById('teacher-coach-search');
  const list = document.getElementById('teacher-coach-results');
  if (!input) return;

  let debounce;
  input.addEventListener('input', () => {
    clearTimeout(debounce);
    debounce = setTimeout(() => renderCoachSearchResults(input.value), 120);
  });

  input.addEventListener('focus', () => {
    if (input.value.trim()) renderCoachSearchResults(input.value);
    teacherCoachCollapsed = false;
    document.getElementById('teacher-coach')?.classList.remove('collapsed');
    const toggle = document.getElementById('teacher-coach-toggle');
    if (toggle) {
      toggle.textContent = '−';
      toggle.setAttribute('aria-label', uiT('coach.collapse', '收起导师提示'));
    }
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      list?.classList.add('hidden');
      input.blur();
    }
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.teacher-coach-search')) list?.classList.add('hidden');
  });
}

function initTeacherCoach() {
  const coach = document.getElementById('teacher-coach');
  const toggle = document.getElementById('teacher-coach-toggle');
  if (!coach || !toggle) return;

  initTeacherCoachNav();
  initTeacherCoachSearch();

  toggle.addEventListener('click', () => {
    teacherCoachCollapsed = !teacherCoachCollapsed;
    coach.classList.toggle('collapsed', teacherCoachCollapsed);
    toggle.textContent = teacherCoachCollapsed ? '+' : '−';
    toggle.setAttribute('aria-label', teacherCoachCollapsed
      ? uiT('coach.expand', '展开导师提示')
      : uiT('coach.collapse', '收起导师提示'));
    if (teacherCoachCollapsed) {
      document.getElementById('teacher-coach-results')?.classList.add('hidden');
      setCoachNavOpen(false);
    }
  });
}

let coachObserver = null;

function initTeacherCoachObserver({ skipInitial = [] } = {}) {
  if (coachObserver) return;
  const name = getUserName();
  const seen = new Set(skipInitial);

  coachObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      if (seen.has(id)) return;

      const phase = entry.target.closest('.learning-phase');
      const phaseHints = getPhaseCoachHintsData();
      if (phase?.id && phaseHints[phase.id] && !seen.has(phase.id)) {
        seen.add(phase.id);
        showTeacherMessage(phaseHints[phase.id](name), { expand: false });
      }

      const section = getCoachSectionsData().find(s => s.id === id);
      if (section) {
        seen.add(id);
        showTeacherMessage(section.msg(name), { expand: false });
      }
    });
  }, { threshold: 0.25, rootMargin: '-80px 0px -50% 0px' });

  const coachSections = getCoachSectionsData();
  const phaseHints = getPhaseCoachHintsData();
  [...coachSections.map(s => s.id), ...Object.keys(phaseHints)].forEach(id => {
    const el = document.getElementById(id);
    if (el) coachObserver.observe(el);
  });
}

// ─── Page Reader (TTS) ────────────────────────────────────────────────────────

const READER_SKIP_SELECTOR = 'script, style, button, input, textarea, select, nav, .teacher-coach, .welcome-overlay, .user-profile-overlay, .page-reader-btn, .page-reader-status, .btn-copy, .hands-on-copy-btn, .teacher-coach-results, .sr-only, #neural-canvas';

const READER_BLOCK_SELECTORS = [
  '#hero', '#roadmap', '.phase-banner',
  '.hands-on-item', '.practice-item', '.path-day', '.overview-block',
  '.fundamental-card', '.app-card:not(.hidden-app)', '.concept-card:not(.hidden-card)',
  '.monetize-card:not(.hidden-monetize)', '.device-preset-card', '.device-ai-box-card', '.device-os-card', '.device-tier-card', '.device-gpu-card', 'main .section'
];

let readerState = { active: false, chunks: [], index: 0 };

function getReaderVoices() {
  return speechSynthesis.getVoices();
}

function pickChineseVoice() {
  const voices = getReaderVoices();
  const rules = [
    v => v.lang === 'zh-CN' && /tingting|sin-ji|meijia|xiaoxiao|yunxi|yaoyao|普通话|中文|female|natural/i.test(v.name),
    v => v.lang === 'zh-CN' && !/english|en-|uk-/i.test(v.name),
    v => v.lang.startsWith('zh'),
  ];
  for (const rule of rules) {
    const v = voices.find(rule);
    if (v) return v;
  }
  return voices.find(v => v.lang.includes('zh')) || null;
}

function isReaderElementVisible(el) {
  if (!el || el.closest('.hidden')) return false;
  const st = getComputedStyle(el);
  if (st.display === 'none' || st.visibility === 'hidden') return false;
  const r = el.getBoundingClientRect();
  return r.width > 8 && r.height > 8;
}

function getCurrentReadableElement() {
  const nodes = [];
  READER_BLOCK_SELECTORS.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      if (isReaderElementVisible(el)) nodes.push(el);
    });
  });
  const header = 68;
  const vh = window.innerHeight;
  let best = null;
  let bestVisible = 0;
  nodes.forEach(el => {
    const r = el.getBoundingClientRect();
    const top = Math.max(r.top, header);
    const bottom = Math.min(r.bottom, vh);
    const visible = Math.max(0, bottom - top);
    if (visible > bestVisible) {
      bestVisible = visible;
      best = el;
    }
  });
  return best || document.getElementById('hero');
}

function extractReadableText(root) {
  const clone = root.cloneNode(true);
  clone.querySelectorAll(READER_SKIP_SELECTOR).forEach(n => n.remove());
  return (clone.innerText || '')
    .replace(/\s+/g, ' ')
    .replace(/一键复制|复制成功|开始测验|重新测验|查看结果/g, ' ')
    .trim();
}

function splitTextForSpeech(text, maxLen = 180) {
  if (!text) return [];
  const parts = text.split(/(?<=[。！？；.!?])\s*/).filter(Boolean);
  const chunks = [];
  let buf = '';
  parts.forEach(part => {
    if ((buf + part).length <= maxLen) {
      buf += part;
    } else {
      if (buf.trim()) chunks.push(buf.trim());
      if (part.length <= maxLen) buf = part;
      else {
        for (let i = 0; i < part.length; i += maxLen) chunks.push(part.slice(i, i + maxLen).trim());
        buf = '';
      }
    }
  });
  if (buf.trim()) chunks.push(buf.trim());
  return chunks;
}

function getReadableSectionTitle(el) {
  if (!el) return '当前页面';
  const heading = el.querySelector(':scope > .section-header h2, :scope > .section-header h1, h1, h2, h3');
  if (heading?.textContent?.trim()) return heading.textContent.trim().slice(0, 40);
  return el.id ? el.id.replace(/-/g, ' ') : '当前内容';
}

function updateReaderUI(playing, label = '') {
  const btn = document.getElementById('page-reader-btn');
  const status = document.getElementById('page-reader-status');
  if (!btn) return;
  btn.classList.toggle('active', playing);
  btn.setAttribute('aria-pressed', playing ? 'true' : 'false');
  const labelEl = btn.querySelector('.page-reader-label');
  const readLabel = typeof I18n !== 'undefined' ? I18n.t('reader.label') : '朗读';
  const stopLabel = I18n?.getLocale() === 'en' ? 'Stop' : '停止';
  if (labelEl) labelEl.textContent = playing ? stopLabel : readLabel;
  btn.setAttribute('aria-label', playing
    ? (I18n?.getLocale() === 'en' ? 'Stop reading aloud' : '停止朗读')
    : (typeof I18n !== 'undefined' ? I18n.t('reader.aria') : '朗读当前屏幕内容'));
  if (status) {
    if (playing && label) {
      status.textContent = I18n?.getLocale() === 'en' ? `Reading: ${label}` : `正在朗读：${label}`;
      status.classList.remove('hidden');
    } else {
      status.classList.add('hidden');
      status.textContent = '';
    }
  }
}

function stopPageReader() {
  readerState.active = false;
  readerState.chunks = [];
  readerState.index = 0;
  speechSynthesis.cancel();
  updateReaderUI(false);
}

function speakNextChunk() {
  if (!readerState.active || readerState.index >= readerState.chunks.length) {
    stopPageReader();
    return;
  }
  const utter = new SpeechSynthesisUtterance(readerState.chunks[readerState.index]);
  const voice = pickChineseVoice();
  if (voice) utter.voice = voice;
  utter.lang = voice?.lang || (typeof I18n !== 'undefined' && I18n.getLocale() === 'en' ? 'en-US' : 'zh-CN');
  utter.rate = 0.96;
  utter.pitch = 1;
  utter.onend = () => { readerState.index += 1; speakNextChunk(); };
  utter.onerror = () => { readerState.index += 1; speakNextChunk(); };
  speechSynthesis.speak(utter);
}

function startPageReader() {
  if (document.body.classList.contains('welcome-active')) return;
  if (!('speechSynthesis' in window)) {
    showTeacherMessage('当前浏览器不支持语音朗读，请使用 Chrome、Safari 或 Edge。', { expand: true });
    return;
  }
  const root = getCurrentReadableElement();
  const chunks = splitTextForSpeech(extractReadableText(root));
  if (!chunks.length) {
    showTeacherMessage('当前屏幕区域没有可朗读的正文内容。', { expand: false });
    return;
  }
  speechSynthesis.cancel();
  readerState = { active: true, chunks, index: 0 };
  updateReaderUI(true, getReadableSectionTitle(root));
  const begin = () => speakNextChunk();
  if (!getReaderVoices().length) {
    speechSynthesis.addEventListener('voiceschanged', begin, { once: true });
    getReaderVoices();
  } else begin();
}

function togglePageReader() {
  if (readerState.active) stopPageReader();
  else startPageReader();
}

function initPageReader() {
  const btn = document.getElementById('page-reader-btn');
  if (!btn || !('speechSynthesis' in window)) {
    btn?.classList.add('hidden');
    return;
  }
  btn.addEventListener('click', togglePageReader);
  speechSynthesis.addEventListener('voiceschanged', () => getReaderVoices());
  window.addEventListener('hashchange', stopPageReader);
  window.addEventListener('beforeunload', stopPageReader);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopPageReader();
  });
}

// ─── UI Helpers ───────────────────────────────────────────────────────────────

function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

let conceptCategory = DEFAULT_TERM_CATEGORY;
let glossaryCategory = DEFAULT_TERM_CATEGORY;

function initConceptSearch() {
  renderTermFilters('concepts-filter', conceptCategory, cat => {
    conceptCategory = cat;
    renderConcepts(document.getElementById('concept-search').value, cat);
  });
  document.getElementById('concept-search').addEventListener('input', e => {
    renderConcepts(e.target.value, conceptCategory);
  });
  const flipAllBtn = document.getElementById('concepts-flip-all');
  if (flipAllBtn) {
    flipAllBtn.addEventListener('click', () => {
      const cards = getVisibleConceptCards();
      const allFlipped = cards.length && cards.every(c => c.classList.contains('flipped'));
      setAllConceptCardsFlipped(!allFlipped);
    });
  }
  const autoFlipBtn = document.getElementById('concepts-auto-flip');
  if (autoFlipBtn) {
    autoFlipBtn.addEventListener('click', () => {
      conceptsAutoFlipEnabled = !conceptsAutoFlipEnabled;
      syncConceptAutoFlipButton();
    });
    syncConceptAutoFlipButton();
  }
}

function initGlossarySearch() {
  renderTermFilters('glossary-filter', glossaryCategory, cat => {
    glossaryCategory = cat;
    renderGlossary(document.getElementById('glossary-search').value, cat);
  });
  document.getElementById('glossary-search').addEventListener('input', e => {
    renderGlossary(e.target.value, glossaryCategory);
  });
}

function initKnowledgeViewToggle() {
  const btns = document.querySelectorAll('.view-toggle-btn');
  const cardsView = document.getElementById('knowledge-cards');
  const glossaryView = document.getElementById('knowledge-glossary');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const isCards = btn.dataset.view === 'cards';
      cardsView.classList.toggle('hidden', !isCards);
      glossaryView.classList.toggle('hidden', isCards);
    });
  });
}

function refreshLocaleUI() {
  if (typeof I18n === 'undefined') return;
  const allTerm = I18n.getTermCategoryAll();
  if (conceptCategory === '全部' || conceptCategory === 'All') conceptCategory = allTerm;
  if (glossaryCategory === '全部' || glossaryCategory === 'All') glossaryCategory = allTerm;
  if (monetizeCategory === '全部' || monetizeCategory === 'All') monetizeCategory = I18n.getMonetizeCategoryAll();

  I18n.refreshStaticChrome();
  repairNavTabs();
  updatePhaseTabNavUI(currentPhaseTab);

  applyLocalePersonalization();

  renderRoadmap();
  renderLearningPath();
  renderAiOverview();
  renderFundamentals();
  renderApps(document.querySelector('#apps-filter .filter-btn.active')?.dataset.cat || DEFAULT_APP_CATEGORY);
  document.querySelectorAll('#apps-filter .filter-btn').forEach(btn => {
    if (typeof I18n !== 'undefined') btn.textContent = I18n.getAppCategoryLabel(btn.dataset.cat);
  });
  renderHandsOnCases();
  renderPractices();
  refreshPromptLabChrome();
  renderDevices();
  renderQuizPrelude();
  renderMonetize();
  renderToolsNav();
  renderSkillsNav();
  renderTermFilters('concepts-filter', conceptCategory, cat => {
    conceptCategory = cat;
    renderConcepts(document.getElementById('concept-search')?.value || '', cat);
  });
  renderTermFilters('glossary-filter', glossaryCategory, cat => {
    glossaryCategory = cat;
    renderGlossary(document.getElementById('glossary-search')?.value || '', cat);
  });
  renderConcepts(document.getElementById('concept-search')?.value || '', conceptCategory);
  renderGlossary(document.getElementById('glossary-search')?.value || '', glossaryCategory);
  siteSearchIndex = buildSiteSearchIndex();
  renderCoachQuickNav();
  renderPracticePlanFocus();
  const weeksEl = document.getElementById('practice-plan-weeks');
  if (weeksEl) {
    const saved = collectPracticePlan();
    weeksEl.dataset.rendered = '';
    renderPracticePlanWeeks({ force: true });
    const form = document.getElementById('practice-plan-form');
    if (form) {
      form.querySelectorAll('input[type="checkbox"][name="focus"]').forEach(cb => {
        cb.checked = (saved.focus || []).includes(cb.value);
      });
      [1, 2, 3, 4].forEach(w => {
        const focus = form.querySelector(`[name="week${w}-focus"]`);
        const p1 = form.querySelector(`[name="week${w}-p1"]`);
        const p2 = form.querySelector(`[name="week${w}-p2"]`);
        if (focus) focus.value = saved[`week${w}Focus`] || '';
        if (p1) p1.value = saved[`week${w}P1`] || '';
        if (p2) p2.value = saved[`week${w}P2`] || '';
      });
    }
  }
  updateAllProgress();

  const nextBtn = document.getElementById('welcome-next');
  if (nextBtn && document.getElementById('welcome-overlay') && !document.getElementById('welcome-overlay').classList.contains('hidden')) {
    const steps = document.querySelectorAll('.welcome-step');
    const active = [...steps].findIndex(s => s.classList.contains('active'));
    if (active >= 0) nextBtn.textContent = active === WELCOME_STEPS - 1 ? I18n.t('welcome.start') : I18n.t('welcome.next');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof I18n !== 'undefined') {
    I18n.init();
    I18n.onChange(() => refreshLocaleUI());
  }
  hashToPhaseTab = buildHashToPhaseTabMap();
  initNeuralCanvas();
  renderRoadmap();
  renderLearningPath();
  renderAiOverview();
  renderFundamentals();
  renderConcepts();
  renderApps();
  renderMonetize();
  renderDevices();
  initToolsNav();
  initSkillsNav();
  renderHandsOnCases();
  renderPractices();
  initPracticeCopyButtons();
  renderGlossary();
  initPromptLab();
  initQuiz();
  initGraduation();
  renderQuizPrelude();
  initPhaseTabs();
  initWelcome();
  initUserProfile();
  initTeacherCoach();
  initPageReader();
  const quizCounter = document.getElementById('quiz-counter');
  if (quizCounter) quizCounter.textContent = `1 / ${getQuizData().length}`;
  initScrollReveal();
  initNav();
  initConceptSearch();
  initGlossarySearch();
  initKnowledgeViewToggle();
  updateContinueLearningCTA();
  applyLocalePersonalization();
});