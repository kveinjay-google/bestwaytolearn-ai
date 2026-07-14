import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const index = readFileSync(join(root, 'public/index.html'), 'utf8');
const locales = ['zh-CN', 'zh-TW', 'en', 'ko', 'ja', 'fr', 'es', 'de'];

const failures = [];

[
  'seoFaq.tag',
  'seoFaq.title',
  'seoFaq.desc',
  'seoFaq.q1',
  'seoFaq.a1',
  'seoFaq.q2',
  'seoFaq.a2',
  'seoFaq.q3',
  'seoFaq.a3',
  'seoFaq.q4',
  'seoFaq.a4',
  'seoFaq.q5',
  'seoFaq.a5',
].forEach(key => {
  if (!index.includes(`data-i18n="${key}"`)) {
    failures.push(`index.html missing data-i18n="${key}"`);
  }
});

locales.forEach(locale => {
  const file = readFileSync(join(root, `public/js/locales/${locale}.js`), 'utf8');
  if (!/\bseoFaq\s*:/.test(file)) {
    failures.push(`${locale}.js missing seoFaq strings`);
    return;
  }
  ['tag', 'title', 'desc', 'q1', 'a1', 'q2', 'a2', 'q3', 'a3', 'q4', 'a4', 'q5', 'a5'].forEach(key => {
    if (!new RegExp(`\\b${key}\\s*:`).test(file)) {
      failures.push(`${locale}.js missing seoFaq.${key}`);
    }
  });
});

const jsonLdBlocks = [...index.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
const faqLanguages = new Set();
jsonLdBlocks.forEach(([, raw]) => {
  try {
    const parsed = JSON.parse(raw.trim());
    const graph = Array.isArray(parsed['@graph']) ? parsed['@graph'] : [parsed];
    graph
      .filter(node => node && node['@type'] === 'FAQPage')
      .forEach(node => {
        if (typeof node.inLanguage === 'string') faqLanguages.add(node.inLanguage);
      });
  } catch (error) {
    failures.push(`invalid JSON-LD: ${error.message}`);
  }
});

locales.forEach(locale => {
  if (!faqLanguages.has(locale)) {
    failures.push(`JSON-LD missing FAQPage for ${locale}`);
  }
});

if (failures.length) {
  console.error('FAQ i18n validation failed:');
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('FAQ i18n validation passed.');
