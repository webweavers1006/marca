"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TYPEWRITER_CONFIG } from "@/features/shared/config/animations.config";

/**
 * Typewriter — Animates text character by character.
 * Supports looping and prevents layout shifts.
 */
export function Typewriter({
  text,
  speed = TYPEWRITER_CONFIG.speed,
  delay = TYPEWRITER_CONFIG.delay,
  loop = true,
  className = "",
}) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (!loop) return;

    // Calculate total time: delay + (chars * speed) + wait time from config
    const totalTime = (delay + text.length * speed) * 1000 + TYPEWRITER_CONFIG.loopWaitTime;
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, totalTime);

    return () => clearInterval(interval);
  }, [text, speed, delay, loop]);

  const characters = text.split("");

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: speed,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { display: "none" },
    visible: { display: "inline" },
  };

  return (
    <motion.span
      key={key}
      variants={container}
      initial="hidden"
      animate="visible"
      className={`relative inline-block whitespace-nowrap font-extrabold ${className}`}
    >
      {/* Hidden text to reserve space */}
      <span className="invisible" aria-hidden="true">
        {text}
      </span>

      {/* Animated overlay */}
      <span className="absolute inset-0 left-0">
        {characters.map((char, index) => (
          <motion.span key={`${char}-${index}`} variants={child}>
            {char}
          </motion.span>
        ))}
      </span>
    </motion.span>
  );
}
