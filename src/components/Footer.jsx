import React from 'react';
import { Lock, FileCode, CheckCircle, HelpCircle, Mail, MapPin } from 'lucide-react';
import '../styles/components/Footer.css';

export default function Footer({ onOpenDocs }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        
        {/* Box 1: Brand Info */}
        <div className="footer-box brand-info-box">
          <h3 className="footer-logo">PASCO</h3>
          <p className="footer-tagline">Authentic Indian pastes, pickles, curries & sauces. Established 1990.</p>
          <div className="footer-contact-details">
            <div className="contact-detail-item">
              <MapPin size={14} />
              <span>Lancashire, United Kingdom</span>
            </div>
            <div className="contact-detail-item">
              <Mail size={14} />
              <span>trade@pasco-foods.co.uk</span>
            </div>
          </div>
        </div>

        {/* Box 2: Quick Navigation Links */}
        <div className="footer-box links-box">
          <h4 className="footer-box-title">Gourmet Ranges</h4>
          <ul className="footer-links-list">
            <li><a href="#plate-showcase">Tikka Masala Pastes</a></li>
            <li><a href="#plate-showcase">Sun-Cured Mango Pickles</a></li>
            <li><a href="#plate-showcase">Mild Simmer Sauces</a></li>
            <li><a href="#plate-showcase">Chili Garlic Chutneys</a></li>
          </ul>
        </div>

        {/* Box 3: Headless Specs & Tech Docs */}
        <div className="footer-box specs-box">
          <h4 className="footer-box-title">Headless Front-End</h4>
          <ul className="footer-links-list">
            <li>
              <button onClick={onOpenDocs} className="footer-docs-trigger">
                <FileCode size={14} />
                <span>Architecture Specs</span>
              </button>
            </li>
            <li><span className="spec-item">Vite + React.js</span></li>
            <li><span className="spec-item">GraphQL API Hooks</span></li>
            <li><span className="spec-item">Zero-Preservative CSS</span></li>
          </ul>
        </div>

        {/* Box 4: IP Protection Lock Box */}
        <div className="footer-box lock-box glass-panel">
          <div className="lock-icon-wrapper">
            <Lock size={20} className="ip-lock-icon" />
          </div>
          <h4 className="lock-box-title">Source IP Secured</h4>
          <p className="lock-box-desc">
            Vite production builds are compiled with disabled sourcemaps (`build.sourcemap = false`) to safeguard architectural intellectual property.
          </p>
          <button onClick={onOpenDocs} className="btn btn-outline ip-request-btn">
            <span>Verify Compliance</span>
          </button>
        </div>

      </div>

      {/* Bottom Bar: Developer credit, copy info */}
      <div className="footer-bottom">
        <div className="container bottom-container">
          <span className="footer-copy-text">
            &copy; {currentYear} Pasco Foods Limited. All Rights Reserved.
          </span>
          <span className="developer-credit">
            Gourmet Front-End engineered by <strong className="developer-name">Nikhilendra</strong>
          </span>
        </div>
      </div>
    </footer>
  );
}
