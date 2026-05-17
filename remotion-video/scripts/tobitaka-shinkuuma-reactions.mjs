/**
 * 台本: 真空魔一本で世界と戦った飛鷹征矢 への当時の視聴者反応集
 * イナズマジャパンFFI世界大会編（ep.076〜ep.100）
 * 話者: ずんだもん(3) / 四国めたん(2) / 春日部つむぎ(8)
 */

const INTRO_SPEAKER = 2; // 四国めたん（ノーマル）

export const VOCAB = [
  { surface: '飛鷹征矢',         pronunciation: 'トビタカセイヤ',                          accent_type: 0 },
  { surface: '征矢',             pronunciation: 'セイヤ',                                  accent_type: 0 },
  { surface: '飛鷹',             pronunciation: 'トビタカ',                                accent_type: 0 },
  { surface: '真空魔',           pronunciation: 'シンクウマ',                              accent_type: 0 },
  { surface: 'ファイアードラゴン', pronunciation: 'ファイアードラゴン',                      accent_type: 0 },
  { surface: 'カオスブレイク',   pronunciation: 'カオスブレイク',                          accent_type: 0 },
  { surface: 'トライアングルZ', pronunciation: 'トライアングルゼット',                      accent_type: 0 },
  { surface: 'リーゼント',       pronunciation: 'リーゼント',                              accent_type: 0 },
  { surface: '響木',             pronunciation: 'ヒビキ',                                  accent_type: 0 },
  { surface: '円堂守',           pronunciation: 'エンドウマモル',                          accent_type: 0 },
  { surface: '円堂',             pronunciation: 'エンドウ',                                accent_type: 0 },
  { surface: '豪炎寺',           pronunciation: 'ゴウエンジ',                              accent_type: 0 },
  { surface: 'イナズマジャパン', pronunciation: 'イナズマジャパン',                        accent_type: 0 },
  { surface: 'FFI',              pronunciation: 'フットボールフロンティアインターナショナル', accent_type: 0 },
  { surface: '雷門',             pronunciation: 'ライモン',                                accent_type: 0 },
];

export const COMMENTS = [
  // ── イントロ（isIntro: true・話速1.1x） ──
  { id: 0, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '和太鼓でドドン.mp3', isIntro: true,
    text: '今回は「真空魔一本で世界と戦った飛鷹征矢」の当時の反応を紹介します' },
  { id: 1, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '拍子木1.mp3', isIntro: true,
    text: '不良出身のサッカー未経験者が喧嘩で磨いた蹴り技から真空魔を生み出し、アジア地区決勝から世界大会まで技一本で渡り合い続けた、飛鷹征矢の伝説に当時の視聴者は驚かされ続けました。' },
  { id: 2, speakerId: INTRO_SPEAKER, speakerName: '四国めたん', color: '#FF4444', image: 'title.png', seFile: '拍子木2.mp3', isIntro: true,
    text: 'それではどうぞ！' },

  // ── 飛鷹登場・不良キャラの衝撃（ep.076）(anime_01) ──
  { id: 3,  speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: 'anime_01.png', seFile: '拍子木1.mp3',
    text: '飛鷹が初登場した瞬間、絶対にサッカーするキャラじゃないと思った。' },
  { id: 4,  speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: 'anime_01.png',
    text: '不良のボスって言われてから登場したもんだから、どんな選手なのかって期待が高まった。' },
  { id: 5,  speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: 'anime_01.png',
    text: 'あのリーゼントヘアで登場した時は笑ったけど、なんか強そうで当時気になってた。' },
  { id: 6,  speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: 'anime_01.png',
    text: '円堂の試合を黙って観てる飛鷹のシーン、あれで何かを感じてるキャラなんだって分かった。' },

  // ── 選考試合・トライアングルZ（ep.077）(anime_02) ──
  { id: 7,  speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: 'anime_02.png', seFile: '拍子木2.mp3',
    text: '選考試合でトライアングルZを体で受け止めようとしてたの、当時マジで衝撃だった。' },
  { id: 8,  speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: 'anime_02.png',
    text: '喧嘩で鍛えた本能でボールを止めようとしてたの、もう完全にサッカーじゃなかった。' },
  { id: 9,  speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: 'anime_02.png',
    text: 'あの選考試合のシーン、普通の選手じゃ絶対やらないことを平然とやってて好きだった。' },
  { id: 10, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: 'anime_02.png',
    text: 'サッカー未経験なのに独自の発想でプレーしてるの、当時は笑いながら見てたけど後から泣けた。' },

  // ── 合宿・初心者ぶり（ep.083）(anime_03) ──
  { id: 11, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: 'anime_03.png', seFile: '小鼓（こつづみ）.mp3',
    text: '合宿での飛鷹の下手くそっぷり、正直最初は戦力として計算できないと思ってた。' },
  { id: 12, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: 'anime_03.png',
    text: 'それでも必死に食らいついてる姿があって、どこかで活躍しそうって予感があった。' },
  { id: 13, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: 'anime_03.png',
    text: '舎弟のことを気にしながら合宿に来てるのが、キャラとして人間臭くてすごく好きだった。' },
  { id: 14, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: 'anime_03.png',
    text: '響木コーチに目をかけてもらってる時のシーン、なんかじんとした記憶がある。' },

  // ── ファイアードラゴン戦・真空魔が決まらない絶望（ep.084）(anime_04) ──
  { id: 15, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: 'anime_04.png', seFile: '拍子木1.mp3',
    text: 'ファイアードラゴン戦、飛鷹に任されてるのに真空魔が全然決まらない焦りがこっちにも伝わってきた。' },
  { id: 16, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: 'anime_04.png',
    text: '何回やっても失敗して、このまま飛鷹のシーンはバッドエンドで終わるのかって思った。' },
  { id: 17, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: 'anime_04.png',
    text: '失敗するたびにうなだれる飛鷹の顔、見てられなかった。' },
  { id: 18, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: 'anime_04.png',
    text: 'あの試合前半の飛鷹、本当につらそうで見てて胸が痛かった。' },

  // ── 真空魔失敗の連続（anime_05）──
  { id: 19, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: 'anime_05.png', seFile: '拍子木2.mp3',
    text: '真空魔が決まらなくて仲間に申し訳なさそうにしてる飛鷹、泣きそうになった。' },
  { id: 20, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: 'anime_05.png',
    text: 'あのシーン、努力してきたのに本番で通じないって一番しんどい状況だよな。' },
  { id: 21, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: 'anime_05.png',
    text: '飛鷹が一人で葛藤してるの見て、当時テレビの前で「頑張れ」って言ってた。' },
  { id: 22, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: 'anime_05.png',
    text: '試合中に技が決まらない苦しさ、あのシーンの演出が本当に上手かった。' },

  // ── 円堂の名言（anime_06）──
  { id: 23, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: 'anime_06.png', seFile: '和太鼓でドドン.mp3',
    text: '円堂の「失敗を恐れてプレーしないのが一番恥ずかしいんだぞ」って言葉、今でも覚えてる。' },
  { id: 24, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: 'anime_06.png',
    text: 'あの一言で飛鷹の目が変わったのが分かった瞬間、鳥肌立った。' },
  { id: 25, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: 'anime_06.png',
    text: '円堂ってなんでこういう時に完璧なことを言えるんだよって当時思った。' },
  { id: 26, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: 'anime_06.png',
    text: '失敗を恐れるなって言葉は飛鷹だけじゃなくて視聴者の自分にも刺さった。' },

  // ── 真空魔完成！（anime_07）──
  { id: 27, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: 'anime_07.png', seFile: '小鼓（こつづみ）.mp3',
    text: '真空魔が完成した瞬間の演出、あのエフェクトが最高でテンション爆上がりした。' },
  { id: 28, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: 'anime_07.png',
    text: '真空魔ってビジュアルが格好よすぎる。空間が歪むエフェクトが当時から大好きだった。' },
  { id: 29, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: 'anime_07.png',
    text: 'ただのブロック技なのに必殺シュートを止めるって「えっそんなことできるの！？」ってなった。' },
  { id: 30, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: 'anime_07.png',
    text: '喧嘩で磨いた蹴りから生まれた技っていう設定、ロマンの塊すぎる。' },

  // ── カオスブレイクを止めた瞬間（anime_08）──
  { id: 31, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: 'anime_08.png', seFile: '和太鼓でドドン.mp3',
    text: 'カオスブレイクが真空魔に吸い込まれた瞬間、声出して喜んだの自分だけじゃないと思う。' },
  { id: 32, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: 'anime_08.png',
    text: 'ブルンとガゼルがあっけにとられてた顔、あれが全てを物語ってた。' },
  { id: 33, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: 'anime_08.png',
    text: 'ファイアードラゴン最強のカオスブレイクをMF一人で止めるって、普通じゃないよ。' },
  { id: 34, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: 'anime_08.png',
    text: '飛鷹が技を完成させた瞬間の達成感、あの試合で一番テンションが上がったシーンかもしれない。' },

  // ── アジア決勝勝利・飛鷹の感慨（anime_09）──
  { id: 35, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: 'anime_09.png', seFile: '拍子木1.mp3',
    text: 'アジア地区決勝で勝てた時、飛鷹の活躍があったからこそって感じでより嬉しかった。' },
  { id: 36, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: 'anime_09.png',
    text: 'あの試合の飛鷹、完全に主役してたよ。ヒロトやみんなより輝いてた。' },
  { id: 37, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: 'anime_09.png',
    text: '不良が真空魔一本を磨き上げてここまで来るの、イナズマイレブンって本当にいいなって思った。' },
  { id: 38, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: 'anime_09.png',
    text: '飛鷹が円堂に駆け寄るシーン、あの二人の信頼関係が好きすぎる。' },

  // ── FFI本番・真空魔は世界に通用するのか（anime_10）──
  { id: 39, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: 'anime_10.png', seFile: '拍子木2.mp3',
    text: 'FFI本番でも真空魔を使ってるの見て、世界相手に大丈夫かってハラハラしてた。' },
  { id: 40, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: 'anime_10.png',
    text: '真空魔一本で世界大会を渡り歩くって設定、当時は無謀だと思ってた。' },
  { id: 41, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: 'anime_10.png',
    text: '試合のたびに真空魔が通じてる飛鷹を見て、「こいつには真空魔があれば十分なんだ」って思えてきた。' },
  { id: 42, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: 'anime_10.png',
    text: '飛鷹が輝くシーンってほぼ真空魔のシーンなんだけど、それが逆に潔くて格好いいんだよな。' },

  // ── FFI本番・豪炎寺との特訓（ep.100）(anime_11) ──
  { id: 43, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: 'anime_11.png', seFile: '小鼓（こつづみ）.mp3',
    text: '豪炎寺と飛鷹が一緒に特訓してるシーン、二人のキャラの組み合わせが新鮮だった。' },
  { id: 44, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: 'anime_11.png',
    text: '豪炎寺が飛鷹を認めてるって伝わるシーン、なんか嬉しくなった。' },
  { id: 45, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: 'anime_11.png',
    text: '飛鷹と豪炎寺って仲良いイメージがあって、その関係性が好きだった。' },
  { id: 46, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: 'anime_11.png',
    text: '真空魔一本で豪炎寺レベルの選手と対等に特訓できてるの、改めて考えるとすごいよ。' },

  // ── チームメイトとの絆（ED5）(anime_12) ──
  { id: 47, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: 'anime_12.png', seFile: '拍子木1.mp3',
    text: '栗松や虎丸とワイワイしてる飛鷹のシーン、チームに馴染んでるの見て嬉しかった。' },
  { id: 48, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: 'anime_12.png',
    text: 'EDに飛鷹がしっかり映ってるの見て、ちゃんとチームの一員なんだって改めて感じた。' },
  { id: 49, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: 'anime_12.png',
    text: '不良が仲間と本気で笑ってるシーンって何回見ても好きだよな。' },
  { id: 50, speakerId: 8, speakerName: '春日部つむぎ', color: '#44AAFF', image: 'anime_12.png',
    text: '最初は「なんで不良がいるんだ」ってなってた視聴者全員が、いつの間にか飛鷹のファンになってたと思う。' },

  // ── まとめ（OP4）(anime_13) ──
  { id: 51, speakerId: 3, speakerName: 'ずんだもん',   color: '#FFE000', image: 'anime_13.png', seFile: '和太鼓でドドン.mp3',
    text: '飛鷹征矢って本当に異質なキャラだったけど、真空魔一本で世界と戦い続けた姿は今でも記憶に残ってる。' },
  { id: 52, speakerId: 2, speakerName: '四国めたん',   color: '#FF4444', image: 'anime_13.png',
    text: '必殺技一本で世界の強豪と渡り合えたのって飛鷹だけだと思う。イナズマイレブン史上最高のロマンキャラだった。' },
];
