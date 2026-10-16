import React, { useState, useEffect } from 'react';
import { APPS, LANGUAGES, APP_COLORS } from '../data/appsData';
import { fetchLegalDoc } from '../data/legalLoader';
import { Header, Footer } from '../components/Layout';
import { useRouter } from '../RouterContext';

export function LegalPage({ appId, docType, lang = 'en' }) {
  const { navigate } = useRouter();
  const [doc, setDoc] = useState(null);
  const [loading, setLoading] = useState(true);

  const app = APPS.find(a => a.id === appId);
  const appName = app ? app.name : (appId === 'docs' ? 'Docs' : appId);
  const colors = APP_COLORS[appId] || { primary: '#1a73e8', primaryDark: '#1557b0' };

  const otherDocType = docType === 'privacy_policy' ? 'terms_of_service' : 'privacy_policy';
  const otherDocTitle = docType === 'privacy_policy' ? 'Terms of Service' : 'Privacy Policy';

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

  const availableLangs = LANGUAGES;

  return (
    <div className="legal-view-container" style={{
      '--primary': colors.primary,
      '--primary-dark': colors.primaryDark,
    }}>
      <Header backLink={`/${appId}/index.html`} backText={`← Back to ${appName}`} />
      
      <div className="legal-header">
        <h1 style={{ color: colors.primaryDark }}>
          {doc ? doc.title : (docType === 'privacy_policy' ? 'Privacy Policy' : 'Terms of Service')}
        </h1>
        <p>{appName}</p>
      </div>

      <div className="legal-body-container">

        {loading ? (
          <div className="legal-card" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <p style={{ color: 'var(--text-muted)' }}>Loading document...</p>
          </div>
        ) : doc ? (
          <div 
            className="legal-card" 
            dangerouslySetInnerHTML={{ __html: doc.content }} 
          />
        ) : (
          <div className="legal-card">
            <h2>Document Not Available</h2>
            <p>The requested legal document could not be loaded for language "{lang}".</p>
          </div>
        )}
      </div>

      <div className="legal-subfooter">
        &copy; 2026 Mohan MRKS. All rights reserved. | {' '}
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
        backLink={`/${appId}/index.html`} 
        legalLinks={[
          { label: 'Privacy Policy', href: `/${appId}/privacy_policy/en.html` },
          { label: 'Terms of Service', href: `/${appId}/terms_of_service/en.html` }
        ]} 
      />
    </div>
  );
}
