import React, { useEffect, useState, useRef } from 'react';
import { recipes } from '../data/pascoProducts';
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

  // Set up configuration matching the authentic data mappings
  const pairings = [
    {
      id: 'tikka-masala',
      dishName: recipes[0].name, // Hyderabadi Biryani
      jarName: 'Delhi Tikka Masala Sauce',
      jarImg: '/src/assets/tikka_masala_jar.jpg',
      plateImg: '/src/assets/plated_tikka_masala.jpg',
      accentColor: '#0F5132',
      description: 'A rich, medium-spiced Delhi Tikka Masala gravy base cooked slowly with marinated lamb and fragrant saffron rice.',
      prepTime: recipes[0].prepTime,
      difficulty: recipes[0].difficulty,
      servings: '4 Servings',
      spices: ['Coriander', 'Cumin', 'Turmeric', 'Garam Masala']
    },
    {
      id: 'mango-pickle',
      dishName: recipes[2].name, // Methi Chicken
      jarName: 'Mango Pickle (Hot)',
      jarImg: '/src/assets/mango_pickle_jar.jpg',
      plateImg: '/src/assets/plated_tikka_masala.jpg',
      accentColor: '#D97706',
      description: 'Fiery matured green mango pickle chunks served on the side to spice up dry Methi chicken curry and crispy poppadoms.',
      prepTime: recipes[2].prepTime,
      difficulty: recipes[2].difficulty,
      servings: '3 Servings',
      spices: ['Fenugreek', 'Mustard Seeds', 'Fennel', 'Red Chili']
    },
    {
      id: 'butter-chicken',
      dishName: recipes[3].name, // Lamb Bhuna Gosht
      jarName: 'Punjabi Butter Chicken Sauce',
      jarImg: '/src/assets/korma_sauce_jar.jpg',
      plateImg: '/src/assets/plated_tikka_masala.jpg',
      accentColor: '#B91C1C',
      description: 'Traditional slow-fried lamb bhuna seasoned with fenugreek and butter sauces for a highly rich, aromatic finish.',
      prepTime: recipes[3].prepTime,
      difficulty: recipes[3].difficulty,
      servings: '2-4 Servings',
      spices: ['Cardamom', 'Cinnamon', 'Cloves', 'Kashmiri Chili']
    }
  ];

  // Calculate active index (0, 1, or 2)
  const activeIdx = Math.min(Math.floor(scrollProgress * 3), 2);
  const currentPairing = pairings[activeIdx];

  return (
    <div ref={sectionRef} className="curry-tour-outer-container">
      
      {/* Sticky viewport frame container */}
      <div className="curry-tour-sticky-inner">
        <div className="curry-tour-header">
          <span className="section-tagline font-bold">Scroll Pairing Tour</span>
          <h2 className="section-title">Sauce & Plate Mechanics</h2>
        </div>

        {/* Reconstructed Pairing Grid Layout */}
        <section 
          className="pairing-tour-container"
          style={{ '--scroll-progress': scrollProgress }}
        >
          {/* Column 1: Bleeding 50% Half-Plate */}
          <div className="plate-bleed-wrapper">
            <img 
              src={currentPairing.plateImg} 
              alt={currentPairing.dishName} 
              className="rotating-half-plate" 
            />
            
            {/* Dynamic pointed arrow curving left-to-right (plate -> jar) */}
            <svg className="curved-arrow-svg" viewBox="0 0 100 100">
              <path d="M10,20 Q50,5 90,40" fill="none" stroke="#d97706" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="5,5" />
              <polygon points="85,35 95,45 82,50" fill="#d97706" />
            </svg>
          </div>

          {/* Column 2: Prominent Center Jar */}
          <div className="center-jar-wrapper" key={`jar-${activeIdx}`}>
            <img 
              src={currentPairing.jarImg} 
              alt={currentPairing.jarName} 
              className="hero-jar-image" 
            />
          </div>

          {/* Column 3: Recipe & Dish Details */}
          <div className="recipe-details-wrapper" key={`info-${activeIdx}`}>
            <span className="badge-pill">AUTHENTIC RECIPE</span>
            <h2>{currentPairing.dishName}</h2>
            <p className="pairing-tour-desc">{currentPairing.description}</p>
            
            <div className="meta-stats">
              <span>⏱️ {currentPairing.prepTime}</span>
              <span>📊 {currentPairing.difficulty}</span>
              <span>👥 {currentPairing.servings}</span>
            </div>

            <div className="spices-tag-list">
              <h4>SPICES USED</h4>
              <div className="tags">
                {currentPairing.spices.map((spice, idx) => (
                  <span key={idx} className="spice-tag">{spice}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Slide Indicator Dots */}
        <div className="tour-progress-indicator">
          {pairings.map((_, idx) => (
            <div 
              key={idx} 
              className={`tour-dot ${activeIdx === idx ? 'active' : ''}`}
              style={{ backgroundColor: activeIdx === idx ? currentPairing.accentColor : 'var(--color-cream-200)' }}
            ></div>
          ))}
        </div>

      </div>

    </div>
  );
}
