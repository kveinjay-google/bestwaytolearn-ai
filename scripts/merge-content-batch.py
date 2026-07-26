#!/usr/bin/env python3
"""Merge batch content JSON into ai-briefing.js and latest-tutorials.js."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BRIEFING_JS = ROOT / "public/js/ai-briefing.js"
TUTORIALS_JS = ROOT / "public/js/latest-tutorials.js"
BRIEFING_JSON = Path(__file__).resolve().parent / "data/ai-briefing-batch.json"
TUTORIALS_JSON = Path(__file__).resolve().parent / "data/latest-tutorials-batch.json"


def js_string(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def briefing_item_to_js(item: dict) -> str:
    body = ",\n      ".join(js_string(p) for p in item["body"])
    highlights = ",\n      ".join(js_string(h) for h in item["highlights"])
    tags = ", ".join(js_string(t) for t in item["tags"])
    return f"""  {{
    id: {js_string(item['id'])},
    date: {js_string(item['date'])},
    category: {js_string(item['category'])},
    title: {js_string(item['title'])},
    summary: {js_string(item['summary'])},
    source: {js_string(item['source'])},
    url: {js_string(item['url'])},
    tags: [{tags}],
    body: [
      {body},
    ],
    highlights: [
      {highlights},
    ],
  }}"""


def tutorial_item_to_js(item: dict) -> str:
    steps = ",\n      ".join(js_string(s) for s in item["steps"])
    lines = [
        "  {",
        f"    id: {js_string(item['id'])},",
        f"    date: {js_string(item['date'])},",
        f"    category: {js_string(item['category'])},",
        f"    software: {js_string(item['software'])},",
        f"    emoji: {js_string(item['emoji'])},",
        f"    url: {js_string(item['url'])},",
        f"    difficulty: {js_string(item['difficulty'])},",
        f"    duration: {js_string(item['duration'])},",
    ]
    if item.get("illustrated"):
        lines.append("    illustrated: true,")
    lines.extend([
        f"    title: {js_string(item['title'])},",
        f"    desc: {js_string(item['desc'])},",
        f"    steps: [\n      {steps},\n    ],",
        f"    prompt: {js_string(item['prompt'])},",
        f"    result: {js_string(item['result'])},",
        f"    tips: {js_string(item['tips'])},",
        "  }",
    ])
    return "\n".join(lines)


def merge_items(js_path: Path, array_name: str, new_items: list, to_js) -> int:
    text = js_path.read_text(encoding="utf-8")
    pattern = rf"(const {array_name} = \[)([\s\S]*?)(\n\];)"
    m = re.search(pattern, text)
    if not m:
        raise SystemExit(f"Cannot find {array_name} in {js_path}")

    existing = m.group(2).strip()
    existing_ids = set(re.findall(r"id:\s*['\"]([^'\"]+)['\"]", existing))
    deduped = [i for i in new_items if i["id"] not in existing_ids]
    if not deduped:
        print(f"No new items for {array_name}")
        return 0

    new_block = ",\n".join(to_js(i) for i in deduped)
    if existing:
        merged_body = f"\n{new_block},\n{existing}\n"
    else:
        merged_body = f"\n{new_block}\n"

    new_text = text[: m.start(2)] + merged_body + text[m.end(2) :]
    js_path.write_text(new_text, encoding="utf-8")
    return len(deduped)


def count_items(js_path: Path, array_name: str) -> int:
    text = js_path.read_text(encoding="utf-8")
    m = re.search(rf"const {array_name} = \[([\s\S]*?)\n\];", text)
    if not m:
        return 0
    return len(re.findall(r"^\s+id:", m.group(1), re.MULTILINE))


def main():
    briefing = json.loads(BRIEFING_JSON.read_text(encoding="utf-8"))
    tutorials = json.loads(TUTORIALS_JSON.read_text(encoding="utf-8"))

    b_added = merge_items(BRIEFING_JS, "AI_BRIEFING_ITEMS", briefing, briefing_item_to_js)
    t_added = merge_items(TUTORIALS_JS, "LATEST_TUTORIAL_ITEMS", tutorials, tutorial_item_to_js)

    b_total = count_items(BRIEFING_JS, "AI_BRIEFING_ITEMS")
    t_total = count_items(TUTORIALS_JS, "LATEST_TUTORIAL_ITEMS")

    print(f"Briefing: +{b_added} -> {b_total} total")
    print(f"Tutorials: +{t_added} -> {t_total} total")


if __name__ == "__main__":
    main()