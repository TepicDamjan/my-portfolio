import { Reveal } from "@/components/Reveal";

const socialLinks = [
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://github.com", label: "GitHub" },
] as const;

export function ContactCTA() {
  return (
    <section id="contact" className="bg-primary text-on-primary section-spacing overflow-hidden">
      <div className="container-page text-center">
        <Reveal delay={0}>
          <p className="text-label-caps text-on-primary/70 mb-10 md:mb-12">
            Available for Select Collaborations
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-serif text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[1.05] tracking-tight mb-10 md:mb-12">
            Start a Project
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <a
            href="mailto:hello@damjantepic.com"
            className="text-body-lg underline underline-offset-4 decoration-on-primary/40 hover:decoration-on-primary transition-colors"
          >
            hello@damjantepic.com
          </a>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-12 flex items-center justify-center gap-8">
            {socialLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-label-caps text-on-primary/70 hover:text-on-primary transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
