"use client";

import { motion } from "framer-motion";
import {
  sectionContainerVariants,
  sectionItemVariants,
} from "@/features/shared/config/animations.config";

/**
 * FasesCycleList — Vertical index list for the editorial layout.
 * Uses the module theme (e.g. tertiary/magenta) for active state highlights.
 *
 * @param {{ cycles: Array, currentCycleId: string, onSelect?: function, theme: object }} props
 */
export function FasesCycleList({ cycles, currentCycleId, onSelect, theme }) {
  const accentClass = theme?.accentText || "text-foreground-inverse";

  return (
    <motion.div
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="flex flex-col"
    >
      {cycles.map((cycle) => {
        const isActive = cycle.id === currentCycleId;

        return (
          <motion.button
            key={cycle.id}
            variants={sectionItemVariants}
            onClick={() => onSelect?.(cycle.id)}
            className={`
              group relative flex items-center gap-3 py-2 border-b border-foreground-inverse/10 last:border-b-0
              transition-all duration-300 text-left w-full
              ${isActive ? "pl-3 opacity-100" : "opacity-60 hover:opacity-100"}
            `}
          >
            {/* Active Indicator Background */}
            {isActive && (
              <motion.div
                layoutId="fases-active-bg"
                className="absolute inset-0 bg-foreground-inverse/5 rounded-md -z-10"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}

            {/* Active Side Line */}
            {isActive && (
              <motion.div
                layoutId="fases-active-line"
                className={`absolute left-0 top-1/4 bottom-1/4 w-[2px] ${theme.bg}`}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}

            {/* Number Block */}
            <div className={`
              flex flex-col items-center justify-center w-6 shrink-0
              transition-colors
            `}>
              <span className={`text-[9px] font-black tracking-widest ${isActive ? accentClass : "text-foreground-inverse/50"}`}>
                Nº
              </span>
              <span className={`text-base font-black leading-none ${isActive ? "text-foreground-inverse" : "text-foreground-inverse/50"}`}>
                {cycle.numero}
              </span>
            </div>

            {/* Title */}
            <p className={`
              text-xs font-bold leading-tight flex-1
              ${isActive ? "text-foreground-inverse" : "text-foreground-inverse/70"}
              transition-colors
            `}>
              {cycle.titulo}
            </p>

          </motion.button>
        );
      })}
    </motion.div>
  );
}
