import React from 'react';
import { useRouter } from './RouterContext';
import { HomePage } from './pages/HomePage';
import { AppDetailPage } from './pages/AppDetailPage';
import { LegalPage } from './pages/LegalPage';

export function App() {
  const { route } = useRouter();

  if (route.page === 'legal') {
    return <LegalPage appId={route.appId} docType={route.docType} lang={route.lang} />;
  }

  if (route.page === 'app-detail') {
    return <AppDetailPage appId={route.appId} />;
  }

  return <HomePage />;
}
