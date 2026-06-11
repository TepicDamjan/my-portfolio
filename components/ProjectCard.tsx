import type { Project } from "@/lib/projects";
import { Reveal } from "@/components/Reveal";

type ProjectCardProps = {
  project: Project;
  delay?: number;
};

const layoutClasses: Record<Project["layout"], string> = {
  "wide-left": "col-span-12 lg:col-span-8",
  "narrow-right": "col-span-12 lg:col-span-5 lg:col-start-8 lg:-mt-16 xl:-mt-24",
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
          className="group block overflow-hidden rounded-lg border border-outline-variant/30 hover-lift"
        >
          <div
            className={`relative aspect-[4/3] bg-gradient-to-br sm:aspect-[16/10] ${project.gradient} overflow-hidden`}
          >
            <div className="image-zoom absolute inset-0">
              <div className="absolute inset-4 flex flex-col gap-2 opacity-40 sm:inset-8 sm:gap-3">
                <div className="h-1.5 w-16 rounded bg-white/20 sm:h-2 sm:w-24" />
                <div className="flex flex-1 gap-2 sm:gap-3">
                  <div className="w-1/4 rounded bg-white/10" />
                  <div className="flex-1 rounded bg-white/10" />
                </div>
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  <div className="h-8 rounded bg-white/10 sm:h-12" />
                  <div className="h-8 rounded bg-white/10 sm:h-12" />
                  <div className="h-8 rounded bg-white/10 sm:h-12" />
                </div>
              </div>
            </div>

            <div className="project-card-overlay absolute inset-0 flex items-center justify-center bg-primary/25 transition-opacity duration-500">
              <span className="text-label-caps text-on-primary translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                {isExternal ? "Visit Project →" : "View Case Study →"}
              </span>
            </div>
          </div>
        </a>

        <div className="mt-4 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div className="min-w-0 flex-1">
            <div className="mb-2 flex items-baseline justify-between gap-3 sm:mb-0 sm:block">
              <h3 className="text-headline-sm text-on-surface">{project.title}</h3>
              <span
                className="text-3xl leading-none font-serif text-surface-container-high select-none sm:hidden"
                aria-hidden="true"
              >
                {project.index}
              </span>
            </div>
            <p className="text-body-md text-on-surface-variant max-w-full sm:max-w-md">
              {project.description}
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="text-label-caps rounded bg-surface-container px-2.5 py-1 text-on-surface-variant transition-colors duration-300 hover:bg-surface-container-high sm:px-3"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <span
            className="hidden text-[4rem] leading-none font-serif text-surface-container-high select-none shrink-0 transition-colors duration-500 group-hover/card:text-outline-variant/60 md:text-[5rem] sm:block"
            aria-hidden="true"
          >
            {project.index}
          </span>
        </div>
      </article>
    </Reveal>
  );
}
