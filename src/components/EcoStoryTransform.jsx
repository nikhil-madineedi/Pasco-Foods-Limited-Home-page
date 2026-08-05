import React, { useEffect, useState, useRef } from 'react';
import { Leaf, Sun, CheckCircle } from 'lucide-react';
import '../styles/components/EcoStoryTransform.css';

export default function EcoStoryTransform() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll progress of this section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      
      const sectionTop = scrollTop + rect.top;
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Start calculating progress when the top of the section enters the viewport
      const start = sectionTop - viewportHeight;
      const end = sectionTop + sectionHeight;

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

  // Determine transition stages
  // As scrollProgress goes from 0 to 1, we cross the threshold at 0.5
  const isSunActive = scrollProgress > 0.55;
  const transitionProgress = Math.min(Math.max((scrollProgress - 0.2) / 0.6, 0), 1); // maps 0.2-0.8 to 0-1

  return (
    <section ref={sectionRef} id="eco-story" className="eco-story-section">
      
      {/* Background scenery layer (fades in as user scrolls) */}
      <div className="nature-backdrop-scenery" style={{ opacity: 0.1 + transitionProgress * 0.45 }}>
        {/* Simplified vector trees representing farm sourcing */}
        <div className="nature-vector-tree tree-1">
          <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 20 L20 80 L80 80 Z" fill="var(--color-emerald-800)" />
            <path d="M50 40 L30 90 L70 90 Z" fill="var(--color-emerald-900)" />
            <rect x="46" y="90" width="8" height="25" fill="#5c4033" />
          </svg>
        </div>
        <div className="nature-vector-tree tree-2">
          <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10 L15 70 L85 70 Z" fill="var(--color-emerald-700)" />
            <path d="M50 30 L25 80 L75 80 Z" fill="var(--color-emerald-800)" />
            <rect x="46" y="80" width="8" height="30" fill="#5c4033" />
          </svg>
        </div>
        <div className="nature-vector-tree tree-3">
          <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 30 L25 85 L75 85 Z" fill="var(--color-emerald-800)" />
            <rect x="47" y="85" width="6" height="20" fill="#5c4033" />
          </svg>
        </div>
      </div>

      <div className="eco-container container">
        
        {/* Left Column: Sourcing Narrative */}
        <div className="eco-narrative">
          <div className="eco-badge">
            <Leaf size={16} className="eco-badge-icon" />
            <span>100% NATURAL SOURCE</span>
          </div>

          <h2 className="eco-title">
            Naturally Crafted, <br />
            <span className="saffron-text">Sun-Cured Integrity.</span>
          </h2>

          <p className="eco-description">
            Our mission is simple: authentic Indian flavors free from E numbers, saturated fats, artificial thickeners, starches, or excess water. Just raw spices matured under the British and Indian sun.
          </p>

          <div className="eco-promises">
            <div className="promise-item">
              <CheckCircle size={18} className="promise-icon" />
              <div>
                <h4>Zero Artificial Additives</h4>
                <p>No artificial colors, MSG, or chemical preservatives enter our kitchen recipes.</p>
              </div>
            </div>
            <div className="promise-item">
              <CheckCircle size={18} className="promise-icon" />
              <div>
                <h4>Sun-Cured Maturation</h4>
                <p>Pickles aged for up to 40 days in traditional stone jars under natural warmth.</p>
              </div>
            </div>
            <div className="promise-item">
              <CheckCircle size={18} className="promise-icon" />
              <div>
                <h4>Pure Herb Blends</h4>
                <p>Authentic spice combinations ground slowly to retain native volatile oils.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic SVG Morph Box (Plate to Sun) */}
        <div className="eco-visual-col">
          <div className="morph-container-card glass-panel">
            
            {/* Interactive Toggle display */}
            <div className="morph-indicator-badge">
              {isSunActive ? (
                <span className="badge-tag sun-theme"><Sun size={12} /> Sun-Cured Mode</span>
              ) : (
                <span className="badge-tag plate-theme"><Leaf size={12} /> Plate Outline Mode</span>
              )}
            </div>

            {/* SVG Morph Box */}
            <div className="svg-morph-wrapper">
              <svg 
                className={`morph-svg ${isSunActive ? 'sun-state' : 'plate-state'}`} 
                viewBox="0 0 200 200" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Aura */}
                <circle cx="100" cy="100" r="80" className="svg-aura" />

                {/* Concentric circular dish outlines that expand and fade */}
                <circle 
                  cx="100" 
                  cy="100" 
                  r={isSunActive ? 85 : 55} 
                  className="dish-outline-ring ring-1" 
                  strokeWidth="1.5" 
                  fill="none" 
                  style={{
                    transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                    opacity: isSunActive ? 0.15 : 0.65,
                    stroke: isSunActive ? 'var(--color-saffron-600)' : 'var(--color-emerald-800)'
                  }}
                />
                <circle 
                  cx="100" 
                  cy="100" 
                  r={isSunActive ? 95 : 65} 
                  className="dish-outline-ring ring-2" 
                  strokeWidth="1" 
                  fill="none" 
                  style={{
                    transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                    opacity: isSunActive ? 0.08 : 0.45,
                    stroke: isSunActive ? 'var(--color-saffron-500)' : 'var(--color-emerald-600)'
                  }}
                />

                {/* Sun Ray Rays Group (Always present, scales in Sun state) */}
                <g 
                  className="sun-rays"
                  style={{
                    opacity: isSunActive ? 1 : 0,
                    transform: `scale(${isSunActive ? 1 : 0.6})`,
                    transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  {Array.from({ length: 12 }).map((_, i) => {
                    const angle = (i * 30 * Math.PI) / 180;
                    const x1 = 100 + Math.cos(angle) * 52;
                    const y1 = 100 + Math.sin(angle) * 52;
                    const x2 = 100 + Math.cos(angle) * 72;
                    const y2 = 100 + Math.sin(angle) * 72;
                    return (
                      <line 
                        key={i} 
                        x1={x1} 
                        y1={y1} 
                        x2={x2} 
                        y2={y2} 
                        className="ray-line" 
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="var(--color-saffron-600)"
                      />
                    );
                  })}
                </g>

                {/* Core Morph Shape (Plate outline / Golden Sun core) */}
                <path 
                  className="morphing-core-shape"
                  d={isSunActive 
                    ? "M100,50 A50,50 0 1,1 99.9,50 Z" /* Perfect Sun Circle */
                    : "M100,60 A40,40 0 1,1 99.9,60 Z" /* Plate Dish outline */
                  }
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill={isSunActive ? "var(--color-saffron-400)" : "rgba(15, 81, 50, 0.05)"}
                  stroke={isSunActive ? "var(--color-saffron-600)" : "var(--color-emerald-800)"}
                  style={{
                    transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />

                {/* Center Core Accent */}
                <circle cx="100" cy="100" r={isSunActive ? 12 : 6} className="core-accent" fill="var(--color-white)" />
              </svg>

              {/* Sourcing fact tag */}
              <div className="morph-hint-bubble">
                {isSunActive ? (
                  <>
                    <Sun size={14} className="accent-icon-spin" />
                    <span>Traditional 40-Day Sun Curing</span>
                  </>
                ) : (
                  <>
                    <Leaf size={14} className="accent-icon-pulse" />
                    <span>Chemical-Free 100% Pure Sourcing</span>
                  </>
                )}
              </div>
            </div>

            <p className="morph-interactive-label">
              Scroll down to morph the plate outlines into the glowing sun
            </p>

          </div>
        </div>

      </div>
      
      {/* Animated downward dynamic connector arrow linking to heritage section below */}
      <div className="section-connector-arrow">
        <svg width="40" height="100" viewBox="0 0 40 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0 L20 80" stroke="var(--color-emerald-800)" strokeWidth="2" strokeDasharray="5 5" className="dash-flow-line" />
          <path d="M12 70 L20 80 L28 70" stroke="var(--color-emerald-800)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="20" cy="90" r="4" fill="var(--color-saffron-600)" className="pulse-saffron-dot" />
        </svg>
      </div>
    </section>
  );
}
