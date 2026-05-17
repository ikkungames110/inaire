# Codex 起動時メモ

このリポジトリは以前 Claude Code で運用していた動画生成環境です。Codex でも同じ運用をするため、セッション開始時はこのファイルを入口にしてください。

## 最初に読むもの

1. `CLAUDE.md`
2. `docs/反応集.md`
3. `vocab.md`

`CLAUDE.md` という名前ですが、Codex でも必ず従います。フォーマット固有の細則は `docs/反応集.md`、固有名詞の読みと補足は `vocab.md` が正です。

## 作業前チェック

- `git status --short` で作業ツリーを確認し、既存の変更を勝手に戻さない。
- PowerShell で日本語ファイルを読むときは `Get-Content -Encoding UTF8` を使う。
- `npm` / `npx` を直接呼ぶと PowerShell の実行ポリシーで止まる場合があるため、必要なら `npm.cmd` / `npx.cmd` を使う。
- VOICEVOX はローカル起動前提。確認コマンド:
  `Invoke-RestMethod -Uri http://localhost:50021/version`

## 反応集動画の標準フロー

新しい動画を作るときは、次の順で進めます。

1. 題材を調査し、事実関係・技名・人物名・読みを確認する。
2. 必要な語彙を `vocab.md` に追加・修正する。
3. `remotion-video/scripts/<topic>-reactions.mjs` を作成し、`VOCAB` と `COMMENTS` を export する。
4. `remotion-video/generate-audio.mjs` の import を今回の台本ファイルへ差し替える。
5. `remotion-video/download-images.mjs` の `TITLE_IMAGE` と `IMAGES` を今回の題材に合わせる。
6. `remotion-video` で以下を実行する。

```powershell
node --check .\scripts\<topic>-reactions.mjs
node .\generate-audio.mjs
node .\download-images.mjs
npx.cmd remotion compositions .\src\index.ts
node .\render.mjs
```

`render.mjs` は `out/YYYYMMDD_HHMMSS.mp4` へ出力します。固定名の `out/video.mp4` は使いません。

## 台本ルールの要点

- 形式は「掲示板反応集・視聴者反応集」。
- 合計 53 セリフ: イントロ 3 本 + 本編 50 本。
- イントロ 3 本は必須。詳細は `docs/反応集.md` の「イントロシーンのルール」。
- 本編は 4 セリフごとに画像と SE を切り替える。
- ずんだもん、四国めたん、春日部つむぎをテンポよく割り振る。
- 声優・キャスト関連の話題は入れない。
- 当時の反応集として作る場合、続編・後続作品への言及は入れない。
- コメントは VOICEVOX が自然に読めるよう、記号・絵文字・読みにくいスラングを整理する。
- 動画作成後の最終報告では、サムネに書くべき文字も必ず出力する。下部の大文字1本と、上部楕円4つ分の短い反応文を提示する。

## 画像ルール

- zerochan.net は使わない。二次創作ではなく、実際のアニメのスクリーンショットを使う。
- 基本は Inazuma Eleven Fandom Wiki / static.wikia.nocookie.net の画像を使う。
- `public/images/title.png` と `public/images/anime_01.png` からの連番を生成する。
- 画像選びは時間をかけてよい。題材の主人公がはっきり写っている高画質カットを優先する。
- 候補画像は複数集め、解像度と見た目を確認してから `download-images.mjs` に採用する。
- 原則として `1280x720` 前後のアニメスクリーンショットを使う。`400x240` や `480x360` などの低解像度画像は、他に適切な候補がない場合を除いて避ける。
- 主人公が小さい、暗すぎる、顔が切れている、後ろ姿だけ、技エフェクトだけ、集合絵で主人公が目立たない画像は避ける。
- `title.png` は特に重要。主人公の顔または全身が大きく、動画テーマが一目で伝わる画像にする。
- 4セリフごとの本編画像も、可能な限りその区間の話題に合う主人公中心のカットにする。技や関係性を扱う区間でも、主人公が画面上で認識できる画像を優先する。
- 画像取得後は最低限 `title.png`、`anime_01.png`、中盤の技カット、終盤カットを目視確認する。低解像度や不鮮明な画像が混じっていたら、レンダー前に差し替える。

## 生成物の扱い

- `src/audio-meta.json`、`public/audio/*.wav`、`public/images/*` は生成物です。
- 台本修正時は原則として `scripts/*.mjs` を直し、`node generate-audio.mjs` で `audio-meta.json` と音声を再生成します。
- 画像差し替え時は `download-images.mjs` を直して `node download-images.mjs` を再実行します。
- MP4 は `out/` に日時ファイル名で残します。古い出力はユーザー指示がない限り削除しません。

## 既知の注意点

- `嵐竜巻ハリケーン` は合体技として扱わない。`vocab.md` では「松風天馬の必殺シュート技」とする。
- 事実に迷う技名・分類・登場文脈は、台本に入れる前に調査して確認する。
