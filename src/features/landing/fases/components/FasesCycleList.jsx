"use client";

import { motion } from "framer-motion";
import {
  sectionContainerVariants,
  sectionItemVariants,
} from "@/features/shared/config/animations.config";

/**
 * FasesCycleList — Vertical index style list for the editorial layout.
 * Optimized to match the bold block aesthetic of FasesActiveCycle.
 *
 * @param {{ cycles: Array, currentCycleId: string, onSelect?: function }} props
 */
export function FasesCycleList({ cycles, currentCycleId, onSelect }) {
  const activeIndex = cycles.findIndex((c) => c.id === currentCycleId);

  return (
    <motion.div
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="flex flex-col gap-1"
    >
      {cycles.map((cycle, index) => {
        const isActive = cycle.id === currentCycleId;
        const isPast = index < activeIndex;

        return (
          <motion.button
            key={cycle.id}
            variants={sectionItemVariants}
            onClick={() => onSelect?.(cycle.id)}
            className={`
              relative flex items-center gap-3 p-2 transition-all duration-300 text-left rounded-lg
              border border-transparent
              ${isActive
                ? "bg-foreground-inverse shadow-md scale-[1.02] border-foreground-inverse/20"
                : "hover:bg-foreground-inverse/5"}
            `}
          >
            {/* Number Block (Ultra-compact version) */}
            <div className={`
              flex items-center justify-center w-8 h-8 rounded font-black text-[12px] shrink-0 transition-colors
              ${isActive ? "bg-secondary text-foreground-inverse" : isPast ? "bg-secondary/20 text-primary" : "bg-foreground-inverse/10 text-foreground-inverse/40"}
            `}>
              {cycle.numero}
            </div>

            {/* Title */}
            <p
              className={`
                text-[12px] font-bold leading-tight flex-1
                ${isActive ? "text-foreground" : isPast ? "text-foreground-inverse/80" : "text-foreground-inverse/40"}
                transition-colors
              `}
            >
              {cycle.titulo}
            </p>

            {/* Active indicator bar */}
            {isActive && (
              <motion.span
                layoutId="active-marker"
                className="w-1.5 h-1.5 rounded-full bg-secondary"
                aria-hidden="true"
              />
            )}
          </motion.button>
        );
      })}
    </motion.div>
  );
}
