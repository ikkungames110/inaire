# 動画生成ルール

このプロジェクトでは Remotion + VOICEVOX を使って動画を生成する。

フォーマット固有の詳細ルールは **[docs/反応集.md](./docs/反応集.md)** を参照すること。

---

## プロジェクト構成

```
remotion-video/
├── src/
│   ├── index.ts            # registerRoot
│   ├── Root.tsx            # Composition定義（durationInFramesはaudio-meta.jsonから自動計算）
│   ├── MyVideo.tsx         # メイン動画コンポーネント（背景切り替え・Sequence管理）
│   ├── CommentScene.tsx    # 1コメント分のシーンコンポーネント
│   ├── Background.tsx      # アニメーション背景（10パターン）
│   └── audio-meta.json     # 音声生成後に自動生成されるメタデータ
├── public/
│   ├── audio/              # VOICEVOXで生成したWAVファイル
│   ├── images/             # ダウンロードした画像ファイル（anime_01.png〜、title.png）
│   ├── bgm/                # BGMファイル
│   └── se/                 # 効果音ファイル
├── out/
│   └── YYYYMMDD_HHMMSS.mp4 # レンダリング済み動画（日時ファイル名）
├── scripts/                # 台本ファイル（動画ごとに1ファイル）
├── generate-audio.mjs      # VOICEVOX音声一括生成スクリプト
├── download-images.mjs     # 画像一括ダウンロードスクリプト
└── render.mjs              # 日時ファイル名でレンダリングするスクリプト
```

---

## 固有名詞の読み辞書

**[vocab.md](./vocab.md) を必ず参照すること。**

アニメ固有名詞の正しい読みが記載されている。音声生成前に VOICEVOX のユーザー辞書APIへ登録して、誤読を防ぐ。
新しいキャラクター名や固有名詞が出てきたら vocab.md に追記すること。

---

## 動画生成の手順

1. **`vocab.md` を確認**し、固有名詞をVOICEVOXユーザー辞書に登録（`generate-audio.mjs` 冒頭の `registerVocab()` で自動実行）
2. `node generate-audio.mjs` → `public/audio/` にWAVファイルと `src/audio-meta.json` を生成
3. `node download-images.mjs` → `public/images/` に画像ファイルを生成
4. `node render.mjs` → `out/YYYYMMDD_HHMMSS.mp4` として出力

---

## 出力ファイル名

- **必ず日時ベースのファイル名にする**
- `render.mjs` が自動で `YYYYMMDD_HHMMSS.mp4` 形式のファイル名を生成する
- `video.mp4` のような固定名は使わない

---

## VOICEVOX

- エンジンはローカルで起動しておく（デフォルト: `http://localhost:50021`）
- 起動確認: `curl http://localhost:50021/version`
- よく使うキャラクターとスピーカーID:
  - ずんだもん（ノーマル）: `3`
  - 四国めたん（ノーマル）: `2`
  - 春日部つむぎ（ノーマル）: `8`
- 話速は `audio_query` レスポンスの `speedScale` を変更する
- WAVの長さ計算: `data_chunk_size / byte_rate`（バイト位置40と28から取得）
