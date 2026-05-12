/**
 * Global typography and UI token configuration.
 * Centralizes the visual styles for headings and section labels
 * to ensure consistency across the entire platform.
 */

export const HEADING_CONFIG = {
  /** Visual styles for each level of the hierarchy */
  variants: {
    /** Main Hero title - monumental scale */
    hero: "font-display font-bold uppercase text-[clamp(2.5rem,7vw,6rem)] leading-[1.0] tracking-tight",

    /** Main Section title - editorial bold scale */
    section: "font-display font-black uppercase text-4xl md:text-5xl lg:text-7xl leading-[0.95] tracking-tight",

    /** Secondary Section title or large subtitle */
    subsection: "font-display text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-tight leading-tight",

    /** Card titles or small feature headings */
    card: "font-display text-lg md:text-xl font-bold uppercase tracking-tight",

    /** Stylistic outline heading for decorative impact */
    outline: "font-display font-outline font-black uppercase text-4xl md:text-5xl lg:text-7xl leading-[0.95] tracking-tight",
  },

  /** Alignment options */
  alignments: {
    left: "text-left mr-auto",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  },

  /** Default settings if not specified */
  defaults: {
    tag: "h2",
    variant: "section",
  }
};

export const SECTION_LABEL_CONFIG = {
  /** Visual styles for section eyebrows/badges */
  variants: {
    /** Standard dark on light style */
    default: {
      line: "bg-primary/40",
      text: "text-foreground/60 font-bold",
    },
    /** Light on dark style (Impacto) */
    inverse: {
      line: "bg-background/30",
      text: "text-muted-inverse font-medium",
    },
    /** High contrast secondary style (Hero/Fases) */
    hero: {
      line: "bg-secondary",
      text: "text-foreground-inverse font-medium",
    },
    herofore: {
      line: "bg-secondary",
      text: "text-foreground font-medium",
    },
  },

  /** Shared constant classes for the text part */
  shared: {
    text: "text-xs tracking-[0.25em] uppercase",
  },

  /** Default settings if not specified */
  defaults: {
    variant: "default",
  }
};
