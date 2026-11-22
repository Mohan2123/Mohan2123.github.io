import React, { useState, useEffect } from 'react';
import { APPS, APP_COLORS } from '../data/appsData';
import { fetchLegalDoc } from '../data/legalLoader';
import { Header, Footer } from '../components/Layout';
import { useRouter } from '../RouterContext';
import { getLegalUi } from '../data/legalUiI18n';

export function LegalPage({ appId, docType, lang = 'en' }) {
  const { navigate } = useRouter();
  const [doc, setDoc] = useState(null);
  const [loading, setLoading] = useState(true);

  const app = APPS.find(a => a.id === appId);
  const appName = app ? app.name : (appId === 'docs' ? 'Docs' : appId === 'launcher' ? 'Launcher' : appId);
  const colors = APP_COLORS[appId] || { primary: '#1a73e8', primaryDark: '#1557b0' };
  const backLink = appId === 'launcher' ? '/' : `/${appId}/index.html`;

  const ui = getLegalUi(lang);
  const isPrivacy = docType === 'privacy_policy';
  const otherDocType = isPrivacy ? 'terms_of_service' : 'privacy_policy';
  const currentDocFallbackTitle = isPrivacy ? ui.privacyPolicy : ui.termsOfService;
  const otherDocTitle = isPrivacy ? ui.termsOfService : ui.privacyPolicy;
  const backText = ui.backTo.replace('{app}', appName);

  useEffect(() => {
    let isCurrent = true;
    setLoading(true);
    fetchLegalDoc(appId, docType, lang).then(data => {
      if (isCurrent) {
        setDoc(data);
        setLoading(false);
      }
    });
    return () => {
      isCurrent = false;
    };
  }, [appId, docType, lang]);

  return (
    <div className="legal-view-container" style={{
      '--primary': colors.primary,
      '--primary-dark': colors.primaryDark,
    }}>
      <Header backLink={backLink} backText={backText} />
      
      <div className="legal-header">
        <h1 style={{ color: colors.primaryDark }}>
          {doc ? doc.title : currentDocFallbackTitle}
        </h1>
        <p>{appName}</p>
      </div>

      <div className="legal-body-container">

        {loading ? (
          <div className="legal-card" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <p style={{ color: 'var(--text-muted)' }}>{ui.loading}</p>
          </div>
        ) : doc ? (
          <div 
            className="legal-card" 
            dangerouslySetInnerHTML={{ __html: doc.content }} 
          />
        ) : (
          <div className="legal-card">
            <h2>{ui.notAvailable}</h2>
            <p>{ui.notAvailableDesc.replace('{lang}', lang)}</p>
          </div>
        )}
      </div>

      <div className="legal-subfooter">
        &copy; 2026 Mohan MRKS. {ui.allRightsReserved} | {' '}
        <a 
          style={{ color: colors.primaryDark }}
          href={`/${appId}/${otherDocType}/${lang}.html`}
          onClick={(e) => {
            e.preventDefault();
            navigate(`/${appId}/${otherDocType}/${lang}.html`);
          }}
        >
          {otherDocTitle}
        </a>
      </div>
      <Footer 
        backLink={backLink}
        legalLinks={[
          { label: ui.privacyPolicy, href: `/${appId}/privacy_policy/${lang}.html` },
          { label: ui.termsOfService, href: `/${appId}/terms_of_service/${lang}.html` }
        ]} 
      />
    </div>
  );
}
