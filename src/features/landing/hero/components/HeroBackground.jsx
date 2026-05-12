"use client";
import { motion } from "framer-motion";
import { heroBgVariants } from "../config/hero.animations.config";

import { BrandColorBand } from "@/components/shared/BrandColorBand";

/**
 * HeroBackground — a flush right-side mosaic of interlocking geometric shapes.
 * Nested flex columns/rows ensure every shape tiles perfectly with no gaps.
 * Outer corners are rounded; inner connecting edges are square for seamless fit.
 * Inspired by the Construcción Identitaria brand grid composition.
 */
export function HeroBackground() {
  return (
    <motion.div
      variants={heroBgVariants}
      initial="hidden"
      animate="visible"
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-[5]"
      aria-hidden="true"
    >

      {/* ── Right vertical color band (atop mosaic) ───────────── */}
      <BrandColorBand position="right" />

      {/* ── Left ambient glow ──────────────────────────────────── */}
      <div className="absolute -left-40 top-1/3 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />

      {/* ── Top horizontal rule ───────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-foreground-inverse/10" />

    </motion.div>
  );
}
