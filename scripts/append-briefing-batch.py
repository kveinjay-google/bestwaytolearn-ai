#!/usr/bin/env python3
"""Append new AI briefing items to scripts/data/ai-briefing-batch.json.

Used by the daily AI 简报 batch 收集器 cron. The agent does the web search
and LLM generation; this script does the file mechanics: backup, dedup by
id, sort by date desc, trim to a sliding window.

Usage:
    scripts/append-briefing-batch.py <new-items.json>

Where <new-items.json> is a JSON array of objects matching the batch
schema (id, date, category, title, summary, source, url, tags, body,
highlights). Items with an id already present in the existing batch are
silently dropped (id-dedup).

Output: prints a single-line summary suitable for the cron agent to
forward to the user; exits non-zero on fatal errors.
"""
from __future__ import annotations

import json
import shutil
import sys
from datetime import datetime, timedelta
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BATCH_FILE = ROOT / "scripts/data/ai-briefing-batch.json"
BACKUP_DIR = ROOT / "scripts/data/.backups"
WINDOW_DAYS = 60

REQUIRED_KEYS = {"id", "date", "category", "title", "summary", "source", "url", "tags", "body", "highlights"}


def fail(msg: str, code: int = 1) -> None:
    print(f"ERROR: {msg}", file=sys.stderr)
    sys.exit(code)


def validate_items(items: list) -> tuple[list[dict], list[str]]:
    """Drop malformed items, return (valid, errors)."""
    valid: list[dict] = []
    errors: list[str] = []
    for i, it in enumerate(items):
        if not isinstance(it, dict):
            errors.append(f"item[{i}]: not an object")
            continue
        missing = REQUIRED_KEYS - it.keys()
        if missing:
            errors.append(f"item[{i}] id={it.get('id','?')}: missing keys {sorted(missing)}")
            continue
        if not isinstance(it["tags"], list) or not isinstance(it["body"], list) or not isinstance(it["highlights"], list):
            errors.append(f"item[{i}] id={it.get('id','?')}: tags/body/highlights must be arrays")
            continue
        if not it["date"] or not it["id"] or not it["title"]:
            errors.append(f"item[{i}]: empty id/date/title")
            continue
        valid.append(it)
    return valid, errors


def main() -> None:
    if len(sys.argv) != 2:
        fail("usage: append-briefing-batch.py <new-items.json>")

    new_items_path = Path(sys.argv[1])
    if not new_items_path.exists():
        fail(f"file not found: {new_items_path}")

    try:
        raw = json.loads(new_items_path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as e:
        fail(f"invalid JSON in {new_items_path}: {e}")

    if not isinstance(raw, list):
        fail(f"{new_items_path} must contain a JSON array")

    new_items, validation_errors = validate_items(raw)
    if not new_items and validation_errors:
        fail("all items failed validation:\n  " + "\n  ".join(validation_errors))

    # Load existing batch
    if not BATCH_FILE.exists():
        fail(f"batch file not found: {BATCH_FILE}")
    existing = json.loads(BATCH_FILE.read_text(encoding="utf-8"))
    if not isinstance(existing, list):
        fail(f"{BATCH_FILE} is not a JSON array")

    # Backup
    BACKUP_DIR.mkdir(parents=True, exist_ok=True)
    backup_path = BACKUP_DIR / f"ai-briefing-batch.{datetime.now().strftime('%Y%m%d-%H%M%S')}.json"
    shutil.copy2(BATCH_FILE, backup_path)

    # Dedup by id, then merge
    existing_ids = {it["id"] for it in existing}
    added: list[str] = []
    duplicates: list[str] = []
    for it in new_items:
        if it["id"] in existing_ids:
            duplicates.append(it["id"])
            continue
        existing.append(it)
        existing_ids.add(it["id"])
        added.append(it["id"])

    # Sort by date desc (stable; preserves insertion order for same date)
    existing.sort(key=lambda x: x["date"], reverse=True)

    # Sliding window trim
    cutoff = (datetime.now() - timedelta(days=WINDOW_DAYS)).strftime("%Y-%m-%d")
    before_trim = len(existing)
    existing = [it for it in existing if it["date"] >= cutoff]
    trimmed = before_trim - len(existing)

    # Atomic write: write to .tmp then rename
    tmp_path = BATCH_FILE.with_suffix(".json.tmp")
    tmp_path.write_text(
        json.dumps(existing, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    tmp_path.replace(BATCH_FILE)

    # Report
    size_kb = BATCH_FILE.stat().st_size / 1024
    print(
        f"backup={backup_path.name} "
        f"added={len(added)} "
        f"duplicates={len(duplicates)} "
        f"trimmed={trimmed} "
        f"total={len(existing)} "
        f"size={size_kb:.1f}KB"
    )
    if validation_errors:
        print(f"WARNING: {len(validation_errors)} item(s) failed validation:", file=sys.stderr)
        for e in validation_errors:
            print(f"  - {e}", file=sys.stderr)
    if added:
        print(f"new_ids: {','.join(added)}")


if __name__ == "__main__":
    main()
