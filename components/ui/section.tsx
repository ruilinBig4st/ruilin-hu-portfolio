"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "@/animations/variants";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-14 md:py-20" aria-labelledby={`${id}-title`}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        <h2 id={`${id}-title`} className="mt-3 text-2xl font-semibold text-white md:text-3xl">
          {title}
        </h2>
      </motion.div>
      <div className="mt-8">{children}</div>
    </section>
  );
}
