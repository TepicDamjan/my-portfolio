import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/projects";

export function WorkGrid() {
  return (
    <section id="work" className="container-page section-spacing">
      <Reveal className="mb-16 md:mb-20 max-content">
        <p className="text-label-caps text-on-surface-variant mb-6">
          Portfolio
        </p>
        <div className="h-px w-full bg-outline-variant/40 mb-8 reveal-line" />
        <h2 className="text-headline-md text-on-surface">
          Curated Digital Architecture
        </h2>
      </Reveal>

      <div className="grid grid-cols-12 gap-x-6 gap-y-20 md:gap-y-24">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} delay={index * 120} />
        ))}
      </div>
    </section>
  );
}
