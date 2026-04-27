"use client";

import { motion } from "framer-motion";
import { sectionContainerVariants } from "@/features/shared/config/animations.config";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Heading } from "@/components/shared/Heading";

/**
 * FasesHeader — Text content part of the fases section.
 * Encapsulates the section label and main heading with their respective animations.
 * 
 * @param {object} props
 * @param {string} props.label - Section eyebrow text.
 * @param {string} props.titulo - Main section title.
 * @param {string} [props.tituloHighlight] - Text within the title to highlight with primary color.
 * @param {object} props.theme - The active cycle theme object.
 */
export function FasesHeader({ label, titulo, tituloHighlight, theme }) {
  return (
    <motion.div
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <SectionLabel
        label={label}
        variant="inverse"
        animate
        className="mb-6"
      />


      <Heading
        as="h2"
        variant="section"
        animate
        id="fases-heading"
        className="text-foreground-inverse"
      >
        {tituloHighlight ? (
          <>
            {titulo.split(tituloHighlight)[0]}
            <span className={`${theme?.accentText || theme?.text || "text-primary"} transition-colors duration-500`}>
              {tituloHighlight}
            </span>
            {titulo.split(tituloHighlight)[1]}
          </>
        ) : (
          titulo
        )}
      </Heading>
    </motion.div>
  );
}
