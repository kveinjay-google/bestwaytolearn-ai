#!/usr/bin/env python3
"""Build zh-TW locale module JSON from zh-CN source (OpenCC s2twp)."""
from __future__ import annotations

import json
import re
import subprocess
import sys
from copy import deepcopy
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MODULES = Path(__file__).resolve().parent / "locale-modules"
OUT = MODULES / "zh-TW"

SKIP_TRANSLATE = re.compile(
    r"^(https?://|#[0-9a-fA-F]{3,8}$|var\(--|Day \d|GPT-|Claude|ChatGPT|API|URL|HTML|CSS|JS|JSON|"
    r"GitHub|npm |pip |curl |VS Code|Node\.js|Python|JavaScript|TypeScript|LLM|RAG|MCP|NLP|"
    r"Transformer|CNN|RNN|GAN|RLHF|LoRA|CoT|ANI|AGI|GenAI|GPU|CPU|SSD|RAM|"
    r"Stable Diffusion|Midjourney|DALL|OpenAI|Anthropic|Google|Microsoft|Meta|"
    r"BestWayToLearn|Skill\b|MCP\b|IDE\b|CLI\b|BYOK\b|ADE\b|GLM|ERNIE|Qwen|DeepSeek|"
    r"Feishu|WeChat|Xiaohongshu|Kimi|Gemini|Copilot|Cursor|Codeium|Aider|"
    r"macOS|Windows|Linux|Docker|Kubernetes|PostgreSQL|Redis|Figma|Notion|"
    r"\d+GB|\d+TB|\d+MB|\d+/\d+|\d+%|~[\d.]+ ?[hms]|"
    r"[A-Za-z0-9_./:?&=#%+\-*]{12,})$"
)

PRESERVE_KEYS = {
    "id", "icon", "color", "goto", "next", "software", "url", "href", "stars",
    "github", "repo", "answer", "difficulty", "duration", "category", "agent",
    "client", "transport", "source", "tag", "num", "arrow", "abbr", "fullEn",
}


def init_opencc():
    try:
        from opencc import OpenCC
    except ImportError:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "-q", "opencc-python-reimplemented"])
        from opencc import OpenCC
    return OpenCC("s2twp")


def should_convert(key: str | None, text: str) -> bool:
    if not text or not re.search(r"[\u4e00-\u9fff]", text):
        return False
    if key in PRESERVE_KEYS:
        return False
    if SKIP_TRANSLATE.match(text.strip()):
        return False
    return True


def convert_obj(cc, obj, key: str | None = None):
    if isinstance(obj, str):
        return cc.convert(obj) if should_convert(key, obj) else obj
    if isinstance(obj, list):
        return [convert_obj(cc, v, key) for v in obj]
    if isinstance(obj, dict):
        out = {}
        for k, v in obj.items():
            if k in ("category", "agent", "client", "transport", "source") and isinstance(v, str):
                # Keep zh category keys; convert display values separately in overlays
                out[k] = v
            elif isinstance(v, str) and should_convert(k, v):
                out[k] = cc.convert(v)
            elif isinstance(v, (dict, list)):
                out[k] = convert_obj(cc, v, k)
            else:
                out[k] = v
        return out
    return obj


def build_terms(cc, zh: dict) -> dict:
    cats = {k: cc.convert(k) for k in zh["TERM_CATEGORIES"] if k != "全部"}
    terms = []
    for t in zh["AI_TERMS"]:
        terms.append({
            "term": cc.convert(t["term"]),
            "def": cc.convert(t["def"]),
            "example": cc.convert(t["example"]),
        })
    return {"strings": {}, "data": {"termCategories": cats, "terms": terms}}


def build_quiz(cc, zh: dict) -> dict:
    quiz = []
    for q in zh["QUIZ_DATA"]:
        quiz.append({
            "q": cc.convert(q["q"]),
            "options": [cc.convert(o) for o in q["options"]],
            "explain": cc.convert(q["explain"]),
        })
    return {"strings": {}, "data": {"quiz": quiz}}


def build_curriculum(cc, zh: dict, en_template: dict) -> dict:
    data = convert_obj(cc, {
        "aiOverview": zh["AI_OVERVIEW_SECTIONS"],
        "fundamentals": zh["FUNDAMENTALS"],
        "fundamentalsFigcaption": "一圖看懂：AI 從學習資料到理解你的問題並生成回答；下方模組預設展開，可點擊標題摺疊。",
        "fundamentalsFigAlt": "AI 工作原理示意圖：資料訓練、Transformer 架構、大語言模型推理到生成回答，以及 AI 包含機器學習與深度學習的層級關係",
        "coachSections": en_template["data"].get("coachSections"),
        "phaseCoachHints": en_template["data"].get("phaseCoachHints"),
        "dayCompleteMessages": en_template["data"].get("dayCompleteMessages"),
        "personalizationNamed": en_template["data"].get("personalizationNamed"),
    })
    return {"strings": {}, "data": data}


def cat_map(cc, cats) -> dict:
    if isinstance(cats, dict):
        return {k: cc.convert(v) if isinstance(v, str) else v for k, v in cats.items()}
    return {k: cc.convert(k) for k in (cats or []) if k != "全部"}


def build_tools(cc, zh: dict) -> dict:
    data = convert_obj(cc, {
        "appCategories": cat_map(cc, zh.get("APP_CATEGORIES", [])),
        "apps": zh["APPS"],
        "handsOnCategories": cat_map(cc, zh.get("HANDS_ON_CATEGORIES", [])),
        "handsOnCases": zh["HANDS_ON_CASES"],
        "practiceCategories": cat_map(cc, zh.get("PRACTICE_CATEGORIES", [])),
        "practices": zh["PRACTICES"],
        "promptLab": {
            "cases": zh["PROMPT_CASES"],
            "tasks": zh["PROMPT_TASKS"],
            "presets": zh["PROMPT_TASK_PRESETS"],
            "tools": zh["PROMPT_TOOLS"],
        },
        "monetize": {
            "meta": zh["AI_MONETIZE_META"],
            "categories": cat_map(cc, zh.get("AI_MONETIZE_CATEGORIES", [])),
            "projects": zh["AI_MONETIZE_PROJECTS"],
        },
    })
    return {"strings": {}, "data": data}


def build_devices(cc, zh: dict) -> dict:
    data = convert_obj(cc, {
        "deviceOsCompare": zh["DEVICE_OS_COMPARE"],
        "deviceMemoryTiers": zh["DEVICE_MEMORY_TIERS"],
        "deviceGpuTiers": zh["DEVICE_GPU_TIERS"],
        "deviceStorageTiers": zh["DEVICE_STORAGE_TIERS"],
        "deviceAiBoxes": zh["DEVICE_AI_BOXES"],
        "devicePresets": zh["DEVICE_PRESETS"],
    })
    return {"strings": {}, "data": data}


def load_zh_cn_bundle() -> dict:
    node_script = r"""
const fs = require('fs');
const vm = require('vm');
const bundles = {};
const I18n = { registerLocale(code, b) { bundles[code] = b; } };
vm.runInNewContext(fs.readFileSync(process.argv[1], 'utf8'), { I18n });
console.log(JSON.stringify(bundles['zh-CN']));
"""
    zhcn_path = ROOT / "public/js/locales/zh-CN.js"
    out = subprocess.check_output(["node", "-e", node_script, str(zhcn_path)], text=True)
    return json.loads(out)


def build_en_base_tw(cc) -> dict:
    zhcn = load_zh_cn_bundle()
    payload = {
        "strings": convert_obj(cc, zhcn.get("strings", {})),
        "data": convert_obj(cc, zhcn.get("data", {})),
    }
    payload["strings"].setdefault("notice", {})["partial"] = "介面為繁體中文，部分教學內容仍為簡體中文。"
    payload["strings"]["notice"]["partialEn"] = ""
    return payload


def main():
    cc = init_opencc()
    zh = json.loads((MODULES / "zh-CN.source.json").read_text(encoding="utf-8"))
    en_curriculum = json.loads((MODULES / "en.curriculum.json").read_text(encoding="utf-8"))

    OUT.mkdir(parents=True, exist_ok=True)
    modules = {
        "en-base": build_en_base_tw(cc),
        "terms": build_terms(cc, zh),
        "quiz": build_quiz(cc, zh),
        "curriculum": build_curriculum(cc, zh, en_curriculum),
        "tools": build_tools(cc, zh),
        "devices": build_devices(cc, zh),
    }

    # Nav modules: convert English templates (Chinese nav source is thin; en overlays are primary for non-CN)
    for name in ("tools-nav", "skills-nav", "mcp-nav"):
        src = json.loads((MODULES / f"en.{name}.json").read_text(encoding="utf-8"))
        modules[name] = {"strings": convert_obj(cc, src.get("strings", {})), "data": convert_obj(cc, src.get("data", {}))}

    for name, payload in modules.items():
        path = OUT / f"{name}.json"
        path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
        print("wrote", path.relative_to(ROOT))


if __name__ == "__main__":
    main()