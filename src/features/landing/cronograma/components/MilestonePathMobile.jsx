"use client";

import { motion } from "framer-motion";
import { MilestoneCard } from "./MilestoneCard";

export function MilestonePathMobile({ theme, data, expandedId, onToggle }) {
  const { milestones, rowH, vbH, rowStartClasses, mobile } = data;
  const { vbW, nodes, pathD, variants } = mobile;
  const accentClass = theme?.accentText || "text-foreground-inverse";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      className="grid md:hidden grid-cols-[48px_1fr] w-full"
      style={{ gridTemplateRows: `repeat(${milestones.length}, ${rowH}px)` }}
    >
      <svg
        viewBox={`0 0 ${vbW} ${vbH}`}
        className="col-start-1 row-start-1 row-span-6 w-full h-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Glow aura */}
        <motion.path d={pathD} fill="none" strokeWidth="28"
          className={`${accentClass} stroke-current opacity-20`} strokeLinecap="round"
          variants={variants.path} />
        {/* Road body */}
        <motion.path d={pathD} fill="none" strokeWidth="13"
          strokeDasharray="20 12" className={`${accentClass} stroke-current opacity-65`}
          strokeLinecap="round" variants={variants.path} />
        {/* Centre lane marking */}
        <motion.path d={pathD} fill="none" strokeWidth="1.5"
          strokeDasharray="7 16" className="stroke-foreground-inverse/80"
          strokeLinecap="round" variants={variants.path} />

        {/* Nodes */}
        {nodes.map((n, i) => {
          const m = milestones[i];
          return (
            <motion.g key={m.id} custom={i} variants={variants.node} className={accentClass}>
              {m.activo && (
                <circle cx={n.cx} cy={n.cy} r="20" className="fill-current opacity-20" />
              )}
              <circle cx={n.cx} cy={n.cy} r="14"
                strokeWidth={m.activo ? 0 : 2}
                className={m.activo
                  ? "fill-current"
                  : "fill-foreground-inverse stroke-current"} />
              <circle cx={n.cx} cy={n.cy} r="6"
                className={m.activo ? "fill-foreground-inverse" : "fill-current opacity-75"} />
              <text x={n.cx} y={n.cy + 0.5} textAnchor="middle"
                dominantBaseline="middle" fontSize="6" fontWeight="800"
                className={m.activo ? "fill-foreground-inverse" : "fill-current opacity-60"}>
                {m.numero}
              </text>
            </motion.g>
          );
        })}
      </svg>

      {milestones.map((m, i) => (
        <motion.div
          key={m.id}
          custom={i}
          variants={variants.card}
          className={`flex items-center col-start-2 justify-start pl-2 ${rowStartClasses[i]}`}
        >
          <MilestoneCard
            milestone={m}
            side="right" // Force cards to behave as if they are on the right
            isExpanded={expandedId === m.id}
            onToggle={() => onToggle(m.id)}
            theme={theme}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
