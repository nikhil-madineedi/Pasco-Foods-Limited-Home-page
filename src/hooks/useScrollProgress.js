import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll progress.
 * Optimized with requestAnimationFrame and passive event listeners.
 */
export default function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const currentScrollY = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const totalScrollable = docHeight - winHeight;

      const progress = totalScrollable > 0 ? (currentScrollY / totalScrollable) * 100 : 0;

      setScrollProgress(progress);
      setScrollY(currentScrollY);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Initial call
    updateScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return { scrollProgress, scrollY };
}
