#!/usr/bin/env python3
"""Sort AI_BRIEFING_ITEMS and LATEST_TUTORIAL_ITEMS by date descending."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def parse_top_level_objects(array_body: str) -> list[str]:
    """Parse only array elements that begin with `id:` (skip nested step objects)."""
    items = []
    for m in re.finditer(r"^[\s]*\{\n    id:", array_body, re.MULTILINE):
        start = m.start() + m.group(0).index("{")
        depth = 0
        for j in range(start, len(array_body)):
            ch = array_body[j]
            if ch == "{":
                depth += 1
            elif ch == "}":
                depth -= 1
                if depth == 0:
                    chunk = array_body[m.start() : j + 1].strip().rstrip(",")
                    items.append(chunk)
                    break
        else:
            raise SystemExit("unclosed top-level object in array")
    return items


def item_date(block: str) -> str:
    m = re.search(r"date:\s*['\"]([^'\"]+)['\"]", block)
    if not m:
        raise SystemExit(f"date not found in block starting: {block[:80]}")
    return m.group(1)


def sort_array_in_file(js_path: Path, array_name: str) -> None:
    text = js_path.read_text(encoding="utf-8")
    m = re.search(rf"(const {array_name} = \[)([\s\S]*?)(\n\];)", text)
    if not m:
        raise SystemExit(f"{array_name} not found in {js_path}")
    items = parse_top_level_objects(m.group(2))
    items.sort(key=item_date, reverse=True)
    merged = ",\n".join(items)
    new_text = text[: m.start(2)] + "\n" + merged + "\n" + text[m.end(2) :]
    js_path.write_text(new_text, encoding="utf-8")
    print(f"{js_path.name}/{array_name}: sorted {len(items)} items, newest={item_date(items[0])}")


def main():
    sort_array_in_file(ROOT / "public/js/ai-briefing.js", "AI_BRIEFING_ITEMS")
    sort_array_in_file(ROOT / "public/js/latest-tutorials.js", "LATEST_TUTORIAL_ITEMS")


if __name__ == "__main__":
    main()