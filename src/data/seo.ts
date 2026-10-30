import { SITE_URL } from './site.mjs';
import { salon } from './salon';

export const seo = {
  title: `${salon.name}｜高輪台の鍼灸・美容サロン`,
  description: `高輪台駅徒歩3分、男女ともにご利用いただける完全予約制サロン「${salon.name}」。鍼灸・美容鍼・フェイシャル・ボディケア・姿勢のケアを、一人ひとりに合わせてご提案。ブライダルや、年齢を重ねても自分らしく過ごすための美容と健康をサポートします。ミセス・インターナショナル2027公式パートナー。${salon.hours}、${salon.closed}定休。`,
  imageAlt: `${salon.name}の施術室`,
  language: 'ja-JP',
  locale: 'ja_JP',
  robots: 'index, follow, max-image-preview:large',
} as const;

interface StructuredDataOptions {
  canonical: string;
  imageUrl: string;
  logoUrl: string;
}

export function createStructuredData({ canonical, imageUrl, logoUrl }: StructuredDataOptions) {
  const businessId = new URL('#salon', SITE_URL).href;
  const websiteId = new URL('#website', SITE_URL).href;
  const pageId = new URL('#webpage', canonical).href;
  const imageId = new URL('#primaryimage', canonical).href;
  const logoId = new URL('#logo', SITE_URL).href;
  const instagram = new URL(salon.links.instagram);
  instagram.search = '';
  instagram.hash = '';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HealthAndBeautyBusiness',
        '@id': businessId,
        name: salon.name,
        alternateName: [salon.shortName, salon.englishName],
        url: SITE_URL,
        description: seo.description,
        image: { '@id': imageId },
        logo: { '@id': logoId },
        telephone: salon.phoneHref.replace('tel:0', '+81'),
        address: {
          '@type': 'PostalAddress',
          ...salon.postalAddress,
          postalCode: salon.postalCode,
          streetAddress: `${salon.postalAddress.streetAddress} ${salon.building} ${salon.floor}`,
        },
        hasMap: salon.links.maps,
        sameAs: [instagram.href, salon.links.line, salon.links.booking, salon.links.google],
        openingHoursSpecification: [{
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: salon.openingDays.map((day) => `https://schema.org/${day}`),
          opens: salon.openingTime,
          closes: salon.closingTime,
        }],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE_URL,
        name: salon.name,
        alternateName: salon.englishName,
        inLanguage: seo.language,
        publisher: { '@id': businessId },
      },
      {
        '@type': 'WebPage',
        '@id': pageId,
        url: canonical,
        name: seo.title,
        description: seo.description,
        inLanguage: seo.language,
        isPartOf: { '@id': websiteId },
        about: { '@id': businessId },
        primaryImageOfPage: { '@id': imageId },
      },
      {
        '@type': 'ImageObject',
        '@id': imageId,
        url: imageUrl,
        contentUrl: imageUrl,
        width: 1200,
        height: 630,
        caption: seo.imageAlt,
      },
      {
        '@type': 'ImageObject',
        '@id': logoId,
        url: logoUrl,
        contentUrl: logoUrl,
        caption: `${salon.name} ロゴ`,
      },
    ],
  };
}
