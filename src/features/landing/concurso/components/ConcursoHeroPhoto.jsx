"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { sectionItemVariants } from "@/features/shared/config/animations.config";

/**
 * ConcursoHeroPhoto — Right editorial panel.
 * Strictly full-bleed: no gaps, no radius, photo anchored to top.
 * The `relative` + `fill` + explicit height ensure no whitespace appears.
 *
 * @param {{ image: { src: any, alt: string }, theme: object }} props
 */
export function ConcursoHeroPhoto({ image, theme }) {
  return (
    <motion.div
      variants={sectionItemVariants}
      className={`relative h-[280px] lg:h-auto lg:min-h-[400px] overflow-hidden ${theme.bg}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover object-top opacity-85 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-700"
        priority
        sizes="(max-width: 1024px) 100vw, 55vw"
      />
      {/* Brand accent — left edge (visible against color block on desktop) */}
      <div className={`absolute top-0 left-0 bottom-0 w-1 ${theme.bg} hidden lg:block`} />
      {/* Brand accent — bottom edge */}
    </motion.div>
  );
}
