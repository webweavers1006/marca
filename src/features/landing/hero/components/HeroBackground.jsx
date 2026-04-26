"use client";

import { motion } from "framer-motion";
import { heroBgVariants } from "../config/hero.animations.config";

/**
 * HeroBackground — decorative ambient layer behind the hero content.
 * Renders a subtle radial gradient and a large typographic accent number
 * (Duna's signature "architectural type" treatment).
 * @param {{ accentChar: string }} props
 */
export function HeroBackground({ accentChar }) {
  return (
    <motion.div
      variants={heroBgVariants}
      initial="hidden"
      animate="visible"
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Radial glow at bottom-right */}
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-secondary/8 blur-[100px]" />

      {/* Large architectural accent character */}
      {accentChar && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pr-8 md:pr-20">
          <span
            className="font-black text-[clamp(10rem,20vw,20rem)] leading-none text-foreground-inverse/[0.015] select-none tracking-tighter"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            {accentChar}
          </span>
        </div>
      )}

      {/* Top horizontal rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-foreground/8" />
    </motion.div>
  );
}
