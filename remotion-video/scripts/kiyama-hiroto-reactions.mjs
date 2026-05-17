/**
 * 台本: 基山ヒロトとかいう最初から最後まで最強なやつ
 * メイン: イナズマジャパン加入後の活躍、ちょっとだけグラン時代
 * 話者: ずんだもん(3) / 四国めたん(2) / 春日部つむぎ(8)
 */

const INTRO_SPEAKER = 2; // 四国めたん（ノーマル）

export const VOCAB = [
  { surface: '基山',             pronunciation: 'キヤマ',              accent_type: 0 },
  { surface: 'エイリア学園',     pronunciation: 'エイリアガクエン',    accent_type: 0 },
  { surface: '円堂',             pronunciation: 'エンドウ',            accent_type: 0 },
  { surface: '円堂守',           pronunciation: 'エンドウマモル',      accent_type: 0 },
  { surface: 'ヒロト',           pronunciation: 'ヒロト',              accent_type: 0 },
  { surface: '流星ブレード',     pronunciation: 'リュウセイブレード',  accent_type: 0 },
  { surface: '天空落とし',       pronunciation: 'テンクウオトシ',      accent_type: 0 },
  { surface: 'イナズマジャパン', pronunciation: 'イナズマジャパン',    accent_type: 0 },
  { surface: '雷門',             pronunciation: 'ライモン',            accent_type: 0 },
  { surface: '吹雪',             pronunciation: 'フブキ',              accent_type: 0 },
  { surface: '豪炎寺',           pronunciation: 'ゴウエンジ',          accent_type: 0 },
  { surface: '染岡',             pronunciation: 'ソメオカ',            accent_type: 0 },
  { surface: '鬼道',             pronunciation: 'キドウ',              accent_type: 0 },
  { surface: '緑川',             pronunciation: 'ミドリカワ',          accent_type: 0 },
  { surface: 'FFI',              pronunciation: 'フットボールフロンティアインターナショナル', accent_type: 0 },
];

export const COMMENTS = [
  // ── イントロ（isIntro: true・話速1.1x） ──
  { id: 0, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '和太鼓でドドン.mp3', isIntro: true,
    text: '今回は「最初から最後まで最強だった基山ヒロト」の当時の反応を紹介します' },
  { id: 1, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '拍子木1.mp3', isIntro: true,
    text: 'グラン時代に雷門を圧倒し、イナズマジャパンに加入してからも格の違いを見せ続けた、作中屈指の最強キャラクターです。' },
  { id: 2, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '拍子木2.mp3', isIntro: true,
    text: 'それではどうぞ！' },

  // ── ちょっとだけグラン時代 (anime_01) ──
  { id: 3,  speakerId: 3, speakerName: 'ずんだもん',    color: '#FFE000', image: 'anime_01.png', seFile: '拍子木1.mp3',
    text: 'グランとして雷門を圧倒してた頃から、こいつは格が違うと思ってた。' },
  { id: 4,  speakerId: 2, speakerName: '四国めたん',    color: '#FF4444', image: 'anime_01.png',
    text: 'エイリア学園最強のキャプテンとして登場した時点でもう別格だったよな。' },
  { id: 5,  speakerId: 8, speakerName: '春日部つむぎ',  color: '#44AAFF', image: 'anime_01.png',
    text: '流星ブレード、あれ誰にも止められないやつじゃないか。' },
  { id: 6,  speakerId: 3, speakerName: 'ずんだもん',    color: '#FFE000', image: 'anime_01.png',
    text: '悪役でもここまで強くて格好いいキャラ、イナズマイレブンに他にいないと思う。' },

  // ── イナズマジャパン加入時の興奮 (anime_02) ──
  { id: 7,  speakerId: 2, speakerName: '四国めたん',    color: '#FF4444', image: 'anime_02.png', seFile: '拍子木2.mp3',
    text: 'あの最強の敵が仲間になるって分かった瞬間の興奮、今でも覚えてる。' },
  { id: 8,  speakerId: 8, speakerName: '春日部つむぎ',  color: '#44AAFF', image: 'anime_02.png',
    text: 'ヒロトがイナズマジャパンに入るって聞いた時、もうこれ負けなくね？ってなった。' },
  { id: 9,  speakerId: 3, speakerName: 'ずんだもん',    color: '#FFE000', image: 'anime_02.png',
    text: '敵として無双してたやつが味方になるの、テンション上がりすぎる。' },
  { id: 10, speakerId: 2, speakerName: '四国めたん',    color: '#FF4444', image: 'anime_02.png',
    text: '加入した瞬間にイナズマジャパンの戦力が2段階くらい上がった感じがした。' },

  // ── チームに入っても格が違う (anime_03) ──
  { id: 11, speakerId: 8, speakerName: '春日部つむぎ',  color: '#44AAFF', image: 'anime_03.png', seFile: '小鼓（こつづみ）.mp3',
    text: '円堂も豪炎寺も強いのに、ヒロトだけもう一個上の次元にいる感じがある。' },
  { id: 12, speakerId: 3, speakerName: 'ずんだもん',    color: '#FFE000', image: 'anime_03.png',
    text: 'チームに入ってからも一番頼りになるのヒロトなんだよな。' },
  { id: 13, speakerId: 2, speakerName: '四国めたん',    color: '#FF4444', image: 'anime_03.png',
    text: '仲間になっても強さが落ちないキャラって珍しい。ヒロトはずっと最強のまま。' },
  { id: 14, speakerId: 8, speakerName: '春日部つむぎ',  color: '#44AAFF', image: 'anime_03.png',
    text: 'イナズマジャパンのFW陣、ヒロト・豪炎寺・染岡って並びが強すぎて笑える。' },

  // ── 流星ブレードをIJとして使う (anime_04) ──
  { id: 15, speakerId: 3, speakerName: 'ずんだもん',    color: '#FFE000', image: 'anime_04.png', seFile: '拍子木1.mp3',
    text: '流星ブレードをイナズマジャパンのユニフォームで使うの、最高すぎる。' },
  { id: 16, speakerId: 2, speakerName: '四国めたん',    color: '#FF4444', image: 'anime_04.png',
    text: '敵チームが流星ブレードを食らうシーン、毎回気持ちよかった。' },
  { id: 17, speakerId: 8, speakerName: '春日部つむぎ',  color: '#44AAFF', image: 'anime_04.png',
    text: 'ヒロトが仲間になっても流星ブレードのぶっ壊れ感は変わらないの笑う。' },
  { id: 18, speakerId: 3, speakerName: 'ずんだもん',    color: '#FFE000', image: 'anime_04.png',
    text: '流星ブレードで決めた瞬間の高揚感は当時尋常じゃなかったと思う。' },

  // ── 守備でも攻撃でも（インターセプトなど） (anime_05) ──
  { id: 19, speakerId: 2, speakerName: '四国めたん',    color: '#FF4444', image: 'anime_05.png', seFile: '拍子木2.mp3',
    text: '攻撃だけじゃなくてインターセプトも異常に上手いんだよなヒロト。' },
  { id: 20, speakerId: 8, speakerName: '春日部つむぎ',  color: '#44AAFF', image: 'anime_05.png',
    text: '相手の最強クラスにマークされながら普通に突破してくるのが当たり前すぎる。' },
  { id: 21, speakerId: 3, speakerName: 'ずんだもん',    color: '#FFE000', image: 'anime_05.png',
    text: 'マークされたくらいじゃ全然止まらないのほんとに怖い。' },
  { id: 22, speakerId: 2, speakerName: '四国めたん',    color: '#FF4444', image: 'anime_05.png',
    text: '守備でも攻撃でも活躍できるFW、ヒロト以外に思い浮かばない。' },

  // ── 吹雪との連携・コンビ感 (anime_06) ──
  { id: 23, speakerId: 8, speakerName: '春日部つむぎ',  color: '#44AAFF', image: 'anime_06.png', seFile: '小鼓（こつづみ）.mp3',
    text: '吹雪とヒロトの連携、見てて安心感がすごかった。' },
  { id: 24, speakerId: 3, speakerName: 'ずんだもん',    color: '#FFE000', image: 'anime_06.png',
    text: 'このコンビが前にいたらどんな相手でも怖くないって思ってた。' },
  { id: 25, speakerId: 2, speakerName: '四国めたん',    color: '#FF4444', image: 'anime_06.png',
    text: '吹雪とヒロトがゴール前でパス交換してる時の安定感は別格だった。' },
  { id: 26, speakerId: 8, speakerName: '春日部つむぎ',  color: '#44AAFF', image: 'anime_06.png',
    text: '元々敵だった吹雪とヒロトが並んで戦ってるの、胸熱すぎる。' },

  // ── 相手から徹底マーク (anime_07) ──
  { id: 27, speakerId: 3, speakerName: 'ずんだもん',    color: '#FFE000', image: 'anime_07.png', seFile: '拍子木1.mp3',
    text: 'ヒロト、相手チームにガチガチにマークされてるのに普通に無双するの笑う。' },
  { id: 28, speakerId: 2, speakerName: '四国めたん',    color: '#FF4444', image: 'anime_07.png',
    text: '相手が全員でヒロトを止めようとしてるシーン、それでも止まらないの凄まじい。' },
  { id: 29, speakerId: 8, speakerName: '春日部つむぎ',  color: '#44AAFF', image: 'anime_07.png',
    text: 'マーカーを3人引きつけながら突破してくるの頭おかしい。' },
  { id: 30, speakerId: 3, speakerName: 'ずんだもん',    color: '#FFE000', image: 'anime_07.png',
    text: '敵チームにとって一番嫌なマッチアップがヒロトだったのは絶対そう。' },

  // ── FFI試合での活躍 (anime_08) ──
  { id: 31, speakerId: 2, speakerName: '四国めたん',    color: '#FF4444', image: 'anime_08.png', seFile: '拍子木2.mp3',
    text: 'FFIの試合でヒロトが動くたびに会場の緊張感が変わるんだよな。' },
  { id: 32, speakerId: 8, speakerName: '春日部つむぎ',  color: '#44AAFF', image: 'anime_08.png',
    text: 'スチール一発で試合の流れを変えるの、格が違うって感じがした。' },
  { id: 33, speakerId: 3, speakerName: 'ずんだもん',    color: '#FFE000', image: 'anime_08.png',
    text: '決定的な場面でいつもヒロトが絡んでくる。頼りすぎだろって言いたくなるくらい。' },
  { id: 34, speakerId: 2, speakerName: '四国めたん',    color: '#FF4444', image: 'anime_08.png',
    text: 'ヒロトがいる時といない時で試合の安心感がまるで違った。' },

  // ── チームへの溶け込み・試合外の素顔 (anime_09) ──
  { id: 35, speakerId: 8, speakerName: '春日部つむぎ',  color: '#44AAFF', image: 'anime_09.png', seFile: '小鼓（こつづみ）.mp3',
    text: '試合外でのヒロトのゆるい感じが好きなんだよな。強い人って感じがする。' },
  { id: 36, speakerId: 3, speakerName: 'ずんだもん',    color: '#FFE000', image: 'anime_09.png',
    text: 'あんなに強いのにチームに自然に馴染んでるの、人間性も最強じゃないか。' },
  { id: 37, speakerId: 2, speakerName: '四国めたん',    color: '#FF4444', image: 'anime_09.png',
    text: '強いだけじゃなくてチームの雰囲気作りもできるんだよな、ヒロト。' },
  { id: 38, speakerId: 8, speakerName: '春日部つむぎ',  color: '#44AAFF', image: 'anime_09.png',
    text: 'ツナミや木暮とわちゃわちゃしてるヒロトが見られるのイナズマジャパンの良いところ。' },

  // ── 天空落とし（ep123・ロコ戦） (anime_10) ──
  { id: 39, speakerId: 3, speakerName: 'ずんだもん',    color: '#FFE000', image: 'anime_10.png', seFile: '和太鼓でドドン.mp3',
    text: '天空落とし初発動のシーン、あれで基山ヒロトが最強と確定したと思う。' },
  { id: 40, speakerId: 2, speakerName: '四国めたん',    color: '#FF4444', image: 'anime_10.png',
    text: '流星ブレードに続いて天空落としまで覚えるの、もう反則の域だよ。' },
  { id: 41, speakerId: 8, speakerName: '春日部つむぎ',  color: '#44AAFF', image: 'anime_10.png',
    text: '天空落とし、あの技名とビジュアルが完璧すぎて今でも大好き。' },
  { id: 42, speakerId: 3, speakerName: 'ずんだもん',    color: '#FFE000', image: 'anime_10.png',
    text: '新技を覚えてさらに強くなるの、最初から最後まで最強の証明だよ。' },

  // ── ロコを一人で破ったシーン (anime_11) ──
  { id: 43, speakerId: 2, speakerName: '四国めたん',    color: '#FF4444', image: 'anime_11.png', seFile: '拍子木1.mp3',
    text: '天空落としでロコを一人で完璧に攻略したシーン、あれが最高だった。' },
  { id: 44, speakerId: 8, speakerName: '春日部つむぎ',  color: '#44AAFF', image: 'anime_11.png',
    text: 'リトルギガント最強のGKを一人で破るって、もう主人公みたいだよ。' },
  { id: 45, speakerId: 3, speakerName: 'ずんだもん',    color: '#FFE000', image: 'anime_11.png',
    text: 'ゴッドハンドのロコ相手に天空落としをぶつけてくるの格が違いすぎる。' },
  { id: 46, speakerId: 2, speakerName: '四国めたん',    color: '#FF4444', image: 'anime_11.png',
    text: 'ロコ戦のヒロト、あれが今まで見た中で一番かっこよかったかもしれない。' },

  // ── 最後まで格が落ちなかった証明 (anime_12) ──
  { id: 47, speakerId: 8, speakerName: '春日部つむぎ',  color: '#44AAFF', image: 'anime_12.png', seFile: '拍子木2.mp3',
    text: 'FFI終わるまで一度も格が落ちなかったキャラって基山ヒロトくらいじゃないか。' },
  { id: 48, speakerId: 3, speakerName: 'ずんだもん',    color: '#FFE000', image: 'anime_12.png',
    text: '最初はエイリア学園最強で、最後はイナズマジャパン最強。ずっと最強なのすごすぎる。' },
  { id: 49, speakerId: 2, speakerName: '四国めたん',    color: '#FF4444', image: 'anime_12.png',
    text: 'グランの頃から数えたら作中で一番強い期間が長いキャラかもしれない。' },
  { id: 50, speakerId: 8, speakerName: '春日部つむぎ',  color: '#44AAFF', image: 'anime_12.png',
    text: '最終回まで「ヒロトが来た！」ってなるキャラ、他にいないよ。' },

  // ── まとめ (anime_13) ──
  { id: 51, speakerId: 3, speakerName: 'ずんだもん',    color: '#FFE000', image: 'anime_13.png', seFile: '小鼓（こつづみ）.mp3',
    text: '敵として圧倒的で、仲間になっても最強のまま。こんなキャラ滅多にいない。' },
  { id: 52, speakerId: 2, speakerName: '四国めたん',    color: '#FF4444', image: 'anime_13.png',
    text: '基山ヒロト、最初から最後まで最強。それ以外の言葉が出てこない。' },
];
