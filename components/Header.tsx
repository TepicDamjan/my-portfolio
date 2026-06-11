"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#expertise", label: "Expertise" },
  { href: "#contact", label: "Contact" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant/30 bg-surface/80 backdrop-blur-md reveal-load-header">
      <div className="container-page flex items-center justify-between gap-4 py-4 sm:py-5 md:py-6">
        <a
          href="#"
          className="text-label-caps text-on-surface font-mono tracking-widest shrink-0 max-w-[45vw] truncate sm:max-w-none sm:overflow-visible"
        >
          Damjan Tepic
        </a>

        <nav className="hidden items-center gap-6 lg:gap-10 lg:flex" aria-label="Main">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="nav-link text-label-caps">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block shrink-0">
          <Button href="#contact">Let&apos;s Work</Button>
        </div>

        <button
          type="button"
          className="flex size-11 shrink-0 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-px w-6 bg-on-surface transition-transform duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-on-surface transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-on-surface transition-transform duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-x-0 bottom-0 top-14 z-40 bg-surface/98 backdrop-blur-md transition-all duration-300 sm:top-16 lg:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav
          className="container-page flex h-full flex-col justify-center pb-24"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-8 sm:gap-10">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="nav-link nav-link-mobile text-headline-sm block w-fit"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-4 sm:pt-6">
              <Button
                href="#contact"
                className="w-full sm:w-auto"
                onClick={() => setMenuOpen(false)}
              >
                Let&apos;s Work
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
