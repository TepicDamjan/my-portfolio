import { Reveal } from "@/components/Reveal";

const facts = [
  ["Based in", "Banja Luka, Bosnia & Herzegovina"],
  ["Focus", "Full-stack web development"],
  ["Currently", "Building FakturaOne"],
] as const;

export function About() {
  return (
    <section
      id="about"
      className="container-page section-spacing scroll-mt-16 border-t border-outline-variant/30"
    >
      <div className="grid gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <p className="text-label-caps text-on-surface-variant mb-4 sm:mb-6">
            About
          </p>
          <div className="reveal-line mb-6 h-px w-full bg-outline-variant/40 sm:mb-8" />
          <h2 className="text-headline-md text-on-surface mb-6 sm:mb-8">
            Developer who <em className="italic font-normal">ships.</em>
          </h2>
          <div className="flex flex-col gap-4 text-body-lg text-on-surface-variant max-w-full sm:max-content">
            <p>
              I&apos;m Damjan — a web developer building products end to end:
              from the first Figma frame to the deployed app. My work spans
              SaaS platforms like FakturaOne, media tools like MusicOne, and
              websites for local businesses.
            </p>
            <p>
              I care about the unglamorous parts that make software feel
              solid: predictable systems, localized details, and interfaces
              that don&apos;t need a manual.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
          <dl className="divide-y divide-outline-variant/40 border-y border-outline-variant/40">
            {facts.map(([term, value]) => (
              <div key={term} className="flex flex-col gap-1 py-5 sm:py-6">
                <dt className="text-label-caps text-on-surface-variant">
                  {term}
                </dt>
                <dd className="text-body-md text-on-surface">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
