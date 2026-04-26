"use client";

import { motion } from "framer-motion";
import { sectionItemVariants } from "@/features/shared/config/animations.config";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Heading } from "@/components/shared/Heading";



/**
 * ConcursoHeader — Text content part of the concurso section.
 */
export function ConcursoHeader({ label, titulo, subtitulo, texto, cta }) {
  return (
    <div className="lg:col-span-5 flex flex-col items-start order-2 lg:order-1">
      <SectionLabel
        label={label}
        variant="herofore"
        animate
        className="mb-6"
      />


      <Heading
        as="h2"
        variant="section"
        animate
        id="concurso-heading"
        className="text-foreground mb-4"
      >
        {titulo}
      </Heading>

      <Heading
        as="h3"
        variant="subsection"
        animate
        className="text-secondary/80 mb-8"
      >
        {subtitulo}
      </Heading>


      <motion.p
        variants={sectionItemVariants}
        className="text-base md:text-lg text-foreground/60  leading-relaxed mb-10 max-w-xl"
      >
        {texto}
      </motion.p>
    </div>
  );
}
