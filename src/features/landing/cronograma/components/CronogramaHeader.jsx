"use client";

import { motion } from "framer-motion";
import { sectionContainerVariants } from "@/features/shared/config/animations.config";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Heading } from "@/components/shared/Heading";

/**
 * CronogramaHeader — Section eyebrow, main title, and subtitle.
 *
 * @param {object} props
 * @param {string} props.label
 * @param {string} props.titulo
 * @param {string} props.tituloHighlight
 * @param {string} props.subtitulo
 * @param {boolean} [props.darkMode] — adapts text colors for dark backgrounds
 */
export function CronogramaHeader({ label, titulo, tituloHighlight, subtitulo, darkMode }) {
  return (
    <motion.div
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="text-center mb-20 max-w-2xl mx-auto"
    >
      <SectionLabel label={label} animate variant="hero" className="mb-6 justify-center" />

      <Heading
        as="h2"
        variant="section"
        align="center"
        animate
        id="cronograma-heading"
        className={darkMode ? "text-foreground-inverse mb-6" : "text-foreground mb-6"}
      >
        {tituloHighlight ? (
          <>
            {titulo.split(tituloHighlight)[0]}
            <span className="text-primary">{tituloHighlight}</span>
            {titulo.split(tituloHighlight)[1]}
          </>
        ) : (
          titulo
        )}
      </Heading>

      <motion.p
        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }}
        className={darkMode ? "text-base md:text-lg text-muted-inverse leading-relaxed" : "text-base md:text-lg text-foreground/55 leading-relaxed"}
      >
        {subtitulo}
      </motion.p>
    </motion.div>
  );
}
