/**
 * Global animation configurations for the platform.
 * Centralizes timing, speeds and delays for reusable effects.
 */

export const TYPEWRITER_CONFIG = {
  /** Seconds between each character being typed */
  speed: 0.08,
  
  /** Initial delay before starting the typewriter effect (seconds) */
  delay: 1.2,
  
  /** Pause time between loop cycles (milliseconds) */
  loopWaitTime: 3000,
};

export const HERO_ANIMATIONS = {
  /** Delay before hero elements start their entrance staggered animation */
  entranceDelay: 0.2,
  
  /** Duration of the background video fade-in */
  videoFadeDuration: 1.2,
};

/**
 * Shared scroll-triggered animation variants for landing sections.
 * Used by all section Views via Framer Motion whileInView.
 */
export const sectionContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.05 },
  },
};

export const sectionItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};
