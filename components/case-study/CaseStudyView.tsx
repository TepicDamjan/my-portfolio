import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import type { CaseStudy } from "@/lib/case-studies/types";

type CaseStudyViewProps = {
  study: CaseStudy;
};

function CaseStudyBlock({
  label,
  title,
  body,
  delay = 0,
}: {
  label: string;
  title: string;
  body: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div>
        <p className="text-label-caps text-on-surface-variant mb-4">{label}</p>
        <div className="reveal-line mb-6 h-px w-full bg-outline-variant/40" />
        <h2 className="text-headline-md text-on-surface mb-4">{title}</h2>
        <p className="text-body-md text-on-surface-variant">{body}</p>
      </div>
    </Reveal>
  );
}

export function CaseStudyView({ study }: CaseStudyViewProps) {
  return (
    <>
      <section className="container-page pt-8 pb-10 sm:pt-12 sm:pb-16">
        <Reveal>
          <Link
            href="/#work"
            className="text-label-caps text-on-surface-variant transition-colors hover:text-on-surface"
          >
            ← Back to work
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-16 lg:mt-16">
          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <p className="text-label-caps text-on-surface-variant mb-6">
                Case Study · {study.meta.type}
              </p>
              <h1 className="text-display-lg text-on-surface mb-6">{study.title}</h1>
              <p className="text-body-lg text-on-surface-variant max-content">
                {study.tagline}
              </p>
            </Reveal>

            <dl className="mt-10 grid gap-6 sm:grid-cols-3 sm:gap-8">
              {(
                [
                  ["Role", study.meta.role],
                  ["Year", study.meta.year],
                  ["Type", study.meta.type],
                ] as const
              ).map(([term, value], index) => (
                <Reveal key={term} delay={120 + index * 60}>
                  <div>
                    <dt className="text-label-caps text-on-surface-variant mb-2">
                      {term}
                    </dt>
                    <dd className="text-body-md text-on-surface">{value}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>

            <Reveal delay={300} className="mt-10">
              <ul className="flex flex-wrap gap-2">
                {study.stack.map((tag) => (
                  <li
                    key={tag}
                    className="text-label-caps rounded bg-surface-container px-3 py-1.5 text-on-surface-variant"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal variant="scale-up" delay={160} className="lg:col-span-5">
            {study.images?.hero ? (
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-outline-variant/30 sm:aspect-[16/10]">
                <Image
                  src={study.images.hero.src}
                  alt={study.images.hero.alt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            ) : (
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-lg border border-outline-variant/30 bg-gradient-to-br ${study.gradient}`}
              >
                <div className="absolute inset-6 flex flex-col gap-3 opacity-50 sm:inset-10">
                  <div className="flex gap-2">
                    <div className="h-8 w-24 rounded-lg bg-white/25" />
                    <div className="h-8 w-24 rounded-lg bg-white/15" />
                  </div>
                  <div className="mx-auto mt-2 h-28 w-28 rounded-lg bg-white/20 sm:h-36 sm:w-36" />
                  <div className="mx-auto h-3 w-40 rounded bg-white/25" />
                  <div className="mx-auto h-3 w-28 rounded bg-white/15" />
                  <div className="mt-auto flex justify-center gap-2">
                    <div className="h-14 w-16 rounded-xl bg-white/25" />
                    <div className="h-14 w-16 rounded-xl bg-white/15" />
                    <div className="h-14 w-16 rounded-xl bg-white/15" />
                  </div>
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      <section className="section-spacing border-t border-outline-variant/30">
        <div className="container-page grid gap-12 md:grid-cols-2 md:gap-16">
          <CaseStudyBlock
            label={study.overview.problem.label}
            title={study.overview.problem.title}
            body={study.overview.problem.body}
          />
          <CaseStudyBlock
            label={study.overview.solution.label}
            title={study.overview.solution.title}
            body={study.overview.solution.body}
            delay={80}
          />
        </div>
      </section>

      {study.images?.screens && study.images.screens.length > 0 && (
        <section className="section-spacing border-t border-outline-variant/30">
          <div className="container-page">
            <Reveal>
              <p className="text-label-caps text-on-surface-variant mb-4">Interface</p>
              <div className="reveal-line mb-8 h-px w-full bg-outline-variant/40" />
              <h2 className="text-headline-md text-on-surface mb-10 max-content">
                Two screens, end to end
              </h2>
            </Reveal>

            <ul className="grid gap-8 lg:grid-cols-2 lg:gap-10">
              <Reveal delay={0}>
                <li>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-outline-variant/30 sm:aspect-[16/10]">
                    <Image
                      src={study.images.hero.src}
                      alt={study.images.hero.alt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </div>
                  <p className="text-body-md text-on-surface-variant mt-4">
                    Home — platform tabs, URL input, and clipboard paste
                  </p>
                </li>
              </Reveal>

              {study.images.screens.map((screen, index) => (
                <Reveal key={screen.src} delay={(index + 1) * 80}>
                  <li>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-outline-variant/30 sm:aspect-[16/10]">
                      <Image
                        src={screen.src}
                        alt={screen.alt}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 45vw"
                      />
                    </div>
                    {screen.caption && (
                      <p className="text-body-md text-on-surface-variant mt-4">
                        {screen.caption}
                      </p>
                    )}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="section-spacing border-t border-outline-variant/30 bg-surface-container/40">
        <div className="container-page">
          <Reveal>
            <p className="text-label-caps text-on-surface-variant mb-4">
              Key Features
            </p>
            <div className="reveal-line mb-8 h-px w-full bg-outline-variant/40" />
            <h2 className="text-headline-md text-on-surface mb-10 max-content">
              Built for reliability, not just aesthetics
            </h2>
          </Reveal>

          <ul className="grid gap-8 sm:grid-cols-2">
            {study.features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 80}>
                <li className="rounded-lg border border-outline-variant/30 bg-surface p-6 sm:p-8">
                  <h3 className="text-headline-sm text-on-surface mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-body-md text-on-surface-variant">
                    {feature.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-spacing border-t border-outline-variant/30">
        <div className="container-page">
          <Reveal>
            <p className="text-label-caps text-on-surface-variant mb-4">Flow</p>
            <div className="reveal-line mb-8 h-px w-full bg-outline-variant/40" />
            <h2 className="text-headline-md text-on-surface mb-10">
              From link to local file
            </h2>
          </Reveal>

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {study.flow.map((step, index) => (
              <Reveal key={step.step} delay={index * 80}>
                <li className="flex flex-col gap-3">
                  <span
                    className="text-[3rem] leading-none font-serif text-surface-container-high select-none"
                    aria-hidden="true"
                  >
                    {step.step}
                  </span>
                  <h3 className="text-headline-sm text-on-surface">{step.title}</h3>
                  <p className="text-body-md text-on-surface-variant">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-spacing border-t border-outline-variant/30">
        <div className="container-page grid gap-12 md:grid-cols-2 md:gap-16">
          <CaseStudyBlock
            label={study.technical.label}
            title={study.technical.title}
            body={study.technical.body}
          />
          <CaseStudyBlock
            label={study.learnings.label}
            title={study.learnings.title}
            body={study.learnings.body}
            delay={80}
          />
        </div>
      </section>

      <section className="section-spacing border-t border-outline-variant/30">
        <div className="container-page flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Reveal>
            <p className="text-body-md text-on-surface-variant">
              Personal project — local demo, not publicly deployed.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <Link
              href="/#work"
              className="text-label-caps text-on-surface underline underline-offset-4 decoration-outline-variant transition-colors hover:decoration-on-surface"
            >
              View all projects →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
