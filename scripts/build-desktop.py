#!/usr/bin/env python3
"""Bundle Synapse AI 学院 into a single HTML file on Desktop."""
import base64
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / 'public'
OUT = Path.home() / 'Desktop' / 'BestWayToLearn.AI.html'

html = (PUBLIC / 'index.html').read_text(encoding='utf-8')
css = (PUBLIC / 'css' / 'styles.css').read_text(encoding='utf-8')

def inline_svg(path: str) -> str:
    svg = (PUBLIC / path).read_text(encoding='utf-8')
    return 'data:image/svg+xml;base64,' + base64.b64encode(svg.encode('utf-8')).decode('ascii')

css = css.replace("url('../assets/hero-neural.svg')", f"url('{inline_svg('assets/hero-neural.svg')}')")
css = css.replace("url('../assets/roadmap-path.svg')", f"url('{inline_svg('assets/roadmap-path.svg')}')")
js = '\n'.join([
    (PUBLIC / 'js' / 'data.js').read_text(encoding='utf-8'),
    (PUBLIC / 'js' / 'terms.js').read_text(encoding='utf-8'),
    (PUBLIC / 'js' / 'app.js').read_text(encoding='utf-8'),
])

html = html.replace('  <link rel="stylesheet" href="css/styles.css">\n', f'  <style>\n{css}\n  </style>\n')
html = html.replace(
    '  <script src="js/data.js"></script>\n  <script src="js/terms.js"></script>\n  <script src="js/app.js"></script>\n',
    f'  <script>\n{js}\n  </script>\n'
)

OUT.write_text(html, encoding='utf-8')
print(f'✓ 已生成: {OUT}')
print(f'  大小: {OUT.stat().st_size / 1024:.1f} KB')