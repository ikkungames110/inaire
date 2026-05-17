/**
 * 台本: 神の美貌と神のサッカー・アフロディ（亜風炉照美）に対する視聴者反応集
 * Season1 ep023〜026（世宇子中 vs 雷門 / FF決勝・神のアクア暴露）
 * FFI ep083〜084（ファイアードラゴン / カオスブレイク）
 * 話者: ずんだもん(3) / 四国めたん(2) / 春日部つむぎ(8)
 */

const INTRO_SPEAKER = 2; // 四国めたん（ノーマル）

export const VOCAB = [
  { surface: 'アフロディ',     pronunciation: 'アフロディ',         accent_type: 0 },
  { surface: '亜風炉照美',     pronunciation: 'アフロテルミ',       accent_type: 0 },
  { surface: '世宇子',         pronunciation: 'ゼウス',             accent_type: 0 },
  { surface: 'ゴッドブレイク', pronunciation: 'ゴッドブレイク',     accent_type: 0 },
  { surface: 'ヘブンズタイム', pronunciation: 'ヘブンズタイム',     accent_type: 0 },
  { surface: '神のアクア',     pronunciation: 'カミノアクア',       accent_type: 0 },
  { surface: 'バーン',         pronunciation: 'バーン',             accent_type: 0 },
  { surface: 'ガゼル',         pronunciation: 'ガゼル',             accent_type: 0 },
  { surface: '不動',           pronunciation: 'フドウ',             accent_type: 0 },
  { surface: 'ファイアードラゴン', pronunciation: 'ファイアードラゴン', accent_type: 0 },
  { surface: 'カオスブレイク', pronunciation: 'カオスブレイク',     accent_type: 0 },
  { surface: 'イナズマジャパン', pronunciation: 'イナズマジャパン', accent_type: 0 },
  { surface: '豪炎寺',         pronunciation: 'ゴウエンジ',         accent_type: 0 },
  { surface: '円堂',           pronunciation: 'エンドウ',           accent_type: 0 },
  { surface: '染岡',           pronunciation: 'ソメオカ',           accent_type: 0 },
  { surface: '飛鷹',           pronunciation: 'トビタカ',           accent_type: 0 },
  { surface: '真空魔',         pronunciation: 'シンクウマ',         accent_type: 0 },
  { surface: '鬼道',           pronunciation: 'キドウ',             accent_type: 0 },
  { surface: 'マジンザハンド', pronunciation: 'マジンザハンド',     accent_type: 0 },
  { surface: 'FFI',            pronunciation: 'フットボールフロンティアインターナショナル', accent_type: 0 },
];

const img = (id) => 'anime_' + String(Math.floor((id - 3) / 4) + 1).padStart(2, '0') + '.png';

export const COMMENTS = [
  // ── イントロ（isIntro: true・話速1.1x） ──
  { id: 0, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '和太鼓でドドン.mp3', isIntro: true,
    text: '今回は、神のサッカーで雷門を圧倒した世宇子中のキャプテン・アフロディに対する当時の視聴者の反応を紹介します' },
  { id: 1, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '拍子木1.mp3', isIntro: true,
    text: '神のアクアで神がかった強さを発揮しながら、その真実を自ら明かした衝撃の展開で今なお語り継がれるキャラクターです。' },
  { id: 2, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '拍子木2.mp3', isIntro: true,
    text: 'それではどうぞ！' },

  // ── ep023 アフロディ初登場・第一印象 （anime_01: ep023 Aphrodi appearing）──
  { id: 3,  speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(3),  seFile: '拍子木1.mp3',
    text: 'アフロディが初登場した瞬間、テレビの前で声が出た。何この存在感。' },
  { id: 4,  speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(4),
    text: 'アフロディって初登場から格が段違いだったよな。' },
  { id: 5,  speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(5),
    text: '最初見た時女の子だと思ってた。マジで。' },
  { id: 6,  speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(6),
    text: 'あの神々しいビジュアル、当時はとにかく衝撃だった。' },

  // ── ep023 円堂を笑い飛ばす・傲慢さへの反応 （anime_02: ep023 Aphrodi laughing at Endou）──
  { id: 7,  speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(7),  seFile: '拍子木2.mp3',
    text: '円堂を笑い飛ばすシーン、あの余裕がたまらなかった。' },
  { id: 8,  speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(8),
    text: 'アフロディって傲慢なのに不快じゃないんだよな。それが不思議。' },
  { id: 9,  speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(9),
    text: '笑い方が美しすぎて、笑われてるのに腹が立たなかった。' },
  { id: 10, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(10),
    text: '格上感の演出が完璧すぎて初登場から「こいつに勝てるの？」ってなってた。' },

  // ── ep023 「訓練なんて無駄だ」発言・性別論争 （anime_03: ep023 Aphrodi saying training is useless）──
  { id: 11, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(11), seFile: '小鼓（こつづみ）.mp3',
    text: '「訓練なんて無駄だ」の発言、当時の掲示板が荒れてたの覚えてる。' },
  { id: 12, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(12),
    text: 'あの発言、最初は嫌なやつって思ったけど後から意味がわかった。' },
  { id: 13, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(13),
    text: 'アフロディって最初から「男か女かわからない」論争が起きてた。' },
  { id: 14, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(14),
    text: '声も顔も中性的で、当時どっちかって本気で悩んだ。' },

  // ── ep023 試合への期待感・視聴者の興奮 （anime_04: ep023 Aphrodi looking forward to match）──
  { id: 15, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(15), seFile: '和太鼓でドドン.mp3',
    text: '「この試合絶対面白い」ってアフロディ登場の瞬間からわかった。' },
  { id: 16, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(16),
    text: '対戦相手のキャプテンがあれだけインパクトある回、ほかになかった。' },
  { id: 17, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(17),
    text: '試合前から怖かった。雷門勝てる気がしなかった。' },
  { id: 18, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(18),
    text: 'アフロディが「楽しみだ」って言う時の表情、背筋が寒くなった。' },

  // ── ep024 ゼウス競技場・世宇子の雰囲気 （anime_05: ep024 Zeus Stadium）──
  { id: 19, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(19), seFile: '拍子木1.mp3',
    text: '世宇子の競技場って、最初から「格が違う」雰囲気があったよな。' },
  { id: 20, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(20),
    text: '競技場のゴージャスな感じ、世宇子がどれだけ本気かが伝わってきた。' },
  { id: 21, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(21),
    text: 'あの競技場、ほかのライバルチームより格上感があった。' },
  { id: 22, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(22),
    text: 'ゼウス競技場に乗り込む雷門、当時「ここで勝てるの？」って不安だった。' },

  // ── ep025 試合開始・雷門対ゼウスの対峙 （anime_06: ep025 Raimon and Zeus facing off）──
  { id: 23, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(23), seFile: '拍子木2.mp3',
    text: '試合開始の瞬間から空気が違った。ゼウス、明らかに強かった。' },
  { id: 24, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(24),
    text: '整列するゼウスの選手たち、全員オーラが段違いだった。' },
  { id: 25, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(25),
    text: 'アフロディと円堂が正面から向き合うシーン、静かに震えた。' },
  { id: 26, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(26),
    text: '試合前の段階でもう負けてる気がしてた。でも応援せずにいられなかった。' },

  // ── ep025 神のアクアの儀式・グラスを掲げる謎 （anime_07: ep025 Zeus formation）──
  { id: 27, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(27), seFile: '小鼓（こつづみ）.mp3',
    text: '試合前にグラスを掲げてる世宇子の儀式、あれが最初から怪しかった。' },
  { id: 28, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(28),
    text: '謎の儀式っぽくて、当時から「なにそれ？」ってなってた。' },
  { id: 29, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(29),
    text: '後から神のアクアだってわかった時、あの儀式のシーンが繋がった。' },
  { id: 30, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(30),
    text: 'アフロディがグラスを持ってる姿、神々しくてかつ怪しくて。' },

  // ── ep025 神のアクアを飲む・謎の強さ （anime_08: ep025 Zeus raising their glass）──
  { id: 31, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(31), seFile: '拍子木1.mp3',
    text: 'アフロディが何かを飲んだ後から急に動きが変わったのが怖かった。' },
  { id: 32, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(32),
    text: '「なんで急にこんな強くなってるんだ」って当時首をかしげてた。' },
  { id: 33, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(33),
    text: '薬だって真実は後から知ったけど、試合中は純粋に強さに圧倒されてた。' },
  { id: 34, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(34),
    text: '神のアクアって名前、後で知った時の衝撃がすごかった。' },

  // ── ep025 豪炎寺・染岡が吹き飛ばされる衝撃 （anime_09: ep025 Aphrodi blowing Gouenji and Someoka away）──
  { id: 35, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(35), seFile: '和太鼓でドドン.mp3',
    text: '豪炎寺と染岡が同時に吹き飛ばされたシーン、は？ってなった。' },
  { id: 36, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(36),
    text: '豪炎寺でも止められないって、当時どうやって勝つんだって絶望した。' },
  { id: 37, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(37),
    text: '染岡も豪炎寺も全然歯が立たなかった。アフロディの強さが本物だって伝わってきた。' },
  { id: 38, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(38),
    text: '二人まとめてふっ飛ばすのやばすぎる。' },

  // ── ep025 3-0になった衝撃・アフロディがゴール後 （anime_10: ep025 Aphrodi after scoring）──
  { id: 39, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(39), seFile: '拍子木2.mp3',
    text: '3-0になった時、本当に心が折れそうだった。' },
  { id: 40, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(40),
    text: 'アフロディがゴールした後に余裕の顔してるのが腹立つのに格好いい。' },
  { id: 41, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(41),
    text: '前半3-0で折り返すとか、当時は「もう終わりだ」ってなってたもん。' },
  { id: 42, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(42),
    text: 'アフロディが全部やってる感じがした。ゼウスはアフロディのチームだった。' },

  // ── ep025 「真の神とは誰だ」発言・圧倒的威圧感 （anime_11: ep025 Aphrodi asking who's the real god）──
  { id: 43, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(43), seFile: '小鼓（こつづみ）.mp3',
    text: '「真の神とは誰だ」みたいな発言、中二病全開なのにかっこよかった。' },
  { id: 44, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(44),
    text: 'アフロディが「神」として振る舞う演出、あのキャラにしか出せないものだった。' },
  { id: 45, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(45),
    text: '傲慢なのに正論でもあるんだよな。実際強いから。' },
  { id: 46, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(46),
    text: 'アフロディが「お前には神の力は見えない」みたいな台詞、当時神々しかった。' },

  // ── ep025 円堂への笑み・格の差 （anime_12: ep025 Aphrodi smirking at Endou）──
  { id: 47, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(47), seFile: '拍子木1.mp3',
    text: '円堂がどんなに頑張ってもアフロディに笑われてるシーン、つらかった。' },
  { id: 48, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(48),
    text: '格差をあれだけ表現できるのすごい。アニメの演出力が高かった。' },
  { id: 49, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(49),
    text: 'アフロディの笑い方って優しさすら感じるんだよな。見下してるのに穏やかな感じ。' },
  { id: 50, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(50),
    text: '円堂の諦めない姿とアフロディの余裕の対比、最高だった。' },

  // ── ep026 神のアクアが全開・超人化 （anime_13: ep026 Aphrodi as the God's Aqua reaches its full effect）──
  { id: 51, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(51), seFile: '和太鼓でドドン.mp3',
    text: '神のアクアが完全に効いてからのアフロディ、もう別次元の強さだった。' },
  { id: 52, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(52),
    text: 'あのシーン、どうやって止めるんだって本気で頭を抱えた。' },
  { id: 53, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(53),
    text: 'ヘブンズタイムが発動した瞬間の演出、当時鳥肌だった。' },
  { id: 54, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(54),
    text: 'ヘブンズタイムって名前も技の見た目も最高だった。時を止める必殺技とか反則じゃん。' },

  // ── ep026 雷門の根性が伝わり始めるアフロディ （anime_14: ep026 Aphrodi realizing how Raimon continues to fight）──
  { id: 55, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(55), seFile: '拍子木2.mp3',
    text: 'アフロディが「なぜ立ち上がれるんだ」って思い始める変化、気づいた時感動した。' },
  { id: 56, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(56),
    text: '強さしか信じてなかったアフロディが、円堂の心に揺さぶられる流れが好きだった。' },
  { id: 57, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(57),
    text: 'あの辺から「アフロディが負けてもいい」って思い始めてた。' },
  { id: 58, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(58),
    text: '敵キャラとして出てきたのに途中からアフロディを応援してた。' },

  // ── ep026 円堂の覚悟を試すアフロディ （anime_15: ep026 Aphrodi about to test Endou's resolution）──
  { id: 59, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(59), seFile: '小鼓（こつづみ）.mp3',
    text: 'アフロディが「お前の覚悟を見せてみろ」って感じで本気になってくる展開、最高だった。' },
  { id: 60, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(60),
    text: '強さを自慢するだけのキャラじゃなかったんだよな。相手の本気を引き出そうとしてた。' },
  { id: 61, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(61),
    text: '敵キャラとしての深みがあった。それがアフロディの良さだと思う。' },
  { id: 62, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(62),
    text: 'あの展開、最初の傲慢なアフロディからは想像できなかった。' },

  // ── ep026 「神の真の力」・最終決戦 （anime_16: ep026 Aphrodi stating true strength of Gods）──
  { id: 63, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(63), seFile: '和太鼓でドドン.mp3',
    text: '最後の最後でゴッドブレイクが来た瞬間、「これ止まるの？」って本気で思った。' },
  { id: 64, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(64),
    text: 'ゴッドブレイクの演出、当時最高クラスの必殺技だと思ってた。' },
  { id: 65, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(65),
    text: 'マジンザハンドで受け止めた円堂、本当に神様だった。' },
  { id: 66, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(66),
    text: 'ゴッドブレイクとマジンザハンドのぶつかり合い、あれが世宇子戦のクライマックスだった。' },

  // ── 逆転展開・マジンザハンド （anime_17: ep025 Aphrodi looking at Endou）──
  { id: 67, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(67), seFile: '拍子木1.mp3',
    text: '3-0から逆転していく展開、当時の自分は毎週祈るように見てた。' },
  { id: 68, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(68),
    text: 'マジンザハンドが出た時の感動、今でも覚えてる。' },
  { id: 69, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(69),
    text: '円堂がゴッドブレイクを止めた時の「やったー！」感、あれは体験した人しかわからない。' },
  { id: 70, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(70),
    text: '逆転勝利の瞬間、声出して喜んだ。' },

  // ── 神のアクア暴露・衝撃の真実 （anime_18: ep023 Aphrodi destroying his glass）──
  { id: 71, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(71), seFile: '拍子木2.mp3',
    text: '神のアクアが薬だって暴露されたシーン、当時かなり衝撃だった。' },
  { id: 72, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(72),
    text: 'アフロディが自分から暴露するの、キャラクターとしての誠実さを感じた。' },
  { id: 73, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(73),
    text: 'あの告白シーン、アフロディに対する見方が180度変わった。' },
  { id: 74, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(74),
    text: '「悪いやつだと思ってたのに…」ってなって泣いた。' },

  // ── FFI編・ファイアードラゴン登場 （anime_19: ep083 Aphrodi noting Endou is finally playing）──
  { id: 75, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(75), seFile: '小鼓（こつづみ）.mp3',
    text: 'アフロディがFFIでファイアードラゴンとして再登場した時の驚き、やばかった。' },
  { id: 76, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(76),
    text: '「え、アフロディが敵として出てくるの？」って最初戸惑った。' },
  { id: 77, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(77),
    text: '再登場した時のアフロディ、また格好よくなってた気がする。' },
  { id: 78, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(78),
    text: 'ファイアードラゴンのアフロディ、世宇子時代と雰囲気が変わっててまた面白かった。' },

  // ── ep083 アフロディ再登場・円堂との再会 （anime_20: ep084 Aphrodi getting the ball back）──
  { id: 79, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(79), seFile: '和太鼓でドドン.mp3',
    text: '円堂が「アフロディ！」って気づいた瞬間、再会感があって好きだった。' },
  { id: 80, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(80),
    text: 'アフロディが「お前が来たか」って感じで出てくるの、また良い。' },
  { id: 81, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(81),
    text: 'ライバルとして再登場するの、こういうの熱いよな。' },
  { id: 82, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(82),
    text: '再登場したアフロディと円堂の関係性、さらに深まってて最高だった。' },

  // ── ep084 不動・鬼道をかわす・アフロディの実力 （anime_21: ep084 Aphrodi passing Fudou and Kidou）──
  { id: 83, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(83), seFile: '拍子木1.mp3',
    text: '不動と鬼道を華麗にかわしていくアフロディ、相変わらず格が違った。' },
  { id: 84, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(84),
    text: 'FFIのアフロディ、世宇子の時より動きがなめらかになってた気がした。' },
  { id: 85, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(85),
    text: 'バーンとガゼルと一緒に動く時の連携、息が合ってて見ていて気持ちよかった。' },
  { id: 86, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(86),
    text: 'ファイアードラゴンのアフロディ、もはや別格だった。' },

  // ── ep084 カオスブレイク宣言・三連携 （anime_22: ep084 Aphrodi declaring CB will score）──
  { id: 87, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(87), seFile: '拍子木2.mp3',
    text: 'カオスブレイクの宣言シーン、「これ来たー！」ってなった。' },
  { id: 88, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(88),
    text: '三人の連携が完璧すぎて、演出が好きすぎた。' },
  { id: 89, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(89),
    text: 'バーン・ガゼル・アフロディの三人、個性のぶつかり合いが最高だった。' },
  { id: 90, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(90),
    text: 'カオスブレイク、名前もかっこいいし技も派手だし文句なし。' },

  // ── ep084 カオスブレイクが止まる衝撃 （anime_23: ep084 Aphrodi seeing CB get stopped）──
  { id: 91, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(91), seFile: '和太鼓でドドン.mp3',
    text: 'カオスブレイクが止まった瞬間のアフロディの表情、あの驚きが印象的だった。' },
  { id: 92, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(92),
    text: 'あんな技が止まるとは思ってなかったから、真空魔が決まった時は声が出た。' },
  { id: 93, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(93),
    text: '飛鷹の真空魔がカオスブレイクを止めるとか、燃えすぎる展開。' },
  { id: 94, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(94),
    text: '止められたアフロディが「まさか」って感じになってたの、好きだった。' },

  // ── ep084 試合終了・アフロディの言葉 （anime_24: ep084 Aphrodi after IJ scored）──
  { id: 95, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(95), seFile: '小鼓（こつづみ）.mp3',
    text: 'ファイアードラゴン戦が終わった後のアフロディの台詞、格好よかった。' },
  { id: 96, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(96),
    text: '負けても認めるアフロディ、格好いいよな。世宇子の時から一貫してる。' },
  { id: 97, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(97),
    text: 'アフロディって「負け方」まで美しいキャラなんだよな。' },
  { id: 98, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(98),
    text: 'ファイアードラゴン戦、試合としてもアフロディの描き方としても最高だった。' },

  // ── 総評・アフロディへの想い （anime_25: ep084 Aphrodi noting IJ will keep on evolving）──
  { id: 99,  speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(99),  seFile: '拍子木2.mp3',
    text: 'アフロディって初登場から総評まで含めて、イナズマイレブン屈指のキャラだと思う。' },
  { id: 100, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: img(100),
    text: 'ビジュアル・強さ・キャラの深み、全部揃ってる。' },
  { id: 101, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: img(101),
    text: '当時アフロディのことが好きすぎて、世宇子のグッズとか探してた。' },
  { id: 102, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: img(102),
    text: 'アフロディはこれからも語り継がれる伝説のキャラクターだと思う。今でも色褪せない。' },
];
