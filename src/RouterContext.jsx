import React, { createContext, useContext, useState, useEffect } from 'react';

const RouterContext = createContext();

export function parsePath(pathname, search, hash) {
  let cleanPath = pathname || window.location.pathname;
  
  // Strip trailing slashes or normalize
  cleanPath = cleanPath.replace(/^\/+|\/+$/g, '');
  
  const parts = cleanPath.split('/').filter(Boolean);

  if (parts.length === 0 || cleanPath === 'index.html') {
    return { page: 'home', hash: window.location.hash };
  }

  if (parts.length === 1) {
    if (parts[0] === 'index.html') return { page: 'home', hash: window.location.hash };
    return { page: 'app-detail', appId: parts[0] };
  }

  if (parts.length === 2 && parts[1] === 'index.html') {
    return { page: 'app-detail', appId: parts[0] };
  }

  if (parts.length >= 2 && (parts[1] === 'privacy_policy' || parts[1] === 'terms_of_service')) {
    const appId = parts[0];
    const docType = parts[1];
    let lang = 'en';
    if (parts[2]) {
      lang = parts[2].replace('.html', '');
    }
    return { page: 'legal', appId, docType, lang };
  }

  return { page: 'home', hash: window.location.hash };
}

export function RouterProvider({ children }) {
  const [route, setRoute] = useState(() => parsePath());
  const [currentLang, setCurrentLang] = useState(() => {
    const parsed = parsePath();
    return parsed.lang || 'en';
  });

  useEffect(() => {
    const onLocationChange = () => {
      const parsed = parsePath();
      setRoute(parsed);
      if (parsed.lang) {
        setCurrentLang(parsed.lang);
      }
    };

    window.addEventListener('popstate', onLocationChange);
    window.addEventListener('hashchange', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
      window.removeEventListener('hashchange', onLocationChange);
    };
  }, []);

  const navigate = (url, options = {}) => {
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('mailto:')) {
      window.open(url, options.target || '_self');
      return;
    }

    if (url.startsWith('#')) {
      window.location.hash = url;
      return;
    }

    let target = url;
    if (target.startsWith('/')) {
      window.history.pushState({}, '', target);
    } else {
      const current = window.location.pathname;
      const base = current.endsWith('/') ? current : current.substring(0, current.lastIndexOf('/') + 1);
      const resolved = new URL(target, window.location.origin + base).pathname;
      window.history.pushState({}, '', resolved);
    }
    const newRoute = parsePath();
    setRoute(newRoute);
    if (newRoute.lang) {
      setCurrentLang(newRoute.lang);
    }
    window.scrollTo(0, 0);
  };

  const changeLanguage = (newLang) => {
    setCurrentLang(newLang);
    if (route.page === 'legal') {
      navigate(`/${route.appId}/${route.docType}/${newLang}.html`);
    }
  };

  return (
    <RouterContext.Provider value={{ route, navigate, currentLang, changeLanguage }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}
