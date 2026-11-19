import fs from 'fs';
import path from 'path';

const fruitDir = '/home/mrks/GitHub/Mohan2123.github.io/fruit_cutter/privacy_policy';

// Native translation mapping for Privacy Policy according to Slang i18n
const nativePrivacyTitles = {
  ar: 'سياسة الخصوصية',
  bn: 'গোপনীয়তা নীতি',
  de: 'Datenschutzrichtlinie',
  en: 'Privacy Policy',
  en_au: 'Privacy Policy',
  en_gb: 'Privacy Policy',
  en_in: 'Privacy Policy',
  en_ru: 'Privacy Policy',
  en_us: 'Privacy Policy',
  es: 'Política de privacidad',
  fr: 'Politique de confidentialité',
  gu: 'ગોપનીયતા નીતિ',
  ha: 'Manufar Sirri',
  hi: 'गोपनीयता नीति',
  id: 'Kebijakan Privasi',
  it: 'Informativa sulla privacy',
  ja: 'プライバシーポリシー',
  kn: 'ಗೌಪ್ಯತಾ ನೀತಿ',
  ko: '개인정보 처리방침',
  mr: 'गोपनीयता धोरण',
  od: 'ଗୋପନୀୟତା ନୀତି',
  pt: 'Política de Privacidade',
  pt_br: 'Política de Privacidade',
  ru: 'Политика конфиденциальности',
  sw: 'Sera ya faragha',
  ta: 'தனியுரிமைக் கொள்கை',
  te: 'గోప్యతా విధానం',
  tr: 'Gizlilik Politikası',
  ur: 'رازداری کی پالیسی',
  vi: 'Chính sách quyền riêng tư',
  zh: '隐私政策'
};

const nativePrivacyDescriptions = {
  ar: 'سياسة الخصوصية لـ Fruit Blade: Bogatyr Slicer.',
  bn: 'Fruit Blade: Bogatyr Slicer এর গোপনীয়তা নীতি।',
  de: 'Datenschutzrichtlinie für Fruit Blade: Bogatyr Slicer.',
  en: 'Privacy Policy for Fruit Blade: Bogatyr Slicer.',
  en_au: 'Privacy Policy for Fruit Blade: Bogatyr Slicer.',
  en_gb: 'Privacy Policy for Fruit Blade: Bogatyr Slicer.',
  en_in: 'Privacy Policy for Fruit Blade: Bogatyr Slicer.',
  en_ru: 'Privacy Policy for Fruit Blade: Bogatyr Slicer.',
  en_us: 'Privacy Policy for Fruit Blade: Bogatyr Slicer.',
  es: 'Política de privacidad de Fruit Blade: Bogatyr Slicer.',
  fr: 'Politique de confidentialité de Fruit Blade: Bogatyr Slicer.',
  gu: 'Fruit Blade: Bogatyr Slicer માટે ગોપનીયતા નીતિ.',
  ha: 'Manufar Sirri na Fruit Blade: Bogatyr Slicer.',
  hi: 'Fruit Blade: Bogatyr Slicer के लिए गोपनीयता नीति।',
  id: 'Kebijakan Privasi untuk Fruit Blade: Bogatyr Slicer.',
  it: 'Informativa sulla privacy per Fruit Blade: Bogatyr Slicer.',
  ja: 'Fruit Blade: Bogatyr Slicer のプライバシーポリシー。',
  kn: 'Fruit Blade: Bogatyr Slicer ಗಾಗಿ ಗೌಪ್ಯತಾ ನೀತಿ.',
  ko: 'Fruit Blade: Bogatyr Slicer에 대한 개인정보 처리방침.',
  mr: 'Fruit Blade: Bogatyr Slicer साठी गोपनीयता धोरण.',
  od: 'Fruit Blade: Bogatyr Slicer ପାଇଁ ଗୋପନୀୟତା ନୀତି |',
  pt: 'Política de Privacidade para Fruit Blade: Bogatyr Slicer.',
  pt_br: 'Política de Privacidade para Fruit Blade: Bogatyr Slicer.',
  ru: 'Политика конфиденциальности для Fruit Blade: Bogatyr Slicer.',
  sw: 'Sera ya faragha ya Fruit Blade: Bogatyr Slicer.',
  ta: 'Fruit Blade: Bogatyr Slicer க்கான தனியுரிமைக் கொள்கை.',
  te: 'Fruit Blade: Bogatyr Slicer కొరకు గోప్యతా విధానం.',
  tr: 'Fruit Blade: Bogatyr Slicer için Gizlilik Politikası.',
  ur: 'Fruit Blade: Bogatyr Slicer کے لیے رازداری کی پالیسی۔',
  vi: 'Chính sách quyền riêng tư cho Fruit Blade: Bogatyr Slicer.',
  zh: 'Fruit Blade: Bogatyr Slicer 隐私政策。'
};

const appName = 'Fruit Blade: Bogatyr Slicer';

for (const file of fs.readdirSync(fruitDir)) {
  if (!file.endsWith('.html')) continue;
  const code = file.replace('.html', '');
  const nativeTitle = nativePrivacyTitles[code] || 'Privacy Policy';
  const nativeDesc = nativePrivacyDescriptions[code] || `Privacy Policy for ${appName}.`;
  const fullTitle = `${nativeTitle} - ${appName}`;
  const langAttr = code.replace(/_([a-z]+)/, (_, reg) => `-${reg.toUpperCase()}`);

  const content = `<!DOCTYPE html>
<html lang="${langAttr}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${fullTitle}</title>
    <meta name="description" content="${nativeDesc}" />
    <script type="module" crossorigin src="/assets-react/route-loader.js"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`;

  fs.writeFileSync(path.join(fruitDir, file), content, 'utf8');
  console.log(`Updated ${file}: <title>${fullTitle}</title>`);
}
