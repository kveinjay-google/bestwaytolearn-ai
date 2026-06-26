#!/usr/bin/env node
/** Export Chinese content structures for EN overlay generation */
import fs from 'fs';
import vm from 'vm';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function loadConsts(file, names) {
  const code = fs.readFileSync(path.join(root, file), 'utf8');
  const ctx = { module: {}, exports: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const out = {};
  for (const n of names) {
    if (ctx[n] === undefined) throw new Error(`Missing ${n} in ${file}`);
    out[n] = ctx[n];
  }
  return out;
}

const data = loadConsts('js/data.js', [
  'AI_OVERVIEW_SECTIONS', 'FUNDAMENTALS', 'APPS', 'APP_CATEGORIES',
  'HANDS_ON_CASES', 'HANDS_ON_CATEGORIES', 'PRACTICES', 'PRACTICE_CATEGORIES',
  'PROMPT_CASES', 'PROMPT_TASKS', 'PROMPT_TASK_PRESETS', 'AI_MONETIZE_META',
  'AI_MONETIZE_PROJECTS', 'AI_MONETIZE_CATEGORIES', 'DEVICE_OS_COMPARE',
  'DEVICE_MEMORY_TIERS', 'DEVICE_GPU_TIERS', 'DEVICE_STORAGE_TIERS',
  'DEVICE_AI_BOXES', 'DEVICE_PRESETS',
]);

const outDir = path.join(root, 'scripts/zh-export');
fs.mkdirSync(outDir, { recursive: true });
for (const [k, v] of Object.entries(data)) {
  fs.writeFileSync(path.join(outDir, `${k}.json`), JSON.stringify(v, null, 0));
}
console.log('Exported', Object.keys(data).length, 'structures to', outDir);