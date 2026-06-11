import { Reveal } from "@/components/Reveal";
import { expertise } from "@/lib/projects";

export function Expertise() {
  return (
    <section
      id="expertise"
      className="container-page section-spacing border-t border-outline-variant/30"
    >
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <h2 className="text-headline-md text-on-surface mb-8">
            The Art of <em className="italic font-normal">Reliability.</em>
          </h2>
          <p className="text-body-lg text-on-surface-variant max-content">
            Every interface is a contract with the user. I build systems that
            are predictable under load, accessible by default, and designed to
            evolve — not decay — as products grow.
          </p>
        </Reveal>

        <ul className="divide-y divide-outline-variant/40">
          {expertise.map((skill, index) => (
            <Reveal
              key={skill}
              as="li"
              delay={index * 80}
              className="flex items-center gap-4 py-6 md:py-8 text-headline-sm text-on-surface transition-transform duration-500 hover:translate-x-2"
            >
              <span
                className="size-1.5 shrink-0 bg-surface-tint"
                aria-hidden="true"
              />
              {skill}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
