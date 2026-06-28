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
    "github", "repo", "answer", "category", "agent",
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


def build_prompt_lab_ui(cc) -> dict:
    ui = {
        "casesLabel": "真實案例",
        "selectCaseStart": "選擇案例開始",
        "copyPrompt": "複製提示詞",
        "configTitle": "提示詞配置",
        "taskType": "任務類型",
        "role": "角色",
        "rolePlaceholder": "例如：資深產品經理",
        "context": "背景資訊",
        "contextPlaceholder": "描述場景、受眾、約束條件…",
        "output": "期望輸出",
        "outputPlaceholder": "例如：一份 500 字的 PRD 大綱",
        "tone": "語氣風格",
        "generateSimulate": "生成並模擬",
        "chatTitle": "提示詞與回覆 · 同屏模擬",
        "resetSim": "重置模擬",
        "simEmptyTitle": "尚未開始模擬",
        "simEmptyDesc": "點擊上方案例，或編輯左側配置後點「生成並模擬」。提示詞、AI 回覆與操作引導都在此視窗展示。",
        "guideTitle": "模擬完成 · 去真實工具試試",
        "guideToolsLabel": "推薦工具：",
        "followupPlaceholder": "追問，例如「更簡潔一點」…",
        "send": "傳送",
        "disclaimer": "本地預置演示，幫助理解提示詞結構。真實效果請複製提示詞到推薦工具驗證。",
        "tryFollowup": "試試追問：",
        "taskPrefix": "任務：",
        "casePrefix": "案例：",
        "customScene": "自訂場景",
        "defaultRole": "資深專家",
        "defaultContext": "[請補充具體背景]",
        "defaultOutput": "[請描述期望輸出]",
        "buildPrompt": {
            "roleHeader": "# 角色",
            "rolePrefix": "你是一位",
            "taskHeader": "# 任務",
            "contextHeader": "# 背景資訊",
            "outputHeader": "# 期望輸出",
            "requirementsHeader": "# 要求",
            "toneLine": "- 語氣風格：",
            "clarifyLine": "- 資訊不足時先列出需確認的 2-3 個關鍵問題",
            "structureLine": "- 輸出結構清晰，使用標題和列表",
            "uncertainLine": "- 不確定的內容明確標註，不要編造事實",
        },
        "systemLabel": "系統",
        "simulating": "模擬中…",
        "promptSent": "提示詞已傳送",
        "aiReply": "AI 回覆",
        "copyFail": "複製失敗",
        "defaultGuideSteps": [
            "點擊工具列「複製提示詞」",
            "開啟 ChatGPT 或通義千問，新建對話",
            "貼上提示詞，將背景替換為你的真實場景",
            "根據回覆迭代：「更簡潔」「換成表格」「補充資料」",
        ],
        "stepPrefix": "第",
        "stepSuffix": " 步",
        "simError": "模擬出錯，請重新整理頁面後重試。若仍失敗，請強制重新整理（Cmd+Shift+R）清除快取。",
        "caseDataError": "案例資料未載入，請強制重新整理頁面（Cmd+Shift+R）。",
        "copyPromptLabel": "複製提示詞",
    }
    return convert_obj(cc, ui)


def build_hands_on_ui(cc) -> dict:
    return convert_obj(cc, {
        "countShown": "顯示 {visible} / {total} 個",
        "emptyHint": "該分類下暫無案例，試試其他標籤。",
        "resultLabel": "完成後你將得到：",
        "tipsLabel": "小貼士：",
        "commandPrompt": "命令 / 提示詞",
        "copyToSoftware": "複製到 {software}",
        "openWebsite": "開啟 {software} 官網",
    })


def build_practice_ui(cc) -> dict:
    return convert_obj(cc, {
        "countShown": "顯示 {visible} / {total} 個",
        "emptyHint": "該分類下暫無模板，試試其他標籤。",
        "promptTplLabel": "提示詞模板",
    })


def build_tools(cc, zh: dict) -> dict:
    task_labels = {k: cc.convert(k) for k in zh.get("PROMPT_TASKS", {})}
    tone_labels = {
        "专业严谨": "專業嚴謹",
        "通俗易懂": "通俗易懂",
        "创意发散": "創意發散",
        "简洁直接": "簡潔直接",
    }
    tone_labels = {k: cc.convert(v) for k, v in tone_labels.items()}
    data = convert_obj(cc, {
        "appCategories": cat_map(cc, zh.get("APP_CATEGORIES", [])),
        "apps": zh["APPS"],
        "handsOnCategories": cat_map(cc, zh.get("HANDS_ON_CATEGORIES", [])),
        "handsOnUi": build_hands_on_ui(cc),
        "handsOnCases": zh["HANDS_ON_CASES"],
        "practiceCategories": cat_map(cc, zh.get("PRACTICE_CATEGORIES", [])),
        "practiceUi": build_practice_ui(cc),
        "practices": zh["PRACTICES"],
        "promptLab": {
            "cases": zh["PROMPT_CASES"],
            "tasks": zh["PROMPT_TASKS"],
            "taskLabels": task_labels,
            "presets": zh["PROMPT_TASK_PRESETS"],
            "tools": zh["PROMPT_TOOLS"],
            "tones": tone_labels,
            "ui": build_prompt_lab_ui(cc),
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