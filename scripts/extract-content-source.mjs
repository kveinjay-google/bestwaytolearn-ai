#!/usr/bin/env node
/** Extract zh-CN content channel source data as JSON on stdout. */
import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const JS = path.join(ROOT, 'public/js');

function load(file, exportsExpr) {
  const ctx = {};
  vm.createContext(ctx);
  const code = fs.readFileSync(path.join(JS, file), 'utf8');
  vm.runInContext(`${code}\n;${exportsExpr}`, ctx);
  return ctx.__out;
}

const skills = load('ai-skills-nav.js', 'this.__out = { meta: AI_SKILLS_NAV_META, categories: AI_SKILLS_NAV_CATEGORIES, items: AI_SKILLS_NAV_ITEMS };');
const mcpCtx = load('ai-mcp-nav.js', 'this.__out = { meta: AI_MCP_NAV_META, categories: AI_MCP_NAV_CATEGORIES, items: AI_MCP_NAV_ITEMS, enrichment: AI_MCP_NAV_ENRICHMENT };');
const prompts = load('prompt-examples.js', 'this.__out = { categories: PROMPT_EXAMPLE_CATEGORIES, items: PROMPT_EXAMPLES };');
const briefing = load('ai-briefing.js', 'this.__out = { meta: AI_BRIEFING_META, categories: AI_BRIEFING_CATEGORIES, items: AI_BRIEFING_ITEMS };');
const tutorials = load('latest-tutorials.js', 'this.__out = { meta: LATEST_TUTORIAL_META, categories: LATEST_TUTORIAL_CATEGORIES, items: LATEST_TUTORIAL_ITEMS };');

const mcpItems = (mcpCtx.items || []).map((item) => {
  const extra = mcpCtx.enrichment?.[item.name] || {};
  return { ...item, ...extra };
});

function cleanItems(items) {
  return (items || []).filter((it) => it && (it.id || it.name));
}

const out = {
  skills: { ...skills, items: cleanItems(skills.items) },
  mcp: { meta: mcpCtx.meta, categories: mcpCtx.categories, items: cleanItems(mcpItems) },
  prompts: { ...prompts, items: cleanItems(prompts.items) },
  briefing: { ...briefing, items: cleanItems(briefing.items) },
  tutorials: { ...tutorials, items: cleanItems(tutorials.items) },
};

process.stdout.write(JSON.stringify(out, null, 0));