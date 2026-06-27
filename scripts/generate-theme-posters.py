#!/usr/bin/env python3
"""Generate theme-matched poster SVGs for all UI color presets."""
from __future__ import annotations

from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'public' / 'assets' / 'posters'

THEMES = {
    'neural': {
        'bg_deep': '#060a10',
        'base': ('#0a0f14', '#111820', '#0d1219'),
        'accent': '#2dd4bf',
        'accent_rgb': '45,212,191',
        'secondary': '#a78bfa',
        'secondary_rgb': '167,139,250',
        'light': False,
    },
    'aurora': {
        'bg_deep': '#070b18',
        'base': ('#070b18', '#0c1228', '#10162e'),
        'accent': '#60a5fa',
        'accent_rgb': '96,165,250',
        'secondary': '#818cf8',
        'secondary_rgb': '129,140,248',
        'light': False,
    },
    'sunrise': {
        'bg_deep': '#faf7f2',
        'base': ('#fffdf9', '#faf7f2', '#ffedd5'),
        'accent': '#ea580c',
        'accent_rgb': '234,88,12',
        'secondary': '#fb923c',
        'secondary_rgb': '251,146,60',
        'light': True,
    },
    'forest': {
        'bg_deep': '#080f0a',
        'base': ('#080f0a', '#0d1610', '#101a13'),
        'accent': '#4ade80',
        'accent_rgb': '74,222,128',
        'secondary': '#34d399',
        'secondary_rgb': '52,211,153',
        'light': False,
    },
    'ink': {
        'bg_deep': '#f1f5f9',
        'base': ('#f8fafc', '#f1f5f9', '#e2e8f0'),
        'accent': '#4f46e5',
        'accent_rgb': '79,70,229',
        'secondary': '#6366f1',
        'secondary_rgb': '99,102,241',
        'light': True,
    },
}

SLOTS = ('hero', 'roadmap', 'learn', 'tools', 'practice', 'monetize', 'devices', 'validate')


def motif(slot: str, t: dict) -> str:
    a = t['accent_rgb']
    ac = t['accent']
    s = t['secondary_rgb']
    sc = t['secondary']
    if slot == 'hero':
        return f'''
  <circle cx="1480" cy="420" r="280" fill="url(#glow)"/>
  <circle cx="1620" cy="560" r="180" fill="url(#glow2)" opacity="0.65"/>
  <circle cx="1380" cy="620" r="120" fill="none" stroke="rgba({a},0.55)" stroke-width="1.2" opacity="0.28"/>
  <ellipse cx="1700" cy="360" rx="200" ry="160" fill="rgba({s},0.12)"/>'''
    if slot == 'roadmap':
        dots = ''.join(
            f'<circle cx="{1280 + i * 72}" cy="500" r="5" fill="{ac}" opacity="0.85"/>'
            for i in range(5)
        )
        return f'''
  <path d="M1260 500 H1680" stroke="rgba({a},0.55)" stroke-width="1" opacity="0.4"/>
  {dots}'''
    if slot == 'learn':
        return f'''
  <circle cx="1500" cy="500" r="220" fill="none" stroke="rgba({a},0.55)" stroke-width="1.5" opacity="0.45"/>
  <circle cx="1500" cy="500" r="140" fill="none" stroke="rgba({a},0.55)" stroke-width="1" opacity="0.28"/>'''
    if slot == 'tools':
        rects = []
        for x, y in ((1360, 420), (1470, 420), (1360, 530), (1470, 530)):
            rects.append(
                f'<rect x="{x}" y="{y}" width="88" height="88" rx="20" fill="none" '
                f'stroke="rgba({a},0.55)" stroke-width="1.2" opacity="0.42"/>'
            )
        return '\n  ' + '\n  '.join(rects)
    if slot == 'practice':
        return f'''
  <path d="M1320 620 A 260 260 0 0 1 1680 380" fill="none" stroke="{sc}" stroke-width="2" opacity="0.35"/>
  <circle cx="1500" cy="500" r="6" fill="{sc}" opacity="0.8"/>'''
    if slot == 'monetize':
        return f'''
  <circle cx="1500" cy="500" r="220" fill="none" stroke="rgba({a},0.55)" stroke-width="1.5" opacity="0.45"/>
  <circle cx="1500" cy="500" r="140" fill="none" stroke="rgba({s},0.55)" stroke-width="1" opacity="0.28"/>'''
    if slot == 'devices':
        return f'''
  <rect x="1380" y="360" width="320" height="220" rx="24" fill="none" stroke="rgba({a},0.55)" stroke-width="1.5" opacity="0.45"/>
  <rect x="1410" y="390" width="260" height="150" rx="8" fill="none" stroke="rgba({a},0.55)" stroke-width="1" opacity="0.25"/>
  <rect x="1500" y="590" width="80" height="8" rx="4" fill="{ac}" opacity="0.25"/>'''
    if slot == 'validate':
        return f'''
  <circle cx="1500" cy="500" r="160" fill="none" stroke="rgba({a},0.55)" stroke-width="1.5" opacity="0.4"/>
  <path d="M1440 505 L1478 545 L1568 445" fill="none" stroke="{ac}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.55"/>'''
    return ''


def build_svg(slot: str, theme_id: str, t: dict) -> str:
    b0, b1, b2 = t['base']
    deep = t['bg_deep']
    a = t['accent_rgb']
    fade_hi = '0.92' if t.get('light') else '0.88'
    fade_mid = '0.42' if t.get('light') else '0.35'
    sheen = '0.06' if t.get('light') else '0.03'
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" role="presentation">
  <defs>
    <linearGradient id="base" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{b0}"/>
      <stop offset="55%" stop-color="{b1}"/>
      <stop offset="100%" stop-color="{b2}"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba({a},0.42)"/>
      <stop offset="70%" stop-color="rgba({a},0.08)"/>
      <stop offset="100%" stop-color="rgba({a},0)"/>
    </radialGradient>
    <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba({a},0.22)"/>
      <stop offset="100%" stop-color="rgba({a},0)"/>
    </radialGradient>
    <linearGradient id="sheen" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="rgba(255,255,255,{sheen})"/>
      <stop offset="45%" stop-color="rgba(255,255,255,0)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,{sheen})"/>
    </linearGradient>
    <linearGradient id="fade" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="{deep}" stop-opacity="{fade_hi}"/>
      <stop offset="65%" stop-color="{deep}" stop-opacity="{fade_mid}"/>
      <stop offset="100%" stop-color="{deep}" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="1920" height="1080" fill="url(#base)"/>
  <rect width="1920" height="1080" fill="url(#sheen)"/>
  <ellipse cx="1560" cy="480" rx="520" ry="380" fill="url(#glow)"/>
{motif(slot, t)}
  <rect x="0" y="0" width="960" height="1080" fill="url(#fade)"/>
</svg>
'''


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    count = 0
    for theme_id, theme in THEMES.items():
        for slot in SLOTS:
            path = OUT / f'poster-{slot}-{theme_id}.svg'
            path.write_text(build_svg(slot, theme_id, theme), encoding='utf-8')
            count += 1
    print(f'✓ 已生成 {count} 张主题海报 → {OUT}')


if __name__ == '__main__':
    main()