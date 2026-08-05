import React, { useState, useEffect } from 'react';
import { pascoProducts } from '../data/pascoProducts';
import { Flame, ShoppingCart, Eye, ChefHat, Sparkles } from 'lucide-react';
import useScrollProgress from '../hooks/useScrollProgress.js';
import '../styles/components/PlateShowcase.css';

export default function PlateShowcase({ activeCategory }) {
  // Track scroll position
  const { scrollY } = useScrollProgress();

  // Filter products by active category
  const filteredProducts = activeCategory === 'all' 
    ? pascoProducts 
    : pascoProducts.filter(p => p.category === activeCategory);

  const [selectedProduct, setSelectedProduct] = useState(filteredProducts[0] || pascoProducts[0]);
  const [activeTab, setActiveTab] = useState('ingredients'); // ingredients | recipe | nutrition
  const [isRotating, setIsRotating] = useState(false);

  // Update selected product when active category changes
  useEffect(() => {
    if (filteredProducts.length > 0) {
      setSelectedProduct(filteredProducts[0]);
    }
  }, [activeCategory]);

  const selectProductWithAnim = (product) => {
    setIsRotating(true);
    setSelectedProduct(product);
    setTimeout(() => {
      setIsRotating(false);
    }, 600);
  };

  return (
    <section id="plate-showcase" className="plate-showcase-section">
      <div className="container">
        
        {/* Row 1: Product Grid shelf */}
        <div className="product-shelf-grid">
          {filteredProducts.map((prod) => {
            const isSelected = selectedProduct.id === prod.id;
            return (
              <div 
                key={prod.id} 
                className={`shelf-item-card glass-panel ${isSelected ? 'selected' : ''}`}
                onClick={() => selectProductWithAnim(prod)}
              >
                <div className="card-heat-tag">
                  {Array.from({ length: prod.heatLevel }).map((_, i) => (
                    <Flame key={i} size={12} className="card-flame-icon" />
                  ))}
                </div>
                <div className="card-img-wrapper">
                  <img src={prod.image} alt={prod.name} className="card-product-jar" />
                </div>
                <h3 className="card-product-name">{prod.name}</h3>
                <span className="card-product-price">{prod.price}</span>
                <span className="card-weight">{prod.weight}</span>
              </div>
            );
          })}
        </div>

        {/* Row 2: Selected Product Showcase Detail Panel */}
        {selectedProduct && (
          <div className="showcase-detail-panel glass-panel animate-fade-in-up">
            
            {/* Left Detail Column: 3D Rotating Dish Plate & Spice animation */}
            <div className="detail-visual-col">
              <div className="detail-glow" style={{ backgroundColor: selectedProduct.accentColor + '15' }}></div>
              
              {/* Semi-circular SVG rotational arrows bound to scroll */}
              <div 
                className="plate-rotational-arrows"
                style={{ transform: `rotate(${scrollY * 0.1}deg)` }}
              >
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Top Right Semi-Circle Arrow */}
                  <path d="M 100 12 A 88 88 0 0 1 188 100" stroke="var(--color-saffron-600)" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 5" />
                  <path d="M 188 100 L 181 91 M 188 100 L 195 91" stroke="var(--color-saffron-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Bottom Left Semi-Circle Arrow */}
                  <path d="M 100 188 A 88 88 0 0 1 12 100" stroke="var(--color-saffron-600)" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 5" />
                  <path d="M 12 100 L 19 109 M 12 100 L 5 109" stroke="var(--color-saffron-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className={`plate-3d-wrapper ${isRotating ? 'spinning' : ''}`}>
                <img 
                  src={selectedProduct.dishImage || '/src/assets/plated_tikka_masala.jpg'} 
                  alt={selectedProduct.dishName} 
                  className="plate-3d-image"
                />
                {/* Visual Orbit Circles representing spices */}
                <div className="orbit-circle orbit-1"></div>
                <div className="orbit-circle orbit-2"></div>
              </div>
              <div className="plate-caption">
                <ChefHat size={16} className="chef-icon" />
                <span>Transforms into: <strong>{selectedProduct.dishName}</strong></span>
              </div>
            </div>

            {/* Right Detail Column: Description and Tabs */}
            <div className="detail-info-col">
              <div className="info-header">
                <div className="info-category-tag">
                  <Sparkles size={12} />
                  <span>{selectedProduct.subCategory}</span>
                </div>
                <h2 className="info-title">{selectedProduct.name}</h2>
                <div className="info-meta">
                  <span className="info-price">{selectedProduct.price}</span>
                  <span className="info-divider">|</span>
                  <span className="info-weight">{selectedProduct.weight}</span>
                  <span className="info-divider">|</span>
                  <div className="info-heat">
                    <span className="heat-label">Heat:</span>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Flame 
                        key={i} 
                        size={14} 
                        className={i < selectedProduct.heatLevel ? 'filled-flame' : 'empty-flame'} 
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="info-description">{selectedProduct.description}</p>

              {/* Tabs Section */}
              <div className="info-tabs-wrapper">
                <div className="info-tabs-header">
                  <button 
                    className={`info-tab-btn ${activeTab === 'ingredients' ? 'active' : ''}`}
                    onClick={() => setActiveTab('ingredients')}
                  >
                    Ingredients
                  </button>
                  <button 
                    className={`info-tab-btn ${activeTab === 'recipe' ? 'active' : ''}`}
                    onClick={() => setActiveTab('recipe')}
                  >
                    Cook Recipe
                  </button>
                  <button 
                    className={`info-tab-btn ${activeTab === 'nutrition' ? 'active' : ''}`}
                    onClick={() => setActiveTab('nutrition')}
                  >
                    Nutrition Info
                  </button>
                </div>

                <div className="info-tab-content">
                  {activeTab === 'ingredients' && (
                    <div className="tab-ingredients-list">
                      {selectedProduct.ingredients.map((ing, index) => (
                        <span key={index} className="ingredient-tag">{ing}</span>
                      ))}
                    </div>
                  )}

                  {activeTab === 'recipe' && (
                    <div className="tab-recipe-box">
                      <p className="recipe-text">
                        {selectedProduct.recipeSnippet}
                      </p>
                    </div>
                  )}

                  {activeTab === 'nutrition' && (
                    <div className="tab-nutrition-grid">
                      <div className="nutr-item">
                        <span className="nutr-val">{selectedProduct.nutrition.calories}</span>
                        <span className="nutr-lbl">Calories</span>
                      </div>
                      <div className="nutr-item">
                        <span className="nutr-val">{selectedProduct.nutrition.fat}</span>
                        <span className="nutr-lbl">Total Fat</span>
                      </div>
                      <div className="nutr-item">
                        <span className="nutr-val">{selectedProduct.nutrition.carbs}</span>
                        <span className="nutr-lbl">Carbohydrates</span>
                      </div>
                      <div className="nutr-item">
                        <span className="nutr-val">{selectedProduct.nutrition.protein}</span>
                        <span className="nutr-lbl">Protein</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Add to Headless Cart */}
              <div className="detail-actions">
                <button className="btn btn-secondary add-cart-btn">
                  <ShoppingCart size={18} />
                  <span>Add to Headless Cart</span>
                </button>
                <button className="btn btn-outline quick-btn" title="Quick View">
                  <Eye size={18} />
                  <span>Quick View</span>
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
