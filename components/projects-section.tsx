"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { ProjectCard } from "@/components/projects/project-card";
import { portfolio } from "@/lib/portfolio-data";
import { staggerContainer } from "@/animations/variants";

export function ProjectsSection() {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work with business value first.">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer} className="grid gap-5 md:grid-cols-2">
        {portfolio.projects.map((project) => {
          return (
            <ProjectCard key={project.slug} project={project} />
          );
        })}
      </motion.div>
    </Section>
  );
}
