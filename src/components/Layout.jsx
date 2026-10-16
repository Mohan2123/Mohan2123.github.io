import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from '../RouterContext';
import { LANGUAGES } from '../data/appsData';

export function Header({ backLink, backText = "← All Applications" }) {
  const { navigate, route, currentLang, changeLanguage } = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const activeLangObj = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];

  return (
    <header>
      <div className="container nav-container">
        <a 
          href="/" 
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
        >
          <div className="logo-badge">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </div>
          <span>Mohan Apps</span>
        </a>

        <nav className="nav-links">
          {backLink ? (
            <a 
              href={backLink}
              onClick={(e) => {
                e.preventDefault();
                navigate(backLink);
              }}
            >
              {backText}
            </a>
          ) : (
            <a 
              href="#catalogue"
              onClick={(e) => {
                const el = document.getElementById('catalogue');
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Applications
            </a>
          )}

          {/* Language Dropdown in Topbar - Only on Privacy & Terms pages */}
          {route.page === 'legal' && (
            <div className="lang-dropdown-wrapper" ref={dropdownRef}>
              <button 
                className="lang-dropdown-btn"
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-label="Select Language"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <span>{activeLangObj.name}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {dropdownOpen && (
                <div className="lang-dropdown-menu">
                  {LANGUAGES.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      className={`lang-dropdown-item ${item.code === currentLang ? 'active' : ''}`}
                      onClick={() => {
                        changeLanguage(item.code);
                        setDropdownOpen(false);
                      }}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export function Footer({ backLink, legalLinks = [] }) {
  const { navigate } = useRouter();

  return (
    <footer>
      <div className="container footer-content">
        <div className="logo">
          <div className="logo-badge" style={{ width: '32px', height: '32px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </div>
          <span style={{ fontSize: '1.1rem' }}>Mohan Apps Ecosystem</span>
        </div>
        <p>© 2026 Mohan Apps. Crafted with dedication for clean and fast multi-platform experiences.</p>
        <div className="footer-links">
          {backLink && (
            <a 
              href={backLink}
              onClick={(e) => {
                e.preventDefault();
                navigate(backLink);
              }}
            >
              ← Back to Catalogue
            </a>
          )}
          {legalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                navigate(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
          <a href="mailto:mohanmrks@yandex.com">
            Support: mohanmrks@yandex.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export function GooglePlayIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a2.036 2.036 0 0 1-.22-.387A2.08 2.08 0 0 1 3.25 21V3c0-.288.048-.564.139-.8A2.037 2.037 0 0 1 3.61 1.814zm11.238 11.241l2.082 2.082-9.756 5.633 7.674-7.715zm0-2.11L7.173 3.23l9.756 5.633-2.082 2.082zm1.48 1.48l3.414 1.972c.983.568.983 1.492 0 2.06l-3.414 1.972-2.188-2.188 2.188-1.816z"/>
    </svg>
  );
}

export function RuStoreIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm2 4v8h3v-3h2.5l2.5 3h3.5l-3.2-3.8c1.3-.6 2.2-1.8 2.2-3.2 0-2.2-1.8-4-4-4H6zm3 2.5h3c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H9v-3z"/>
    </svg>
  );
}
