"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/types/portfolio";
import { fadeUp } from "@/animations/variants";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = project.icon;

  return (
    <motion.article variants={fadeUp} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 260, damping: 22 }} className="h-full">
      <Link
        href={`/projects/${project.slug}`}
        className="focus-ring group flex h-full flex-col rounded-lg border border-line bg-panel/70 p-6 shadow-glow transition hover:border-accent/60"
        aria-label={`View project details for ${project.title}`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex size-11 items-center justify-center rounded-md border border-line bg-white/5 text-accent transition group-hover:border-accent/50">
            <Icon className="size-5" aria-hidden="true" />
          </div>
          <div className="inline-flex size-10 items-center justify-center rounded-md text-muted transition group-hover:bg-white/5 group-hover:text-accent">
            <ArrowUpRight className="size-5" aria-hidden="true" />
          </div>
        </div>
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{project.eyebrow}</p>
        <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted">{project.businessValue}</p>
        <ul className="mt-5 space-y-2">
          {project.highlights.slice(0, 2).map((highlight) => (
            <li key={highlight} className="text-sm leading-6 text-steel">
              <span className="mr-2 text-accent">-</span>
              {highlight}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.stack.slice(0, 5).map((tech) => (
            <span key={tech} className="rounded-md border border-line bg-white/[0.03] px-3 py-1 text-xs font-medium text-muted">
              {tech}
            </span>
          ))}
        </div>
      </Link>
    </motion.article>
  );
}
