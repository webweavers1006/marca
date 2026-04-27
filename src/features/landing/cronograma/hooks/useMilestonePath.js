import { useMemo } from "react";
import { MILESTONES } from "../config/cronograma.content.config";

// ─── Layout constants ─────────────────────────────────────────
const ROW_H = 96;   // px per grid row — controls compactness
const DESKTOP_VB_W = 100;
const MOBILE_VB_W = 48;
const VB_H = ROW_H * MILESTONES.length; // SVG viewBox height

// Tailwind row-start classes indexed by milestone order
const ROW_START_CLASSES = [
  "row-start-1", "row-start-2", "row-start-3",
  "row-start-4", "row-start-5", "row-start-6",
];

// ─── Geometry helpers ─────────────────────────────────────────
function computeNodes(isMobile = false) {
  return MILESTONES.map((m, i) => ({
    // Mobile is centered in 48px, Desktop alternates in 100px
    cx: isMobile ? 24 : (m.side === "left" ? 28 : 72),
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

function buildStraightPath(nodes) {
  let d = `M ${nodes[0].cx} ${nodes[0].cy}`;
  for (let i = 1; i < nodes.length; i++) {
    const c = nodes[i];
    d += ` L ${c.cx} ${c.cy}`;
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

const mobileCardVariants = {
  hidden: () => ({ opacity: 0, x: -16 }), // Always from left on mobile
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.3 + i * 0.28, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  }),
};

/**
 * useMilestonePath — Provides all geometry, layout constants,
 * and animation variants needed to render the serpentine and straight roadmaps.
 */
export function useMilestonePath() {
  const desktopNodes = useMemo(() => computeNodes(false), []);
  const desktopPathD = useMemo(() => buildSerpentinePath(desktopNodes), [desktopNodes]);

  const mobileNodes = useMemo(() => computeNodes(true), []);
  const mobilePathD = useMemo(() => buildStraightPath(mobileNodes), [mobileNodes]);

  return {
    milestones: MILESTONES,
    rowH: ROW_H,
    vbH: VB_H,
    rowStartClasses: ROW_START_CLASSES,
    desktop: {
      vbW: DESKTOP_VB_W,
      nodes: desktopNodes,
      pathD: desktopPathD,
      variants: {
        path: pathVariants,
        node: nodeVariants,
        card: cardVariants,
      },
    },
    mobile: {
      vbW: MOBILE_VB_W,
      nodes: mobileNodes,
      pathD: mobilePathD,
      variants: {
        path: pathVariants,
        node: nodeVariants,
        card: mobileCardVariants,
      },
    }
  };
}
