import imgFondo from "@/assets/images/fondos/salto_angel.png";
import logoblanco from "@/assets/images/logos/logoblanco.png";

/**
 * Concurso section behavior and structural configuration.
 */
export const CONCURSO_CONFIG = {
  /**
   * Visual mode: "dark" = colored bg + inverse text. "light" = cream bg + dark text.
   */
  variant: "dark",

  /**
   * Background image configuration for the entire section.
   */
  background: {
    enabled: true,
    src: imgFondo,
    overlayClass: "opacity-90",
  },
  /**
   * Premium logo asset displayed in the prize card.
   */
  premioLogo: logoblanco,
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

