# 高輪鍼灸 AC Wellness Salon｜編集ガイド

## 実装の状態

2026年10月29日、LPのソースとヒーロー画像を作成しました。

ご依頼により、実装後のビルド・型チェック・ブラウザー表示・レスポンシブ表示・アニメーション動作・外部リンクの遷移確認は行っていません。開発サーバーの起動と公開も行っていません。

## 店舗情報を変更する

`src/data/salon.ts`に店舗名、住所、電話、営業時間、定休日、席数、各外部リンク、交通案内をまとめています。

予約リンクは`salon.links.booking`、LINEは`salon.links.line`です。ヘッダー、本文、予約セクション、スマートフォン固定バーがこのデータを参照します。

営業時間と定休日を変更する場合、同じデータファイル内の`openingTime`、`closingTime`、`openingDays`も変更してください。構造化データはこれらを参照します。

## セクションごとの編集先

| 内容 | ファイル |
| --- | --- |
| セクションの順序 | `src/pages/index.astro` |
| ページタイトル、説明、構造化データの内容 | `src/data/seo.ts` |
| SEOメタタグとOGP画像の出力 | `src/components/Seo.astro` |
| 本番URL | `src/data/site.mjs` |
| 共通HTML、書体の読み込み | `src/layouts/BaseLayout.astro` |
| ロゴ、ヘッダー、モバイルメニュー | `src/components/SiteHeader.astro` |
| ヒーロー画像とコピー | `src/components/HeroSection.astro` |
| 公式パートナーの紹介と大会用ロゴ | `src/components/PartnerSection.astro` |
| 整体・姿勢ケア（肩甲骨リリースを含む。CareStories内で表示） | `src/components/ReleaseSection.astro` |
| ビフォーアフターの比較写真 | `src/components/BeforeAfterSection.astro` |
| サロン全体の理念とケアの紹介 | `src/components/PhilosophySection.astro` |
| 心と体に寄り添うケア・内側からの美しさ・安心できる空間の3つの約束 | `src/components/SalonPromises.astro` |
| 鍼灸・美容鍼・フェイシャルの写真と文章、整体・姿勢ケアの読み込み | `src/components/CareStories.astro` |
| 施術者紹介、人物写真、2021年の紹介記事 | `src/components/PractitionerSection.astro` |
| 施術室、待合スペース、建物外観、館内 | `src/components/SalonSection.astro` |
| ブライダルケア | `src/components/BridalSection.astro` |
| 詳細・予約セクション | `src/components/BookingSection.astro` |
| 店舗情報と交通案内 | `src/components/AccessSection.astro` |
| フッター、SNS | `src/components/SiteFooter.astro` |
| スマートフォン下部の固定リンク | `src/components/MobileActions.astro` |
| 共通の予約ボタン | `src/components/BookingLink.astro` |
| 色、書体、余白、画面幅別のスタイル | `src/styles/global.css` |
| 参考資料に基づく追加セクションのスタイル | `src/styles/content.css` |
| GSAP、ScrollTrigger、Lenis、メニュー操作 | `src/scripts/site.ts` |

## 画像

ヒーロー用に生成した画像：

- `src/assets/generated/hero-desktop-v1.png`
- `src/assets/generated/hero-mobile-v1.png`

PC用とスマートフォン用は`picture`で切り替えます。Astroの画像処理を通じてWebPへ変換する構成です。その他の提供画像もAstroの`Image`を使い、ヒーロー以外の大きな画像は遅延読み込みします。

通常ロゴは`src/assets/brand/logo-transparent-v1.png`、大会用ロゴは`src/assets/brand/logo02-transparent-v1.png`を使用。元のJPEGは保管したまま、背景透過版を別ファイルとして作成しています。ロゴを読み込むAstroの`Image`もPNG形式を明示し、アルファ透過を維持します。画像制作の記録とプロンプトは`docs/IMAGE-CREDITS.md`を参照してください。

提供画像は19点（紹介記事の画像を含む）を使用し、提供ロゴ2点と合わせて21点です。鍼灸・ボディケア、美容鍼、フェイシャル、整体・姿勢ケアに写真を組み合わせ、比較写真、人物写真、紹介記事、施術室・待合・館内・外観も使用しています。美容鍼と機器による施術写真は、それぞれのケアの説明へ移しています。同じ画像をブライダル紹介にも再利用していますが、使用数には重複して数えていません。

比較写真は全体と元のBefore／After表示を保持し、画像全体を新しいタブで大きく見るリンクを設けています。紹介記事も全体を掲載し、2021年4月号と明記して原寸表示リンクを設けています。追加写真もAstroの`Image`と遅延読み込みを使用します。今回の追加後も、実装後のビルド・型チェック・ブラウザー確認は実行していません。

参考資料と文章・画像の対応は`docs/CONTENT-SOURCES.md`にまとめています。`salon.features`と`salon.practitioner`は`src/data/salon.ts`から変更できます。

## 動き

- PCでマウス操作の場合にLenisを有効化し、GSAPのtickerと同期。
- 健康・美容・姿勢の短い固定演出は、幅1024px以上・高さ760px以上・細かなポインター操作の端末に限定。
- スマートフォンは標準のタッチスクロールを維持。
- `prefers-reduced-motion: reduce`ではGSAPの表示・移動演出とLenisを有効化しない。
- JavaScriptが動かないときも、文章・画像・通常のリンク・ネイティブのメニューを利用できる構成。

## 公開URL

本番URLは`https://takanawa-ac-wellness-salon.pages.dev/`に設定済みです。`src/data/site.mjs`の`SITE_URL`を、Astro設定・canonical・OGP・構造化データ・robots.txt・サイトマップで共有しています。ドメインを変更する場合は、この値を変更します。

```js
export const SITE_URL = 'https://takanawa-ac-wellness-salon.pages.dev/';
```

`src/components/Seo.astro`でcanonical、OGP、X/Twitterメタタグと構造化データを出力します。OGPは提供の施術室写真から1200×630のJPEGを生成する構成です。`src/pages/robots.txt.ts`と`src/pages/sitemap.xml.ts`はビルド時に静的ファイルを生成します。

詳細は`docs/SEO.md`を参照してください。ソース変更を公開サイトへ反映するにはCloudflare Pagesで再ビルド・再デプロイが必要です。SEO変更後も、ご指定によりビルド・型チェック・構造化データの検証・ブラウザー確認は実行していません。Search Console登録やサイトマップ送信も行っていません。

## ご自身で確認するとき

開発サーバーはプロジェクトの指示に従って、次の形で起動します。

```powershell
npm run dev -- --background
```

これは`astro dev --background`に渡されます。管理コマンドは`npm run astro -- dev status`、`npm run astro -- dev logs`、`npm run astro -- dev stop`です。

ビルドは`npm run build`です。いずれも実装後には実行していません。

予約先のHOT PEPPER Beautyは、計画時に取得できた掲載内容の店名・定休日が今回のご提供情報と異なっていました。LPはご提供情報の「高輪鍼灸 AC Wellness Salon」「10:00〜19:00」「水曜日定休」を使用しています。
