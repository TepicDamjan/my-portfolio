import type { Project } from "@/lib/projects";
import { Reveal } from "@/components/Reveal";

type ProjectCardProps = {
  project: Project;
  delay?: number;
};

const layoutClasses: Record<Project["layout"], string> = {
  "wide-left": "col-span-12 lg:col-span-8",
  "narrow-right": "col-span-12 lg:col-span-5 lg:col-start-8 lg:-mt-24",
  "wide-full": "col-span-12",
};

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  const linkHref = project.href ?? `#${project.id}`;
  const isExternal = Boolean(project.href);

  return (
    <Reveal
      variant="scale-up"
      delay={delay}
      className={layoutClasses[project.layout]}
    >
      <article className="group/card">
        <a
          href={linkHref}
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="group block border border-outline-variant/30 hover-lift overflow-hidden rounded-lg"
        >
          <div
            className={`relative aspect-[16/10] bg-gradient-to-br ${project.gradient} overflow-hidden`}
          >
            <div className="image-zoom absolute inset-0">
              <div className="absolute inset-8 flex flex-col gap-3 opacity-40">
                <div className="h-2 w-24 rounded bg-white/20" />
                <div className="flex gap-3 flex-1">
                  <div className="w-1/4 rounded bg-white/10" />
                  <div className="flex-1 rounded bg-white/10" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-12 rounded bg-white/10" />
                  <div className="h-12 rounded bg-white/10" />
                  <div className="h-12 rounded bg-white/10" />
                </div>
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-primary/25">
              <span className="text-label-caps text-on-primary translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                {isExternal ? "Visit Project →" : "View Case Study →"}
              </span>
            </div>
          </div>
        </a>

        <div className="mt-6 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-headline-sm text-on-surface mb-2">
              {project.title}
            </h3>
            <p className="text-body-md text-on-surface-variant max-w-md">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="text-label-caps bg-surface-container px-3 py-1 rounded text-on-surface-variant transition-colors duration-300 hover:bg-surface-container-high"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <span
            className="text-[4rem] md:text-[5rem] leading-none font-serif text-surface-container-high select-none shrink-0 transition-colors duration-500 group-hover/card:text-outline-variant/60"
            aria-hidden="true"
          >
            {project.index}
          </span>
        </div>
      </article>
    </Reveal>
  );
}
