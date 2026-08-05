import React, { useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import HeroShowcase from './components/HeroShowcase';
import CategoryNav from './components/CategoryNav';
import PlateShowcase from './components/PlateShowcase';
import EcoStoryTransform from './components/EcoStoryTransform';
import BrandOrigin from './components/BrandOrigin';
import Footer from './components/Footer';
import DocumentationModal from './components/DocumentationModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isDocsOpen, setIsDocsOpen] = useState(false);

  return (
    <>
      {/* 1. Indian Culinary Fact Preloader */}
      {isLoading && <Loader onFinish={() => setIsLoading(false)} />}

      {/* Main Layout Container - Fades in after loading */}
      <div className={`app-main-layout ${isLoading ? 'layout-hidden' : 'layout-visible'}`}>
        
        {/* 2. 3-Zone Sticky Navigation Header */}
        <Navbar onOpenDocs={() => setIsDocsOpen(true)} />

        {/* 3. Hero Showcase (3D Tilt & Jar-to-Dish Morph) */}
        <HeroShowcase />

        {/* 4. Interactive Category filter controls */}
        <CategoryNav 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        {/* 5. Sticky product card grid & Spinning plates showcase */}
        <PlateShowcase activeCategory={activeCategory} />

        {/* 6. Seed-to-Spoon SVG Morph Story */}
        <EcoStoryTransform />

        {/* 7. Brand milestones vertical heritage timeline */}
        <BrandOrigin />

        {/* 8. Footer credits, contact & Compliance checks */}
        <Footer onOpenDocs={() => setIsDocsOpen(true)} />

        {/* 9. Glassmorphic Architecture overlay */}
        <DocumentationModal 
          isOpen={isDocsOpen} 
          onClose={() => setIsDocsOpen(false)} 
        />
        
      </div>
    </>
  );
}
