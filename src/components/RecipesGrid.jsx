import React from 'react';
import { recipes } from '../data/pascoProducts';
import { Clock, ChefHat, Flame, BookOpen } from 'lucide-react';
import '../styles/components/RecipesGrid.css';

export default function RecipesGrid() {
  return (
    <section id="recipes" className="recipes-grid-section section-padding">
      <div className="container">
        
        <div className="recipes-intro">
          <span className="section-tagline">Kitchen Ideas</span>
          <h2 className="section-title">Cook Authentically at Home</h2>
          <p className="section-desc">
            Try these traditional dishes crafted perfectly using Pasco spice pastes and marinades. Perfected in family kitchens, made simple for yours.
          </p>
        </div>

        <div className="recipes-grid-container">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card glass-panel">
              
              {/* Recipe Header */}
              <div className="recipe-card-header">
                <span className="recipe-tagline">{recipe.meatType}</span>
                <h3 className="recipe-name">{recipe.name}</h3>
                
                {/* Meta stats */}
                <div className="recipe-meta-stats">
                  <div className="meta-stat-item">
                    <Clock size={12} />
                    <span>{recipe.prepTime}</span>
                  </div>
                  <div className="meta-stat-item">
                    <ChefHat size={12} />
                    <span>{recipe.difficulty}</span>
                  </div>
                </div>
              </div>

              {/* Recipe Body - Ingredients */}
              <div className="recipe-ingredients-area">
                <h4 className="recipe-subtitle">Ingredients List</h4>
                <div className="recipe-tags-list">
                  {recipe.ingredients.map((ing, idx) => (
                    <span key={idx} className="recipe-ing-tag">{ing}</span>
                  ))}
                </div>
              </div>

              {/* Recipe Footer - Instructions */}
              <div className="recipe-instructions-area">
                <div className="instructions-header">
                  <BookOpen size={14} className="book-icon" />
                  <span>Cooking Method</span>
                </div>
                <p className="recipe-instruct-text">{recipe.instructions}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
