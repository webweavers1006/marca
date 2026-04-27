"use client";

import Image from "next/image";
import { CRONOGRAMA_CONTENT } from "./config/cronograma.content.config";
import { CRONOGRAMA_CONFIG } from "./config/cronograma.config";
import { CronogramaHeader } from "./components/CronogramaHeader";
import { MilestonePath } from "./components/MilestonePath";
import { BRAND_THEMES } from "@/features/shared/config/theme.config";
import { AccentCharacter } from "@/components/shared/AccentCharacter";
import { useSectionObserver } from "@/features/shared/hooks/use-section-observer";

const MODULE_THEME = BRAND_THEMES[2]; // Theme 2 is tertiary (magenta)

/**
 * CronogramaView — Serpentine milestones timeline section.
 * Config-driven organic layout matching the Constuccion Identitaria brand guidelines.
 */
export function CronogramaView() {
  const { label, sectionId, titulo, tituloHighlight, subtitulo } = CRONOGRAMA_CONTENT;
  const sectionRef = useSectionObserver("/#" + sectionId, { threshold: 0.3 });

  return (
    <section
      id={sectionId}
      ref={sectionRef}
      aria-labelledby="cronograma-heading"
      className={`${!CRONOGRAMA_CONFIG.background.enabled ? MODULE_THEME.bg : "bg-background"} relative overflow-hidden text-foreground-inverse`}
    >
      {/* Optional Background Image */}
      {CRONOGRAMA_CONFIG.background.enabled && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src={CRONOGRAMA_CONFIG.background.src}
            alt="Fondo Cronograma"
            fill
            className="object-cover object-center"
            priority={false}
          />
          {/* Brand color overlay for consistency and legibility */}
          <div className={`absolute inset-0 ${MODULE_THEME.bg} ${CRONOGRAMA_CONFIG.background.overlayClass}`} />
        </div>
      )}

      {/* Decorative Brand Accent (Ghost text watermark) */}
      <AccentCharacter
        char={CRONOGRAMA_CONFIG.decorative.accentChar}
        className="bottom-[0%] -right-[87%] translate-x-[15%] opacity-10"
      />

      {/* Decorative circles (ambient identity) at section level */}
      {CRONOGRAMA_CONFIG.decorative.circles.map((circle, idx) => (
        <div key={idx} className={circle.className} aria-hidden="true" />
      ))}

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr]">
          {/* Left panel: Header */}
          <div className="relative p-10 md:p-14 lg:p-16 xl:p-20 lg:pr-10 xl:pr-12 flex flex-col justify-center">
            <CronogramaHeader
              label={label}
              titulo={titulo}
              tituloHighlight={tituloHighlight}
              subtitulo={subtitulo}
              theme={MODULE_THEME}
            />
          </div>

          {/* Right panel: Timeline */}
          <div className="relative p-10 md:p-14 lg:p-16 xl:p-20 lg:pl-10 xl:pl-12 flex flex-col justify-center">
            <MilestonePath theme={MODULE_THEME} />
          </div>
        </div>
      </div>
    </section>
  );
}

