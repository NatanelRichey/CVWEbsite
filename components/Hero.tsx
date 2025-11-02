// ==============================================
// HERO SECTION COMPONENT
// ==============================================
// The first section visitors see - your name, title, and quick links

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '@/lib/data';

export default function Hero() {
  return (
    // min-h-screen makes it full viewport height
    // pt-16 adds padding-top to account for fixed navbar
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image - Animated Entry */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-foreground/20"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Next.js Image component - automatically optimizes images */}
              <Image
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                fill
                className="object-cover"
                priority // Loads immediately (it's above the fold)
              />
            </motion.div>
          </motion.div>

          {/* Text Content - Staggered Animation */}
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-4" 
              style={{ fontFamily: 'var(--font-saira), Saira, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1 }}
            >
              {personalInfo.name}
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl text-foreground/70 mb-6" 
              style={{ fontFamily: 'var(--font-saira), Saira, sans-serif', fontWeight: 400 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1 }}
            >
              {personalInfo.title}
            </motion.p>
            <motion.p 
              className="text-lg text-foreground/60 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              📍 {personalInfo.location}
            </motion.p>
            <motion.p 
              className="text-lg text-foreground/80 mb-8 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {personalInfo.bio}
            </motion.p>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-foreground text-background rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-200 font-medium"
                >
                  LinkedIn
                </a>
              )}
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-foreground/20 rounded-lg hover:border-foreground/40 hover:bg-foreground/10 hover:scale-105 transition-all duration-200 font-medium"
                >
                  GitHub
                </a>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="mt-6 flex gap-6 text-sm text-foreground/60 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a href={`mailto:${personalInfo.email}`} className="hover:text-foreground transition-colors">
                ✉️ {personalInfo.email}
              </a>
              <span>📱 {personalInfo.phone}</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

