// Lazy-load translation files on demand
const legalCache = {};

// Static mapping for bundlers (Vite handles dynamic imports with glob or explicit map)
const legalLoaders = {
  en: () => import('./legal/en.json'),
  en_us: () => import('./legal/en_us.json'),
  en_gb: () => import('./legal/en_gb.json'),
  en_au: () => import('./legal/en_au.json'),
  fr: () => import('./legal/fr.json'),
  de: () => import('./legal/de.json'),
  vi: () => import('./legal/vi.json'),
  es: () => import('./legal/es.json'),
  pt: () => import('./legal/pt.json'),
  ru: () => import('./legal/ru.json'),
  hi: () => import('./legal/hi.json'),
  mr: () => import('./legal/mr.json'),
  bn: () => import('./legal/bn.json'),
  te: () => import('./legal/te.json'),
  ta: () => import('./legal/ta.json'),
  tr: () => import('./legal/tr.json'),
  ja: () => import('./legal/ja.json'),
  zh: () => import('./legal/zh.json'),
  sw: () => import('./legal/sw.json'),
  ha: () => import('./legal/ha.json'),
  id: () => import('./legal/id.json'),
};

export async function fetchLegalDoc(appId, docType, lang = 'en') {
  const targetLang = legalLoaders[lang] ? lang : 'en';

  if (!legalCache[targetLang]) {
    try {
      const module = await legalLoaders[targetLang]();
      legalCache[targetLang] = module.default || module;
    } catch (err) {
      console.error(`Failed to load legal translations for ${targetLang}`, err);
      return null;
    }
  }

  const key = `${appId}/${docType}/${targetLang}`;
  const doc = legalCache[targetLang][key];

  if (!doc && targetLang !== 'en') {
    // Fallback to English if missing in target language
    return fetchLegalDoc(appId, docType, 'en');
  }

  return doc || null;
}
