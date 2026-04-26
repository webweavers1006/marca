"use client";

import { motion } from "framer-motion";
import { CONCURSO_CONTENT } from "./config/concurso.content.config";
import { sectionContainerVariants } from "@/features/shared/config/animations.config";
import { ConcursoHeader } from "./components/ConcursoHeader";
import { ConcursoMainImage } from "./components/ConcursoMainImage";
import { ConcursoGrid } from "./components/ConcursoGrid";

/**
 * ConcursoView — orchestrates the "El Concurso" section.
 * Premium layout following the Config-Driven UI pattern.
 * Inspired by the provided design grid.
 */
export function ConcursoView() {
  const { label, sectionId, titulo, subtitulo, texto, cta, images } = CONCURSO_CONTENT;

  return (
    <section 
      id={sectionId} 
      className="bg-background overflow-hidden relative" 
      aria-labelledby="concurso-heading"
    >
      <div className="section-inner">
        <motion.div
          variants={sectionContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-12 md:gap-16 lg:gap-24"
        >
          {/* Top Row: Content + Main Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <ConcursoHeader 
              label={label}
              titulo={titulo}
              subtitulo={subtitulo}
              texto={texto}
              cta={cta}
            />
            <ConcursoMainImage image={images[0]} />
          </div>

          {/* Bottom Row: Image Grid */}
          <ConcursoGrid images={images.slice(1)} />
        </motion.div>
      </div>

      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
