/**
 * Fases section configuration.
 * Controls background, decorative elements, and cycle display settings.
 * All UI decisions live here — components are data-driven.
 */

export const FASES_CONFIG = {
  /**
   * Background configuration for the entire section.
   * Can use video or static imagery.
   */
  background: {
    enabled: true,
    type: "video", // Using video as requested for this module
    src: "/videoseccion.mp4",
    lazyOffset: "400px",
    // The opacity of the brand color overlay over the video
    overlayClass: "opacity-95",
    ariaLabel: "Video ilustrativo del sistema de selección y fases del concurso",
  },
  /**
   * Decorative ambient elements (floating circles and characters)
   */
  decorative: {
    accentChar: "VE",
    circles: [
      { className: "absolute -top-40 right-[15%] w-[500px] h-[500px] rounded-full bg-foreground-inverse/5 pointer-events-none z-0" },
      { className: "absolute bottom-1/4 -left-20 w-[350px] h-[350px] rounded-full bg-foreground-inverse/5 pointer-events-none z-0" }
    ]
  }
};

/**
 * Active-cycle card display settings.
 */
export const ACTIVE_CYCLE_CONFIG = {
  iconName: "Layers",
  badgeLabel: "En proceso",
  phaseLabel: "Fase de Selección",
  cycleLabel: "Ciclo",
};

/**
 * Carousel controls aria labels.
 */
export const CAROUSEL_CONTROLS_CONFIG = {
  prevLabel: "Fase anterior",
  nextLabel: "Siguiente fase",
};

/**
 * Configuration for the dynamic rotation of active cycles.
 */
export const ACTIVE_CYCLE_ROTATION_CONFIG = {
  intervalMs: 5000,
};
