import React from 'react';
import { X, Server, Cpu, Lock, Terminal, Shield, CheckCircle, Database } from 'lucide-react';
import '../styles/components/DocumentationModal.css';

export default function DocumentationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card glass-panel animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-area">
            <Terminal size={18} className="terminal-icon" />
            <h2 className="modal-title">Technical Architecture & Headless Strategy</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="modal-body">
          
          {/* Architecture overview alert */}
          <div className="arch-intro-banner">
            <Shield size={16} className="shield-icon" />
            <p>
              Designed as a performance-first Headless Storefront capable of consuming real-time commerce backends (Shopify, BigCommerce, Strapi) with zero layout thrashing.
            </p>
          </div>

          <div className="modal-grid">
            
            {/* Box 1: Headless API Integration */}
            <div className="arch-card">
              <div className="arch-card-header">
                <Database size={18} className="arch-icon" />
                <h3>Headless API Synchronization</h3>
              </div>
              <p className="arch-card-desc">
                Structured to consume commerce GraphQL endpoints. Rather than coupling business logic to standard pages, data binds dynamically via reactive hooks:
              </p>
              <ul className="arch-card-list">
                <li>
                  <CheckCircle size={14} className="check-icon" />
                  <span><strong>Storefront API</strong>: Queries product metadata and inventory status.</span>
                </li>
                <li>
                  <CheckCircle size={14} className="check-icon" />
                  <span><strong>Cart Mutation</strong>: Dispatches updates to checkout sub-layers.</span>
                </li>
                <li>
                  <CheckCircle size={14} className="check-icon" />
                  <span><strong>Structured Schema</strong>: Adheres strictly to standard product object graphs.</span>
                </li>
              </ul>
            </div>

            {/* Box 2: Animation & Rendering Budget */}
            <div className="arch-card">
              <div className="arch-card-header">
                <Cpu size={18} className="arch-icon" />
                <h3>GPU-Accelerated Rendering</h3>
              </div>
              <p className="arch-card-desc">
                Animations are mathematically engineered to run on the GPU layer, avoiding costly browser reflows and repaints:
              </p>
              <ul className="arch-card-list">
                <li>
                  <CheckCircle size={14} className="check-icon" />
                  <span><strong>Scroll Tracking</strong>: Throttled with `requestAnimationFrame` to limit style recalcs.</span>
                </li>
                <li>
                  <CheckCircle size={14} className="check-icon" />
                  <span><strong>GPU Promotion</strong>: Transitions are strictly limited to `transform` and `opacity`.</span>
                </li>
                <li>
                  <CheckCircle size={14} className="check-icon" />
                  <span><strong>Passive Listeners</strong>: Page scroll listeners run asynchronously.</span>
                </li>
              </ul>
            </div>

            {/* Box 3: IP Protection Policy */}
            <div className="arch-card full-width">
              <div className="arch-card-header">
                <Lock size={18} className="arch-icon" />
                <h3>Intellectual Property Guard Rails</h3>
              </div>
              <p className="arch-card-desc">
                To protect proprietary frontend designs and headless queries, production environments are compiled with strict restrictions:
              </p>
              <div className="code-snippet-box">
                <code>{`// vite.config.js - IP Protection configuration
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false // Obfuscates source maps on deployment URLs
  }
})`}</code>
              </div>
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <span className="modal-author-tag">Build: v1.0.4-dev // Auth: Nikhilendra</span>
          <button className="btn btn-secondary close-cta" onClick={onClose}>
            Acknowledge & Close
          </button>
        </div>

      </div>
    </div>
  );
}
