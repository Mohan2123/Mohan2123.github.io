import React from 'react';
import { APPS } from '../data/appsData';
import { Header, Footer, GooglePlayIcon, RuStoreIcon } from '../components/Layout';
import { useRouter } from '../RouterContext';

export function AppDetailPage({ appId }) {
  const { navigate } = useRouter();
  const app = APPS.find(a => a.id === appId);

  if (!app) {
    return (
      <>
        <Header backLink="/" backText="← Back to Catalogue" />
        <main className="container" style={{ padding: '5rem 1.5rem', textAlign: 'center' }}>
          <h2>Application Not Found</h2>
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
            The requested application "{appId}" does not exist in our catalogue.
          </p>
          <a 
            href="/" 
            className="btn btn-primary" 
            style={{ marginTop: '2rem' }}
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
          >
            ← Back to Catalogue
          </a>
        </main>
        <Footer backLink="/" />
      </>
    );
  }

  const playUrl = `https://play.google.com/store/apps/details?id=${app.package_id}`;
  const rustoreUrl = `https://www.rustore.ru/catalog/app/${app.package_id}`;

  const legalLinks = [
    { label: 'Privacy Policy', href: `/${app.id}/privacy_policy/en.html` },
    { label: 'Terms of Service', href: `/${app.id}/terms_of_service/en.html` }
  ];

  return (
    <>
      <Header backLink="/" backText="← All Applications" />
      <main>
        <section className="app-hero">
          <div className="container">
            <nav className="breadcrumb">
              <a 
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/');
                }}
              >
                Home
              </a>
              <span>/</span>
              <span>{app.category_label}</span>
              <span>/</span>
              <span style={{ color: 'var(--text-main)' }}>{app.name}</span>
            </nav>

            <div className="hero-layout">
              <div className="app-detail-icon-wrapper">
                <img 
                  src={`/assets/icons/${app.id}.png`} 
                  alt={`${app.name} Icon`} 
                  className="app-detail-icon-img" 
                />
              </div>
              <div className="app-detail-header">
                <h1>{app.name}</h1>
                <div className="app-tagline">{app.tagline}</div>
                <div className="app-spec-badges">
                  <span className="spec-badge">Category: {app.category_label}</span>
                  <span className="spec-badge">Package: {app.package_id}</span>
                </div>
                <div className="hero-actions">
                  <a 
                    href={playUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                  >
                    <GooglePlayIcon />
                    Get it on Google Play
                  </a>
                  <a 
                    href={rustoreUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary"
                  >
                    <RuStoreIcon />
                    RuStore
                  </a>
                  <a 
                    href={`/${app.id}/privacy_policy/en.html`} 
                    className="btn btn-secondary"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/${app.id}/privacy_policy/en.html`);
                    }}
                  >
                    Privacy Policy
                  </a>
                  <a 
                    href={`/${app.id}/terms_of_service/en.html`} 
                    className="btn btn-secondary"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/${app.id}/terms_of_service/en.html`);
                    }}
                  >
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container content-section">
          <h3 className="section-heading">Key Highlights & Capabilities</h3>
          <div className="features-grid">
            {app.features.map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon-bullet">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="feature-title">{f.title}</h4>
                  <p className="feature-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="legal-box">
            <div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                Compliance & Transparency
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Review our legal agreements and privacy protections.
              </p>
            </div>
            <div className="legal-links">
              <a 
                href={`/${app.id}/privacy_policy/en.html`} 
                className="btn btn-secondary btn-sm"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/${app.id}/privacy_policy/en.html`);
                }}
              >
                🔒 Privacy Policy
              </a>
              <a 
                href={`/${app.id}/terms_of_service/en.html`} 
                className="btn btn-secondary btn-sm"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/${app.id}/terms_of_service/en.html`);
                }}
              >
                📜 Terms of Service
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer backLink="/" legalLinks={legalLinks} />
    </>
  );
}
