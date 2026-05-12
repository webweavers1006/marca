"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * HeroColorSweep — full-screen intro animation for the Hero section.
 *
 * Design: Concentric expanding/collapsing circles.
 * Uses 6 massive overlapping circles (one for each brand color).
 * They start covering the whole screen, then scale down to 0 sequentially
 * from the top layer to the bottom layer, creating a "tunnel" effect
 * that reveals the hero background.
 */

// Se deben declarar las clases completas para que el escáner de Tailwind las compile correctamente
const STRIPES = [
  "bg-senary/80",     // Naranja (Capa fondo - se encoge de último)
  "bg-quinary/80",    // Verde
  "bg-quaternary/80", // Púrpura
  "bg-tertiary/80",   // Magenta
  "bg-primary/80",    // Amarillo
  "bg-secondary/80",  // Azul/Teal (Capa superior - la primera que ves)
];

export function HeroColorSweep() {
  const [isVisible, setIsVisible] = useState(true);

  // Called when the bottom-most circle finishes shrinking
  const handleLastComplete = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div
          className="absolute inset-0 z-[20] pointer-events-none overflow-hidden flex items-center justify-center"
          aria-hidden="true"
        >
          {STRIPES.map((color, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${color}`}
              // 250vw width and height guarantees the circle is large enough to cover any screen
              style={{ width: "250vw", height: "250vw" }}
              initial={{ scale: 1 }}
              animate={{ scale: 0 }}
              transition={{
                duration: 0.85,
                // Reverse delay: top layer (i=5) shrinks first, bottom layer (i=0) shrinks last
                delay: (STRIPES.length - 1 - i) * 0.12,
                ease: [0.76, 0, 0.24, 1],
              }}
              onAnimationComplete={
                i === 0 ? handleLastComplete : undefined
              }
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
