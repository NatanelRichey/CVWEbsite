// ==============================================================================================
// SCROLL REVEAL COMPONENT
// ==============================================
// Reusable component that reveals content when scrolling into view
// This is a "wrapper" component - it wraps other components and adds animation

'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = 'up' 
}: ScrollRevealProps) {
  // useRef creates a reference to the DOM element
  const ref = useRef(null);
  
  // useInView checks if the element is visible in the viewport
  // once: true means animation only plays once
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Different animation directions
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : directions[direction].y,
        x: isInView ? 0 : directions[direction].x,
      }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom easing for smooth feel
      }}
    >
      {children}
    </motion.div>
  );
}


