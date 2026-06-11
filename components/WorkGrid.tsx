import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/projects";

export function WorkGrid() {
  return (
    <section id="work" className="container-page section-spacing scroll-mt-16">
      <Reveal className="mb-10 max-content sm:mb-16 md:mb-20">
        <p className="text-label-caps text-on-surface-variant mb-4 sm:mb-6">
          Portfolio
        </p>
        <div className="reveal-line mb-6 h-px w-full bg-outline-variant/40 sm:mb-8" />
        <h2 className="text-headline-md text-on-surface">
          Curated Digital Architecture
        </h2>
      </Reveal>

      <div className="grid grid-cols-12 gap-x-4 gap-y-12 sm:gap-x-6 sm:gap-y-16 md:gap-y-20 lg:gap-y-24">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} delay={index * 120} />
        ))}
      </div>
    </section>
  );
}
