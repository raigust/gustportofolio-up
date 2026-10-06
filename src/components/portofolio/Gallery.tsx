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
        {/* Minimalist Section Header */}
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
          <span className="shrink-0 font-mono text-[0.62rem] text-black/45">
            {webProjects.length.toString().padStart(2, "0")} projects
          </span>
        </div>

        {/* Uniform Horizontal Cards Stack */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {webProjects.map((project, index) => (
            <article
              key={project.id}
              onClick={() => openProject(project)}
              className="group cursor-pointer overflow-hidden rounded-xl border border-[#263442] bg-[#17212b] text-left shadow-[0_12px_30px_rgba(15,23,42,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3b4d5d] hover:shadow-[0_18px_38px_rgba(15,23,42,0.38)] focus-within:ring-1 focus-within:ring-white/20"
            >
              {/* Browser Window Bar */}
              <div className="flex h-7 items-center justify-between border-b border-[#334454] bg-[#202c38] px-3">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                  <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                  <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                  <span className="ml-2 truncate rounded bg-[#111923] px-2 py-0.5 font-mono text-[0.55rem] text-white/50">
                    {project.link
                      ? project.link.replace(/^https?:\/\//, "").replace(/\/$/, "")
                      : `${project.title.toLowerCase().replaceAll(" ", "-")}.local`}
                  </span>
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Open ${project.title} live site`}
                    className="inline-flex shrink-0 items-center gap-1 font-mono text-[0.55rem] text-white/45 transition-colors hover:text-white"
                  >
                    <span>visit</span>
                    <ArrowUpRight className="h-2.5 w-2.5" />
                  </a>
                )}
              </div>

              {/* Full-width Screen Preview */}
              <div className="relative block overflow-hidden bg-[#111]">
                <img
                  src={project.src}
                  alt={`${project.title} project website preview`}
                  width={project.width}
                  height={project.height}
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="block w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
                  style={{ aspectRatio: "24 / 10" }}
                />
              </div>

              {/* Minimalist Card Footer */}
              <div className="flex items-center justify-between gap-3 border-t border-[#334454] bg-[#17212b] px-3.5 py-2.5">
                <div className="min-w-0 flex items-center gap-2">
                  <span className="truncate text-xs font-semibold text-white/85 transition-colors group-hover:text-white">
                    {project.title}
                  </span>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <span className="font-mono text-[0.58rem] text-white/45">
                    {project.year} / {project.client}
                  </span>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 rounded bg-[#202c38] px-2 py-0.5 font-mono text-[0.55rem] text-white/70 transition-colors hover:bg-[#2c3d4f] hover:text-white"
                    >
                      <span>Web</span>
                      <ArrowUpRight className="h-2.5 w-2.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
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
                referrerPolicy="no-referrer"
                className="max-h-[62vh] w-full rounded-lg border border-hairline object-contain bg-black/40"
              />
              <div className="flex gap-2 overflow-x-auto lg:flex-col">
                {active.screenshots.map((screen, index) => (
                  <button
                    key={screen.id}
                    type="button"
                    onClick={() => setActiveScreenshot(index)}
                    aria-label={`Show ${screen.label} screenshot`}
                    aria-pressed={activeScreenshot === index}
                    className={`w-28 shrink-0 text-left lg:w-full ${
                      activeScreenshot === index ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    <img
                      src={screen.src}
                      alt={`${active.title} ${screen.label} thumbnail`}
                      width={screen.width}
                      height={screen.height}
                      referrerPolicy="no-referrer"
                      className={`aspect-video w-full rounded-md border object-cover ${
                        activeScreenshot === index ? "border-foreground" : "border-hairline"
                      }`}
                    />
                    <span className="mt-1 block text-xs truncate">{screen.label}</span>
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
                className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:scale-[1.02]"
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
