"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { JURADO_CONTENT } from "./config/jurado.content.config";
import { JURADO_CONFIG } from "./config/jurado.config";
import { JuradoHeader } from "./components/JuradoHeader";
import { JuradoGroupList } from "./components/JuradoGroupList";
import { BRAND_THEMES } from "@/features/shared/config/theme.config";
import { sectionContainerVariants } from "@/features/shared/config/animations.config";
import { useSectionObserver } from "@/features/shared/hooks/use-section-observer";
import { AccentCharacter } from "@/components/shared/AccentCharacter";

const MODULE_THEME = BRAND_THEMES[4]; // Theme 4 is quinary (green)

/**
 * JuradoView — "Los Rostros del Proceso" two-column editorial layout.
 * Jurado Especializado | Veedores del Concurso.
 */
export function JuradoView() {
  const { label, sectionId, titulo, tituloHighlight, subtitulo } = JURADO_CONTENT;
  const sectionRef = useSectionObserver("/#" + sectionId, { threshold: 0.3 });

  return (
    <section
      id={sectionId}
      ref={sectionRef}
      className={`${!JURADO_CONFIG.background.enabled ? MODULE_THEME.bg : "bg-background"} relative overflow-hidden text-foreground-inverse`}
      aria-labelledby="jurado-heading"
    >
      {/* Optional Background Image */}
      {JURADO_CONFIG.background.enabled && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src={JURADO_CONFIG.background.src}
            alt="Fondo Jurado"
            fill
            className="object-cover object-center"
            priority={false}
          />
          {/* Brand color overlay for consistency and legibility */}
          <div className={`absolute inset-0 ${MODULE_THEME.bg} ${JURADO_CONFIG.background.overlayClass}`} />
        </div>
      )}

      {/* Decorative Brand Accent (Ghost text watermark) */}
      <AccentCharacter
        char={JURADO_CONFIG.decorative.accentChar}
        className="top-[10%] left-0 translate-x-[15%] opacity-10"
      />

      {/* Decorative circles (ambient identity) at section level */}
      {JURADO_CONFIG.decorative.circles.map((circle, idx) => (
        <div key={idx} className={circle.className} aria-hidden="true" />
      ))}

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr]">
          {/* Left panel: Group List */}
          <div className="relative p-10 md:p-14 lg:p-16 xl:p-20 lg:pr-10 xl:pr-12 min-h-[400px] lg:min-h-[460px] flex flex-col justify-center order-2 lg:order-1">
            <JuradoGroupList theme={MODULE_THEME} />
          </div>

          {/* Right panel: Header (aligned right) */}
          <div className="relative p-10 md:p-14 lg:p-16 xl:p-20 lg:pl-10 xl:pl-12 flex flex-col justify-center order-1 lg:order-2">
            <JuradoHeader
              label={label}
              titulo={titulo}
              tituloHighlight={tituloHighlight}
              subtitulo={subtitulo}
              theme={MODULE_THEME}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
