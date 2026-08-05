import React, { useState } from 'react';
import { sourcingStory } from '../data/pascoProducts';
import { Sun, Leaf, ArrowRight, ShieldCheck } from 'lucide-react';
import '../styles/components/EcoStoryTransform.css';

export default function EcoStoryTransform() {
  const [isSunMode, setIsSunMode] = useState(false);

  return (
    <section id="eco-story" className="eco-story-section">
      <div className="container eco-container">
        
        {/* Left Column: Sourcing Narrative */}
        <div className="eco-narrative">
          <div className="eco-badge">
            <Leaf size={14} className="leaf-icon" />
            <span>100% Seed-to-Spoon Integrity</span>
          </div>
          
          <h2 className="eco-title">{sourcingStory.title}</h2>
          <p className="eco-subtitle">{sourcingStory.subtitle}</p>

          <div className="eco-points-list">
            {sourcingStory.points.map((pt, idx) => (
              <div key={idx} className="eco-point-item">
                <div className="eco-point-num">0{idx + 1}</div>
                <div className="eco-point-text">
                  <h3 className="eco-point-title">{pt.title}</h3>
                  <p className="eco-point-desc">{pt.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="eco-action-row">
            <span className="eco-trust-label">
              <ShieldCheck size={16} />
              <span>Certified Pesticide-Free Sourcing</span>
            </span>
          </div>
        </div>

        {/* Right Column: Interactive SVG Plate-to-Sun Morph Graphic */}
        <div className="eco-visual-col">
          <div className="morph-graphic-container glass-panel">
            
            {/* Interactive Toggle Switch */}
            <div className="morph-modes-switch">
              <button 
                className={`mode-btn ${!isSunMode ? 'active' : ''}`}
                onClick={() => setIsSunMode(false)}
              >
                <Leaf size={14} />
                <span>Soil & Leaf</span>
              </button>
              <button 
                className={`mode-btn ${isSunMode ? 'active' : ''}`}
                onClick={() => setIsSunMode(true)}
              >
                <Sun size={14} />
                <span>Sun-Cured</span>
              </button>
            </div>

            {/* SVG Morph Box */}
            <div className="svg-morph-wrapper">
              <svg 
                className={`morph-svg ${isSunMode ? 'sun-state' : 'leaf-state'}`} 
                viewBox="0 0 200 200" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Aura */}
                <circle cx="100" cy="100" r="80" className="svg-aura" />

                {/* Sun Ray Rays Group (Always present, scales in Sun state) */}
                <g className="sun-rays">
                  {Array.from({ length: 12 }).map((_, i) => {
                    const angle = (i * 30 * Math.PI) / 180;
                    const x1 = 100 + Math.cos(angle) * 55;
                    const y1 = 100 + Math.sin(angle) * 55;
                    const x2 = 100 + Math.cos(angle) * 75;
                    const y2 = 100 + Math.sin(angle) * 75;
                    return (
                      <line 
                        key={i} 
                        x1={x1} 
                        y1={y1} 
                        x2={x2} 
                        y2={y2} 
                        className="ray-line" 
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    );
                  })}
                </g>

                {/* Leaf veins Group (Visible in Leaf state) */}
                <g className="leaf-veins">
                  <path d="M100,50 L100,150" className="vein-main" strokeWidth="2.5" />
                  <path d="M100,80 Q120,70 135,65" className="vein-side" strokeWidth="1.5" />
                  <path d="M100,110 Q120,100 130,95" className="vein-side" strokeWidth="1.5" />
                  <path d="M100,90 Q80,80 65,75" className="vein-side" strokeWidth="1.5" />
                  <path d="M100,120 Q80,110 70,105" className="vein-side" strokeWidth="1.5" />
                </g>

                {/* Core Morph Shape (Leaf / Circle-Sun) */}
                {/* In Leaf mode it's a leaf, in Sun mode it's a glowing circle */}
                <path 
                  className="morphing-core-shape"
                  d={isSunMode 
                    ? "M100,50 A50,50 0 1,1 99.9,50 Z" /* Perfect Sun Circle */
                    : "M100,45 Q155,100 100,155 Q45,100 100,45 Z" /* Symmetrical Organic Leaf */
                  }
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Center Core Accent */}
                <circle cx="100" cy="100" r="15" className="core-accent" />
              </svg>

              {/* Floating detail tag */}
              <div className="morph-hint-bubble">
                {isSunMode ? (
                  <>
                    <Sun size={14} className="accent-icon-spin" />
                    <span>Traditional 40-Day Sun Curing</span>
                  </>
                ) : (
                  <>
                    <Leaf size={14} className="accent-icon-pulse" />
                    <span>Raw Organic Spice Sourcing</span>
                  </>
                )}
              </div>
            </div>

            <p className="morph-interactive-label">
              Click toggle switches to morph energy elements
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}
