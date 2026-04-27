import imgFondo from "@/assets/images/fondos/Guasdualito.jpg";

/**
 * Cronograma module technical configuration.
 * Centralizes visual parameters, grid settings and specific brand behaviors.
 */
export const CRONOGRAMA_CONFIG = {
  /**
   * Background image configuration for the entire section.
   */
  background: {
    enabled: false,
    src: imgFondo,
    // The opacity of the brand color overlay over the image
    overlayClass: "opacity-100",
  },
  /**
   * Decorative ambient elements (floating circles and characters)
   */
  decorative: {
    accentChar: "NUESTRA MARCA",
    circles: [
      { className: "absolute -top-40 right-[10%] w-[500px] h-[500px] rounded-full bg-foreground-inverse/5 pointer-events-none z-0" },
      { className: "absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-foreground-inverse/5 pointer-events-none z-0" }
    ]
  }
};
