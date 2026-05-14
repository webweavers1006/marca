"use client";

import { motion } from "framer-motion";
import { CONCURSO_CONTENT } from "./config/concurso.content.config";
import { CONCURSO_CONFIG } from "./config/concurso.config";
import { BRAND_THEMES } from "@/features/shared/config/theme.config";
import { sectionContainerVariants } from "@/features/shared/config/animations.config";
import { useSectionObserver } from "@/features/shared/hooks/use-section-observer";

import { ConcursoPremio } from "./components/ConcursoPremio";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SectionDescription } from "@/components/shared/SectionDescription";
import { AccentCharacter } from "@/components/shared/AccentCharacter";
import { DecorativeCircles } from "@/components/shared/DecorativeCircles";
import { SectionBackground } from "@/components/shared/SectionBackground";
import { Container } from "@/components/shared/Container";

const MODULE_THEME = BRAND_THEMES[1];

/**
 * ConcursoView — "El Concurso" section.
 * Dark variant, Teal theme. Custom editorial split layout:
 * Premio card as visual anchor (left), editorial text (right).
 */
export function ConcursoView() {
  const { sectionId, label, titulo, subtitulo, texto, backgroundAlt } = CONCURSO_CONTENT;
  const { decorative, background, premioLogo, variant } = CONCURSO_CONFIG;
  const sectionRef = useSectionObserver("/#" + sectionId, { threshold: 0.3 });

  return (
    <section
      id={sectionId}
      ref={sectionRef}
      className={`${!background.enabled ? MODULE_THEME.bg : "bg-background"} relative overflow-hidden text-foreground-inverse`}
      aria-labelledby="concurso-heading"
    >
      {/* Background Image */}
      <SectionBackground
        src={background.src}
        alt={backgroundAlt}
        themeBg={MODULE_THEME.bg}
        overlayClass={background.overlayClass}
        enabled={background.enabled}
      />

      {/* Decorative Brand Accent */}
      <AccentCharacter
        char={decorative.accentChar}
        className="top-[10%] right-0 translate-x-[20%] opacity-15"
      />

      {/* Decorative circles */}
      <DecorativeCircles circles={decorative.circles} />

      <Container>
        <motion.div
          variants={sectionContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative z-10 w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-10 lg:gap-20 py-16 md:py-20 lg:py-24">

            {/* LEFT: Impact Card — Premio as visual anchor (desktop left, mobile bottom) */}
   
              <ConcursoPremio
                premio={CONCURSO_CONTENT.premio}
                premioLogo={premioLogo}
                theme={MODULE_THEME}
              />


            {/* RIGHT: Editorial — Header + Description (desktop right, mobile top) */}
            <div className="flex flex-col justify-center gap-10 order-1 lg:order-2">
              <SectionHeader
                label={label}
                title={titulo}
                theme={MODULE_THEME}
                variant={variant}
                align="right"
                animate={false}
                id="concurso-heading"
              />
              <SectionDescription
                variant={variant}
                animate
                align="left"
                maxWidth="max-w-none"
              >
                {texto}
              </SectionDescription>
            </div>

          </div>
        </motion.div>
      </Container>
    </section>
  );
}

