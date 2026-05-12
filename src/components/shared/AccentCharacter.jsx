"use client";

import { motion } from "framer-motion";
import { ACCENT_CONFIG } from "@/features/shared/config/accent.config";

/**
 * AccentCharacter — A large decorative "ghost" text watermark.
 * Used to add architectural/editorial identity to sections.
 * 
 * @param {{ char?: string, className?: string, opacity?: string }} props
 */
export function AccentCharacter({ 
  char = ACCENT_CONFIG.defaultChar, 
  className = "top-0 right-0", 
  opacity = ACCENT_CONFIG.defaultOpacity 
}) {
  if (!char) return null;

  return (
    <div 
      className={`absolute pointer-events-none select-none z-0 overflow-hidden flex items-center justify-center ${className}`} 
      aria-hidden="true"
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.1 }}
        className={`font-black tracking-tighter text-[40vw] md:text-[30vw] lg:text-[22vw] leading-none text-foreground-inverse ${opacity}`}
      >
        {char}
      </motion.span>
    </div>
  );
}
