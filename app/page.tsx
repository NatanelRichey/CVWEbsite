// ==============================================
// MAIN PAGE - HOME
// ==============================================
// This is the main page that assembles all components

// Import all our components
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Education from '@/components/Experience';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import CursorTrail from '@/components/CursorTrail';
import TextHighlighter from '@/components/TextHighlighter';

export default function Home() {
  return (
    // Main container with smooth scroll behavior
    <div className="min-h-screen">
      {/* Navigation - fixed at top */}
      <Navigation />

      {/* Theme Toggle Button - fixed at bottom right */}
      <ThemeToggle />

      {/* Cursor & Spotlight Effect - custom cursor + dark mode spotlight */}
      <CursorTrail />

      {/* Text Highlighter - disabled (Stage 2 clean) */}
      <TextHighlighter />

      {/* Main content sections */}
      <main>
        <Hero />
        <Education />
        <Portfolio />
        <Skills />
        <Contact />
      </main>

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
}
