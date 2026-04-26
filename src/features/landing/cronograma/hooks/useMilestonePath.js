import { useMemo } from "react";
import { MILESTONES } from "../config/cronograma.content.config";

// ─── Layout constants ─────────────────────────────────────────
const ROW_H = 130;   // px per grid row — controls compactness
const VB_W = 100;    // SVG viewBox width  (unitless)
const VB_H = ROW_H * MILESTONES.length; // SVG viewBox height

// Tailwind row-start classes indexed by milestone order
const ROW_START_CLASSES = [
  "row-start-1", "row-start-2", "row-start-3",
  "row-start-4", "row-start-5", "row-start-6",
];

// ─── Geometry helpers ─────────────────────────────────────────
function computeNodes() {
  return MILESTONES.map((m, i) => ({
    cx: m.side === "left" ? 28 : 72,
    cy: i * ROW_H + ROW_H / 2, // exact centre of each grid row
  }));
}

function buildSerpentinePath(nodes) {
  let d = `M ${nodes[0].cx} ${nodes[0].cy}`;
  for (let i = 1; i < nodes.length; i++) {
    const p = nodes[i - 1];
    const c = nodes[i];
    const mid = (p.cy + c.cy) / 2;
    d += ` C ${p.cx} ${mid}, ${c.cx} ${mid}, ${c.cx} ${c.cy}`;
  }
  return d;
}

// ─── Animation variants ───────────────────────────────────────
const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2.2, ease: "easeInOut" },
  },
};

const nodeVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: 0.2 + i * 0.28, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};

const cardVariants = {
  hidden: (side) => ({ opacity: 0, x: side === "left" ? -16 : 16 }),
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.3 + i * 0.28, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  }),
};

/**
 * useMilestonePath — Provides all geometry, layout constants,
 * and animation variants needed to render the serpentine roadmap.
 *
 * @returns {{
 *   milestones: object[],
 *   nodes: {cx: number, cy: number}[],
 *   pathD: string,
 *   rowH: number,
 *   vbW: number,
 *   vbH: number,
 *   rowStartClasses: string[],
 *   variants: { path, node, card },
 * }}
 */
export function useMilestonePath() {
  const nodes = useMemo(() => computeNodes(), []);
  const pathD = useMemo(() => buildSerpentinePath(nodes), [nodes]);

  return {
    milestones: MILESTONES,
    nodes,
    pathD,
    rowH: ROW_H,
    vbW: VB_W,
    vbH: VB_H,
    rowStartClasses: ROW_START_CLASSES,
    variants: {
      path: pathVariants,
      node: nodeVariants,
      card: cardVariants,
    },
  };
}
