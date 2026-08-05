import React, { useState, useRef } from 'react';
import { Sparkles, Flame, Check, MoveRight, HelpCircle } from 'lucide-react';
import useScrollProgress from '../hooks/useScrollProgress.js';
import '../styles/components/HeroShowcase.css';

export default function HeroShowcase() {
  const [isTransformed, setIsTransformed] = useState(false);
  const showcaseRef = useRef(null);
  
  // Track scroll position
  const { scrollY } = useScrollProgress();
  
  // Factor from 0 to 1 based on scroll height (completed by 250px of scroll)
  const scrollFactor = Math.min(scrollY / 250, 1);

  // Mouse move 3D tilt effect on the card container
  const handleMouseMove = (e) => {
    if (!showcaseRef.current) return;
    const el = showcaseRef.current;
    const rect = el.getBoundingClientRect();
    
    // Relative coordinates from center of card (-1 to 1)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Apply rotation angles as CSS variables
    el.style.setProperty('--rx', `${-y * 20}deg`);
    el.style.setProperty('--ry', `${x * 20}deg`);
  };

  const handleMouseLeave = () => {
    if (!showcaseRef.current) return;
    const el = showcaseRef.current;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  // Determine active transformation state (either manually clicked or scrolled down)
  const isCurrentlyTransformed = isTransformed || scrollFactor > 0.5;
  const currentScrollAngle = scrollFactor * 15; // 0 to 15 degree right tilt

  // Combined rotation Y calculation
  const rotateYStyle = `calc(var(--ry, 0deg) + ${currentScrollAngle}deg + ${isCurrentlyTransformed ? '180deg' : '0deg'})`;
  const rotateXStyle = `var(--rx, 0deg)`;

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container container">
        
        {/* Left Column: Brand Pitch */}
        <div className="hero-content">
          <div className="hero-badge animate-fade-in-up">
            <Sparkles size={16} className="badge-icon" />
            <span>ESTD. 1975 — AUTHENTIC HERITAGE</span>
          </div>
          
          <h1 className="hero-title animate-fade-in-up">
            Secret Spice Pastes, <br />
            <span className="accent-text">Plated in Minutes.</span>
          </h1>
          
          <p className="hero-subtitle animate-fade-in-up">
            Experience the culinary artistry of slow-cooked Indian curries. Our gourmet pastes pack decades of generational heritage, sourced organically and ready for headless checkouts.
          </p>

          <div className="hero-features animate-fade-in-up">
            <div className="hero-feat-item">
              <div className="feat-check"><Check size={14} /></div>
              <span>No Preservatives</span>
            </div>
            <div className="hero-feat-item">
              <div className="feat-check"><Check size={14} /></div>
              <span>Stone-Ground Spices</span>
            </div>
            <div className="hero-feat-item">
              <div className="feat-check"><Check size={14} /></div>
              <span>100% Organic Farms</span>
            </div>
          </div>

          <div className="hero-ctas animate-fade-in-up">
            <a href="#plate-showcase" className="btn btn-primary">
              <span>Explore Flavors</span>
              <MoveRight size={18} />
            </a>
            
            {/* Interactive Toggle for the visual Showcase */}
            <button 
              className={`btn btn-secondary simmer-btn ${isCurrentlyTransformed ? 'active' : ''}`}
              onClick={() => setIsTransformed(!isTransformed)}
            >
              <Flame size={18} className="flame-icon" />
              <span>{isCurrentlyTransformed ? 'Reset to Jar' : 'Simmer & Plate!'}</span>
            </button>
          </div>
        </div>

        {/* Right Column: 3D Interactive Transformation Showcase */}
        <div className="hero-visual-wrapper">
          <div className="visual-background-glow"></div>
          
          {/* Scroll morph wrapper */}
          <div 
            ref={showcaseRef}
            className={`hero-showcase-box transform-3d ${isCurrentlyTransformed ? 'transformed' : ''}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${rotateXStyle}) rotateY(${rotateYStyle})`
            }}
          >
            {/* Front Layer: Raw product jar */}
            <div 
              className="showcase-layer jar-layer backface-hidden"
              style={{
                opacity: isCurrentlyTransformed ? 0 : 1 - scrollFactor,
                transform: `scale(${1 - scrollFactor * 0.1})`
              }}
            >
              <div className="floating-badge shadow-md">
                <span className="badge-title">Tikka Masala</span>
                <div className="badge-spice-level">
                  <Flame size={12} className="filled-flame" />
                  <Flame size={12} className="filled-flame" />
                  <Flame size={12} className="empty-flame" />
                </div>
              </div>
              <img 
                src="/src/assets/tikka_masala_jar.jpg" 
                alt="Pasco Tikka Masala Paste Jar" 
                className="showcase-image product-jar"
              />
              <div className="product-shadow"></div>
            </div>

            {/* Back Layer: Finished culinary creation */}
            <div 
              className="showcase-layer dish-layer backface-hidden"
              style={{
                opacity: isCurrentlyTransformed ? 1 : scrollFactor,
                transform: `rotateY(180deg) scale(${0.9 + scrollFactor * 0.1})`
              }}
            >
              <div className="floating-badge shadow-md green-theme">
                <span className="badge-title">Plated Dish</span>
                <span className="badge-subtitle">15 Mins Prep</span>
              </div>
              
              {/* Decorative steam effect lines */}
              <div className="steam-wrapper">
                <span className="steam-line steam-1"></span>
                <span className="steam-line steam-2"></span>
                <span className="steam-line steam-3"></span>
              </div>
              
              <img 
                src="/src/assets/plated_tikka_masala.jpg" 
                alt="Plated Chicken Tikka Masala Curry" 
                className="showcase-image plated-dish"
              />
              <div className="product-shadow plate-shadow"></div>
            </div>

            {/* Glassmorphic instruction tab */}
            <div className="showcase-hint glass-panel">
              <HelpCircle size={14} />
              <span>{isCurrentlyTransformed ? 'Hover to tilt dish' : 'Hover to tilt jar | Scroll to Cook'}</span>
            </div>
          </div>

          {/* Floating Curved SVG Directional Arrow Guide */}
          <div className="hero-scroll-guide animate-float-arrow">
            <svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 20 Q50 5 65 40 T50 80" stroke="var(--color-saffron-600)" strokeWidth="3" strokeLinecap="round" fill="none" strokeDasharray="4 4" />
              <path d="M40 70 L50 80 L62 72" stroke="var(--color-saffron-600)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <span className="scroll-guide-label">Scroll to Plate</span>
          </div>

        </div>

      </div>
    </section>
  );
}
