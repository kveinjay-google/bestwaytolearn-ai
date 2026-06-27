#!/usr/bin/env python3
"""部署后向搜索引擎提交收录（IndexNow / 百度推送，可选）。

支持全自动：
  - IndexNow → Bing、Yandex、Naver、Seznam 等（共享 api.indexnow.org）
  - 百度主动推送（需在 seo-config.json 填写 baiduPushToken）

无法全自动（需你一次性登录验证）：
  - Google Search Console（Google 已停用匿名 sitemap ping）
  - 必应 / 百度站长平台的手动验证与权限绑定
"""
from __future__ import annotations

import json
import ssl
import sys
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONFIG_PATH = Path(__file__).resolve().parent / 'seo-config.json'
USER_AGENT = 'BestWayToLearn.AI-SEO-Submit/1.0'


def load_config() -> dict:
    if not CONFIG_PATH.exists():
        raise FileNotFoundError(f'缺少配置: {CONFIG_PATH}')
    return json.loads(CONFIG_PATH.read_text(encoding='utf-8'))


def http_request(url: str, *, method: str = 'GET', data: bytes | None = None, headers: dict | None = None, timeout: float = 20.0) -> tuple[int, str]:
    req = urllib.request.Request(url, data=data, method=method, headers={
        'User-Agent': USER_AGENT,
        **(headers or {}),
    })
    ctx = ssl.create_default_context()
    try:
        with urllib.request.urlopen(req, timeout=timeout, context=ctx) as resp:
            body = resp.read().decode('utf-8', errors='replace')
            return resp.status, body[:500]
    except urllib.error.HTTPError as exc:
        body = exc.read().decode('utf-8', errors='replace')
        return exc.code, body[:500]


def check_prerequisites(cfg: dict) -> list[str]:
    host = cfg['siteHost']
    key = cfg['indexNowKey']
    key_url = f"https://{host}/{key}.txt"
    issues: list[str] = []
    for label, url in [
        ('首页', cfg['siteUrl']),
        ('IndexNow 密钥', key_url),
        ('Sitemap', cfg['sitemapUrl']),
        ('robots.txt', f"https://{host}/robots.txt"),
    ]:
        status, _ = http_request(url)
        if status != 200:
            issues.append(f'{label} 不可达 ({status}): {url}')
    return issues


def submit_indexnow(cfg: dict) -> tuple[bool, str]:
    host = cfg['siteHost']
    key = cfg['indexNowKey']
    payload = json.dumps({
        'host': host,
        'key': key,
        'keyLocation': f'https://{host}/{key}.txt',
        'urlList': cfg.get('urls') or [cfg['siteUrl']],
    }).encode('utf-8')
    endpoints = [
        'https://api.indexnow.org/indexnow',
        'https://www.bing.com/indexnow',
    ]
    messages: list[str] = []
    ok_any = False
    for endpoint in endpoints:
        status, body = http_request(
            endpoint,
            method='POST',
            data=payload,
            headers={'Content-Type': 'application/json; charset=utf-8'},
        )
        success = status in (200, 202)
        ok_any = ok_any or success
        messages.append(f'  {endpoint} → HTTP {status}' + (f' ({body.strip()})' if body.strip() else ''))
    return ok_any, '\n'.join(messages)


def submit_baidu(cfg: dict) -> tuple[bool, str]:
    token = (cfg.get('baiduPushToken') or '').strip()
    if not token:
        return False, '  跳过（未配置 baiduPushToken）'
    site = cfg.get('baiduSite') or cfg['siteHost']
    urls = cfg.get('urls') or [cfg['siteUrl']]
    body = '\n'.join(urls).encode('utf-8')
    q = urllib.parse.urlencode({'site': site, 'token': token})
    url = f'http://data.zz.baidu.com/push?{q}'
    status, resp = http_request(url, method='POST', data=body, headers={'Content-Type': 'text/plain'})
    success = status == 200 and 'success' in resp
    return success, f'  百度推送 → HTTP {status}: {resp.strip()}'


def print_manual_steps(cfg: dict) -> None:
    host = cfg['siteHost']
    sitemap = cfg['sitemapUrl']
    print('\n── 需你手动完成的一次性设置（无法代你登录 Google/百度账号）──')
    print(f'1. Google Search Console: https://search.google.com/search-console')
    print(f'   添加资源 https://{host}/ → DNS 验证 → 提交 Sitemap: {sitemap}')
    print(f'2. Bing Webmaster: https://www.bing.com/webmasters')
    print(f'   导入 Google 配置或手动添加站点 → 提交同一 Sitemap')
    print(f'3. 百度搜索资源平台: https://ziyuan.baidu.com/')
    print(f'   验证站点后，在「普通收录」获取推送 token，填入 scripts/seo-config.json 的 baiduPushToken')
    print('   之后每次部署运行本脚本即可自动百度推送。')


def main() -> int:
    cfg = load_config()
    print(f'站点: {cfg["siteUrl"]}')
    print('检查收录前置文件 …')
    issues = check_prerequisites(cfg)
    if issues:
        print('⚠ 以下检查未通过（若域名刚改 DNS，可稍后再试）:')
        for item in issues:
            print(f'  - {item}')
    else:
        print('✓ 前置文件均可访问')

    print('\n提交 IndexNow（Bing / Yandex / Naver 等）…')
    ok_in, msg_in = submit_indexnow(cfg)
    print(msg_in)
    print('✓ IndexNow 已提交' if ok_in else '✗ IndexNow 提交失败')

    print('\n百度主动推送 …')
    ok_bd, msg_bd = submit_baidu(cfg)
    print(msg_bd)
    if cfg.get('baiduPushToken'):
        print('✓ 百度推送成功' if ok_bd else '✗ 百度推送失败')

    print_manual_steps(cfg)
    return 0 if ok_in else 1


if __name__ == '__main__':
    sys.exit(main())