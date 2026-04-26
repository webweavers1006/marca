import { MessageSquareHeart } from "lucide-react";

/**
 * Footer UI configuration.
 * Separates UI text strings from the component logic.
 */
export const FOOTER_CONFIG = {
  brand: {
    logoImage: "/marcapaisnarajita.png",
    logoText: "Venezuela",
    logoSubtext: "abierta al futuro",
    title: [
      { text: "Venezuela es historia,\n", highlight: true },
      { text: "identidad y ", highlight: false },
      { text: "visión de futuro.", highlight: true },
    ],
    subtitle: "Una Marca País construida para proyectarse y perdurar.",
  },
  contact: {
    title: "CONTACTANOS",
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
