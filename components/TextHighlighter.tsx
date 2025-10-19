'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface BalloonParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  opacity: number;
}

export default function TextHighlighter() {
  const [particles, setParticles] = useState<BalloonParticle[]>([]);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const particleIdRef = useRef(0);

  // Theme + section tracking
  useEffect(() => {
    const checkTheme = () => {
      const html = document.documentElement;
      setIsDark(html.classList.contains('dark'));
    };
    checkTheme();
    const mo = new MutationObserver(checkTheme);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    const handleScroll = () => {
      const sections = ['home', 'experience', 'skills', 'portfolio', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 100 && r.bottom >= 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      mo.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Mouse move: spotlight + scaling in hero div (home + light only)
  useEffect(() => {
    const HERO_SELECTOR = '.flex.flex-col.md\\:flex-row.items-center.gap-12';

    const handleMouseMove = (e: MouseEvent) => {
      if (isDark || activeSection !== 'home') return;

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

      // Update spotlight position
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      // Reset hero scaling
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

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDark, activeSection]);

  // Render only in light mode + home section
  if (isDark || activeSection !== 'home') return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-20">
      {/* Light mode spotlight - same as dark mode but with transparency like balloons */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
        style={{
          background: `radial-gradient(480px circle at ${mousePos.x}px ${mousePos.y}px, rgba(141, 141, 141, 0.17), transparent 20%)`,
        }}
      />
    </div>
  );
}