import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Globe, User, BookOpen } from 'lucide-react';
import useScrollProgress from '../hooks/useScrollProgress';
import '../styles/components/Navbar.css';

export default function Navbar({ onOpenDocs }) {
  const { scrollProgress, scrollY } = useScrollProgress();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      {/* 3-Zone Structure */}
      <div className="navbar-container container">
        
        {/* Zone 1: Nav Links */}
        <nav className="nav-links">
          <a href="#hero" className="nav-link">Shop</a>
          <a href="#plate-showcase" className="nav-link">Curry Tour</a>
          <a href="#eco-story" className="nav-link">Sourcing</a>
          <a href="#heritage" className="nav-link">Heritage</a>
        </nav>

        {/* Zone 2: Logo / Brand Emblem */}
        <div className="nav-brand">
          <a href="/" className="brand-logo">
            <span className="logo-main">PASCO</span>
            <span className="logo-sub">FOODS LTD</span>
          </a>
        </div>

        {/* Zone 3: Actions & Cart */}
        <div className="nav-actions">
          <button onClick={onOpenDocs} className="nav-action-btn docs-btn" title="Developer Documentation">
            <BookOpen size={20} />
            <span className="btn-label">Tech Docs</span>
          </button>
          
          <button className="nav-action-btn" title="Search Products">
            <Search size={20} />
          </button>
          
          <button className="nav-action-btn" title="Account">
            <User size={20} />
          </button>
          
          <button className="nav-action-btn cart-btn" title="Mini Cart">
            <ShoppingBag size={20} />
            <span className="cart-badge">3</span>
          </button>
        </div>
      </div>

      {/* Thin Scroll Progress Indicator Line */}
      <div 
        className="navbar-progress-bar" 
        style={{ width: `${scrollProgress}%` }}
      />
    </header>
  );
}
