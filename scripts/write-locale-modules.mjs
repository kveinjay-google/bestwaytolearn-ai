#!/usr/bin/env node
/**
 * Write public/js/locales/{locale}-*.js from translated module JSON.
 */
import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const MODULES = path.join(__dirname, 'locale-modules');
const LOCALES_DIR = path.join(ROOT, 'public/js/locales');

const LOCALE_FILES = {
  'en-base': (locale) => `${locale}.js`,
  terms: (locale) => `${locale}-terms.js`,
  quiz: (locale) => `${locale}-quiz.js`,
  curriculum: (locale) => `${locale}-curriculum.js`,
  tools: (locale) => `${locale}-tools.js`,
  devices: (locale) => `${locale}-devices.js`,
  'tools-nav': (locale) => `${locale}-tools-nav.js`,
  'skills-nav': (locale) => `${locale}-skills-nav.js`,
  'mcp-nav': (locale) => `${locale}-mcp-nav.js`,
};

const TARGET_LOCALES = ['zh-TW', 'ko', 'ja', 'fr', 'es', 'de'];

function jsString(s) {
  return JSON.stringify(s);
}

function renderValue(v, indent) {
  if (typeof v === 'string') return jsString(v);
  if (typeof v === 'boolean') return v ? 'true' : 'false';
  if (v === null) return 'null';
  if (typeof v === 'number') return String(v);
  if (Array.isArray(v)) {
    if (!v.length) return '[]';
    const pad = ' '.repeat(indent);
    const inner = ' '.repeat(indent + 2);
    return `[\n${v.map((item) => `${inner}${renderValue(item, indent + 2)}`).join(',\n')}\n${pad}]`;
  }
  if (typeof v === 'object') {
    const entries = Object.entries(v);
    if (!entries.length) return '{}';
    const pad = ' '.repeat(indent);
    const inner = ' '.repeat(indent + 2);
    const lines = entries.map(([k, val]) => {
      const key = /^[A-Za-z_$][\w$]*$/.test(k) && !k.includes('-') ? k : jsString(k);
      return `${inner}${key}: ${renderValue(val, indent + 2)}`;
    });
    return `{\n${lines.join(',\n')}\n${pad}}`;
  }
  return jsString(String(v));
}

function loadExistingLocaleStrings(locale) {
  const p = path.join(LOCALES_DIR, `${locale}.js`);
  if (!fs.existsSync(p)) return null;
  const bundles = {};
  const ctx = {
    I18n: {
      registerLocale(code, bundle) { bundles[code] = bundle; },
    },
  };
  vm.runInContext(fs.readFileSync(p, 'utf8'), vm.createContext(ctx));
  return bundles[locale]?.strings || null;
}

function writeModule(locale, moduleName, payload) {
  const fileName = LOCALE_FILES[moduleName](locale);
  const outPath = path.join(LOCALES_DIR, fileName);

  const parts = [];
  if (moduleName === 'en-base') {
    const strings = (payload.strings && Object.keys(payload.strings).length)
      ? payload.strings
      : loadExistingLocaleStrings(locale);
    if (strings && Object.keys(strings).length) {
      parts.push(`strings: ${renderValue(strings, 4)}`);
    }
    if (payload.data && Object.keys(payload.data).length) {
      parts.push(`data: ${renderValue(payload.data, 4)}`);
    }
  } else {
    const bodyObj = { ...payload.data };
    if (payload.strings && Object.keys(payload.strings).length) {
      bodyObj.strings = payload.strings;
    }
    const rendered = renderValue(bodyObj, 4);
    parts.push(rendered.slice(1, -1).trim());
  }

  const body = parts.join(',\n    ');
  const useRegister = moduleName === 'en-base';
  const fn = useRegister ? 'registerLocale' : 'mergeLocaleData';
  const header = useRegister
    ? `I18n.${fn}('${locale}', {\n    `
    : `(function () {\n  if (typeof I18n === 'undefined') return;\n  I18n.${fn}('${locale}', {\n    `;
  const footer = useRegister ? '\n});\n' : '\n  });\n})();\n';

  const comment = moduleName === 'en-base'
    ? ''
    : `/* ${locale.toUpperCase()} overlays — ${moduleName} */\n`;

  fs.writeFileSync(outPath, `${comment}${header}${body}${footer}`, 'utf8');
  console.log('wrote', fileName);
}

function main() {
  const only = process.argv.slice(2);
  const locales = only.length ? only : TARGET_LOCALES;
  for (const locale of locales) {
    const dir = path.join(MODULES, locale);
    if (!fs.existsSync(dir)) {
      console.warn('missing dir', dir);
      continue;
    }
    for (const moduleName of Object.keys(LOCALE_FILES)) {
      const jsonPath = path.join(dir, `${moduleName}.json`);
      if (!fs.existsSync(jsonPath)) continue;
      const payload = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
      writeModule(locale, moduleName, payload);
    }
  }
}

main();