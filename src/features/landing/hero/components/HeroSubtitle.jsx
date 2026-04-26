"use client";

import { motion } from "framer-motion";
import { heroItemVariants } from "../config/hero.animations.config";

/**
 * HeroSubtitle — the descriptive paragraph below the headline.
 * Light weight, constrained width to avoid overly long lines.
 * @param {{ subtitle: string }} props
 */
export function HeroSubtitle({ subtitle }) {
  return (
    <motion.p
      variants={heroItemVariants}
      className="text-base md:text-lg text-foreground-inverse  leading-relaxed max-w-md mb-6 md:mb-10"
    >
      {subtitle}
    </motion.p>
  );
}
