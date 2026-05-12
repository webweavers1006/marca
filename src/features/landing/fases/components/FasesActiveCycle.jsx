"use client";

import { Layers } from "lucide-react";
import { ACTIVE_CYCLE_CONFIG } from "@/features/landing/fases/config/fases.config";
import { Heading } from "@/components/shared/Heading";

/**
 * FasesActiveCycle — Editorial "Block" style focal card.
 * Vertical layout optimized for side-by-side grid panels.
 */
export function FasesActiveCycle({ cycle, theme }) {
  const { badgeLabel } = ACTIVE_CYCLE_CONFIG;

  if (!cycle) return null;

  const accentClass = theme?.accentText || "text-foreground-inverse";

  return (
    <div className="relative flex flex-col items-start gap-4 pb-6">
      {/* Top: Status & Huge Number */}
      <div className="flex flex-col justify-start w-full">
        <div className="flex items-center justify-between w-full mb-4">
           {/* Status badge */}
          <div className={`inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.1em] uppercase ${accentClass}`}>
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping bg-current`} />
              <span className={`relative inline-flex rounded-full h-1.5 w-1.5 bg-current`} />
            </span>
            {badgeLabel}
          </div>
          
          {/* Phase indicator */}
          <div className="flex items-center gap-2 opacity-60">
            <Layers size={16} className={accentClass} />
            <span className={`text-[10px] tracking-[0.2em] uppercase font-bold ${accentClass}`}>
              Fase de Selección
            </span>
          </div>
        </div>

        {/* Huge Number */}
        <div className="flex items-baseline gap-4 border-b border-foreground-inverse/10 pb-4 w-full">
          <span className={`text-xs tracking-[0.2em] uppercase font-bold text-foreground-inverse/60`}>Ciclo</span>
          <p className={`font-black text-5xl md:text-6xl tracking-tighter leading-none text-foreground-inverse select-none`}>
            {cycle.numero}
          </p>
        </div>
      </div>

      {/* Bottom: Title and Description */}
      <div className="flex flex-col justify-center w-full">
        <Heading
          as="h3"
          variant="subsection"
          className="text-foreground-inverse mb-3 text-xl md:text-2xl"
        >
          {cycle.titulo}
        </Heading>

        {cycle.descripcion && (
          <p className="text-sm md:text-base text-foreground-inverse/80 leading-relaxed font-medium">
            {cycle.descripcion}
          </p>
        )}
      </div>
    </div>
  );
}
