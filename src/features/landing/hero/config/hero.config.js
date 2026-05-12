import fondoImage from "@/assets/images/fondos/fondo.png";

/**
 * Hero layout and behavior configuration.
 * Text content lives in landing-content.config.js (LANDING_CONTENT.hero).
 * This file controls structural and behavioral options only.
 */
export const HERO_CONFIG = {
  /** href for the main CTA button */
  ctaHref: "/submission",

  /** href for the secondary ghost CTA button */
  ctaSecondaryHref: "/#fases",

  /**
   * Large decorative ghost character shown at the right of the hero (Duna style).
   * Set to null to remove the architectural accent.
   */
  accentChar: "VE",

  /**
   * Background video configuration.
   * src: path relative to /public.
   * Set enabled: false to disable without removing the config.
   * showOverlay: if true, a dark scrim layer is applied to improve readability.
   */
  video: {
    enabled: true,
    src: "/videofondo.mp4",
    showOverlay: true,
  },

  /**
   * Background image configuration (used when video.enabled is false).
   * The image asset is statically imported in HeroImageBackground.jsx
   * for Next.js automatic optimization (WebP, sizing, blur placeholder).
   */
  image: {
    enabled: false,
    src: fondoImage,
    showOverlay: true,
  },
};
