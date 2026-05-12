import imgFondo from "@/assets/images/fondos/salto_angel.png";

/**
 * Concurso section behavior and structural configuration.
 */
export const CONCURSO_CONFIG = {
  /**
   * Background image configuration for the entire section.
   * Works similarly to Hero or Fases.
   */
  background: {
    enabled: true, // Cambiar a true para usar imagen de fondo en lugar de color sólido
    src: imgFondo,
    // La opacidad del overlay teal (secondary) sobre la imagen (ej. "opacity-90")
    overlayClass: "opacity-90",
  },
  /**
   * Decorative ambient elements (floating circles and characters)
   */
  decorative: {
    accentChar: "TU VISION",
    circles: [
      { className: "absolute -top-32 left-[20%] w-[400px] h-[400px] rounded-full bg-foreground-inverse/8 pointer-events-none z-0" },
      { className: "absolute bottom-1/4 -left-20 w-[300px] h-[300px] rounded-full bg-foreground-inverse/5 pointer-events-none z-0" }
    ]
  }
};

