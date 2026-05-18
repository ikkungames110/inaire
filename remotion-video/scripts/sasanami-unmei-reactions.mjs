/**
 * 台本: サッカーのない世界を求めた新主人公・笹波雲明に対する反応集
 * イナズマイレブン 英雄たちのヴィクトリーロード: 南雲原サッカー部復活から雷門への挑戦まで
 * 話者: ずんだもん(3) / 四国めたん(2) / 春日部つむぎ(8)
 */

const INTRO_SPEAKER = 2; // 四国めたん（ノーマル）

export const VOCAB = [
  { surface: '笹波雲明', pronunciation: 'ササナミウンメイ', accent_type: 0 },
  { surface: '笹波', pronunciation: 'ササナミ', accent_type: 0 },
  { surface: '雲明', pronunciation: 'ウンメイ', accent_type: 0 },
  { surface: '南雲原', pronunciation: 'ナグモハラ', accent_type: 0 },
  { surface: '南雲原中', pronunciation: 'ナグモハラチュウ', accent_type: 0 },
  { surface: '南雲原中学校', pronunciation: 'ナグモハラチュウガッコウ', accent_type: 0 },
  { surface: '円堂ハル', pronunciation: 'エンドウハル', accent_type: 0 },
  { surface: 'ハル', pronunciation: 'ハル', accent_type: 0 },
  { surface: '雷門', pronunciation: 'ライモン', accent_type: 0 },
  { surface: '雷門中', pronunciation: 'ライモンチュウ', accent_type: 0 },
  { surface: '桜咲丈二', pronunciation: 'サクラザキジョウジ', accent_type: 0 },
  { surface: '桜咲', pronunciation: 'サクラザキ', accent_type: 0 },
  { surface: '丈二', pronunciation: 'ジョウジ', accent_type: 0 },
  { surface: '木曽路兵太', pronunciation: 'キソジヘイタ', accent_type: 0 },
  { surface: '木曽路', pronunciation: 'キソジ', accent_type: 0 },
  { surface: '兵太', pronunciation: 'ヘイタ', accent_type: 0 },
  { surface: '忍原来夏', pronunciation: 'シノハラライカ', accent_type: 0 },
  { surface: '忍原', pronunciation: 'シノハラ', accent_type: 0 },
  { surface: '来夏', pronunciation: 'ライカ', accent_type: 0 },
  { surface: '四川堂我流', pronunciation: 'シセンドウガリュウ', accent_type: 0 },
  { surface: '四川堂', pronunciation: 'シセンドウ', accent_type: 0 },
  { surface: '我流', pronunciation: 'ガリュウ', accent_type: 0 },
  { surface: '柳生駿河', pronunciation: 'ヤギュウスルガ', accent_type: 0 },
  { surface: '柳生', pronunciation: 'ヤギュウ', accent_type: 0 },
  { surface: '駿河', pronunciation: 'スルガ', accent_type: 0 },
  { surface: '古道会亀雄', pronunciation: 'コドウカイカメオ', accent_type: 0 },
  { surface: '古道会', pronunciation: 'コドウカイ', accent_type: 0 },
  { surface: '亀雄', pronunciation: 'カメオ', accent_type: 0 },
  { surface: 'ヴィクトリーロード', pronunciation: 'ヴィクトリーロード', accent_type: 0 },
  { surface: 'サッカー復権派', pronunciation: 'サッカーフッケンハ', accent_type: 0 },
  { surface: 'MF', pronunciation: 'ミッドフィールダー', accent_type: 0 },
];

const img = (id) => 'anime_' + String(Math.floor((id - 3) / 4) + 1).padStart(2, '0') + '.png';

export const COMMENTS = [
  // ── イントロ（isIntro: true・話速1.1x） ──
  { id: 0, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '和太鼓でドドン.mp3', isIntro: true,
    text: '今回は「サッカーのない世界を求めた新主人公、笹波雲明が南雲原サッカー部を復活させる物語」に対するプレイヤーの反応を紹介します' },
  { id: 1, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '拍子木1.mp3', isIntro: true,
    text: '雲明はサッカーを激しく嫌う少年として始まり、仲間との出会いで再び向き合い、絶対王者の雷門へ挑む主人公です。' },
  { id: 2, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '拍子木2.mp3', isIntro: true,
    text: 'それではどうぞ！' },

  // ── サッカー嫌いの新主人公 ──
  { id: 3, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(3), seFile: '和太鼓でドドン.mp3',
    text: '新主人公の第一声が、サッカーのない世界を求める少年なの、かなり攻めてる。' },
  { id: 4, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(4),
    text: '円堂や天馬みたいにサッカー大好きから始まらないのが、まずびっくりした。' },
  { id: 5, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(5),
    text: 'サッカーがないから南雲原を選んだって時点で、だいぶ重い事情を感じる。' },
  { id: 6, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(6),
    text: '笹波雲明って名前も、雲と運命がかかってそうで新作主人公感がある。' },

  // ── 嫌いというより見られない痛み ──
  { id: 7, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(7), seFile: '拍子木1.mp3',
    text: 'ボールを見ただけで表情が曇るから、ただ嫌いなだけじゃないのが伝わる。' },
  { id: 8, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(8),
    text: '雲明のサッカー嫌いって、嫌悪というより好きだったものを見られない痛みに見える。' },
  { id: 9, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(9),
    text: '明るいスポーツものなのに、主人公の入口がこんなに静かなの新鮮だった。' },
  { id: 10, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(10),
    text: '冷静で少し影がある主人公にしたことで、ヴィクトリーロードの空気が一気に変わった。' },

  // ── 桜咲と木曽路との出会い ──
  { id: 11, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(11), seFile: '拍子木2.mp3',
    text: '桜咲丈二との出会い、問題児に見えて才能の塊なのがすぐ分かるの良い。' },
  { id: 12, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(12),
    text: '木曽路兵太の明るさがあるから、雲明の重さが少し中和されて助かる。' },
  { id: 13, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(13),
    text: '雲明、自分では蹴れないぶん、人の動きと才能を見る目が鋭い。' },
  { id: 14, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(14),
    text: '桜咲の足にすぐ反応するところ、ただのサッカー嫌いではないんだよな。' },

  // ── サッカーを笑われた時のスイッチ ──
  { id: 15, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(15), seFile: '小鼓（こつづみ）.mp3',
    text: 'サッカーを嫌ってるはずなのに、サッカーを笑われた瞬間だけ目の色が変わるの熱い。' },
  { id: 16, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(16),
    text: 'あの矛盾で、雲明は本当はまだサッカーを大事にしてるんだなって分かる。' },
  { id: 17, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(17),
    text: '野球部の見せ物に怒るところ、普段の冷静さが崩れるのが良かった。' },
  { id: 18, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(18),
    text: 'サッカーから逃げたいのに、サッカーを汚されるのは許せないのが雲明なんだよ。' },

  // ── 幼少期と再起 ──
  { id: 19, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(19), seFile: '和太鼓でドドン.mp3',
    text: '子どもの頃にサッカーができない現実を突きつけられるの、主人公の過去として重すぎる。' },
  { id: 20, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(20),
    text: 'プレーで夢を叶える主人公じゃなくて、できない側からサッカーを取り戻す主人公なのが新しい。' },
  { id: 21, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(21),
    text: '雲明の弱さがそのまま物語の芯になってるから、応援したくなる。' },
  { id: 22, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(22),
    text: 'もう逃げないって決める場面、静かなのにかなり主人公してた。' },

  // ── サッカー部復活 ──
  { id: 23, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(23), seFile: '拍子木1.mp3',
    text: '南雲原の部室を開けるだけで、失われたものが戻ってくる感じがして熱い。' },
  { id: 24, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(24),
    text: 'キャプテン兼監督って肩書き、雲明にしかできない主人公ポジションだと思う。' },
  { id: 25, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(25),
    text: '選手として目立つより、チームの心臓として動かすタイプなのが面白い。' },
  { id: 26, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(26),
    text: 'サッカー復権派って言葉が、雲明の立場を一番うまく表してる。' },

  // ── 作戦家としての雲明 ──
  { id: 27, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(27), seFile: '拍子木2.mp3',
    text: '雲明はドリブルで突破するんじゃなくて、作戦で突破口を作る主人公なんだよな。' },
  { id: 28, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(28),
    text: '相手の弱点と味方の強みを見つけるのがうまくて、監督向きすぎる。' },
  { id: 29, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(29),
    text: '説明不足で周りを振り回すところもあるけど、勝ち筋はちゃんと見えてる。' },
  { id: 30, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(30),
    text: '目的のためなら泥臭いこともやるのが、雲明の強さでも怖さでもある。' },

  // ── 南雲原の仲間たち ──
  { id: 31, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(31), seFile: '小鼓（こつづみ）.mp3',
    text: '南雲原の寄せ集め感、最初は弱そうなのにだんだん部活になっていくのが好き。' },
  { id: 32, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(32),
    text: '桜咲、木曽路、忍原、四川堂、柳生、古道会。クセ強い仲間をまとめるだけで大変。' },
  { id: 33, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(33),
    text: '雲明はみんなを引っ張るというより、それぞれの中にある火をつけていく感じ。' },
  { id: 34, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(34),
    text: '才能を見逃さないから、問題児がちゃんと戦力に変わっていく。' },

  // ── 日本一宣言と雷門への挑戦 ──
  { id: 35, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(35), seFile: '和太鼓でドドン.mp3',
    text: '南雲原が日本一を目指すって言い出した時、無茶なのにワクワクした。' },
  { id: 36, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(36),
    text: 'ちっぽけな学校が絶対王者の雷門に挑む構図、やっぱりイナズマイレブンだわ。' },
  { id: 37, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(37),
    text: '雷門が今回は追いかける目標として立ちはだかるの、シリーズの見せ方がうまい。' },
  { id: 38, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(38),
    text: '雲明が勝ちたいと言うたびに、サッカーへの未練が希望に変わっていく感じがする。' },

  // ── 円堂ハルとの対比 ──
  { id: 39, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(39), seFile: '拍子木1.mp3',
    text: '円堂ハルがサッカーモンスターで、雲明ができない側の主人公なの対比が強すぎる。' },
  { id: 40, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(40),
    text: '才能の頂点にいるハルと、サッカーを諦めた雲明が出会うのが物語の起点なの良い。' },
  { id: 41, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(41),
    text: '二人が向かい合うだけで、プレー以外の勝負が始まってる感じがする。' },
  { id: 42, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(42),
    text: 'ハルが光なら、雲明は雲の中から道を探す主人公って感じ。名前まで合ってる。' },

  // ── 弱者側から挑む物語 ──
  { id: 43, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(43), seFile: '拍子木2.mp3',
    text: 'ヴィクトリーロードは、強いチームで勝つ話じゃなくて、弱い側から強者に届く話なのが良い。' },
  { id: 44, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(44),
    text: '雲明がベンチ側から試合を動かすから、いつもの主人公とは違う緊張感がある。' },
  { id: 45, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(45),
    text: '自分ができないからこそ、仲間の一歩に本気で賭けられるんだと思う。' },
  { id: 46, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(46),
    text: 'プレーできる主人公より弱いはずなのに、物語を動かす力はちゃんと主人公級。' },

  // ── 雲明自身のサッカー勘 ──
  { id: 47, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(47), seFile: '小鼓（こつづみ）.mp3',
    text: '雲明がボールに反応する場面、サッカー勘がまだ消えてないのが分かって胸に来る。' },
  { id: 48, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(48),
    text: '蹴れないと思って見てたから、足で止めるだけでもめちゃくちゃ大きな一歩に見える。' },
  { id: 49, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(49),
    text: '雲明にとってサッカーは呪いでもあるけど、やっぱり救いでもあるんだよな。' },
  { id: 50, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(50),
    text: 'できないから諦めるんじゃなくて、できない自分のまま関わり方を探すのが良い。' },

  // ── 総評 ──
  { id: 51, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(51), seFile: '和太鼓でドドン.mp3',
    text: '笹波雲明は、サッカー嫌いから始まって、誰よりもサッカーを諦めきれない主人公だった。' },
  { id: 52, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(52),
    text: '南雲原の仲間と一緒に失われたサッカーを取り戻す雲明の道は、新時代のイナズマイレブンそのものでした。' },
];
