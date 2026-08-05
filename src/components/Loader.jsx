import React, { useState, useEffect } from 'react';
import { funFacts } from '../data/pascoProducts';
import '../styles/components/Loader.css';

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [factIndex, setFactIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  // Animate progress percentage
  useEffect(() => {
    const duration = 2400; // 2.4s loading
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              onFinish();
            }, 600); // fade duration
          }, 400);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onFinish]);

  // Rotate through culinary facts
  useEffect(() => {
    const factInterval = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % funFacts.length);
    }, 4000);

    return () => clearInterval(factInterval);
  }, []);

  return (
    <div className={`loader-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loader-content">
        {/* Animated Spice Mandala Wheel SVG */}
        <div className="spice-wheel-container">
          <svg className="spice-wheel" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" className="wheel-track" />
            <circle cx="50" cy="50" r="45" className="wheel-progress" 
              style={{ strokeDashoffset: 283 - (283 * progress) / 100 }}
            />
            {/* Spice Star Mandala Shapes inside */}
            <g className="mandala-design">
              <path d="M 50 15 L 53 45 L 85 50 L 53 55 L 50 85 L 47 55 L 15 50 L 47 45 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M 50 35 L 50 25 M 50 65 L 50 75 M 35 50 L 25 50 M 65 50 L 75 50" stroke="currentColor" strokeWidth="1" />
              {/* Dots representation */}
              <circle cx="50" cy="20" r="1.5" fill="currentColor" />
              <circle cx="50" cy="80" r="1.5" fill="currentColor" />
              <circle cx="20" cy="50" r="1.5" fill="currentColor" />
              <circle cx="80" cy="50" r="1.5" fill="currentColor" />
            </g>
          </svg>
          <div className="loader-percentage">{Math.round(progress)}%</div>
        </div>

        <h2 className="loader-brand">PASCO</h2>
        <div className="loader-divider"></div>

        {/* Fact Rotation Box */}
        <div className="loader-fact-container">
          <span className="fact-label">Did you know?</span>
          <p className="fact-text" key={factIndex}>
            {funFacts[factIndex]}
          </p>
        </div>
      </div>
    </div>
  );
}
