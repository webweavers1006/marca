"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { sectionItemVariants } from "@/features/shared/config/animations.config";

/**
 * ConcursoMainImage — Large hero image for the concurso section.
 * Using explicit heights and robust container settings.
 */
export function ConcursoMainImage({ image }) {
  if (!image) return null;

  return (
    <motion.div 
      variants={sectionItemVariants}
      className="lg:col-span-7 relative w-full h-[350px] md:h-[500px] lg:h-[650px] rounded-2xl md:rounded-[3rem] overflow-hidden bg-foreground/5 shadow-2xl order-1 lg:order-2"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover"
        priority
        sizes="(max-width: 1024px) 100vw, 60vw"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/5 pointer-events-none" />
    </motion.div>
  );
}
