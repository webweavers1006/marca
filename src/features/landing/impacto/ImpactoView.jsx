"use client";

import { motion } from "framer-motion";
import { IMPACTO_CONTENT, IMPACT_STATS } from "./config/impacto.content.config";
import {
  sectionContainerVariants,
  sectionItemVariants,
} from "@/features/shared/config/animations.config";
import { SectionLabel } from "@/components/shared/SectionLabel";


/**
 * ImpactoView — "El Impacto en Números" dark inverted section.
 * 4-stat grid with monumental editorial numbers.
 */
export function ImpactoView() {
  const { label, sectionId } = IMPACTO_CONTENT;

  return (
    <section id={sectionId} className="bg-foreground" aria-label={label}>
      <div className="section-inner">
        {/* Eyebrow */}
        <SectionLabel
          label={label}
          variant="inverse"
          animate
          className="mb-16"
        />


        {/* Stats grid */}
        <motion.div
          variants={sectionContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-foreground-inverse/10"
        >
          {IMPACT_STATS.map((stat) => (
            <motion.div
              key={stat.id}
              variants={sectionItemVariants}
              className="p-8 md:p-12"
            >
              <p className="font-bold text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-foreground-inverse mb-4 tracking-tighter">
                {stat.numero}
              </p>
              <p className="text-sm text-muted-inverse  leading-snug">
                {stat.descripcion}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
