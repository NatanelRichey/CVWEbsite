// ==============================================
// FOOTER COMPONENT
// ==============================================
// Simple footer with copyright and tech stack info

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-foreground/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          {/* Copyright */}
          <p>
            © {currentYear} All rights reserved.
          </p>

          {/* Tech Stack Badge */}
          <p className="flex items-center gap-2">
            Built with 
            <span className="font-semibold text-foreground/80">Next.js</span>
            <span>•</span>
            <span className="font-semibold text-foreground/80">TypeScript</span>
            <span>•</span>
            <span className="font-semibold text-foreground/80">Tailwind CSS</span>
          </p>

          {/* Back to Top Link */}
          <a
            href="#home"
            className="hover:text-foreground transition-colors"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

