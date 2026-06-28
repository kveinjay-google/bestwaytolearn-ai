#!/usr/bin/env node
/** Build en-prompt-examples.js overlay from zh source via Google Translate */
import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const require = createRequire(import.meta.url);

function loadPromptExamples() {
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(
    fs.readFileSync(path.join(ROOT, 'public/js/prompt-examples.js'), 'utf8') + '\nctx.out={PROMPT_EXAMPLES,PROMPT_EXAMPLE_CATEGORIES};',
    ctx
  );
  return ctx.out;
}

const SKIP = new Set(['id', 'category', 'software', 'emoji', 'difficulty', 'tags']);
const CAT_MAP = {
  '全部': 'All',
  '对话助手': 'Chat assistants',
  '编程开发': 'Coding & development',
  '图像创作': 'Image creation',
  '视频音频': 'Video & audio',
  '办公效率': 'Office productivity',
  'Agent 自动化': 'Agent automation',
  '搜索研究': 'Search & research',
};
const DIFF_MAP = { '入门': 'Beginner', '进阶': 'Intermediate' };

async function main() {
  const { spawnSync } = await import('child_process');
  spawnSync('pip3', ['install', '-q', 'deep-translator'], { stdio: 'ignore' });
  const py = spawnSync('python3', [path.join(__dirname, 'build-en-prompt-examples.py')], {
    stdio: 'inherit',
    cwd: ROOT,
  });
  if (py.status !== 0) process.exit(py.status || 1);
  return;
}

async function mainNodeUnused() {
  const { GoogleTranslator } = await import('deep-translator');
  const gt = new GoogleTranslator({ source: 'zh-CN', target: 'en' });
  const cache = new Map();
  const tr = async (text) => {
    if (!text || !/[\u4e00-\u9fff]/.test(text)) return text;
    if (cache.has(text)) return cache.get(text);
    await new Promise((r) => setTimeout(r, 120));
    const out = await gt.translate(text);
    cache.set(text, out);
    return out;
  };

  const { PROMPT_EXAMPLES, PROMPT_EXAMPLE_CATEGORIES } = loadPromptExamples();
  const ui = {
    countShown: 'Showing {visible} / {total}',
    emptyHint: 'No examples in this category. Try another tag.',
    structureLabel: 'Prompt structure',
    scenarioLabel: 'When to use',
    tipsLabel: 'Tips',
    copyLabel: 'Copy prompt',
    frameworkHint: 'Structured prompts use Role → Task → Context → Format → Constraints (RTFC). Replace [placeholders] with your details.',
  };

  const examples = [];
  for (const item of PROMPT_EXAMPLES) {
    const o = { id: item.id };
    for (const [k, v] of Object.entries(item)) {
      if (SKIP.has(k) || k === 'id') continue;
      if (k === 'structure' && Array.isArray(v)) {
        o.structure = await Promise.all(v.map((s) => tr(s)));
      } else if (typeof v === 'string') {
        o[k] = await tr(v);
      } else {
        o[k] = v;
      }
    }
    if (DIFF_MAP[item.difficulty]) o.difficulty = DIFF_MAP[item.difficulty];
    examples.push(o);
    console.log('  translated', item.id);
  }

  const categories = {};
  for (const c of PROMPT_EXAMPLE_CATEGORIES) {
    if (c === '全部') categories[c] = 'All';
    else categories[c] = CAT_MAP[c] || (await tr(c));
  }

  const payload = { promptExampleCategories: categories, promptExamplesUi: ui, promptExamples: examples };
  const outPath = path.join(ROOT, 'public/js/locales/en-prompt-examples.js');
  const body = `(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('en', ${JSON.stringify(payload, null, 2)});
})();\n`;
  fs.writeFileSync(outPath, body);
  console.log('wrote', outPath);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});