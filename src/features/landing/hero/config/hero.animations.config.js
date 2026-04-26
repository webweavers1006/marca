/**
 * Framer Motion variants for the Hero section.
 * Defines the staggered entrance animation sequence (Duna aesthetic).
 * Isolated here so components remain pure and config-driven.
 */

/** Container that staggers its children entrance */
export const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

/** Generic slide-up + fade-in for each hero child element */
export const heroItemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1], // custom ease-out-expo
    },
  },
};

/** Background image fade-in (slower, starts first) */
export const heroBgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.4,
      ease: "easeOut",
    },
  },
};

/** Infinite bounce for the scroll indicator */
export const scrollIndicatorVariants = {
  animate: {
    y: [0, 8, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
