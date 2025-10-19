// ==============================================
// EXPERIENCE SECTION COMPONENT
// ==============================================
// Displays work history in a timeline format

import { experience } from '@/lib/data';
import type { Experience } from '@/lib/types';
import ScrollReveal from './ScrollReveal';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Experience
          </h2>
        </ScrollReveal>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical line in the middle */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-foreground/20" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <ScrollReveal 
                key={exp.id}
                delay={index * 0.1}
                direction={index % 2 === 0 ? 'right' : 'left'}
              >
                <div
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    // Alternate left/right on desktop
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Left/Right Side (alternates) */}
                  <div className="flex-1">
                    {index % 2 === 0 ? (
                      // Content on left
                      <div className="md:text-right">
                        <ExperienceCard experience={exp} />
                      </div>
                    ) : (
                      // Empty space on right
                      <div />
                    )}
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:block w-4 h-4 rounded-full bg-foreground border-4 border-background z-10" />

                  {/* Right/Left Side (alternates) */}
                  <div className="flex-1">
                    {index % 2 !== 0 ? (
                      // Content on right
                      <div className="md:text-left">
                        <ExperienceCard experience={exp} />
                      </div>
                    ) : (
                      // Empty space on left
                      <div />
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Separate component for each experience card - keeps code organized
function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="bg-foreground/5 backdrop-blur-sm rounded-lg p-6 border border-foreground/10 hover:border-foreground/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Date Range */}
      <div className="text-sm text-foreground/60 mb-2">
        {experience.startDate} - {experience.endDate}
      </div>

      {/* Position & Company */}
      <h3 className="text-2xl font-bold mb-1">{experience.position}</h3>
      <p className="text-lg text-foreground/70 mb-1">{experience.company}</p>
      <p className="text-sm text-foreground/60 mb-4">📍 {experience.location}</p>

      {/* Description Points */}
      <ul className="space-y-2 mb-4">
        {experience.description.map((point: string, idx: number) => (
          <li key={idx} className="text-foreground/80 flex items-start gap-2">
            <span className="text-foreground/50 mt-1">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* Technologies Used */}
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech: string) => (
          <span
            key={tech}
            className="px-3 py-1 bg-foreground/10 hover:bg-foreground hover:text-background rounded-full text-sm transition-all duration-200 cursor-default hover:scale-105"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

