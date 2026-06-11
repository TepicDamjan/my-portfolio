"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#expertise", label: "Expertise" },
  { href: "#contact", label: "Contact" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant/30 bg-surface/80 backdrop-blur-md reveal-load-header">
      <div className="container-page flex items-center justify-between py-5 md:py-6">
        <a
          href="#"
          className="text-label-caps text-on-surface font-mono tracking-widest"
        >
          Damjan Tepic
        </a>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="nav-link text-label-caps">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#contact">Let&apos;s Work</Button>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-px w-6 bg-on-surface transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-on-surface transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-on-surface transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-outline-variant/30 bg-surface px-4 py-8 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-6">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="nav-link nav-link-mobile text-headline-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <Button href="#contact" className="w-full">
                Let&apos;s Work
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
