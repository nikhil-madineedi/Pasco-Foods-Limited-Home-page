import React from 'react';
import { testimonials } from '../data/pascoProducts';
import { Star, Quote } from 'lucide-react';
import '../styles/components/Testimonials.css';

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section section-padding">
      <div className="container">
        
        <div className="testimonials-intro">
          <span className="section-tagline">Reviews</span>
          <h2 className="section-title">Loved by Food Lovers</h2>
          <p className="section-desc">
            Here is what our customers say about the authentic, home-cooked taste of Pasco pickles and curry pastes.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((test, idx) => (
            <div key={idx} className="testimonial-card glass-panel">
              
              {/* Star Rating */}
              <div className="star-rating-row">
                {Array.from({ length: test.rating }).map((_, i) => (
                  <Star key={i} size={16} className="filled-star-icon" />
                ))}
              </div>

              {/* Quote Mark */}
              <div className="quote-icon-wrapper">
                <Quote size={24} className="quote-mark-icon" />
              </div>

              {/* Quote Text */}
              <p className="quote-text">"{test.quote}"</p>

              {/* Author info */}
              <div className="author-details">
                <span className="author-name">{test.author}</span>
                <span className="author-location">{test.location}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
