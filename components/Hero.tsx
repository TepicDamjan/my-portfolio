import { HeroShaderBackground } from "@/components/HeroShaderBackground";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden lg:min-h-[90vh]">
      <HeroShaderBackground />

      <div className="container-page relative z-10 pb-16 pt-8 section-spacing sm:pb-20 sm:pt-12">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-8 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-label-caps text-on-surface-variant mb-6 sm:mb-8 md:mb-12 reveal-load reveal-load-delay-1">
              Selected Work
            </p>

            <h1 className="text-hero text-on-surface mb-6 sm:mb-8 md:mb-10 uppercase">
              <span className="block reveal-load reveal-load-delay-2">The</span>
              <span className="block reveal-load reveal-load-delay-2">
                Architecture
              </span>
              <span className="block reveal-load reveal-load-delay-2">
                of <em className="italic font-normal">Digital</em>
              </span>
              <span className="block reveal-load reveal-load-delay-2">
                Experiences
              </span>
            </h1>

            <p className="text-body-lg text-on-surface-variant max-w-full sm:max-content reveal-load reveal-load-delay-3">
              I design and build web products for real users — from invoicing
              platforms and media tools to local business sites like Glazure
              Cubak.
            </p>
          </div>

          <div className="hidden lg:flex lg:col-span-4 lg:justify-end lg:pb-2 reveal-load reveal-load-delay-4">
            <a
              href="#work"
              className="text-on-surface-variant transition-colors hover:text-on-surface animate-scroll-indicator pointer-events-auto"
              aria-label="Scroll to work"
            >
              <svg
                width="24"
                height="48"
                viewBox="0 0 24 48"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 0v40M4 32l8 8 8-8"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-12 flex justify-center lg:hidden reveal-load reveal-load-delay-4">
          <a
            href="#work"
            className="text-on-surface-variant transition-colors hover:text-on-surface animate-scroll-indicator pointer-events-auto p-2"
            aria-label="Scroll to work"
          >
            <svg
              width="24"
              height="40"
              viewBox="0 0 24 48"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 0v40M4 32l8 8 8-8"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
