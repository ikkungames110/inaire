import { AbsoluteFill, useCurrentFrame } from 'remotion';

// ============================================================
// GoldenBokehBG: 金色のボケ玉が青い背景に浮かぶ
// ============================================================
const GOLD_CIRCLES = Array.from({ length: 38 }, (_, i) => ({
  x:          (i * 1973 + 383) % 1280,
  startY:     (i * 2847 + 571) % 960,
  r:          28 + (i * 53) % 95,
  hue:        28 + (i % 7) * 7,
  sat:        88 + (i % 3) * 4,
  lit:        52 + (i % 5) * 5,
  blurFactor: 0.42 + (i % 4) * 0.06,
  speed:      0.38 + (i % 6) * 0.09,
  driftFreq:  0.018 + (i % 5) * 0.004,
  driftAmp:   18 + (i % 5) * 8,
  opacity:    0.55 + (i % 6) * 0.07,
}));

export const GoldenBokehBG: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: 'linear-gradient(180deg, #02122e 0%, #0c0900 50%, #1e1100 100%)' }}>
      {GOLD_CIRCLES.map((c, i) => {
        const y    = ((c.startY - frame * c.speed) % 960 + 960) % 960 - 100;
        const x    = c.x + Math.sin(frame * c.driftFreq + i * 1.3) * c.driftAmp;
        const blur = c.r * c.blurFactor;
        const op   = c.opacity * (0.85 + 0.15 * Math.sin(frame * 0.025 + i * 0.9));
        return (
          <div
            key={i}
            style={{
              position:        'absolute',
              left:            x - c.r,
              top:             y - c.r,
              width:           c.r * 2,
              height:          c.r * 2,
              borderRadius:    '50%',
              backgroundColor: `hsl(${c.hue}, ${c.sat}%, ${c.lit}%)`,
              filter:          `blur(${blur}px)`,
              opacity:         op,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

// ============================================================
// StarburstBG: 中央から光線が放射・パーティクルが外へ飛ぶ
// ============================================================
const RAY_COUNT = 18;
const RAYS = Array.from({ length: RAY_COUNT }, (_, i) => ({
  baseAngle: (360 / RAY_COUNT) * i,
  length:    640 + (i % 4) * 70,
  height:    2 + (i % 5),
  opacity:   0.09 + (i % 5) * 0.04,
}));

const PARTICLES = Array.from({ length: 90 }, (_, i) => ({
  angle:     (i * 137.508) % 360,
  startDist: 25 + (i * 31) % 110,
  speed:     0.75 + (i % 7) * 0.18,
  r:         1 + (i % 3),
  isGreen:   i % 3 === 0,
  opacity:   0.45 + (i % 6) * 0.09,
}));

const CX = 640, CY = 360;

export const StarburstBG: React.FC = () => {
  const frame    = useCurrentFrame();
  const rotation = frame * 0.13;
  const pulse    = 0.88 + 0.12 * Math.sin(frame * 0.055);
  return (
    <AbsoluteFill
      style={{
        background: 'radial-gradient(ellipse at 50% 50%, #072535 0%, #021318 45%, #010810 100%)',
        overflow:   'hidden',
      }}
    >
      {RAYS.map((ray, i) => {
        const angle = ray.baseAngle + rotation;
        const op    = (ray.opacity + 0.05 * Math.sin(frame * 0.04 + i * 0.7)) * pulse;
        return (
          <div
            key={i}
            style={{
              position:        'absolute',
              left:            CX,
              top:             CY,
              width:           ray.length,
              height:          ray.height,
              transformOrigin: 'left center',
              transform:       `rotate(${angle}deg)`,
              background:      'linear-gradient(to right, rgba(0,210,255,0.6), rgba(0,180,255,0.12) 45%, transparent)',
              opacity:         op,
            }}
          />
        );
      })}
      {PARTICLES.map((p, i) => {
        const rad   = (p.angle * Math.PI) / 180;
        const dist  = (p.startDist + frame * p.speed) % 680;
        const x     = CX + Math.cos(rad) * dist;
        const y     = CY + Math.sin(rad) * dist;
        const alpha = p.opacity * Math.max(0, 1 - dist / 680);
        const color = p.isGreen ? '#00ff88' : '#00ccff';
        return (
          <div
            key={i}
            style={{
              position:        'absolute',
              left:            x - p.r,
              top:             y - p.r,
              width:           p.r * 2,
              height:          p.r * 2,
              borderRadius:    '50%',
              backgroundColor: color,
              opacity:         alpha,
              boxShadow:       `0 0 ${p.r * 4}px 1px ${color}`,
            }}
          />
        );
      })}
      <div
        style={{
          position:     'absolute',
          left:         CX - 130,
          top:          CY - 130,
          width:        260,
          height:       260,
          borderRadius: '50%',
          background:   'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(0,220,255,0.75) 22%, rgba(0,140,255,0.25) 55%, transparent 72%)',
          filter:       'blur(10px)',
          opacity:      pulse,
        }}
      />
      <div
        style={{
          position:     'absolute',
          left:         CX - 22,
          top:          CY - 22,
          width:        44,
          height:       44,
          borderRadius: '50%',
          background:   'radial-gradient(circle, white 0%, rgba(200,245,255,0.9) 55%, transparent)',
          filter:       'blur(3px)',
          opacity:      pulse,
        }}
      />
    </AbsoluteFill>
  );
};

// ============================================================
// AuroraBG: オーロラ（北極光）— 緑/シアン/紫の揺れる帯
// ============================================================
const AURORA_BANDS = Array.from({ length: 10 }, (_, i) => ({
  baseY:   70 + i * 62,
  freq:    0.010 + i * 0.0025,
  phase:   i * 1.3,
  amp:     22 + (i % 4) * 14,
  height:  85 + (i % 3) * 45,
  hue:     130 + i * 18,
  sat:     80 + (i % 3) * 6,
  lit:     42 + (i % 4) * 7,
  blur:    20 + (i % 4) * 8,
  opacity: 0.15 + (i % 5) * 0.07,
}));

export const AuroraBG: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(180deg, #000510 0%, #001018 50%, #020810 100%)',
        overflow:   'hidden',
      }}
    >
      {AURORA_BANDS.map((b, i) => {
        const y      = b.baseY + Math.sin(frame * b.freq + b.phase) * b.amp;
        const scaleX = 0.92 + 0.08 * Math.sin(frame * b.freq * 0.8 + i * 0.7);
        const op     = b.opacity * (0.8 + 0.2 * Math.sin(frame * 0.022 + i * 0.55));
        return (
          <div
            key={i}
            style={{
              position:   'absolute',
              left:       -100,
              top:        y,
              width:      1480,
              height:     b.height,
              background: `linear-gradient(to bottom, transparent, hsl(${b.hue},${b.sat}%,${b.lit}%) 50%, transparent)`,
              filter:     `blur(${b.blur}px)`,
              opacity:    op,
              transform:  `scaleX(${scaleX})`,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

// ============================================================
// SakuraBG: 桜の花びらが舞い落ちる
// ============================================================
const PETALS = Array.from({ length: 60 }, (_, i) => ({
  x:         (i * 317 + 100) % 1280,
  startY:    -(i * 73) % 800,
  speedY:    0.7 + (i % 5) * 0.25,
  drift:     (i % 2 === 0 ? 1 : -1) * (0.15 + (i % 5) * 0.12),
  driftFreq: 0.018 + (i % 4) * 0.006,
  rotSpeed:  0.8 + (i % 6) * 0.4,
  w:         12 + (i % 4) * 8,
  h:         9 + (i % 3) * 5,
  hue:       330 + (i % 5) * 6,
  sat:       55 + (i % 3) * 10,
  lit:       75 + (i % 4) * 5,
  opacity:   0.55 + (i % 5) * 0.09,
}));

const PETAL_LOOP = 1520;

export const SakuraBG: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{ background: 'linear-gradient(160deg, #1a0525 0%, #2d0d3a 40%, #1c0830 80%, #100520 100%)' }}
    >
      {PETALS.map((p, i) => {
        const rawY = p.startY + frame * p.speedY;
        const y    = ((rawY % PETAL_LOOP) + PETAL_LOOP) % PETAL_LOOP - 800;
        const x    = p.x + Math.sin(frame * p.driftFreq + i * 1.5) * 40 + frame * p.drift;
        const rot  = frame * p.rotSpeed;
        return (
          <div
            key={i}
            style={{
              position:     'absolute',
              left:         x,
              top:          y,
              width:        p.w,
              height:       p.h,
              borderRadius: '50% 0 50% 0',
              background:   `hsl(${p.hue}, ${p.sat}%, ${p.lit}%)`,
              opacity:      p.opacity,
              transform:    `rotate(${rot}deg)`,
              boxShadow:    `0 0 6px 2px hsla(${p.hue}, 80%, 85%, 0.25)`,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

// ============================================================
// NeonGridBG: サイバーパンク・スクロールグリッド
// ============================================================
const GRID_SPACING = 40;
const GRID_H_COUNT = Math.ceil(720 / GRID_SPACING) + 2;
const GRID_COLORS  = ['#ff00cc', '#00ffff', '#8800ff'] as const;

const V_LINES_DEF = Array.from({ length: 17 }, (_, i) => ({
  x:       i * 80,
  opacity: 0.07 + (i % 4) * 0.03,
}));

export const NeonGridBG: React.FC = () => {
  const frame      = useCurrentFrame();
  const scrollY    = (frame * 0.6) % GRID_SPACING;
  const lineOffset = Math.floor(frame * 0.6 / GRID_SPACING);
  const glitch     = Math.sin(frame * 0.04) * 1.5;
  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(180deg, #04000d 0%, #080010 50%, #010008 100%)',
        overflow:   'hidden',
      }}
    >
      {Array.from({ length: GRID_H_COUNT }, (_, i) => {
        const y     = i * GRID_SPACING - scrollY;
        const color = GRID_COLORS[(i + lineOffset) % 3];
        const op    = (0.10 + ((i + lineOffset) % 3) * 0.04) *
                      (0.8 + 0.2 * Math.sin(frame * 0.05 + i * 0.4));
        return (
          <div
            key={i}
            style={{
              position:   'absolute',
              left:       0,
              top:        y,
              width:      1280,
              height:     1,
              background: `linear-gradient(to right, transparent, ${color} 15%, ${color} 85%, transparent)`,
              opacity:    op,
              boxShadow:  `0 0 8px 1px ${color}`,
            }}
          />
        );
      })}
      {V_LINES_DEF.map((l, i) => (
        <div
          key={i}
          style={{
            position:   'absolute',
            left:       l.x + glitch,
            top:        0,
            width:      1,
            height:     720,
            background: 'linear-gradient(to bottom, transparent, #00ffff 15%, #00ffff 85%, transparent)',
            opacity:    l.opacity * (0.7 + 0.3 * Math.sin(frame * 0.03 + i * 0.7)),
            boxShadow:  '0 0 6px 1px #00ffff',
          }}
        />
      ))}
      <div
        style={{
          position:   'absolute',
          left:       0,
          top:        330,
          width:      1280,
          height:     80,
          background: 'linear-gradient(to bottom, transparent, rgba(0,200,255,0.05), transparent)',
          filter:     'blur(4px)',
        }}
      />
    </AbsoluteFill>
  );
};

// ============================================================
// StarZoomBG: 中央からワープ飛行する星
// ============================================================
const WARP_STARS = Array.from({ length: 160 }, (_, i) => ({
  angle:     (i * 137.508) % 360,
  startDist: 8 + (i * 29) % 90,
  speed:     1.8 + (i % 7) * 0.6,
  r:         1 + (i % 3),
  isWhite:   i % 5 < 2,
  hue:       [60, 180, 220, 300][i % 4],
  opacity:   0.5 + (i % 5) * 0.1,
}));

const WCX = 640, WCY = 360, WARP_MAX = 760;

export const StarZoomBG: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: '#000008', overflow: 'hidden' }}>
      {WARP_STARS.map((s, i) => {
        const rad   = (s.angle * Math.PI) / 180;
        const dist  = (s.startDist + frame * s.speed) % WARP_MAX;
        const x     = WCX + Math.cos(rad) * dist;
        const y     = WCY + Math.sin(rad) * dist;
        const r     = s.r * (0.2 + 0.8 * dist / WARP_MAX);
        const alpha = s.opacity * Math.min(1, dist / 40) * (1 - (dist / WARP_MAX) * 0.4);
        const color = s.isWhite ? 'white' : `hsl(${s.hue}, 90%, 80%)`;
        return (
          <div
            key={i}
            style={{
              position:        'absolute',
              left:            x - r,
              top:             y - r,
              width:           r * 2,
              height:          r * 2,
              borderRadius:    '50%',
              backgroundColor: color,
              opacity:         alpha,
              boxShadow:       `0 0 ${r * 4}px ${r}px ${color}`,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

// ============================================================
// LavaLampBG: 溶岩ランプ — 紫/青の浮かぶボール
// ============================================================
const LAVA_BLOBS = Array.from({ length: 10 }, (_, i) => ({
  x:       150 + (i * 297) % 980,
  baseY:   80 + (i * 213) % 560,
  r:       75 + (i * 43) % 110,
  freq:    0.006 + i * 0.0018,
  phase:   i * 1.3,
  amp:     38 + (i % 4) * 22,
  hue:     240 + (i % 4) * 25,
  sat:     75 + (i % 3) * 8,
  lit:     38 + (i % 5) * 7,
  opacity: 0.55 + (i % 4) * 0.1,
}));

export const LavaLampBG: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{ background: 'linear-gradient(180deg, #04001a 0%, #08001f 50%, #020015 100%)' }}
    >
      {LAVA_BLOBS.map((b, i) => {
        const y      = b.baseY + Math.sin(frame * b.freq + b.phase) * b.amp;
        const scaleX = 0.85 + 0.15 * Math.sin(frame * b.freq * 1.3 + b.phase * 0.7);
        const scaleY = 0.85 + 0.15 * Math.cos(frame * b.freq * 1.1 + b.phase * 0.5);
        const op     = b.opacity * (0.8 + 0.2 * Math.sin(frame * 0.018 + i * 0.6));
        return (
          <div
            key={i}
            style={{
              position:     'absolute',
              left:         b.x - b.r,
              top:          y - b.r,
              width:        b.r * 2,
              height:       b.r * 2,
              borderRadius: '50%',
              background:   `radial-gradient(circle at 40% 35%, hsl(${b.hue},${b.sat + 15}%,${b.lit + 18}%), hsl(${b.hue},${b.sat}%,${b.lit}%) 60%, hsl(${b.hue - 10},${b.sat}%,${b.lit - 12}%))`,
              filter:       `blur(${b.r * 0.25}px)`,
              opacity:      op,
              transform:    `scale(${scaleX}, ${scaleY})`,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

// ============================================================
// FireworksBG: 打ち上げ花火が繰り返し炸裂
// ============================================================
const FW_CYCLE    = 90;
const FW_BURST    = 72;
const FW_PARTICLE = 22;

const FIREWORKS_DEF = Array.from({ length: 5 }, (_, b) => ({
  cx:     200 + (b * 283) % 880,
  cy:     70 + (b * 197) % 380,
  offset: b * 18,
  hue:    b * 72,
  particles: Array.from({ length: FW_PARTICLE }, (_, p) => ({
    angle:    (360 / FW_PARTICLE) * p + b * 17,
    speed:    2.2 + (p % 4) * 0.9,
    r:        2 + (p % 3),
    hueDelta: p * 4,
  })),
}));

export const FireworksBG: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{ background: 'linear-gradient(180deg, #010008 0%, #02000f 60%, #010006 100%)' }}
    >
      {FIREWORKS_DEF.flatMap((fw, b) => {
        const t = (frame + fw.offset) % FW_CYCLE;
        if (t >= FW_BURST) return [];
        const progress = t / FW_BURST;
        const fade = progress < 0.25 ? progress / 0.25 : 1 - (progress - 0.25) / 0.75;
        return fw.particles.map((p, pi) => {
          const rad   = (p.angle * Math.PI) / 180;
          const dist  = t * p.speed * (1 - progress * 0.35);
          const x     = fw.cx + Math.cos(rad) * dist;
          const y     = fw.cy + Math.sin(rad) * dist + t * t * 0.018;
          const color = `hsl(${fw.hue + p.hueDelta}, 100%, ${55 + (pi % 3) * 12}%)`;
          return (
            <div
              key={`${b}-${pi}`}
              style={{
                position:        'absolute',
                left:            x - p.r,
                top:             y - p.r,
                width:           p.r * 2,
                height:          p.r * 2,
                borderRadius:    '50%',
                backgroundColor: color,
                opacity:         fade * 0.85,
                boxShadow:       `0 0 ${p.r * 6}px 2px ${color}`,
              }}
            />
          );
        });
      })}
    </AbsoluteFill>
  );
};

// ============================================================
// PrismBeamBG: 虹色の光線が中央から回転放射
// ============================================================
const PRISM_RAY_COUNT = 16;
const PRISM_RAYS = Array.from({ length: PRISM_RAY_COUNT }, (_, i) => ({
  baseAngle: (360 / PRISM_RAY_COUNT) * i,
  length:    820,
  width:     28 + (i % 4) * 14,
  hue:       (360 / PRISM_RAY_COUNT) * i,
  opacity:   0.05 + (i % 3) * 0.025,
  dir:       i % 2 === 0 ? 1 : -1,
}));

const PCX = 640, PCY = 360;

export const PrismBeamBG: React.FC = () => {
  const frame    = useCurrentFrame();
  const rotation = frame * 0.07;
  const pulse    = 0.7 + 0.3 * Math.sin(frame * 0.04);
  return (
    <AbsoluteFill
      style={{
        background: 'radial-gradient(ellipse at 50% 50%, #120020 0%, #06000f 50%, #020008 100%)',
        overflow:   'hidden',
      }}
    >
      {PRISM_RAYS.map((r, i) => {
        const angle = r.baseAngle + rotation * r.dir;
        const op    = r.opacity * pulse * (0.8 + 0.2 * Math.sin(frame * 0.03 + i * 0.5));
        const color = `hsl(${r.hue}, 100%, 65%)`;
        return (
          <div
            key={i}
            style={{
              position:        'absolute',
              left:            PCX,
              top:             PCY,
              width:           r.length,
              height:          r.width,
              transformOrigin: 'left center',
              transform:       `rotate(${angle}deg)`,
              background:      `linear-gradient(to right, ${color}, transparent)`,
              opacity:         op,
              filter:          `blur(${r.width * 0.18}px)`,
            }}
          />
        );
      })}
      <div
        style={{
          position:     'absolute',
          left:         PCX - 55,
          top:          PCY - 55,
          width:        110,
          height:       110,
          borderRadius: '50%',
          background:   'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(200,150,255,0.35) 55%, transparent 70%)',
          filter:       'blur(14px)',
          opacity:      pulse,
        }}
      />
    </AbsoluteFill>
  );
};

// ============================================================
// DigitalRainBG: デジタル雨 — 緑のストリームが縦に流れる
// ============================================================
const RAIN_STREAMS = Array.from({ length: 42 }, (_, i) => ({
  x:        (i * 31 + (i % 5) * 7) % 1275,
  offset:   (i * 137) % 500,
  speed:    3.5 + (i % 5) * 1.5,
  length:   55 + (i % 7) * 28,
  opacity:  0.25 + (i % 5) * 0.12,
  isBright: i % 6 === 0,
}));

export const DigitalRainBG: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{ background: 'linear-gradient(180deg, #000800 0%, #001200 50%, #000800 100%)' }}
    >
      {RAIN_STREAMS.map((s, i) => {
        const totalH  = 720 + s.length;
        const rawY    = (s.offset + frame * s.speed) % totalH;
        const y       = rawY - s.length;
        const color   = s.isBright ? '#88ff88' : '#00cc44';
        const leadCol = s.isBright ? '#ccffcc' : '#00ff66';
        return (
          <div
            key={i}
            style={{
              position:   'absolute',
              left:       s.x,
              top:        y,
              width:      2,
              height:     s.length,
              background: `linear-gradient(to bottom, transparent 0%, ${color} 60%, ${leadCol} 100%)`,
              opacity:    s.opacity * (0.8 + 0.2 * Math.sin(frame * 0.05 + i * 0.7)),
              boxShadow:  `0 0 4px 1px ${color}`,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
