"use client";

import { Layers } from "lucide-react";
import { ACTIVE_CYCLE_CONFIG } from "@/features/landing/fases/config/fases.config";
import { Heading } from "@/components/shared/Heading";


/**
 * FasesActiveCycle — Editorial "Block" style focal card.
 * Refined with standard project borders (rounded-2xl).
 *
 * @param {{ cycle: object }} props
 */
export function FasesActiveCycle({ cycle }) {
  const { badgeLabel } = ACTIVE_CYCLE_CONFIG;

  if (!cycle) return null;

  return (
    <div className="relative flex flex-col md:flex-row items-stretch gap-0 bg-foreground-inverse shadow-2xl rounded-2xl overflow-hidden border border-foreground/10">
      {/* Left Accent: Number and Status (Solid primary block) */}
      <div className="bg-secondary p-8 md:p-12 flex flex-col justify-between items-center md:items-start shrink-0 min-w-[180px]">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.1em] uppercase bg-foreground-inverse text-primary">
          {/* Pulsing live dot */}
          <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping bg-secondary" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-secondary" />
          </span>
          {badgeLabel}
        </div>

        {/* Huge Number */}
        <div className="flex flex-col items-center md:items-start mt-8">
          <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-foreground-inverse/60 mb-2">Ciclo</span>
          <p className="font-black text-7xl md:text-8xl tracking-tighter leading-none text-foreground-inverse select-none">
            {cycle.numero}
          </p>
        </div>
      </div>

      {/* Right Content: Title and Description (Clean white block) */}
      <div className="flex-1 p-8 md:p-12 flex flex-col justify-center bg-foreground-inverse">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-secondary/10 rounded-lg">
            <Layers size={20} className="text-primary" />
          </div>
          <span className="text-xs tracking-[0.2em] uppercase font-bold text-primary">
            Fase de Selección
          </span>
        </div>

        <Heading
          as="h3"
          variant="subsection"
          className="text-foreground mb-6"
        >
          {cycle.titulo}
        </Heading>


        {cycle.descripcion && (
          <p className="text-base md:text-lg text-foreground/70  leading-relaxed max-w-2xl border-l-2 border-primary/20 pl-6">
            {cycle.descripcion}
          </p>
        )}
      </div>
    </div>
  );
}
