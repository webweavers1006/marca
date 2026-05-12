"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Megaphone, Send, SlidersHorizontal, Users, Layers, Flag, ChevronDown,
} from "lucide-react";

const ICON_MAP = { Megaphone, Send, SlidersHorizontal, Users, Layers, Flag };

/**
 * MilestoneCard — Compact organic card with click-to-expand description.
 * Modified for the 'Construcción Identitaria' editorial aesthetic (no boxes or shadows).
 *
 * @param {{ milestone: object, side: 'left'|'right', isExpanded: boolean, onToggle: () => void, theme: object }} props
 */
export function MilestoneCard({ milestone, side, isExpanded, onToggle, theme }) {
  const Icon = ICON_MAP[milestone.iconName];
  const isLeft = side === "left";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isExpanded}
      aria-controls={`milestone-desc-${milestone.id}`}
      className="group w-full text-left transition-all duration-300 overflow-hidden cursor-pointer"
    >
      {/* ── Collapsed header ── */}
      <div className={["flex items-center gap-3 p-2", isLeft ? "flex-row-reverse" : "flex-row"].join(" ")}>
        {/* Icon */}
        <div className={[
          "flex-shrink-0 w-9 h-9 flex items-center justify-center transition-colors duration-300 rounded-full",
          isExpanded || milestone.activo
            ? `${theme?.accentBg || "bg-foreground-inverse"} text-foreground` // Filled background with contrast
            : `bg-transparent border border-foreground-inverse/30 text-foreground-inverse group-hover:border-foreground-inverse/60`, // Hollow background
        ].join(" ")}>
          {Icon && <Icon size={16} aria-hidden="true" />}
        </div>

        {/* Text */}
        <div className={["min-w-0 flex-1", isLeft ? "text-right" : "text-left"].join(" ")}>
          <p className={[
            "text-[10px] font-bold tracking-[0.15em] uppercase leading-none mb-1 transition-colors duration-300",
            milestone.activo || isExpanded ? (theme?.accentText || "text-foreground-inverse") : "text-foreground-inverse/60",
          ].join(" ")}>
            {milestone.fecha}
          </p>
          <p className={[
            "text-sm font-semibold leading-snug transition-colors duration-300",
            milestone.activo || isExpanded ? "text-foreground-inverse" : "text-foreground-inverse/80",
          ].join(" ")}>
            {milestone.evento}
          </p>
        </div>

        {/* Chevron */}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className={`flex-shrink-0 ${isExpanded ? theme?.accentText : "text-foreground-inverse/40"}`}
        >
          <ChevronDown size={16} aria-hidden="true" />
        </motion.div>
      </div>

      {/* ── Expandable description ── */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            id={`milestone-desc-${milestone.id}`}
            key="description"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className={[
              "text-sm text-foreground-inverse/70 leading-relaxed px-3 pb-3 pt-1",
              isLeft ? "text-right" : "text-left",
            ].join(" ")}>
              {milestone.descripcion}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
