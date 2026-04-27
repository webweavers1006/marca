"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { heroItemVariants } from "../config/hero.animations.config";

/**
 * HeroCta — primary and optional secondary call-to-action buttons.
 * Primary: dark filled pill. Secondary: ghost/outline pill.
 * @param {{ cta: string, href: string, ctaSecondary?: string, hrefSecondary?: string }} props
 */
export function HeroCta({ cta, href, ctaSecondary, hrefSecondary }) {
  return (
    <motion.div variants={heroItemVariants} className="flex flex-wrap items-center gap-4">
      {/* Primary CTA */}
      <Link
        href={href}
        id="hero-cta-btn"
        className="
          inline-flex items-center gap-3
          px-8 py-4 rounded-full
          border border-foreground/20
          bg-secondary text-background
          text-sm font-medium tracking-wide
          hover:bg-secondary hover:border-primary hover:text-foreground-inverse
          transition-all duration-300 active:scale-95
        "
      >
        <span>{cta}</span>
        <span className="text-base leading-none opacity-70" aria-hidden="true">→</span>
      </Link>

      {/* Secondary CTA (ghost) */}
      {ctaSecondary && hrefSecondary && (
        <Link
          href={hrefSecondary}
          id="hero-cta-secondary-btn"
          className="
            inline-flex items-center gap-2
            px-8 py-4 rounded-full
            border border-foreground/20
            text-foreground/70 bg-foreground-inverse
            text-sm font-medium tracking-wide
            hover:border-primary hover:text-primary
            transition-all duration-300 active:scale-95
          "
        >
          {ctaSecondary}
        </Link>
      )}
    </motion.div>
  );
}


