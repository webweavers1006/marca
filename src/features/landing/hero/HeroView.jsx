"use client";

import { motion } from "framer-motion";
import { HERO_CONTENT } from "./config/hero.content.config";
import { HERO_CONFIG } from "./config/hero.config";
import { heroContainerVariants } from "./config/hero.animations.config";
import { HeroBackground } from "./components/HeroBackground";
import { HeroVideoBackground } from "./components/HeroVideoBackground";
import { HeroImageBackground } from "./components/HeroImageBackground";
import { HeroLabel } from "./components/HeroLabel";
import { HeroHeadline } from "./components/HeroHeadline";
import { HeroSubtitle } from "./components/HeroSubtitle";
import { HeroCta } from "./components/HeroCta";
import { HeroScrollIndicator } from "./components/HeroScrollIndicator";


import { useSectionObserver } from "@/features/shared/hooks/use-section-observer";

/**
 * HeroView — orchestrates all Hero sub-components.
 * Design follows the Construcción Identitaria brand art:
 * bold circles, 6-color palette, dynamic visual energy.
 */
export function HeroView() {
  const { label, titleLine1, titleLine2, subtitle, cta, ctaSecondary } =
    HERO_CONTENT;
  const { ctaHref, ctaSecondaryHref, video, image } = HERO_CONFIG;

  const sectionRef = useSectionObserver("/");

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full overflow-hidden min-h-svh bg-background"
    >
      {/* Background: image takes priority when enabled, fallback to video */}
      {image?.enabled && (
        <HeroImageBackground src={image.src} showOverlay={image.showOverlay} />
      )}
      {video.enabled && !image?.enabled && (
        <HeroVideoBackground src={video.src} showOverlay={video.showOverlay} />
      )}

      {/* Decorative brand circles + color band */}
      <HeroBackground />

      {/* Main content — staggered entrance */}
      <div className="section-inner relative z-10 flex items-center min-h-svh py-24 md:py-32">
        <motion.div
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 0.1 }}
          className="max-w-2xl"
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
