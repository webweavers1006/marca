"use client";

import { motion } from "framer-motion";
import { sectionItemVariants } from "@/features/shared/config/animations.config";

/**
 * SectionDescription — Reusable description text for landing sections.
 * Supports light/dark variants, optional framer-motion animation,
 * and an editorial mode with divider + glass decoration (like ConcursoPremio).
 *
 * @param {{
 *   children: React.ReactNode,
 *   variant?: "light" | "dark",
 *   animate?: boolean,
 *   align?: "left" | "center" | "right",
 *   className?: string,
 *   maxWidth?: string,
 *   editorial?: boolean,
 *   theme?: object,
 * }} props
 */
export function SectionDescription({
  children,
  variant = "dark",
  animate = false,
  align = "left",
  className = "",
  maxWidth = "max-w-prose",
  editorial = false,
  theme = null,
}) {
  const isLight = variant === "light";

  const textColor = isLight ? "text-muted-foreground" : "text-foreground-inverse/80";
  const glassColor = isLight ? "bg-foreground/5" : "bg-foreground-inverse/5";

  const alignClass = align === "center" ? "mx-auto text-center" : align === "right" ? "ml-auto text-right" : "";

  const classes = `text-base md:text-lg lg:text-xl leading-relaxed ${textColor} ${alignClass} ${className}`;

  const textElement = animate ? (
    <motion.p variants={sectionItemVariants} className={`${classes} ${maxWidth}`}>
      {children}
    </motion.p>
  ) : (
    <p className={`${classes} ${maxWidth}`}>{children}</p>
  );

  /* Editorial mode: wraps text in a ConcursoPremio-style container with divider + glass */
  if (editorial) {
    return (
      <div className="relative h-full flex flex-col justify-center items-center p-10 md:p-14 lg:p-16 text-center">
        <div className="flex flex-col gap-8 max-w-lg relative z-10 items-center">
          {/* Subtle top divider for editorial layout */}
          <div className={`w-12 h-1 "bg-primary" mb-2`} />
          {textElement}
        </div>
        {/* Ambient glass decoration */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] ${glassColor} blur-3xl rounded-full pointer-events-none -z-10 opacity-30`}
        />
      </div>
    );
  }

  return textElement;
}
