import fs from 'fs';
import path from 'path';

const rootDir = '/home/mrks/GitHub/Mohan2123.github.io';
const appName = 'Spin Strike';

const nativePrivacyTitles = {
  ar: 'سياسة الخصوصية',
  bn: 'গোপনীয়তা নীতি',
  de: 'Datenschutzerklärung',
  en: 'Privacy Policy',
  en_au: 'Privacy Policy',
  en_gb: 'Privacy Policy',
  en_in: 'Privacy Policy',
  en_ru: 'Privacy Policy',
  en_us: 'Privacy Policy',
  es: 'Política de Privacidad',
  fr: 'Politique de Confidentialité',
  gu: 'ગોપનીયતા નીતિ',
  ha: 'Manufar Tsare Sirri',
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
  sw: 'Sera ya Faragha',
  ta: 'தனியுரிமைக் கொள்கை',
  te: 'గోప్యతా విధానం',
  tr: 'Gizlilik Politikası',
  ur: 'رازداری کی پالیسی',
  vi: 'Chính Sách Bảo Mật',
  zh: '隐私政策'
};

const nativePrivacyDescriptions = {
  ar: `سياسة الخصوصية لـ ${appName}.`,
  bn: `${appName} এর গোপনীয়তা নীতি।`,
  de: `Datenschutzerklärung für ${appName}.`,
  en: `Privacy Policy for ${appName}.`,
  en_au: `Privacy Policy for ${appName}.`,
  en_gb: `Privacy Policy for ${appName}.`,
  en_in: `Privacy Policy for ${appName}.`,
  en_ru: `Privacy Policy for ${appName}.`,
  en_us: `Privacy Policy for ${appName}.`,
  es: `Política de Privacidad de ${appName}.`,
  fr: `Politique de Confidentialité de ${appName}.`,
  gu: `${appName} માટે ગોપનીયતા નીતિ.`,
  ha: `Manufar Tsare Sirri na ${appName}.`,
  hi: `${appName} के लिए गोपनीयता नीति।`,
  id: `Kebijakan Privasi untuk ${appName}.`,
  it: `Informativa sulla privacy per ${appName}.`,
  ja: `${appName} のプライバシーポリシー。`,
  kn: `${appName} ಗಾಗಿ ಗೌಪ್ಯತಾ ನೀತಿ.`,
  ko: `${appName}에 대한 개인정보 처리방침.`,
  mr: `${appName} साठी गोपनीयता धोरण.`,
  od: `${appName} ପାଇଁ ଗୋପନୀୟତା ନୀତି |`,
  pt: `Política de Privacidade para ${appName}.`,
  pt_br: `Política de Privacidade para ${appName}.`,
  ru: `Политика конфиденциальности для ${appName}.`,
  sw: `Sera ya Faragha ya ${appName}.`,
  ta: `${appName} க்கான தனியுரிமைக் கொள்கை.`,
  te: `${appName} కొరకు గోప్యతా విధానం.`,
  tr: `${appName} için Gizlilik Politikası.`,
  ur: `${appName} کے لیے رازداری کی پالیسی۔`,
  vi: `Chính Sách Bảo Mật cho ${appName}.`,
  zh: `${appName} 隐私政策。`
};

const nativeTermsTitles = {
  ar: 'شروط الخدمة',
  bn: 'ব্যবহারের শর্তাবলী',
  de: 'Nutzungsbedingungen',
  en: 'Terms of Service',
  en_au: 'Terms of Service',
  en_gb: 'Terms of Service',
  en_in: 'Terms of Service',
  en_ru: 'Terms of Service',
  en_us: 'Terms of Service',
  es: 'Términos del Servicio',
  fr: 'Conditions d’Utilisation',
  gu: 'સેવાની શરતો',
  ha: 'Sharuddan Sabis',
  hi: 'सेवा की शर्तें',
  id: 'Ketentuan Layanan',
  it: 'Termini di Servizio',
  ja: '利用規約',
  kn: 'ಸೇವಾ ನಿಯಮಗಳು',
  ko: '서비스 약관',
  mr: 'सेवा अटी',
  od: 'ସେବା ସର୍ତ୍ତାବଳୀ',
  pt: 'Termos de Serviço',
  pt_br: 'Termos de Serviço',
  ru: 'Условия использования',
  sw: 'Masharti ya Huduma',
  ta: 'சேவை விதிமுறைகள்',
  te: 'సేవా నిబంధనలు',
  tr: 'Kullanım Koşulları',
  ur: 'سروس کی شرائط',
  vi: 'Điều Khoản Dịch Vụ',
  zh: '服务条款'
};

const nativeTermsDescriptions = {
  ar: `شروط الخدمة لـ ${appName}.`,
  bn: `${appName} এর ব্যবহারের শর্তাবলী।`,
  de: `Nutzungsbedingungen für ${appName}.`,
  en: `Terms of Service for ${appName}.`,
  en_au: `Terms of Service for ${appName}.`,
  en_gb: `Terms of Service for ${appName}.`,
  en_in: `Terms of Service for ${appName}.`,
  en_ru: `Terms of Service for ${appName}.`,
  en_us: `Terms of Service for ${appName}.`,
  es: `Términos del Servicio de ${appName}.`,
  fr: `Conditions d’Utilisation de ${appName}.`,
  gu: `${appName} માટે સેવાની શરતો.`,
  ha: `Sharuddan Sabis na ${appName}.`,
  hi: `${appName} के लिए सेवा की शर्तें।`,
  id: `Ketentuan Layanan untuk ${appName}.`,
  it: `Termini di Servizio per ${appName}.`,
  ja: `${appName} の利用規約。`,
  kn: `${appName} ಗಾಗಿ ಸೇವಾ ನಿಯಮಗಳು.`,
  ko: `${appName}에 대한 서비스 약관.`,
  mr: `${appName} साठी सेवा अटी.`,
  od: `${appName} ପାଇଁ ସେବା ସର୍ତ୍ତାବଳୀ |`,
  pt: `Termos de Serviço para ${appName}.`,
  pt_br: `Termos de Serviço para ${appName}.`,
  ru: `Условия использования для ${appName}.`,
  sw: `Masharti ya Huduma ya ${appName}.`,
  ta: `${appName} க்கான சேவை விதிமுறைகள்.`,
  te: `${appName} కొరకు సేవా నిబంధనలు.`,
  tr: `${appName} için Kullanım Koşulları.`,
  ur: `${appName} کے لیے سروس کی شرائط۔`,
  vi: `Điều Khoản Dịch Vụ cho ${appName}.`,
  zh: `${appName} 服务条款。`
};

function updateHtmlFolder(subDir, titleMap, descMap) {
  const targetDir = path.join(rootDir, 'spin_strike', subDir);
  if (!fs.existsSync(targetDir)) return;
  for (const file of fs.readdirSync(targetDir)) {
    if (!file.endsWith('.html')) continue;
    const code = file.replace('.html', '');
    const nativeTitle = titleMap[code] || titleMap['en'];
    const nativeDesc = descMap[code] || descMap['en'];
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
    fs.writeFileSync(path.join(targetDir, file), content, 'utf8');
    console.log(`Updated spin_strike/${subDir}/${file}: <title>${fullTitle}</title>`);
  }
}

updateHtmlFolder('privacy_policy', nativePrivacyTitles, nativePrivacyDescriptions);
updateHtmlFolder('terms_of_service', nativeTermsTitles, nativeTermsDescriptions);
