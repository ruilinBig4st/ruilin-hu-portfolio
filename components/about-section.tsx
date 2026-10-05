"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/section";
import { portfolio } from "@/lib/portfolio-data";
import { fadeUp, staggerContainer } from "@/animations/variants";

export function AboutSection() {
  return (
    <Section id="about" eyebrow="About" title="Analytical training with business context.">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer} className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={fadeUp} className="rounded-lg border border-line bg-panel/70 p-6">
          <p className="text-base leading-8 text-muted">{portfolio.summary}</p>
          <ul className="mt-6 space-y-4">
            {portfolio.strengths.map((strength) => (
              <li key={strength} className="flex gap-3 text-sm leading-6 text-steel">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <div className="space-y-4">
          {portfolio.education.map((item) => (
            <motion.article variants={fadeUp} key={item.school} className="rounded-lg border border-line bg-white/[0.03] p-5">
              <h3 className="font-semibold text-white">{item.school}</h3>
              <p className="mt-1 text-sm font-medium text-accent">{item.degree}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
