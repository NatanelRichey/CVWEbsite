// ==============================================
// CONTACT SECTION COMPONENT
// ==============================================
// Contact information and download CV button

import { personalInfo, socialLinks } from '@/lib/data';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-foreground/5">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-foreground/60 mb-12 text-lg">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
          </p>
        </ScrollReveal>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Email */}
          <ScrollReveal delay={0.1}>
            <a
              href={`mailto:${personalInfo.email}`}
              className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-foreground/10 hover:border-foreground/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group block"
            >
              <div className="text-4xl mb-3">✉️</div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-foreground/70 group-hover:text-foreground transition-colors">
                {personalInfo.email}
              </p>
            </a>
          </ScrollReveal>

          {/* Phone */}
          <ScrollReveal delay={0.2}>
            <a
              href={`tel:${personalInfo.phone}`}
              className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-foreground/10 hover:border-foreground/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group block"
            >
              <div className="text-4xl mb-3">📱</div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-foreground/70 group-hover:text-foreground transition-colors">
                {personalInfo.phone}
              </p>
            </a>
          </ScrollReveal>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-foreground text-background rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-200 font-medium"
            >
              LinkedIn →
            </a>
          )}
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-foreground text-background rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-200 font-medium"
            >
              GitHub →
            </a>
          )}
          {socialLinks.twitter && (
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-foreground text-background rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-200 font-medium"
            >
              Twitter →
            </a>
          )}
        </div>

        {/* Download CV Button */}
        <ScrollReveal delay={0.3}>
          <div>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground/10 hover:bg-foreground hover:text-background hover:scale-105 rounded-lg transition-all duration-300 font-medium text-lg border-2 border-foreground/20 hover:border-foreground hover:shadow-lg"
            >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV (PDF)
          </a>
          <p className="text-sm text-foreground/50 mt-3">
            Traditional format for your records
          </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

