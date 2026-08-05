import React, { useState } from 'react';
import { Sparkles, Check, MoveRight, Phone, Mail } from 'lucide-react';
import '../styles/components/HeroShowcase.css';

export default function HeroShowcase() {
  // Define 3 signature pairing pairs based on authentic Pasco products
  const pairings = [
    {
      id: 'tikka-masala',
      jarName: 'Delhi Tikka Masala',
      jarImage: '/src/assets/tikka_masala_jar.jpg',
      dishName: 'Chicken Tikka Masala & Naan',
      dishImage: '/src/assets/plated_tikka_masala.jpg',
      description: 'Our flagship medium sauce: a ground coriander, cumin, tomato, and cream blend pairing perfectly with roasted paneer or chicken.',
      tag: 'Medium Heat'
    },
    {
      id: 'mango-pickle',
      jarName: 'Mango Pickle (Hot)',
      jarImage: '/src/assets/mango_pickle_jar.jpg',
      dishName: 'Crispy Samosas & Poppadoms',
      dishImage: '/src/assets/plated_tikka_masala.jpg', // reusable for flat pair layout
      description: 'Fiery chunks of raw green mango cured in mustard oil and red chilies. Adds a punchy heat to crispy snacks and appetizers.',
      tag: 'Hot Spice'
    },
    {
      id: 'butter-chicken',
      jarName: 'Punjabi Butter Chicken',
      jarImage: '/src/assets/korma_sauce_jar.jpg',
      dishName: 'Creamy Butter Chicken & Rice',
      dishImage: '/src/assets/plated_tikka_masala.jpg',
      description: 'A mild, slow-cooked buttery tomato gravy infused with fenugreek leaves. Perfect for a rich, family-friendly dinner.',
      tag: 'Mild Heat'
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const activePairing = pairings[activeIdx];

  return (
    <section id="hero" className="hero-section">
      
      {/* Factory Notice Bar */}
      <div className="factory-notice-bar">
        <div className="container notice-flex">
          <span className="notice-tag">Factory Shop:</span>
          <span className="notice-text">FREE order collection from our factory shop: <strong>sales@pascofoods.com</strong> | <strong>01942 493220</strong></span>
        </div>
      </div>

      <div className="hero-container container">
        
        {/* Left Column: Brand Pitch using authentic 1990 copy */}
        <div className="hero-content">
          <div className="hero-badge animate-fade-in-up">
            <Sparkles size={16} className="badge-icon" />
            <span>AUTHENTIC FLAVOURS SINCE 1990</span>
          </div>
          
          <h1 className="hero-title animate-fade-in-up">
            Authentic Taste, <br />
            <span className="accent-text">Professional Heritage.</span>
          </h1>
          
          <p className="hero-subtitle animate-fade-in-up">
            Authentic taste trusted by professional kitchens across the UK. Now available for your home. Made in the UK using the finest blends of spices and herbs from around the world.
          </p>

          <div className="hero-features animate-fade-in-up">
            <div className="hero-feat-item">
              <div className="feat-check"><Check size={14} /></div>
              <span>Award-Winning Sauces</span>
            </div>
            <div className="hero-feat-item">
              <div className="feat-check"><Check size={14} /></div>
              <span>Created in our Family Kitchen</span>
            </div>
            <div className="hero-feat-item">
              <div className="feat-check"><Check size={14} /></div>
              <span>Natural Ingredients for 30+ Years</span>
            </div>
          </div>

          <div className="hero-ctas animate-fade-in-up">
            <a href="#recipes" className="btn btn-primary">
              <span>View Kitchen Recipes</span>
              <MoveRight size={18} />
            </a>
            <a href="#heritage" className="btn btn-outline">
              <span>Read Our Story</span>
            </a>
          </div>
        </div>

        {/* Right Column: Flat Product-to-Plate Pairing Showcase */}
        <div className="hero-pairing-wrapper">
          <div className="pairing-header">
            <h3 className="pairing-section-title">Perfect Pairings</h3>
            <div className="pairing-selector-tabs">
              {pairings.map((p, idx) => (
                <button
                  key={p.id}
                  className={`pairing-tab-btn ${activeIdx === idx ? 'active' : ''}`}
                  onClick={() => setActiveIdx(idx)}
                >
                  {p.jarName.split(' ')[0]} {/* first word only */}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Flat Display */}
          <div className="pairing-display-card glass-panel">
            
            {/* 1. Left side: The Product Jar */}
            <div className="pairing-col jar-col" key={`jar-${activeIdx}`}>
              <span className="pairing-lbl">Pasco Product</span>
              <div className="pairing-badge-heat">{activePairing.tag}</div>
              <img 
                src={activePairing.jarImage} 
                alt={activePairing.jarName} 
                className="pairing-image jar-img"
              />
              <h4 className="pairing-item-title">{activePairing.jarName}</h4>
            </div>

            {/* 2. Center: Curved SVG Pointing Arrow */}
            <div className="pairing-arrow-col">
              <svg className="curved-pointing-arrow" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Curved connecting line */}
                <path d="M 10 30 Q 50 5 90 40" stroke="var(--color-saffron-600)" strokeWidth="3" strokeLinecap="round" fill="none" />
                {/* Arrow Head */}
                <path d="M 80 40 L 90 40 L 90 30" stroke="var(--color-saffron-600)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              <span className="arrow-caption-text">Brings to life</span>
            </div>

            {/* 3. Right side: The Paired Half-Plate */}
            <div className="pairing-col plate-col" key={`plate-${activeIdx}`}>
              <span className="pairing-lbl">Plated Dish</span>
              <div className="steam-wrapper">
                <span className="steam-line steam-1"></span>
                <span className="steam-line steam-2"></span>
              </div>
              <img 
                src={activePairing.dishImage} 
                alt={activePairing.dishName} 
                className="pairing-image plate-img"
              />
              <h4 className="pairing-item-title">{activePairing.dishName}</h4>
            </div>

          </div>

          <p className="pairing-desc-caption">{activePairing.description}</p>
        </div>

      </div>
    </section>
  );
}
