#!/usr/bin/env python3
"""生成 Apple 官网风格的极简页面海报（SVG）。"""
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / 'assets' / 'posters'

# accent: (r,g,b), motif hint
POSTERS = {
    'poster-hero': ((45, 212, 191), 'hero-glow'),
    'poster-roadmap': ((45, 212, 191), 'path-dots'),
    'poster-path': ((245, 158, 11), 'timeline'),
    'poster-learn': ((45, 212, 191), 'ring'),
    'poster-tools': ((245, 158, 11), 'tiles'),
    'poster-practice': ((167, 139, 250), 'arc'),
    'poster-monetize': ((245, 158, 11), 'ring'),
    'poster-devices': ((56, 189, 248), 'device'),
    'poster-validate': ((251, 113, 133), 'check'),
}


def motif(name: str, r: int, g: int, b: int) -> str:
    c = f'#{r:02x}{g:02x}{b:02x}'
    soft = f'rgba({r},{g},{b},0.55)'
    if name == 'hero-glow':
        return f'''
  <circle cx="1480" cy="420" r="280" fill="url(#glow)"/>
  <circle cx="1620" cy="560" r="180" fill="url(#glow2)" opacity="0.65"/>
  <circle cx="1380" cy="620" r="120" fill="none" stroke="{soft}" stroke-width="1.2" opacity="0.28"/>
  <ellipse cx="1700" cy="360" rx="200" ry="160" fill="rgba(167,139,250,0.12)"/>'''
    if name == 'path-dots':
        dots = ''.join(
            f'<circle cx="{1280 + i * 72}" cy="500" r="5" fill="{c}" opacity="0.85"/>'
            for i in range(5)
        )
        return f'''
  <path d="M1260 500 H1680" stroke="{soft}" stroke-width="1" opacity="0.4"/>
  {dots}'''
    if name == 'timeline':
        return f'''
  <path d="M1240 520 C1320 380, 1420 640, 1520 460 S1720 540, 1780 480" fill="none" stroke="{soft}" stroke-width="2" opacity="0.5"/>
  <circle cx="1240" cy="520" r="8" fill="{c}" opacity="0.9"/>
  <circle cx="1520" cy="460" r="8" fill="{c}" opacity="0.7"/>
  <circle cx="1780" cy="480" r="8" fill="{c}" opacity="0.5"/>'''
    if name == 'ring':
        return f'''
  <circle cx="1500" cy="500" r="220" fill="none" stroke="{soft}" stroke-width="1.5" opacity="0.45"/>
  <circle cx="1500" cy="500" r="140" fill="none" stroke="{soft}" stroke-width="1" opacity="0.28"/>'''
    if name == 'tiles':
        tiles = []
        for row in range(2):
            for col in range(2):
                x = 1360 + col * 110
                y = 420 + row * 110
                tiles.append(
                    f'<rect x="{x}" y="{y}" width="88" height="88" rx="20" fill="none" stroke="{soft}" stroke-width="1.2" opacity="0.42"/>'
                )
        return '\n  '.join(tiles)
    if name == 'arc':
        return f'''
  <path d="M1320 620 A 260 260 0 0 1 1680 380" fill="none" stroke="{c}" stroke-width="2" opacity="0.35"/>
  <circle cx="1500" cy="500" r="6" fill="{c}" opacity="0.8"/>'''
    if name == 'device':
        return f'''
  <rect x="1380" y="360" width="320" height="220" rx="24" fill="none" stroke="{soft}" stroke-width="1.5" opacity="0.45"/>
  <rect x="1410" y="390" width="260" height="150" rx="8" fill="none" stroke="{soft}" stroke-width="1" opacity="0.25"/>
  <rect x="1500" y="590" width="80" height="8" rx="4" fill="{c}" opacity="0.25"/>'''
    if name == 'check':
        return f'''
  <circle cx="1500" cy="500" r="160" fill="none" stroke="{soft}" stroke-width="1.5" opacity="0.4"/>
  <path d="M1440 505 L1478 545 L1568 445" fill="none" stroke="{c}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.55"/>'''
    return ''


def svg_for(slug: str, rgb: tuple, motif_name: str) -> str:
    r, g, b = rgb
    c = f'#{r:02x}{g:02x}{b:02x}'
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" role="presentation">
  <defs>
    <linearGradient id="base" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0a0c"/>
      <stop offset="55%" stop-color="#111114"/>
      <stop offset="100%" stop-color="#0d0d10"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba({r},{g},{b},0.42)"/>
      <stop offset="70%" stop-color="rgba({r},{g},{b},0.08)"/>
      <stop offset="100%" stop-color="rgba({r},{g},{b},0)"/>
    </radialGradient>
    <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba({r},{g},{b},0.22)"/>
      <stop offset="100%" stop-color="rgba({r},{g},{b},0)"/>
    </radialGradient>
    <linearGradient id="sheen" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.03)"/>
      <stop offset="45%" stop-color="rgba(255,255,255,0)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0.02)"/>
    </linearGradient>
    <linearGradient id="fade" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#060a10" stop-opacity="0.88"/>
      <stop offset="65%" stop-color="#060a10" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#060a10" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="1920" height="1080" fill="url(#base)"/>
  <rect width="1920" height="1080" fill="url(#sheen)"/>
  <ellipse cx="1560" cy="480" rx="520" ry="380" fill="url(#glow)"/>
{motif(motif_name, r, g, b)}
  <rect x="0" y="0" width="960" height="1080" fill="url(#fade)"/>
</svg>
'''


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for slug, (rgb, motif_name) in POSTERS.items():
        path = OUT / f'{slug}.svg'
        path.write_text(svg_for(slug, rgb, motif_name), encoding='utf-8')
        print(f'✓ {path.name}')
    print(f'共 {len(POSTERS)} 张海报')


if __name__ == '__main__':
    main()