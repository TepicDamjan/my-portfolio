export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-outline-variant/30 bg-surface-container pb-[env(safe-area-inset-bottom,0px)]">
      <div className="container-page flex flex-col items-center gap-5 py-8 text-center text-label-caps text-on-surface-variant sm:gap-4 sm:py-6 md:flex-row md:items-center md:justify-between md:text-left">
        <span>Damjan Tepic</span>
        <span className="order-last md:order-none">© {year} All rights reserved</span>
        <nav
          className="flex flex-wrap items-center justify-center gap-5 sm:gap-6"
          aria-label="Footer"
        >
          <a
            href="#work"
            className="nav-link min-h-11 inline-flex items-center"
          >
            Work
          </a>
          <a
            href="#expertise"
            className="nav-link min-h-11 inline-flex items-center"
          >
            Expertise
          </a>
          <a
            href="#contact"
            className="nav-link min-h-11 inline-flex items-center"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
