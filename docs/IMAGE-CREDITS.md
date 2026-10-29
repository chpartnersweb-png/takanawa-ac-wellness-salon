# 画像制作・使用記録

作成日：2026年10月29日

## 生成したヒーロー画像

OpenAIの組み込みimage_genツールを使用しました。ブランドの雰囲気を表すための生成画像で、実店舗の写真、実際のスタッフ、大会出場者を示すものではありません。ページではヒーローに使用し、空間紹介は提供素材を使用しています。

### PC用

- 保存先：`src/assets/generated/hero-desktop-v1.png`
- 生成元：`C:\Users\callt\.codex\generated_images\01a186fa-d29a-7222-b5e6-647f72ccd76e\exec-03470de5-6dec-48bd-aa75-3784e547e08c.png`
- ツール：組み込みimage_gen
- 用途：新規生成、横長のヒーロー画像。

使用したプロンプト：

```text
Use case: photorealistic-natural. Asset type: wide landscape hero photograph for a refined Japanese acupuncture and wellness salon, 高輪鍼灸 AC Wellness Salon. Generate a single premium editorial photograph in wide 16:9 landscape composition, high resolution. Scene: warm ivory flowing sheer linen curtains, soft early morning natural light, subtle warm grey shadows. Central subject: an adult Japanese woman approximately 35-45 years old seen from behind and a very slight side angle, hair gathered into a simple elegant low bun, wearing a tasteful opaque ivory sleeveless camisole that covers the torso; natural shoulders, graceful and relaxed upright posture. Crop from head to mid back, woman centrally positioned and occupying middle 35 percent of frame width. Realistic natural skin and anatomy, no glossy plastic skin. Camera pulled back enough to show the gentle fall of fabric and a spacious setting. Top and side areas have spacious ivory curtain negative space; lower 25 percent fades naturally into soft out-of-focus dark warm taupe fabric/shadow, with no objects or hands, to support centered white website typography later. Restrained luxury fashion editorial meets genuine calm, quiet intimate diffuse light, fine film grain, soft shadows, no dramatic black backdrop. Warm ivory, muted sand, subtle bronze hues. It is atmosphere imagery and must NOT depict or imply a real clinic interior. No visible treatment, needles, beds, equipment, crown, jewelry, flowers, logos, letters, text, typography, watermark, collage, inset panels or website mockup. One continuous photograph; do not place text on either side.
```

### スマートフォン用

- 保存先：`src/assets/generated/hero-mobile-v1.png`
- 生成元：`C:\Users\callt\.codex\generated_images\01a186fa-d29a-7222-b5e6-647f72ccd76e\exec-241b2de4-eea5-4f7a-84d2-8416ffd61e74.png`
- ツール：組み込みimage_gen
- 入力画像：上記PC用ヒーロー。人物・光・素材感を揃えるための参照画像。
- 用途：PC版をもとに、縦長の構図へ再構成。

使用したプロンプト：

```text
Create a matching portrait 9:16 mobile website hero photograph based on this reference photograph. This reference is the desktop version. Preserve the same adult Japanese woman, gathered low bun, modest opaque ivory camisole, natural upright posture, soft warm natural light, sheer ivory curtains and restrained editorial photography. Recompose as a portrait image, not a collage or letterboxed landscape: woman's head in upper middle, her shoulders and torso in central middle, bottom 25 percent blurred warm taupe foreground fabric with quiet low-contrast dark shadow for white website typography to be added separately. Show full head and both shoulders, leave space above bun, do not crop the head. A composed, graceful back view with a tiny glimpse of the right profile. Realistic human anatomy, subtle film texture, muted warm ivory and sand palette. It is atmosphere photography, not a real clinic interior. No text, logos, watermark, jewelry, crown, treatment, needles, medical equipment, flowers or graphic decoration. Return one portrait photograph.
```

## 提供素材から使用した画像

| ファイル | 用途 |
| --- | --- |
| `src/assets/logo.jpg` | 通常ロゴの原本。背景透過版を作成し、ヘッダーとフッターに使用 |
| `src/assets/logo02.jpg` | 大会用ロゴの原本。背景透過版を作成し、公式パートナー紹介に使用 |
| `src/assets/line_oa_chat_261028_111912.jpg` | サロンの考え方に添える施術イメージ |
| `src/assets/line_oa_chat_261028_111814.jpg` | 施術室の紹介 |
| `src/assets/line_oa_chat_261028_112012.jpg` | 建物外観の紹介 |
| `src/assets/line_oa_chat_261028_111903.jpg` | 健康の紹介・背中への鍼のイメージ |
| `src/assets/line_oa_chat_261028_111908.jpg` | 健康の紹介・首と肩のケアのイメージ |
| `src/assets/line_oa_chat_261028_111901.jpg` | 美容の紹介・顔まわりへの鍼のイメージ |
| `src/assets/line_oa_chat_261028_111911.jpg` | 美容の紹介・首もとと肩のライン |
| `src/assets/line_oa_chat_261028_111907.jpg` | 姿勢の紹介・肩から背中にかけての立ち姿 |
| `src/assets/line_oa_chat_261028_111910.jpg` | 姿勢の紹介・肩から背中のケアのイメージ |
| `src/assets/line_oa_chat_261028_112001.jpg` | ケアのひとこま・顔まわりの施術写真 |
| `src/assets/line_oa_chat_261028_112009.jpg` | ケアのひとこま・機器を用いた施術写真 |
| `src/assets/line_oa_chat_261028_111818.jpg` | 肩甲骨はがし・肩甲骨リリースの説明に添える施術イメージ |
| `src/assets/line_oa_chat_261028_111920.jpg` | 横から撮影したBefore／Afterの比較。全体を保持 |
| `src/assets/line_oa_chat_261028_111921.jpg` | 背中から撮影したBefore／Afterの比較。全体を保持 |
| `src/assets/line_oa_chat_261028_111935.jpg` | 橋場亜矢さんの紹介記事。2021年4月号と明記 |
| `src/assets/line_oa_chat_261028_111958.jpg` | 施術者紹介に添えるサロンでの記念写真。個人名との対応は推測しない |
| `src/assets/line_oa_chat_261028_111956.jpg` | サロンでの集合写真。全員をスタッフとする紹介は行わない |
| `src/assets/line_oa_chat_261028_111925.jpg` | 待合スペース |
| `src/assets/line_oa_chat_261028_111923.jpg` | BRIDARIUM MUE高輪本店の館内。施術室と区別 |

ロゴと提供画像の原本は変更していません。本文やボタンの文字はHTMLで記載し、生成画像内に文字を焼き込んでいません。


## ロゴの背景透過（追加修正）

通常ロゴと大会用ロゴは、元のJPEGを入力にして組み込みimage_genで背景除去を行い、アルファ透過を持つPNGとして別に保存しました。原本JPEGは変更していません。ヘッダー、フッター、公式パートナー紹介の参照を以下のPNGへ変更しています。

- 通常ロゴ：`src/assets/brand/logo-transparent-v1.png`
- 大会用ロゴ：`src/assets/brand/logo02-transparent-v1.png`

### 通常ロゴの背景除去プロンプト

```text
Use case: background-extraction. Edit this exact existing logo asset; this is NOT a request to design, recreate, reinterpret or typeset a logo. Remove only the pale ivory paper background, including the pale ivory within enclosed loops and gaps between letters, leaving genuine transparent alpha. Preserve the original gold AC monogram, crown, circular laurel decoration, lotus, every line and ALL the original Japanese and English typography including the small bottom tagline, at their original positions, relative sizes, colors, spelling and shapes. Keep the complete square composition and margins; crop nothing. Preserve fine gold strokes, gradient gold and dark gold, fine Japanese characters and clean antialiased edges. Do not add shadows, glow, outlines, a matte, a checkerboard pattern or any background pixels. The only change is removing the ivory background to actual transparency. Output a high resolution transparent PNG cutout of the entire unchanged supplied logo.
```

### 大会用ロゴの背景除去プロンプト

```text
Use case: background-extraction. Edit the exact supplied Mrs. International official partner logo image. Remove ONLY its pale ivory paper background and make it genuinely transparent, including enclosed gaps. Preserve all original foreground pixels and the full square composition: gold woman/crown, gold circular lines, pink and gold ribbons, all gold and black Japanese and English text and all fine details. This is background removal, NOT logo redesign or text regeneration. Keep every word and character exactly as provided, particularly 'Mrs. International', 'MRS. FABULOUS', 'OFFICIAL PARTNER', '美と健康と姿勢で、世界の舞台へ', the long small Japanese support sentence, the salon name and the bottom tagline. Preserve original typography, color, spacing, aspect ratio and all margins. Do not crop, simplify, recolor, move elements or add anything. No backdrop, no checkerboard pixels, no shadows, no glow. Return the entire unchanged original foreground on a true alpha-transparent high resolution PNG.
```

