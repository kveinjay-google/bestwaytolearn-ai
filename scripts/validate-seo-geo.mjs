import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const publicDir = path.join(root, 'public');
const siteUrl = 'https://www.bestwaytolearn.ai/';
const requiredLocales = ['zh-CN', 'zh-TW', 'en', 'de', 'es', 'fr', 'ja', 'ko', 'x-default'];
const failures = [];

function read(rel) {
  const file = path.join(publicDir, rel);
  if (!fs.existsSync(file)) {
    failures.push(`Missing ${rel}`);
    return '';
  }
  return fs.readFileSync(file, 'utf8');
}

function expectIncludes(label, haystack, needle) {
  if (!haystack.includes(needle)) failures.push(`${label} missing ${needle}`);
}

const index = read('index.html');
expectIncludes('index canonical', index, `<link rel="canonical" href="${siteUrl}">`);
expectIncludes('index og:url', index, `<meta property="og:url" content="${siteUrl}">`);
expectIncludes('index og:image', index, 'https://www.bestwaytolearn.ai/assets/icons/pwa-icon-512.png');
expectIncludes('index llms link', index, 'href="https://www.bestwaytolearn.ai/llms.txt"');
for (const locale of requiredLocales) {
  expectIncludes('index hreflang', index, `hreflang="${locale}"`);
}
expectIncludes('index JSON-LD', index, '"@type": "FAQPage"');
expectIncludes('index JSON-LD', index, '"@type": "LearningResource"');
expectIncludes('index JSON-LD', index, '"about": [');

const robots = read('robots.txt');
expectIncludes('robots sitemap', robots, 'Sitemap: https://www.bestwaytolearn.ai/sitemap.xml');
expectIncludes('robots llms', robots, 'LLM guide: https://www.bestwaytolearn.ai/llms.txt');
expectIncludes('robots api disallow', robots, 'Disallow: /api/');

const sitemap = read('sitemap.xml');
expectIncludes('sitemap loc', sitemap, '<loc>https://www.bestwaytolearn.ai/</loc>');
for (const locale of requiredLocales) {
  expectIncludes('sitemap hreflang', sitemap, `hreflang="${locale}" href="https://www.bestwaytolearn.ai/"`);
}

const notFound = read('404.html');
expectIncludes('404 noindex', notFound, 'noindex');
expectIncludes('404 link', notFound, siteUrl);

const llms = read('llms.txt');
expectIncludes('llms title', llms, '# BestWayToLearn.AI');
expectIncludes('llms summary', llms, 'four-phase AI learning');
expectIncludes('llms canonical', llms, siteUrl);
expectIncludes('llms overview', llms, 'https://www.bestwaytolearn.ai/ai-overview.html');
expectIncludes('llms full', llms, 'https://www.bestwaytolearn.ai/llms-full.txt');

const llmsFull = read('llms-full.txt');
expectIncludes('llms-full title', llmsFull, '# BestWayToLearn.AI — Extended LLM Guide');
expectIncludes('llms-full google', llmsFull, 'Google sign-in');

const aiOverview = read('ai-overview.html');
expectIncludes('ai overview title', aiOverview, '<title>BestWayToLearn.AI AI Overview');
expectIncludes('ai overview canonical', aiOverview, '<link rel="canonical" href="https://www.bestwaytolearn.ai/ai-overview.html">');
expectIncludes('ai overview content', aiOverview, 'Cognition, Tools, Practice, Review');
expectIncludes('ai overview content', aiOverview, '100 AI terms');

if (failures.length) {
  console.error(`SEO/GEO validation failed (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('SEO/GEO validation passed');
