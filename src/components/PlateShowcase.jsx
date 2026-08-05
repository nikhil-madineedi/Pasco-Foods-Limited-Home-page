import React, { useState, useEffect, useRef } from 'react';
import { recipes } from '../data/pascoProducts';
import { Flame, Clock, ChefHat, Sparkles } from 'lucide-react';
import '../styles/components/PlateShowcase.css';

export default function PlateShowcase() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll progress specifically for this sticky section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      
      // Calculate absolute top of the section relative to document
      const sectionTop = scrollTop + rect.top;
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Sticky duration starts when section top hits viewport top
      const start = sectionTop;
      // Ends when section bottom hits viewport bottom
      const end = sectionTop + sectionHeight - viewportHeight;

      if (scrollTop >= start && scrollTop <= end) {
        const progress = (scrollTop - start) / (end - start);
        setScrollProgress(progress);
      } else if (scrollTop < start) {
        setScrollProgress(0);
      } else if (scrollTop > end) {
        setScrollProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Map scroll progress (0 to 1) to one of the 3 signature dishes
  // Index 0: Hyderabadi Biryani, Index 1: Methi Chicken, Index 2: Lamb Bhuna Gosht
  // We skip Stuffed Mushrooms as it's a side, selecting the 3 main curry dishes
  const selectedDishes = [
    {
      recipe: recipes[0], // Hyderabadi Biryani
      jarName: 'Delhi Tikka Masala Sauce',
      jarImage: '/src/assets/tikka_masala_jar.jpg',
      dishImage: '/src/assets/plated_tikka_masala.jpg',
      accentColor: '#0F5132',
      pairingText: 'Tikka Masala spice base slow-cooked with tender cuts of lamb and layered saffron rice.'
    },
    {
      recipe: recipes[2], // Methi Chicken
      jarName: 'Rajasthani Jalfrezi Sauce',
      jarImage: '/src/assets/korma_sauce_jar.jpg', // reusable asset
      dishImage: '/src/assets/plated_tikka_masala.jpg',
      accentColor: '#B45309',
      pairingText: 'Infused fenugreek leaves stirred with onions and ginger in a creamy spiced jalfrezi sauce.'
    },
    {
      recipe: recipes[3], // Lamb Bhuna Gosht
      jarName: 'Delhi Tikka Masala Paste',
      jarImage: '/src/assets/tikka_masala_jar.jpg',
      dishImage: '/src/assets/plated_tikka_masala.jpg',
      accentColor: '#B91C1C',
      pairingText: 'Slow-fried lamb chunks simmered in our hot Madras curry paste until thick and aromatic.'
    }
  ];

  // Calculate active dish index (0, 1, or 2)
  const activeIdx = Math.min(Math.floor(scrollProgress * 3), 2);
  const activeDish = selectedDishes[activeIdx];

  // Rotate SVG arc arrows 360 degrees based on scroll progression
  const rotateAngle = scrollProgress * 360;

  return (
    <div ref={sectionRef} className="plate-showcase-outer-container">
      
      {/* Sticky Inner Container */}
      <div className="plate-showcase-sticky-inner">
        <div className="container">

          {/* Section Heading */}
          <div className="showcase-header">
            <span className="section-tagline">Scroll To Explore</span>
            <h2 className="section-title">Scroll-Driven Pairing Tour</h2>
            <p className="section-desc">
              Watch how our signature retail sauces and pastes pair with traditional Indian dishes as you scroll.
            </p>
          </div>

          {/* Sticky Interactive Board */}
          <div className="showcase-detail-panel glass-panel">
            
            {/* Left Column: Product-to-Plate Visual Pair with Rotational SVG Arrows */}
            <div className="detail-visual-col">
              <div className="detail-glow" style={{ backgroundColor: activeDish.accentColor + '12' }}></div>
              
              {/* Product Jar */}
              <div className="paired-jar-box" key={`jar-${activeIdx}`}>
                <span className="paired-label">Spice Jar</span>
                <img src={activeDish.jarImage} alt={activeDish.jarName} className="paired-jar-image" />
                <h4 className="paired-title">{activeDish.jarName}</h4>
              </div>

              {/* Rotational SVG Motion Arrows around the active dish plate */}
              <div 
                className="plate-rotational-arrows"
                style={{ transform: `rotate(${rotateAngle}deg)` }}
              >
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Top Right Semi-Circle Arc Arrow */}
                  <path d="M 100 12 A 88 88 0 0 1 188 100" stroke="var(--color-saffron-600)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 6" />
                  <path d="M 188 100 L 180 91 M 188 100 L 196 91" stroke="var(--color-saffron-600)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Bottom Left Semi-Circle Arc Arrow */}
                  <path d="M 100 188 A 88 88 0 0 1 12 100" stroke="var(--color-saffron-600)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 6" />
                  <path d="M 12 100 L 20 109 M 12 100 L 4 109" stroke="var(--color-saffron-600)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Main Sticky Plate Frame */}
              <div className="plate-3d-wrapper" key={`plate-${activeIdx}`}>
                <img 
                  src={activeDish.dishImage} 
                  alt={activeDish.recipe.name} 
                  className="plate-3d-image"
                />
              </div>

            </div>

            {/* Right Column: Recipe Details & Sourcing */}
            <div className="detail-info-col" key={`info-${activeIdx}`}>
              <div className="info-header">
                <div className="info-category-tag">
                  <Sparkles size={12} />
                  <span>{activeDish.recipe.meatType}</span>
                </div>
                <h2 className="info-title">{activeDish.recipe.name}</h2>
                
                <div className="info-meta">
                  <div className="meta-item">
                    <Clock size={14} />
                    <span>Prep: {activeDish.recipe.prepTime}</span>
                  </div>
                  <span className="meta-div">|</span>
                  <div className="meta-item">
                    <ChefHat size={14} />
                    <span>Skill: {activeDish.recipe.difficulty}</span>
                  </div>
                </div>
              </div>

              <p className="info-description">{activeDish.pairingText}</p>

              {/* Ingredients area */}
              <div className="showcase-ingredients-list">
                <h4 className="ingredients-title">Ingredients needed</h4>
                <div className="ingredients-tags">
                  {activeDish.recipe.ingredients.map((ing, idx) => (
                    <span key={idx} className="ing-tag-pill">{ing}</span>
                  ))}
                </div>
              </div>

              {/* Quick instructions snippet */}
              <div className="showcase-method-box">
                <h4 className="method-title">Cooking Method</h4>
                <p className="method-text">{activeDish.recipe.instructions}</p>
              </div>

            </div>

          </div>

          {/* Bullet step indicator */}
          <div className="scroll-step-indicator">
            {selectedDishes.map((_, idx) => (
              <div 
                key={idx} 
                className={`step-dot ${activeIdx === idx ? 'active' : ''}`}
                style={{ backgroundColor: activeIdx === idx ? activeDish.accentColor : 'var(--color-cream-200)' }}
              ></div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}
