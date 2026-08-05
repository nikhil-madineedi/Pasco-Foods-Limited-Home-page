import React, { useState } from 'react';
import { heritageTimeline } from '../data/pascoProducts';
import { Calendar, ShieldCheck, Heart, Award, Leaf } from 'lucide-react';
import '../styles/components/BrandOrigin.css';

export default function BrandOrigin() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Custom values array to render cards alongside timeline
  const brandValues = [
    {
      icon: <Award className="val-icon" />,
      title: 'Heritage Craftsmanship',
      desc: 'Formulated using secret stone-ground family recipe ratios perfected over 50 years.'
    },
    {
      icon: <ShieldCheck className="val-icon" />,
      title: 'Zero Fillers',
      desc: 'Free from MSG, starch fillers, artificial colorants, and chemical flavor enhancers.'
    },
    {
      icon: <Leaf className="val-icon" />,
      title: 'Ethical Sourcing',
      desc: 'Direct trade relationships with small-holder spice farmers across the subcontinent.'
    },
    {
      icon: <Heart className="val-icon" />,
      title: 'Dietary Conscious',
      desc: 'Naturally gluten-free products, offering extensive vegan and dairy-free options.'
    }
  ];

  return (
    <section id="heritage" className="brand-origin-section">
      <div className="container">
        
        {/* Heritage Section Intro */}
        <div className="origin-intro">
          <span className="section-tagline">Since 1975</span>
          <h2 className="section-title">Generations of Flavor</h2>
          <p className="section-desc">
            How a tiny spice cellar in India evolved into a high-performance, globally trusted e-commerce culinary brand.
          </p>
        </div>

        {/* Section Structure: Left Values, Right Timeline */}
        <div className="origin-grid">
          
          {/* Column 1: Core Values Grid */}
          <div className="values-column">
            <h3 className="column-subtitle">Our Founding Values</h3>
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

              {heritageTimeline.map((item, idx) => {
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

      </div>
    </section>
  );
}
