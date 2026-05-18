/**
 * 台本: 炎のエース豪炎寺修也に対する視聴者反応集
 * 無印イナズマイレブン: 初登場からフットボールフロンティアインターナショナル決勝まで
 * 話者: ずんだもん(3) / 四国めたん(2) / 春日部つむぎ(8)
 */

const INTRO_SPEAKER = 2; // 四国めたん（ノーマル）

export const VOCAB = [
  { surface: '豪炎寺修也', pronunciation: 'ゴウエンジシュウヤ', accent_type: 0 },
  { surface: '豪炎寺', pronunciation: 'ゴウエンジ', accent_type: 0 },
  { surface: '修也', pronunciation: 'シュウヤ', accent_type: 0 },
  { surface: '円堂守', pronunciation: 'エンドウマモル', accent_type: 0 },
  { surface: '円堂', pronunciation: 'エンドウ', accent_type: 0 },
  { surface: '鬼道有人', pronunciation: 'キドウユウト', accent_type: 0 },
  { surface: '鬼道', pronunciation: 'キドウ', accent_type: 0 },
  { surface: '染岡', pronunciation: 'ソメオカ', accent_type: 0 },
  { surface: '吹雪士郎', pronunciation: 'フブキシロウ', accent_type: 0 },
  { surface: '吹雪', pronunciation: 'フブキ', accent_type: 0 },
  { surface: '壁山', pronunciation: 'カベヤマ', accent_type: 0 },
  { surface: '風丸', pronunciation: 'カザマル', accent_type: 0 },
  { surface: '虎丸', pronunciation: 'トラマル', accent_type: 0 },
  { surface: '土方', pronunciation: 'ヒジカタ', accent_type: 0 },
  { surface: '夕香', pronunciation: 'ユウカ', accent_type: 0 },
  { surface: '豪炎寺夕香', pronunciation: 'ゴウエンジユウカ', accent_type: 0 },
  { surface: '木戸川清修', pronunciation: 'キドカワセイシュウ', accent_type: 0 },
  { surface: '木戸川', pronunciation: 'キドカワ', accent_type: 0 },
  { surface: '雷門', pronunciation: 'ライモン', accent_type: 0 },
  { surface: '帝国学園', pronunciation: 'テイコクガクエン', accent_type: 0 },
  { surface: '帝国', pronunciation: 'テイコク', accent_type: 0 },
  { surface: 'エイリア学園', pronunciation: 'エイリアガクエン', accent_type: 0 },
  { surface: 'イナズマジャパン', pronunciation: 'イナズマジャパン', accent_type: 0 },
  { surface: 'ファイアードラゴン', pronunciation: 'ファイアードラゴン', accent_type: 0 },
  { surface: 'リトルギガント', pronunciation: 'リトルギガント', accent_type: 0 },
  { surface: 'ロココ', pronunciation: 'ロココ', accent_type: 0 },
  { surface: 'ファイアトルネード', pronunciation: 'ファイアトルネード', accent_type: 0 },
  { surface: '爆熱ストーム', pronunciation: 'バクネツストーム', accent_type: 0 },
  { surface: '爆熱スクリュー', pronunciation: 'バクネツスクリュー', accent_type: 0 },
  { surface: 'イナズマ落とし', pronunciation: 'イナズマオトシ', accent_type: 0 },
  { surface: 'イナズマブレイク', pronunciation: 'イナズマブレイク', accent_type: 0 },
  { surface: 'ドラゴントルネード', pronunciation: 'ドラゴントルネード', accent_type: 0 },
  { surface: 'クロスファイア', pronunciation: 'クロスファイア', accent_type: 0 },
  { surface: 'タイガーストーム', pronunciation: 'タイガーストーム', accent_type: 0 },
  { surface: 'グランドファイア', pronunciation: 'グランドファイア', accent_type: 0 },
  { surface: 'ジェットストリーム', pronunciation: 'ジェットストリーム', accent_type: 0 },
  { surface: 'ジ・アース', pronunciation: 'ジアース', accent_type: 0 },
  { surface: 'フットボールフロンティア', pronunciation: 'フットボールフロンティア', accent_type: 0 },
  { surface: 'FFI', pronunciation: 'フットボールフロンティアインターナショナル', accent_type: 0 },
];

const img = (id) => 'anime_' + String(Math.floor((id - 3) / 4) + 1).padStart(2, '0') + '.png';

export const COMMENTS = [
  // イントロ（isIntro: true・話速1.1x）
  { id: 0, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '和太鼓でドドン.mp3', isIntro: true,
    text: '今回は「ファイアトルネードで空気を変えた炎のエース、豪炎寺修也」に対する視聴者の反応を紹介します' },
  { id: 1, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '拍子木1.mp3', isIntro: true,
    text: 'サッカーをやめた少年が、妹との約束と円堂の熱に動かされ、雷門の得点源へ戻ってくる流れが刺さるキャラクターです。' },
  { id: 2, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '拍子木2.mp3', isIntro: true,
    text: 'それではどうぞ！' },

  // 初登場・帝国戦の衝撃
  { id: 3, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(3), seFile: '和太鼓でドドン.mp3',
    text: '豪炎寺がピッチに入ってきた瞬間、試合の空気が変わったのが分かった。' },
  { id: 4, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(4),
    text: 'ほとんど喋らないのに、こいつが来たら何か起きる感がすごい。' },
  { id: 5, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(5),
    text: 'ファイアトルネード初見の派手さで、一気にエースだって理解した。' },
  { id: 6, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(6),
    text: '帝国相手にあの入り方は格好よすぎる。主人公じゃないのに主人公みたいだった。' },

  // 夕香・サッカーをやめた理由
  { id: 7, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(7), seFile: '拍子木1.mp3',
    text: '妹の夕香の事故でサッカーをやめていたって分かった時、急に重さが増した。' },
  { id: 8, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(8),
    text: 'クールなだけじゃなくて、ずっと罪悪感を抱えてたのがつらい。' },
  { id: 9, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(9),
    text: '円堂にしつこく誘われても簡単に戻らない理由がちゃんとあるのが良い。' },
  { id: 10, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(10),
    text: '夕香のために勝つって約束に変わる流れ、初期の豪炎寺で一番好き。' },

  // 雷門加入・静かな信頼
  { id: 11, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(11), seFile: '拍子木2.mp3',
    text: '雷門に入ってからの豪炎寺、頼れる兄貴枠として安定感がすごい。' },
  { id: 12, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(12),
    text: '染岡に最初は反発されても、実力と努力で認めさせるのが格好いい。' },
  { id: 13, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(13),
    text: '豪炎寺って冷静だけど、仲間のことはちゃんと見てるんだよな。' },
  { id: 14, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(14),
    text: '円堂が心臓なら、豪炎寺は雷門の得点を任される右足って感じ。' },

  // イナズマ落とし・努力するエース
  { id: 15, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(15), seFile: '和太鼓でドドン.mp3',
    text: 'イナズマ落としの特訓でボロボロになる豪炎寺、天才だけじゃないのが分かる。' },
  { id: 16, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(16),
    text: '涼しい顔して努力量がえぐい。そこをあまり自慢しないのも豪炎寺らしい。' },
  { id: 17, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(17),
    text: '壁山を叱る場面、きつい言い方だけど逃げるなって本気で言ってる。' },
  { id: 18, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(18),
    text: '必殺技の完成に体を張れるエース、そりゃ染岡も認める。' },

  // 鬼道・帝国との因縁
  { id: 19, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(19), seFile: '小鼓（こつづみ）.mp3',
    text: '鬼道と豪炎寺が並ぶと、雷門の格が一段上がった感じがした。' },
  { id: 20, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(20),
    text: '最初は敵だった鬼道と、言葉少なめに分かり合っていくのが熱い。' },
  { id: 21, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(21),
    text: '円堂、豪炎寺、鬼道の三人が揃った時の安心感は異常。' },
  { id: 22, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(22),
    text: 'イナズマブレイクの時、ついに雷門の看板技が来たってなった。' },

  // 木戸川清修・過去との決着
  { id: 23, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(23), seFile: '拍子木1.mp3',
    text: '木戸川清修戦の豪炎寺、過去の仲間と向き合う感じが良かった。' },
  { id: 24, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(24),
    text: '元チームメイトから逃げたって言われても、ちゃんと勝負で返すのがいい。' },
  { id: 25, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(25),
    text: '夕香のことも、サッカーを続ける理由も、ここでまた整理される感じがした。' },
  { id: 26, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(26),
    text: '握手で終わるのが好き。豪炎寺は因縁をちゃんと試合で終わらせる。' },

  // ゼウス戦・離脱の不安
  { id: 27, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(27), seFile: '和太鼓でドドン.mp3',
    text: 'ゼウス戦でボロボロになっても立つ豪炎寺、エースの意地が出てた。' },
  { id: 28, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(28),
    text: '夕香のことを思い出しながら戦う場面、勝ってくれって本気で祈った。' },
  { id: 29, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(29),
    text: '二期で豪炎寺が抜けた時、雷門の火力が一気に落ちた感じがした。' },
  { id: 30, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(30),
    text: '豪炎寺不在の雷門、円堂が頑張ってても何か足りないんだよな。' },

  // 復帰・爆熱ストーム
  { id: 31, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(31), seFile: '拍子木2.mp3',
    text: '沖縄で豪炎寺の影が見えた時、帰ってくるのかって一気に期待した。' },
  { id: 32, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(32),
    text: 'エプシロン改戦で戻ってきた瞬間、待ってましたって声が出た。' },
  { id: 33, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(33),
    text: '爆熱ストーム初披露、あれは完全に主役の帰還だった。' },
  { id: 34, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(34),
    text: 'デザームから奪ってそのまま決めるの、復帰イベントとして強すぎる。' },

  // 吹雪・クロスファイア
  { id: 35, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(35), seFile: '小鼓（こつづみ）.mp3',
    text: '吹雪と豪炎寺のクロスファイア、炎と氷の組み合わせが分かりやすすぎて最高。' },
  { id: 36, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(36),
    text: '一度エース枠を吹雪に渡した後で、並んで撃つのが熱いんだよ。' },
  { id: 37, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(37),
    text: '豪炎寺は一人でも強いけど、誰かと組むと技の見栄えがさらに増す。' },
  { id: 38, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(38),
    text: 'ダークエンペラーズ戦での頼もしさ、帰ってきたエース感があった。' },

  // イナズマジャパン・爆熱スクリュー
  { id: 39, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(39), seFile: '和太鼓でドドン.mp3',
    text: 'イナズマジャパンでも背番号十が似合いすぎる。やっぱりエースは豪炎寺。' },
  { id: 40, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(40),
    text: '爆熱スクリュー、ファイアトルネードの進化系みたいでテンション上がった。' },
  { id: 41, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(41),
    text: '虎丸にシュートを促す豪炎寺、先輩エースとしての余裕が出てて好き。' },
  { id: 42, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(42),
    text: '自分で決めるだけじゃなく、次のストライカーを育てる側になるのが良い。' },

  // 父との関係・グランドファイア
  { id: 43, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(43), seFile: '拍子木1.mp3',
    text: '父親との話が出ると、豪炎寺のサッカーへの覚悟がまた重くなる。' },
  { id: 44, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(44),
    text: '医者になる道とサッカーを選ぶ道で揺れるの、ただの必殺技担当じゃない。' },
  { id: 45, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(45),
    text: 'グランドファイアで豪炎寺、虎丸、ヒロトが並ぶの、火力の暴力って感じ。' },
  { id: 46, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(46),
    text: '豪炎寺が真ん中にいるだけで、必殺シュートの説得力が跳ね上がる。' },

  // 決勝・ジェットストリーム
  { id: 47, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(47), seFile: '拍子木2.mp3',
    text: 'リトルギガント戦で、最後に点を取る空気を作るのが豪炎寺らしい。' },
  { id: 48, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(48),
    text: '円堂と虎丸とのジェットストリーム、初代の積み重ねが全部乗ってた。' },
  { id: 49, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(49),
    text: '守る円堂、決める豪炎寺、受け継ぐ虎丸って構図がきれいすぎる。' },
  { id: 50, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(50),
    text: '最終盤でも豪炎寺がいると、まだ一点取れるって信じられる。' },

  // 総評
  { id: 51, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(51), seFile: '小鼓（こつづみ）.mp3',
    text: '豪炎寺修也は、静かなのに登場するだけで試合の温度を上げるエース。' },
  { id: 52, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(52),
    text: 'ファイアトルネードから最後の連携まで、豪炎寺は雷門の炎そのものでした。' },
];
