import { MessageSquareHeart } from "lucide-react";
import { Logomarcalarge } from "@/assets/icons/logos";
import logoblanco from '@/assets/images/logos/logoblanco.png'
import imgFondo from "@/assets/images/fondos/Guasdualito.jpg";

/**
 * Footer UI configuration.
 * Separates UI text strings from the component logic.
 */
export const FOOTER_CONFIG = {
  background: {
    enabled: true,
    src: imgFondo,
    overlayClass: "opacity-95",
    alt: "Fondo Footer",
  },
  brand: {
    useLogoComponent: false,
    logoComponent: Logomarcalarge,
    logoImage: logoblanco,
    logoText: "Venezuela",
    logoSubtext: "abierta al futuro",
    title: null,
    subtitle: [
      { text: "TU VISIÓN, ", highlight: false },
      { text: "NUESTRA MARCA", highlight: true }
    ],
  },
  contact: {
    title: "CONTÁCTANOS",
    columns: [
      {
        id: "col-1",
        items: [
          { label: "TELÉFONO", value: "+58 000-000-00-00" },
          { label: "CORREO ELECTRÓNICO", value: "000@000.com" }
        ]
      },
      {
        id: "col-2",
        items: [
          { label: "Horario", value: "Lun-Vie.\n0:00am-0:00pm", isHiddenLabel: true },
          { label: "Dirección", value: "Residencias Esedra, Av. Sorocaima,\nCaracas 1060, Miranda.", isHiddenLabel: true }
        ]
      }
    ]
  },
  socials: [
    { id: "instagram", name: "Instagram", href: "#", icon: MessageSquareHeart },
    { id: "youtube", name: "Youtube", href: "#", icon: MessageSquareHeart }
  ],
  copyright: {
    year: 2026,
    holder: "Instituto Marca País Venezuela",
    text: "Todos los derechos reservados.",
  },
};
