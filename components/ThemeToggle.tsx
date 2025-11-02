// ==============================================
// THEME TOGGLE COMPONENT
// ==============================================
// Switches between light and dark mode

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  // STATE: Track current theme (default to light)
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // EFFECT: Load theme preference from localStorage on mount (default to light)
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    
    // Default to light mode (only use dark if explicitly saved)
    const shouldBeDark = savedTheme === 'dark';
    setIsDark(shouldBeDark);
    
    // Always update the class to match the theme
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, []);

  // FUNCTION: Toggle theme
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  };

  // Don't render until mounted (prevents hydration mismatch)
  if (!mounted) {
    return (
      <div className="w-14 h-8 rounded-full bg-foreground/10" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 z-50 p-3 bg-foreground text-background rounded-full shadow-lg hover:scale-110 transition-transform"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          // Moon icon
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        ) : (
          // Sun icon
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
      </motion.div>
    </button>
  );
}

