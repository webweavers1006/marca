"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FASES_CONTENT, SELECTION_CYCLES } from "@/features/landing/fases/config/fases.content.config";
import { FASES_VIDEO_CONFIG } from "@/features/landing/fases/config/fases.config";
import { FasesHeader } from "@/features/landing/fases/components/FasesHeader";
import { FasesVideoBackground } from "@/features/landing/fases/components/FasesVideoBackground";


import { FasesActiveCycle } from "@/features/landing/fases/components/FasesActiveCycle";
import { FasesCycleList } from "@/features/landing/fases/components/FasesCycleList";
import { FasesCarouselControls } from "@/features/landing/fases/components/FasesCarouselControls";
import { useFasesCarousel } from "@/features/landing/fases/hooks/useFasesCarousel";

/**
 * FasesView — "Sistema de Selección y Fases" section.
 * Orchestrates the editorial layout, video background, and dynamic carousel.
 */
export function FasesView() {
  const { label, sectionId, titulo } = FASES_CONTENT;
  const { activeCycle, handleNext, handlePrev, goToId } = useFasesCarousel();

  return (
    <section id={sectionId} aria-labelledby="fases-heading" className="relative overflow-hidden py-24">
      {/* ── Background video layer ── */}
      {FASES_VIDEO_CONFIG.enabled && <FasesVideoBackground />}

      {/* ── Content (above video) ── */}
      <div className="section-inner relative z-10 !max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-start">

          {/* Main Content Area (Header + Showcase) */}
          <div className="space-y-12">
            <FasesHeader 
              label={label} 
              titulo={titulo} 
              tituloHighlight={FASES_CONTENT.tituloHighlight} 
            />


            {/* Carousel Area: Focal Card + Controls */}
            <div className="relative group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCycle.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <FasesActiveCycle cycle={activeCycle} />
                </motion.div>
              </AnimatePresence>

              {/* Manual Navigation */}
              <FasesCarouselControls onPrev={handlePrev} onNext={handleNext} />
            </div>
          </div>

          {/* Sidebar Area (Index / Navigation List) */}
          <div className="lg:pt-32">
            <div className="bg-transparent-bg backdrop-blur-md border border-foreground-inverse/10 p-6 rounded-2xl">
              <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-foreground-inverse mb-6 border-b border-foreground-inverse/10 pb-4">
                {FASES_CONTENT.sidebarLabel}
              </p>
              <FasesCycleList
                cycles={SELECTION_CYCLES}
                currentCycleId={activeCycle.id}
                onSelect={goToId}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
