#!/usr/bin/env python3
"""Daily content update for bestwaytolearn.ai

Strategy:
  1. Merge pending AI briefings from scripts/data/ai-briefing-batch.json
     into public/js/ai-briefing.js (id-dedup).
  2. Discover new SKILL items from:
       a) ~/.openclaw/skills/*/SKILL.md  (GitHub-installed only)
       b) gh search "agent skill stars:>N"  (high-star GitHub)
     Dedup vs already-published (github URLs + names) set.
  3. Append survivors (capped at DAILY_NEW_SKILL_CAP) to
     scripts/generate-ai-skills-nav.py RAW list.
  4. Run generate-ai-skills-nav.py to rebuild ai-skills-nav.js.
  5. git add / commit / push (origin/main).

Usage:
  scripts/daily-content-update.py --dry-run    # print plan only, no writes/push
  scripts/daily-content-update.py              # full execution + push

Env requirements:
  - python3, git
  - gh CLI logged in (gh auth status)
  - ~/ai-learning-hub/ git repo with origin = kveinjay-google/bestwaytolearn-ai
"""
from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
from datetime import date
from pathlib import Path

# ──────────────── constants ────────────────

ROOT = Path.home() / "ai-learning-hub"
LOCAL = Path.home() / ".openclaw/skills"

JS_SKILLS = ROOT / "public/js/ai-skills-nav.js"
JS_BRIEFING = ROOT / "public/js/ai-briefing.js"
RAW_PY = ROOT / "scripts/generate-ai-skills-nav.py"
BATCH_BRIEFING = ROOT / "scripts/data/ai-briefing-batch.json"
MANIFEST = ROOT / "scripts/.local-skills-published.json"

DAILY_NEW_SKILL_CAP = 10
GH_MIN_STARS = 5000  # only super-popular ones; smaller threshold risks noise

# Default category for anything we add — can be tuned later
DEFAULT_CATEGORY = "Skill 安装与合集"
DEFAULT_AGENTS_LIBCODE = "['Cursor', 'Claude Code', 'Codex', 'Gemini CLI']"
DEFAULT_AGENTS_OPENCLAW = "['OpenClaw', 'Claude Code', 'Cursor', 'Codex']"

# ──────────────── helpers ────────────────

def read_text(p: Path) -> str:
    return p.read_text(encoding="utf-8")

def already_published() -> tuple[set[str], set[str]]:
    """Pull already-published (github urls, names).

    Sources scanned (union, dedup):
      - ai-skills-nav.js (the live output, what users actually see)
      - generate-ai-skills-nav.py RAW list (pending entries waiting for next
        regeneration; needed because filtered-out self-made skills may not yet
        be in the JS file but should still be considered "already published"
        to prevent the same entry from being appended again and again).
    """
    js_text = read_text(JS_SKILLS)
    githubs = set(re.findall(r'github:\s*"([^"]+)"', js_text))
    names = set(re.findall(r'name:\s*"([^"]+)"', js_text))

    raw_text = read_text(RAW_PY)
    # Tuples look like ('name', 'category', [...], stars, ...)
    raw_names = set(re.findall(r"\(\s*'((?:[^'\\]|\\.)*)',\s*'", raw_text))
    names |= raw_names
    return githubs, names


def is_self_made(text: str) -> bool:
    """Heuristic: an OpenClaw skill is self-made (Kevin's own) iff it has NO
    GitHub URL anywhere in its SKILL.md.

    Why this works: skills installed from GitHub via `npx skills add <repo>`
    keep the upstream repo URL in their frontmatter or body. Skills Kevin
    authored locally have no GitHub URL because they were never cloned from
    a public repo. The previous heuristic (require both `emoji:` and
    `category:` inside `metadata.openclaw:`) was too narrow — many of Kevin's
    skills use plain YAML or JSON-style metadata that don't match the
    pattern, so they slipped through as 'not self-made' and got published as
    if they were real GitHub skills.
    """
    if re.search(r"https?://github\.com/[\w\-./]+", text):
        return False
    return True


def discover_local_skills(published_gh: set[str], published_names: set[str]) -> list[dict]:
    out: list[dict] = []
    if not LOCAL.exists():
        return out
    for d in sorted(LOCAL.iterdir()):
        if not d.is_dir():
            continue
        md = d / "SKILL.md"
        if not md.exists():
            continue
        text = read_text(md)
        if is_self_made(text):
            continue
        m = re.match(r"---\n(.*?)\n---", text, re.DOTALL)
        if not m:
            continue
        fm = m.group(1)
        name_m = re.search(r"^name:\s*['\"]?([^'\"\n]+)['\"]?", fm, re.MULTILINE)
        if not name_m:
            continue
        name = name_m.group(1).strip()
        # description: try single-line, then multi-line block
        desc = ""
        desc_m = re.search(r"description:\s*['\"]([^'\"]+)['\"]", fm)
        if desc_m:
            desc = desc_m.group(1).strip()
        else:
            desc_m2 = re.search(r"description:\s*>?\s*\n((?:[ \t]+[^\n]+\n)+)", fm, re.MULTILINE)
            if desc_m2:
                desc = " ".join(line.strip() for line in desc_m2.group(1).splitlines()).strip()
        desc = desc[:180]
        gh_m = re.search(r"https?://github\.com/[\w\-./]+", text)
        gh = gh_m.group(0) if gh_m else ""
        # dedup
        if name in published_names:
            continue
        if gh and gh in published_gh:
            continue
        out.append({"name": name, "gh": gh, "desc": desc, "stars": 0, "src": "local"})
    return out


def discover_github_skills(published_gh: set[str], published_names: set[str]) -> list[dict]:
    out: list[dict] = []
    queries = [
        "agent skill stars:>5000",
        "claude skill stars:>5000",
        "agent skills collection stars:>5000",
        "awesome agent skills stars:>5000",
    ]
    for q in queries:
        try:
            r = subprocess.run(
                [
                    "gh", "search", "repos", q,
                    "--limit", "20",
                    "--sort", "stars",
                    "--order", "desc",
                    "--json", "name,description,url,stargazersCount,owner",
                ],
                capture_output=True, text=True, timeout=60,
            )
        except (FileNotFoundError, subprocess.TimeoutExpired) as e:
            print(f"  [gh] skip query '{q}': {e}", file=sys.stderr)
            continue
        if r.returncode != 0:
            print(f"  [gh] query failed '{q}': {r.stderr.strip()}", file=sys.stderr)
            continue
        try:
            items = json.loads(r.stdout)
        except json.JSONDecodeError:
            continue
        if not isinstance(items, list):
            continue
        for it in items:
            owner = it.get("owner", {}).get("login", "")
            short = it.get("name", "")
            full_name = f"{owner}/{short}" if owner else short
            url = it.get("url") or (f"https://github.com/{full_name}" if full_name else "")
            desc = it.get("description") or ""
            stars = int(it.get("stargazersCount") or 0)
            if stars < GH_MIN_STARS:
                continue
            if url in published_gh or full_name in published_names or short in published_names:
                continue
            out.append(
                {
                    "name": short,
                    "gh": url,
                    "desc": desc[:180],
                    "stars": stars,
                    "src": "github",
                    "full_name": full_name,
                }
            )
    # dedup within candidates
    seen = set()
    unique = []
    for c in out:
        key = (c["gh"] or c["name"])
        if key in seen:
            continue
        seen.add(key)
        unique.append(c)
    # post-filter: strict name match (must look like a skill repo)
    # Required: name contains one of these tokens
    name_re = re.compile(
        r"(skill|skillz|agent[- ]?skill|awesome[- ]?skill|capabilit|awesome[- ]?claude|claude[- ]?skill|codex[- ]?skill|mcp[- ]?server|agent[- ]?tools|ai[- ]?agent)",
        re.IGNORECASE,
    )
    keep = []
    for c in unique:
        n = c.get("name", "") or ""
        if name_re.search(n):
            keep.append(c)
    unique = keep
    # sort by stars desc
    unique.sort(key=lambda c: c.get("stars", 0), reverse=True)
    return unique


def to_raw_tuple(c: dict) -> str:
    name = c["name"].replace("'", "\\'")
    desc = (c.get("desc") or "").replace("'", "\\'")
    gh = c.get("gh", "")
    agents = DEFAULT_AGENTS_LIBCODE
    # local OpenClaw-ish candidates use openclaw agent list
    if "openclaw" in (gh or "").lower() or c.get("src") == "local":
        agents = DEFAULT_AGENTS_OPENCLAW
    stars = c.get("stars", 0)
    install = (
        f"npx skills add {c['full_name']} -g -y"
        if c.get("full_name") and c["src"] == "github"
        else f"openclaw skill: {name}"
        if c["src"] == "local"
        else ""
    )
    lines = [
        f"    ('{name}', '{DEFAULT_CATEGORY}', {agents}, {stars},",
        f"     '{desc}',",
        f"     '{gh}', '{install}', None),",
    ]
    return "\n".join(lines)


def append_to_raw(new_entries: list[dict]) -> int:
    """Append entries to the RAW list in generate-ai-skills-nav.py.

    Strategy: locate the `RAW: list[tuple] = [` opener, then find the matching
    closing `]` by tracking bracket depth (so we ignore any inner `]` in code).
    Replace `]\n` with `,<new entries>\n]` and rewrite.

    Safer than `rfind('),')` which previously matched inside `main()` and
    produced a SyntaxError.
    """
    text = read_text(RAW_PY)
    opener = re.search(r"^RAW:\s*list\[tuple\]\s*=\s*\[", text, re.MULTILINE)
    if not opener:
        raise RuntimeError("Cannot locate RAW list opener in generate-ai-skills-nav.py")
    start = opener.end()  # index just after `[`
    depth = 1
    i = start
    while i < len(text) and depth > 0:
        ch = text[i]
        if ch == "[":
            depth += 1
        elif ch == "]":
            depth -= 1
            if depth == 0:
                break
        i += 1
    if depth != 0:
        raise RuntimeError("Unbalanced brackets in RAW list")
    raw_close = i  # position of `]`
    # ensure previous char (before `]`) doesn't already have a comma after last entry
    body_before_close = text[opener.end():raw_close].rstrip()
    if not body_before_close.endswith(","):
        # find last `),` and add comma if missing
        idx = body_before_close.rfind("),")
        if idx == -1:
            raise RuntimeError("Cannot locate end of last RAW entry")
        # insert comma after `),`
        fixed_body = body_before_close[: idx + 2] + "," + body_before_close[idx + 2 :]
        new_text = (
            text[: opener.end()]
            + fixed_body
            + "\n"
            + "\n".join(to_raw_tuple(c) for c in new_entries)
            + "\n]"
            + text[raw_close + 1 :]
        )
    else:
        new_text = (
            text[: opener.end()]
            + body_before_close
            + "\n"
            + "\n".join(to_raw_tuple(c) for c in new_entries)
            + "\n]"
            + text[raw_close + 1 :]
        )
    RAW_PY.write_text(new_text, encoding="utf-8")
    # sanity: file must parse cleanly
    import ast as _ast
    try:
        _ast.parse(new_text)
    except SyntaxError as e:
        # roll back the write so the file is not left broken
        RAW_PY.write_text(text, encoding="utf-8")
        raise RuntimeError(f"appended entries produced SyntaxError, rolled back: {e}")
    return len(new_entries)


def run_subprocess(label: str, args: list[str], cwd: Path) -> bool:
    print(f"  ▸ {label}: {' '.join(args)}")
    r = subprocess.run(args, cwd=str(cwd), capture_output=True, text=True)
    if r.stdout.strip():
        print(r.stdout.strip())
    if r.returncode != 0:
        print(f"  ✗ {label} failed:\n{r.stderr.strip()}", file=sys.stderr)
        return False
    return True


# ──────────────── main ────────────────

def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true", help="print plan only, do not write/push")
    args = ap.parse_args()

    if not ROOT.exists():
        print(f"ERROR: {ROOT} not found", file=sys.stderr)
        return 1
    if not (ROOT / ".git").exists():
        print(f"ERROR: {ROOT} is not a git repo", file=sys.stderr)
        return 1

    print(f"=== daily-content-update {'(DRY RUN)' if args.dry_run else ''} ===")
    print(f"date = {date.today().isoformat()}\n")

    published_gh, published_names = already_published()
    print(f"[scan] already-published: {len(published_gh)} github URLs, {len(published_names)} names\n")

    print("[scan] local skills (GitHub-installed only, heuristic)…")
    local = discover_local_skills(published_gh, published_names)
    for c in local:
        marker = "✓" if c["gh"] else "·"
        print(f"  {marker} {c['name']}  gh={c['gh'] or '(no url)'}")
    print()

    print(f"[scan] GitHub trending (stars > {GH_MIN_STARS})…")
    github = discover_github_skills(published_gh, published_names)
    for c in github[:20]:
        print(f"  ★ {c['stars']:>7}  {c['name']:<30}  {c['gh']}")
    print()

    raw_pool = local + github
    # priority: github (stars) first, then local 0★; cap finally
    ordered = sorted(
        raw_pool, key=lambda c: (c.get("src") != "github", -c.get("stars", 0))
    )
    survivors = ordered[:DAILY_NEW_SKILL_CAP]
    print(f"[plan] to publish (cap {DAILY_NEW_SKILL_CAP}): {len(survivors)}")
    for c in survivors:
        src = c.get("src", "?")
        print(f"  + [{src:>6}] {c.get('name','?')}  ({c.get('stars',0)}★)  {c.get('gh','')}")

    if args.dry_run:
        print("\n(dry-run, no writes/push)")
        return 0

    # ── step 1: merge briefings ──
    if BATCH_BRIEFING.exists():
        print("\n[1/4] merge-content-batch.py …")
        run_subprocess("merge", ["python3", str(ROOT / "scripts/merge-content-batch.py")], ROOT)
    else:
        print("\n[1/4] no batch file, skipping AI briefing merge")

    # ── step 2: append new skills to RAW ──
    if survivors:
        print(f"\n[2/4] append {len(survivors)} skills to RAW …")
        n = append_to_raw(survivors)
        print(f"  + appended {n} entries")
    else:
        print("\n[2/4] no new skills to append")

    # ── step 3: regenerate ai-skills-nav.js ──
    print("\n[3/4] generate-ai-skills-nav.py …")
    run_subprocess("generate", ["python3", str(ROOT / "scripts/generate-ai-skills-nav.py")], ROOT)

    # ── step 4: git commit + push ──
    print("\n[4/4] git commit + push …")
    subprocess.run(["git", "add", "-A"], cwd=str(ROOT))
    status = subprocess.run(
        ["git", "status", "--porcelain"], cwd=str(ROOT), capture_output=True, text=True
    )
    if not status.stdout.strip():
        print("  · nothing to commit")
        return 0
    # diff stat for visibility
    diff = subprocess.run(
        ["git", "diff", "--cached", "--stat"], cwd=str(ROOT), capture_output=True, text=True
    )
    print(diff.stdout)
    today = date.today().isoformat()
    msg = f"feat(content): daily auto update {today} ({len(survivors)} new skills)"
    if not run_subprocess("commit", ["git", "commit", "-m", msg], ROOT):
        return 2
    if not run_subprocess("push", ["git", "push", "origin", "main"], ROOT):
        return 3

    print("\n=== done ===")
    return 0


if __name__ == "__main__":
    sys.exit(main())
