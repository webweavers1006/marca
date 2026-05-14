import imgFondo from "@/assets/images/fondos/Guasdualito.jpg";

/**
 * CountryBrand module technical configuration.
 * Structure mirrors Jurado config for visual consistency.
 */
export const COUNTRY_BRAND_CONFIG = {
  /**
   * Visual mode: light = bg-background (cream), dark text, theme color for accents.
   */
  variant: "light",

  /**
   * Layout orientation for the header and content panels.
   * - "left":    Header on the left, content on the right.
   * - "right":   Header on the right, content on the left (matches Jurado).
   */
  layout: "left",

  /**
   * Text alignment for the header (label + title).
   * - "left": left-aligned (matches Jurado editorial layout).
   */
  headerAlign: "left",

  /**
   * Background image configuration for the entire section.
   */
  background: {
    enabled: false,
    src: imgFondo,
    overlayClass: "opacity-80",
  },

  /**
   * Decorative ambient elements (floating circles and accent characters).
   * Circles use bg-foreground/5 (subtle dark) for light mode,
   * matching Jurado's bg-foreground-inverse/5 for dark mode.
   */
  decorative: {
    accentChar: "VE",
    circles: [
      { className: "absolute -top-40 right-[10%] w-[500px] h-[500px] rounded-full bg-foreground/5 pointer-events-none z-0" },
      { className: "absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-foreground/5 pointer-events-none z-0" },
    ],
  },
};
