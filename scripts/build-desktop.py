#!/usr/bin/env python3
"""Bundle BestWayToLearn.AI into a single HTML file on Desktop."""
import base64
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / 'public'
OUT = Path.home() / 'Desktop' / 'BestWayToLearn.AI.html'
LEGACY_OUT = Path.home() / 'Desktop' / 'Synapse AI 学院.html'


def inline_svg(path: str) -> str:
    svg = (PUBLIC / path).read_text(encoding='utf-8')
    return 'data:image/svg+xml;base64,' + base64.b64encode(svg.encode('utf-8')).decode('ascii')


def strip_cache_bust(url: str) -> str:
    return re.sub(r'\?v=[^"\']+', '', url)


html = (PUBLIC / 'index.html').read_text(encoding='utf-8')
css = (PUBLIC / 'css' / 'styles.css').read_text(encoding='utf-8')

css = css.replace("url('../assets/hero-neural.svg')", f"url('{inline_svg('assets/hero-neural.svg')}')")
css = css.replace("url('../assets/roadmap-path.svg')", f"url('{inline_svg('assets/roadmap-path.svg')}')")

script_paths = [
    strip_cache_bust(match.group(1))
    for match in re.finditer(r'<script src="([^"]+\.js[^"]*)"></script>', html)
]
js = '\n\n'.join((PUBLIC / rel).read_text(encoding='utf-8') for rel in script_paths)

css_link = re.search(r'<link rel="stylesheet" href="([^"]+)">', html)
if css_link:
    html = html.replace(css_link.group(0), f'<style>\n{css}\n</style>')

html = re.sub(r'\s*<script src="[^"]+\.js[^"]*"></script>', '', html)
html = html.replace('</body>', f'  <script>\n{js}\n  </script>\n</body>')

OUT.write_text(html, encoding='utf-8')
if LEGACY_OUT.exists():
    LEGACY_OUT.unlink()

print(f'✓ 已生成: {OUT}')
print(f'  大小: {OUT.stat().st_size / 1024:.1f} KB')
if not LEGACY_OUT.exists():
    print('✓ 已移除旧文件: Synapse AI 学院.html')