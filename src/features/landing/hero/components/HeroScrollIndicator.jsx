"use client";

import { motion } from "framer-motion";
import { scrollIndicatorVariants } from "../config/hero.animations.config";

/**
 * HeroScrollIndicator — animated downward chevron shown at the hero bottom.
 * Loops with a gentle bounce to invite the user to scroll.
 * Entirely decorative — hidden from screen readers.
 */
export function HeroScrollIndicator() {
  return (
    <div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      aria-hidden="true"
    >
      <span className="text-[10px] tracking-[0.2em] uppercase text-foreground-inverse font-medium">
        Scroll
      </span>
      <motion.div
        variants={scrollIndicatorVariants}
        animate="animate"
        className="w-px h-12 bg-gradient-to-b from-foreground-inverse to-transparent"
      />
    </div>
  );
}
