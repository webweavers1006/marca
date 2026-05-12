import { Logomarcalarge } from "@/assets/icons/logos";
import logoMarcapais2 from "@/assets/images/logos/logocolores.png";

/**
 * Navbar UI content configuration.
 * Centralizes all hardcoded strings from the navigation component.
 */
export const NAVBAR_CONFIG = {
  logoAriaLabel: "Inicio - Marca País Venezuela",
  navAriaLabel: "Navegación principal",
  scrollThreshold: 80,
  logo: {
    useImage: true,
    src: logoMarcapais2,
    alt: "Marca País Logo",
    width: 500,
    height: 500,
    className: "object-contain w-[150px] h-[50px]",
  },
  logo2: {
    useImage: true,
    src: logoMarcapais2,
    alt: "Marca País Logo Scrolled",
    width: 500,
    height: 500,
    className: "object-contain w-[150px] h-[100px]",
  },
  cta: {
    label: "Postula ahora",
    href: "/concurso",
  },
  hamburger: {
    openLabel: "Abrir menú",
    closeLabel: "Cerrar menú",
  },
};
