// ==============================================
// CURSOR & SPOTLIGHT COMPONENT - STAGE 2 CLEAN
// ==============================================
// Creates custom cursor + dark mode spotlight effect

'use client';

import { useEffect, useState } from 'react';

export default function CursorTrail() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Hide default cursor globally
    const style = document.createElement('style');
    style.innerHTML = `
      * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    // Detect initial theme
    const checkTheme = () => {
      const htmlElement = document.documentElement;
      setIsDark(htmlElement.classList.contains('dark'));
    };

    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Track active section for spotlight visibility
    const handleScroll = () => {
      const sections = ['home', 'experience', 'skills', 'portfolio', 'contact'];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Only work in dark mode and home section
      if (!isDark || activeSection !== 'home') return;

      const HERO_SELECTOR = '.flex.flex-col.md\\:flex-row.items-center.gap-12';
      const target = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      const inHero = target?.closest(HERO_SELECTOR);

      // Scaling effect in hero div
      if (inHero) {
        const scalingRadius = 76; // ~2cm
        const hero = inHero as HTMLElement;
        const scalable = hero.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span:not(:empty)');

        scalable.forEach((el) => {
          const node = el as HTMLElement;
          if (node.closest('button') || node.closest('a[href*="github"]') || node.closest('a[href*="linkedin"]') || node.tagName.toLowerCase() === 'img') return;
          const rect = node.getBoundingClientRect();
          const closestX = Math.max(rect.left, Math.min(e.clientX, rect.right));
          const closestY = Math.max(rect.top, Math.min(e.clientY, rect.bottom));
          const dist = Math.hypot(e.clientX - closestX, e.clientY - closestY);
          if (dist < scalingRadius) {
            const force = (scalingRadius - dist) / scalingRadius;
            const scale = 1 + force * 0.1; // up to 1.1
            node.style.transition = 'transform 0.75s ease-out';
            node.style.transform = `scale(${scale})`;
            node.setAttribute('data-scaled', 'true');
          } else if (node.getAttribute('data-scaled') === 'true') {
            node.style.transition = 'transform 0.75s ease-out';
            node.style.transform = 'scale(1)';
            node.setAttribute('data-scaled', 'false');
          }
        });
      } else {
        // Reset scaling when leaving hero
        const hero = document.querySelector(HERO_SELECTOR);
        if (hero) {
          hero.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span').forEach((el) => {
            const node = el as HTMLElement;
            if (node.getAttribute('data-scaled') === 'true') {
              node.style.transition = 'transform 0.75s ease-out';
              node.style.transform = 'scale(1)';
              node.setAttribute('data-scaled', 'false');
            }
          });
        }
      }
    };

    const handleMouseLeave = () => {
      // Don't hide cursor when mouse leaves - keep it visible
      // setIsVisible(false);
      
      // Reset hero scaling
      const HERO_SELECTOR = '.flex.flex-col.md\\:flex-row.items-center.gap-12';
      const hero = document.querySelector(HERO_SELECTOR);
      if (hero) {
        hero.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span').forEach((el) => {
          const node = el as HTMLElement;
          node.style.transition = 'transform 0.75s ease-out';
          node.style.transform = 'scale(1)';
          node.removeAttribute('data-scaled');
        });
      }
    };

    // Initialize cursor as visible
    setIsVisible(true);

    handleScroll(); // Check initial section
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousemove', handleMouseMove); // Also listen on document
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      style.remove(); // Remove custom cursor style
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []); // Empty dependency array - only run once

  if (!isVisible) return null;

  // Determine if spotlight should be visible
  // Light mode: NO spotlight
  // Dark mode: ONLY in home section
  const showSpotlight = isDark && activeSection === 'home';

  return (
    <>
      {/* Dark mode spotlight - only in home section */}
      {showSpotlight && (
        <div 
          className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.08), transparent 80%)`,
          }}
        />
      )}
      
      {/* Custom cursor circle - always visible (2mm = ~6px) */}
      <div
        className="pointer-events-none fixed z-40 rounded-full border-2 transition-colors duration-200"
        style={{
          width: '6px',
          height: '6px',
          left: mousePos.x - 3, // Center the cursor (6px / 2)
          top: mousePos.y - 3,
          borderColor: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(23, 23, 23, 0.6)',
        }}
      />
    </>
  );
}

