#!/usr/bin/env python3
"""Generate themed PNG icons for BestWayToLearn.AI (replaces emoji in UI)."""
from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'public' / 'assets' / 'icons'
SIZE = 256

BG = (6, 10, 16)
GRID = (20, 45, 65, 40)
TEAL = (34, 211, 238)
VIOLET = (167, 139, 250)
AMBER = (251, 191, 36)
ROSE = (251, 113, 133)
WHITE = (235, 245, 255)


def lerp(a: float, b: float, t: float) -> float:
    return a + (b - a) * t


def mix(c1: tuple[int, int, int], c2: tuple[int, int, int], t: float) -> tuple[int, int, int]:
    return tuple(int(lerp(a, b, t)) for a, b in zip(c1, c2))


def glow_layer(draw: ImageDraw.ImageDraw, fn, color: tuple[int, int, int], blur: int = 14, alpha: int = 180):
    layer = Image.new('RGBA', (SIZE, SIZE), (0, 0, 0, 0))
    ld = ImageDraw.Draw(layer)
    fn(ld, (*color, alpha))
    return layer.filter(ImageFilter.GaussianBlur(blur))


def base_canvas(accent: tuple[int, int, int]) -> Image.Image:
    img = Image.new('RGBA', (SIZE, SIZE), (*BG, 255))
    draw = ImageDraw.Draw(img)
    cx, cy = SIZE // 2, SIZE // 2
    for r in range(SIZE // 2, 0, -4):
        t = 1 - r / (SIZE // 2)
        col = mix(BG, accent, t * 0.22)
        draw.ellipse((cx - r, cy - r, cx + r, cy + r), fill=(*col, 255))
    for i in range(0, SIZE, 32):
        draw.line((i, SIZE - 8, SIZE, i - SIZE + 8), fill=GRID, width=1)
    for i in range(0, SIZE, 48):
        draw.ellipse((i, i + 20, i + 3, i + 23), fill=(*TEAL, 90))
    return img


def compose(base: Image.Image, *layers: Image.Image) -> Image.Image:
    out = base.copy()
    for layer in layers:
        out = Image.alpha_composite(out, layer)
    return out


def save_icon(slug: str, accent: tuple[int, int, int], draw_fn):
    base = base_canvas(accent).convert('RGBA')
    solid = Image.new('RGBA', (SIZE, SIZE), (0, 0, 0, 0))
    sd = ImageDraw.Draw(solid)
    draw_fn(sd, (*accent, 255), (*WHITE, 240))
    glow = glow_layer(sd, lambda d, c: draw_fn(d, c, (*WHITE, 220)), accent)
    icon = compose(base, glow, solid)
    path = OUT / f'{slug}.png'
    icon.save(path, 'PNG', optimize=True)
    print(f'  {path.name}')


# --- draw helpers ---
def chat_bubble(d, accent, white, s=1.0):
    cx, cy = SIZE // 2, SIZE // 2 - 6
    w, h = int(92 * s), int(68 * s)
    d.rounded_rectangle((cx - w, cy - h, cx + w, cy + h), radius=22, fill=accent)
    d.polygon([(cx - 18, cy + h), (cx - 42, cy + h + 34), (cx + 8, cy + h)], fill=accent)
    for y in range(-20, 30, 16):
        d.rounded_rectangle((cx - 56, cy + y - 4, cx + 56, cy + y + 4), radius=4, fill=white)


def globe(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.ellipse((cx - 78, cy - 78, cx + 78, cy + 78), outline=accent, width=6)
    d.ellipse((cx - 78, cy - 78, cx + 78, cy + 78), outline=white, width=2)
    for deg in range(-60, 61, 30):
        rad = math.radians(deg)
        x = int(math.sin(rad) * 70)
        d.arc((cx - 70 + x, cy - 78, cx + 70 + x, cy + 78), 200, 340, fill=white, width=3)
    d.line((cx - 78, cy, cx + 78, cy), fill=white, width=3)
    d.line((cx, cy - 78, cx, cy + 78), fill=white, width=3)


def bolt(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.polygon([(cx + 8, cy - 72), (cx - 34, cy + 6), (cx + 4, cy + 6), (cx - 16, cy + 74), (cx + 42, cy - 10), (cx + 2, cy - 10)], fill=accent)
    d.polygon([(cx + 8, cy - 68), (cx - 28, cy + 6), (cx + 8, cy + 6), (cx - 10, cy + 66), (cx + 36, cy - 10), (cx + 6, cy - 10)], fill=white)


def toolbox(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2 + 8
    d.rounded_rectangle((cx - 82, cy - 48, cx + 82, cy + 58), radius=14, fill=accent)
    d.rectangle((cx - 30, cy - 68, cx + 30, cy - 48), fill=white)
    d.rectangle((cx - 62, cy - 12, cx + 62, cy + 8), fill=white)


def city(d, accent, white):
    cx, base = SIZE // 2, SIZE // 2 + 36
    rects = [(-70, 70, -38, 20), (-34, 86, -4, 5), (2, 76, 34, 25), (38, 86, 70, 10)]
    for x1, yb, x2, yt in rects:
        d.rectangle((cx + x1, base - yb, cx + x2, base - yt), fill=accent)
        top = base - yt
        for row in range(4):
            for col in range(2):
                d.rectangle((cx + x1 + 8 + col * 14, top + 8 + row * 14, cx + x1 + 18 + col * 14, top + 16 + row * 14), fill=white)


def telescope(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.rectangle((cx - 88, cy + 42, cx + 88, cy + 54), fill=white)
    d.polygon([(cx - 70, cy + 42), (cx + 10, cy - 50), (cx + 46, cy - 36), (cx - 34, cy + 42)], fill=accent)
    d.ellipse((cx + 30, cy - 62, cx + 74, cy - 18), fill=white)


def brain(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.ellipse((cx - 62, cy - 52, cx + 10, cy + 52), fill=accent)
    d.ellipse((cx - 10, cy - 52, cx + 62, cy + 52), fill=accent)
    for i in range(-30, 40, 20):
        d.arc((cx - 50, cy - 40 + i, cx + 50, cy + 40 + i), 30, 210, fill=white, width=3)


def chart(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2 + 30
    bars = [(-52, -30), (-20, -55), (12, -20), (44, -68)]
    for x, h in bars:
        d.rectangle((cx + x, cy + h, cx + x + 22, cy), fill=accent)
        d.rectangle((cx + x + 4, cy + h + 6, cx + x + 18, cy), fill=white)


def microscope(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.rectangle((cx - 6, cy - 60, cx + 6, cy + 50), fill=white)
    d.ellipse((cx - 34, cy + 34, cx + 34, cy + 72), fill=accent)
    d.arc((cx - 40, cy - 70, cx + 40, cy + 10), 200, 340, fill=accent, width=8)


def link_chain(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.ellipse((cx - 70, cy - 24, cx - 18, cy + 28), outline=accent, width=10)
    d.ellipse((cx + 18, cy - 28, cx + 70, cy + 24), outline=white, width=8)


def target(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    for r, col in [(68, accent), (46, white), (24, accent), (8, white)]:
        d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=col)


def palette(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.ellipse((cx - 72, cy - 56, cx + 72, cy + 72), fill=accent)
    d.ellipse((cx + 40, cy - 20, cx + 64, cy + 4), fill=BG)
    for dx, dy, col in [(-30, -18, WHITE), (8, -34, AMBER), (34, 0, ROSE), (-8, 22, TEAL)]:
        d.ellipse((cx + dx - 10, cy + dy - 10, cx + dx + 10, cy + dy + 10), fill=col)


def music_note(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.ellipse((cx - 52, cy + 18, cx - 18, cy + 52), fill=accent)
    d.rectangle((cx - 22, cy - 58, cx - 10, cy + 34), fill=white)
    d.polygon([(cx - 10, cy - 58), (cx + 44, cy - 38), (cx + 44, cy - 26), (cx - 10, cy - 46)], fill=accent)


def clipboard(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.rounded_rectangle((cx - 58, cy - 70, cx + 58, cy + 74), radius=12, fill=accent)
    d.rounded_rectangle((cx - 24, cy - 82, cx + 24, cy - 62), radius=6, fill=white)
    for y in range(-40, 44, 18):
        d.line((cx - 36, cy + y, cx + 36, cy + y), fill=white, width=4)


def search_lens(d, accent, white):
    cx, cy = SIZE // 2 - 8, SIZE // 2 - 8
    d.ellipse((cx - 50, cy - 50, cx + 50, cy + 50), outline=accent, width=10)
    d.line((cx + 36, cy + 36, cx + 72, cy + 72), fill=white, width=12)


def hospital(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.rectangle((cx - 64, cy - 50, cx + 64, cy + 66), fill=accent)
    d.rectangle((cx - 18, cy - 18, cx + 18, cy + 18), fill=white)
    d.rectangle((cx - 6, cy - 34, cx + 6, cy + 34), fill=white)
    d.rectangle((cx - 34, cy - 6, cx + 34, cy + 6), fill=white)


def graduation(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.polygon([(cx - 80, cy), (cx, cy - 40), (cx + 80, cy), (cx, cy + 40)], fill=accent)
    d.rectangle((cx - 8, cy - 70, cx + 8, cy - 40), fill=white)
    d.polygon([(cx + 70, cy + 4), (cx + 70, cy + 44), (cx + 92, cy + 54), (cx + 92, cy + 14)], fill=white)


def coin(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.ellipse((cx - 60, cy - 60, cx + 60, cy + 60), fill=accent)
    d.rectangle((cx - 10, cy - 22, cx + 10, cy + 22), fill=white)
    d.rectangle((cx - 4, cy - 28, cx + 4, cy + 28), fill=white)


def cart(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.polygon([(cx - 70, cy - 20), (cx + 50, cy - 20), (cx + 36, cy + 40), (cx - 56, cy + 40)], fill=accent)
    d.ellipse((cx - 44, cy + 44, cx - 24, cy + 64), fill=white)
    d.ellipse((cx + 16, cy + 44, cx + 36, cy + 64), fill=white)


def factory(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.rectangle((cx - 76, cy - 10, cx + 76, cy + 66), fill=accent)
    d.polygon([(cx - 40, cy - 10), (cx - 20, cy - 54), (cx, cy - 10)], fill=white)
    d.polygon([(cx + 10, cy - 10), (cx + 34, cy - 62), (cx + 58, cy - 10)], fill=white)


def clapper(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.rectangle((cx - 70, cy + 10, cx + 70, cy + 54), fill=accent)
    d.polygon([(cx - 70, cy + 10), (cx - 30, cy - 50), (cx + 10, cy + 10)], fill=white)
    d.polygon([(cx - 10, cy + 10), (cx + 30, cy - 50), (cx + 70, cy + 10)], fill=accent)


def scales(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.rectangle((cx - 6, cy - 60, cx + 6, cy + 50), fill=white)
    d.line((cx - 70, cy - 30, cx + 70, cy - 30), fill=accent, width=8)
    d.ellipse((cx - 78, cy - 10, cx - 34, cy + 34), fill=accent)
    d.ellipse((cx + 34, cy - 10, cx + 78, cy + 34), fill=white)


def car(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.rounded_rectangle((cx - 78, cy - 10, cx + 78, cy + 40), radius=16, fill=accent)
    d.polygon([(cx - 40, cy - 10), (cx - 18, cy - 44), (cx + 30, cy - 44), (cx + 50, cy - 10)], fill=white)
    d.ellipse((cx - 58, cy + 30, cx - 34, cy + 54), fill=BG)
    d.ellipse((cx + 34, cy + 30, cx + 58, cy + 54), fill=BG)


def house(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.polygon([(cx, cy - 68), (cx - 76, cy + 4), (cx + 76, cy + 4)], fill=accent)
    d.rectangle((cx - 52, cy + 4, cx + 52, cy + 68), fill=white)
    d.rectangle((cx - 14, cy + 28, cx + 14, cy + 68), fill=accent)


def briefcase(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.rounded_rectangle((cx - 70, cy - 30, cx + 70, cy + 58), radius=12, fill=accent)
    d.rectangle((cx - 26, cy - 54, cx + 26, cy - 30), fill=white)
    d.rectangle((cx - 12, cy - 8, cx + 12, cy + 12), fill=white)


def earth(d, accent, white):
    globe(d, accent, white)
    d.ellipse((cx := SIZE // 2, cy := SIZE // 2, cx + 1, cy + 1), fill=accent)  # anchor


def masks(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.ellipse((cx - 72, cy - 40, cx - 8, cy + 40), fill=accent)
    d.ellipse((cx + 8, cy - 40, cx + 72, cy + 40), fill=white)


def sparkles(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    for dx, dy, s in [(0, -20, 1.2), (-40, 20, 0.8), (42, 16, 0.9)]:
        x, y = cx + dx, cy + dy
        d.polygon([(x, y - int(24 * s)), (x + int(6 * s), y), (x, y + int(24 * s)), (x - int(6 * s), y)], fill=accent if dx == 0 else white)


def memo(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.rounded_rectangle((cx - 58, cy - 74, cx + 58, cy + 74), radius=10, fill=white)
    d.rectangle((cx - 58, cy - 74, cx + 58, cy - 46), fill=accent)
    for y in range(-20, 50, 16):
        d.line((cx - 40, cy + y, cx + 40, cy + y), fill=accent, width=3)


def moon(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.ellipse((cx - 60, cy - 60, cx + 60, cy + 60), fill=accent)
    d.ellipse((cx - 20, cy - 70, cx + 80, cy + 50), fill=BG)


def coder(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.rounded_rectangle((cx - 78, cy - 52, cx + 78, cy + 52), radius=14, fill=accent)
    d.polygon([(cx - 30, cy - 6), (cx - 50, cy + 14), (cx - 30, cy + 34), (cx - 10, cy + 14)], fill=white)
    d.polygon([(cx + 10, cy - 6), (cx + 30, cy + 14), (cx + 10, cy + 34), (cx - 10, cy + 14)], fill=white)


def surf(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.arc((cx - 80, cy - 10, cx + 80, cy + 70), 200, 340, fill=accent, width=10)
    d.polygon([(cx - 10, cy - 60), (cx + 50, cy + 30), (cx - 30, cy + 30)], fill=white)


def frame(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.rectangle((cx - 70, cy - 54, cx + 70, cy + 54), outline=accent, width=10)
    d.rectangle((cx - 48, cy - 32, cx + 48, cy + 32), fill=white)
    d.polygon([(cx + 20, cy + 10), (cx + 60, cy + 50), (cx + 20, cy + 50)], fill=accent)


def swirl(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    for i, col in enumerate([accent, white, accent]):
        r = 62 - i * 16
        d.arc((cx - r, cy - r, cx + r, cy + r), 20, 300, fill=col, width=8)


def camera(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.rounded_rectangle((cx - 74, cy - 36, cx + 74, cy + 44), radius=12, fill=accent)
    d.ellipse((cx - 30, cy - 16, cx + 30, cy + 26), fill=BG)
    d.ellipse((cx - 22, cy - 8, cx + 22, cy + 18), fill=white)
    d.rectangle((cx - 16, cy - 52, cx + 16, cy - 36), fill=white)


def notebook(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.rounded_rectangle((cx - 54, cy - 74, cx + 54, cy + 74), radius=8, fill=white)
    d.rectangle((cx - 54, cy - 74, cx - 34, cy + 74), fill=accent)
    for y in range(-50, 56, 16):
        d.line((cx - 20, cy + y, cx + 36, cy + y), fill=accent, width=3)


def mic(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.rounded_rectangle((cx - 22, cy - 60, cx + 22, cy + 10), radius=18, fill=accent)
    d.arc((cx - 40, cy - 20, cx + 40, cy + 50), 0, 180, fill=white, width=8)
    d.line((cx, cy + 50, cx, cy + 68), fill=white, width=8)


def fish(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.ellipse((cx - 50, cy - 28, cx + 40, cy + 28), fill=accent)
    d.polygon([(cx + 40, cy), (cx + 78, cy - 30), (cx + 78, cy + 30)], fill=white)
    d.ellipse((cx - 24, cy - 8, cx - 8, cy + 8), fill=white)


def lobster(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.ellipse((cx - 40, cy - 30, cx + 40, cy + 30), fill=accent)
    d.line((cx - 60, cy - 40, cx - 90, cy - 70), fill=white, width=8)
    d.line((cx + 60, cy - 40, cx + 90, cy - 70), fill=white, width=8)


def beans(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    for dx, dy in [(-24, -10), (10, 14), (-8, 30)]:
        d.ellipse((cx + dx - 18, cy + dy - 26, cx + dx + 18, cy + dy + 26), fill=accent if dx < 0 else white)


def xlogo(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.rounded_rectangle((cx - 58, cy - 58, cx + 58, cy + 58), radius=16, fill=accent)
    d.line((cx - 28, cy - 28, cx + 28, cy + 28), fill=white, width=14)
    d.line((cx + 28, cy - 28, cx - 28, cy + 28), fill=white, width=14)


def wave(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    for i in range(3):
        y = cy - 20 + i * 22
        d.arc((cx - 70 + i * 8, y - 20, cx + 70 - i * 8, y + 20), 0, 180, fill=accent if i % 2 == 0 else white, width=8)


def filmstrip(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.rectangle((cx - 74, cy - 48, cx + 74, cy + 48), fill=accent)
    for y in range(-40, 44, 20):
        d.rectangle((cx - 74, cy + y - 4, cx - 58, cy + y + 4), fill=white)
        d.rectangle((cx + 58, cy + y - 4, cx + 74, cy + y + 4), fill=white)
    d.rectangle((cx - 46, cy - 28, cx + 46, cy + 28), fill=BG)


def window_pane(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.rectangle((cx - 64, cy - 64, cx + 64, cy + 64), fill=accent)
    d.line((cx, cy - 64, cx, cy + 64), fill=white, width=6)
    d.line((cx - 64, cy, cx + 64, cy), fill=white, width=6)


def bug(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.ellipse((cx - 34, cy - 44, cx + 34, cy + 44), fill=accent)
    for i in range(-40, 50, 26):
        d.line((cx - 34, cy + i, cx - 70, cy + i - 16), fill=white, width=5)
        d.line((cx + 34, cy + i, cx + 70, cy + i - 16), fill=white, width=5)


def coffee(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.rounded_rectangle((cx - 44, cy - 40, cx + 44, cy + 50), radius=10, fill=accent)
    d.arc((cx + 44, cy - 20, cx + 74, cy + 20), 270, 90, fill=white, width=6)
    d.arc((cx - 30, cy - 70, cx + 30, cy - 30), 200, 340, fill=white, width=6)


def speaker(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.polygon([(cx - 50, cy - 24), (cx - 18, cy - 24), (cx + 10, cy - 50), (cx + 10, cy + 50), (cx - 18, cy + 24), (cx - 50, cy + 24)], fill=accent)
    for r in [22, 38, 54]:
        d.arc((cx + 8, cy - r, cx + 8 + r * 2, cy + r), 300, 60, fill=white, width=5)


def cards_view(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.rounded_rectangle((cx - 50, cy - 60, cx + 30, cy + 20), radius=8, fill=accent)
    d.rounded_rectangle((cx - 20, cy - 40, cx + 60, cy + 40), radius=8, fill=white)


def book(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.rectangle((cx - 60, cy - 70, cx + 10, cy + 70), fill=accent)
    d.rectangle((cx + 10, cy - 70, cx + 60, cy + 70), fill=white)
    d.line((cx + 10, cy - 70, cx + 10, cy + 70), fill=BG, width=4)


def rocket(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.polygon([(cx, cy - 72), (cx + 28, cy + 20), (cx, cy + 6), (cx - 28, cy + 20)], fill=accent)
    d.ellipse((cx - 18, cy - 40, cx + 18, cy - 4), fill=white)
    d.polygon([(cx - 28, cy + 20), (cx - 50, cy + 60), (cx - 10, cy + 30)], fill=white)
    d.polygon([(cx + 28, cy + 20), (cx + 50, cy + 60), (cx + 10, cy + 30)], fill=white)


def synapse_star(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    pts = []
    for i in range(8):
        ang = math.radians(i * 45 - 90)
        r = 56 if i % 2 == 0 else 22
        pts.append((cx + math.cos(ang) * r, cy + math.sin(ang) * r))
    d.polygon(pts, fill=accent)


def synapse_diamond(d, accent, white):
    cx, cy = SIZE // 2, SIZE // 2
    d.polygon([(cx, cy - 62), (cx + 48, cy), (cx, cy + 62), (cx - 48, cy)], fill=accent)
    d.polygon([(cx, cy - 38), (cx + 28, cy), (cx, cy + 38), (cx - 28, cy)], fill=white)


def bwtl_mark(d, accent, white):
    """BestWayToLearn.AI logo — ascending learning path to AI mastery."""
    cx, cy = SIZE // 2, SIZE // 2
    d.rounded_rectangle((cx - 86, cy - 86, cx + 86, cy + 86), radius=26, outline=accent, width=5)
    nodes = [(cx - 46, cy + 36, 15), (cx - 4, cy + 2, 17), (cx + 44, cy - 38, 21)]
    d.line((*nodes[0][:2], *nodes[1][:2]), fill=white, width=11)
    d.line((*nodes[1][:2], *nodes[2][:2]), fill=white, width=11)
    for nx, ny, r in nodes[:2]:
        d.ellipse((nx - r, ny - r, nx + r, ny + r), fill=accent)
        d.ellipse((nx - r + 5, ny - r + 5, nx + r - 5, ny + r - 5), fill=white)
    nx, ny, r = nodes[2]
    d.ellipse((nx - r - 4, ny - r - 4, nx + r + 4, ny + r + 4), fill=(*AMBER, 255))
    d.ellipse((nx - r, ny - r, nx + r, ny + r), fill=white)
    d.ellipse((nx + 26, ny - 16, nx + 34, ny - 8), fill=accent)


def bwtl_favicon(d, accent, white):
    """Simplified ascending path — readable at 16–32px favicon sizes."""
    cx, cy = SIZE // 2, SIZE // 2 + 6
    pts = [(cx - 54, cy + 42), (cx - 2, cy - 2), (cx + 50, cy - 46)]
    d.line((*pts[0], *pts[1]), fill=accent, width=20)
    d.line((*pts[1], *pts[2]), fill=accent, width=20)
    for i, (px, py) in enumerate(pts):
        r = 24 if i == 2 else 17
        fill = AMBER if i == 2 else accent
        d.ellipse((px - r, py - r, px + r, py + r), fill=fill)
        if i < 2:
            d.ellipse((px - 9, py - 9, px + 9, py + 9), fill=white)


ICON_RECIPES = {
    'globe': (TEAL, globe),
    'lightning': (AMBER, bolt),
    'toolbox': (VIOLET, toolbox),
    'cityscape': (ROSE, city),
    'telescope': (TEAL, telescope),
    'chat': (TEAL, chat_bubble),
    'coder': (TEAL, coder),
    'palette': (VIOLET, palette),
    'music': (VIOLET, music_note),
    'clipboard': (AMBER, clipboard),
    'search': (TEAL, search_lens),
    'hospital': (ROSE, hospital),
    'graduation': (TEAL, graduation),
    'finance': (AMBER, coin),
    'shopping': (ROSE, cart),
    'factory': (AMBER, factory),
    'media': (VIOLET, clapper),
    'legal': (TEAL, scales),
    'transport': (TEAL, car),
    'home': (AMBER, house),
    'briefcase': (VIOLET, briefcase),
    'brain': (TEAL, brain),
    'earth': (TEAL, earth),
    'chart': (AMBER, chart),
    'microscope': (VIOLET, microscope),
    'link': (TEAL, link_chain),
    'target': (ROSE, target),
    'masks': (VIOLET, masks),
    'sparkles': (AMBER, sparkles),
    'memo': (TEAL, memo),
    'moon': (VIOLET, moon),
    'magnifier': (TEAL, search_lens),
    'surf': (TEAL, surf),
    'frame': (VIOLET, frame),
    'swirl': (TEAL, swirl),
    'clapper': (ROSE, clapper),
    'camera': (VIOLET, camera),
    'notebook': (TEAL, notebook),
    'microphone': (ROSE, mic),
    'fish': (TEAL, fish),
    'lobster': (ROSE, lobster),
    'beans': (AMBER, beans),
    'x-logo': (WHITE, xlogo),
    'wave': (TEAL, wave),
    'filmstrip': (VIOLET, filmstrip),
    'window': (TEAL, window_pane),
    'bug': (ROSE, bug),
    'coffee': (AMBER, coffee),
    'speaker': (TEAL, speaker),
    'cards-view': (VIOLET, cards_view),
    'book': (TEAL, book),
    'rocket': (AMBER, rocket),
    'synapse-star': (AMBER, synapse_star),
    'synapse-diamond': (TEAL, synapse_diamond),
    'bwtl-mark': (TEAL, bwtl_mark),
    'bwtl-favicon': (TEAL, bwtl_favicon),
}

# App-specific icons (reuse base recipes, separate files for per-app branding)
APP_SLUGS = {
    'ChatGPT': 'chat',
    'Claude': 'masks',
    'Gemini': 'sparkles',
    '通义千问': 'globe',
    '文心一言': 'memo',
    'Kimi': 'moon',
    'DeepSeek': 'magnifier',
    'GitHub Copilot': 'coder',
    'Cursor': 'lightning',
    'Windsurf': 'surf',
    'Claude Code': 'masks',
    'Codex CLI': 'lightning',
    'Grok Build': 'x-logo',
    'Zcode': 'brain',
    'Gemini CLI': 'sparkles',
    'Aider': 'link',
    'Cline': 'toolbox',
    'Continue': 'coffee',
    'Amazon Q Developer': 'briefcase',
    'Midjourney': 'palette',
    'DALL·E 3': 'frame',
    'Stable Diffusion': 'swirl',
    '可灵 AI': 'clapper',
    'Runway': 'camera',
    'Suno': 'music',
    'Notion AI': 'clipboard',
    'Gamma': 'chart',
    'Perplexity': 'search',
    'NotebookLM': 'notebook',
    'ElevenLabs': 'microphone',
    'Fish Audio': 'fish',
    'OpenClaw': 'lobster',
    'Dify': 'link',
    '扣子 Coze': 'target',
    'n8n': 'factory',
    'Manus': 'rocket',
    '豆包': 'beans',
    'Grok': 'x-logo',
    'Bolt.new': 'lightning',
    'Flux': 'wave',
    'Sora': 'filmstrip',
    'Microsoft Copilot': 'window',
    '秘塔 AI 搜索': 'telescope',
}


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    print(f'Generating {len(ICON_RECIPES)} base icons → {OUT}')
    for slug, (accent, fn) in ICON_RECIPES.items():
        save_icon(slug, accent, fn)

    apps_dir = OUT / 'apps'
    apps_dir.mkdir(exist_ok=True)
    print(f'Copying {len(APP_SLUGS)} app icons → {apps_dir}')
    for app_name, base_slug in APP_SLUGS.items():
        src = OUT / f'{base_slug}.png'
        # filesystem-safe slug
        safe = app_name.lower().replace(' ', '-').replace('.', '').replace('·', '')
        dst = apps_dir / f'{safe}.png'
        shutil_copy(src, dst, app_name)

    print('Done.')


def shutil_copy(src: Path, dst: Path, label: str):
    from shutil import copy2
    copy2(src, dst)
    print(f'  apps/{dst.name} ← {label}')


if __name__ == '__main__':
    main()