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
| ページタイトル、説明、OGP、構造化データ | `src/layouts/BaseLayout.astro` |
| ロゴ、ヘッダー、モバイルメニュー | `src/components/SiteHeader.astro` |
| ヒーロー画像とコピー | `src/components/HeroSection.astro` |
| 公式パートナーの紹介と大会用ロゴ | `src/components/PartnerSection.astro` |
| 健康・美容・姿勢の紹介 | `src/components/PhilosophySection.astro` |
| 健康・美容・姿勢に添える6点の写真と文章 | `src/components/CareStories.astro` |
| 施術室と建物外観 | `src/components/SalonSection.astro` |
| 詳細・予約セクション | `src/components/BookingSection.astro` |
| 店舗情報と交通案内 | `src/components/AccessSection.astro` |
| フッター、SNS | `src/components/SiteFooter.astro` |
| スマートフォン下部の固定リンク | `src/components/MobileActions.astro` |
| 共通の予約ボタン | `src/components/BookingLink.astro` |
| 色、書体、余白、画面幅別のスタイル | `src/styles/global.css` |
| GSAP、ScrollTrigger、Lenis、メニュー操作 | `src/scripts/site.ts` |

## 画像

ヒーロー用に生成した画像：

- `src/assets/generated/hero-desktop-v1.png`
- `src/assets/generated/hero-mobile-v1.png`

PC用とスマートフォン用は`picture`で切り替えます。Astroの画像処理を通じてWebPへ変換する構成です。その他の提供画像もAstroの`Image`を使い、ヒーロー以外の大きな画像は遅延読み込みします。

通常ロゴは`src/assets/brand/logo-transparent-v1.png`、大会用ロゴは`src/assets/brand/logo02-transparent-v1.png`を使用。元のJPEGは保管したまま、背景透過版を別ファイルとして作成しています。ロゴを読み込むAstroの`Image`もPNG形式を明示し、アルファ透過を維持します。画像制作の記録とプロンプトは`docs/IMAGE-CREDITS.md`を参照してください。

提供写真は11点を使用しています。従来の施術イメージ・施術室・建物外観に加え、`CareStories.astro`に6点、`SalonSection.astro`の「ケアのひとこま」に2点を追加しました。提供ロゴ2点を含めた使用素材は13点です。追加写真もAstroの`Image`と遅延読み込みを使用します。今回の追加後も、実装後のビルド・型チェック・ブラウザー確認は実行していません。

## 動き

- PCでマウス操作の場合にLenisを有効化し、GSAPのtickerと同期。
- 健康・美容・姿勢の短い固定演出は、幅1024px以上・高さ760px以上・細かなポインター操作の端末に限定。
- スマートフォンは標準のタッチスクロールを維持。
- `prefers-reduced-motion: reduce`ではGSAPの表示・移動演出とLenisを有効化しない。
- JavaScriptが動かないときも、文章・画像・通常のリンク・ネイティブのメニューを利用できる構成。

## 公開URL

本番URLは未指定です。公開URLが決まったら、`astro.config.mjs`の`defineConfig`に`site`を設定してください。

```js
export default defineConfig({
  site: '確定した本番URL',
});
```

`site`が設定されたときにcanonical、`og:url`、OGP画像の絶対URLを出力する構成です。仮のドメインは出力していません。サイトマップ等の公開後SEO作業は今回の実装には含めていません。

## ご自身で確認するとき

開発サーバーはプロジェクトの指示に従って、次の形で起動します。

```powershell
npm run dev -- --background
```

これは`astro dev --background`に渡されます。管理コマンドは`npm run astro -- dev status`、`npm run astro -- dev logs`、`npm run astro -- dev stop`です。

ビルドは`npm run build`です。いずれも実装後には実行していません。

予約先のHOT PEPPER Beautyは、計画時に取得できた掲載内容の店名・定休日が今回のご提供情報と異なっていました。LPはご提供情報の「高輪鍼灸 AC Wellness Salon」「10:00〜19:00」「水曜日定休」を使用しています。
