"use client";

import { motion } from "framer-motion";
import { CRONOGRAMA_CONTENT } from "./config/cronograma.content.config";
import { CRONOGRAMA_CONFIG } from "./config/cronograma.config";
import { MilestonePath } from "./components/MilestonePath";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SectionLayout } from "@/components/shared/SectionLayout";
import { BRAND_THEMES } from "@/features/shared/config/theme.config";
import { AccentCharacter } from "@/components/shared/AccentCharacter";
import { DecorativeCircles } from "@/components/shared/DecorativeCircles";
import { SectionBackground } from "@/components/shared/SectionBackground";
import { Container } from "@/components/shared/Container";
import { sectionContainerVariants } from "@/features/shared/config/animations.config";
import { useSectionObserver } from "@/features/shared/hooks/use-section-observer";

const MODULE_THEME = BRAND_THEMES[2]; // Theme 2 is senary (orange)

/**
 * CronogramaView — Serpentine milestones timeline section.
 * Config-driven organic layout matching the Construcción Identitaria brand guidelines.
 */
export function CronogramaView() {
  const { label, sectionId, titulo, tituloHighlight, subtitulo, backgroundAlt } = CRONOGRAMA_CONTENT;
  const sectionRef = useSectionObserver("/#" + sectionId, { threshold: 0.3 });

  return (
    <section
      id={sectionId}
      ref={sectionRef}
      aria-labelledby="cronograma-heading"
      className={`${!CRONOGRAMA_CONFIG.background.enabled ? MODULE_THEME.bg : "bg-background"} relative overflow-hidden text-foreground-inverse`}
    >
      {/* Optional Background Image */}
      <SectionBackground
        src={CRONOGRAMA_CONFIG.background.src}
        alt={backgroundAlt}
        themeBg={MODULE_THEME.bg}
        overlayClass={CRONOGRAMA_CONFIG.background.overlayClass}
        enabled={CRONOGRAMA_CONFIG.background.enabled}
      />

      {/* Decorative Brand Accent (Ghost text watermark) */}
      <AccentCharacter
        char={CRONOGRAMA_CONFIG.decorative.accentChar}
        className="bottom-[0%] -right-[87%] translate-x-[15%] opacity-10"
      />

      {/* Decorative circles */}
      <DecorativeCircles circles={CRONOGRAMA_CONFIG.decorative.circles} />

      <Container>
        <motion.div
          variants={sectionContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative z-10 w-full"
        >
          <SectionLayout
            layout="left"
            gridCols="lg:grid-cols-[45fr_55fr]"
            header={
              <SectionHeader
                label={label}
                title={titulo}
                highlights={tituloHighlight ? [tituloHighlight] : []}
                subtitle={subtitulo}
                theme={MODULE_THEME}
                variant="dark"
                animate={false}
                id="cronograma-heading"
              />
            }
          >
            <MilestonePath theme={MODULE_THEME} />
          </SectionLayout>
        </motion.div>
      </Container>
    </section>
  );
}

