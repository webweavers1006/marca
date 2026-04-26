"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Megaphone, Send, SlidersHorizontal, Users, Layers, Flag, ChevronDown,
} from "lucide-react";

const ICON_MAP = { Megaphone, Send, SlidersHorizontal, Users, Layers, Flag };

/**
 * MilestoneCard — Compact card with click-to-expand description.
 *
 * @param {{ milestone: object, side: 'left'|'right', isExpanded: boolean, onToggle: () => void }} props
 */
export function MilestoneCard({ milestone, side, isExpanded, onToggle }) {
  const Icon = ICON_MAP[milestone.iconName];
  const isLeft = side === "left";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isExpanded}
      aria-controls={`milestone-desc-${milestone.id}`}
      className={[
        "group w-full text-left rounded-xl border transition-all duration-300 overflow-hidden cursor-pointer",
        "bg-white/8 backdrop-blur-sm border-white/12 shadow-sm",
        "hover:border-primary/50 hover:bg-white/12 hover:shadow-[0_8px_32px_-6px_rgba(149,120,211,0.35)]",
        isExpanded
          ? "border-primary/55 bg-white/14 shadow-[0_8px_32px_-6px_rgba(149,120,211,0.30)]"
          : milestone.activo
            ? "border-primary/40 shadow-[0_4px_20px_-4px_rgba(149,120,211,0.25)]"
            : "",
      ].join(" ")}
    >
      {/* ── Collapsed header ── */}
      <div className={["flex items-center gap-3 p-3.5", isLeft ? "flex-row-reverse" : "flex-row"].join(" ")}>
        {/* Icon */}
        <div className={[
          "flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300",
          isExpanded || milestone.activo
            ? "bg-primary text-foreground-inverse"
            : "bg-white/10 text-primary group-hover:bg-white/16",
        ].join(" ")}>
          {Icon && <Icon size={16} aria-hidden="true" />}
        </div>

        {/* Text */}
        <div className={["min-w-0 flex-1", isLeft ? "text-right" : "text-left"].join(" ")}>
          <p className={[
            "text-[10px] font-bold tracking-[0.15em] uppercase leading-none mb-1",
            milestone.activo || isExpanded ? "text-primary" : "text-white/40",
          ].join(" ")}>
            {milestone.fecha}
          </p>
          <p className={[
            "text-xs font-semibold leading-snug",
            milestone.activo || isExpanded ? "text-foreground-inverse" : "text-white/70",
          ].join(" ")}>
            {milestone.evento}
          </p>
        </div>

        {/* Chevron */}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="flex-shrink-0 text-white/30 group-hover:text-primary/70"
        >
          <ChevronDown size={14} aria-hidden="true" />
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
              "text-xs text-white/55 leading-relaxed px-3.5 pb-3.5",
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
