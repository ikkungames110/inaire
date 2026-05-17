import { AbsoluteFill, Audio, Img, Sequence, interpolate, staticFile, useCurrentFrame } from 'remotion';
import {
  GoldenBokehBG, StarburstBG, AuroraBG, SakuraBG, NeonGridBG,
  StarZoomBG, LavaLampBG, FireworksBG, PrismBeamBG, DigitalRainBG,
} from './Background';
import { CommentScene } from './CommentScene';
import audioMeta from './audio-meta.json';

type Comment = typeof audioMeta[0] & { isIntro?: boolean };

const scenesWithStart = (audioMeta as Comment[]).reduce<{ comment: Comment; startFrame: number }[]>(
  (acc, comment) => {
    const start = acc.length === 0 ? 0 : acc[acc.length - 1].startFrame + acc[acc.length - 1].comment.durationInFrames;
    return [...acc, { comment, startFrame: start }];
  },
  []
);

const totalFrames = audioMeta.reduce((s, c) => s + c.durationInFrames, 0);

// 本編の画像セグメント（同じ画像を4コメント連続で使うため、境界でのみフェードイン）
const buildImageSegments = () => {
  const segments: { image: string; from: number; durationInFrames: number }[] = [];
  for (const { comment, startFrame } of scenesWithStart) {
    if (comment.isIntro) continue;
    const imageFile = comment.image ?? `anime_${String(comment.id).padStart(2, '0')}.png`;
    const last = segments[segments.length - 1];
    if (last && last.image === imageFile) {
      last.durationInFrames += comment.durationInFrames;
    } else {
      segments.push({ image: imageFile, from: startFrame, durationInFrames: comment.durationInFrames });
    }
  }
  return segments;
};

const imageSegments = buildImageSegments();

// イントロ期間（isIntro:true の合計フレーム数）
const introFrames = scenesWithStart
  .filter(({ comment }) => comment.isIntro)
  .reduce((sum, { comment }) => sum + comment.durationInFrames, 0);

const BGM_FADE_FRAMES = 30;
const BGM_VOLUME      = 0.12;

const BG_LIST: React.FC[] = [
  GoldenBokehBG, StarburstBG, AuroraBG, SakuraBG, NeonGridBG,
  StarZoomBG, LavaLampBG, FireworksBG, PrismBeamBG, DigitalRainBG,
];

// 約30秒（900フレーム）ごとにコメント境界でBGを切り替える
const buildBgSegments = () => {
  const switchFrames: number[] = [0];
  let acc = 0;
  for (const s of scenesWithStart) {
    acc += s.comment.durationInFrames;
    if (acc >= switchFrames[switchFrames.length - 1] + 900 && acc < totalFrames) {
      switchFrames.push(acc);
    }
  }
  return switchFrames.map((from, idx) => ({
    from,
    duration:    (switchFrames[idx + 1] ?? totalFrames) - from,
    BgComponent: BG_LIST[idx % BG_LIST.length],
  }));
};

const bgSegments = buildBgSegments();

// イントロ期間中 title.png を1枚表示し続けるコンポーネント
const IntroImage: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });
  return (
    <AbsoluteFill>
      <div
        style={{
          position: 'absolute',
          top: 16,
          left: 0,
          right: 0,
          bottom: 220,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity,
        }}
      >
        <Img
          src={staticFile('images/title.png')}
          style={{
            maxWidth: '82%',
            maxHeight: '100%',
            objectFit: 'contain',
            borderRadius: 10,
            boxShadow: '0 6px 40px rgba(0,0,0,0.8)',
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

// 本編画像（グループ先頭でフェードイン→グループ終端まで表示し続ける）
const ImageDisplay: React.FC<{ imageFile: string }> = ({ imageFile }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return (
    <AbsoluteFill>
      <div
        style={{
          position: 'absolute',
          top: 16,
          left: 0,
          right: 0,
          bottom: 220,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity,
        }}
      >
        <Img
          src={staticFile(`images/${imageFile}`)}
          style={{
            maxWidth: '82%',
            maxHeight: '100%',
            objectFit: 'contain',
            borderRadius: 10,
            boxShadow: '0 6px 40px rgba(0,0,0,0.8)',
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

// 著作権表示（本編中のみ表示）
const CopyrightOverlay: React.FC<{ introFrames: number }> = ({ introFrames: intro }) => {
  const frame = useCurrentFrame();
  if (frame < intro) return null;
  return (
    <div
      style={{
        position: 'absolute',
        top: 12,
        right: 16,
        color: 'white',
        fontSize: 20,
        fontWeight: 700,
        fontFamily: '"Noto Sans JP", "Yu Gothic UI", sans-serif',
        WebkitTextStroke: '2px black',
        paintOrder: 'stroke fill',
        letterSpacing: '0.02em',
        pointerEvents: 'none',
      }}
    >
      ©LEVEL-5/イナズマイレブン/テレビ東京
    </div>
  );
};

export const MyVideo: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        fontFamily: '"Noto Sans JP", "Yu Gothic UI", "Meiryo", sans-serif',
      }}
    >
      {/* アニメーション背景（約30秒ごとに切り替え） */}
      {bgSegments.map(({ from, duration, BgComponent }, idx) => (
        <Sequence key={idx} from={from} durationInFrames={duration}>
          <BgComponent />
        </Sequence>
      ))}

      {/* 字幕エリア: 常時表示される半透明黒バー */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 220,
          background: 'rgba(0, 0, 0, 0.78)',
          pointerEvents: 'none',
        }}
      />

      {/* BGM: フレーム0から再生開始 */}
      <Audio
        src={staticFile('bgm/おどれグロッケンシュピール.mp3')}
        volume={(f) =>
          interpolate(f, [0, BGM_FADE_FRAMES], [0, BGM_VOLUME], {
            extrapolateLeft:  'clamp',
            extrapolateRight: 'clamp',
          })
        }
        loop
      />

      {/* イントロ画像: isIntro 期間中ずっと title.png を表示 */}
      {introFrames > 0 && (
        <Sequence from={0} durationInFrames={introFrames}>
          <IntroImage />
        </Sequence>
      )}

      {/* 本編画像: 同じ画像4コメント分をまとめて1Sequenceで表示（コメント境界でフェードしない） */}
      {imageSegments.map(({ image, from, durationInFrames }, idx) => (
        <Sequence key={`img-${idx}`} from={from} durationInFrames={durationInFrames}>
          <ImageDisplay imageFile={image} />
        </Sequence>
      ))}

      {/* 各コメントシーン */}
      {scenesWithStart.map(({ comment, startFrame }) => (
        <Sequence key={comment.id} from={startFrame} durationInFrames={comment.durationInFrames}>
          <CommentScene comment={comment} />
        </Sequence>
      ))}

      {/* 著作権表示（本編中のみ・右上） */}
      <CopyrightOverlay introFrames={introFrames} />
    </AbsoluteFill>
  );
};
