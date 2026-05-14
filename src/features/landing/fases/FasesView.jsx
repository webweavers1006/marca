"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FASES_CONTENT, SELECTION_CYCLES } from "@/features/landing/fases/config/fases.content.config";
import { FASES_CONFIG } from "@/features/landing/fases/config/fases.config";
import { BRAND_THEMES } from "@/features/shared/config/theme.config";
import { sectionContainerVariants } from "@/features/shared/config/animations.config";
import { FasesActiveCycle } from "@/features/landing/fases/components/FasesActiveCycle";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FasesCycleList } from "@/features/landing/fases/components/FasesCycleList";
import { FasesCarouselControls } from "@/features/landing/fases/components/FasesCarouselControls";
import { useFasesCarousel } from "@/features/landing/fases/hooks/useFasesCarousel";
import { useSectionObserver } from "@/features/shared/hooks/use-section-observer";
import { AccentCharacter } from "@/components/shared/AccentCharacter";
import { DecorativeCircles } from "@/components/shared/DecorativeCircles";
import { SectionBackground } from "@/components/shared/SectionBackground";

/** Fases module brand color — quaternary (purple) is fixed for this section */
const MODULE_THEME = BRAND_THEMES[3];

/**
 * FasesView — "Sistema de Selección y Fases" section.
 * Config-driven organic layout matching the Construcción Identitaria brand guidelines.
 */
export function FasesView() {
  const { label, sectionId, titulo, tituloHighlight } = FASES_CONTENT;
  const { activeCycle, handleNext, handlePrev, goToId } = useFasesCarousel();
  const sectionRef = useSectionObserver("/#" + sectionId, { threshold: 0.3 });

  return (
    <section id={sectionId} ref={sectionRef} aria-labelledby="fases-heading" className={`relative overflow-hidden ${MODULE_THEME.bg} text-foreground-inverse`}>
      {/* Background layer — video with lazy loading */}
      <SectionBackground
        type="video"
        src={FASES_CONFIG.background.src}
        themeBg={MODULE_THEME.bg}
        overlayClass={FASES_CONFIG.background.overlayClass}
        videoProps={{
          lazyOffset: FASES_CONFIG.background.lazyOffset,
          ariaLabel: FASES_CONFIG.background.ariaLabel,
        }}
        enabled={FASES_CONFIG.background.enabled}
      />

      {/* Decorative Brand Accent (Ghost text watermark) */}
      <AccentCharacter
        char={FASES_CONFIG.decorative.accentChar}
        className="bottom-0 -left-[15%] translate-x-[15%] opacity-10"
      />

      {/* Decorative circles */}
      <DecorativeCircles circles={FASES_CONFIG.decorative.circles} />

      {/* Content (above background) */}
      <motion.div
        variants={sectionContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr]">

          {/* Left panel: Active Showcase */}
          <div className="relative p-6 md:p-8 lg:p-10 xl:p-12 lg:pr-6 xl:pr-8 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-foreground-inverse/10">
            <div className="relative group w-full flex flex-col items-start h-full justify-center">
              <div className="w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCycle.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <FasesActiveCycle cycle={activeCycle} theme={MODULE_THEME} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Manual Navigation */}
              <div className="mt-6">
                <FasesCarouselControls onPrev={handlePrev} onNext={handleNext} theme={MODULE_THEME} />
              </div>
            </div>
          </div>

          {/* Right panel: Header & Navigation List */}
          <div className="relative p-6 md:p-8 lg:p-10 xl:p-12 lg:pl-6 xl:pl-8 flex flex-col justify-start bg-foreground-inverse/5">
            {/* Header */}
            <div className="mb-6">
              <SectionHeader
                label={label}
                title={titulo}
                highlights={tituloHighlight ? [tituloHighlight] : []}
                theme={MODULE_THEME}
                variant="dark"
                animate={false}
                id="fases-heading"
              />
            </div>

            {/* Sidebar Navigation */}
            <div className="flex flex-col">
              <p className={`text-[10px] tracking-[0.2em] uppercase font-bold mb-4 border-b border-foreground-inverse/20 pb-3 ${MODULE_THEME.accentText || "text-foreground-inverse"}`}>
                {FASES_CONTENT.sidebarLabel || "Fases"}
              </p>
              <FasesCycleList
                cycles={SELECTION_CYCLES}
                currentCycleId={activeCycle.id}
                onSelect={goToId}
                theme={MODULE_THEME}
              />
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
