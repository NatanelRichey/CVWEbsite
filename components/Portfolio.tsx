// ==============================================
// PORTFOLIO SECTION COMPONENT
// ==============================================
// Displays project showcase with filtering functionality

'use client'; // This tells Next.js this component uses client-side features (state, clicks)

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { projects, projectCategories } from '@/lib/data';
import type { Project } from '@/lib/types';
import ScrollReveal from './ScrollReveal';

export default function Portfolio() {
  // STATE: React's way of storing data that can change
  // When selectedCategory changes, React re-renders the component
  const [selectedCategory, setSelectedCategory] = useState('All');
  const sectionRef = useRef<HTMLElement>(null);
  const preloadedVideosRef = useRef<HTMLVideoElement[]>([]);

  // Preload all videos immediately when component mounts (background loading)
  useEffect(() => {
    // Create and preload all videos in the background
    projects.forEach((project) => {
      if (project.video) {
        const video = document.createElement('video');
        video.src = project.video;
        video.preload = 'auto';
        video.muted = true; // Muted videos load faster and avoid autoplay restrictions
        video.playsInline = true;
        // Start loading the video buffer
        video.load();
        // Store reference to prevent garbage collection
        preloadedVideosRef.current.push(video);
      }
    });

    // Cleanup: remove video elements when component unmounts
    return () => {
      preloadedVideosRef.current.forEach((video) => {
        video.src = '';
        video.load();
      });
      preloadedVideosRef.current = [];
    };
  }, []); // Empty dependency array - runs once on mount

  // FILTERING: Show only projects matching the selected category
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Portfolio
          </h2>
          <p className="text-foreground/60 text-center mb-12 max-w-2xl mx-auto">
            A selection of projects showcasing my technical skills and self-learning abilities
          </p>
        </ScrollReveal>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-foreground text-background scale-105 shadow-md'
                  : 'bg-foreground/10 hover:bg-foreground/20 hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Show message if no projects match filter */}
        {filteredProjects.length === 0 && (
          <p className="text-center text-foreground/60 py-12">
            No projects found in this category.
          </p>
        )}
      </div>
    </section>
  );
}

// Separate component for each project card
function ProjectCard({ project }: { project: Project }) {
  // State to track if mouse is hovering over the entire card
  const [isHovering, setIsHovering] = useState(false);
  // State to track if video has finished playing
  const [videoEnded, setVideoEnded] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    setVideoEnded(false); // Reset video ended state when entering
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setVideoEnded(false); // Reset video ended state when leaving
  };

  return (
    <div 
      className="bg-foreground/5 rounded-lg overflow-hidden border border-foreground/10 hover:border-foreground/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Project Image/Video */}
      <div 
        className={`relative h-48 overflow-hidden ${
          project.title.includes('TheraBot') 
            ? 'bg-[#fcf7ed]' 
            : project.title.includes('WhatsApp')
            ? 'bg-[#0c0f12]'
            : project.title.includes('Interactive CV')
            ? 'bg-black'
            : 'bg-foreground/10'
        }`}
      >
        {/* Always show image as base layer */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`group-hover:scale-105 transition-transform duration-300 ${
            project.title.includes('MealCreator')
              ? 'object-cover'
              : project.title.includes('TheraBot')
              ? 'object-contain'
              : project.title.includes('WhatsApp')
              ? 'object-cover object-[center_90%]'
              : project.title.includes('Interactive CV')
              ? 'object-contain'
              : 'object-contain'
          }`}
        />
        
        {/* Show video on top when hovering and hasn't ended */}
        {isHovering && project.video && !videoEnded && (
          <video
            src={project.video}
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={() => setVideoEnded(true)}
            className={`absolute inset-0 w-full h-full object-contain z-10 ${
              project.title.includes('MealCreator') 
                ? 'bg-black' 
                : 'bg-inherit'
            }`}
          />
        )}
        {/* Status Badge (if applicable) */}
        {project.status && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-foreground/90 text-background rounded-full text-sm">
            {project.status}
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-foreground/70 mb-4">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-foreground/10 rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Key Highlights */}
        <div className="mb-4">
          <p className="text-sm font-semibold mb-2 text-foreground/80">Key Highlights:</p>
          <ul className="space-y-1">
            {project.highlights.slice(0, 2).map((highlight, idx) => (
              <li key={idx} className="text-sm text-foreground/70 flex items-start gap-2">
                <span className="text-foreground/50">✓</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-foreground text-background rounded text-center hover:scale-105 hover:shadow-lg transition-all duration-200 text-sm font-medium"
            >
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 border-2 border-foreground/20 rounded text-center hover:border-foreground/40 hover:bg-foreground/10 hover:scale-105 transition-all duration-200 text-sm font-medium"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

