// ==============================================
// SKILLS SECTION COMPONENT
// ==============================================
// Displays technical skills organized by category

import { skills } from '@/lib/data';
import ScrollReveal from './ScrollReveal';

export default function Skills() {
  // Create an array of skill categories with their labels
  const skillCategories = [
    { label: 'Languages', skills: skills.languages, icon: '💻' },
    { label: 'Tools', skills: skills.tools, icon: '🛠️' },
    { label: 'AI/ML', skills: skills.aiml, icon: '🤖' },
    { label: 'Frontend', skills: skills.frontend, icon: '🎨' },
    { label: 'Backend', skills: skills.backend, icon: '⚙️' },
    { label: 'Other', skills: skills.other, icon: '📚' },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-foreground/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Skills & Technologies
          </h2>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.label} delay={index * 0.1}>
              <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-foreground/10 hover:border-foreground/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Category Header */}
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span>{category.icon}</span>
                <span>{category.label}</span>
              </h3>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-foreground/10 hover:bg-foreground hover:text-background hover:scale-105 rounded-md text-sm transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Optional: Add a visual element or call-to-action */}
        <div className="mt-12 text-center">
          <p className="text-foreground/60">
            Always learning and exploring new technologies 🚀
          </p>
        </div>
      </div>
    </section>
  );
}

