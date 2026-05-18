/**
 * 台本: 悪童MF・不動明王に対する視聴者反応集
 * 無印イナズマイレブン: 新帝国学園からイナズマジャパン終盤まで
 * 話者: ずんだもん(3) / 四国めたん(2) / 春日部つむぎ(8)
 */

const INTRO_SPEAKER = 2; // 四国めたん（ノーマル）

export const VOCAB = [
  { surface: '不動明王', pronunciation: 'フドウアキオ', accent_type: 0 },
  { surface: '不動', pronunciation: 'フドウ', accent_type: 0 },
  { surface: '明王', pronunciation: 'アキオ', accent_type: 0 },
  { surface: '新帝国学園', pronunciation: 'シンテイコクガクエン', accent_type: 0 },
  { surface: '新帝国', pronunciation: 'シンテイコク', accent_type: 0 },
  { surface: '帝国学園', pronunciation: 'テイコクガクエン', accent_type: 0 },
  { surface: '帝国', pronunciation: 'テイコク', accent_type: 0 },
  { surface: '影山', pronunciation: 'カゲヤマ', accent_type: 0 },
  { surface: '鬼道', pronunciation: 'キドウ', accent_type: 0 },
  { surface: '佐久間', pronunciation: 'サクマ', accent_type: 0 },
  { surface: '源田', pronunciation: 'ゲンダ', accent_type: 0 },
  { surface: '久遠監督', pronunciation: 'クドウカントク', accent_type: 0 },
  { surface: '久遠', pronunciation: 'クドウ', accent_type: 0 },
  { surface: '飛鷹', pronunciation: 'トビタカ', accent_type: 0 },
  { surface: '虎丸', pronunciation: 'トラマル', accent_type: 0 },
  { surface: '円堂', pronunciation: 'エンドウ', accent_type: 0 },
  { surface: '豪炎寺', pronunciation: 'ゴウエンジ', accent_type: 0 },
  { surface: 'イナズマジャパン', pronunciation: 'イナズマジャパン', accent_type: 0 },
  { surface: 'ファイアードラゴン', pronunciation: 'ファイアードラゴン', accent_type: 0 },
  { surface: 'チームK', pronunciation: 'チームケー', accent_type: 0 },
  { surface: 'キラーフィールズ', pronunciation: 'キラーフィールズ', accent_type: 0 },
  { surface: '皇帝ペンギン3号', pronunciation: 'コウテイペンギンサンゴウ', accent_type: 0 },
  { surface: '皇帝ペンギン', pronunciation: 'コウテイペンギン', accent_type: 0 },
  { surface: 'ジェットストリーム', pronunciation: 'ジェットストリーム', accent_type: 0 },
  { surface: 'FFI', pronunciation: 'フットボールフロンティアインターナショナル', accent_type: 0 },
  { surface: 'MF', pronunciation: 'ミッドフィールダー', accent_type: 0 },
];

const img = (id) => 'anime_' + String(Math.floor((id - 3) / 4) + 1).padStart(2, '0') + '.png';

export const COMMENTS = [
  // ── イントロ（isIntro: true・話速1.1x） ──
  { id: 0, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '和太鼓でドドン.mp3', isIntro: true,
    text: '今回は「悪童ミッドフィルダー不動明王が、イナズマジャパンのジョーカーになるまで」に対する当時の視聴者の反応を紹介します' },
  { id: 1, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '拍子木1.mp3', isIntro: true,
    text: '新帝国学園では影山の駒として憎まれ役を背負い、三期では久遠監督の切り札として鬼道たちを揺さぶった、好き嫌いが激しく分かれたキャラクターです。' },
  { id: 2, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '拍子木2.mp3', isIntro: true,
    text: 'それではどうぞ！' },

  // ── 初登場・悪そうな第一印象 ──
  { id: 3, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(3), seFile: '和太鼓でドドン.mp3',
    text: '不動が初めて出てきた時、こいつ絶対ろくなことしない顔してるって思った。' },
  { id: 4, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(4),
    text: 'モヒカンにあの目つき、味方になるビジュアルじゃなさすぎる。' },
  { id: 5, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(5),
    text: '最初の不動、笑い方だけで視聴者に嫌われる才能があった。' },
  { id: 6, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(6),
    text: 'でもインパクトだけは一発で残った。名前も見た目も強すぎる。' },

  // ── 新帝国学園・不気味な余裕 ──
  { id: 7, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(7), seFile: '拍子木1.mp3',
    text: '新帝国学園の案内役みたいに出てくる不動、ずっと胡散臭かった。' },
  { id: 8, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(8),
    text: 'バナナ食べながら煽ってくるの、子供向けアニメの敵としてクセが強すぎる。' },
  { id: 9, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(9),
    text: '鬼道をわざと挑発する感じ、こいつ性格悪いなってちゃんと思わせるのが上手い。' },
  { id: 10, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(10),
    text: 'あの時点では完全に影山側の危ないやつだった。' },

  // ── 源田・佐久間を巻き込む怖さ ──
  { id: 11, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(11), seFile: '小鼓（こつづみ）.mp3',
    text: '源田と佐久間を焚きつける流れ、不動の嫌な賢さが出てた。' },
  { id: 12, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(12),
    text: '影山の言葉をそのまま広げる役って感じで、見ていてかなり怖かった。' },
  { id: 13, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(13),
    text: '新帝国の不動は強いというより、場を壊すのがうまいタイプだった。' },
  { id: 14, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(14),
    text: '帝国の二人が追い詰められていく横で、ずっと薄笑いしてるのがきつい。' },

  // ── 鬼道との衝突・ラフなプレー ──
  { id: 15, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(15), seFile: '和太鼓でドドン.mp3',
    text: '鬼道のシュートを止める不動、普通に実力もあるのがまた厄介だった。' },
  { id: 16, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(16),
    text: 'ただの煽り役じゃなくて、ボール扱いも守備もちゃんとうまい。' },
  { id: 17, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(17),
    text: '鬼道とぶつかるシーン、因縁が一気に濃くなった感じがした。' },
  { id: 18, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(18),
    text: '不動が出るだけで試合の空気が荒れるの、キャラ性能として強い。' },

  // ── 影山に切り捨てられる転換点 ──
  { id: 19, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(19), seFile: '拍子木2.mp3',
    text: '影山に切り捨てられた時、初めて不動にも事情があるんだなって空気になった。' },
  { id: 20, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(20),
    text: 'あれだけ悪そうにしてたのに、捨て駒扱いされる側だったのが衝撃。' },
  { id: 21, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(21),
    text: '不動が無敵の悪役じゃなくて、影山に利用されてる一人だとわかるのが重い。' },
  { id: 22, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(22),
    text: 'このあたりで、嫌いだけど気になるキャラになった人は多そう。' },

  // ── イナズマジャパン選出・ベンチの不満 ──
  { id: 23, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(23), seFile: '拍子木1.mp3',
    text: 'イナズマジャパンに不動が選ばれた時、なんでこいつがってなった。' },
  { id: 24, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(24),
    text: '味方のユニフォームを着ても、しばらく味方に見えなかった。' },
  { id: 25, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(25),
    text: '久遠監督に噛みつくところ、扱いづらさがそのまま出てて笑った。' },
  { id: 26, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(26),
    text: 'ベンチで文句言ってるだけなのに、妙に存在感があるんだよな。' },

  // ── ファイアードラゴン戦・切り札投入 ──
  { id: 27, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(27), seFile: '和太鼓でドドン.mp3',
    text: 'ファイアードラゴン戦で不動が入る流れ、ついに来たかって感じだった。' },
  { id: 28, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(28),
    text: '久遠監督がずっと温存してた理由が、ここで一気に見えてくるのがいい。' },
  { id: 29, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(29),
    text: '味方を信じろじゃなくて、自由にやれって投げ込まれるのが不動らしい。' },
  { id: 30, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(30),
    text: '不動が入るとチームが乱れるんだけど、その乱れが相手にも刺さるのが面白い。' },

  // ── 過去回想・歪んだ強さ ──
  { id: 31, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(31), seFile: '小鼓（こつづみ）.mp3',
    text: '子供時代の回想で、不動の強さへのこだわりが一気に重くなった。' },
  { id: 32, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(32),
    text: 'あの家庭環境を見た後だと、ひねくれてる理由が少しだけわかる。' },
  { id: 33, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(33),
    text: '人を信じるより先に強くならなきゃいけなかった感じがつらい。' },
  { id: 34, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(34),
    text: '悪童キャラの裏にちゃんと孤独があるの、ズルいと思った。' },

  // ── 鬼道とのライバル関係 ──
  { id: 35, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(35), seFile: '拍子木2.mp3',
    text: '不動と鬼道の関係、仲良しじゃないのに噛み合うのが最高だった。' },
  { id: 36, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(36),
    text: '鬼道が正統派の司令塔なら、不動は盤面を荒らす司令塔って感じ。' },
  { id: 37, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(37),
    text: '反発しながらも互いの考えを読んでるのが、見ていて気持ちいい。' },
  { id: 38, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(38),
    text: '不動が鬼道にボールを預けるだけで、成長したなって思えるのすごい。' },

  // ── チームK戦・帝国トリオ ──
  { id: 39, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(39), seFile: '和太鼓でドドン.mp3',
    text: 'チームK戦で鬼道、佐久間、不動が並ぶの、帝国好きにはたまらなかった。' },
  { id: 40, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(40),
    text: '新帝国で最悪の出会い方をした三人が、今度は同じ方向を向くのが熱い。' },
  { id: 41, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(41),
    text: '皇帝ペンギン3号の流れ、不動がちゃんと帝国の系譜に入った感じがした。' },
  { id: 42, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(42),
    text: 'あそこは不動をただの問題児で終わらせないための大事な回だったと思う。' },

  // ── 戦術眼・ベンチでも効く存在感 ──
  { id: 43, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(43), seFile: '拍子木1.mp3',
    text: '不動って試合に出てない時でも、相手の狙いをちゃんと見てるのが良い。' },
  { id: 44, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(44),
    text: '口は悪いけど、観察力と判断力は本物なんだよな。' },
  { id: 45, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(45),
    text: '久遠監督が切り札扱いしたのも納得できる。普通の選手じゃない。' },
  { id: 46, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(46),
    text: '出せば場が変わる、出さなくても圧がある。めちゃくちゃ便利なカード。' },

  // ── 終盤・チームの一員になった不動 ──
  { id: 47, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(47), seFile: '小鼓（こつづみ）.mp3',
    text: '終盤の不動、いつの間にかちゃんとイナズマジャパンの一員になってるのが良い。' },
  { id: 48, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(48),
    text: '最初はチームをかき乱すだけだったのに、最後は勝つためにかき乱してる。' },
  { id: 49, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(49),
    text: 'ジェットストリームの場面で不動が絡むの、ここまで見てきたご褒美感があった。' },
  { id: 50, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(50),
    text: 'あの不動がチームのために走ってるだけで、なんか感慨深い。' },

  // ── 総評 ──
  { id: 51, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(51), seFile: '拍子木2.mp3',
    text: '不動明王は、嫌われるために出てきて、気づいたら好きになってるタイプのキャラ。' },
  { id: 52, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(52),
    text: '悪童なのに戦術家で、問題児なのに切り札。不動はイナズマジャパンに必要なジョーカーでした。' },
];
