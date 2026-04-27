import { BRAND_THEMES } from "@/features/shared/config/theme.config";

export const NAV_LINKS = [
  { href: "/", label: "Inicio", theme: BRAND_THEMES[0] },
  { href: "/#el-concurso", label: "El Concurso", theme: BRAND_THEMES[1] },
  { href: "/#cronograma", label: "Cronograma", theme: BRAND_THEMES[2] },
  { href: "/#fases", label: "Fases de Selección", theme: BRAND_THEMES[3] },
  { href: "/#jurado", label: "Jurado", theme: BRAND_THEMES[4] },
  /*   { href: "/#impacto", label: "Impacto" }, */
  { href: "/submission", label: "Postúlate", theme: BRAND_THEMES[5] },
];

// "Postúlate" is excluded from desktop nav (navbar already has a CTA button)
export const MAIN_NAV_LINKS = NAV_LINKS.filter((link) => link.href !== "/submission");
export const FOOTER_NAV_LINKS = NAV_LINKS;
