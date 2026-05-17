import { Composition } from 'remotion';
import { MyVideo } from './MyVideo';
import { TestVideo } from './TestVideo';
import audioMeta from './audio-meta.json';

const totalFrames = audioMeta.reduce((sum, c) => sum + c.durationInFrames, 0);

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="MyVideo"
      component={MyVideo}
      durationInFrames={totalFrames}
      fps={30}
      width={1280}
      height={720}
    />
    <Composition
      id="TestVideo"
      component={TestVideo}
      durationInFrames={300}
      fps={30}
      width={1280}
      height={720}
    />
  </>
);
