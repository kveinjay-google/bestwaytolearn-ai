#!/usr/bin/env python3
"""Build {locale}-prompt-examples.js from zh source (zh-TW) or en overlay (others)."""
from __future__ import annotations

import json
import re
import subprocess
import sys
import threading
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LOCALES_DIR = ROOT / "public/js/locales"
CACHE_LOCK = threading.Lock()

TARGET = {"ko": "ko", "ja": "ja", "fr": "fr", "es": "es", "de": "de"}


def load_zh_examples() -> dict:
    node = r"""
const fs=require('fs');const vm=require('vm');
const ctx={PROMPT_EXAMPLES:null,PROMPT_EXAMPLE_CATEGORIES:null};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(process.argv[1],'utf8')+`
;(function(g){g.PROMPT_EXAMPLES=PROMPT_EXAMPLES;g.PROMPT_EXAMPLE_CATEGORIES=PROMPT_EXAMPLE_CATEGORIES;})(this);`,ctx);
console.log(JSON.stringify({
  examples: ctx.PROMPT_EXAMPLES,
  categories: ctx.PROMPT_EXAMPLE_CATEGORIES,
  ui: {
    countShown: '显示 {visible} / {total} 个',
    emptyHint: '该分类下暂无范例，试试其他标签。',
    structureLabel: '提示词结构',
    scenarioLabel: '适用场景',
    tipsLabel: '使用建议',
    copyLabel: '复制提示词',
    frameworkHint: '结构化提示词建议包含：角色 → 任务 → 背景 → 格式 → 约束（RTFC）。将 [占位符] 替换为你的真实信息。',
  }
}));
"""
    out = subprocess.check_output(["node", "-e", node, str(ROOT / "public/js/prompt-examples.js")], text=True)
    return json.loads(out)


def load_en_payload() -> dict:
    node = r"""
const fs=require('fs');const vm=require('vm');
let payload=null;
const I18n={mergeLocaleData:(l,d)=>{payload=d;}};
vm.runInContext(fs.readFileSync(process.argv[1],'utf8'),vm.createContext({I18n,console}));
console.log(JSON.stringify(payload));
"""
    out = subprocess.check_output(
        ["node", "-e", node, str(LOCALES_DIR / "en-prompt-examples.js")],
        text=True,
    )
    return json.loads(out)


def init_opencc():
    try:
        from opencc import OpenCC
    except ImportError:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "-q", "opencc-python-reimplemented"])
        from opencc import OpenCC
    return OpenCC("s2twp")


def convert_obj(cc, obj):
    if isinstance(obj, str):
        return cc.convert(obj) if re.search(r"[\u4e00-\u9fff]", obj) else obj
    if isinstance(obj, list):
        return [convert_obj(cc, v) for v in obj]
    if isinstance(obj, dict):
        return {k: convert_obj(cc, v) for k, v in obj.items()}
    return obj


def build_zh_tw(cc) -> dict:
    zh = load_zh_examples()
    cats = {k: cc.convert(k) if k != "全部" else "全部" for k in zh["categories"]}
    cat_labels = {
        "全部": "全部",
        "对话助手": "對話助手",
        "编程开发": "程式設計開發",
        "图像创作": "圖像創作",
        "视频音频": "影片音訊",
        "办公效率": "辦公效率",
        "Agent 自动化": "Agent 自動化",
        "搜索研究": "搜尋研究",
    }
    categories = {k: cat_labels.get(k, cc.convert(k)) for k in zh["categories"]}
    diff = {"入门": "入門", "进阶": "進階"}
    examples = []
    for item in zh["examples"]:
        ex = convert_obj(cc, item)
        if item.get("difficulty") in diff:
            ex["difficulty"] = diff[item["difficulty"]]
        examples.append(ex)
    ui = convert_obj(cc, zh["ui"])
    return {"promptExampleCategories": categories, "promptExamplesUi": ui, "promptExamples": examples}


def init_translator(lang: str):
    from deep_translator import GoogleTranslator
    return GoogleTranslator(source="en", target=lang)


def collect_strings(obj, out: dict | None = None) -> dict[str, str]:
    if out is None:
        out = {}
    if isinstance(obj, str):
        if re.search(r"[A-Za-z]", obj):
            out.setdefault(obj, obj)
    elif isinstance(obj, list):
        for v in obj:
            collect_strings(v, out)
    elif isinstance(obj, dict):
        for v in obj.values():
            collect_strings(v, out)
    return out


def apply_map(obj, mapping: dict):
    if isinstance(obj, str):
        return mapping.get(obj, obj)
    if isinstance(obj, list):
        return [apply_map(v, mapping) for v in obj]
    if isinstance(obj, dict):
        return {k: apply_map(v, mapping) for k, v in obj.items()}
    return obj


def translate_payload(gt, payload: dict, cache: dict) -> dict:
    out = json.loads(json.dumps(payload))
    strings = collect_strings(out)
    pending = [s for s in strings if s not in cache]
    for i, text in enumerate(pending):
        for attempt in range(4):
            try:
                with CACHE_LOCK:
                    if text in cache:
                        break
                result = gt.translate(text)
                with CACHE_LOCK:
                    cache[text] = result
                break
            except Exception:
                time.sleep(2 ** attempt)
        else:
            with CACHE_LOCK:
                cache[text] = text
        if (i + 1) % 20 == 0:
            print(f"    {i+1}/{len(pending)}", flush=True)
    return apply_map(out, cache)


def write_locale(locale: str, payload: dict):
    path = LOCALES_DIR / f"{locale}-prompt-examples.js"
    body = (
        f"/* {locale.upper()} overlays — prompt examples */\n"
        "(function () {\n"
        "  if (typeof I18n === 'undefined') return;\n"
        f"  I18n.mergeLocaleData('{locale}', {json.dumps(payload, ensure_ascii=False, indent=2)});\n"
        "})();\n"
    )
    path.write_text(body, encoding="utf-8")
    print(f"wrote {path.name}", flush=True)


def main():
    locales = sys.argv[1:] if len(sys.argv) > 1 else ["zh-TW", *TARGET.keys()]
    if "zh-TW" in locales:
        cc = init_opencc()
        write_locale("zh-TW", build_zh_tw(cc))

    en_payload = load_en_payload()
    cache_file = ROOT / "scripts/locale-modules/prompt-examples-en-cache.json"
    cache = json.loads(cache_file.read_text(encoding="utf-8")) if cache_file.exists() else {}

    for loc in locales:
        if loc not in TARGET:
            continue
        print(f"== {loc} ==", flush=True)
        gt = init_translator(TARGET[loc])
        translated = translate_payload(gt, en_payload, cache)
        write_locale(loc, translated)

    cache_file.parent.mkdir(parents=True, exist_ok=True)
    cache_file.write_text(json.dumps(cache, ensure_ascii=False), encoding="utf-8")


if __name__ == "__main__":
    main()