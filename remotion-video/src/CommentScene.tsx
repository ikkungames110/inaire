import { AbsoluteFill, Audio, Img, interpolate, staticFile, useCurrentFrame } from 'remotion';

export interface CommentMeta {
  id: number;
  speakerName: string;
  color: string;
  text: string;
  filename: string;
  duration: number;
  durationInFrames: number;
  seFile?: string;
  image?: string;
  isIntro?: boolean;
}

const SUBTITLE_COLORS: Record<string, string> = {
  'ずんだもん':   '#FFE000',
  '四国めたん':   '#FF4444',
  '春日部つむぎ': '#44AAFF',
};

const FADE_IN_FRAMES = 15;
const SUBTITLE_AVAIL_W = (1280 - 52 * 2) * 0.92; // padding 52px × 両側 + 8% バッファ
const MAX_FONT = 56;
const MIN_FONT = 30;
const MAX_LINES = 3;

function calcFontSize(text: string): number {
  if (typeof document === 'undefined') return MAX_FONT;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return MAX_FONT;
  for (let size = MAX_FONT; size >= MIN_FONT; size -= 2) {
    ctx.font = `900 ${size}px "ラノベPOP v2", "Noto Sans JP", sans-serif`;
    const measuredWidth = ctx.measureText(text).width + size * 0.03 * text.length;
    const lines = Math.ceil(measuredWidth / SUBTITLE_AVAIL_W);
    if (lines <= MAX_LINES) return size;
  }
  return MIN_FONT;
}

const StrokedText: React.FC<{ text: string; color: string; fontSize: number }> = ({ text, color, fontSize }) => {
  const isYellow = color === '#FFE000';
  const outerStroke = isYellow ? 'white' : 'black';
  const innerStroke = isYellow ? 'black' : (color === 'white' ? 'black' : 'white');

  const base: React.CSSProperties = {
    fontSize,
    fontWeight: 900,
    fontFamily: '"ラノベPOP v2", "Noto Sans JP", sans-serif',
    letterSpacing: '0.03em',
    lineHeight: 1.2,
    whiteSpace: 'pre-wrap',
    width: '100%',
    display: 'block',
    textAlign: 'center',
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <span style={{ ...base, position: 'absolute', left: 0, top: 0, color: outerStroke, WebkitTextStroke: `12px ${outerStroke}`, paintOrder: 'stroke fill' }}>
        {text}
      </span>
      <span style={{ ...base, position: 'absolute', left: 0, top: 0, color: innerStroke, WebkitTextStroke: `6px ${innerStroke}`, paintOrder: 'stroke fill' }}>
        {text}
      </span>
      <span style={{ ...base, position: 'relative', color }}>
        {text}
      </span>
    </div>
  );
};

export const CommentScene: React.FC<{ comment: CommentMeta }> = ({ comment }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, FADE_IN_FRAMES], [0, 1], { extrapolateRight: 'clamp' });
  const fadeOut = interpolate(
    frame,
    [comment.durationInFrames - 10, comment.durationInFrames - 2],
    [1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );
  const finalOpacity = Math.min(opacity, fadeOut);

  const subtitleColor = comment.isIntro ? 'white' : (SUBTITLE_COLORS[comment.speakerName] ?? '#FFE000');
  const fontSize = calcFontSize(comment.text);

  return (
    <AbsoluteFill>
      <Audio src={staticFile(`audio/${comment.filename}`)} />
      {comment.seFile && (
        <Audio src={staticFile(`se/${comment.seFile}`)} volume={0.15} />
      )}

      {/* 字幕テキスト（背景はMyVideo.tsxの常時バーが担当） */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 220,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 52px',
          opacity: finalOpacity,
        }}
      >
        <StrokedText
          text={comment.text}
          color={subtitleColor}
          fontSize={fontSize}
        />
      </div>
    </AbsoluteFill>
  );
};
