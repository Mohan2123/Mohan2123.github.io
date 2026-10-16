import React, { useState } from 'react';
import { APPS } from '../data/appsData';
import { Header, Footer, GooglePlayIcon, RuStoreIcon } from '../components/Layout';
import { useRouter } from '../RouterContext';

export function HomePage() {
  const [filter, setFilter] = useState('all');
  const { navigate } = useRouter();

  const filteredApps = APPS.filter(app => {
    if (filter === 'all') return true;
    return app.category === filter;
  });

  const utilityCount = APPS.filter(a => a.category === 'utility').length;
  const productivityCount = APPS.filter(a => a.category === 'productivity').length;
  const mediaCount = APPS.filter(a => a.category === 'media').length;

  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-pill">
              <span>✨ Fast, Clean & Multi-Platform Applications</span>
            </div>
            <h1>Modern Multiple OS Supported Apps</h1>
            <p>
              A comprehensive ecosystem of productivity, multimedia, and daily utility applications engineered for high performance across Android, Linux, Windows, macOS, and iOS.
            </p>

            <div className="stats-bar">
              <div className="stat-item">
                <span className="stat-number">{APPS.length}</span>
                <span className="stat-label">Core Applications</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Multi-OS</span>
                <span className="stat-label">Cross-Platform Ready</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">21</span>
                <span className="stat-label">Languages Supported</span>
              </div>
            </div>
          </div>
        </section>

        <section id="catalogue" className="container">
          <div className="filter-nav">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Applications ({APPS.length})
            </button>
            <button 
              className={`filter-btn ${filter === 'utility' ? 'active' : ''}`}
              onClick={() => setFilter('utility')}
            >
              Utilities & Tools ({utilityCount})
            </button>
            <button 
              className={`filter-btn ${filter === 'productivity' ? 'active' : ''}`}
              onClick={() => setFilter('productivity')}
            >
              Productivity & Docs ({productivityCount})
            </button>
            <button 
              className={`filter-btn ${filter === 'media' ? 'active' : ''}`}
              onClick={() => setFilter('media')}
            >
              Media & Audio ({mediaCount})
            </button>
          </div>

          <div className="apps-grid">
            {filteredApps.map((app) => {
              const playUrl = `https://play.google.com/store/apps/details?id=${app.package_id}`;
              const rustoreUrl = `https://www.rustore.ru/catalog/app/${app.package_id}`;
              return (
                <article key={app.id} className="app-card" data-category={app.category}>
                  <div className="app-card-header">
                    <div className="app-icon-wrapper">
                      <img 
                        src={`/assets/icons/${app.id}.png`} 
                        alt={`${app.name} Icon`} 
                        className="app-icon-img" 
                        loading="lazy" 
                      />
                    </div>
                    <div>
                      <span className="category-badge">{app.category_label}</span>
                      <h3 className="app-title">{app.name}</h3>
                    </div>
                  </div>
                  <p className="app-desc">{app.summary}</p>
                  <div className="app-card-actions">
                    <a 
                      href={`/${app.id}/index.html`}
                      className="btn btn-secondary btn-sm" 
                      style={{ flex: '1 1 100%' }}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(`/${app.id}/`);
                      }}
                    >
                      View Details & Legal
                    </a>
                    <a 
                      href={playUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary btn-sm" 
                      style={{ flex: '1 1 calc(50% - 0.35rem)' }}
                    >
                      <GooglePlayIcon />
                      Google Play
                    </a>
                    <a 
                      href={rustoreUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-secondary btn-sm" 
                      style={{ flex: '1 1 calc(50% - 0.35rem)' }}
                    >
                      <RuStoreIcon />
                      RuStore
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
