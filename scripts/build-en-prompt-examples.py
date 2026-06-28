#!/usr/bin/env python3
"""Build public/js/locales/en-prompt-examples.js from zh prompt-examples.js source."""
from __future__ import annotations

import json
import re
import subprocess
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

CAT = {
    "全部": "All",
    "对话助手": "Chat assistants",
    "编程开发": "Coding & development",
    "图像创作": "Image creation",
    "视频音频": "Video & audio",
    "办公效率": "Office productivity",
    "Agent 自动化": "Agent automation",
    "搜索研究": "Search & research",
}
DIFF = {"入门": "Beginner", "进阶": "Intermediate"}
SKIP = {"id", "category", "software", "emoji", "tags"}


def load_examples() -> tuple[list, list]:
    node = r"""
const fs = require('fs');
const vm = require('vm');
const ctx = { PROMPT_EXAMPLES: null, PROMPT_EXAMPLE_CATEGORIES: null };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(process.argv[1], 'utf8') + `
;(function(g){ g.PROMPT_EXAMPLES=PROMPT_EXAMPLES; g.PROMPT_EXAMPLE_CATEGORIES=PROMPT_EXAMPLE_CATEGORIES; })(this);
`, ctx);
console.log(JSON.stringify({ examples: ctx.PROMPT_EXAMPLES, categories: ctx.PROMPT_EXAMPLE_CATEGORIES }));
"""
    out = subprocess.check_output(
        ["node", "-e", node, str(ROOT / "public/js/prompt-examples.js")],
        text=True,
    )
    data = json.loads(out)
    return data["examples"], data["categories"]


def init_translator():
    try:
        from deep_translator import GoogleTranslator
    except ImportError:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "-q", "deep-translator"])
        from deep_translator import GoogleTranslator
    return GoogleTranslator(source="zh-CN", target="en")


def main():
    gt = init_translator()
    cache: dict[str, str] = {}
    items, categories = load_examples()

    def tr(text: str) -> str:
        if not text or not re.search(r"[\u4e00-\u9fff]", text):
            return text
        if text in cache:
            return cache[text]
        for attempt in range(4):
            try:
                result = gt.translate(text)
                cache[text] = result
                time.sleep(0.12)
                return result
            except Exception:
                time.sleep(2 ** attempt)
        return text

    out_items = []
    for i, item in enumerate(items):
        o = {"id": item["id"]}
        for k, v in item.items():
            if k in SKIP or k == "id":
                continue
            if k == "difficulty":
                o[k] = DIFF.get(v, v)
            elif k == "structure" and isinstance(v, list):
                o[k] = [tr(x) for x in v]
            elif isinstance(v, str):
                o[k] = tr(v)
            else:
                o[k] = v
        out_items.append(o)
        print(f"  {i + 1}/{len(items)} {item['id']}", flush=True)

    payload = {
        "promptExampleCategories": {c: CAT.get(c, tr(c)) for c in categories},
        "promptExamplesUi": {
            "countShown": "Showing {visible} / {total}",
            "emptyHint": "No examples in this category. Try another tag.",
            "structureLabel": "Prompt structure",
            "scenarioLabel": "When to use",
            "tipsLabel": "Tips",
            "copyLabel": "Copy prompt",
            "frameworkHint": "Use Role → Task → Context → Format → Constraints (RTFC). Replace [placeholders] with your details.",
        },
        "promptExamples": out_items,
    }
    out_path = ROOT / "public/js/locales/en-prompt-examples.js"
    body = (
        "(function () {\n"
        "  if (typeof I18n === 'undefined') return;\n"
        f"  I18n.mergeLocaleData('en', {json.dumps(payload, ensure_ascii=False, indent=2)});\n"
        "})();\n"
    )
    out_path.write_text(body, encoding="utf-8")
    print(f"wrote {out_path} ({len(out_items)} examples)", flush=True)


if __name__ == "__main__":
    main()