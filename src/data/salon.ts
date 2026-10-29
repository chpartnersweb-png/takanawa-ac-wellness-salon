export const salon = {
  name: '高輪鍼灸 AC Wellness Salon',
  shortName: '高輪鍼灸',
  englishName: 'AC Wellness Salon',
  phone: '080-3910-8764',
  phoneHref: 'tel:08039108764',
  postalCode: '108-0074',
  address: '東京都港区高輪3-7-6',
  building: 'BRIDARIUM MUE高輪本店',
  buildingKana: 'ブライダリウム・ミュー',
  floor: '地下1階',
  hours: '10:00–19:00',
  openingTime: '10:00',
  closingTime: '19:00',
  openingDays: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  hoursNote: '平日・土日祝共通',
  closed: '水曜日',
  seats: 2,
  links: {
    booking: 'https://beauty.hotpepper.jp/kr/slnH000823136/',
    line: 'https://lin.ee/x8CLAPL',
    instagram: 'https://www.instagram.com/takanawa.ac.ws?psln=MTM1M3lyYjBiZmY2cQ%3D%3D&utm_source=qr',
    google: 'https://share.google/P1SCsCR06LAow3b6Z',
    maps: 'https://maps.app.goo.gl/j9UozEvuZt2Zph4D7?g_st=ic',
  },
} as const;

export const navigation = [
  { href: '#partnership', label: '公式パートナー', en: 'Partnership' },
  { href: '#philosophy', label: '私たちの想い', en: 'Our philosophy' },
  { href: '#salon', label: 'サロンについて', en: 'Our salon' },
  { href: '#access', label: 'アクセス', en: 'Access' },
] as const;

export const transport = [
  {
    title: '電車でお越しの方',
    en: 'By train',
    items: [
      { name: '都営浅草線 高輪台駅 A2出口', time: '徒歩3分' },
      { name: 'JR品川駅 高輪口（京急）', time: '徒歩12分' },
    ],
  },
  {
    title: 'バスでお越しの方',
    en: 'By bus',
    items: [
      { name: '高輪三丁目', time: '徒歩1分' },
      { name: '白金台二丁目', time: '徒歩3分' },
      { name: '高輪警察署前', time: '徒歩3分' },
    ],
  },
  {
    title: 'お車でお越しの方',
    en: 'By car',
    items: [{ name: '首都2号目黒線 天現寺出入口', time: '9分' }],
  },
  {
    title: '近隣駐車場',
    en: 'Nearby parking',
    items: [
      { name: 'ナビパーク 高輪第7', time: '徒歩0分' },
      { name: 'PARKS PARK 港区高輪3丁目第6', time: '徒歩1分' },
      { name: 'ナビパーク 高輪第6', time: '徒歩1分' },
    ],
  },
] as const;
