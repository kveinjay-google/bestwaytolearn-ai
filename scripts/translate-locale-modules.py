#!/usr/bin/env python3
"""Translate en locale module JSON to ko/ja/fr/es/de (batched)."""
from __future__ import annotations

import json
import re
import subprocess
import sys
import threading
import time
from pathlib import Path

CACHE_LOCK = threading.Lock()

ROOT = Path(__file__).resolve().parent.parent
MODULES = Path(__file__).resolve().parent / "locale-modules"
LOCALES_DIR = ROOT / "public/js/locales"

TARGET_LOCALES = {"ko": "ko", "ja": "ja", "fr": "fr", "es": "es", "de": "de"}

MODULE_ORDER = [
    "terms", "quiz", "devices", "tools-nav", "skills-nav", "mcp-nav",
    "curriculum", "tools", "en-base",
]

PLACEHOLDER_RE = re.compile(r"(\{[a-zA-Z0-9_]+\})")
TAG_RE = re.compile(r"(<[^>]+>)")
SKIP_KEYS = {
    "id", "icon", "color", "goto", "next", "url", "href", "stars", "github", "repo",
    "answer", "abbr", "fullEn", "software", "agent", "client", "transport", "source",
    "tag", "num", "arrow", "category",
}
SKIP_VALUE_RE = re.compile(
    r"^(https?://|#[0-9a-fA-F]{3,8}$|var\(--|GPT-|ChatGPT|Claude|Gemini|OpenAI|"
    r"GitHub|npm |BestWayToLearn|LLM|RAG|MCP|NLP|Day \d|"
    r"[A-Za-z0-9_./:?&=#%+\-*]{24,})$"
)


def init_translator(lang: str):
    try:
        from deep_translator import GoogleTranslator
    except ImportError:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "-q", "deep-translator"])
        from deep_translator import GoogleTranslator
    return GoogleTranslator(source="en", target=lang)


def should_translate(key: str | None, text: str) -> bool:
    if not text or not isinstance(text, str):
        return False
    if key in SKIP_KEYS:
        return False
    if SKIP_VALUE_RE.match(text.strip()):
        return False
    if not re.search(r"[A-Za-z]", text):
        return False
    return True


def protect(text: str) -> tuple[str, dict[str, str]]:
    tokens: dict[str, str] = {}

    def repl(m):
        key = f"__T{len(tokens)}__"
        tokens[key] = m.group(1)
        return key

    out = TAG_RE.sub(repl, text)
    out = PLACEHOLDER_RE.sub(repl, out)
    return out, tokens


def restore(text: str, tokens: dict[str, str]) -> str:
    for k, v in tokens.items():
        text = text.replace(k, v)
    return text


def collect_strings(obj, key: str | None = None, out: dict | None = None) -> dict[str, str]:
    if out is None:
        out = {}
    if isinstance(obj, str):
        if should_translate(key, obj):
            out.setdefault(obj, obj)
        return out
    if isinstance(obj, list):
        for v in obj:
            collect_strings(v, key, out)
    elif isinstance(obj, dict):
        for k, v in obj.items():
            collect_strings(v, k, out)
    return out


def apply_map(obj, mapping: dict, key: str | None = None):
    if isinstance(obj, str):
        return mapping.get(obj, obj)
    if isinstance(obj, list):
        return [apply_map(v, mapping, key) for v in obj]
    if isinstance(obj, dict):
        return {k: apply_map(v, mapping, k) for k, v in obj.items()}
    return obj


def translate_one(gt, text: str, cache: dict[str, str]) -> str:
    with CACHE_LOCK:
        if text in cache:
            return cache[text]
    protected, tokens = protect(text)
    for attempt in range(4):
        try:
            result = restore(gt.translate(protected), tokens)
            with CACHE_LOCK:
                cache[text] = result
            return result
        except Exception:
            time.sleep(2 ** attempt)
    with CACHE_LOCK:
        cache[text] = text
    return text


def batch_translate(gt, texts: list[str], cache: dict[str, str]) -> dict[str, str]:
    from concurrent.futures import ThreadPoolExecutor, as_completed

    pending = [t for t in texts if t not in cache]
    if not pending:
        return cache

    workers = min(6, len(pending))
    with ThreadPoolExecutor(max_workers=workers) as pool:
        futures = {pool.submit(translate_one, gt, t, cache): t for t in pending}
        done = 0
        for fut in as_completed(futures):
            fut.result()
            done += 1
            if done % 25 == 0 or done == len(pending):
                print(f"    {done}/{len(pending)}", flush=True)
    return cache


def load_existing_strings(locale: str) -> dict:
    path = LOCALES_DIR / f"{locale}.js"
    if not path.exists():
        return {}
    code = path.read_text(encoding="utf-8")
    tmp = MODULES / f".tmp-{locale}-strings.cjs"
    wrapped = f"{code}\nmodule.exports = (() => {{ const out={{}}; const I18n={{registerLocale(c,b){{out.strings=b.strings||{{}}}}}}; eval(require('fs').readFileSync('{path}', 'utf8')); return out.strings; }})();"
    # Simpler: regex-extract not needed; strings already translated in locale file
    return {}


def translate_payload(gt, locale: str, module: str, payload: dict, cache: dict[str, str]) -> dict:
    out = json.loads(json.dumps(payload))
    if module == "en-base":
        # UI strings already live in {locale}.js — translate course data only
        out["strings"] = {}
    strings_map = collect_strings(out)
    if strings_map:
        print(f"    {len(strings_map)} unique strings", flush=True)
        batch_translate(gt, list(strings_map.keys()), cache)
        if out.get("strings"):
            out["strings"] = apply_map(out["strings"], cache)
        if out.get("data"):
            out["data"] = apply_map(out["data"], cache)
        else:
            out = apply_map(out, cache)
    return out


def main():
    locales = sys.argv[1:] if len(sys.argv) > 1 else list(TARGET_LOCALES.keys())
    for locale in locales:
        if locale not in TARGET_LOCALES:
            continue
        lang = TARGET_LOCALES[locale]
        out_dir = MODULES / locale
        out_dir.mkdir(parents=True, exist_ok=True)
        cache_file = out_dir / "_cache.json"
        cache = json.loads(cache_file.read_text(encoding="utf-8")) if cache_file.exists() else {}
        gt = init_translator(lang)
        print(f"== {locale} ==", flush=True)

        for module in MODULE_ORDER:
            out_path = out_dir / f"{module}.json"
            if out_path.exists() and out_path.stat().st_size > 200:
                print(f"  skip {module}", flush=True)
                continue
            src_path = MODULES / f"en.{module}.json"
            if not src_path.exists():
                continue
            print(f"  {module}...", flush=True)
            payload = json.loads(src_path.read_text(encoding="utf-8"))
            translated = translate_payload(gt, locale, module, payload, cache)
            out_path.write_text(json.dumps(translated, ensure_ascii=False, indent=2), encoding="utf-8")
            cache_file.write_text(json.dumps(cache, ensure_ascii=False), encoding="utf-8")
            print(f"    wrote {out_path.name}", flush=True)

        cache_file.write_text(json.dumps(cache, ensure_ascii=False), encoding="utf-8")
        print(f"done {locale} ({len(cache)} cached)", flush=True)


if __name__ == "__main__":
    main()