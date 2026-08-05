import React from 'react';
import { pascoProducts } from '../data/pascoProducts';
import '../styles/components/CategoryNav.css';

export default function CategoryNav({ activeCategory, setActiveCategory }) {
  // Define categories and calculate product counts dynamically
  const categories = [
    { id: 'all', label: 'All Heritage' },
    { id: 'pickles', label: 'Sun-Cured Pickles' },
    { id: 'curries', label: 'Kashmiri & Region Curries' },
    { id: 'pastes-sauces', label: 'Spice Pastes & Sauces' }
  ];

  const getCount = (categoryId) => {
    if (categoryId === 'all') return pascoProducts.length;
    return pascoProducts.filter(p => p.category === categoryId).length;
  };

  return (
    <section className="category-filter-section">
      <div className="container">
        <div className="filter-intro">
          <span className="section-tagline">The Spice Cellar</span>
          <h2 className="section-title">Explore by Culinary Style</h2>
          <p className="section-desc">
            Filter our premium, slow-crafted collection of authentic Indian elements. Ready for instant headless e-commerce checkout.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="filter-nav-wrapper">
          <div className="filter-nav-bar glass-panel">
            {categories.map((cat) => {
              const count = getCount(cat.id);
              const isActive = activeCategory === cat.id;
              
              return (
                <button
                  key={cat.id}
                  className={`filter-nav-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span className="btn-label-text">{cat.label}</span>
                  <span className="btn-badge">{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
