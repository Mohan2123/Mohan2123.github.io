import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { APPS, LANGUAGES } from '../src/data/appsData.js';
import { LAUNCHER_LANGUAGES, getLauncherLegalDoc } from '../src/data/launcherLegal.js';
import { getLocalizedGameLegalDoc } from '../src/data/localizedGamesLegal.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.dirname(__dirname);
const legalDir = path.join(rootDir, 'src', 'data', 'legal');

// 1. Load existing titles from src/data/legal/*.json
const legalTitles = {};
for (const file of fs.readdirSync(legalDir)) {
  if (!file.endsWith('.json')) continue;
  try {
    const data = JSON.parse(fs.readFileSync(path.join(legalDir, file), 'utf8'));
    for (const [key, doc] of Object.entries(data)) {
      if (doc && doc.title) legalTitles[key] = doc.title;
    }
  } catch (_) {}
}

// 2. Universal native title mapping fallback by language code
const universalPrivacyTitles = {
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

const universalTermsTitles = {
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

function getNativeTitle(appId, docType, langCode) {
  if (appId === 'launcher') {
    const doc = getLauncherLegalDoc(docType, langCode);
    if (doc?.title) return doc.title;
  }
  const key = `${appId}/${docType}/${langCode}`;
  if (legalTitles[key]) return legalTitles[key];
  const gameDoc = getLocalizedGameLegalDoc(appId, docType, langCode);
  if (gameDoc?.title) return gameDoc.title;

  return docType === 'privacy_policy'
    ? (universalPrivacyTitles[langCode] || universalPrivacyTitles['en'])
    : (universalTermsTitles[langCode] || universalTermsTitles['en']);
}

function getNativeDescription(appName, docTitle, langCode) {
  const norm = langCode.toLowerCase();
  if (norm.startsWith('hi')) return `${appName} के लिए ${docTitle}।`;
  if (norm.startsWith('ru')) return `${docTitle} для ${appName}.`;
  if (norm.startsWith('es')) return `${docTitle} de ${appName}.`;
  if (norm.startsWith('fr')) return `${docTitle} de ${appName}.`;
  if (norm.startsWith('de')) return `${docTitle} für ${appName}.`;
  if (norm.startsWith('pt')) return `${docTitle} para ${appName}.`;
  if (norm.startsWith('it')) return `${docTitle} per ${appName}.`;
  if (norm.startsWith('bn')) return `${appName} এর ${docTitle}।`;
  if (norm.startsWith('mr')) return `${appName} साठी ${docTitle}.`;
  if (norm.startsWith('te')) return `${appName} కొరకు ${docTitle}.`;
  if (norm.startsWith('ta')) return `${appName} க்கான ${docTitle}.`;
  if (norm.startsWith('tr')) return `${appName} için ${docTitle}.`;
  if (norm.startsWith('vi')) return `${docTitle} cho ${appName}.`;
  if (norm.startsWith('ja')) return `${appName} の${docTitle}。`;
  if (norm.startsWith('zh')) return `${appName} ${docTitle}。`;
  if (norm.startsWith('ko')) return `${appName}에 대한 ${docTitle}.`;
  if (norm.startsWith('sw')) return `${docTitle} ya ${appName}.`;
  if (norm.startsWith('ha')) return `${docTitle} na ${appName}.`;
  if (norm.startsWith('id')) return `${docTitle} untuk ${appName}.`;
  return `${docTitle} for ${appName}.`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);
}

function generateHtml(title, description, lang) {
  return `<!DOCTYPE html>
<html lang="${escapeHtml(lang)}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <script type="module" crossorigin src="/assets-react/route-loader.js"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`;
}

let count = 0;
// Update all standard apps
for (const app of APPS) {
  for (const { code } of LANGUAGES) {
    for (const docType of ['privacy_policy', 'terms_of_service']) {
      const docPath = path.join(rootDir, app.id, docType, `${code}.html`);
      if (!fs.existsSync(docPath)) continue;
      const title = getNativeTitle(app.id, docType, code);
      const desc = getNativeDescription(app.name, title, code);
      const langAttr = code.replace(/_([a-z]+)/, (_, reg) => `-${reg.toUpperCase()}`);
      const fullTitle = `${title} - ${app.name}`;
      fs.writeFileSync(docPath, generateHtml(fullTitle, desc, langAttr), 'utf8');
      count++;
    }
  }
}

// Update Launcher
for (const { code } of LAUNCHER_LANGUAGES) {
  for (const docType of ['privacy_policy', 'terms_of_service']) {
    const docPath = path.join(rootDir, 'launcher', docType, `${code}.html`);
    if (!fs.existsSync(docPath)) continue;
    const title = getNativeTitle('launcher', docType, code);
    const desc = getNativeDescription('Launcher', title, code);
    const langAttr = code.replace(/_([a-z]+)/, (_, reg) => `-${reg.toUpperCase()}`);
    const fullTitle = `${title} - Launcher`;
    fs.writeFileSync(docPath, generateHtml(fullTitle, desc, langAttr), 'utf8');
    count++;
  }
}

console.log(`Successfully synced native titles & descriptions across ${count} legal HTML pages!`);
