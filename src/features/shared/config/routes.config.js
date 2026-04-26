export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/#el-concurso", label: "El Concurso" },
  { href: "/#fases", label: "Fases de Selección" },
  { href: "/#cronograma", label: "Cronograma" },
  { href: "/#jurado", label: "Jurado" },
  /*   { href: "/#impacto", label: "Impacto" }, */
  { href: "/submission", label: "Postúlate" },
];

// "Postúlate" is excluded from desktop nav (navbar already has a CTA button)
export const MAIN_NAV_LINKS = NAV_LINKS.filter((link) => link.href !== "/submission");
export const FOOTER_NAV_LINKS = NAV_LINKS;
