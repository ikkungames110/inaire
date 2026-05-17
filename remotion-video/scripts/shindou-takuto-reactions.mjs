/**
 * 台本: 神のタクトで試合を支配する天才キャプテン神童拓人に対する視聴者反応集
 * イナズマイレブンGO: 新生雷門キャプテンとしての葛藤と覚醒
 * 話者: ずんだもん(3) / 四国めたん(2) / 春日部つむぎ(8)
 */

const INTRO_SPEAKER = 2; // 四国めたん（ノーマル）

export const VOCAB = [
  { surface: '神童拓人', pronunciation: 'シンドウタクト', accent_type: 0 },
  { surface: '神童', pronunciation: 'シンドウ', accent_type: 0 },
  { surface: '拓人', pronunciation: 'タクト', accent_type: 0 },
  { surface: '松風天馬', pronunciation: 'マツカゼテンマ', accent_type: 0 },
  { surface: '天馬', pronunciation: 'テンマ', accent_type: 0 },
  { surface: '剣城京介', pronunciation: 'ツルギキョウスケ', accent_type: 0 },
  { surface: '剣城', pronunciation: 'ツルギ', accent_type: 0 },
  { surface: '霧野蘭丸', pronunciation: 'キリノランマル', accent_type: 0 },
  { surface: '霧野', pronunciation: 'キリノ', accent_type: 0 },
  { surface: '三国太一', pronunciation: 'サンゴクタイチ', accent_type: 0 },
  { surface: '三国', pronunciation: 'サンゴク', accent_type: 0 },
  { surface: '円堂守', pronunciation: 'エンドウマモル', accent_type: 0 },
  { surface: '円堂', pronunciation: 'エンドウ', accent_type: 0 },
  { surface: '鬼道有人', pronunciation: 'キドウユウト', accent_type: 0 },
  { surface: '鬼道', pronunciation: 'キドウ', accent_type: 0 },
  { surface: '新生雷門', pronunciation: 'シンセイライモン', accent_type: 0 },
  { surface: '雷門', pronunciation: 'ライモン', accent_type: 0 },
  { surface: 'フィフスセクター', pronunciation: 'フィフスセクター', accent_type: 0 },
  { surface: 'ホーリーロード', pronunciation: 'ホーリーロード', accent_type: 0 },
  { surface: '聖帝', pronunciation: 'セイテイ', accent_type: 0 },
  { surface: '化身', pronunciation: 'ケシン', accent_type: 0 },
  { surface: '奏者マエストロ', pronunciation: 'ソウシャマエストロ', accent_type: 0 },
  { surface: 'マエストロ', pronunciation: 'マエストロ', accent_type: 0 },
  { surface: '神のタクト', pronunciation: 'カミノタクト', accent_type: 0 },
  { surface: 'フォルテシモ', pronunciation: 'フォルテシモ', accent_type: 0 },
  { surface: 'ハーモニクス', pronunciation: 'ハーモニクス', accent_type: 0 },
  { surface: 'プレストターン', pronunciation: 'プレストターン', accent_type: 0 },
  { surface: 'ゲームメーカー', pronunciation: 'ゲームメーカー', accent_type: 0 },
  { surface: 'キャプテン', pronunciation: 'キャプテン', accent_type: 0 },
  { surface: 'MF', pronunciation: 'ミッドフィールダー', accent_type: 0 },
  { surface: 'GO', pronunciation: 'ゴー', accent_type: 0 },
];

const img = (id) => 'anime_' + String(Math.floor((id - 3) / 4) + 1).padStart(2, '0') + '.png';

export const COMMENTS = [
  // ── イントロ（isIntro: true・話速1.1x） ──
  { id: 0, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '和太鼓でドドン.mp3', isIntro: true,
    text: '今回は「神のタクトで試合を支配する天才キャプテン神童拓人」に対する当時の視聴者の反応を紹介します' },
  { id: 1, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '拍子木1.mp3', isIntro: true,
    text: 'フィフスセクターに支配されたサッカーの中で、雷門のキャプテンとして苦しみながらも仲間を導き、奏者マエストロやフォルテシモで試合の空気を変えたキャラクターです。' },
  { id: 2, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '拍子木2.mp3', isIntro: true,
    text: 'それではどうぞ！' },

  // ── 初登場・キャプテンの重み ──
  { id: 3, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(3), seFile: '拍子木1.mp3',
    text: '神童、初登場からもう「ただ者じゃないキャプテン」感がすごかった。' },
  { id: 4, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(4),
    text: '中学生なのに背負ってるものが重すぎる。あの表情だけで雷門の状況が分かる。' },
  { id: 5, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(5),
    text: '天馬の明るさと神童の苦しさの対比が、GO序盤の空気を一気に作ってた。' },
  { id: 6, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(6),
    text: 'キャプテンマーク握って泣くシーン、子ども向けアニメの重さじゃなかった。' },

  // ── 神のタクト ──
  { id: 7, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(7), seFile: '拍子木2.mp3',
    text: '神のタクトって名前からして強すぎる。サッカーで指揮者をやる発想がかっこいい。' },
  { id: 8, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(8),
    text: 'フィールド全体を見て、味方を動かして、試合を組み立てるのが神童の魅力。' },
  { id: 9, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(9),
    text: '神のタクトを使うと、急に試合が神童の楽譜みたいに見えるのすごい。' },
  { id: 10, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(10),
    text: 'プレーが派手なだけじゃなくて、頭脳で支配してる感じが唯一無二だった。' },

  // ── 奏者マエストロ ──
  { id: 11, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(11), seFile: '小鼓（こつづみ）.mp3',
    text: '奏者マエストロが出た瞬間、神童のキャラ性が全部つながった感じがした。' },
  { id: 12, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(12),
    text: '化身まで音楽家モチーフなの、設定が綺麗すぎる。' },
  { id: 13, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(13),
    text: 'マエストロと並ぶ神童、画面の説得力が強い。完全に天才ゲームメーカー。' },
  { id: 14, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(14),
    text: '強い化身なのに、力押しじゃなくて指揮者っぽいのが神童らしい。' },

  // ── フォルテシモ・技の華 ──
  { id: 15, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(15), seFile: '和太鼓でドドン.mp3',
    text: 'フォルテシモ初めて見た時、神童ってシュートもこんなに華があるのかって驚いた。' },
  { id: 16, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(16),
    text: '指揮官タイプなのに自分でも点を取りに行けるの、普通に反則だよ。' },
  { id: 17, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(17),
    text: 'フォルテシモの技名、音楽用語なのに必殺シュートとして成立してるのが良い。' },
  { id: 18, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(18),
    text: '神童のシュートは荒々しい強さじゃなくて、綺麗に決まる強さなんだよな。' },

  // ── ハーモニクス・化身技 ──
  { id: 19, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(19), seFile: '拍子木1.mp3',
    text: 'ハーモニクスまで持ってるの、音楽キャラとして完成度が高すぎる。' },
  { id: 20, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(20),
    text: '奏者マエストロからハーモニクスに行く流れ、見た目も名前も美しい。' },
  { id: 21, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(21),
    text: '神童は技名だけでキャラ説明ができるのが強い。全部音楽で統一されてる。' },
  { id: 22, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(22),
    text: '天才キャラって雑に強くなりがちだけど、神童はちゃんと演出が上品。' },

  // ── 天馬との関係 ──
  { id: 23, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(23), seFile: '拍子木2.mp3',
    text: '天馬に最初は戸惑ってた神童が、だんだん信じるようになるのが良い。' },
  { id: 24, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(24),
    text: '神童は現実を見てる側で、天馬は理想を叫ぶ側。この二人の温度差が刺さる。' },
  { id: 25, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(25),
    text: '天馬の真っ直ぐさに神童が少しずつ救われていく感じが好きだった。' },
  { id: 26, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(26),
    text: '神童がいるから天馬の無茶がチームの戦術になる。そこが新生雷門の強さ。' },

  // ── 剣城・霧野・チームとの関係 ──
  { id: 27, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(27), seFile: '小鼓（こつづみ）.mp3',
    text: '剣城相手にも引かない神童、キャプテンとしてちゃんと強い。' },
  { id: 28, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(28),
    text: '霧野が神童を心配する場面、二人の信頼関係が見えてよかった。' },
  { id: 29, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(29),
    text: '三国や霧野たちが神童を支えてるのを見ると、雷門のキャプテンなんだなって思う。' },
  { id: 30, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(30),
    text: '神童は一人で抱え込むタイプだから、周りが支える展開が余計に刺さる。' },

  // ── フィフスセクターとの対比 ──
  { id: 31, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(31), seFile: '拍子木1.mp3',
    text: 'フィフスセクターの指示に従うしかないキャプテンって、序盤の神童が一番つらかったと思う。' },
  { id: 32, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(32),
    text: '本当は勝ちたいのに、チームを守るために飲み込むしかないのがきつい。' },
  { id: 33, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(33),
    text: '神童が苦しんでるから、サッカーを取り戻すってテーマが重く見える。' },
  { id: 34, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(34),
    text: '管理されたサッカーの中で、神のタクトを持つキャプテンが悩む構図が上手い。' },

  // ── 天才だけど脆い ──
  { id: 35, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(35), seFile: '拍子木2.mp3',
    text: '神童は天才なのにメンタルが無敵じゃないところが良い。だから応援したくなる。' },
  { id: 36, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(36),
    text: '完璧そうに見えて、実は一番揺れてるキャラなのが人間味ある。' },
  { id: 37, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(37),
    text: '泣くキャプテンって聞くと弱そうなのに、神童の場合は責任感の強さに見える。' },
  { id: 38, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(38),
    text: '強さと繊細さが同居してるから、神童はただのクールキャラで終わらない。' },

  // ── 試合を変える存在 ──
  { id: 39, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(39), seFile: '和太鼓でドドン.mp3',
    text: '神童がボールを持つと、次の展開を期待して画面を見ちゃう。' },
  { id: 40, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(40),
    text: 'パス一本で流れを変えるタイプの強キャラって、イナズマだとかなり貴重。' },
  { id: 41, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(41),
    text: '派手なシュートだけじゃなくて、組み立てで魅せられるのが神童のすごさ。' },
  { id: 42, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(42),
    text: '神童がいないと雷門の試合が一気に不安になる。存在感が大きすぎる。' },

  // ── 鬼道との重なり・司令塔枠 ──
  { id: 43, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(43), seFile: '小鼓（こつづみ）.mp3',
    text: '鬼道と並ぶと、司令塔の系譜をちゃんと受け継いでる感じがする。' },
  { id: 44, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(44),
    text: '鬼道が戦術の怪物なら、神童は感性で試合を奏でる天才って感じ。' },
  { id: 45, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(45),
    text: '円堂世代の後に神童を置いたの、雷門のキャプテン像としてかなり良かった。' },
  { id: 46, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(46),
    text: '熱血だけじゃない、悩みながら導くキャプテンを見せてくれたのが神童。' },

  // ── 総評 ──
  { id: 47, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(47), seFile: '拍子木1.mp3',
    text: '神童拓人は、技も立場も性格も全部「指揮者」でまとまってるのが強い。' },
  { id: 48, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(48),
    text: '天才キャプテンなのに苦しむから、勝った時の解放感がすごい。' },
  { id: 49, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(49),
    text: '神のタクト、奏者マエストロ、フォルテシモ。神童は名前の響きからもう勝ってる。' },
  { id: 50, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(50),
    text: '派手さ、頭脳、繊細さ、キャプテン感。全部持ってるから人気が出るのも納得。' },
  { id: 51, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(51), seFile: '拍子木2.mp3',
    text: '神童拓人、試合を支配する天才キャプテンって言葉が一番似合う。' },
  { id: 52, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(52),
    text: '今見ても、神童がタクトを振るだけで雷門の空気が変わるのが気持ちいい。' },
];
