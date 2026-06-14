import { Reveal } from "@/components/Reveal";

const socialLinks = [
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://github.com", label: "GitHub" },
] as const;

export function ContactCTA() {
  return (
    <section
      id="contact"
      className="bg-primary text-on-primary section-spacing scroll-mt-16 overflow-hidden"
    >
      <div className="container-page text-center">
        <Reveal delay={0}>
          <p className="text-label-caps text-on-primary/70 mb-8 sm:mb-10 md:mb-12">
            Available for Select Collaborations
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-serif text-[clamp(2rem,10vw,5rem)] font-bold leading-[1.05] tracking-tight mb-8 sm:mb-10 md:mb-12">
            Start a Project
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <a
            href="damjan.tepic@icloud.com"
            className="text-body-md sm:text-body-lg inline-block break-all underline underline-offset-4 decoration-on-primary/40 transition-colors hover:decoration-on-primary"
          >
            hello@damjantepic.com
          </a>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row sm:gap-8">
            {socialLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-label-caps min-h-11 inline-flex items-center text-on-primary/70 transition-colors hover:text-on-primary"
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
