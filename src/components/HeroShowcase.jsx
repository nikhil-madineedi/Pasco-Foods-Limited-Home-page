import React from 'react';
import useScrollProgress from '../hooks/useScrollProgress';
import '../styles/components/HeroShowcase.css';

export default function HeroShowcase() {
  const { scrollProgress } = useScrollProgress();

  return (
    <div className="hero-stage-outer">
      
      {/* Factory Notice Bar */}
      <div className="factory-notice-bar">
        <div className="container notice-flex">
          <span className="notice-tag">Factory Shop:</span>
          <span className="notice-text">FREE order collection from our factory shop: <strong>sales@pascofoods.com</strong> | <strong>01942 493220</strong></span>
        </div>
      </div>

      {/* Full-Bleed Culinary stage */}
      <section 
        className="hero-culinary-stage"
        style={{ '--scroll-progress': scrollProgress / 100 }}
      >
        {/* Left: 50% Bleeding Rotating Plate */}
        <div className="plate-bleed-container">
          <img 
            src="/src/assets/plated_tikka_masala.jpg" 
            alt="Hyderabadi Biryani" 
            className="rotating-half-plate" 
          />
          <svg className="curved-pointing-arrow" viewBox="0 0 120 80">
            <path d="M10,20 Q60,5 110,50" fill="none" stroke="#D97706" strokeWidth="2.5" strokeDasharray="6 4"/>
            <polygon points="102,42 112,54 100,58" fill="#D97706"/>
          </svg>
        </div>

        {/* Center: Prominent Product Jar */}
        <div className="hero-jar-container">
          <span className="heat-badge">MEDIUM HEAT 🌶️</span>
          <img 
            src="/src/assets/tikka_masala_jar.jpg" 
            alt="Pasco Delhi Tikka Masala" 
            className="hero-jar-img animate-float" 
          />
        </div>

        {/* Right: Typography & Recipe Details */}
        <div className="recipe-info-container">
          <span className="accent-subtitle">AUTHENTIC FLAVOURS SINCE 1990</span>
          <h1 className="hero-title">Authentic Taste, Professional Heritage.</h1>
          <p className="hero-description">
            Authentic taste trusted by professional kitchens across the UK. Created in our family kitchen with natural ingredients.
          </p>

          <div className="recipe-tags">
            <span className="pill-tag">Basmati Rice</span>
            <span className="pill-tag">Fresh Saffron</span>
            <span className="pill-tag">Pasco Paste</span>
          </div>

          <div className="cta-group">
            <a href="#recipes" className="primary-btn-link">View Kitchen Recipes →</a>
            <a href="#heritage" className="secondary-btn-link">Read Our Story</a>
          </div>
        </div>
      </section>

    </div>
  );
}
