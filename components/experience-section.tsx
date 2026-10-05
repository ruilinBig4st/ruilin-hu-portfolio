"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { portfolio } from "@/lib/portfolio-data";
import { fadeUp, staggerContainer } from "@/animations/variants";

export function ExperienceSection() {
  return (
    <Section id="experience" eyebrow="Experience" title="Business-facing roles translated into analytical impact.">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer} className="space-y-5">
        {portfolio.experience.map((item) => {
          const Icon = item.icon;
          return (
            <motion.article variants={fadeUp} key={`${item.company}-${item.role}`} className="rounded-lg border border-line bg-panel/70 p-6 transition hover:border-accent/60">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-md border border-line bg-white/5 text-accent">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                    <p className="mt-1 text-sm text-muted">{item.company}</p>
                  </div>
                </div>
                <p className="rounded-md border border-line px-3 py-1 text-xs font-medium text-muted">{item.period}</p>
              </div>
              <ul className="mt-5 space-y-3">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="text-sm leading-6 text-muted">
                    <span className="mr-2 text-accent">+</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </motion.div>
    </Section>
  );
}
