"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { portfolio } from "@/lib/portfolio-data";
import { fadeUp, staggerContainer } from "@/animations/variants";

export function SkillsSection() {
  return (
    <Section id="skills" eyebrow="Skills" title="Core toolkit for data-driven decisions.">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer} className="grid gap-4 sm:grid-cols-2">
        {portfolio.skills.map((group) => {
          const Icon = group.icon;
          return (
            <motion.article variants={fadeUp} key={group.category} className="rounded-lg border border-line bg-panel/70 p-5">
              <div className="flex items-center gap-3">
                <Icon className="size-5 text-accent" aria-hidden="true" />
                <h3 className="font-semibold text-white">{group.category}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-md bg-white/[0.06] px-3 py-1.5 text-sm text-steel">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </Section>
  );
}
