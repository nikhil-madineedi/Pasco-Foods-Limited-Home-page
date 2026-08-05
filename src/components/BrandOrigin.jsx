import React, { useState, useEffect, useRef } from 'react';
import { brandHistory } from '../data/pascoProducts';
import { Calendar, ShieldCheck, Heart, Award, Leaf } from 'lucide-react';
import '../styles/components/BrandOrigin.css';

export default function BrandOrigin() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll progress of this timeline section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      
      const sectionTop = scrollTop + rect.top;
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Start tracking when section top enters viewport, end when section bottom leaves viewport
      const start = sectionTop - viewportHeight;
      const end = sectionTop + sectionHeight;

      if (scrollTop >= start && scrollTop <= end) {
        const progress = (scrollTop - start) / (end - start);
        setScrollProgress(Math.min(Math.max(progress, 0), 1));
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

  // Custom brand value vectors
  const brandValues = [
    {
      icon: <Award className="val-icon" />,
      title: 'Family Recipes',
      desc: 'First crafted in our family kitchen and perfected for over 30 years.'
    },
    {
      icon: <ShieldCheck className="val-icon" />,
      title: 'Honest Taste',
      desc: 'Free of saturated fats, E numbers, artificial additives, and excess water.'
    },
    {
      icon: <Leaf className="val-icon" />,
      title: 'Pure Spices',
      desc: 'Sourced organically from the finest spice gardens across the globe.'
    },
    {
      icon: <Heart className="val-icon" />,
      title: 'UK Craftsmanship',
      desc: 'Award-winning sauces proudly mixed and manufactured right here in the UK.'
    }
  ];

  return (
    <section ref={sectionRef} id="heritage" className="brand-origin-section">
      <div className="container">
        
        {/* Heritage Section Intro with original brand narrative */}
        <div className="origin-intro">
          <span className="section-tagline">Since 1990</span>
          <h2 className="section-title">The Pasco Story</h2>
          <p className="section-desc brand-narrative-copy">
            "{brandHistory.narrative}"
          </p>
        </div>

        {/* Section Structure: Left Values, Right Timeline */}
        <div className="origin-grid">
          
          {/* Column 1: Core Values Grid */}
          <div className="values-column">
            <h3 className="column-subtitle">Our Sourcing Promises</h3>
            <div className="values-box-grid">
              {brandValues.map((val, idx) => (
                <div key={idx} className="value-card glass-panel">
                  <div className="value-icon-wrapper">{val.icon}</div>
                  <h4 className="value-card-title">{val.title}</h4>
                  <p className="value-card-desc">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Interactive Vertical Timeline */}
          <div className="timeline-column">
            <h3 className="column-subtitle">Milestones Timeline</h3>
            
            <div className="timeline-track-wrapper">
              {/* Vertical line indicator */}
              <div className="timeline-spine-line"></div>

              {brandHistory.timeline.map((item, idx) => {
                const isHovered = hoveredIndex === idx;
                
                return (
                  <div 
                    key={idx} 
                    className={`timeline-node-item ${isHovered ? 'highlight' : ''}`}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Ring dot marker */}
                    <div className="timeline-dot-marker">
                      <div className="dot-inner"></div>
                    </div>
                    
                    {/* Event Detail box */}
                    <div className="timeline-event-card glass-panel">
                      <div className="event-header">
                        <Calendar size={14} className="cal-icon" />
                        <span className="event-year">{item.year}</span>
                      </div>
                      <h4 className="event-title">{item.title}</h4>
                      <p className="event-desc">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Scroll-Driven Moving Tractor Sourcing Track */}
        <div className="tractor-track-wrapper">
          {/* Subtle dirt ground road line */}
          <div className="dirt-road-line"></div>
          
          {/* The Moving Tractor */}
          <div 
            className="tractor-avatar" 
            style={{ left: `${scrollProgress * 93}%` }}
          >
            <svg viewBox="0 0 100 60" width="55" height="35" xmlns="http://www.w3.org/2000/svg">
              {/* Tractor body cabins */}
              <rect x="25" y="25" width="45" height="20" fill="var(--color-emerald-800)" rx="3" />
              <rect x="45" y="10" width="22" height="20" fill="var(--color-emerald-700)" rx="2" />
              
              {/* Exhaust Chimney pipe */}
              <line x1="38" y1="25" x2="38" y2="8" stroke="#444" strokeWidth="2.5" />
              <line x1="38" y1="8" x2="42" y2="6" stroke="#444" strokeWidth="2.5" />
              
              {/* Cab window glass */}
              <rect x="48" y="13" width="16" height="10" fill="rgba(255,255,255,0.7)" rx="1" />
              
              {/* Spinning Wheels */}
              {/* Big back wheel */}
              <circle 
                cx="38" 
                cy="45" 
                r="11" 
                fill="#222" 
                stroke="var(--color-saffron-600)" 
                strokeWidth="2.5" 
                style={{ 
                  transformOrigin: '38px 45px', 
                  transform: `rotate(${scrollProgress * 1080}deg)` 
                }} 
              />
              <circle cx="38" cy="45" r="4" fill="var(--color-cream-100)" />
              
              {/* Small front wheel */}
              <circle 
                cx="62" 
                cy="48" 
                r="8" 
                fill="#222" 
                stroke="var(--color-saffron-600)" 
                strokeWidth="2" 
                style={{ 
                  transformOrigin: '62px 48px', 
                  transform: `rotate(${scrollProgress * 1080}deg)` 
                }} 
              />
              <circle cx="62" cy="48" r="3" fill="var(--color-cream-100)" />
            </svg>
            
            {/* Visual caption */}
            <span className="tractor-label">Farm Sourcing</span>
          </div>
        </div>

      </div>
    </section>
  );
}
