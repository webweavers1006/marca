"use client";

import { motion } from "framer-motion";
import { useMilestonePath } from "../hooks/useMilestonePath";
import { useMilestoneExpand } from "../hooks/useMilestoneExpand";
import { MilestoneCard } from "./MilestoneCard";

/**
 * MilestonePath — Dumb render component for the serpentine roadmap.
 * All geometry and animation logic lives in useMilestonePath.
 */
export function MilestonePath() {
  const { milestones, nodes, pathD, rowH, vbW, vbH, rowStartClasses, variants } =
    useMilestonePath();
  const { expandedId, toggle } = useMilestoneExpand();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      className="grid grid-cols-[1fr_88px_1fr] md:grid-cols-[1fr_100px_1fr] w-full max-w-3xl mx-auto"
      style={{ gridTemplateRows: `repeat(${milestones.length}, ${rowH}px)` }}
    >
      {/* ── SVG Road — centre column, spans all rows ── */}
      <svg
        viewBox={`0 0 ${vbW} ${vbH}`}
        className="col-start-2 row-start-1 row-span-6 w-full h-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Glow aura */}
        <motion.path d={pathD} fill="none" strokeWidth="28"
          className="stroke-secondary/20" strokeLinecap="round"
          variants={variants.path} />
        {/* Road body */}
        <motion.path d={pathD} fill="none" strokeWidth="13"
          strokeDasharray="20 12" className="stroke-secondary/65"
          strokeLinecap="round" variants={variants.path} />
        {/* Centre lane marking */}
        <motion.path d={pathD} fill="none" strokeWidth="1.5"
          strokeDasharray="7 16" className="stroke-foreground-inverse/80"
          strokeLinecap="round" variants={variants.path} />

        {/* Nodes */}
        {nodes.map((n, i) => {
          const m = milestones[i];
          return (
            <motion.g key={m.id} custom={i} variants={variants.node}>
              {m.activo && (
                <circle cx={n.cx} cy={n.cy} r="20" className="fill-primary/15" />
              )}
              <circle cx={n.cx} cy={n.cy} r="14"
                strokeWidth={m.activo ? 0 : 2}
                className={m.activo
                  ? "fill-secondary"
                  : "fill-foreground-inverse stroke-secondary"} />
              <circle cx={n.cx} cy={n.cy} r="6"
                className={m.activo ? "fill-foreground-inverse" : "fill-secondary/75"} />
              <text x={n.cx} y={n.cy + 0.5} textAnchor="middle"
                dominantBaseline="middle" fontSize="6" fontWeight="800"
                className={m.activo ? "fill-foreground-inverse" : "fill-secondary/60"}>
                {m.numero}
              </text>
            </motion.g>
          );
        })}
      </svg>

      {/* ── Milestone Cards — one per row ── */}
      {milestones.map((m, i) => {
        const isLeft = m.side === "left";
        return (
          <motion.div
            key={m.id}
            custom={m.side}
            variants={variants.card}
            className={[
              "flex items-center",
              rowStartClasses[i],
              isLeft
                ? "col-start-1 justify-end pr-3 md:pr-5"
                : "col-start-3 justify-start pl-3 md:pl-5",
            ].join(" ")}
          >
            <MilestoneCard
              milestone={m}
              side={m.side}
              isExpanded={expandedId === m.id}
              onToggle={() => toggle(m.id)}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
