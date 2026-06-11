"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#expertise", label: "Expertise" },
  { href: "#contact", label: "Contact" },
] as const;

function CloseIcon() {
  return (
    <>
      <span className="block h-px w-6 translate-y-[7px] rotate-45 bg-on-surface" />
      <span className="block h-px w-6 -translate-y-[7px] -rotate-45 bg-on-surface" />
    </>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-outline-variant/30 bg-surface/80 backdrop-blur-md reveal-load-header">
        <div className="container-page flex items-center justify-between gap-4 py-4 sm:py-5 lg:py-6">
          <a
            href="/"
            className="text-label-caps shrink-0 font-mono tracking-widest text-on-surface"
          >
            Damjan Tepic
          </a>

          <nav
            className="hidden items-center gap-6 lg:flex lg:gap-10"
            aria-label="Main"
          >
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className="nav-link text-label-caps">
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden shrink-0 lg:block">
            <Button href="#contact">Let&apos;s Work</Button>
          </div>

          <button
            type="button"
            className="flex size-11 shrink-0 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <CloseIcon />
            ) : (
              <>
                <span className="block h-px w-6 bg-on-surface" />
                <span className="block h-px w-6 bg-on-surface" />
                <span className="block h-px w-6 bg-on-surface" />
              </>
            )}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-surface lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="container-page flex shrink-0 items-center justify-between border-b border-outline-variant/30 py-4 pt-[max(1rem,env(safe-area-inset-top))]">
            <span className="text-label-caps font-mono tracking-widest text-on-surface">
              Damjan Tepic
            </span>
            <button
              type="button"
              className="flex size-11 flex-col items-center justify-center gap-1.5"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <CloseIcon />
            </button>
          </div>

          <nav
            className="container-page flex-1 overflow-y-auto py-10 pb-[max(2rem,env(safe-area-inset-bottom))]"
            aria-label="Mobile"
          >
            <ul className="flex flex-col">
              {navLinks.map(({ href, label }) => (
                <li
                  key={href}
                  className="border-b border-outline-variant/30 py-6 first:pt-0"
                >
                  <a
                    href={href}
                    className="nav-link nav-link-mobile text-headline-sm block w-fit"
                    onClick={closeMenu}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-10">
                <Button href="#contact" className="w-full" onClick={closeMenu}>
                  Let&apos;s Work
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
