"use client";

import { motion } from "framer-motion";
import { sectionItemVariants } from "@/features/shared/config/animations.config";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Heading } from "@/components/shared/Heading";

/**
 * ConcursoHeader — Text content header for the concurso section.
 * Adapted to the editorial style (white text over brand color block).
 */
export function ConcursoHeader({ label, titulo, texto, theme }) {
  return (
    <div className="relative z-10 flex flex-col justify-between h-full">
      <div className="flex flex-col gap-6">
        <SectionLabel label={label} variant="inverse" />
        <Heading
          as="h2"
          variant="section"
          id="concurso-heading"
          className="text-foreground-inverse leading-[1.1] py-1 uppercase z-20"
        >
          {titulo}
        </Heading>
      </div>

      <motion.p
        variants={sectionItemVariants}
        className="text-foreground-inverse/80 text-base md:text-lg leading-relaxed max-w-md mt-10 lg:mt-0"
      >
        {texto}
      </motion.p>
    </div>
  );
}
