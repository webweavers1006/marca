/**
 * Fases section configuration.
 * Controls video, active-cycle display, and lazy-load behavior.
 * All UI decisions live here — components are data-driven.
 */

/**
 * Background / showcase video shown above the cycles list.
 * src: relative to /public
 * lazyOffset: IntersectionObserver rootMargin — how early to start loading
 */
export const FASES_VIDEO_CONFIG = {
  enabled: true,
  src: "/videoseccion.mp4",
  /** Start loading when 400px away from viewport */
  lazyOffset: "400px",
  /** Dark scrim over video to ensure content readability */
  showOverlay: true,
  /** Accessible label for screen readers */
  ariaLabel: "Video ilustrativo del sistema de selección y fases del concurso",
};

/**
 * Active-cycle card display settings.
 * icon: lucide-react icon name to import dynamically.
 * badgeLabel: small pill text shown above the cycle title.
 */
export const ACTIVE_CYCLE_CONFIG = {
  /** lucide icon displayed in the active-cycle focal card */
  iconName: "Layers",
  /** Pill label */
  badgeLabel: "En proceso",
};

/**
 * Configuration for the dynamic rotation of active cycles.
 */
export const ACTIVE_CYCLE_ROTATION_CONFIG = {
  /** How many milliseconds to stay on each phase */
  intervalMs: 5000,
};
