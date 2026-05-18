/**
 * 台本: 熱血キャプテン円堂守に対する視聴者反応集
 * 無印イナズマイレブン: 雷門結成から世界大会決勝まで
 * 話者: ずんだもん(3) / 四国めたん(2) / 春日部つむぎ(8)
 *
 * 5ch過去ログ・2ch系まとめ・スレ由来wikiの反応要旨を参照し、
 * そのままの転載ではなく、VOICEVOX向けに短く言い換えて構成。
 */

const INTRO_SPEAKER = 2; // 四国めたん（ノーマル）

export const VOCAB = [
  { surface: '円堂守', pronunciation: 'エンドウマモル', accent_type: 0 },
  { surface: '円堂', pronunciation: 'エンドウ', accent_type: 0 },
  { surface: '守', pronunciation: 'マモル', accent_type: 0 },
  { surface: '雷門', pronunciation: 'ライモン', accent_type: 0 },
  { surface: '雷門中', pronunciation: 'ライモンチュウ', accent_type: 0 },
  { surface: 'イナズマジャパン', pronunciation: 'イナズマジャパン', accent_type: 0 },
  { surface: 'ゴッドハンド', pronunciation: 'ゴッドハンド', accent_type: 0 },
  { surface: 'マジン・ザ・ハンド', pronunciation: 'マジンザハンド', accent_type: 0 },
  { surface: 'マジンザハンド', pronunciation: 'マジンザハンド', accent_type: 0 },
  { surface: '熱血パンチ', pronunciation: 'ネッケツパンチ', accent_type: 0 },
  { surface: '爆裂パンチ', pronunciation: 'バクレツパンチ', accent_type: 0 },
  { surface: '正義の鉄拳', pronunciation: 'セイギノテッケン', accent_type: 0 },
  { surface: 'いかりのてっつい', pronunciation: 'イカリノテッツイ', accent_type: 0 },
  { surface: 'イジゲン・ザ・ハンド', pronunciation: 'イジゲンザハンド', accent_type: 0 },
  { surface: 'ゴッドキャッチ', pronunciation: 'ゴッドキャッチ', accent_type: 0 },
  { surface: 'ジ・アース', pronunciation: 'ジアース', accent_type: 0 },
  { surface: 'ジェットストリーム', pronunciation: 'ジェットストリーム', accent_type: 0 },
  { surface: 'リベロ', pronunciation: 'リベロ', accent_type: 0 },
  { surface: 'ダークエンペラーズ', pronunciation: 'ダークエンペラーズ', accent_type: 0 },
  { surface: 'エイリア学園', pronunciation: 'エイリアガクエン', accent_type: 0 },
  { surface: 'ジェミニストーム', pronunciation: 'ジェミニストーム', accent_type: 0 },
  { surface: '帝国学園', pronunciation: 'テイコクガクエン', accent_type: 0 },
  { surface: 'ゼウス', pronunciation: 'ゼウス', accent_type: 0 },
  { surface: 'アフロディ', pronunciation: 'アフロディ', accent_type: 0 },
  { surface: '豪炎寺', pronunciation: 'ゴウエンジ', accent_type: 0 },
  { surface: '鬼道', pronunciation: 'キドウ', accent_type: 0 },
  { surface: '風丸', pronunciation: 'カザマル', accent_type: 0 },
  { surface: '染岡', pronunciation: 'ソメオカ', accent_type: 0 },
  { surface: '壁山', pronunciation: 'カベヤマ', accent_type: 0 },
  { surface: '立向居', pronunciation: 'タチムカイ', accent_type: 0 },
  { surface: '円堂大介', pronunciation: 'エンドウダイスケ', accent_type: 0 },
  { surface: '大介', pronunciation: 'ダイスケ', accent_type: 0 },
  { surface: 'ロココ', pronunciation: 'ロココ', accent_type: 0 },
  { surface: 'リトルギガント', pronunciation: 'リトルギガント', accent_type: 0 },
  { surface: 'FFI', pronunciation: 'フットボールフロンティアインターナショナル', accent_type: 0 },
  { surface: 'GK', pronunciation: 'ゴールキーパー', accent_type: 0 },
  { surface: 'DF', pronunciation: 'ディフェンダー', accent_type: 0 },
  { surface: 'FW', pronunciation: 'フォワード', accent_type: 0 },
];

const img = (id) => 'anime_' + String(Math.floor((id - 3) / 4) + 1).padStart(2, '0') + '.png';

export const COMMENTS = [
  // ── イントロ（isIntro: true・話速1.1x） ──
  { id: 0, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '和太鼓でドドン.mp3', isIntro: true,
    text: '今回は「雷門を導いた熱血キャプテン円堂守」に対する視聴者の反応を紹介します' },
  { id: 1, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '拍子木1.mp3', isIntro: true,
    text: '廃部寸前の雷門を引っ張り、ゴールを守りながら仲間の心まで動かしていく、初代イナズマイレブンの象徴です。' },
  { id: 2, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '拍子木2.mp3', isIntro: true,
    text: 'それではどうぞ！' },

  // ── 初登場・主人公感 ──
  { id: 3, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(3), seFile: '拍子木1.mp3',
    text: '円堂、初回から一人だけ温度高すぎて笑う。でもそこが主人公なんだよな。' },
  { id: 4, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(4),
    text: '七人しかいないサッカー部で、フットボールフロンティア諦めてないの普通にすごい。' },
  { id: 5, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(5),
    text: 'こいつの「サッカーやろうぜ」って、誘い文句というよりもう圧なんだよ。' },
  { id: 6, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(6),
    text: '最初はただのサッカーバカかと思ったら、ちゃんと周り見てるのが強い。' },

  // ── 布教力・円堂教 ──
  { id: 7, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(7), seFile: '拍子木2.mp3',
    text: '円堂が声かけるだけで部員増えていくの、冷静に考えるとカリスマがすごい。' },
  { id: 8, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(8),
    text: '掲示板で円堂教とか言われるのもわかる。あれは入信する。' },
  { id: 9, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(9),
    text: '豪炎寺への距離の詰め方、今見るとだいぶ強引なのに嫌な感じしない。' },
  { id: 10, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(10),
    text: 'あの前向きさがなかったら雷門は一話で終わってた。これはマジ。' },

  // ── GK主人公・ゴッドハンド ──
  { id: 11, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(11), seFile: '小鼓（こつづみ）.mp3',
    text: '主人公がGKって最初どうなんと思ったけど、敵味方どっちも目立つから上手い配置だった。' },
  { id: 12, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(12),
    text: 'ゴッドハンド初成功の気持ちよさ、あれで一気に引き込まれた人多いだろ。' },
  { id: 13, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(13),
    text: '手で巨大な技を受け止めるだけなのに、なぜあんなに熱いのか。' },
  { id: 14, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(14),
    text: '円堂が止めると、ただのセーブじゃなくてチーム全体が立ち直る感じがある。' },

  // ── 特訓・努力枠 ──
  { id: 15, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(15), seFile: '和太鼓でドドン.mp3',
    text: 'タイヤ特訓してる時点でだいぶおかしいのに、本人が一番楽しそうなの草。' },
  { id: 16, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(16),
    text: '天才というより、痛い目見ても食らいつく努力の鬼って印象が強い。' },
  { id: 17, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(17),
    text: '手が痛くても目が死なないの、子供向け主人公としてだいぶ強い。' },
  { id: 18, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(18),
    text: '大介さんのノートを読んで特訓する流れ、祖父への憧れがちゃんと出てて好き。' },

  // ── 豪炎寺・鬼道との関係 ──
  { id: 19, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(19), seFile: '拍子木1.mp3',
    text: '豪炎寺と円堂は言葉少ないのに、信頼だけはめちゃくちゃ伝わる。' },
  { id: 20, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(20),
    text: '鬼道が仲間になってからの雷門、円堂の主人公感がさらに増した。' },
  { id: 21, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(21),
    text: '円堂、豪炎寺、鬼道の三人が揃うと「あ、イナズマイレブンだ」ってなる。' },
  { id: 22, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(22),
    text: '豪炎寺は火力、鬼道は頭脳、円堂は心臓って感じのバランスが良い。' },

  // ── ゼウス戦・マジン・ザ・ハンド ──
  { id: 23, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(23), seFile: '拍子木2.mp3',
    text: 'ゼウス戦の円堂は本当にボロボロで、見てるこっちの胃が痛かった。' },
  { id: 24, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(24),
    text: 'アフロディ相手に何回抜かれても立つの、普通にメンタルおかしい。' },
  { id: 25, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(25),
    text: 'マジン・ザ・ハンド完成の瞬間、初代のピークの一つだと思う。' },
  { id: 26, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(26),
    text: 'ゴッドハンドからマジン・ザ・ハンドへの格上げ、名前だけで勝ってる。' },

  // ── キャプテンとしての強さ ──
  { id: 27, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(27), seFile: '小鼓（こつづみ）.mp3',
    text: '円堂って自分が折れないだけじゃなくて、折れそうなやつの横に来るんだよな。' },
  { id: 28, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(28),
    text: '染岡にも壁山にもちゃんと声をかけるから、キャプテンとして信用できる。' },
  { id: 29, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(29),
    text: '熱血だけならうるさいキャラで終わるけど、円堂は仲間の変化に気づく。' },
  { id: 30, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(30),
    text: '「一点はみんなで取る」みたいな考え方が、ちゃんと雷門の空気を作ってる。' },

  // ── エイリア編・リベロ転向 ──
  { id: 31, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(31), seFile: '拍子木1.mp3',
    text: 'ジェミニストームにやられた時、円堂でも止められないのかって空気になった。' },
  { id: 32, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(32),
    text: 'キーパー円堂をリベロにする発想、当時かなり攻めてたと思う。' },
  { id: 33, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(33),
    text: 'リベロ円堂、賛否ありそうだけど前に出る主人公としてはめちゃくちゃ映える。' },
  { id: 34, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(34),
    text: '守るだけじゃ勝てないって流れで、円堂自身が変わるのが熱い。' },

  // ── ダークエンペラーズ戦 ──
  { id: 35, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(35), seFile: '拍子木2.mp3',
    text: 'ダークエンペラーズ戦、円堂の「仲間を取り戻す」感じが一番出てる。' },
  { id: 36, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(36),
    text: '普通なら戦って倒す流れなのに、円堂は最後までサッカーに戻そうとするんだよ。' },
  { id: 37, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(37),
    text: 'あそこでまた「サッカーやろうぜ」が効くの、主人公の積み重ねが強い。' },
  { id: 38, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(38),
    text: '洗脳も闇落ちも、最終的に円堂のサッカー愛に押し戻されるのすごい。' },

  // ── 世界編・技のインフレ ──
  { id: 39, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(39), seFile: '和太鼓でドドン.mp3',
    text: '世界編の円堂、毎試合みたいにゴール割られてるのに評価が落ちないの不思議。' },
  { id: 40, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(40),
    text: '正義の鉄拳が進化していくの、技名の勢いが完全に円堂。' },
  { id: 41, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(41),
    text: 'イジゲン・ザ・ハンドの発想、急にキーパー技が理屈を超えてきた感じがする。' },
  { id: 42, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(42),
    text: 'ゴッドハンド、マジン、鉄拳、イジゲン。円堂の技欄だけでスレが伸びる。' },

  // ── ゴッドキャッチ・リトルギガント ──
  { id: 43, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(43), seFile: '小鼓（こつづみ）.mp3',
    text: 'ゴッドキャッチは完成するまでの失敗込みで好き。いきなり最強じゃないのが円堂。' },
  { id: 44, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(44),
    text: 'リトルギガント戦で、最後に自分一人でゴールを守るって覚悟するの熱すぎる。' },
  { id: 45, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(45),
    text: 'ロココとの対決、キーパー同士なのにラスボス戦っぽさがあって好き。' },
  { id: 46, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(46),
    text: 'ゴッドキャッチで止めた時、円堂の集大成を見た感じがした。' },

  // ── メタ評価・人気 ──
  { id: 47, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(47), seFile: '拍子木1.mp3',
    text: '掲示板だとツッコミも多いけど、結局みんな円堂の主人公力は認めてる感じある。' },
  { id: 48, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(48),
    text: '出し惜しみするなとか言われがちだけど、新技の初披露は毎回ちゃんと盛り上がる。' },
  { id: 49, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(49),
    text: 'キーパーなのに必殺技が多いって話題、円堂ならではだよな。' },
  { id: 50, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(50),
    text: '円堂がいると、どんな相手でも試合が少年漫画になるのが強い。' },

  // ── 総評 ──
  { id: 51, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(51), seFile: '拍子木2.mp3',
    text: '円堂守は、うまいとか強いより先に「こいつがいたら諦めない」って思わせる主人公。' },
  { id: 52, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(52),
    text: '雷門のキャプテンとしても、初代主人公としても、円堂はやっぱり別格です。' },
];
