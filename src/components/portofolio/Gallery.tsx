import { useState } from "react";
import { ArrowUpRight, Code2, X } from "lucide-react";
import { projects } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";

export function Gallery() {
  const [active, setActive] = useState<Project | null>(null);
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  const webProjects = projects.filter(
    (project) => project.category === "Web Developer" && project.id !== "n8n-automation",
  );

  const openProject = (project: Project) => {
    setActive(project);
    setActiveScreenshot(0);
  };

  return (
    <>
      <div className="p-3 sm:p-4 lg:p-6">
        <div className="mb-4 flex items-end justify-between gap-4 border-b border-black/15 pb-3 lg:mb-5">
          <div>
            <p className="mb-1 flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-black/45">
              <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
              Selected builds
            </p>
            <h2 className="font-display text-lg font-semibold tracking-tight text-black/80 sm:text-xl">
              Web interface archive
            </h2>
          </div>
          <span className="shrink-0 font-mono text-[0.62rem] text-black/45">03 projects</span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
        {webProjects.map((project, index) => (
          <button
            key={project.id}
            type="button"
            onClick={() => openProject(project)}
            aria-label={`Open ${project.title} project details`}
            className={`group overflow-hidden rounded-xl border border-[#263442] bg-[#17212b] text-left shadow-[0_12px_30px_rgba(15,23,42,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3b4d5d] hover:shadow-[0_18px_38px_rgba(15,23,42,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${index === 0 ? "sm:col-span-2" : ""}`}
          >
            <span className="flex h-7 items-center gap-1.5 border-b border-[#334454] bg-[#202c38] px-3">
              <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
              <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
              <span className="h-2 w-2 rounded-full bg-[#28c840]" />
              <span className="ml-2 min-w-0 flex-1 truncate rounded bg-[#111923] px-2 py-0.5 text-[0.55rem] text-white/45">
                {project.title.toLowerCase().replaceAll(" ", "-")}.local
              </span>
            </span>
            <span className="block overflow-hidden bg-[#111]">
              <img
                src={project.src}
                alt={`${project.title} project website preview`}
                width={project.width}
                height={project.height}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={index === 0 ? "high" : "auto"}
                className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                style={{ aspectRatio: index === 0 ? "24 / 9" : "16 / 10" }}
              />
            </span>
            <span className="flex items-center justify-between gap-3 border-t border-[#334454] bg-[#17212b] px-3 py-2.5">
              <span className="min-w-0 truncate text-xs font-semibold text-white/85">{project.title}</span>
              <span className="shrink-0 font-mono text-[0.58rem] text-white/45">{project.year} / {project.client}</span>
            </span>
          </button>
        ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-background/70 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} project details`}
          onClick={() => setActive(null)}
        >
          <aside
            className="h-full w-full max-w-4xl overflow-y-auto border-l border-hairline bg-surface p-5 float-card animate-slide-in-right sm:p-7"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between gap-4 border-b border-hairline pb-4">
              <div>
                <p className="label-caps">{active.category}</p>
                <h2 className="font-display text-xl font-semibold">{active.title}</h2>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close project details"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-hairline text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_12rem]">
              <img
                src={active.screenshots[activeScreenshot]?.src ?? active.src}
                alt={`${active.title} ${active.screenshots[activeScreenshot]?.label ?? "project"} screen`}
                width={active.screenshots[activeScreenshot]?.width ?? active.width}
                height={active.screenshots[activeScreenshot]?.height ?? active.height}
                className="max-h-[62vh] w-full rounded-lg border border-hairline object-contain"
              />
              <div className="flex gap-2 overflow-x-auto lg:flex-col">
                {active.screenshots.map((screen, index) => (
                  <button
                    key={screen.id}
                    type="button"
                    onClick={() => setActiveScreenshot(index)}
                    aria-label={`Show ${screen.label} screenshot`}
                    aria-pressed={activeScreenshot === index}
                    className={`w-28 shrink-0 text-left lg:w-full ${activeScreenshot === index ? "text-foreground" : "text-muted-foreground"}`}
                  >
                    <img
                      src={screen.src}
                      alt={`${active.title} ${screen.label} thumbnail`}
                      width={screen.width}
                      height={screen.height}
                      className={`aspect-video w-full rounded-md border object-cover ${activeScreenshot === index ? "border-foreground" : "border-hairline"}`}
                    />
                    <span className="mt-1 block text-xs">{screen.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <dl className="mt-5 grid grid-cols-2 gap-4">
              <div>
                <dt className="label-caps">Client</dt>
                <dd className="text-sm">{active.client}</dd>
              </div>
              <div>
                <dt className="label-caps">Year</dt>
                <dd className="text-sm">{active.year}</dd>
              </div>
            </dl>
            <p className="mt-5 text-sm font-medium">{active.summary}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{active.details}</p>
            {active.link && (
              <a
                href={active.link}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground"
              >
                View live site <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </aside>
        </div>
      )}
    </>
  );
}
