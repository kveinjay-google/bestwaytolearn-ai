#!/usr/bin/env node
import fs from 'fs';
import vm from 'vm';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const LOCALES = path.join(ROOT, 'public/js/locales');

function flat(obj, p = '') {
  const o = {};
  for (const [k, v] of Object.entries(obj || {})) {
    const key = p ? `${p}.${k}` : k;
    if (typeof v === 'string') o[key] = v;
    else if (v && typeof v === 'object' && !Array.isArray(v)) Object.assign(o, flat(v, key));
  }
  return o;
}

const bundles = {};
function deepMerge(t = {}, s = {}) {
  const o = { ...t };
  for (const [k, v] of Object.entries(s)) {
    if (k.startsWith('__')) continue;
    if (v && typeof v === 'object' && !Array.isArray(v) && t[k] && typeof t[k] === 'object' && !Array.isArray(t[k])) o[k] = deepMerge(t[k], v);
    else if (v !== undefined) o[k] = v;
  }
  return o;
}

const I18n = {
  registerLocale(c, b) {
    const e = bundles[c] || { strings: {}, data: {} };
    const { strings, data, ...rest } = b || {};
    bundles[c] = {
      strings: strings ? deepMerge(e.strings, strings) : e.strings,
      data: data ? deepMerge(e.data, data) : deepMerge(e.data, rest),
    };
  },
  mergeLocaleData(l, d) {
    const e = bundles[l] || { strings: {}, data: {} };
    const { strings, ...rest } = d || {};
    bundles[l] = {
      strings: strings ? deepMerge(e.strings, strings) : e.strings,
      data: deepMerge(e.data, rest),
    };
  },
  getRawBundleData(l) {
    return bundles[l]?.data ? JSON.parse(JSON.stringify(bundles[l].data)) : null;
  },
};

const LOAD_ORDER = [
  'zh-CN.js', 'zh-TW.js', 'en.js', 'en-terms.js', 'en-quiz.js', 'en-curriculum.js',
  'en-tools.js', 'en-devices.js', 'en-chrome.js',
  'zh-CN-chrome.js', 'zh-TW-chrome.js', 'ko-chrome.js', 'ja-chrome.js',
  'fr-chrome.js', 'es-chrome.js', 'de-chrome.js',
  'en-tools-nav.js', 'en-skills-nav.js', 'en-mcp-nav.js',
  'ko.js', 'ja.js', 'fr.js', 'es.js', 'de.js', 'inherit-locales.js',
];
for (const f of LOAD_ORDER) vm.runInNewContext(fs.readFileSync(path.join(LOCALES, f), 'utf8'), { I18n });

const refs = new Set();
const html = fs.readFileSync(path.join(ROOT, 'public/index.html'), 'utf8');
let m;
const re = /data-i18n(?:-html|-placeholder|-title|-aria)?="([^"]+)"/g;
while ((m = re.exec(html))) refs.add(m[1]);
const tre = /(?:I18n\.t|uiT)\(\s*['"`]([^'"`]+)['"`]/g;
for (const f of fs.readdirSync(path.join(ROOT, 'public/js')).filter(x => x.endsWith('.js'))) {
  const c = fs.readFileSync(path.join(ROOT, 'public/js', f), 'utf8');
  while ((m = tre.exec(c))) refs.add(m[1]);
}

const cn = flat(bundles['zh-CN'].strings);
const en = flat(bundles.en.strings);
const enFb = [];
const missing = [];
for (const k of [...refs].sort()) {
  if (!(k in cn)) {
    if (k in en) enFb.push(k);
    else missing.push(k);
  }
}

const ns = {};
for (const k of enFb) {
  const n = k.split('.')[0];
  ns[n] = (ns[n] || 0) + 1;
}

console.log('EN-FALLBACK REFERENCED KEYS BY NAMESPACE (zh-CN):');
console.log(Object.entries(ns).sort((a, b) => b[1] - a[1]).map(([n, c]) => `${n}: ${c}`).join('\n'));
console.log('\nALL 88 KEYS:', enFb.join('\n'));
console.log('\nMISSING 9:', missing.join('\n'));