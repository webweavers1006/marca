import imgFondo from "@/assets/images/fondos/MunicipioTovar.jpg";

/**
 * Jurado section behavior and structural configuration.
 */
export const JURADO_CONFIG = {
  /**
   * Visual mode: "dark" = colored bg + inverse text. "light" = cream bg + dark text.
   */
  variant: "dark",

  /**
   * Layout orientation for the header and content panels.
   * - "right": Header on the right, content on the left (editorial).
   */
  layout: "left",

  /**
   * Text alignment for the header (label + title).
   * - "left": left-aligned (editorial layout).
   */
  headerAlign: "left",

  /**
   * Background image configuration for the entire section.
   */
  background: {
    enabled: true,
    src: imgFondo,
    // The opacity of the brand color overlay over the image
    overlayClass: "opacity-80",
  },
  /**
   * Decorative ambient elements (floating circles and characters)
   */
  decorative: {
    accentChar: "CRETIVA ",
    circles: [
      { className: "absolute -top-40 right-[10%] w-[500px] h-[500px] rounded-full bg-foreground-inverse/5 pointer-events-none z-0" },
      { className: "absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-foreground-inverse/5 pointer-events-none z-0" }
    ]
  }
};
