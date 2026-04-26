import { Logomarcalarge } from "@/assets/icons/logos";
import logoMarcapais2 from "@/assets/images/marcapais2.png";

/**
 * Navbar UI content configuration.
 * Centralizes all hardcoded strings from the navigation component.
 */
export const NAVBAR_CONFIG = {
  logoAriaLabel: "Inicio - Marca País Venezuela",
  navAriaLabel: "Navegación principal",
  logo: {
    useImage: false,
    component: Logomarcalarge,
    alt: "Marca País Logo",
    width: 500,
    height: 500,
  },
  logo2: {
    useImage: true,
    src: logoMarcapais2,
    alt: "Marca País Logo Scrolled",
    width: 500,
    height: 500,
  },
  cta: {
    label: "Postula ahora",
    href: "/submission",
  },
  hamburger: {
    openLabel: "Abrir menú",
    closeLabel: "Cerrar menú",
  },
};
