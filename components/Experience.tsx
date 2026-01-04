// ==============================================
// EXPERIENCE SECTION COMPONENT
// ==============================================
// Displays professional work experience

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
            Professional Experience
          </h2>
        </ScrollReveal>

        {/* Experience Container */}
        <div className="flex justify-center">
          <div className="w-full max-w-3xl space-y-8">
            {experience.map((exp, index) => (
              <ScrollReveal 
                key={exp.id}
                delay={index * 0.1}
              >
                <ExperienceCard experience={exp} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Separate component for each experience card
function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="bg-foreground/5 backdrop-blur-sm rounded-lg p-6 border border-foreground/10 hover:border-foreground/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Date Range */}
      <div className="text-sm text-foreground/60 mb-2">
        {experience.startDate} - {experience.endDate}
      </div>

      {/* Position and Company */}
      <h3 className="text-2xl font-bold mb-1">{experience.position}</h3>
      <p className="text-lg text-foreground/70 mb-1">{experience.company}</p>
      <p className="text-sm text-foreground/60 mb-4">📍 {experience.location}</p>

      {/* Description */}
      {experience.description && experience.description.length > 0 && (
        <div className="mb-4">
          <ul className="list-disc list-inside space-y-2 text-foreground/80">
            {experience.description.map((desc, index) => (
              <li key={index} className="text-sm">
                {desc}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies */}
      {experience.technologies && experience.technologies.length > 0 && (
        <div>
          <p className="text-sm font-semibold mb-2 text-foreground/80">Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-foreground/10 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
