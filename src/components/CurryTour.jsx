import React, { useEffect, useState, useRef } from 'react';
import { recipes } from '../data/pascoProducts';
import { Clock, ChefHat, Sparkles } from 'lucide-react';
import '../styles/components/CurryTour.css';

export default function CurryTour() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track local scroll progress for this sticky section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;

      const sectionTop = scrollTop + rect.top;
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Start when section top enters viewport top, end when bottom exits viewport bottom
      const start = sectionTop;
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

  // Pairing configurations matching authentic products
  const pairings = [
    {
      recipe: recipes[0], // Hyderabadi Biryani
      jarName: 'Delhi Tikka Masala Cooking Sauce',
      jarImage: '/src/assets/tikka_masala_jar.jpg',
      plateImage: '/src/assets/plated_tikka_masala.jpg',
      accentColor: '#0F5132',
      pairingText: 'A rich, medium-spiced Delhi Tikka Masala gravy base cooked slowly with marinated lamb and fragrant saffron rice.'
    },
    {
      recipe: recipes[2], // Methi Chicken
      jarName: 'Mango Pickle (Hot)',
      jarImage: '/src/assets/mango_pickle_jar.jpg',
      plateImage: '/src/assets/plated_tikka_masala.jpg', // reusable asset
      accentColor: '#D97706',
      pairingText: 'Fiery matured green mango pickle chunks served on the side to spice up dry Methi chicken fries and poppadoms.'
    },
    {
      recipe: recipes[3], // Lamb Bhuna Gosht
      jarName: 'Punjabi Butter Chicken Sauce',
      jarImage: '/src/assets/korma_sauce_jar.jpg',
      plateImage: '/src/assets/plated_tikka_masala.jpg',
      accentColor: '#B91C1C',
      pairingText: 'Traditional slow-fried lamb bhuna seasoned with fenugreek and butter sauces for an aromatic finish.'
    }
  ];

  // Calculate active index (0, 1, or 2)
  const activeIdx = Math.min(Math.floor(scrollProgress * 3), 2);
  const activePairing = pairings[activeIdx];

  // Continuous rotation calculated relative to scroll progress
  const rotationAngle = scrollProgress * 360;

  return (
    <div ref={sectionRef} className="curry-tour-outer-container">
      
      {/* Sticky Viewport Panel */}
      <div className="curry-tour-sticky-inner">
        
        {/* Page Titles */}
        <div className="curry-tour-header">
          <span className="section-tagline">Scroll Pairing Tour</span>
          <h2 className="section-title">Sauce & Plate Mechanics</h2>
        </div>

        {/* Dynamic Display Panel */}
        <div className="curry-tour-panel glass-panel">
          
          {/* Left Area: 50% Cropped Half-Plate */}
          <div className="tour-left-col">
            <div className="plate-wrapper">
              <img 
                src={activePairing.plateImage} 
                alt={activePairing.recipe.name} 
                className="plate-image"
                style={{ transform: `rotate(${rotationAngle}deg)` }}
              />
            </div>
            {/* Visual crop overlay line */}
            <div className="plate-border-guide"></div>
          </div>

          {/* Center Area: Directional SVG Arrow pointing from half-plate to Jar */}
          <div className="tour-center-col">
            <svg className="pointing-arrow-svg animate-float-arrow" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Arrow Line curving left-to-right (pointing from plate to jar) */}
              <path d="M 10 50 Q 50 15 90 45" stroke="var(--color-saffron-600)" strokeWidth="3.5" strokeLinecap="round" fill="none" strokeDasharray="5 5" />
              {/* Arrow Head */}
              <path d="M 80 45 L 90 45 L 86 35" stroke="var(--color-saffron-600)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <span className="arrow-tag">Enhances</span>
          </div>

          {/* Right Area: Dynamic Product Jar Card and Recipe Details */}
          <div className="tour-right-col" key={`jar-${activeIdx}`}>
            <div className="tour-jar-card">
              
              {/* Jar Visual */}
              <div className="tour-jar-image-box">
                <span className="jar-sub-title">Pasco Sourcing</span>
                <img src={activePairing.jarImage} alt={activePairing.jarName} className="tour-jar-img animate-float" />
                <h4 className="tour-jar-title">{activePairing.jarName}</h4>
              </div>

              {/* Recipe Info */}
              <div className="tour-recipe-info-box">
                <div className="tour-recipe-badge" style={{ borderColor: activePairing.accentColor, color: activePairing.accentColor }}>
                  <Sparkles size={12} />
                  <span>{activePairing.recipe.meatType}</span>
                </div>
                
                <h3 className="tour-recipe-title">{activePairing.recipe.name}</h3>
                
                <div className="tour-recipe-stats">
                  <div className="stat-pill"><Clock size={12} /> <span>{activePairing.recipe.prepTime}</span></div>
                  <div className="stat-pill"><ChefHat size={12} /> <span>{activePairing.recipe.difficulty}</span></div>
                </div>

                <p className="tour-pairing-desc">{activePairing.pairingText}</p>

                {/* Recipe ingredients */}
                <div className="tour-ing-list">
                  {activePairing.recipe.ingredients.slice(0, 4).map((ing, idx) => (
                    <span key={idx} className="tour-ing-tag">{ing}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Step dot indicator */}
        <div className="tour-progress-indicator">
          {pairings.map((_, idx) => (
            <div 
              key={idx} 
              className={`tour-dot ${activeIdx === idx ? 'active' : ''}`}
              style={{ backgroundColor: activeIdx === idx ? activePairing.accentColor : 'var(--color-cream-200)' }}
            ></div>
          ))}
        </div>

      </div>

    </div>
  );
}
