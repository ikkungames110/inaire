#!/usr/bin/env python3
"""松風天馬サムネイル生成."""
from __future__ import annotations

import math
import os
import random
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont

W, H = 1280, 720
BASE = Path(__file__).resolve().parent
OUT = BASE / "sambnails" / "matsukaze-tenma-thumbnail.png"

NOTO = Path(r"C:\Windows\Fonts\NotoSansJP-VF.ttf")
LANOBE = Path(r"C:\Users\user\Downloads\19\LightNovelPOPv2.otf")
LANOBE_FALLBACK = NOTO


def load_noto_black(size: int) -> ImageFont.FreeTypeFont:
    font = ImageFont.truetype(str(NOTO), size)
    try:
        axes = font.get_variation_axes()
        values = []
        for axis in axes:
            name = axis.get("name", b"").decode("ascii", errors="ignore").lower()
            values.append(axis["maximum"] if "weight" in name else axis["default"])
        font.set_variation_by_axes(values)
    except Exception:
        pass
    return font


def load_lanobe(size: int) -> ImageFont.FreeTypeFont:
    path = LANOBE if LANOBE.exists() else LANOBE_FALLBACK
    return ImageFont.truetype(str(path), size)


def text_size(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.FreeTypeFont) -> tuple[int, int]:
    box = draw.textbbox((0, 0), text, font=font, stroke_width=0)
    return box[2] - box[0], box[3] - box[1]


def fit_cover_focus(img: Image.Image, focus: tuple[int, int], zoom: float) -> Image.Image:
    """Cover crop while keeping the chosen character focus near the center."""
    rw = int(img.width * zoom)
    rh = int(img.height * zoom)
    resized = img.resize((rw, rh), Image.Resampling.LANCZOS)

    fx, fy = int(focus[0] * zoom), int(focus[1] * zoom)
    left = max(0, min(rw - W, fx - W // 2))
    top = max(0, min(rh - H, fy - H // 2))
    return resized.crop((left, top, left + W, top + H))


def draw_speed_lines(canvas: Image.Image) -> None:
    rng = random.Random(20260517)
    line_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(line_layer)
    cx, cy = W // 2, 330
    diag = math.sqrt(W * W + H * H)

    for i in range(360):
        angle = 2 * math.pi * i / 360 + rng.uniform(-0.009, 0.009)
        start = rng.uniform(30, 100)
        end = diag * rng.uniform(0.80, 1.07)
        x1 = cx + start * math.cos(angle)
        y1 = cy + start * math.sin(angle)
        x2 = cx + end * math.cos(angle)
        y2 = cy + end * math.sin(angle)
        alpha = rng.randint(42, 125)
        width = rng.choice([1, 1, 2, 2, 3, 4])
        draw.line((x1, y1, x2, y2), fill=(0, 0, 0, alpha), width=width)

    # Examples have a manga-like grey burst between black rays.
    white_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    wdraw = ImageDraw.Draw(white_layer)
    for i in range(120):
        angle = 2 * math.pi * i / 120 + rng.uniform(-0.012, 0.012)
        start = rng.uniform(80, 170)
        end = diag
        x1 = cx + start * math.cos(angle)
        y1 = cy + start * math.sin(angle)
        x2 = cx + end * math.cos(angle)
        y2 = cy + end * math.sin(angle)
        wdraw.line((x1, y1, x2, y2), fill=(255, 255, 255, rng.randint(16, 45)), width=rng.choice([2, 3, 4]))

    canvas.alpha_composite(white_layer)
    canvas.alpha_composite(line_layer)


def draw_bottom_readability(canvas: Image.Image) -> None:
    overlay = np.zeros((H, W, 4), dtype=np.uint8)
    start = int(H * 0.47)
    for y in range(start, H):
        t = (y - start) / (H - start)
        overlay[y, :, 3] = int(35 + t * 155)
    canvas.alpha_composite(Image.fromarray(overlay, "RGBA"))


def fit_badge_font(lines: list[str], box_w: int, box_h: int) -> ImageFont.FreeTypeFont:
    dummy = ImageDraw.Draw(Image.new("RGBA", (1, 1)))
    for size in range(58, 24, -1):
        font = load_lanobe(size)
        line_gap = int(size * 0.92)
        widths = [text_size(dummy, line, font)[0] for line in lines]
        total_h = line_gap * (len(lines) - 1) + max(text_size(dummy, line, font)[1] for line in lines)
        if max(widths) <= box_w and total_h <= box_h:
            return font
    return load_lanobe(24)


def draw_layered_text(
    draw: ImageDraw.ImageDraw,
    xy: tuple[int, int],
    text: str,
    font: ImageFont.FreeTypeFont,
    fill: tuple[int, int, int],
) -> None:
    # Outer color -> white middle -> colored fill, matching the sample thumbnails.
    draw.text(xy, text, font=font, fill=fill, stroke_width=10, stroke_fill=fill)
    draw.text(xy, text, font=font, fill=(255, 255, 255), stroke_width=5, stroke_fill=(255, 255, 255))
    draw.text(xy, text, font=font, fill=fill)


def draw_badges(canvas: Image.Image) -> None:
    badges = [
        {"lines": ["化身も技も", "全部盛り"], "color": (0, 38, 255), "box": (-18, 6, 420, 172)},
        {"lines": ["主人公補正", "強すぎる"], "color": (224, 0, 224), "box": (884, 6, 398, 172)},
        {"lines": ["MFなのに", "何でも屋"], "color": (0, 120, 18), "box": (16, 218, 394, 158)},
        {"lines": ["風技の", "デパート"], "color": (255, 160, 0), "box": (870, 228, 398, 158)},
    ]
    draw = ImageDraw.Draw(canvas)

    for badge in badges:
        x, y, bw, bh = badge["box"]
        color = badge["color"]

        shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        sdraw = ImageDraw.Draw(shadow)
        sdraw.ellipse((x + 7, y + 8, x + bw + 7, y + bh + 8), fill=(0, 0, 0, 125))
        shadow = shadow.filter(ImageFilter.GaussianBlur(2.2))
        canvas.alpha_composite(shadow)

        shape = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        edraw = ImageDraw.Draw(shape)
        edraw.ellipse((x, y, x + bw, y + bh), fill=(*color, 255))
        inset = 14
        edraw.ellipse((x + inset, y + inset, x + bw - inset, y + bh - inset), fill=(255, 255, 255, 252))
        edraw.ellipse((x + 6, y + 6, x + bw - 6, y + bh - 6), outline=(*color, 255), width=9)
        canvas.alpha_composite(shape)

        draw = ImageDraw.Draw(canvas)
        pad_x = 42
        pad_y = 30
        lines = badge["lines"]
        font = fit_badge_font(lines, bw - pad_x * 2, bh - pad_y * 2)
        line_step = int(font.size * 0.95)
        line_heights = [text_size(draw, line, font)[1] for line in lines]
        total_h = line_step * (len(lines) - 1) + max(line_heights)
        ty = y + (bh - total_h) // 2 - 2

        for i, line in enumerate(lines):
            tw, _ = text_size(draw, line, font)
            tx = x + (bw - tw) // 2
            draw_layered_text(draw, (tx, ty + i * line_step), line, font, color)


def fit_main_font(text: str) -> ImageFont.FreeTypeFont:
    dummy = ImageDraw.Draw(Image.new("RGBA", (1, 1)))
    for size in range(148, 74, -2):
        font = load_noto_black(size)
        tw, _ = text_size(dummy, text, font)
        if tw <= int(W * 0.965):
            return font
    return load_noto_black(74)


def draw_gradient_main_text(canvas: Image.Image, text: str) -> None:
    draw = ImageDraw.Draw(canvas)
    font = fit_main_font(text)
    box = draw.textbbox((0, 0), text, font=font, stroke_width=0)
    tw = box[2] - box[0]
    th = box[3] - box[1]
    x = (W - tw) // 2
    y = H - th - 40

    purple = (103, 0, 205)
    white = (255, 255, 255)

    # A heavy shadow gives the same separated, sticker-like feel as the examples.
    draw.text((x + 8, y + 10), text, font=font, fill=(0, 0, 0), stroke_width=28, stroke_fill=(0, 0, 0))
    draw.text((x, y), text, font=font, fill=purple, stroke_width=25, stroke_fill=purple)
    draw.text((x, y), text, font=font, fill=white, stroke_width=10, stroke_fill=white)

    mask = Image.new("L", (W, H), 0)
    mdraw = ImageDraw.Draw(mask)
    mdraw.text((x, y), text, font=font, fill=255)
    mask_arr = np.array(mask)

    grad = np.zeros((H, W, 4), dtype=np.uint8)
    top = max(0, y - 4)
    bottom = min(H, y + th + 20)
    for yy in range(top, bottom):
        row = mask_arr[yy]
        if row.max() == 0:
            continue
        t = (yy - y) / max(th, 1)
        t = float(np.clip(t, 0, 1))
        # black at the top, vivid red at the bottom.
        r = int(12 + 240 * t)
        grad[yy, :, 0] = np.where(row > 0, r, 0)
        grad[yy, :, 3] = row

    canvas.alpha_composite(Image.fromarray(grad, "RGBA"))


def main() -> None:
    src = BASE / "public" / "images" / "title.png"
    bg = Image.open(src).convert("RGBA")
    bg = fit_cover_focus(bg, focus=(770, 315), zoom=1.12)
    bg = ImageEnhance.Color(bg).enhance(1.18)
    bg = ImageEnhance.Contrast(bg).enhance(1.12)
    bg = ImageEnhance.Sharpness(bg).enhance(1.18)

    canvas = Image.new("RGBA", (W, H))
    canvas.alpha_composite(bg)
    draw_speed_lines(canvas)
    draw_bottom_readability(canvas)
    draw_badges(canvas)
    draw_gradient_main_text(canvas, "最強の万能プレイヤー")

    OUT.parent.mkdir(parents=True, exist_ok=True)
    canvas.convert("RGB").save(OUT, quality=95, subsampling=0)
    print(f"保存: {OUT}")


if __name__ == "__main__":
    main()
