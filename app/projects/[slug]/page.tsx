import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { DisabledLink } from "@/components/ui/disabled-link";
import { ProjectVisual } from "@/components/projects/project-visual";
import { getProjectBySlug, portfolio, projects } from "@/constants/portfolio";
import { getSiteUrl } from "@/utils/site-url";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: `Project Not Found | ${portfolio.name}`
    };
  }

  return {
    title: `${project.title} | ${portfolio.name}`,
    ...(getSiteUrl() ? { alternates: { canonical: `/projects/${project.slug}` } } : {}),
    description: project.businessValue
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const Icon = project.icon;

  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-6xl px-5 py-8 md:px-8 md:py-12">
        <Link href="/#projects" className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-medium text-muted transition hover:text-accent">
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to projects
        </Link>

        <section className="grid gap-8 py-12 lg:grid-cols-[1fr_18rem] lg:gap-12">
          <div>
            <div className="flex size-12 items-center justify-center rounded-md border border-line bg-white/5 text-accent">
              <Icon className="size-6" aria-hidden="true" />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent">{project.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">{project.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{project.overview}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {project.links.map((link) =>
                link.href ? (
                  <ButtonLink
                    key={link.label}
                    href={link.href}
                    variant={link.label.includes("GitHub") ? "secondary" : "primary"}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {link.label.includes("GitHub") ? <Github className="size-4" aria-hidden="true" /> : <ExternalLink className="size-4" aria-hidden="true" />}
                    {link.label}
                  </ButtonLink>
                ) : (
                  <DisabledLink key={link.label} reason={link.disabledReason}>
                    {link.label.includes("GitHub") ? <Github className="size-4" aria-hidden="true" /> : <ExternalLink className="size-4" aria-hidden="true" />}
                    {link.label}
                  </DisabledLink>
                )
              )}
            </div>
          </div>

          <aside className="h-fit rounded-lg border border-line bg-panel/70 p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">Tech Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-md bg-white/[0.06] px-3 py-1.5 text-sm text-steel">
                  {tech}
                </span>
              ))}
            </div>
          </aside>
        </section>

        <section className="grid gap-5 md:grid-cols-2" aria-label="Project screenshots">
          {project.screenshots.map((item) => (
            <ProjectVisual key={item.title} item={item} />
          ))}
        </section>

        <section className="grid gap-5 py-12 md:grid-cols-2">
          {[
            ["My Role", project.role],
            ["Challenges", project.challenge],
            ["Solution", project.solution]
          ].map(([title, body]) => (
            <article key={title} className="rounded-lg border border-line bg-panel/70 p-6">
              <h2 className="text-lg font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{body}</p>
            </article>
          ))}
          <article className="rounded-lg border border-line bg-panel/70 p-6">
            <h2 className="text-lg font-semibold text-white">Results</h2>
            <ul className="mt-3 space-y-3">
              {project.results.map((result) => (
                <li key={result} className="text-sm leading-7 text-muted">
                  <span className="mr-2 text-accent">+</span>
                  {result}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="rounded-lg border border-line bg-panel/70 p-6">
          <h2 className="text-lg font-semibold text-white">Implementation Notes</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {project.details.map((detail) => (
              <p key={detail} className="rounded-md border border-line bg-white/[0.03] p-4 text-sm leading-6 text-muted">
                {detail}
              </p>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
