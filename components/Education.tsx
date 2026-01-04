// ==============================================
// EDUCATION SECTION COMPONENT
// ==============================================
// Displays education background

import { education } from '@/lib/data';
import type { Education } from '@/lib/types';
import ScrollReveal from './ScrollReveal';

export default function Education() {
  return (
    <section id="education" className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Education
          </h2>
        </ScrollReveal>

        {/* Education Container */}
        <div className="flex justify-center">
          <div className="w-full max-w-3xl space-y-8">
            {education.map((edu, index) => (
              <ScrollReveal 
                key={edu.id}
                delay={index * 0.1}
              >
                <EducationCard education={edu} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Separate component for each education card
function EducationCard({ education }: { education: Education }) {
  return (
    <div className="bg-foreground/5 backdrop-blur-sm rounded-lg p-6 border border-foreground/10 hover:border-foreground/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Date Range */}
      <div className="text-sm text-foreground/60 mb-2">
        {education.startDate} - {education.endDate}
      </div>

      {/* Degree */}
      <h3 className="text-2xl font-bold mb-1">{education.degree}</h3>
      <p className="text-lg text-foreground/70 mb-1">{education.institution}</p>
      <p className="text-sm text-foreground/60 mb-4">📍 {education.location}</p>

      {/* Languages */}
      {education.languages && education.languages.length > 0 && (
        <div className="mb-4">
          <p className="text-sm font-semibold mb-2 text-foreground/80">Languages:</p>
          <div className="flex flex-wrap gap-2">
            {education.languages.map((language) => (
              <span
                key={language}
                className="px-3 py-1 bg-foreground/10 rounded-full text-sm"
              >
                {language}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {education.skills && education.skills.length > 0 && (
        <div className="mb-4">
          <p className="text-sm font-semibold mb-2 text-foreground/80">Skills:</p>
          <div className="flex flex-wrap gap-2">
            {education.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-foreground/10 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

