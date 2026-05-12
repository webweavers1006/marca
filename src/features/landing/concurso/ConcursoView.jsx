"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CONCURSO_CONTENT } from "./config/concurso.content.config";
import { CONCURSO_CONFIG } from "./config/concurso.config";
import { BRAND_THEMES } from "@/features/shared/config/theme.config";
import { sectionContainerVariants } from "@/features/shared/config/animations.config";
import { useSectionObserver } from "@/features/shared/hooks/use-section-observer";

import { ConcursoHeader } from "./components/ConcursoHeader";
import { ConcursoPremio } from "./components/ConcursoPremio";
import { AccentCharacter } from "@/components/shared/AccentCharacter";

const MODULE_THEME = BRAND_THEMES[1];

/**
 * ConcursoView — "El Concurso" section.
 * Layout adheres to full-bleed editorial aesthetic, fully orchestrated 
 * here in the view without wrapper blocks.
 */
export function ConcursoView() {
  const { sectionId, label, titulo, texto, images } = CONCURSO_CONTENT;
  const sectionRef = useSectionObserver("/#" + sectionId, { threshold: 0.3 });

  // Orchestrate layout imagery from the config array

  return (
    <section
      id={sectionId}
      ref={sectionRef}
      className={`${!CONCURSO_CONFIG.background.enabled ? MODULE_THEME.bg : "bg-background"} relative overflow-hidden`}
      aria-labelledby="concurso-heading"
    >
      {/* Fondo de Imagen opcional */}
      {CONCURSO_CONFIG.background.enabled && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src={CONCURSO_CONFIG.background.src}
            alt="Fondo Concurso"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay del color de la marca para mantener consistencia y legibilidad */}
          <div className={`absolute inset-0 ${MODULE_THEME.bg} ${CONCURSO_CONFIG.background.overlayClass}`} />
        </div>
      )}

      {/* Decorative Brand Accent (Ghost text watermark) */}
      <AccentCharacter
        char={CONCURSO_CONFIG.decorative.accentChar}
        className="top-[10%] right-0 translate-x-[20%] opacity-15 "
      />

      {/* Decorative circles (ambient identity) at section level */}
      {CONCURSO_CONFIG.decorative.circles.map((circle, idx) => (
        <div key={idx} className={circle.className} aria-hidden="true" />
      ))}

      <motion.div
        variants={sectionContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-10"
      >
        {/* ── ROW 1: Header content (left) + Prize info (right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-foreground-inverse/10">

          <div className="relative p-10 md:p-14 lg:p-16 xl:p-20 min-h-[400px] lg:min-h-[460px] flex flex-col justify-between">
            <ConcursoHeader
              label={label}
              titulo={titulo}
              texto={texto}
              theme={MODULE_THEME}
            />
          </div>

          {/* Right panel: Prize Information */}
          {/* <ConcursoPremio premio={CONCURSO_CONTENT.premio} theme={MODULE_THEME} /> */}
        </div>

        {/* ── ROW 2: 3-column image strip ── */}
        {/*         <ConcursoImageStrip images={stripImages} theme={MODULE_THEME} /> */}
      </motion.div>
    </section>
  );
}

