/**
 * 台本: 最強のオールラウンドプレイヤー松風天馬に対する視聴者反応集
 * イナズマイレブンGO: 新生雷門加入から万能プレイヤーとしての評価まで
 * 話者: ずんだもん(3) / 四国めたん(2) / 春日部つむぎ(8)
 */

const INTRO_SPEAKER = 2; // 四国めたん（ノーマル）

export const VOCAB = [
  { surface: '松風天馬', pronunciation: 'マツカゼテンマ', accent_type: 0 },
  { surface: '松風', pronunciation: 'マツカゼ', accent_type: 0 },
  { surface: '天馬', pronunciation: 'テンマ', accent_type: 0 },
  { surface: 'オールラウンド', pronunciation: 'オールラウンド', accent_type: 0 },
  { surface: 'オールラウンダー', pronunciation: 'オールラウンダー', accent_type: 0 },
  { surface: '新生雷門', pronunciation: 'シンセイライモン', accent_type: 0 },
  { surface: '雷門', pronunciation: 'ライモン', accent_type: 0 },
  { surface: '円堂', pronunciation: 'エンドウ', accent_type: 0 },
  { surface: '円堂守', pronunciation: 'エンドウマモル', accent_type: 0 },
  { surface: '神童', pronunciation: 'シンドウ', accent_type: 0 },
  { surface: '神童拓人', pronunciation: 'シンドウタクト', accent_type: 0 },
  { surface: '剣城', pronunciation: 'ツルギ', accent_type: 0 },
  { surface: '剣城京介', pronunciation: 'ツルギキョウスケ', accent_type: 0 },
  { surface: '西園信助', pronunciation: 'ニシゾノシンスケ', accent_type: 0 },
  { surface: '信助', pronunciation: 'シンスケ', accent_type: 0 },
  { surface: '空野葵', pronunciation: 'ソラノアオイ', accent_type: 0 },
  { surface: '葵', pronunciation: 'アオイ', accent_type: 0 },
  { surface: 'サスケ', pronunciation: 'サスケ', accent_type: 0 },
  { surface: 'フィフスセクター', pronunciation: 'フィフスセクター', accent_type: 0 },
  { surface: '化身', pronunciation: 'ケシン', accent_type: 0 },
  { surface: '魔神ペガサス', pronunciation: 'マジンペガサス', accent_type: 0 },
  { surface: '魔神ペガサスアーク', pronunciation: 'マジンペガサスアーク', accent_type: 0 },
  { surface: 'そよかぜステップ', pronunciation: 'ソヨカゼステップ', accent_type: 0 },
  { surface: 'マッハウィンド', pronunciation: 'マッハウィンド', accent_type: 0 },
  { surface: 'ゴッドウィンド', pronunciation: 'ゴッドウィンド', accent_type: 0 },
  { surface: '風穴ドライブ', pronunciation: 'カザアナドライブ', accent_type: 0 },
  { surface: 'Zスラッシュ', pronunciation: 'ゼットスラッシュ', accent_type: 0 },
  { surface: '嵐竜巻ハリケーン', pronunciation: 'アラシタツマキハリケーン', accent_type: 0 },
  { surface: 'ペガサスブレイク', pronunciation: 'ペガサスブレイク', accent_type: 0 },
  { surface: 'GK', pronunciation: 'ゴールキーパー', accent_type: 0 },
  { surface: 'FW', pronunciation: 'フォワード', accent_type: 0 },
  { surface: 'MF', pronunciation: 'ミッドフィールダー', accent_type: 0 },
  { surface: 'GO', pronunciation: 'ゴー', accent_type: 0 },
];

const img = (id) => 'anime_' + String(Math.floor((id - 3) / 4) + 1).padStart(2, '0') + '.png';

export const COMMENTS = [
  // ── イントロ（isIntro: true・話速1.1x） ──
  { id: 0, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '和太鼓でドドン.mp3', isIntro: true,
    text: '今回は「最強のオールラウンドプレイヤー松風天馬」に対する当時の視聴者の反応を紹介します' },
  { id: 1, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '拍子木1.mp3', isIntro: true,
    text: 'ミッドフィールダーとして走り回り、シュートもドリブルも守備もこなし、時にはゴールまで守った万能主人公として視聴者を驚かせ続けたキャラクターです。' },
  { id: 2, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '拍子木2.mp3', isIntro: true,
    text: 'それではどうぞ！' },

  // ── 初登場・第一印象 ──
  { id: 3, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(3), seFile: '拍子木1.mp3',
    text: '天馬って最初は普通の新主人公だと思ってたのに、気づいたら万能すぎて笑ってた。' },
  { id: 4, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(4),
    text: '最初から「なんとかなるさ」で突っ込んでいくの、軽いようで芯が強かった。' },
  { id: 5, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(5),
    text: '円堂の次の主人公ってプレッシャー重すぎるのに、天馬はちゃんと自分の主人公像を作ったよな。' },
  { id: 6, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(6),
    text: '犬のサスケと出てきた時はかわいい枠かと思った。まさか最強候補になるとは。' },

  // ── ドリブル・突破力 ──
  { id: 7, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(7), seFile: '拍子木2.mp3',
    text: 'そよかぜステップ初めて見た時、地味なのにめちゃくちゃ天馬らしい技だと思った。' },
  { id: 8, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(8),
    text: '突破力があるのに力任せじゃなくて、風みたいに抜けていくのが良い。' },
  { id: 9, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(9),
    text: '天馬のドリブルって見ててストレスがない。無理やり感がなくてちゃんと上手い。' },
  { id: 10, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(10),
    text: 'MFとしてボールを運べる主人公なのが新鮮だった。試合を動かしてる感じが強い。' },

  // ── シュート能力 ──
  { id: 11, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(11), seFile: '小鼓（こつづみ）.mp3',
    text: 'マッハウィンドが出た時点で「あれ、こいつ点も取れるの？」ってなった。' },
  { id: 12, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(12),
    text: 'ゴッドウィンドまで行くと、もう完全にエース級のシュート力なんだよな。' },
  { id: 13, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(13),
    text: 'ドリブル主人公かと思わせて普通にゴールを決めるのが天馬の怖いところ。' },
  { id: 14, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(14),
    text: 'シュート技が増えるたびに、オールラウンダー感がどんどん強くなっていった。' },

  // ── 守備・ブロック ──
  { id: 15, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(15), seFile: '和太鼓でドドン.mp3',
    text: '攻撃だけじゃなくて守備にも戻ってくるの偉すぎる。主人公の運動量じゃない。' },
  { id: 16, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(16),
    text: '天馬が守備に入ると「あ、ここ止まるな」って安心感がある。' },
  { id: 17, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(17),
    text: 'ボールを奪う、運ぶ、決める。この一連を一人でやれるの反則だろ。' },
  { id: 18, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(18),
    text: '普通なら器用貧乏になりそうなのに、天馬は全部ちゃんと強いのがすごい。' },

  // ── GKもできる衝撃 ──
  { id: 19, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(19), seFile: '拍子木1.mp3',
    text: '一番びっくりしたのはGKまでやったこと。さすがに万能すぎる。' },
  { id: 20, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(20),
    text: 'MFが臨時でゴール守って成立するの、天馬だから許される展開だった。' },
  { id: 21, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(21),
    text: '守備もできるどころか、ゴール前でも仕事するのはさすがに笑う。' },
  { id: 22, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(22),
    text: 'GK経験まである主人公って、そりゃオールラウンドプレイヤーって言われるわ。' },

  // ── 化身・魔神ペガサス ──
  { id: 23, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(23), seFile: '拍子木2.mp3',
    text: '魔神ペガサスが出た瞬間、天馬の主人公感が一気に跳ね上がった。' },
  { id: 24, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(24),
    text: 'ペガサスの白い翼が天馬の風属性に合いすぎてる。デザイン勝ち。' },
  { id: 25, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(25),
    text: '化身を使っても天馬本人の泥臭さが消えないのが良いんだよな。' },
  { id: 26, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(26),
    text: '魔神ペガサスアークになった時は、主人公の成長演出として完璧だった。' },

  // ── チームを動かす力 ──
  { id: 27, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(27), seFile: '小鼓（こつづみ）.mp3',
    text: '天馬って一人で強いだけじゃなくて、周りを前向きにするのが本当に強い。' },
  { id: 28, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(28),
    text: '神童が迷ってる時も、剣城が閉じてる時も、天馬がぶつかっていくんだよな。' },
  { id: 29, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(29),
    text: 'プレーだけじゃなくてメンタル面でもチームの中心になってる。' },
  { id: 30, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(30),
    text: '天馬がいると「まだ行ける」って空気になるの、主人公として強すぎる。' },

  // ── 神童・剣城との関係 ──
  { id: 31, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(31), seFile: '拍子木1.mp3',
    text: '神童と天馬の関係、最初は温度差あったのにだんだん信頼になっていくのが好き。' },
  { id: 32, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(32),
    text: '剣城を真正面から変えていったのも天馬のすごさだと思う。普通は怖くて無理。' },
  { id: 33, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(33),
    text: '神童が頭脳、剣城が決定力、天馬が全部つなぐ風って感じがして良かった。' },
  { id: 34, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(34),
    text: 'この三人がそろうと新生雷門って感じがする。天馬はその真ん中にいる。' },

  // ── 「なんとかなるさ」の評価 ──
  { id: 35, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(35), seFile: '拍子木2.mp3',
    text: '「なんとかなるさ」って最初は軽く聞こえたけど、天馬が言うとだんだん重くなる。' },
  { id: 36, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(36),
    text: '根拠のない楽観じゃなくて、動き続ける覚悟なんだよな。' },
  { id: 37, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(37),
    text: '天馬は言葉より先に走るから、あの口癖に説得力が出てくる。' },
  { id: 38, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(38),
    text: '無茶をするけど、無責任じゃない。このバランスが天馬の魅力。' },

  // ── 必殺技の幅 ──
  { id: 39, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(39), seFile: '和太鼓でドドン.mp3',
    text: 'そよかぜステップ、マッハウィンド、ゴッドウィンド。技の幅が広すぎる。' },
  { id: 40, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(40),
    text: '風穴ドライブとかZスラッシュまで含めると、ドリブルもシュートも全部持ってる。' },
  { id: 41, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(41),
    text: '嵐竜巻ハリケーンみたいな個人技まで持ってるの、技の幅が広すぎる。' },
  { id: 42, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(42),
    text: '技名が全部「風」っぽいのに、やってることは万能なの面白い。' },

  // ── フィフスセクターとの対比 ──
  { id: 43, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(43), seFile: '小鼓（こつづみ）.mp3',
    text: 'フィフスセクターに支配されたサッカーで、天馬だけがずっと自由に走ってた感じがする。' },
  { id: 44, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(44),
    text: '管理されたサッカーに対して、風みたいな天馬を置くのは上手い構図だった。' },
  { id: 45, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(45),
    text: '天馬の自由さがあるから、GOのテーマがちゃんと伝わったと思う。' },
  { id: 46, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(46),
    text: '勝つためじゃなくてサッカーを取り戻すために走ってるのが天馬らしい。' },

  // ── 総評 ──
  { id: 47, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(47), seFile: '拍子木1.mp3',
    text: '攻撃、守備、ドリブル、メンタル。どこを切っても仕事するのが天馬。' },
  { id: 48, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(48),
    text: '主人公補正って言いたくなるのに、ちゃんと努力と行動で納得させてくる。' },
  { id: 49, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(49),
    text: '最初は円堂の後継者として見てたけど、最後は松風天馬という一人の主人公として見てた。' },
  { id: 50, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(50),
    text: '天馬は派手な最強じゃなくて、どこに置いても流れを変えるタイプの最強。' },
  { id: 51, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(51), seFile: '拍子木2.mp3',
    text: '松風天馬、最強のオールラウンドプレイヤーって呼び方が一番しっくりくる。' },
  { id: 52, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(52),
    text: 'どんな局面でも諦めずに走り続けるから、天馬のプレーは今見ても気持ちいい。' },
];
