#!/usr/bin/env python3
"""吹雪士郎サムネイル生成 v2"""
from PIL import Image, ImageDraw, ImageFont
import numpy as np
import math, random, os

W, H = 1280, 720
BASE = r"C:\Users\user\OneDrive\Desktop\claude-code\remotion-video"
OUT  = os.path.join(BASE, "out", "thumbnail.png")
FONT = r"C:\Windows\Fonts\meiryob.ttc"

# ── 1. 背景画像1枚（エターナルブリザード発動シーン） ──
bg_path = os.path.join(BASE, "public", "images", "anime_04.png")
bg = Image.open(bg_path).convert("RGBA")
scale = max(W / bg.width, H / bg.height)
bw2, bh2 = int(bg.width * scale), int(bg.height * scale)
bg = bg.resize((bw2, bh2), Image.LANCZOS)
x0 = (bw2 - W) // 2
y0 = (bh2 - H) // 2
bg = bg.crop((x0, y0, x0 + W, y0 + H))
canvas = Image.new("RGBA", (W, H))
canvas.paste(bg, (0, 0), bg)

# ── 2. 集中線（画面中央から放射） ──
rng = random.Random(42)
speed = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd    = ImageDraw.Draw(speed)
cx, cy = W // 2, H // 2
diag   = math.sqrt(W**2 + H**2)
for i in range(240):
    angle  = 2 * math.pi * i / 240 + rng.uniform(-0.013, 0.013)
    r0     = rng.uniform(10, 55)
    x1     = cx + r0  * math.cos(angle)
    y1     = cy + r0  * math.sin(angle)
    x2     = cx + diag * math.cos(angle)
    y2     = cy + diag * math.sin(angle)
    alpha  = rng.randint(35, 95)
    lw     = rng.choice([1, 1, 1, 2, 2, 3])
    sd.line([(x1, y1), (x2, y2)], fill=(0, 0, 0, alpha), width=lw)
canvas = Image.alpha_composite(canvas, speed)

# ── 3. 下部グラデーションオーバーレイ（テキスト可読性） ──
ov = np.zeros((H, W, 4), dtype=np.uint8)
gs = int(H * 0.52)
for y in range(gs, H):
    t = (y - gs) / (H - gs)
    ov[y, :, 3] = int(t * 175)
canvas.alpha_composite(Image.fromarray(ov, "RGBA"))

draw = ImageDraw.Draw(canvas)

# ── 4. 4つの楕円バッジ（左2枚・右2枚） ──
# 配置: 左上, 左上から下, 右上, 右上から下
badges = [
    {"lines": ["反則的な",   "格好よさw"],   "fc": (255, 220, 0),   "pos": "tl"},
    {"lines": ["エタブリで", "視聴者騒然!!"], "fc": (80,  255, 120), "pos": "bl"},
    {"lines": ["二重人格が", "衝撃すぎる"],   "fc": (80,  210, 255), "pos": "tr"},
    {"lines": ["宮野真守が", "神演技！！"],   "fc": (255, 100, 170), "pos": "br"},
]

bw_e, bh_e = 218, 80
pad_e = 12
gap_y = 8
ef    = ImageFont.truetype(FONT, 27)

def get_pos(which):
    row2_y = pad_e + bh_e + gap_y
    if which == "tl": return (pad_e, pad_e)
    if which == "bl": return (pad_e, row2_y)
    if which == "tr": return (W - bw_e - pad_e, pad_e)
    if which == "br": return (W - bw_e - pad_e, row2_y)

for b in badges:
    bx, by = get_pos(b["pos"])
    fc     = b["fc"]

    # 影レイヤー
    sh  = Image.new("RGBA", (W, H), (0,0,0,0))
    shd = ImageDraw.Draw(sh)
    shd.ellipse([(bx+5, by+5), (bx+bw_e+5, by+bh_e+5)], fill=(0,0,0,100))
    canvas.alpha_composite(sh)

    # 楕円: 黒縁 → 白地 → カラー縁取り
    el  = Image.new("RGBA", (W, H), (0,0,0,0))
    eld = ImageDraw.Draw(el)
    # 黒外縁（楕円全体を少し大きく黒で塗りつぶし）
    eld.ellipse([(bx-2, by-2), (bx+bw_e+2, by+bh_e+2)], fill=(0,0,0,255))
    # 白地
    eld.ellipse([(bx, by), (bx+bw_e, by+bh_e)], fill=(255,255,255,245))
    # カラー縁取り（内縁）
    eld.ellipse([(bx+3, by+3), (bx+bw_e-3, by+bh_e-3)], outline=fc, width=6)
    canvas.alpha_composite(el)
    draw = ImageDraw.Draw(canvas)

    # テキスト: カラー + 白縁 + 黒縁（外から: 黒→白→カラー）
    lines = b["lines"]
    lh_e  = 30
    tot_h = len(lines) * lh_e
    ty_b  = by + (bh_e - tot_h) // 2 + 2
    for j, ln in enumerate(lines):
        bb   = ef.getbbox(ln)
        tw   = bb[2] - bb[0]
        tx_b = bx + (bw_e - tw) // 2
        ty_l = ty_b + j * lh_e
        # 黒外縁
        draw.text((tx_b, ty_l), ln, font=ef, fill=(0,0,0,255),
                  stroke_width=5, stroke_fill=(0,0,0,255))
        # 白縁
        draw.text((tx_b, ty_l), ln, font=ef, fill=(255,255,255,255),
                  stroke_width=3, stroke_fill=(255,255,255,255))
        # カラーテキスト
        draw.text((tx_b, ty_l), ln, font=ef, fill=fc)

# ── 5. メインテキスト 1行（画面幅いっぱい・黒→赤グラデ+縁取り） ──
MAIN_TEXT   = "初登場でゴッドハンドを粉砕！！"
PINK_PURPLE = (210,  50, 215)
WHITE       = (255, 255, 255)

# フォントサイズ自動調整（幅の97%以内）
MAX_TW = int(W * 0.97)
mfs    = 160
mf     = None
while mfs >= 40:
    mf = ImageFont.truetype(FONT, mfs)
    bb = mf.getbbox(MAIN_TEXT)
    if (bb[2] - bb[0]) <= MAX_TW:
        break
    mfs -= 2

bb   = mf.getbbox(MAIN_TEXT)
tw   = bb[2] - bb[0]
th   = bb[3] - bb[1]
lh_m = th + 20
# 縁取り分(18px)も考慮して下部に余白を持たせる
tx_m = (W - tw) // 2
ty_m = H - lh_m - 28

# ピンク紫 外縁（最外）
draw.text((tx_m, ty_m), MAIN_TEXT, font=mf,
          fill=PINK_PURPLE, stroke_width=18, stroke_fill=PINK_PURPLE)
# 白縁（中間）
draw.text((tx_m, ty_m), MAIN_TEXT, font=mf,
          fill=WHITE, stroke_width=9, stroke_fill=WHITE)

# グラデーション文字（黒→赤）
mask_img = Image.new("L", (W, H), 0)
md = ImageDraw.Draw(mask_img)
md.text((tx_m, ty_m), MAIN_TEXT, font=mf, fill=255)
mask_arr = np.array(mask_img)

grad_arr = np.zeros((H, W, 4), dtype=np.uint8)
for y_g in range(max(0, ty_m - 5), min(H, ty_m + lh_m + 20)):
    row = mask_arr[y_g]
    if row.max() == 0:
        continue
    t  = (y_g - ty_m) / max(lh_m - 1, 1)
    t  = float(np.clip(t, 0, 1))
    rc = int(t * 230)
    grad_arr[y_g, :, 0] = np.where(row > 0, rc, 0)
    grad_arr[y_g, :, 3] = row

canvas.alpha_composite(Image.fromarray(grad_arr, "RGBA"))

canvas.convert("RGB").save(OUT, quality=95)
print(f"保存: {OUT}")
