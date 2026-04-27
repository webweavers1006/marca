"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { sectionItemVariants } from "@/features/shared/config/animations.config";

/**
 * ConcursoImageStrip — Three-column full-bleed image strip.
 * Flush with no gaps — editorial magazine style.
 *
 * @param {{ images: Array<{ src: any, alt: string }>, theme: object }} props
 */
export function ConcursoImageStrip({ images, theme }) {
  if (!images?.length) return null;

  return (
    <div className="grid grid-cols-3">
      {images.map((img, i) => (
        <motion.div
          key={i}
          variants={sectionItemVariants}
          className={`relative h-[160px] md:h-[200px] lg:h-[240px] overflow-hidden group ${theme.bg}`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover opacity-80 mix-blend-luminosity transition-all duration-700 group-hover:scale-[1.06] group-hover:mix-blend-normal group-hover:opacity-100"
            sizes="33vw"
          />

          {/* Editorial index number */}
          <span className="absolute bottom-4 right-5 font-black text-6xl leading-none select-none text-foreground-inverse/20 group-hover:text-foreground-inverse/70 transition-colors duration-500">
            0{i + 1}
          </span>

          {/* Hairline divider between columns */}
          {i < images.length - 1 && (
            <div className="absolute top-0 right-0 bottom-0 w-px bg-background/20" />
          )}
        </motion.div>
      ))}
    </div>
  );
}
