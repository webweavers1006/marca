"use client";

import { motion } from "framer-motion";
import { HERO_CONTENT } from "./config/hero.content.config";
import { HERO_CONFIG } from "./config/hero.config";
import { heroContainerVariants } from "./config/hero.animations.config";
import { HeroBackground } from "./components/HeroBackground";
import { HeroVideoBackground } from "./components/HeroVideoBackground";
import { HeroLabel } from "./components/HeroLabel";
import { HeroHeadline } from "./components/HeroHeadline";
import { HeroSubtitle } from "./components/HeroSubtitle";
import { HeroCta } from "./components/HeroCta";
import { HeroScrollIndicator } from "./components/HeroScrollIndicator";

/**
 * HeroView — orchestrates all Hero sub-components.
 * Reads content from LANDING_CONTENT.hero (strings) and HERO_CONFIG (layout/behavior).
 * No hardcoded text or layout values live here.
 */
export function HeroView() {
  const { label, titleLine1, titleLine2, subtitle, cta, ctaSecondary } =
    HERO_CONTENT;
  const { ctaHref, ctaSecondaryHref, accentChar, video } = HERO_CONFIG;

  return (
    <section
      id="hero"
      aria-labelledby="hero-headline"
      className="relative w-full overflow-hidden min-h-svh"
    >
      {/* Non-blocking background video (loads after initial paint) */}
      {video.enabled && (
        <HeroVideoBackground src={video.src} showOverlay={video.showOverlay} />
      )}

      {/* Decorative ambient layer: glow + ghost char */}
      <HeroBackground accentChar={accentChar} />

      {/* Main content — staggered entrance */}
      <div className="section-inner relative z-10 flex flex-col justify-center min-h-svh py-24 md:py-32">
        <motion.div
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <HeroLabel label={label} />
          <HeroHeadline
            id="hero-headline"
            titleLine1={titleLine1}
            titleLine2={titleLine2}
          />
          <HeroSubtitle subtitle={subtitle} />
          <HeroCta
            cta={cta}
            href={ctaHref}
            ctaSecondary={ctaSecondary}
            hrefSecondary={ctaSecondaryHref}
          />
        </motion.div>
      </div>

      {/* Scroll invitation */}
      <HeroScrollIndicator />
    </section>
  );
}

