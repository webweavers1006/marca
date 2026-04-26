"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

/**
 * FasesCarouselControls — Atomic component for navigation buttons.
 * Responsibility: UI for manual carousel control.
 *
 * @param {{ onPrev: function, onNext: function }} props
 */
export function FasesCarouselControls({ onPrev, onNext }) {
  return (
    <div className="absolute -bottom-6 right-8 flex items-center shadow-xl z-20">
      <button
        onClick={onPrev}
        className="p-4 bg-secondary text-foreground-inverse hover:bg-secondary transition-colors rounded-l-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-label="Fase anterior"
      >
        <ArrowLeft size={20} />
      </button>
      <button
        onClick={onNext}
        className="p-4 bg-secondary border-l border-foreground-inverse/10 text-foreground-inverse hover:bg-secondary transition-colors rounded-r-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-label="Siguiente fase"
      >
        <ArrowRight size={20} />
      </button>
    </div>
  );
}
