/**
 * 台本: イタリアの白い流星・フィディオ・アルデナに対する当時の視聴者反応集
 * 無印イナズマイレブン: FFIイタリア代表オルフェウス編から友情特訓、最終盤まで
 * 話者: ずんだもん(3) / 四国めたん(2) / 春日部つむぎ(8)
 */

const INTRO_SPEAKER = 2; // 四国めたん（ノーマル）

export const VOCAB = [
  { surface: 'フィディオ・アルデナ', pronunciation: 'フィディオアルデナ', accent_type: 0 },
  { surface: 'フィディオ', pronunciation: 'フィディオ', accent_type: 0 },
  { surface: 'アルデナ', pronunciation: 'アルデナ', accent_type: 0 },
  { surface: '白い流星', pronunciation: 'シロイリュウセイ', accent_type: 0 },
  { surface: 'オルフェウス', pronunciation: 'オルフェウス', accent_type: 0 },
  { surface: 'イタリア', pronunciation: 'イタリア', accent_type: 0 },
  { surface: 'オーディンソード', pronunciation: 'オーディンソード', accent_type: 0 },
  { surface: 'カテナチオカウンター', pronunciation: 'カテナチオカウンター', accent_type: 0 },
  { surface: 'チームK', pronunciation: 'チームケー', accent_type: 0 },
  { surface: 'デモーニオ', pronunciation: 'デモーニオ', accent_type: 0 },
  { surface: 'ナカタ', pronunciation: 'ナカタ', accent_type: 0 },
  { surface: '影山', pronunciation: 'カゲヤマ', accent_type: 0 },
  { surface: '影山零治', pronunciation: 'カゲヤマレイジ', accent_type: 0 },
  { surface: '円堂', pronunciation: 'エンドウ', accent_type: 0 },
  { surface: '鬼道', pronunciation: 'キドウ', accent_type: 0 },
  { surface: '佐久間', pronunciation: 'サクマ', accent_type: 0 },
  { surface: '不動', pronunciation: 'フドウ', accent_type: 0 },
  { surface: 'イナズマジャパン', pronunciation: 'イナズマジャパン', accent_type: 0 },
  { surface: 'リトルギガント', pronunciation: 'リトルギガント', accent_type: 0 },
  { surface: 'ロココ', pronunciation: 'ロココ', accent_type: 0 },
  { surface: 'イジゲンザハンド', pronunciation: 'イジゲンザハンド', accent_type: 0 },
  { surface: 'ゴッドキャッチ', pronunciation: 'ゴッドキャッチ', accent_type: 0 },
  { surface: 'FFI', pronunciation: 'フットボールフロンティアインターナショナル', accent_type: 0 },
  { surface: 'FW', pronunciation: 'フォワード', accent_type: 0 },
];

const img = (id) => 'anime_' + String(Math.floor((id - 3) / 4) + 1).padStart(2, '0') + '.png';

export const COMMENTS = [
  // ── イントロ（isIntro: true・話速1.1x） ──
  { id: 0, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '和太鼓でドドン.mp3', isIntro: true,
    text: '今回は「イタリアの白い流星フィディオ・アルデナが、オルフェウスを導き円堂とぶつかるFFI編」の当時の反応を紹介します' },
  { id: 1, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '拍子木1.mp3', isIntro: true,
    text: 'オルフェウスの背番号10でキャプテンを務めるエースフォワードとして登場し、影山との因縁やカテナチオカウンター、円堂との友情特訓まで見せ場の多いキャラクターです。' },
  { id: 2, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '拍子木2.mp3', isIntro: true,
    text: 'それではどうぞ！' },

  // ── イタリアエリアでの初対面 ──
  { id: 3, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(3), seFile: '拍子木1.mp3',
    text: 'フィディオが円堂と夜に出会うシーン、初対面なのにすぐ通じ合う感じがよかった。' },
  { id: 4, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(4),
    text: 'イタリア代表のキャプテンなのに、最初から気さくで嫌味がないのが印象的だった。' },
  { id: 5, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(5),
    text: '路地で軽く身をかわしていく動き、こいつ絶対うまいって一発で分かった。' },
  { id: 6, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(6),
    text: '円堂と同じくらいサッカーが好きなんだなって伝わる登場だった。' },

  // ── FFI開会式・オルフェウスの格 ──
  { id: 7, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(7), seFile: '拍子木2.mp3',
    text: 'FFI開会式で旗を持って出てくるフィディオ、完全に強豪国の顔だった。' },
  { id: 8, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(8),
    text: 'オルフェウスって名前とフィディオの雰囲気が合いすぎて、当時すぐ覚えた。' },
  { id: 9, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(9),
    text: '白い流星って二つ名、イナズマイレブンらしいけど普通にかっこいい。' },
  { id: 10, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(10),
    text: '世界大会に来たんだって実感させる海外キャプテンの一人だった。' },

  // ── 影山とチームKの不穏さ ──
  { id: 11, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(11), seFile: '小鼓（こつづみ）.mp3',
    text: '影山がオルフェウスに来た瞬間、また何か壊されるって空気になった。' },
  { id: 12, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(12),
    text: 'フィディオたちを代表から外そうとする流れ、見ていてかなりきつかった。' },
  { id: 13, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(13),
    text: '仲間が次々に怪我させられる展開、フィディオの怒りと焦りが伝わってきた。' },
  { id: 14, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(14),
    text: 'それでも諦めずに立つところがキャプテンなんだよな。' },

  // ── 円堂たちとの共闘・チームK戦 ──
  { id: 15, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(15), seFile: '和太鼓でドドン.mp3',
    text: '円堂、鬼道、佐久間、不動が助っ人に入る流れ、当時めちゃくちゃ熱かった。' },
  { id: 16, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(16),
    text: '一時的とはいえフィディオと日本勢が同じチームになるの、豪華すぎる。' },
  { id: 17, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(17),
    text: 'デモーニオを相手にしながら、フィディオが前を向き続けるのがよかった。' },
  { id: 18, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(18),
    text: '勝った後に円堂と喜ぶシーン、国を越えた友情って感じで好きだった。' },

  // ── 影山を信じる決断 ──
  { id: 19, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(19), seFile: '拍子木1.mp3',
    text: '影山をただ憎むんじゃなくて、なぜサッカーを知り尽くしているのか考えるのがフィディオらしい。' },
  { id: 20, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(20),
    text: 'ナカタの話を聞いてから影山を見る目が変わる流れ、かなり大人っぽかった。' },
  { id: 21, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(21),
    text: '普通なら警戒する相手を信じるって、フィディオの器が大きい。' },
  { id: 22, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(22),
    text: '影山の中に残っていたサッカーへの思いを見抜くの、すごいキャプテンだと思った。' },

  // ── カテナチオカウンター習得 ──
  { id: 23, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(23), seFile: '拍子木2.mp3',
    text: 'カテナチオカウンターの特訓、イタリア代表らしい守備戦術でテンション上がった。' },
  { id: 24, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(24),
    text: 'フィディオが倒れてもすぐ立ち上がるの、円堂と似てるって感じた。' },
  { id: 25, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(25),
    text: '影山の戦術を自分たちの力に変えていくのが、ただのライバルチームじゃない。' },
  { id: 26, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(26),
    text: 'オルフェウスの中心にフィディオがいるから、あの技に説得力があった。' },

  // ── イナズマジャパン戦・戦術の脅威 ──
  { id: 27, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(27), seFile: '小鼓（こつづみ）.mp3',
    text: 'イナズマジャパン戦でカテナチオカウンターが決まった時、これは突破できないと思った。' },
  { id: 28, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(28),
    text: '守って奪って一気に前へ出る感じ、世界のサッカーを見せられてる気がした。' },
  { id: 29, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(29),
    text: 'フィディオの動きが鬼道に似てるって気づく展開、ライバル同士の読み合いで好き。' },
  { id: 30, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(30),
    text: 'ただ強いだけじゃなくて、戦術で追い詰めてくるのがオルフェウスの怖さだった。' },

  // ── オーディンソードの衝撃 ──
  { id: 31, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(31), seFile: '和太鼓でドドン.mp3',
    text: 'オーディンソード初めて見た時、演出の神々しさで全部持っていかれた。' },
  { id: 32, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(32),
    text: '円堂のイジゲンザハンドを破って点を取るの、エースストライカーとして格が高すぎる。' },
  { id: 33, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(33),
    text: '技名が北欧神話なのにイタリア代表なの、当時は細かいこと抜きでかっこよかった。' },
  { id: 34, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(34),
    text: 'フィディオの必殺技として、オーディンソードは完成度が高すぎる。' },

  // ── 試合後の信頼とナカタ復帰 ──
  { id: 35, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(35), seFile: '拍子木1.mp3',
    text: 'イナズマジャパンと引き分けた後のフィディオ、悔しさより充実感がある顔だった。' },
  { id: 36, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(36),
    text: 'ナカタに頼れるリーダーになったって見てもらえるの、フィディオの成長が伝わった。' },
  { id: 37, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(37),
    text: '影山とオルフェウスの話がここで一区切りつくの、すごくきれいだった。' },
  { id: 38, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(38),
    text: '敵でも味方でもない、最高のライバルって立ち位置がフィディオの魅力だと思う。' },

  // ── リトルギガント戦後の挫折 ──
  { id: 39, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(39), seFile: '拍子木2.mp3',
    text: 'リトルギガント戦でオルフェウスが完封された時、世界の壁が一気に見えた。' },
  { id: 40, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(40),
    text: 'ロココがオーディンソードを必殺技なしで止めたの、当時かなり衝撃だった。' },
  { id: 41, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(41),
    text: 'フィディオが落ち込むのも無理ない。あれはキャプテンとしてきつすぎる負け方。' },
  { id: 42, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(42),
    text: 'いつも前向きなフィディオが一人にしてくれってなるの、胸に来た。' },

  // ── 円堂との友情特訓 ──
  { id: 43, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(43), seFile: '小鼓（こつづみ）.mp3',
    text: 'それでも円堂のために練習試合を申し込むフィディオ、いいやつすぎる。' },
  { id: 44, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(44),
    text: 'ゴッドキャッチ完成のために、オルフェウス全員で壁になってくれるのが熱い。' },
  { id: 45, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(45),
    text: '改から真オーディンソードまで出してくる友情特訓、手加減なしなのが最高。' },
  { id: 46, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(46),
    text: '円堂を勝たせるためじゃなくて、円堂を本気で強くするために戦ってるのがいい。' },

  // ── 最終盤・別れ ──
  { id: 47, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(47), seFile: '拍子木1.mp3',
    text: '決勝を見守るフィディオたち、負けたチームの思いも乗ってる感じがした。' },
  { id: 48, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(48),
    text: '空港で円堂と別れるシーン、また世界大会で会おうって感じが爽やかだった。' },
  { id: 49, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(49),
    text: 'フィディオは外国代表キャプテンの中でも、円堂との友情が一番まっすぐ描かれてたと思う。' },
  { id: 50, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(50),
    text: '強くて優しくて、ちゃんと挫折もするから記憶に残るキャラクターだった。' },

  // ── 総評 ──
  { id: 51, speakerId: 3, speakerName: 'ずんだもん', color: '#FFE000', image: img(51), seFile: '和太鼓でドドン.mp3',
    text: 'フィディオ・アルデナは、世界大会編で「海外にも円堂みたいなサッカー馬鹿がいる」と教えてくれた存在。' },
  { id: 52, speakerId: 2, speakerName: '四国めたん', color: '#FF4444', image: img(52),
    text: '白い流星の名にふさわしいスピードと信念で、オルフェウスも円堂たちも前へ進ませた名ライバルでした。' },
];
