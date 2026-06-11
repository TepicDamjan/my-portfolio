export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-outline-variant/30 bg-surface-container">
      <div className="container-page flex flex-col gap-4 py-6 text-label-caps text-on-surface-variant md:flex-row md:items-center md:justify-between">
        <span>Damjan Tepic</span>
        <span>© {year} All rights reserved</span>
        <nav className="flex gap-6" aria-label="Footer">
          <a href="#work" className="hover:text-on-surface transition-colors">
            Work
          </a>
          <a
            href="#expertise"
            className="hover:text-on-surface transition-colors"
          >
            Expertise
          </a>
          <a
            href="#contact"
            className="hover:text-on-surface transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
