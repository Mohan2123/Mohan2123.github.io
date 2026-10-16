import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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

// Copy assets-react to root dist and project root
const destAssetsReact = path.join(rootDir, 'assets-react');
fs.cpSync(assetsDir, destAssetsReact, { recursive: true });
console.log(`Copied assets-react to ${destAssetsReact}`);

// Helper to calculate relative path to root from a given file path
function getRelPrefix(filePath) {
  const rel = path.relative(path.dirname(filePath), rootDir);
  return rel === '' ? './' : rel + '/';
}

function generateHtml(title, description, targetFilePath) {
  const prefix = getRelPrefix(targetFilePath);
  const jsPath = `${prefix}assets-react/${jsFile}`;
  const cssPath = `${prefix}assets-react/${cssFile}`;

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <script type="module" crossorigin src="${jsPath}"></script>
    <link rel="stylesheet" crossorigin href="${cssPath}">
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
const rootDesc = "Explore Mohan's ecosystem of multiple OS supported applications: File Manager, QR Scanner, Music Player, Photos Gallery, eBook Reader, PDF Reader, Notes, Sheets, Video Player, Voice Recorder, Torch Light, and Messages.";
fs.writeFileSync(rootIndexPath, generateHtml(rootTitle, rootDesc, rootIndexPath), 'utf-8');
console.log(`Generated root ${rootIndexPath}`);

// 2. 404.html (for client-side routing fallback on GitHub Pages)
const notFoundPath = path.join(rootDir, '404.html');
fs.writeFileSync(notFoundPath, generateHtml(rootTitle, rootDesc, notFoundPath), 'utf-8');
console.log(`Generated 404 fallback ${notFoundPath}`);

// 3. Scan all HTML files that existed and replace their shell
function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (f !== '.git' && f !== 'node_modules' && f !== 'dist' && f !== 'assets' && f !== 'assets-react') {
        walkDir(dirPath, callback);
      }
    } else {
      callback(path.join(dir, f));
    }
  });
}

let count = 0;
walkDir(rootDir, (filePath) => {
  if (filePath.endsWith('.html') && !filePath.endsWith('index.dev.html') && filePath !== rootIndexPath && filePath !== notFoundPath) {
    const rel = path.relative(rootDir, filePath);
    const parts = rel.split(path.sep);

    let pageTitle = "Mohan Apps Ecosystem";
    let pageDesc = "Clean, fast multi-platform application";

    if (parts.length === 2 && parts[1] === 'index.html') {
      const appId = parts[0];
      pageTitle = `${appId.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | Mohan Apps`;
      pageDesc = `Explore ${appId} details and legal documentation.`;
    } else if (parts.length === 3) {
      const appId = parts[0];
      const docType = parts[1] === 'privacy_policy' ? 'Privacy Policy' : 'Terms of Service';
      pageTitle = `${docType} - ${appId.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`;
      pageDesc = `Legal agreement and ${docType.toLowerCase()} documentation.`;
    }

    fs.writeFileSync(filePath, generateHtml(pageTitle, pageDesc, filePath), 'utf-8');
    count++;
  }
});

console.log(`Updated ${count} existing route entrypoints to React web app.`);
