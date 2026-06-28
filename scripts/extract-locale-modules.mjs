#!/usr/bin/env node
/**
 * Extract per-module locale overlay payloads from en-*.js and zh-CN sources.
 */
import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const LOCALES = path.join(ROOT, 'public/js/locales');
const OUT = path.join(__dirname, 'locale-modules');

function deepMerge(target = {}, source = {}) {
  const out = { ...target };
  Object.entries(source).forEach(([key, value]) => {
    if (key.startsWith('__')) return;
    if (value && typeof value === 'object' && !Array.isArray(value)
      && target[key] && typeof target[key] === 'object' && !Array.isArray(target[key])) {
      out[key] = deepMerge(target[key], value);
    } else if (value !== undefined) {
      out[key] = value;
    }
  });
  return out;
}

function storeBundle(bundles, code, bundle) {
  const existing = bundles[code] || { strings: {}, data: {} };
  const { strings, data, ...rest } = bundle || {};
  bundles[code] = {
    strings: strings ? deepMerge(existing.strings, strings) : existing.strings,
    data: data ? deepMerge(existing.data, data) : deepMerge(existing.data, rest),
  };
}

function loadEnModule(file) {
  const bundles = {};
  const ctx = {
    I18n: {
      registerLocale(code, bundle) { storeBundle(bundles, code, bundle); },
      mergeLocaleData(code, data) {
        const existing = bundles[code] || { strings: {}, data: {} };
        const { strings, ...rest } = data || {};
        bundles[code] = {
          strings: strings ? deepMerge(existing.strings, strings) : existing.strings,
          data: deepMerge(existing.data, rest),
        };
      },
    },
  };
  vm.runInContext(fs.readFileSync(path.join(LOCALES, file), 'utf8'), vm.createContext(ctx));
  return bundles.en || { strings: {}, data: {} };
}

function loadZhSource() {
  const code = [
    fs.readFileSync(path.join(ROOT, 'public/js/data.js'), 'utf8'),
    fs.readFileSync(path.join(ROOT, 'public/js/terms.js'), 'utf8'),
    `module.exports = {
      AI_TERMS, TERM_CATEGORIES, QUIZ_DATA, AI_OVERVIEW_SECTIONS, FUNDAMENTALS,
      APPS, APP_CATEGORIES, HANDS_ON_CASES, HANDS_ON_CATEGORIES, PRACTICES, PRACTICE_CATEGORIES,
      PROMPT_CASES, PROMPT_TASKS, PROMPT_TASK_PRESETS, PROMPT_TOOLS,
      AI_MONETIZE_META, AI_MONETIZE_PROJECTS, AI_MONETIZE_CATEGORIES,
      DEVICE_OS_COMPARE, DEVICE_MEMORY_TIERS, DEVICE_GPU_TIERS, DEVICE_STORAGE_TIERS,
      DEVICE_AI_BOXES, DEVICE_PRESETS, LEARNING_PHASES, LEARNING_PATH,
      DEVICE_GUIDE_META, DEVICE_AI_BOXES_META, DEVICE_NEED_OPTIONS,
    };`,
  ].join('\n');
  const tmp = path.join(ROOT, 'scripts/.tmp-zh-source.cjs');
  fs.writeFileSync(tmp, code);
  const mod = require(tmp);
  fs.unlinkSync(tmp);
  return {
    AI_TERMS: mod.AI_TERMS,
    TERM_CATEGORIES: mod.TERM_CATEGORIES,
    QUIZ_DATA: mod.QUIZ_DATA,
    AI_OVERVIEW_SECTIONS: mod.AI_OVERVIEW_SECTIONS,
    FUNDAMENTALS: mod.FUNDAMENTALS,
    APPS: mod.APPS,
    APP_CATEGORIES: mod.APP_CATEGORIES,
    HANDS_ON_CASES: mod.HANDS_ON_CASES,
    HANDS_ON_CATEGORIES: mod.HANDS_ON_CATEGORIES,
    PRACTICES: mod.PRACTICES,
    PRACTICE_CATEGORIES: mod.PRACTICE_CATEGORIES,
    PROMPT_CASES: mod.PROMPT_CASES,
    PROMPT_TASKS: mod.PROMPT_TASKS,
    PROMPT_TASK_PRESETS: mod.PROMPT_TASK_PRESETS,
    PROMPT_TOOLS: mod.PROMPT_TOOLS,
    AI_MONETIZE_META: mod.AI_MONETIZE_META,
    AI_MONETIZE_PROJECTS: mod.AI_MONETIZE_PROJECTS,
    AI_MONETIZE_CATEGORIES: mod.AI_MONETIZE_CATEGORIES,
    DEVICE_OS_COMPARE: mod.DEVICE_OS_COMPARE,
    DEVICE_MEMORY_TIERS: mod.DEVICE_MEMORY_TIERS,
    DEVICE_GPU_TIERS: mod.DEVICE_GPU_TIERS,
    DEVICE_STORAGE_TIERS: mod.DEVICE_STORAGE_TIERS,
    DEVICE_AI_BOXES: mod.DEVICE_AI_BOXES,
    DEVICE_PRESETS: mod.DEVICE_PRESETS,
    LEARNING_PHASES: mod.LEARNING_PHASES,
    LEARNING_PATH: mod.LEARNING_PATH,
    DEVICE_GUIDE_META: mod.DEVICE_GUIDE_META,
    DEVICE_AI_BOXES_META: mod.DEVICE_AI_BOXES_META,
    DEVICE_NEED_OPTIONS: mod.DEVICE_NEED_OPTIONS,
  };
}

const MODULE_FILES = {
  'en-base': 'en.js',
  terms: 'en-terms.js',
  quiz: 'en-quiz.js',
  curriculum: 'en-curriculum.js',
  tools: 'en-tools.js',
  devices: 'en-devices.js',
  'tools-nav': 'en-tools-nav.js',
  'skills-nav': 'en-skills-nav.js',
  'mcp-nav': 'en-mcp-nav.js',
};

fs.mkdirSync(OUT, { recursive: true });

for (const [name, file] of Object.entries(MODULE_FILES)) {
  const mod = loadEnModule(file);
  fs.writeFileSync(path.join(OUT, `en.${name}.json`), JSON.stringify(mod, null, 2));
  console.log('wrote', `en.${name}.json`, Object.keys(mod.data || {}).length, 'data keys');
}

const zh = loadZhSource();
fs.writeFileSync(path.join(OUT, 'zh-CN.source.json'), JSON.stringify(zh, null, 2));
console.log('wrote zh-CN.source.json');