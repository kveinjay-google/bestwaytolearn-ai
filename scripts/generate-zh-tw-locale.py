#!/usr/bin/env python3
"""Regenerate zh-TW.js from zh-CN.js using OpenCC Taiwan conversion."""
from __future__ import annotations

import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LOCALES = ROOT / "public/js/locales"
ZH_CN = LOCALES / "zh-CN.js"
ZH_TW = LOCALES / "zh-TW.js"

# Keys that should stay identical across locales (brand, language names, etc.)
PRESERVE_EXACT = {
    "brand.name", "brand.logoHtml", "brand.url", "brand.domain", "brand.ariaLabel",
    "settings.langZh", "settings.langZhTW", "settings.langEn", "settings.langKo",
    "settings.langJa", "settings.langFr", "settings.langEs", "settings.langDe",
    "footer.brand", "hero.greeting", "personalization.greeting",
}

# Taiwan-specific overrides after OpenCC
TW_OVERRIDES = {
    "notice.partial": "介面為繁體中文，部分教學內容仍為簡體中文。",
    "notice.partialEn": "",
    "teacher.name": "凱文",
    "user.defaultName": "學員",
    "profile.title": "管理我的暱稱",
    "profile.save": "保存暱稱",
    "profile.clear": "清除暱稱",
    "welcome.namePlaceholder": "輸入暱稱，如：小明",
    "footer.manage": "管理我的暱稱",
    "personalization.headerName": "學員",
}


def load_zh_cn_bundle() -> dict:
    js = ZH_CN.read_text(encoding="utf-8")
    node = r"""
const fs = require('fs');
const vm = require('vm');
const bundles = {};
const I18n = {
  registerLocale(code, bundle) {
    const existing = bundles[code] || { strings: {}, data: {} };
    const { strings, data, ...rest } = bundle || {};
    bundles[code] = {
      strings: strings || existing.strings,
      data: data || rest || existing.data,
    };
  },
};
vm.runInNewContext(fs.readFileSync(process.argv[1], 'utf8'), { I18n });
console.log(JSON.stringify(bundles['zh-CN']));
"""
    out = subprocess.check_output(["node", "-e", node, str(ZH_CN)], text=True)
    return json.loads(out)


def init_opencc():
    try:
        from opencc import OpenCC
    except ImportError:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "-q", "opencc-python-reimplemented"])
        from opencc import OpenCC
    return OpenCC("s2twp")


def flat(obj, prefix=""):
    out = {}
    if isinstance(obj, dict):
        for k, v in obj.items():
            p = f"{prefix}.{k}" if prefix else k
            out.update(flat(v, p))
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            out.update(flat(v, f"{prefix}[{i}]"))
    elif isinstance(obj, str):
        out[prefix] = obj
    return out


def unflatten(flat_map: dict) -> dict:
    root: dict = {}
    for path, value in flat_map.items():
        parts = re.split(r"\.(?![^\[]*\])", path)
        cur = root
        for i, part in enumerate(parts):
            m = re.match(r"^([^\[]+)(?:\[(\d+)\])?$", part)
            if not m:
                raise ValueError(f"Bad path: {path}")
            key, idx = m.group(1), m.group(2)
            last = i == len(parts) - 1
            if idx is None:
                if last:
                    cur[key] = value
                else:
                    cur = cur.setdefault(key, {})
            else:
                arr = cur.setdefault(key, [])
                idx = int(idx)
                while len(arr) <= idx:
                    arr.append(None)
                if last:
                    arr[idx] = value
                else:
                    if arr[idx] is None or not isinstance(arr[idx], dict):
                        arr[idx] = {}
                    cur = arr[idx]
    return root


def convert_value(cc, value: str) -> str:
    if not value or not re.search(r"[\u4e00-\u9fff]", value):
        return value
    return cc.convert(value)


def convert_tree(cc, obj, path="", flat_cn: dict | None = None):
    if isinstance(obj, dict):
        return {k: convert_tree(cc, v, f"{path}.{k}" if path else k, flat_cn) for k, v in obj.items()}
    if isinstance(obj, list):
        return [convert_tree(cc, v, f"{path}[{i}]", flat_cn) for i, v in enumerate(obj)]
    if isinstance(obj, str):
        key = path
        if flat_cn and key in PRESERVE_EXACT and flat_cn.get(key) == obj:
            return obj
        converted = convert_value(cc, obj)
        if key in TW_OVERRIDES:
            return TW_OVERRIDES[key]
        return converted
    return obj


def js_string(s: str, indent: int = 0) -> str:
    return json.dumps(s, ensure_ascii=False)


def render_object(obj, indent: int) -> str:
    pad = " " * indent
    inner_pad = " " * (indent + 2)
    if isinstance(obj, dict):
        if not obj:
            return "{}"
        lines = ["{"]
        items = list(obj.items())
        for i, (k, v) in enumerate(items):
            comma = "," if i < len(items) - 1 else ""
            if re.match(r"^[A-Za-z_$][\w$]*$", k) and "-" not in k and not k[0].isdigit():
                key = k
            else:
                key = json.dumps(k, ensure_ascii=False)
            lines.append(f"{inner_pad}{key}: {render_value(v, indent + 2)}{comma}")
        lines.append(f"{pad}}}")
        return "\n".join(lines)
    if isinstance(obj, list):
        if not obj:
            return "[]"
        lines = ["["]
        for i, v in enumerate(obj):
            comma = "," if i < len(obj) - 1 else ""
            lines.append(f"{inner_pad}{render_value(v, indent + 2)}{comma}")
        lines.append(pad + "]")
        return "\n".join(lines)
    raise TypeError(type(obj))


def render_value(v, indent: int) -> str:
    if isinstance(v, (dict, list)):
        return render_object(v, indent)
    if isinstance(v, str):
        return js_string(v)
    if isinstance(v, bool):
        return "true" if v else "false"
    if v is None:
        return "null"
    return str(v)


def main():
    cc = init_opencc()
    bundle = load_zh_cn_bundle()
    flat_cn = flat(bundle)
    strings = convert_tree(cc, bundle.get("strings", {}), flat_cn=flat_cn)
    data = convert_tree(cc, bundle.get("data", {}))
    content = (
        "I18n.registerLocale('zh-TW', {\n"
        f"  strings: {render_object(strings, 2)},\n"
        f"  data: {render_object(data, 2)},\n"
        "});\n"
    )
    ZH_TW.write_text(content, encoding="utf-8")
    print(f"wrote {ZH_TW.relative_to(ROOT)}")


if __name__ == "__main__":
    main()