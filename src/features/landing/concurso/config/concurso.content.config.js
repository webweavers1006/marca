import imgCreatives from "@/assets/images/concurso/creatives.png";
import imgSaltoAngel from "@/assets/images/concurso/salto_angel.png";
import imgCulture from "@/assets/images/concurso/culture.png";
import imgArchitecture from "@/assets/images/concurso/architecture.png";

/**
 * Concurso section text content configuration.
 */
export const CONCURSO_CONTENT = {
  label: "El Concurso",
  sectionId: "el-concurso",
  titulo: "Construcción Colectiva",
  subtitulo: "Una propuesta integral",
  texto:
    "La construcción de la Marca País Venezuela se concibe como una política estratégica de Estado con visión de largo plazo, orientada a proyectar una identidad nacional coherente, auténtica y competitiva. Un proceso de construcción colectiva, abierto y participativo que convoca al talento venezolano a desarrollar una propuesta integral.",
  cta: "Conoce más del proceso",
  images: [
    {
      src: imgCreatives,
      alt: "Talento venezolano trabajando",
      className: "col-span-12 md:col-span-6 lg:col-span-7",
    },
    {
      src: imgSaltoAngel,
      alt: "Salto Ángel - Paisaje emblemático",
      className: "col-span-12 md:col-span-4 lg:col-span-3",
    },
    {
      src: imgCulture,
      alt: "Detalle cultural - Cacao",
      className: "col-span-12 md:col-span-8 lg:col-span-6",
    },
    {
      src: imgArchitecture,
      alt: "Arquitectura moderna - Caracas",
      className: "col-span-12 md:col-span-12 lg:col-span-3",
    },
  ]
};

