import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

const socialLinks = [
  { href: "https://www.linkedin.com/in/damjan-tepic", label: "LinkedIn" },
  { href: "https://github.com/TepicDamjan", label: "GitHub" },
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
          <ContactForm />
        </Reveal>

        <Reveal delay={250}>
          <p className="text-body-md mt-8 text-on-primary/70">
            Or email directly:{" "}
            <a
              href="mailto:damjan.tepic@icloud.com"
              className="break-all text-on-primary underline underline-offset-4 decoration-on-primary/40 transition-colors hover:decoration-on-primary"
            >
              damjan.tepic@icloud.com
            </a>
          </p>
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
