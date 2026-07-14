#!/usr/bin/env python3
"""Rebuild briefing & tutorial arrays: regenerate batch + merge originals, sort by date."""
import importlib.util
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SCRIPTS = Path(__file__).resolve().parent

ORIGINAL_BRIEFING_IDS = {
    "2026-07-02-openai-responses-api",
    "2026-07-02-anthropic-sonnet-speed",
    "2026-07-01-qwen3-32b",
    "2026-07-01-google-gemini-live",
    "2026-06-30-mcp-registry",
    "2026-06-30-cn-genai-label",
    "2026-06-29-deepseek-r2-rumor",
    "2026-06-29-sora-public",
    "2026-06-28-agent-benchmark",
    "2026-06-28-meta-llama4-scout",
}

ORIGINAL_TUTORIAL_IDS = {
    "2026-07-04-cursor-web-calculator",
    "2026-07-04-cursor-local-matting",
    "2026-07-02-cursor-plan-mode",
    "2026-07-02-claude-projects-briefing",
    "2026-07-01-gemini-deep-research",
    "2026-07-01-n8n-ai-newsletter",
    "2026-06-30-midjourney-style-ref",
    "2026-06-30-dify-knowledge-bot",
    "2026-06-29-chatgpt-custom-gpt-tutorial",
    "2026-06-29-openclaw-daily-digest",
}


def load_module(name: str, filename: str):
    spec = importlib.util.spec_from_file_location(name, SCRIPTS / filename)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def extract_block_by_id(text: str, oid: str) -> str | None:
    marker = f"id: '{oid}'"
    pos = text.find(marker)
    if pos == -1:
        return None
    start = text.rfind("{", 0, pos)
    depth = 0
    for i in range(start, len(text)):
        ch = text[i]
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                return text[start : i + 1]
    return None


def extract_original_items(js_path: Path, keep_ids: set) -> list[str]:
    """Extract hand-authored items (single-quoted ids) from a JS data file."""
    text = js_path.read_text(encoding="utf-8")
    kept = []
    for oid in sorted(keep_ids):
        block = extract_block_by_id(text, oid)
        if not block:
            raise SystemExit(f"missing original item {oid} in {js_path.name}")
        kept.append(block.strip().rstrip(","))
    return kept


def sort_key_from_block(block: str) -> str:
    m = re.search(r"date:\s*['\"]([^'\"]+)['\"]", block)
    return m.group(1) if m else ""


def rebuild_file(js_path: Path, array_name: str, new_blocks: list[str], original_blocks: list[str]) -> None:
    combined = new_blocks + original_blocks
    combined.sort(key=sort_key_from_block, reverse=True)
    body = ",\n".join(combined)
    text = js_path.read_text(encoding="utf-8")
    text = re.sub(
        rf"const {array_name} = \[[\s\S]*?\n\];",
        f"const {array_name} = [\n{body}\n];",
        text,
        count=1,
    )
    js_path.write_text(text, encoding="utf-8")


def main():
    subprocess.run([sys.executable, str(SCRIPTS / "generate-content-data.py")], check=True)

    gen = load_module("generate_content_data", "generate-content-data.py")
    merge_mod = load_module("merge_content_batch", "merge-content-batch.py")

    briefing = [gen.mk_briefing(*t) for t in gen.BRIEFING_TOPICS]
    tutorials = [gen.mk_tutorial(*t) for t in gen.TUTORIAL_TOPICS]

    new_briefing_blocks = [merge_mod.briefing_item_to_js(i) for i in briefing]
    new_tutorial_blocks = [merge_mod.tutorial_item_to_js(i) for i in tutorials]

    orig_briefing = extract_original_items(ROOT / "public/js/ai-briefing.js", ORIGINAL_BRIEFING_IDS)
    orig_tutorials = extract_original_items(ROOT / "public/js/latest-tutorials.js", ORIGINAL_TUTORIAL_IDS)

    rebuild_file(ROOT / "public/js/ai-briefing.js", "AI_BRIEFING_ITEMS", new_briefing_blocks, orig_briefing)
    rebuild_file(ROOT / "public/js/latest-tutorials.js", "LATEST_TUTORIAL_ITEMS", new_tutorial_blocks, orig_tutorials)

    for name, var in [("ai-briefing.js", "AI_BRIEFING_ITEMS"), ("latest-tutorials.js", "LATEST_TUTORIAL_ITEMS")]:
        t = (ROOT / "public/js" / name).read_text()
        m = re.search(rf"const {var} = \[([\s\S]*?)\n\];", t)
        n = len(re.findall(r"^\s+id:", m.group(1), re.MULTILINE))
        first = re.search(r"date:\s*['\"]([^'\"]+)['\"]", m.group(1))
        print(f"{name}: {n} items, newest={first.group(1) if first else '?'}")


if __name__ == "__main__":
    main()