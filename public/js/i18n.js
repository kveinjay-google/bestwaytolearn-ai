/* BestWayToLearn.AI — Internationalization & display preferences */

const I18n = (function () {
  const LOCALE_KEY = 'bwtl-ai-locale';
  const FONT_KEY = 'bwtl-ai-font-size';

  function migrateStorageKey(oldKey, newKey) {
    try {
      if (localStorage.getItem(newKey) == null && localStorage.getItem(oldKey) != null) {
        localStorage.setItem(newKey, localStorage.getItem(oldKey));
        localStorage.removeItem(oldKey);
      }
    } catch (_) { /* private mode */ }
  }

  migrateStorageKey('synapse-ai-locale', LOCALE_KEY);
  migrateStorageKey('synapse-ai-font-size', FONT_KEY);

  const DEFAULT_LOCALE = 'zh-CN';
  const DEFAULT_FONT = 'md';
  const SUPPORTED_LOCALES = ['zh-CN', 'en'];

  const bundles = {};
  let currentLocale = DEFAULT_LOCALE;
  let currentFontSize = DEFAULT_FONT;
  const listeners = new Set();

  function registerLocale(code, bundle) {
    bundles[code] = bundle;
  }

  function deepMerge(target = {}, source = {}) {
    const out = { ...target };
    Object.entries(source).forEach(([key, value]) => {
      if (key.startsWith('__')) return;
      if (
        value && typeof value === 'object' && !Array.isArray(value)
        && target[key] && typeof target[key] === 'object' && !Array.isArray(target[key])
      ) {
        out[key] = deepMerge(target[key], value);
      } else if (value !== undefined) {
        out[key] = value;
      }
    });
    return out;
  }

  function mergeLocaleData(locale, data) {
    if (!SUPPORTED_LOCALES.includes(locale)) return;
    const existing = bundles[locale] || { strings: {}, data: {} };
    const { strings, ...rest } = data || {};
    bundles[locale] = {
      strings: strings ? deepMerge(existing.strings || {}, strings) : (existing.strings || {}),
      data: deepMerge(existing.data || {}, rest),
    };
  }

  function interpolate(template, vars = {}) {
    if (typeof template !== 'string') return template;
    return Object.entries(vars).reduce(
      (out, [k, v]) => out.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v ?? '')),
      template
    );
  }

  function mapCategoryLabel(cat, map) {
    if (!cat || currentLocale === DEFAULT_LOCALE) return cat;
    return map?.[cat] || cat;
  }

  function mergeIndexed(base = [], overlay = []) {
    return base.map((item, i) => (overlay[i] ? { ...item, ...overlay[i] } : item));
  }

  function getBundle(locale = currentLocale) {
    return bundles[locale] || bundles[DEFAULT_LOCALE] || { strings: {}, data: {} };
  }

  function resolve(obj, path) {
    return path.split('.').reduce((acc, key) => (acc && acc[key] != null ? acc[key] : undefined), obj);
  }

  function t(key, vars = {}) {
    const str = resolve(getBundle().strings, key);
    if (typeof str !== 'string') return key;
    return Object.entries(vars).reduce(
      (out, [k, v]) => out.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v ?? '')),
      str
    );
  }

  function getData(path) {
    return resolve(getBundle().data, path);
  }

  function getTeacherName() {
    return t('teacher.name');
  }

  function getDefaultUserName() {
    return t('user.defaultName');
  }

  function getNavLabels() {
    return getBundle().data?.nav || {};
  }

  function getPhaseTabConfig() {
    const overlay = getBundle().data?.phaseTabs || {};
    if (currentLocale === DEFAULT_LOCALE) return overlay;
    return overlay;
  }

  function getPhaseTabLabel(tabId) {
    const overlay = getBundle().data?.phaseTabs?.[tabId];
    if (overlay?.label) return overlay.label;
    if (typeof PHASE_TAB_CONFIG !== 'undefined') {
      return PHASE_TAB_CONFIG[tabId]?.label || tabId;
    }
    return tabId;
  }

  function getPhaseTabModules(tabId) {
    const overlay = getBundle().data?.phaseTabs?.[tabId];
    const base = typeof PHASE_TAB_CONFIG !== 'undefined' ? PHASE_TAB_CONFIG[tabId] : null;
    if (!base) return overlay?.modules || [];
    if (!overlay?.modules) return base.modules;
    return base.modules.map((m, i) => ({ ...m, ...(overlay.modules[i] || {}) }));
  }

  function getPhaseTabNext(tabId) {
    const overlay = getBundle().data?.phaseTabs?.[tabId];
    const base = typeof PHASE_TAB_CONFIG !== 'undefined' ? PHASE_TAB_CONFIG[tabId] : null;
    if (!base) return null;
    return {
      next: base.next,
      nextLabel: overlay?.nextLabel || base.nextLabel,
      nextDesc: overlay?.nextDesc || base.nextDesc,
    };
  }

  function getPhaseShortLabels() {
    const labels = getBundle().data?.phaseShortLabels;
    if (labels) return labels;
    return { 1: '01 认知', 2: '02 工具', 3: '03 实战', 4: '04 检验' };
  }

  function getDefaultPersonalization() {
    return getBundle().data?.personalization || {};
  }

  function localizePhases() {
    if (currentLocale === DEFAULT_LOCALE) return LEARNING_PHASES;
    const map = getBundle().data?.learningPhases || {};
    return LEARNING_PHASES.map(p => ({ ...p, ...(map[p.id] || {}) }));
  }

  function localizePathDay(day, index) {
    if (currentLocale === DEFAULT_LOCALE) return day;
    const overlay = getBundle().data?.learningPath?.[index];
    if (!overlay) return day;
    return {
      ...day,
      ...overlay,
      goto: overlay.goto || day.goto,
      tasks: overlay.tasks || day.tasks,
    };
  }

  function localizeDeviceMeta() {
    if (currentLocale === DEFAULT_LOCALE) return DEVICE_GUIDE_META;
    return { ...DEVICE_GUIDE_META, ...(getBundle().data?.deviceGuideMeta || {}) };
  }

  function localizeAiBoxesMeta() {
    if (currentLocale === DEFAULT_LOCALE) return DEVICE_AI_BOXES_META;
    return { ...DEVICE_AI_BOXES_META, ...(getBundle().data?.deviceAiBoxesMeta || {}) };
  }

  function localizeNeedOptions() {
    if (currentLocale === DEFAULT_LOCALE) return DEVICE_NEED_OPTIONS;
    const map = getBundle().data?.deviceNeedOptions || {};
    return DEVICE_NEED_OPTIONS.map(n => ({ ...n, ...(map[n.id] || {}) }));
  }

  function localizeOsCompare(key) {
    const base = DEVICE_OS_COMPARE[key];
    if (!base || currentLocale === DEFAULT_LOCALE) return base;
    const overlay = getBundle().data?.deviceOsCompare?.[key] || {};
    return {
      ...base,
      ...overlay,
      chooseWhen: overlay.chooseWhen || base.chooseWhen,
      avoidWhen: overlay.avoidWhen || base.avoidWhen,
    };
  }

  function localizeStorageTiers() {
    if (currentLocale === DEFAULT_LOCALE) return DEVICE_STORAGE_TIERS;
    const overlays = getBundle().data?.deviceStorageTiers || [];
    return DEVICE_STORAGE_TIERS.map((s, i) => ({ ...s, ...(overlays[i] || {}) }));
  }

  function localizeAiBox(box, index) {
    if (currentLocale === DEFAULT_LOCALE) return box;
    const overlay = getBundle().data?.deviceAiBoxes?.[box.id];
    if (!overlay) return box;
    return {
      ...box,
      ...overlay,
      specs: { ...box.specs, ...(overlay.specs || {}) },
      capabilities: { ...box.capabilities, ...(overlay.capabilities || {}) },
      reasoning: overlay.reasoning || box.reasoning,
      recommendedApps: box.recommendedApps,
      oemVariants: overlay.oemVariants || box.oemVariants,
    };
  }

  function localizePreset(preset) {
    if (currentLocale === DEFAULT_LOCALE) return preset;
    const overlay = getBundle().data?.devicePresets?.[preset.id];
    if (!overlay) return preset;
    return {
      ...preset,
      ...overlay,
      specs: { ...preset.specs, ...(overlay.specs || {}) },
      reasoning: overlay.reasoning || preset.reasoning,
    };
  }

  function localizeMemoryTiers() {
    if (typeof DEVICE_MEMORY_TIERS === 'undefined') return [];
    if (currentLocale === DEFAULT_LOCALE) return DEVICE_MEMORY_TIERS;
    const overlays = getData('deviceMemoryTiers') || [];
    return DEVICE_MEMORY_TIERS.map((s, i) => ({ ...s, ...(overlays[i] || {}) }));
  }

  function localizeGpuTiers() {
    if (typeof DEVICE_GPU_TIERS === 'undefined') return [];
    if (currentLocale === DEFAULT_LOCALE) return DEVICE_GPU_TIERS;
    const overlays = getData('deviceGpuTiers') || [];
    return DEVICE_GPU_TIERS.map((g, i) => ({ ...g, ...(overlays[i] || {}) }));
  }

  function getDeviceFieldLabels() {
    if (currentLocale === DEFAULT_LOCALE) return null;
    return getData('deviceFieldLabels') || null;
  }

  function getDeviceSubsections() {
    return getData('deviceSubsections') || null;
  }

  function getResolvedPhaseTabConfig(tabId) {
    const base = typeof PHASE_TAB_CONFIG !== 'undefined' ? PHASE_TAB_CONFIG[tabId] : null;
    if (!base || currentLocale === DEFAULT_LOCALE) return base;
    const overlay = getData('phaseTabs')?.[tabId] || {};
    return {
      ...base,
      label: overlay.label || base.label,
      nextLabel: overlay.nextLabel || base.nextLabel,
      nextDesc: overlay.nextDesc || base.nextDesc,
      modules: base.modules?.map((m, i) => ({
        ...m,
        label: overlay.modules?.[i]?.label || m.label,
      })) || base.modules,
    };
  }

  function getGraduationModules() {
    if (currentLocale === DEFAULT_LOCALE && typeof GRADUATION_MODULES !== 'undefined') {
      return GRADUATION_MODULES;
    }
    return getData('graduationModules')
      || (typeof GRADUATION_MODULES !== 'undefined' ? GRADUATION_MODULES : []);
  }

  function getCoachQuickNav() {
    return getData('coachQuickNav') || null;
  }

  function getSiteNavEntries() {
    return getData('siteNavEntries') || null;
  }

  function getToolsNavMeta() {
    if (currentLocale === DEFAULT_LOCALE && typeof AI_TOOLS_NAV_META !== 'undefined') {
      return AI_TOOLS_NAV_META;
    }
    return getData('toolsNav')?.meta || (typeof AI_TOOLS_NAV_META !== 'undefined' ? AI_TOOLS_NAV_META : {});
  }

  function getToolsNavCategoryLabel(cat) {
    return mapCategoryLabel(cat, getData('toolsNav')?.categories);
  }

  function localizeToolsNavTool(tool) {
    if (!tool || currentLocale === DEFAULT_LOCALE) return tool;
    const overlay = getData('toolsNav')?.tools?.[tool.name];
    if (!overlay) return tool;
    return { ...tool, name: overlay.name || tool.name, desc: overlay.desc || tool.desc };
  }

  function getQuizTopicLinks() {
    if (currentLocale === DEFAULT_LOCALE) return null;
    return getData('quizTopicLinks') || null;
  }

  function getQuizReviewLinks() {
    return getData('quizReviewLinks') || null;
  }

  function getPracticePlanFocus() {
    return getData('practicePlanFocus') || null;
  }

  function applyDeviceSubsections() {
    const subs = getDeviceSubsections();
    if (!subs) return;
    const map = {
      'device-needs': 'needs',
      'device-os': 'os',
      'device-memory': 'memory',
      'device-gpu': 'gpu',
      'device-storage': 'storage',
      'device-ai-boxes': 'aiBoxes',
      'device-presets': 'presets',
    };
    Object.entries(map).forEach(([id, key]) => {
      const el = document.getElementById(id);
      const data = subs[key];
      if (!el || !data) return;
      const h3 = el.querySelector('.device-subtitle');
      const p = el.querySelector('.device-subdesc');
      if (h3 && data.title) h3.textContent = data.title;
      if (p && data.desc !== undefined) p.innerHTML = data.desc;
    });
    const devicesSection = document.getElementById('devices');
    if (devicesSection && currentLocale === 'en') {
      const tag = devicesSection.querySelector('.section-tag');
      const h2 = devicesSection.querySelector('.section-header h2');
      if (tag) tag.textContent = t('devices.sectionTag');
      if (h2) h2.textContent = t('devices.sectionTitle');
    }
  }

  function applyGraduationChrome() {
    if (currentLocale === DEFAULT_LOCALE) return;
    const hdr = getData('sectionHeaders')?.graduation || {};
    const gradSection = document.getElementById('graduation');
    const setBadgeText = (el, text) => {
      if (!el) return;
      const img = el.querySelector('img');
      el.textContent = '';
      if (img) el.appendChild(img);
      el.append(` ${text}`);
    };
    setBadgeText(gradSection?.querySelector('.graduation-hero-badge'), t('graduation.heroBadge'));
    setBadgeText(document.querySelector('#graduation-banner .graduation-banner-badge'), t('graduation.bannerBadge'));
    document.querySelectorAll('#quiz-review h4').forEach(el => { el.textContent = t('quiz.reviewTitle'); });
    const reviewHint = document.querySelector('.quiz-review-hint');
    if (reviewHint) reviewHint.textContent = t('quiz.reviewHint');
    const retryWrong = document.getElementById('retry-wrong-quiz');
    const retryQuiz = document.getElementById('retry-quiz');
    const viewGrad = document.getElementById('view-graduation-btn');
    if (retryWrong) retryWrong.textContent = t('quiz.retryWrong');
    if (retryQuiz) retryQuiz.textContent = t('quiz.retryFull');
    if (viewGrad) viewGrad.textContent = t('graduation.viewReport');
    const bannerLink = document.querySelector('#graduation-banner a[href="#graduation"]');
    if (bannerLink) bannerLink.textContent = t('graduation.viewReport');
    const gradTitle = document.getElementById('graduation-title');
    const gradDesc = document.getElementById('graduation-desc');
    if (gradTitle && currentLocale === 'en') {
      gradTitle.textContent = t('graduation.title', { name: getDefaultUserName() });
    }
    if (gradDesc && currentLocale === 'en') gradDesc.textContent = t('graduation.desc');
    const planTag = gradSection?.querySelector('.practice-plan-30 .section-tag');
    const planH3 = gradSection?.querySelector('.practice-plan-30 h3');
    const planP = gradSection?.querySelector('.practice-plan-30 .section-header p');
    const legend = gradSection?.querySelector('.practice-plan-focus legend');
    if (planTag && hdr.planTag) planTag.textContent = hdr.planTag;
    if (planH3 && hdr.planTitle) planH3.textContent = hdr.planTitle;
    if (planP && hdr.planDesc) planP.textContent = hdr.planDesc;
    if (legend && hdr.focusLegend) legend.textContent = hdr.focusLegend;
    const exportBtn = document.getElementById('export-practice-plan');
    const copyBtn = document.getElementById('copy-graduation-report');
    if (exportBtn && hdr.exportPlan) exportBtn.textContent = hdr.exportPlan;
    if (copyBtn && hdr.copyReport) copyBtn.textContent = hdr.copyReport;
    const footprintH3 = gradSection?.querySelector('.graduation-modules h3');
    if (footprintH3 && hdr.learningFootprint) footprintH3.textContent = hdr.learningFootprint;
    const savedHint = document.getElementById('practice-plan-saved');
    if (savedHint && hdr.saved) savedHint.textContent = hdr.saved;
  }

  function getTermCategoryAll() {
    return t('terms.categoryAll');
  }

  function getMonetizeCategoryAll() {
    return t('monetize.categoryAll');
  }

  function applyDom() {
    document.documentElement.lang = currentLocale === 'en' ? 'en' : 'zh-CN';
    document.documentElement.dataset.locale = currentLocale;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (key) el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      if (key) el.innerHTML = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (key) el.placeholder = t(key);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.dataset.i18nTitle;
      if (key) el.title = t(key);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.dataset.i18nAria;
      if (key) el.setAttribute('aria-label', t(key));
    });

    const notice = document.getElementById('locale-content-notice');
    if (notice) {
      notice.classList.toggle('hidden', currentLocale === DEFAULT_LOCALE);
      notice.textContent = t('notice.partialEn');
    }

    document.title = t('meta.title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = t('meta.description');
    applySiteMeta();

    syncPrefsPanel();
  }

  function applySiteMeta() {
    const url = getSiteUrl();
    const title = t('meta.title');
    const desc = t('meta.description');
    const name = getBrandName();

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = url;

    const setMetaContent = (selector, value) => {
      const el = document.querySelector(selector);
      if (el && value) el.setAttribute('content', value);
    };

    setMetaContent('meta[property="og:url"]', url);
    setMetaContent('meta[property="og:site_name"]', name);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', desc);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', desc);

    document.querySelectorAll('[data-site-url]').forEach(el => {
      el.href = url;
    });
  }

  function applyFontSize(size = currentFontSize) {
    currentFontSize = size;
    document.documentElement.dataset.fontSize = size;
    localStorage.setItem(FONT_KEY, size);
    document.querySelectorAll('.pref-font-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.size === size);
      btn.setAttribute('aria-pressed', btn.dataset.size === size ? 'true' : 'false');
    });
  }

  function setLocale(locale) {
    if (!SUPPORTED_LOCALES.includes(locale)) return;
    currentLocale = locale;
    localStorage.setItem(LOCALE_KEY, locale);
    applyDom();
    listeners.forEach(fn => fn(currentLocale));
  }

  function setFontSize(size) {
    if (!['sm', 'md', 'lg', 'xl'].includes(size)) return;
    applyFontSize(size);
    listeners.forEach(fn => fn(currentLocale));
  }

  function onChange(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  }

  function syncLangFlags() {
    document.querySelectorAll('.header-lang-btn').forEach(btn => {
      const active = btn.dataset.locale === currentLocale;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function syncPrefsPanel() {
    syncLangFlags();
    applyFontSize(currentFontSize);
  }

  function applyWelcomeSteps() {
    const steps = getBundle().data?.welcomeSteps;
    if (!steps) return;
    steps.forEach((content, i) => {
      const step = document.querySelector(`.welcome-step[data-step="${i}"]`);
      if (!step || !content) return;
      if (content.title) {
        const h2 = step.querySelector('h2');
        if (h2) h2.textContent = content.title;
      }
      if (content.paragraphs) {
        const ps = step.querySelectorAll(':scope > p:not(.welcome-hint):not(.welcome-name-error)');
        content.paragraphs.forEach((text, pi) => {
          if (ps[pi]) ps[pi].innerHTML = text;
        });
      }
      if (content.hint) {
        const hint = step.querySelector('.welcome-hint');
        if (hint) hint.textContent = content.hint;
      }
      if (content.list) {
        const ul = step.querySelector('.welcome-list');
        if (ul) ul.innerHTML = content.list.map(li => `<li>${li}</li>`).join('');
      }
      if (content.flow) {
        const flow = step.querySelector('.welcome-flow');
        if (flow) {
          flow.innerHTML = content.flow.map((item, fi) => {
            if (item.arrow) return `<div class="welcome-flow-arrow">→</div>`;
            return `<div class="welcome-flow-item"><span>${item.num}</span><strong>${item.title}</strong><small>${item.sub}</small></div>`;
          }).join('');
        }
      }
      if (content.quote) {
        const quote = step.querySelector('#welcome-ready-quote, .welcome-ready-card p');
        if (quote && i === 4) quote.textContent = content.quote;
      }
    });
    const nameErr = document.getElementById('welcome-name-error');
    if (nameErr) nameErr.textContent = t('welcome.nameError');
    const profileErr = document.getElementById('profile-name-error');
    if (profileErr) profileErr.textContent = t('profile.nameError');
  }

  function applySectionHeaders() {
    const map = getBundle().data?.sectionHeaders || {};
    Object.entries(map).forEach(([id, hdr]) => {
      const root = document.getElementById(id);
      if (!root) return;
      const tag = root.querySelector('.section-tag');
      const h2 = root.querySelector('.section-header h2, .section-header-center h2');
      const p = root.querySelector('.section-header p, .section-header-center p');
      if (tag && hdr.tag) tag.textContent = hdr.tag;
      if (h2 && hdr.title) h2.textContent = hdr.title;
      if (p && hdr.desc) p.textContent = hdr.desc;
    });
  }

  const PHASE_BANNER_SELECTORS = {
    learn: '#phase-learn',
    tools: '#phase-tools',
    practice: '#phase-practice',
    validate: '#phase-validate',
    path: '#phase-view-path',
    monetize: '#phase-view-monetize',
    devices: '#phase-view-devices',
  };

  function applyPhaseBannerTitles() {
    const titles = getBundle().data?.phaseBannerTitles || {};
    Object.entries(titles).forEach(([tabId, title]) => {
      const panel = document.querySelector(PHASE_BANNER_SELECTORS[tabId]);
      const h2 = panel?.querySelector('.phase-banner-text h2');
      if (h2) h2.textContent = title;
    });
  }

  function applyPathGuide() {
    const items = getBundle().data?.pathGuide?.items;
    const ol = document.getElementById('path-guide-list');
    if (!items || !ol) return;
    ol.innerHTML = items.map(item => `<li>${item}</li>`).join('');
  }

  function init() {
    try {
      const savedLocale = localStorage.getItem(LOCALE_KEY);
      if (savedLocale && SUPPORTED_LOCALES.includes(savedLocale)) currentLocale = savedLocale;
      const savedFont = localStorage.getItem(FONT_KEY);
      if (savedFont && ['sm', 'md', 'lg', 'xl'].includes(savedFont)) currentFontSize = savedFont;
    } catch { /* ignore */ }

    applyFontSize(currentFontSize);
    applyDom();
    applyWelcomeSteps();
    applySectionHeaders();
    applyPhaseBannerTitles();
    applyPathGuide();
    applyDeviceSubsections();
    applyGraduationChrome();

    document.querySelectorAll('.header-lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.dataset.locale && btn.dataset.locale !== currentLocale) {
          setLocale(btn.dataset.locale);
        }
      });
    });

    document.querySelectorAll('.pref-font-btn').forEach(btn => {
      btn.addEventListener('click', () => setFontSize(btn.dataset.size));
    });

    const toggle = document.getElementById('header-prefs-toggle');
    const panel = document.getElementById('header-prefs-panel');
    if (toggle && panel) {
      toggle.addEventListener('click', e => {
        e.stopPropagation();
        const open = panel.classList.toggle('hidden');
        toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
      });
      document.addEventListener('click', e => {
        if (!e.target.closest('.header-prefs')) {
          panel.classList.add('hidden');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && !panel.classList.contains('hidden')) {
          panel.classList.add('hidden');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    }
  }

  function refreshStaticChrome() {
    applyDom();
    applyWelcomeSteps();
    applySectionHeaders();
    applyPhaseBannerTitles();
    applyPathGuide();
    applyDeviceSubsections();
    applyGraduationChrome();
  }

  function getTerms() {
    if (typeof AI_TERMS === 'undefined') return [];
    if (currentLocale === DEFAULT_LOCALE) return AI_TERMS;
    const overlay = getData('terms') || [];
    const catMap = getData('termCategories') || {};
    return AI_TERMS.map((t, i) => {
      const o = overlay[i];
      const categoryLabel = mapCategoryLabel(t.category, catMap);
      return o
        ? { ...t, ...o, category: t.category, categoryLabel }
        : { ...t, categoryLabel: t.category };
    });
  }

  function getApps() {
    if (typeof APPS === 'undefined') return [];
    if (currentLocale === DEFAULT_LOCALE) return APPS;
    const overlay = getData('apps') || [];
    const catMap = getData('appCategories') || {};
    return APPS.map((app, i) => {
      const o = overlay[i] || {};
      return {
        ...app,
        ...o,
        category: app.category,
        categoryLabel: mapCategoryLabel(app.category, catMap) || o.category || app.category,
      };
    });
  }

  function getAppCategoryLabel(cat) {
    return mapCategoryLabel(cat, getData('appCategories'));
  }

  function getQuizData() {
    if (typeof QUIZ_DATA === 'undefined') return [];
    if (currentLocale === DEFAULT_LOCALE) return QUIZ_DATA;
    const overlay = getData('quiz') || [];
    return mergeIndexed(QUIZ_DATA, overlay);
  }

  function getAiOverviewSections() {
    if (typeof AI_OVERVIEW_SECTIONS === 'undefined') return [];
    if (currentLocale === DEFAULT_LOCALE) return AI_OVERVIEW_SECTIONS;
    const overlay = getData('aiOverview') || [];
    return mergeIndexed(AI_OVERVIEW_SECTIONS, overlay);
  }

  function getFundamentals() {
    if (typeof FUNDAMENTALS === 'undefined') return [];
    if (currentLocale === DEFAULT_LOCALE) return FUNDAMENTALS;
    const overlay = getData('fundamentals') || [];
    return mergeIndexed(FUNDAMENTALS, overlay);
  }

  function getFundamentalsFigcaption() {
    if (currentLocale === DEFAULT_LOCALE) {
      return '一图看懂：AI 从学习数据到理解你的问题并生成回答；下方模块默认展开，可点击标题折叠。';
    }
    return getData('fundamentalsFigcaption') || '';
  }

  function getFundamentalsFigAlt() {
    if (currentLocale === DEFAULT_LOCALE) {
      return 'AI 工作原理示意图：数据训练、Transformer 架构、大语言模型推理到生成回答，以及 AI 包含机器学习与深度学习的层级关系';
    }
    return getData('fundamentalsFigAlt') || '';
  }

  function getHandsOnCases() {
    if (typeof HANDS_ON_CASES === 'undefined') return [];
    if (currentLocale === DEFAULT_LOCALE) return HANDS_ON_CASES;
    return mergeIndexed(HANDS_ON_CASES, getData('handsOnCases') || []);
  }

  function getHandsOnCategoryLabel(cat) {
    return mapCategoryLabel(cat, getData('handsOnCategories'));
  }

  function getPractices() {
    if (typeof PRACTICES === 'undefined') return [];
    if (currentLocale === DEFAULT_LOCALE) return PRACTICES;
    return mergeIndexed(PRACTICES, getData('practices') || []);
  }

  function getPracticeCategoryLabel(cat) {
    return mapCategoryLabel(cat, getData('practiceCategories'));
  }

  function getPromptCases() {
    if (typeof PROMPT_CASES === 'undefined') return [];
    if (currentLocale === DEFAULT_LOCALE) return PROMPT_CASES;
    const overlay = getData('promptLab.cases') || [];
    return PROMPT_CASES.map(c => {
      const o = overlay.find(x => x.id === c.id);
      return o ? { ...c, ...o } : c;
    });
  }

  function getPromptTasks() {
    if (typeof PROMPT_TASKS === 'undefined') return {};
    if (currentLocale === DEFAULT_LOCALE) return PROMPT_TASKS;
    return { ...PROMPT_TASKS, ...(getData('promptLab.tasks') || {}) };
  }

  function getPromptTaskPresets() {
    if (typeof PROMPT_TASK_PRESETS === 'undefined') return {};
    if (currentLocale === DEFAULT_LOCALE) return PROMPT_TASK_PRESETS;
    const overlay = getData('promptLab.presets') || {};
    const out = { ...PROMPT_TASK_PRESETS };
    Object.keys(overlay).forEach(key => {
      out[key] = { ...PROMPT_TASK_PRESETS[key], ...overlay[key] };
    });
    return out;
  }

  function getPromptTools() {
    if (typeof PROMPT_TOOLS === 'undefined') return {};
    if (currentLocale === DEFAULT_LOCALE) return PROMPT_TOOLS;
    return { ...PROMPT_TOOLS, ...(getData('promptLab.tools') || {}) };
  }

  function getPromptTaskLabel(taskKey) {
    if (currentLocale === DEFAULT_LOCALE) return taskKey;
    return getData('promptLab.taskLabels')?.[taskKey] || taskKey;
  }

  function getPromptToneLabel(toneKey) {
    if (currentLocale === DEFAULT_LOCALE) return toneKey;
    return getData('promptLab.tones')?.[toneKey] || toneKey;
  }

  function getPromptLabUi() {
    return getData('promptLab.ui') || {};
  }

  function getMonetizeMeta() {
    if (typeof AI_MONETIZE_META === 'undefined') return {};
    if (currentLocale === DEFAULT_LOCALE) return AI_MONETIZE_META;
    const overlay = getData('monetize.meta') || {};
    return { ...AI_MONETIZE_META, ...overlay };
  }

  function getMonetizeCategoryLabel(cat) {
    return mapCategoryLabel(cat, getData('monetize.categories'));
  }

  function getMonetizeProjects() {
    if (typeof AI_MONETIZE_PROJECTS === 'undefined') return [];
    if (currentLocale === DEFAULT_LOCALE) return AI_MONETIZE_PROJECTS;
    const overlay = getData('monetize.projects') || [];
    const catMap = getData('monetize.categories') || {};
    const diffMap = getData('monetize.ui.difficulty') || {};
    return AI_MONETIZE_PROJECTS.map((p, i) => {
      const o = overlay[i] || {};
      return {
        ...p,
        ...o,
        category: p.category,
        categoryLabel: mapCategoryLabel(p.category, catMap) || o.category || p.category,
        difficultyLabel: diffMap[p.difficulty] || o.difficulty || p.difficulty,
      };
    });
  }

  function getMonetizeUi() {
    return getData('monetize.ui') || {};
  }

  function getCoachSections() {
    const overlay = getData('coachSections');
    if (!overlay || currentLocale === DEFAULT_LOCALE) return null;
    const teacher = getTeacherName();
    return overlay.map(s => ({
      id: s.id,
      msg: name => interpolate(s.msgTemplate, { name, teacher }),
    }));
  }

  function getPhaseCoachHints() {
    const overlay = getData('phaseCoachHints');
    if (!overlay || currentLocale === DEFAULT_LOCALE) return null;
    return Object.fromEntries(
      Object.entries(overlay).map(([id, template]) => [
        id,
        name => interpolate(template, { name, teacher: getTeacherName() }),
      ])
    );
  }

  function getDayCompleteMessages() {
    return getData('dayCompleteMessages') || null;
  }

  function getPersonalizationNamed() {
    return getData('personalizationNamed') || null;
  }

  function getBrandName() {
    return t('brand.name') || 'BestWayToLearn.AI';
  }

  function getBrandLogoHtml() {
    return t('brand.logoHtml') || 'BestWayToLearn<em>.AI</em>';
  }

  function getSiteUrl() {
    return t('brand.url') || 'https://bestwaytolearn.ai/';
  }

  function getSiteDomain() {
    return t('brand.domain') || 'bestwaytolearn.ai';
  }

  return {
    registerLocale,
    mergeLocaleData,
    t,
    getData,
    getTeacherName,
    getDefaultUserName,
    getNavLabels,
    getPhaseTabLabel,
    getPhaseTabModules,
    getPhaseTabNext,
    getPhaseShortLabels,
    getDefaultPersonalization,
    localizePhases,
    localizePathDay,
    localizeDeviceMeta,
    localizeAiBoxesMeta,
    localizeNeedOptions,
    localizeOsCompare,
    localizeStorageTiers,
    localizeMemoryTiers,
    localizeGpuTiers,
    localizeAiBox,
    localizePreset,
    getDeviceFieldLabels,
    getDeviceSubsections,
    getResolvedPhaseTabConfig,
    getGraduationModules,
    getCoachQuickNav,
    getSiteNavEntries,
    getToolsNavMeta,
    getToolsNavCategoryLabel,
    localizeToolsNavTool,
    getQuizTopicLinks,
    getQuizReviewLinks,
    getPracticePlanFocus,
    applyDeviceSubsections,
    applyGraduationChrome,
    getTermCategoryAll,
    getMonetizeCategoryAll,
    getLocale: () => currentLocale,
    getFontSize: () => currentFontSize,
    setLocale,
    setFontSize,
    onChange,
    init,
    refreshStaticChrome,
    applyWelcomeSteps,
    getTerms,
    getApps,
    getAppCategoryLabel,
    getQuizData,
    getAiOverviewSections,
    getFundamentals,
    getFundamentalsFigcaption,
    getFundamentalsFigAlt,
    getHandsOnCases,
    getHandsOnCategoryLabel,
    getPractices,
    getPracticeCategoryLabel,
    getPromptCases,
    getPromptTasks,
    getPromptTaskPresets,
    getPromptTools,
    getPromptTaskLabel,
    getPromptToneLabel,
    getPromptLabUi,
    getMonetizeMeta,
    getMonetizeCategoryLabel,
    getMonetizeProjects,
    getMonetizeUi,
    getCoachSections,
    getPhaseCoachHints,
    getDayCompleteMessages,
    getPersonalizationNamed,
    getBrandName,
    getBrandLogoHtml,
    getSiteUrl,
    getSiteDomain,
    applySiteMeta,
    interpolate,
  };
})();