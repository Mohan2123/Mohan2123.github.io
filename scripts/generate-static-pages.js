import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { APPS, LANGUAGES } from '../src/data/appsData.js';

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
const rootDesc = "Explore Mohan's ecosystem of multiple OS supported applications, including File Manager, QR Scanner, Music Player, Photos Gallery, eBook Reader, PDF Reader, Notes, Sheets, Video Player, Voice Recorder, Torch Light, Messages, Ludo Bear, Knife Strike, and Block Blast.";
writeFileIfChanged(rootIndexPath, generateHtml(rootTitle, rootDesc));
console.log(`Generated root ${rootIndexPath}`);

// 2. 404.html (for client-side routing fallback on GitHub Pages)
const notFoundPath = path.join(rootDir, '404.html');
writeFileIfChanged(notFoundPath, generateHtml(rootTitle, rootDesc));
console.log(`Generated 404 fallback ${notFoundPath}`);

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
      const docTitle = docType === 'privacy_policy' ? 'Privacy Policy' : 'Terms of Service';
      const docPath = path.join(docDir, `${code}.html`);
      const lang = code.replace(/_([a-z]+)/, (_, region) => `-${region.toUpperCase()}`);
      writeFileIfChanged(
        docPath,
        generateHtml(`${docTitle} - ${app.name}`, `${docTitle} for ${app.name}.`, lang)
      );
      routeCount++;
    }
  }
}

console.log(`Generated ${routeCount} app-specific route entrypoints.`);
