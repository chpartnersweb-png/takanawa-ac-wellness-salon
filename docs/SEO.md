# 高輪鍼灸 AC Wellness Salon｜SEO設定

更新日：2026年10月29日

## 基準の公開URL

https://takanawa-ac-wellness-salon.pages.dev/

`src/data/site.mjs`の`SITE_URL`を本番URLの唯一の設定元としています。Astroの`site`設定、canonical、OGPのURL、JSON-LDの識別子と画像URL、robots.txt、サイトマップが参照します。

## タイトルと説明文

`src/data/seo.ts`にまとめています。

タイトル：

> 高輪鍼灸 AC Wellness Salon｜高輪台の鍼灸・美容サロン

説明文には店舗名、高輪台駅徒歩3分、男女ともに利用可能・完全予約制、鍼灸・美容鍼・フェイシャル・ボディケア・姿勢のケア、ブライダル、年齢を重ねても自分らしく過ごすための美容と健康、ミセス・インターナショナル2027公式パートナー、営業時間、水曜定休を記載。2026年10月30日のご訂正に沿い、男性も利用可能な表記へ更新しました。営業時間と店名は`src/data/salon.ts`の値を参照します。

H1には見える短いコピーを維持し、同じ見出し内にアクセシブルな店舗名を追加しています。ヒーローの可視テキスト量とレイアウトは変更していません。

## メタタグ

`src/components/Seo.astro`が次のタグをサーバー側のHTMLとして出力します。

- title、description。
- canonical。クエリ文字列とフラグメントは除外。
- robots：`index, follow, max-image-preview:large`。
- OGP：店舗名、タイトル、説明文、正規URL、locale、画像の絶対URL・形式・幅・高さ・代替テキスト。
- X/Twitter：summary_large_image、タイトル、説明文、画像、画像の代替テキスト。
- サイトマップへのlink。

OGP画像は、提供の施術室写真`src/assets/line_oa_chat_261028_111814.jpg`を入力に、Astroで1200×630のJPEGへ変換する構成です。店舗紹介としての代表画像にも同じ写真を使用します。

## 構造化データ

`src/data/seo.ts`の`createStructuredData()`でJSON-LDのグラフを生成します。

| 型 | 内容 |
| --- | --- |
| HealthAndBeautyBusiness | LocalBusinessの下位型。店舗名、別名、URL、住所、建物・地下1階、電話、営業時間、SNS・掲載先、地図、代表画像、ロゴ |
| WebSite | サイト名、URL、言語、運営する店舗 |
| WebPage | ページ名、説明、正規URL、所属サイト、紹介対象の店舗、代表画像 |
| ImageObject | 提供の施術室写真に基づく代表画像と透過ロゴ |

住所・電話・営業時間は`src/data/salon.ts`の店舗情報から生成し、水曜日を営業曜日に含めていません。電話番号は国際形式です。店舗の`@id`は`#salon`として固定し、WebSite・WebPageとの関係を明示しています。

メニュー、料金、クーポン、レビュー、評価点、受賞歴、資格、正確な緯度経度、支払方法など、今回の提供情報で確認できない項目は追加していません。公式パートナーは受賞歴として記述していません。

## クローラー向けファイル

- `src/pages/robots.txt.ts` → `/robots.txt`。全体のクロールを許可し、サイトマップの絶対URLを記載。
- `src/pages/sitemap.xml.ts` → `/sitemap.xml`。一枚構成のLPのため、正規のトップページURLだけを掲載。

セクションのアンカー、外部予約サイト、SNSはサイトマップに含めません。根拠のない更新日や自動的に現在日付へ変わるlastmodも出力していません。

## 公開への反映と未実施事項

ご依頼により、ソース変更後のビルド、型チェック、生成HTML・robots・sitemapの確認、構造化データ検証、ブラウザー確認は行っていません。Cloudflare Pagesへの再デプロイ、Search Consoleへの所有権登録・サイトマップ送信・インデックス登録リクエストも行っていません。

事前の調査では公開URLを取得ツールから読み取れなかったため、現在の公開サイトのHTML・HTTPステータス・クロール可否は未確認です。これはサイトが停止していることを示すものではありません。

反映時に行う作業：

1. ソース変更をCloudflare Pagesのデプロイ元へ反映し、再ビルド・再デプロイ。
2. 公開ページのcanonical・OGP・JSON-LD、`/robots.txt`と`/sitemap.xml`を確認。
3. Google Search Consoleで所有権を確認し、`https://takanawa-ac-wellness-salon.pages.dev/sitemap.xml`を送信。
4. 必要に応じてURL検査から再クロールを依頼。

検索結果のタイトル・説明・画像やインデックス登録の時期は検索エンジンの判断によります。

## 参照

- Astro Routing：https://docs.astro.build/en/guides/routing/
- Google Local Business：https://developers.google.com/search/docs/appearance/structured-data/local-business
- Google Sitemap：https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Schema.org HealthAndBeautyBusiness：https://schema.org/HealthAndBeautyBusiness
