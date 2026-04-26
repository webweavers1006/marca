"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { sectionItemVariants } from "@/features/shared/config/animations.config";

/**
 * ConcursoGrid — Fixed grid for secondary images.
 * Removes the previous slider implementation for a stable, premium layout.
 */
export function ConcursoGrid({ images }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="w-full">
      {/* ── Fixed Grid Container ── */}
      <div className="grid grid-cols-12 gap-6 lg:gap-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            variants={sectionItemVariants}
            className={`relative h-[350px] md:h-[450px] rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-foreground/5 shadow-lg group ${image.className || "col-span-12"}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Hover Overlay with Caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-sm font-semibold tracking-wide uppercase mb-1">
                  Explorar
                </p>
                <p className="text-white/70 text-xs ">
                  {image.alt}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

