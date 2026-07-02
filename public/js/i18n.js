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
  const SUPPORTED_LOCALES = ['zh-CN', 'zh-TW', 'en', 'ko', 'ja', 'fr', 'es', 'de'];

  const LOCALE_META = {
    'zh-CN': { flag: '🇨🇳', nativeName: '简体中文', htmlLang: 'zh-CN', dateLocale: 'zh-CN' },
    'zh-TW': { flag: '❤️', nativeName: '繁體中文', htmlLang: 'zh-TW', dateLocale: 'zh-TW' },
    en: { flag: '🇺🇸', nativeName: 'English', htmlLang: 'en', dateLocale: 'en-US' },
    ko: { flag: '🇰🇷', nativeName: '한국어', htmlLang: 'ko', dateLocale: 'ko-KR' },
    ja: { flag: '🇯🇵', nativeName: '日本語', htmlLang: 'ja', dateLocale: 'ja-JP' },
    fr: { flag: '🇫🇷', nativeName: 'Français', htmlLang: 'fr', dateLocale: 'fr-FR' },
    es: { flag: '🇪🇸', nativeName: 'Español', htmlLang: 'es', dateLocale: 'es-ES' },
    de: { flag: '🇩🇪', nativeName: 'Deutsch', htmlLang: 'de', dateLocale: 'de-DE' },
  };

  const LOCALE_FALLBACK = {
    'zh-TW': 'zh-CN',
    ko: 'en',
    ja: 'en',
    fr: 'en',
    es: 'en',
    de: 'en',
  };

  const LOCALE_ALIASES = {
    zh: 'zh-CN', 'zh-hans': 'zh-CN', 'zh-cn': 'zh-CN', 'zh-sg': 'zh-CN',
    'zh-tw': 'zh-TW', 'zh-hk': 'zh-TW', 'zh-mo': 'zh-TW', 'zh-hant': 'zh-TW',
    en: 'en', 'en-us': 'en', 'en-gb': 'en', 'en-au': 'en',
    ko: 'ko', 'ko-kr': 'ko',
    ja: 'ja', 'ja-jp': 'ja',
    fr: 'fr', 'fr-fr': 'fr', 'fr-ca': 'fr',
    es: 'es', 'es-es': 'es', 'es-mx': 'es',
    de: 'de', 'de-de': 'de', 'de-at': 'de', 'de-ch': 'de',
  };

  const bundles = {};
  let currentLocale = DEFAULT_LOCALE;
  let currentFontSize = DEFAULT_FONT;
  const listeners = new Set();

  function registerLocale(code, bundle) {
    const existing = bundles[code] || { strings: {}, data: {} };
    const { strings, data, ...rest } = bundle || {};
    bundles[code] = {
      strings: strings ? deepMerge(existing.strings || {}, strings) : (existing.strings || {}),
      data: data ? deepMerge(existing.data || {}, data) : deepMerge(existing.data || {}, rest),
    };
  }

  function isChineseLocale(locale = currentLocale) {
    return locale === 'zh-CN' || locale === 'zh-TW';
  }

  /** Only zh-CN reads course content from data.js / terms.js (Simplified Chinese source). */
  function usesChineseSourceContent(locale = currentLocale) {
    return locale === 'zh-CN';
  }

  function usesEnglishContent(locale = currentLocale) {
    return !isChineseLocale(locale);
  }

  function getLocaleMeta(locale = currentLocale) {
    return LOCALE_META[locale] || LOCALE_META[DEFAULT_LOCALE];
  }

  function getLocaleChain(locale = currentLocale) {
    const chain = [];
    let cur = locale;
    const seen = new Set();
    while (cur && !seen.has(cur)) {
      seen.add(cur);
      chain.push(cur);
      cur = LOCALE_FALLBACK[cur];
    }
    return chain;
  }

  function getRawBundleData(locale) {
    const data = bundles[locale]?.data;
    return data ? JSON.parse(JSON.stringify(data)) : null;
  }

  function detectBrowserLocale() {
    const langs = navigator.languages?.length
      ? navigator.languages
      : [navigator.language || DEFAULT_LOCALE];
    for (const raw of langs) {
      const norm = String(raw).toLowerCase().replace(/_/g, '-');
      if (LOCALE_ALIASES[norm]) return LOCALE_ALIASES[norm];
      const primary = norm.split('-')[0];
      if (LOCALE_ALIASES[primary]) return LOCALE_ALIASES[primary];
      const hit = SUPPORTED_LOCALES.find(code => norm === code.toLowerCase() || norm.startsWith(`${code.toLowerCase()}-`));
      if (hit) return hit;
    }
    return DEFAULT_LOCALE;
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
    promptToneLabelToKey = null;
  }

  function interpolate(template, vars = {}) {
    if (typeof template !== 'string') return template;
    return Object.entries(vars).reduce(
      (out, [k, v]) => out.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v ?? '')),
      template
    );
  }

  function mapCategoryLabel(cat, map) {
    if (!cat || usesChineseSourceContent()) return cat;
    return map?.[cat] || cat;
  }

  function mergeIndexed(base = [], overlay = []) {
    return base.map((item, i) => (overlay[i] ? { ...item, ...overlay[i] } : item));
  }

  function getBundle(locale = currentLocale) {
    const chain = getLocaleChain(locale);
    let strings = {};
    let data = {};
    chain.slice().reverse().forEach(code => {
      const bundle = bundles[code];
      if (!bundle) return;
      if (bundle.data) data = deepMerge(bundle.data, data);
      if (bundle.strings) strings = deepMerge(bundle.strings, strings);
    });
    return { strings, data };
  }

  function resolve(obj, path) {
    return path.split('.').reduce((acc, key) => (acc && acc[key] != null ? acc[key] : undefined), obj);
  }

  function t(key, vars = {}) {
    let str;
    const chain = [...new Set([...getLocaleChain(), 'en', DEFAULT_LOCALE])];
    for (const locale of chain) {
      str = resolve(bundles[locale]?.strings, key);
      if (typeof str === 'string') break;
    }
    if (typeof str !== 'string') return key;
    return interpolate(str, vars);
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

  const NAV_TAB_ALIASES = {
    map: ['home'],
    aiToolsNav: ['toolsNav'],
    aiSkillsNav: ['skillsRecommend'],
    aiMcpNav: ['mcpNav'],
  };

  function getNavLabels() {
    const { strings, data } = getBundle();
    const out = { ...(strings?.nav || {}), ...(data?.nav || {}) };
    Object.entries(NAV_TAB_ALIASES).forEach(([tabId, alts]) => {
      if (out[tabId]) return;
      for (const alt of alts) {
        if (out[alt]) {
          out[tabId] = out[alt];
          break;
        }
      }
    });
    return out;
  }

  function getPhaseTabConfig() {
    const overlay = getBundle().data?.phaseTabs || {};
    if (usesChineseSourceContent()) return PHASE_TAB_CONFIG || overlay;
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
    return { 1: '认知', 2: '工具', 3: '实战', 4: '检验' };
  }

  function getDefaultPersonalization() {
    return getBundle().data?.personalization || {};
  }

  function localizePhases() {
    if (usesChineseSourceContent()) return LEARNING_PHASES;
    const map = getBundle().data?.learningPhases || {};
    return LEARNING_PHASES.map(p => ({ ...p, ...(map[p.id] || {}) }));
  }

  function localizePathDay(day, index) {
    if (usesChineseSourceContent()) return day;
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
    if (usesChineseSourceContent()) return DEVICE_GUIDE_META;
    return { ...DEVICE_GUIDE_META, ...(getBundle().data?.deviceGuideMeta || {}) };
  }

  function localizeAiBoxesMeta() {
    if (usesChineseSourceContent()) return DEVICE_AI_BOXES_META;
    return { ...DEVICE_AI_BOXES_META, ...(getBundle().data?.deviceAiBoxesMeta || {}) };
  }

  function localizeNeedOptions() {
    if (usesChineseSourceContent()) return DEVICE_NEED_OPTIONS;
    const map = getBundle().data?.deviceNeedOptions || {};
    return DEVICE_NEED_OPTIONS.map(n => ({ ...n, ...(map[n.id] || {}) }));
  }

  function localizeOsCompare(key) {
    const base = DEVICE_OS_COMPARE[key];
    if (!base || usesChineseSourceContent()) return base;
    const overlay = getBundle().data?.deviceOsCompare?.[key] || {};
    return {
      ...base,
      ...overlay,
      chooseWhen: overlay.chooseWhen || base.chooseWhen,
      avoidWhen: overlay.avoidWhen || base.avoidWhen,
    };
  }

  function localizeStorageTiers() {
    if (usesChineseSourceContent()) return DEVICE_STORAGE_TIERS;
    const overlays = getBundle().data?.deviceStorageTiers || [];
    return DEVICE_STORAGE_TIERS.map((s, i) => ({ ...s, ...(overlays[i] || {}) }));
  }

  function localizeAiBox(box, index) {
    if (usesChineseSourceContent()) return box;
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
    if (usesChineseSourceContent()) return preset;
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
    if (usesChineseSourceContent()) return DEVICE_MEMORY_TIERS;
    const overlays = getData('deviceMemoryTiers') || [];
    return DEVICE_MEMORY_TIERS.map((s, i) => ({ ...s, ...(overlays[i] || {}) }));
  }

  function localizeGpuTiers() {
    if (typeof DEVICE_GPU_TIERS === 'undefined') return [];
    if (usesChineseSourceContent()) return DEVICE_GPU_TIERS;
    const overlays = getData('deviceGpuTiers') || [];
    return DEVICE_GPU_TIERS.map((g, i) => ({ ...g, ...(overlays[i] || {}) }));
  }

  function getDeviceFieldLabels() {
    if (usesChineseSourceContent()) return null;
    return getData('deviceFieldLabels') || null;
  }

  function getDeviceSubsections() {
    return getData('deviceSubsections') || null;
  }

  function getResolvedPhaseTabConfig(tabId) {
    const base = typeof PHASE_TAB_CONFIG !== 'undefined' ? PHASE_TAB_CONFIG[tabId] : null;
    if (!base || usesChineseSourceContent()) return base;
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
    if (usesChineseSourceContent() && typeof GRADUATION_MODULES !== 'undefined') {
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
    if (usesChineseSourceContent() && typeof AI_TOOLS_NAV_META !== 'undefined') {
      return AI_TOOLS_NAV_META;
    }
    return getData('toolsNav')?.meta || (typeof AI_TOOLS_NAV_META !== 'undefined' ? AI_TOOLS_NAV_META : {});
  }

  function getToolsNavCategoryLabel(cat) {
    return mapCategoryLabel(cat, getData('toolsNav')?.categories);
  }

  function localizeToolsNavTool(tool) {
    if (!tool || usesChineseSourceContent()) return tool;
    const overlay = getData('toolsNav')?.tools?.[tool.name];
    if (!overlay) return tool;
    return { ...tool, name: overlay.name || tool.name, desc: overlay.desc || tool.desc };
  }

  function getSkillsNavMeta() {
    if (usesChineseSourceContent() && typeof AI_SKILLS_NAV_META !== 'undefined') {
      return AI_SKILLS_NAV_META;
    }
    return getData('skillsNav')?.meta || (typeof AI_SKILLS_NAV_META !== 'undefined' ? AI_SKILLS_NAV_META : {});
  }

  function getSkillsNavCategoryLabel(cat) {
    return mapCategoryLabel(cat, getData('skillsNav')?.categories);
  }

  function getSkillsNavAgentLabel(agent) {
    return mapCategoryLabel(agent, getData('skillsNav')?.agents) || agent;
  }

  function localizeSkillsNavItem(item) {
    if (!item || usesChineseSourceContent()) return item;
    const overlay = getData('skillsNav')?.items?.[item.name];
    if (!overlay) return item;
    return {
      ...item,
      name: overlay.name || item.name,
      desc: overlay.desc || item.desc,
      installNote: overlay.installNote || item.installNote,
    };
  }

  function getMcpNavMeta() {
    if (usesChineseSourceContent() && typeof AI_MCP_NAV_META !== 'undefined') {
      return AI_MCP_NAV_META;
    }
    return getData('mcpNav')?.meta || (typeof AI_MCP_NAV_META !== 'undefined' ? AI_MCP_NAV_META : {});
  }

  function getMcpNavCategoryLabel(cat) {
    return mapCategoryLabel(cat, getData('mcpNav')?.categories);
  }

  function getMcpNavClientLabel(client) {
    return mapCategoryLabel(client, getData('mcpNav')?.clients) || client;
  }

  function getMcpNavTransportLabel(transport) {
    return mapCategoryLabel(transport, getData('mcpNav')?.transports) || transport;
  }

  function getMcpNavSourceLabel(source) {
    const sources = getData('mcpNav')?.sources;
    if (sources && sources[source]) return sources[source];
    return source;
  }

  function localizeMcpNavItem(item) {
    if (!item || usesChineseSourceContent()) return item;
    const overlay = getData('mcpNav')?.items?.[item.name];
    if (!overlay) return item;
    return {
      ...item,
      name: overlay.name || item.name,
      desc: overlay.desc || item.desc,
      configNote: overlay.configNote || item.configNote,
      features: overlay.features || item.features,
    };
  }

  function getQuizTopicLinks() {
    if (usesChineseSourceContent()) return null;
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
    if (devicesSection && usesEnglishContent()) {
      const tag = devicesSection.querySelector('.section-tag');
      const h2 = devicesSection.querySelector('.section-header h2');
      if (tag) tag.textContent = t('devices.sectionTag');
      if (h2) h2.textContent = t('devices.sectionTitle');
    }
  }

  function applyGraduationChrome() {
    if (usesChineseSourceContent()) return;
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
    if (gradTitle && usesEnglishContent()) {
      gradTitle.textContent = t('graduation.title', { name: getDefaultUserName() });
    }
    if (gradDesc && usesEnglishContent()) gradDesc.textContent = t('graduation.desc');
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
    document.documentElement.lang = getLocaleMeta().htmlLang;
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
      const partial = t('notice.partial');
      const noticeText = partial !== 'notice.partial' ? partial : '';
      notice.classList.toggle('hidden', !noticeText);
      notice.textContent = noticeText;
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

  function getLocaleLabel(locale) {
    const keyMap = {
      'zh-CN': 'settings.langZh',
      'zh-TW': 'settings.langZhTW',
      en: 'settings.langEn',
      ko: 'settings.langKo',
      ja: 'settings.langJa',
      fr: 'settings.langFr',
      es: 'settings.langEs',
      de: 'settings.langDe',
    };
    const key = keyMap[locale];
    if (key) {
      const fromStrings = t(key);
      if (fromStrings !== key) return fromStrings;
    }
    return LOCALE_META[locale]?.nativeName || locale;
  }

  function closeLangMenu() {
    const menu = document.getElementById('header-lang-menu');
    const trigger = document.getElementById('header-lang-trigger');
    if (!menu || !trigger) return;
    menu.classList.add('hidden');
    trigger.setAttribute('aria-expanded', 'false');
  }

  function buildLangMenu() {
    const menu = document.getElementById('header-lang-menu');
    if (!menu) return;
    menu.innerHTML = SUPPORTED_LOCALES.map(locale => {
      const meta = LOCALE_META[locale];
      const active = locale === currentLocale;
      return `<li role="presentation">
        <button type="button" class="header-lang-option${active ? ' active' : ''}" role="option" data-locale="${locale}" aria-selected="${active ? 'true' : 'false'}">
          <span class="header-lang-flag" aria-hidden="true">${meta.flag}</span>
          <span class="header-lang-option-label">${getLocaleLabel(locale)}</span>
        </button>
      </li>`;
    }).join('');
    menu.querySelectorAll('.header-lang-option').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.dataset.locale && btn.dataset.locale !== currentLocale) {
          setLocale(btn.dataset.locale);
        }
        closeLangMenu();
      });
    });
  }

  function syncLangMenu() {
    const meta = getLocaleMeta();
    const flag = document.getElementById('header-lang-current-flag');
    const label = document.getElementById('header-lang-current-label');
    const trigger = document.getElementById('header-lang-trigger');
    if (flag) flag.textContent = meta.flag;
    if (label) label.textContent = getLocaleLabel(currentLocale);
    if (trigger) {
      trigger.title = getLocaleLabel(currentLocale);
      trigger.setAttribute('aria-label', `${t('settings.chooseLanguage')}: ${getLocaleLabel(currentLocale)}`);
    }
    buildLangMenu();
  }

  function syncPrefsPanel() {
    syncLangMenu();
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
      if (savedLocale && SUPPORTED_LOCALES.includes(savedLocale)) {
        currentLocale = savedLocale;
      } else {
        currentLocale = detectBrowserLocale();
      }
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

    const langTrigger = document.getElementById('header-lang-trigger');
    const langMenu = document.getElementById('header-lang-menu');
    if (langTrigger && langMenu) {
      langTrigger.addEventListener('click', e => {
        e.stopPropagation();
        const open = langMenu.classList.toggle('hidden');
        langTrigger.setAttribute('aria-expanded', open ? 'false' : 'true');
      });
      document.addEventListener('click', e => {
        if (!e.target.closest('.header-lang')) closeLangMenu();
      });
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeLangMenu();
      });
    }

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
    if (usesChineseSourceContent()) return AI_TERMS;
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
    if (usesChineseSourceContent()) return APPS;
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
    if (usesChineseSourceContent()) return QUIZ_DATA;
    const overlay = getData('quiz') || [];
    return mergeIndexed(QUIZ_DATA, overlay);
  }

  function getAiOverviewSections() {
    if (typeof AI_OVERVIEW_SECTIONS === 'undefined') return [];
    if (usesChineseSourceContent()) return AI_OVERVIEW_SECTIONS;
    const overlay = getData('aiOverview') || [];
    return mergeIndexed(AI_OVERVIEW_SECTIONS, overlay);
  }

  function getFundamentals() {
    if (typeof FUNDAMENTALS === 'undefined') return [];
    if (usesChineseSourceContent()) return FUNDAMENTALS;
    const overlay = getData('fundamentals') || [];
    return mergeIndexed(FUNDAMENTALS, overlay);
  }

  function getFundamentalsFigcaption() {
    if (usesChineseSourceContent()) {
      return '一图看懂：AI 从学习数据到理解你的问题并生成回答；下方模块默认展开，可点击标题折叠。';
    }
    return getData('fundamentalsFigcaption') || '';
  }

  function getFundamentalsFigAlt() {
    if (usesChineseSourceContent()) {
      return 'AI 工作原理示意图：数据训练、Transformer 架构、大语言模型推理到生成回答，以及 AI 包含机器学习与深度学习的层级关系';
    }
    return getData('fundamentalsFigAlt') || '';
  }

  function getHandsOnCases() {
    if (typeof HANDS_ON_CASES === 'undefined') return [];
    if (usesChineseSourceContent()) return HANDS_ON_CASES;
    return mergeIndexed(HANDS_ON_CASES, getData('handsOnCases') || []);
  }

  function getHandsOnCategoryLabel(cat) {
    return mapCategoryLabel(cat, getData('handsOnCategories'));
  }

  function getPractices() {
    if (typeof PRACTICES === 'undefined') return [];
    if (usesChineseSourceContent()) return PRACTICES;
    return mergeIndexed(PRACTICES, getData('practices') || []);
  }

  function getPracticeCategoryLabel(cat) {
    return mapCategoryLabel(cat, getData('practiceCategories'));
  }

  const PROMPT_TONE_KEYS = ['专业严谨', '通俗易懂', '创意发散', '简洁直接'];
  const PROMPT_TONE_TRADITIONAL = {
    '專業嚴謹': '专业严谨',
    '創意發散': '创意发散',
  };

  const PROMPT_LAB_UI_DEFAULTS = {
    casesLabel: '实战案例',
    selectCaseStart: '选择案例开始',
    copyPrompt: '复制提示词',
    configTitle: '提示词配置',
    taskType: '任务类型',
    role: '角色设定',
    rolePlaceholder: '例：资深产品经理',
    context: '背景信息',
    contextPlaceholder: '描述具体场景、受众、约束…',
    output: '期望输出',
    outputPlaceholder: '例：一份 500 字 PRD 大纲',
    tone: '语气风格',
    generateSimulate: '生成并模拟',
    chatTitle: '提示词与回复 · 同屏模拟',
    resetSim: '重新模拟',
    simEmptyTitle: '尚未开始模拟',
    simEmptyDesc: '点击上方案例，或编辑左侧配置后点「生成并模拟」。提示词、AI 回复与操作引导都在此窗口展示。',
    guideTitle: '模拟完成 · 去真实环境操作',
    guideToolsLabel: '推荐工具：',
    followupPlaceholder: '继续追问，如「请更简洁」…',
    send: '发送',
    disclaimer: '本地预置演示，帮助理解提示词结构。真实效果请复制提示词到推荐工具验证。',
    tryFollowup: '试试追问：',
    taskPrefix: '任务：',
    casePrefix: '案例：',
    customScene: '自定义场景',
    defaultRole: '资深专家',
    defaultContext: '[请补充具体背景]',
    defaultOutput: '[请描述期望输出]',
    userLabel: '你',
    aiLabel: 'AI 助手',
    systemLabel: '系统',
    buildPrompt: {
      roleHeader: '# 角色',
      rolePrefix: '你是一位',
      taskHeader: '# 任务',
      contextHeader: '# 背景信息',
      outputHeader: '# 期望输出',
      requirementsHeader: '# 要求',
      toneLine: '- 语气风格：',
      clarifyLine: '- 信息不足时先列出需确认的 2-3 个关键问题',
      structureLine: '- 输出结构清晰，使用标题和列表',
      uncertainLine: '- 不确定的内容明确标注，不要编造事实',
    },
    defaultGuideSteps: [
      '点击工具栏「复制提示词」',
      '打开 ChatGPT 或通义千问，新建对话',
      '粘贴提示词并发送，将背景替换为你的真实场景',
      '根据回复迭代：「更简洁」「换成表格」「补充数据」',
    ],
    stepPrefix: '第',
    stepSuffix: ' 步',
    simError: '模拟出错，请刷新页面后重试。若仍失败，请强制刷新（Cmd+Shift+R）清除缓存。',
    caseDataError: '案例数据未加载，请强制刷新页面（Cmd+Shift+R）。',
    copyPromptLabel: '复制提示词',
  };

  let promptToneLabelToKey = null;

  function buildPromptToneLabelToKey() {
    if (promptToneLabelToKey) return promptToneLabelToKey;
    const map = { ...PROMPT_TONE_TRADITIONAL };
    SUPPORTED_LOCALES.forEach(code => {
      const tones = bundles[code]?.data?.promptLab?.tones;
      if (!tones) return;
      Object.entries(tones).forEach(([key, label]) => {
        if (typeof label === 'string') map[label] = key;
      });
    });
    promptToneLabelToKey = map;
    return map;
  }

  function normalizePromptToneKey(tone) {
    if (!tone || PROMPT_TONE_KEYS.includes(tone)) return tone;
    return buildPromptToneLabelToKey()[tone] || tone;
  }

  function getPromptCases() {
    if (typeof PROMPT_CASES === 'undefined') return [];
    if (usesChineseSourceContent()) return PROMPT_CASES;
    const overlay = getData('promptLab.cases') || [];
    return PROMPT_CASES.map(c => {
      const o = overlay.find(x => x.id === c.id);
      if (!o) return c;
      const merged = { ...c, ...o };
      if (o.tone != null) merged.tone = normalizePromptToneKey(o.tone);
      return merged;
    });
  }

  function getPromptTasks() {
    if (typeof PROMPT_TASKS === 'undefined') return {};
    if (usesChineseSourceContent()) return PROMPT_TASKS;
    return { ...PROMPT_TASKS, ...(getData('promptLab.tasks') || {}) };
  }

  function getPromptTaskPresets() {
    if (typeof PROMPT_TASK_PRESETS === 'undefined') return {};
    if (usesChineseSourceContent()) return PROMPT_TASK_PRESETS;
    const overlay = getData('promptLab.presets') || {};
    const out = { ...PROMPT_TASK_PRESETS };
    Object.keys(overlay).forEach(key => {
      out[key] = { ...PROMPT_TASK_PRESETS[key], ...overlay[key] };
      if (overlay[key]?.tone != null) {
        out[key].tone = normalizePromptToneKey(overlay[key].tone);
      }
    });
    return out;
  }

  function getPromptTools() {
    if (typeof PROMPT_TOOLS === 'undefined') return {};
    if (usesChineseSourceContent()) return PROMPT_TOOLS;
    return { ...PROMPT_TOOLS, ...(getData('promptLab.tools') || {}) };
  }

  function getPromptTaskLabel(taskKey) {
    if (usesChineseSourceContent()) return taskKey;
    return getData('promptLab.taskLabels')?.[taskKey] || taskKey;
  }

  function getPromptToneLabel(toneKey) {
    if (usesChineseSourceContent()) return toneKey;
    return getData('promptLab.tones')?.[toneKey] || toneKey;
  }

  function getPromptLabUi() {
    return deepMerge(PROMPT_LAB_UI_DEFAULTS, getData('promptLab.ui') || {});
  }

  function getHandsOnUi() {
    return getData('handsOnUi') || {};
  }

  function getPracticeUi() {
    return getData('practiceUi') || {};
  }

  function getPromptExamples() {
    if (typeof PROMPT_EXAMPLES === 'undefined') return [];
    if (usesChineseSourceContent()) return PROMPT_EXAMPLES;
    const overlay = getData('promptExamples') || [];
    const byId = Object.fromEntries(overlay.filter(o => o?.id).map(o => [o.id, o]));
    return PROMPT_EXAMPLES.map(item => (byId[item.id] ? { ...item, ...byId[item.id] } : item));
  }

  function getPromptExampleCategoryLabel(cat) {
    return mapCategoryLabel(cat, getData('promptExampleCategories'));
  }

  function getPromptExamplesUi() {
    return getData('promptExamplesUi') || {};
  }

  function getPromptSimulatedResponses() {
    if (usesChineseSourceContent()) return null;
    return getData('promptLab.simulatedResponses') || null;
  }

  function getPromptFollowupPatterns() {
    if (usesChineseSourceContent()) return null;
    return getData('promptLab.followupPatterns') || null;
  }

  function renderPromptTemplate(template, vars = {}) {
    if (typeof template !== 'string') return template;
    return Object.entries(vars).reduce(
      (out, [k, v]) => out.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v ?? '')),
      template
    );
  }

  function getMonetizeMeta() {
    if (typeof AI_MONETIZE_META === 'undefined') return {};
    if (usesChineseSourceContent()) return AI_MONETIZE_META;
    const overlay = getData('monetize.meta') || {};
    return { ...AI_MONETIZE_META, ...overlay };
  }

  function getMonetizeCategoryLabel(cat) {
    return mapCategoryLabel(cat, getData('monetize.categories'));
  }

  function getMonetizeProjects() {
    if (typeof AI_MONETIZE_PROJECTS === 'undefined') return [];
    if (usesChineseSourceContent()) return AI_MONETIZE_PROJECTS;
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
    if (!overlay || usesChineseSourceContent()) return null;
    const teacher = getTeacherName();
    return overlay.map(s => ({
      id: s.id,
      msg: name => interpolate(s.msgTemplate, { name, teacher }),
    }));
  }

  function getPhaseCoachHints() {
    const overlay = getData('phaseCoachHints');
    if (!overlay || usesChineseSourceContent()) return null;
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
    return t('brand.url') || 'https://www.bestwaytolearn.ai/';
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
    getSkillsNavMeta,
    getSkillsNavCategoryLabel,
    getSkillsNavAgentLabel,
    localizeSkillsNavItem,
    getMcpNavMeta,
    getMcpNavCategoryLabel,
    getMcpNavClientLabel,
    getMcpNavTransportLabel,
    getMcpNavSourceLabel,
    localizeMcpNavItem,
    getQuizTopicLinks,
    getQuizReviewLinks,
    getPracticePlanFocus,
    applyDeviceSubsections,
    applyGraduationChrome,
    getTermCategoryAll,
    getMonetizeCategoryAll,
    getLocale: () => currentLocale,
    getLocaleMeta,
    getLocaleLabel,
    getLocaleChain,
    getBundle,
    getRawBundleData,
    isChineseLocale,
    usesChineseSourceContent,
    usesEnglishContent,
    detectBrowserLocale,
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
    normalizePromptToneKey,
    getPromptLabUi,
    getHandsOnUi,
    getPracticeUi,
    getPromptExamples,
    getPromptExampleCategoryLabel,
    getPromptExamplesUi,
    getPromptSimulatedResponses,
    getPromptFollowupPatterns,
    renderPromptTemplate,
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