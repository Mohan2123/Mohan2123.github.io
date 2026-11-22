import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { APPS, LANGUAGES } from '../src/data/appsData.js';
import { LAUNCHER_LANGUAGES } from '../src/data/launcherLegal.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.dirname(__dirname);
const distDir = path.join(rootDir, 'dist');

// Read manifest or built files in dist
const assetsDir = path.join(distDir, 'assets-react');
const files = fs.readdirSync(assetsDir);
const jsFile = files.find(f => f.startsWith('main-') && f.endsWith('.js'));
const cssFile = files.find(f => f.startsWith('main-') && f.endsWith('.css'));

if (!jsFile || !cssFile) {
  console.error("Could not find built JS or CSS file in dist/assets-react");
  process.exit(1);
}

console.log(`Found built bundle: JS=${jsFile}, CSS=${cssFile}`);

// Copy only changed bundles to the project root.
const destAssetsReact = path.join(rootDir, 'assets-react');
fs.mkdirSync(destAssetsReact, { recursive: true });
for (const file of files) {
  const sourcePath = path.join(assetsDir, file);
  const destinationPath = path.join(destAssetsReact, file);
  const source = fs.readFileSync(sourcePath);
  if (!fs.existsSync(destinationPath) || !fs.readFileSync(destinationPath).equals(source)) {
    fs.copyFileSync(sourcePath, destinationPath);
  }
}

function writeFileIfChanged(filePath, contents) {
  if (fs.existsSync(filePath) && fs.readFileSync(filePath, 'utf-8') === contents) {
    return;
  }
  fs.writeFileSync(filePath, contents, 'utf-8');
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

const routeLoaderPath = path.join(destAssetsReact, 'route-loader.js');
const routeLoader = `const stylesheet = document.createElement('link');
stylesheet.rel = 'stylesheet';
stylesheet.href = new URL('./${cssFile}', import.meta.url).href;
document.head.appendChild(stylesheet);
import('./${jsFile}');
`;
writeFileIfChanged(routeLoaderPath, routeLoader);

function generateHtml(title, description, lang = 'en') {
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

// 1. Root index.html
const rootIndexPath = path.join(rootDir, 'index.html');
const rootTitle = "Mohan Apps Showcase | Fast, Clean & Multi-Platform Applications";
const rootDesc = "Explore Mohan's ecosystem of multiple OS supported applications, including File Manager, QR Scanner, Music Player, Photos Gallery, eBook Reader, PDF Reader, Notes, Sheets, Video Player, Voice Recorder, Torch Light, Messages, Ludo Bear, Spin Strike, and Block Blast.";
writeFileIfChanged(rootIndexPath, generateHtml(rootTitle, rootDesc));
console.log(`Generated root ${rootIndexPath}`);

// 2. 404.html (for client-side routing fallback on GitHub Pages)
const notFoundPath = path.join(rootDir, '404.html');
writeFileIfChanged(notFoundPath, generateHtml(rootTitle, rootDesc));
console.log(`Generated 404 fallback ${notFoundPath}`);

// Load localized document titles from src/data/legal/*.json and localized helper modules
import { getLauncherLegalDoc } from '../src/data/launcherLegal.js';
import { getLocalizedGameLegalDoc } from '../src/data/localizedGamesLegal.js';
import { LEGAL_UI_TRANSLATIONS } from '../src/data/legalUiI18n.js';

const legalDir = path.join(rootDir, 'src', 'data', 'legal');
const legalTitles = {};
if (fs.existsSync(legalDir)) {
  for (const file of fs.readdirSync(legalDir)) {
    if (!file.endsWith('.json')) continue;
    try {
      const data = JSON.parse(fs.readFileSync(path.join(legalDir, file), 'utf8'));
      for (const [key, doc] of Object.entries(data)) {
        if (doc && doc.title) {
          legalTitles[key] = doc.title;
        }
      }
    } catch (_) {}
  }
}

function resolveNativeTitle(appId, docType, langCode) {
  if (appId === 'launcher') {
    const doc = getLauncherLegalDoc(docType, langCode);
    if (doc?.title) return doc.title;
  }
  const key = `${appId}/${docType}/${langCode}`;
  if (legalTitles[key]) return legalTitles[key];
  const gameDoc = getLocalizedGameLegalDoc(appId, docType, langCode);
  if (gameDoc?.title) return gameDoc.title;

  const baseLang = langCode.toLowerCase().split('_')[0];
  const ui = LEGAL_UI_TRANSLATIONS[langCode] || LEGAL_UI_TRANSLATIONS[baseLang] || LEGAL_UI_TRANSLATIONS.en;
  return docType === 'privacy_policy' ? ui.privacyPolicy : ui.termsOfService;
}

function resolveNativeDescription(appName, docTitle, langCode) {
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

// GitHub Pages needs a file at each route to serve deep links with HTTP 200.
let routeCount = 0;

for (const app of APPS) {
  const appDir = path.join(rootDir, app.id);
  fs.mkdirSync(appDir, { recursive: true });
  const appIndexPath = path.join(appDir, 'index.html');
  writeFileIfChanged(
    appIndexPath,
    generateHtml(`${app.name} | Mohan Apps`, app.summary)
  );
  routeCount++;

  for (const { code } of LANGUAGES) {
    for (const docType of ['privacy_policy', 'terms_of_service']) {
      const docDir = path.join(appDir, docType);
      fs.mkdirSync(docDir, { recursive: true });
      const docTitle = resolveNativeTitle(app.id, docType, code);
      const docDesc = resolveNativeDescription(app.name, docTitle, code);
      const docPath = path.join(docDir, `${code}.html`);
      const lang = code.replace(/_([a-z]+)/, (_, region) => `-${region.toUpperCase()}`);
      writeFileIfChanged(
        docPath,
        generateHtml(`${docTitle} - ${app.name}`, docDesc, lang)
      );
      routeCount++;
    }
  }
}

const launcherDir = path.join(rootDir, 'launcher');
for (const { code } of LAUNCHER_LANGUAGES) {
  for (const docType of ['privacy_policy', 'terms_of_service']) {
    const docDir = path.join(launcherDir, docType);
    fs.mkdirSync(docDir, { recursive: true });
    const docTitle = resolveNativeTitle('launcher', docType, code);
    const docDesc = resolveNativeDescription('Launcher', docTitle, code);
    const docPath = path.join(docDir, `${code}.html`);
    const lang = code.replace(/_([a-z]+)/, (_, region) => `-${region.toUpperCase()}`);
    writeFileIfChanged(
      docPath,
      generateHtml(`${docTitle} - Launcher`, docDesc, lang)
    );
    routeCount++;
  }
}

console.log(`Generated ${routeCount} app-specific route entrypoints.`);
