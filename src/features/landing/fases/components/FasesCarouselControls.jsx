"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { CAROUSEL_CONTROLS_CONFIG } from "@/features/landing/fases/config/fases.config";

/**
 * FasesCarouselControls — Navigation buttons for the fases carousel.
 * Uses the fixed module theme (tertiary/magenta) for button background.
 *
 * @param {{ onPrev: function, onNext: function, theme: object }} props
 */
export function FasesCarouselControls({ onPrev, onNext, theme }) {
  return (
    <div className="absolute -bottom-5 right-6 flex items-center shadow-xl z-20">
      <button
        onClick={onPrev}
        className={`p-3 ${theme.bg} text-foreground-inverse hover:brightness-110 transition-all duration-300 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-tertiary/50`}
        aria-label={CAROUSEL_CONTROLS_CONFIG.prevLabel}
      >
        <ArrowLeft size={18} />
      </button>
      <button
        onClick={onNext}
        className={`p-3 ${theme.bg} border-l border-foreground-inverse/20 text-foreground-inverse hover:brightness-110 transition-all duration-300 rounded-r-xl focus:outline-none focus:ring-2 focus:ring-tertiary/50`}
        aria-label={CAROUSEL_CONTROLS_CONFIG.nextLabel}
      >
        <ArrowRight size={18} />
      </button>
    </div>
  );
}
