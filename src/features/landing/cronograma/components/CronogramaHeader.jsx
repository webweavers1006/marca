"use client";

import { motion } from "framer-motion";
import { sectionContainerVariants } from "@/features/shared/config/animations.config";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Heading } from "@/components/shared/Heading";

/**
 * CronogramaHeader — Section eyebrow, main title, and subtitle.
 */
export function CronogramaHeader({ label, titulo, tituloHighlight, subtitulo, theme }) {
  return (
    <motion.div
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-2xl text-left"
    >
      <SectionLabel label={label} variant="inverse" className="mb-6" />

      <Heading
        as="h2"
        variant="section"
        align="left"
        animate
        id="cronograma-heading"
        className="text-foreground-inverse mb-6"
      >
        {tituloHighlight ? (
          <>
            {titulo.split(tituloHighlight)[0]}
            <span className={`font-bold ${theme.accentText || ""}`}>{tituloHighlight}</span>
            {titulo.split(tituloHighlight)[1]}
          </>
        ) : (
          titulo
        )}
      </Heading>

      <motion.p
        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }}
        className="text-base md:text-lg text-foreground-inverse/80 leading-relaxed"
      >
        {subtitulo}
      </motion.p>
    </motion.div>
  );
}
