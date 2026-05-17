import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { AuroraBG } from './Background';

export const TestVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ fontFamily: '"Noto Sans JP", "Yu Gothic UI", sans-serif' }}>
      <AuroraBG />
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          opacity,
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 72,
            fontWeight: 900,
            WebkitTextStroke: '4px black',
            paintOrder: 'stroke fill',
          }}
        >
          動作確認
        </div>
        <div
          style={{
            color: '#FFE000',
            fontSize: 36,
            fontWeight: 700,
            marginTop: 24,
            WebkitTextStroke: '2px black',
            paintOrder: 'stroke fill',
          }}
        >
          frame: {frame} / 300
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
