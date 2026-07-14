#!/usr/bin/env python3
"""Build locale overlays for skills, MCP, prompts, briefing, tutorials (8 languages)."""
from __future__ import annotations

import json
import re
import subprocess
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LOCALES_DIR = ROOT / "public/js/locales"
CACHE_PATH = Path(__file__).resolve().parent / "content-i18n-cache.json"
GLOSSARY_PATH = Path(__file__).resolve().parent / "glossary.json"
GLOSSARY = json.loads(GLOSSARY_PATH.read_text(encoding="utf-8")) if GLOSSARY_PATH.exists() else {}

TARGET_LOCALES = {
    "en": ("zh-CN", "en"),
    "zh-TW": ("zh-CN", "zh-TW"),
    "ko": ("en", "ko"),
    "ja": ("en", "ja"),
    "fr": ("en", "fr"),
    "es": ("en", "es"),
    "de": ("en", "de"),
}

SKIP_KEYS = {
    "id", "date", "url", "github", "install", "config", "stars", "emoji", "software",
    "transport", "source", "featured", "illustrated", "image", "alt", "caption",
    "agents", "clients", "tags", "category", "difficulty", "duration",
}

META_UI = {
    "en": {
        "skillsNav": {
            "lead": "Curated GitHub Agent Skills with 1,000+ stars. Each entry includes install command, compatible agents, and repo link.",
            "searchPlaceholder": "Search skills, industry, use case, agents…",
            "countLabel": "{n} skills",
            "totalLabel": "{n} skills · {c} categories",
            "empty": "No matching skills. Try another keyword.",
            "copyCmd": "Copy command",
            "openGithub": "GitHub",
            "starsLabel": "{n} ★",
            "agentsLabel": "Works with",
        },
        "mcpNav": {
            "lead": "Curated high-star MCP servers by use case. Tap Copy config to paste into Cursor or Claude Desktop.",
            "searchPlaceholder": "Search MCP name, category, client, use case…",
            "countLabel": "{n} servers",
            "totalLabel": "{n} servers · {c} categories",
            "empty": "No matching MCP servers. Try another keyword.",
            "copyConfig": "Copy config",
            "openLink": "Details",
            "clientsLabel": "Clients",
            "transportLabel": "Transport",
            "sourceLabel": "Source",
            "starsLabel": "{n} ★",
            "featuresLabel": "Features",
        },
        "promptExamplesUi": {
            "countShown": "Showing {visible} / {total}",
            "emptyHint": "No examples in this category. Try another tag.",
            "structureLabel": "Prompt structure",
            "scenarioLabel": "When to use",
            "tipsLabel": "Tips",
            "copyLabel": "Copy prompt",
            "frameworkHint": "Use Role → Task → Context → Format → Constraints (RTFC). Replace [placeholders] with your details.",
        },
        "aiBriefing": {
            "lead": "Daily curated AI industry news, archived by date. Updated every morning — grasp the pulse in 3 minutes.",
            "updatedLabel": "Last updated: {date}",
            "countShown": "Showing {visible} / {total}",
            "emptyHint": "No news in this category. Try another tag.",
            "readMore": "Read source",
            "sourceLabel": "Source",
            "backToList": "Back to briefing",
            "newBadge": "New",
            "highlightsLabel": "Key takeaways",
        },
        "latestTutorials": {
            "lead": "Daily hands-on tutorials for the latest tools and workflows. Step-by-step cases include copy-ready prompts.",
            "updatedLabel": "Last updated: {date}",
            "countShown": "Showing {visible} / {total}",
            "emptyHint": "No tutorials in this category. Try another tag.",
            "newBadge": "New",
            "illustratedBadge": "Step-by-step",
            "backToList": "Back to tutorials",
        },
    }
}

DIFF_MAP = {"入门": "Beginner", "进阶": "Intermediate"}
ALL_CAT = "全部"
# Use a key outside SKIP_KEYS when translating category display labels (item.category must stay zh-CN).
CAT_LABEL_KEY = "label"


def translate_cat_label(gt, cache: dict, text: str, target: str) -> str:
    if text == ALL_CAT:
        src = "All" if target == "en" else ALL_CAT
    else:
        src = text
    return translate_value(gt, cache, CAT_LABEL_KEY, src, target)


def build_category_map(gt, cache: dict, categories: list[str], target: str) -> dict[str, str]:
    return {c: translate_cat_label(gt, cache, c, target) for c in categories}


def meta_for_locale(module: str, gt, cache: dict, source_meta: dict, target: str) -> dict:
    if target == "en" and module in META_UI["en"]:
        return dict(META_UI["en"][module])
    return {k: translate_value(gt, cache, k, v, target) for k, v in source_meta.items()}


def init_translator(source: str, target: str):
    try:
        from deep_translator import GoogleTranslator
    except ImportError:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "-q", "deep-translator"])
        from deep_translator import GoogleTranslator
    return GoogleTranslator(source=source, target=target)


def has_cjk(text: str) -> bool:
    return bool(re.search(r"[\u4e00-\u9fff]", text))


def should_translate(key: str | None, text: str, target: str) -> bool:
    if not isinstance(text, str) or not text.strip():
        return False
    if key in SKIP_KEYS:
        return False
    if text.startswith("http") or text.startswith("npx ") or text.startswith("{"):
        return False
    if target == "en" and not has_cjk(text):
        return False
    if target in ("ko", "ja", "fr", "es", "de") and not re.search(r"[A-Za-z]", text):
        return False
    return True


def tr(gt, cache: dict, text: str) -> str:
    if not text:
        return text
    key = f"{gt.source}->{gt.target}:{text}"
    if key in cache:
        return cache[key]
    if gt.target == "en" and text in GLOSSARY:
        out = GLOSSARY[text]
        cache[key] = out
        return out
    for attempt in range(4):
        try:
            out = gt.translate(text)
            cache[key] = out
            return out
        except Exception:
            time.sleep(2 ** attempt)
    cache[key] = text
    return text


def collect_strings(obj, target: str, key: str | None = None, out: set | None = None) -> set[str]:
    if out is None:
        out = set()
    if isinstance(obj, str):
        if should_translate(key, obj, target) and obj.strip():
            out.add(obj)
    elif isinstance(obj, list):
        for v in obj:
            collect_strings(v, target, key, out)
    elif isinstance(obj, dict):
        for k, v in obj.items():
            collect_strings(v, target, k, out)
    return out


def prefetch_translations(gt, cache: dict, payloads: list, target: str) -> None:
    from concurrent.futures import ThreadPoolExecutor, as_completed

    pending = set()
    for p in payloads:
        collect_strings(p, target, None, pending)
    pending = {s for s in pending if f"{gt.source}->{gt.target}:{s}" not in cache}
    if not pending:
        return
    print(f"    translating {len(pending)} strings -> {gt.target}...", flush=True)
    workers = min(8, len(pending))
    done = 0
    with ThreadPoolExecutor(max_workers=workers) as pool:
        futs = {pool.submit(tr, gt, cache, s): s for s in pending}
        for fut in as_completed(futs):
            fut.result()
            done += 1
            if done % 100 == 0 or done == len(pending):
                print(f"    {done}/{len(pending)}", flush=True)
                CACHE_PATH.write_text(json.dumps(cache, ensure_ascii=False), encoding="utf-8")


def translate_value(gt, cache: dict, key: str | None, value, target: str):
    if isinstance(value, str):
        if not should_translate(key, value, target):
            return value
        if key == "difficulty" and target == "en":
            return DIFF_MAP.get(value, value)
        return tr(gt, cache, value)
    if isinstance(value, list):
        return [translate_value(gt, cache, key, v, target) for v in value]
    if isinstance(value, dict):
        return {k: translate_value(gt, cache, k, v, target) for k, v in value.items()}
    return value


def translate_map(gt, cache: dict, mapping: dict[str, str], target: str) -> dict[str, str]:
    return {k: translate_value(gt, cache, "category", v, target) for k, v in mapping.items()}


def build_skills_overlay(gt, cache, source: dict, target: str) -> dict:
    agents_src = {
        "多平台": "Multi-platform", "格式通用": "Format universal", "通用": "Universal",
        "Cursor": "Cursor", "Claude Code": "Claude Code", "Codex": "Codex",
        "Gemini CLI": "Gemini CLI", "GitHub Copilot": "GitHub Copilot",
        "Claude.ai": "Claude.ai", "v0": "v0", "OpenClaw": "OpenClaw",
        "Antigravity": "Antigravity", "Grok": "Grok", "Windsurf": "Windsurf",
    }
    if target != "en":
        agents_src = {k: translate_value(gt, cache, None, v, target) for k, v in agents_src.items()}

    items = {}
    for it in source["items"]:
        o = {}
        for field in ("name", "desc", "installNote"):
            if it.get(field):
                o[field] = translate_value(gt, cache, field, it[field], target)
        items[it["name"]] = o

    meta = meta_for_locale("skillsNav", gt, cache, source["meta"], target)
    cats = build_category_map(gt, cache, source["categories"], target)

    return {"meta": meta, "categories": cats, "agents": agents_src, "items": items}


def build_mcp_overlay(gt, cache, source: dict, target: str) -> dict:
    clients_src = {
        "多平台": "Multi-platform", "开发者": "Developers",
        "Cursor": "Cursor", "Claude Desktop": "Claude Desktop", "Cline": "Cline",
        "Windsurf": "Windsurf", "Codex": "Codex", "Raycast": "Raycast",
    }
    transports = {
        "概念": "Concept", "配置": "Setup", "文档": "Docs", "Registry": "Registry",
        "stdio": "stdio", "SSE": "SSE", "http": "HTTP",
    }
    sources = {"official": "Official", "github": "GitHub", "community": "Community"}

    if target != "en":
        clients_src = {k: translate_value(gt, cache, None, v, target) for k, v in clients_src.items()}
        transports = {k: translate_value(gt, cache, None, v, target) for k, v in transports.items()}
        sources = {k: translate_value(gt, cache, None, v, target) for k, v in sources.items()}

    items = {}
    for it in source["items"]:
        o = {}
        for field in ("name", "desc", "configNote"):
            if it.get(field):
                o[field] = translate_value(gt, cache, field, it[field], target)
        if it.get("features"):
            o["features"] = translate_value(gt, cache, "features", it["features"], target)
        items[it["name"]] = o

    meta = meta_for_locale("mcpNav", gt, cache, source["meta"], target)
    cats = build_category_map(gt, cache, source["categories"], target)

    return {"meta": meta, "categories": cats, "clients": clients_src, "transports": transports, "sources": sources, "items": items}


def build_prompts_overlay(gt, cache, source: dict, target: str) -> dict:
    items = []
    for it in source["items"]:
        if not it or not it.get("id"):
            continue
        o = {"id": it["id"]}
        for k, v in it.items():
            if k in SKIP_KEYS or k == "id":
                continue
            o[k] = translate_value(gt, cache, k, v, target)
        items.append(o)

    cats = build_category_map(gt, cache, source["categories"], target)

    ui = META_UI["en"]["promptExamplesUi"] if target == "en" else translate_value(gt, cache, None, META_UI["en"]["promptExamplesUi"], target)
    return {"promptExampleCategories": cats, "promptExamplesUi": ui, "promptExamples": items}


def build_briefing_overlay(gt, cache, source: dict, target: str) -> dict:
    items = []
    for it in source["items"]:
        o = {"id": it["id"]}
        for k in ("title", "summary", "source"):
            if it.get(k):
                o[k] = translate_value(gt, cache, k, it[k], target)
        for k in ("body", "highlights", "tags"):
            if it.get(k):
                o[k] = translate_value(gt, cache, k, it[k], target)
        items.append(o)

    meta = meta_for_locale("aiBriefing", gt, cache, source["meta"], target)
    cats = build_category_map(gt, cache, source["categories"], target)

    return {"meta": meta, "categories": cats, "items": items}


def build_tutorials_overlay(gt, cache, source: dict, target: str) -> dict:
    items = []
    for it in source["items"]:
        o = {"id": it["id"]}
        for k, v in it.items():
            if k in SKIP_KEYS or k == "id":
                continue
            if k == "illustratedSteps" and isinstance(v, list):
                steps = []
                for step in v:
                    ns = dict(step)
                    for fk in ("title", "text", "caption"):
                        if step.get(fk):
                            ns[fk] = translate_value(gt, cache, fk, step[fk], target)
                    steps.append(ns)
                o[k] = steps
            else:
                o[k] = translate_value(gt, cache, k, v, target)
        items.append(o)

    meta = meta_for_locale("latestTutorials", gt, cache, source["meta"], target)
    cats = build_category_map(gt, cache, source["categories"], target)

    return {"meta": meta, "categories": cats, "items": items}


def write_locale_file(locale: str, module: str, payload: dict) -> None:
    out = LOCALES_DIR / f"{locale}-{module}.js"
    body = json.dumps(payload, ensure_ascii=False, indent=2)
    if module == "skills-nav":
        content = (
            f"/* {locale.upper()} overlays — skills-nav */\n"
            f"(function () {{\n"
            f"  if (typeof I18n === 'undefined') return;\n"
            f"  I18n.mergeLocaleData({json.dumps(locale)}, {{ skillsNav: {body} }});\n"
            f"}})();\n"
        )
    elif module == "mcp-nav":
        content = (
            f"/* {locale.upper()} overlays — mcp-nav */\n"
            f"(function () {{\n"
            f"  if (typeof I18n === 'undefined') return;\n"
            f"  I18n.mergeLocaleData({json.dumps(locale)}, {{ mcpNav: {body} }});\n"
            f"}})();\n"
        )
    elif module == "prompt-examples":
        content = (
            f"/* {locale.upper()} overlays — prompt-examples */\n"
            f"(function () {{\n"
            f"  if (typeof I18n === 'undefined') return;\n"
            f"  I18n.mergeLocaleData({json.dumps(locale)}, {body});\n"
            f"}})();\n"
        )
    elif module == "daily-feeds":
        content = (
            f"/* {locale.upper()} overlays — ai-briefing + latest-tutorials */\n"
            f"(function () {{\n"
            f"  if (typeof I18n === 'undefined') return;\n"
            f"  I18n.mergeLocaleData({json.dumps(locale)}, {body});\n"
            f"}})();\n"
        )
    else:
        raise ValueError(module)
    out.write_text(content, encoding="utf-8")
    print(f"  wrote {out.name}")


def load_source() -> dict:
    raw = subprocess.check_output(["node", str(ROOT / "scripts/extract-content-source.mjs")], text=True)
    return json.loads(raw)


def main():
    locales = sys.argv[1:] if len(sys.argv) > 1 else list(TARGET_LOCALES.keys())
    cache = json.loads(CACHE_PATH.read_text(encoding="utf-8")) if CACHE_PATH.exists() else {}
    source = load_source()
    print(f"source: skills={len(source['skills']['items'])} mcp={len(source['mcp']['items'])} "
          f"prompts={len(source['prompts']['items'])} briefing={len(source['briefing']['items'])} "
          f"tutorials={len(source['tutorials']['items'])}")

    en_cache = cache
    en_gt = init_translator("zh-CN", "en")
    print("== building en ==", flush=True)
    prefetch_translations(en_gt, en_cache, [source["skills"], source["mcp"], source["prompts"], source["briefing"], source["tutorials"]], "en")
    en_skills = build_skills_overlay(en_gt, en_cache, source["skills"], "en")
    en_mcp = build_mcp_overlay(en_gt, en_cache, source["mcp"], "en")
    en_prompts = build_prompts_overlay(en_gt, en_cache, source["prompts"], "en")
    en_briefing = build_briefing_overlay(en_gt, en_cache, source["briefing"], "en")
    en_tutorials = build_tutorials_overlay(en_gt, en_cache, source["tutorials"], "en")
    write_locale_file("en", "skills-nav", en_skills)
    write_locale_file("en", "mcp-nav", en_mcp)
    write_locale_file("en", "prompt-examples", en_prompts)
    write_locale_file("en", "daily-feeds", {"aiBriefing": en_briefing, "latestTutorials": en_tutorials})
    CACHE_PATH.write_text(json.dumps(en_cache, ensure_ascii=False), encoding="utf-8")

    for locale in locales:
        if locale == "en":
            continue
        src_lang, tgt_lang = TARGET_LOCALES[locale]
        print(f"== building {locale} (from {src_lang}) ==", flush=True)
        gt = init_translator(src_lang, tgt_lang)

        if locale == "zh-TW":
            prefetch_translations(gt, en_cache, [source["skills"], source["mcp"], source["prompts"], source["briefing"], source["tutorials"]], locale)
            skills = build_skills_overlay(gt, en_cache, source["skills"], locale)
            mcp = build_mcp_overlay(gt, en_cache, source["mcp"], locale)
            prompts = build_prompts_overlay(gt, en_cache, source["prompts"], locale)
            briefing = build_briefing_overlay(gt, en_cache, source["briefing"], locale)
            tutorials = build_tutorials_overlay(gt, en_cache, source["tutorials"], locale)
        else:
            prefetch_translations(gt, en_cache, [en_skills, en_mcp, en_prompts, en_briefing, en_tutorials], locale)
            skills = translate_value(gt, en_cache, None, en_skills, locale)
            mcp = translate_value(gt, en_cache, None, en_mcp, locale)
            prompts = translate_value(gt, en_cache, None, en_prompts, locale)
            briefing = translate_value(gt, en_cache, None, en_briefing, locale)
            tutorials = translate_value(gt, en_cache, None, en_tutorials, locale)

        write_locale_file(locale, "skills-nav", skills)
        write_locale_file(locale, "mcp-nav", mcp)
        write_locale_file(locale, "prompt-examples", prompts)
        write_locale_file(locale, "daily-feeds", {"aiBriefing": briefing, "latestTutorials": tutorials})
        CACHE_PATH.write_text(json.dumps(en_cache, ensure_ascii=False), encoding="utf-8")

    print(f"done — cache size {len(en_cache)}")


if __name__ == "__main__":
    main()