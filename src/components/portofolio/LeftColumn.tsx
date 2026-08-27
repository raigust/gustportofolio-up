import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import {
  clients,
  certifications,
  education,
  experience,
  profile,
  projects,
  services,
  socials,
  stack,
  stats,
} from "@/data/portfolio";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-lg font-semibold tracking-tight text-foreground">
      {children}
    </h2>
  );
}

const issuerColors = [
  "#111827",
  "#0f766e",
  "#7c3aed",
  "#dc2626",
  "#ea580c",
  "#2563eb",
  "#16a34a",
  "#ca8a04",
];

function getIssuerBadge(issuer?: string) {
  const safeIssuer = issuer?.trim();

  if (!safeIssuer) {
    return { mark: "C", color: issuerColors[0] };
  }

  const words = safeIssuer.split(/\s+/).filter(Boolean).slice(0, 3);
  const mark = words.map((word) => word.charAt(0)).join("").toUpperCase().slice(0, 3) || "C";
  const colorIndex = safeIssuer.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0) % issuerColors.length;

  return { mark, color: issuerColors[colorIndex] };
}

export function LeftColumn() {
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col gap-3 px-4 py-3 sm:gap-4 sm:px-5 sm:py-4 lg:min-h-screen lg:gap-3 lg:px-4 lg:py-4 xl:px-5">
      {/* Hero */}
      <header id="about" className="flex flex-col gap-2.5 lg:gap-2">
        <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
          <img
            src={profile.avatar}
            alt={`${profile.name}, ${profile.role}`}
            width={512}
            height={512}
            className="h-12 w-12 shrink-0 rounded-xl border border-hairline object-cover ring-1 ring-foreground/10"
          />
          <div className="min-w-0">
            <h1 className="font-display truncate text-xl font-semibold tracking-tight">
              {profile.name}
            </h1>
            <p className="truncate text-sm text-muted-foreground">{profile.role}</p>
          </div>
        </div>

        <p className="max-w-xl font-display text-base leading-relaxed font-medium tracking-tight sm:text-lg lg:text-base">
          I build thoughtful web experiences and enjoy combining clean code with purposeful visual design.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-signal animate-live" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            Available for work
          </span>
        </div>

        <a
          href="#contact"
          className="inline-flex h-9 w-fit items-center gap-2 rounded-full bg-primary px-4 text-xs font-medium text-primary-foreground transition-transform duration-200 hover:scale-[1.03]"
        >
          Get in touch <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>

        {/* Main organizations */}
        <div
          className="relative overflow-hidden hairline-t pt-4"
          aria-label="Main organizations"
        >
          <div className="flex w-max animate-ticker gap-10">
            {[...clients, ...clients].map((c, i) => (
              <span
                key={`${c}-${i}`}
                aria-hidden={i >= clients.length}
                className="font-display text-sm font-semibold tracking-[0.16em] text-muted-foreground/60"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* About + stats */}
      <section className="flex flex-col gap-1.5 hairline-t pt-2.5" aria-labelledby="about-me">
        <SectionTitle>
          <span id="about-me">About me.</span>
        </SectionTitle>
        <p className="text-sm leading-relaxed text-muted-foreground">
          I am passionate about graphic design and business ideas. I completed the Junior Graphic
          Design Certification at Telkom DigiUp, where I learned to create clean and useful visuals
          for user experience. I can communicate effectively in Indonesian (native) and English
          (reading and writing). I am always excited to learn new things in creative design, graphic
          design, web development, and digital marketing.
        </p>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-3">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <dt className="font-display text-2xl font-semibold tracking-tight">{s.value}</dt>
              <dd className="text-xs text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Services */}
      <section className="flex flex-col gap-1.5 hairline-t pt-2.5" aria-labelledby="services">
        <SectionTitle>
          <span id="services">Services.</span>
        </SectionTitle>
        <ol className="flex flex-col gap-3">
          {services.map((s, i) => (
            <li key={s.title} className="flex flex-col gap-2">
              <p className="font-display text-sm font-semibold">
                <span className="text-muted-foreground">{i + 1}. </span>
                {s.title}
              </p>
              <ul className="flex flex-col gap-1.5 pl-4">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="relative text-sm text-muted-foreground before:absolute before:-left-4 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground/60"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* Skills */}
      <section className="flex flex-col gap-1.5 hairline-t pt-2.5" aria-labelledby="stack">
        <SectionTitle>
          <span id="stack">Skills.</span>
        </SectionTitle>
        <ul className="grid gap-3 sm:grid-cols-2">
          {stack.map((t) => (
            <li
              key={t.name}
              className="flex items-center gap-2 rounded-lg border border-hairline bg-surface p-2"
            >
              <span
                className="font-display grid h-8 w-8 shrink-0 place-items-center rounded-md bg-surface-elevated text-[0.6rem] font-semibold"
                style={{ color: t.color }}
                aria-hidden="true"
              >
                {t.mark}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium">{t.name}</span>
                <span className="block truncate text-xs text-muted-foreground">{t.use}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section className="flex flex-col gap-1.5 hairline-t pt-2.5" aria-labelledby="experience">
        <SectionTitle>
          <span id="experience">Experience.</span>
        </SectionTitle>
        <ol className="flex flex-col gap-3">
          {experience.map((e) => (
            <li key={e.role} className="flex flex-col gap-1">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
                <p className="truncate text-sm font-medium">
                  {e.role} <span className="text-muted-foreground">· {e.company}</span>
                </p>
                <span className="label-caps shrink-0">{e.year}</span>
              </div>
              <p className="text-sm text-muted-foreground">{e.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Education */}
      <section className="flex flex-col gap-1.5 hairline-t pt-2.5" aria-labelledby="education">
        <SectionTitle>
          <span id="education">Education.</span>
        </SectionTitle>
        <ol className="flex flex-col gap-3">
          {education.map((item) => (
            <li key={item.institution} className="flex flex-col gap-1">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
                <p className="text-sm font-medium">{item.institution}</p>
                {item.period && <span className="label-caps shrink-0">{item.period}</span>}
              </div>
              {item.major && <p className="text-sm text-muted-foreground">{item.major}</p>}
              {item.result && <p className="text-xs text-muted-foreground">{item.result}</p>}
              {item.skills && (
                <p className="text-xs text-muted-foreground">Related skills: {item.skills.join(", ")}</p>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* Certifications */}
      <section className="flex flex-col gap-1.5 hairline-t pt-2.5" aria-labelledby="certifications">
        <SectionTitle>
          <span id="certifications">Licenses & certifications.</span>
        </SectionTitle>
        <ol className="flex flex-col gap-3">
          {certifications.map((certificate) => (
            <li key={certificate.name} className="grid grid-cols-[minmax(0,1fr)_auto] gap-2 border-b border-hairline pb-3 last:border-0">
              <div className="flex min-w-0 gap-2">
                {certificate.image ? (
                  <img src={certificate.image} alt="" className="h-10 w-10 shrink-0 rounded-md object-cover" />
                ) : (
                  <span
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-md text-[0.62rem] font-semibold text-white shadow-sm"
                    style={{ backgroundColor: getIssuerBadge(certificate.issuer).color }}
                    aria-label={certificate.issuer ?? "Issuer logo"}
                  >
                    {getIssuerBadge(certificate.issuer).mark}
                  </span>
                )}
                <div className="min-w-0">
                  <p className="text-sm font-medium">{certificate.name}</p>
                  {certificate.issuer && <p className="text-xs text-muted-foreground">{certificate.issuer}</p>}
                  {certificate.date && <p className="text-xs text-muted-foreground">{certificate.date}</p>}
                  {certificate.credentialId && (
                    <p className="text-xs text-muted-foreground">ID: {certificate.credentialId}</p>
                  )}
                  {certificate.description && (
                    <p className="text-xs leading-relaxed text-muted-foreground">{certificate.description}</p>
                  )}
                </div>
              </div>
              {certificate.link && (
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`View ${certificate.name} on LinkedIn`}
                  className="grid h-8 w-8 place-items-center rounded-full border border-hairline text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  in
                </a>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* Projects */}
      <section className="flex flex-col gap-1.5 hairline-t pt-2.5" aria-labelledby="projects">
        <SectionTitle>
          <span id="projects">Projects.</span>
        </SectionTitle>
        <ol className="flex flex-col gap-3">
          {projects.map((project, index) => (
            <li key={project.id} className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-2">
              <span className="label-caps">0{index + 1}</span>
              <div className="flex min-w-0 gap-2">
                <img
                  src={project.screenshots[0]?.src ?? project.src}
                  alt=""
                  width={project.width}
                  height={project.height}
                  className="h-10 w-10 shrink-0 rounded-md object-cover"
                />
                <div className="min-w-0">
                <p className="text-sm font-medium">{project.title}</p>
                <p className="text-xs leading-relaxed text-muted-foreground">{project.summary}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Contact */}
      <footer id="contact" className="flex flex-col gap-1.5 hairline-t pt-2.5">
        <SectionTitle>Reach out.</SectionTitle>
        <ul className="flex flex-col gap-2">
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-12 items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              {profile.email}
            </a>
          </li>
          <li>
            <a
              href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
              className="inline-flex min-h-12 items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              {profile.phone}
            </a>
          </li>
          <li className="inline-flex min-h-12 items-center gap-3 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
            {profile.location}
          </li>
        </ul>
        <ul className="flex flex-wrap gap-2">
          {socials.map((s) => (
            <li key={s.name}>
              <a
                href={s.link}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-12 items-center gap-1.5 rounded-full border border-hairline bg-surface px-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {s.name}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
        <p className="label-caps">
          © {year} {profile.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
