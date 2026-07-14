#!/usr/bin/env python3
"""Merge prompt-examples-batch.json into PROMPT_EXAMPLES array only."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
JS = ROOT / "public/js/prompt-examples.js"
BATCH = Path(__file__).resolve().parent / "data/prompt-examples-batch.json"


def js_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def item_to_js(item: dict) -> str:
    structure = ", ".join(js_str(x) for x in item["structure"])
    tags = ", ".join(js_str(t) for t in item["tags"])
    return f"""  {{
    id: {js_str(item['id'])},
    category: {js_str(item['category'])},
    software: {js_str(item['software'])},
    emoji: {js_str(item['emoji'])},
    difficulty: {js_str(item['difficulty'])},
    title: {js_str(item['title'])},
    scenario: {js_str(item['scenario'])},
    structure: [{structure}],
    prompt: {js_str(item['prompt'])},
    tips: {js_str(item['tips'])},
    tags: [{tags}],
  }}"""


def count_prompt_items(text: str) -> int:
    m = re.search(r"const PROMPT_EXAMPLES = \[([\s\S]*?)\n\];", text)
    if not m:
        return 0
    return len(re.findall(r"^\s+id:", m.group(1), re.MULTILINE))


def main():
    batch = json.loads(BATCH.read_text(encoding="utf-8"))
    text = JS.read_text(encoding="utf-8")
    m = re.search(r"(const PROMPT_EXAMPLES = \[)([\s\S]*?)(\n\];)", text)
    if not m:
        raise SystemExit("PROMPT_EXAMPLES array not found")

    body = m.group(2)
    existing_ids = set(re.findall(r"id:\s*['\"]([^'\"]+)['\"]", body))
    new_items = [i for i in batch if i["id"] not in existing_ids]
    if not new_items:
        print("No new prompt items")
        return

    block = ",\n".join(item_to_js(i) for i in new_items)
    merged = body.rstrip() + f",\n\n  /* ── 2026-07 扩充 ── */\n{block}\n"
    new_text = text[: m.start(2)] + merged + text[m.end(2) :]
    JS.write_text(new_text, encoding="utf-8")
    print(f"Added {len(new_items)} prompts → {count_prompt_items(new_text)} total")


if __name__ == "__main__":
    main()