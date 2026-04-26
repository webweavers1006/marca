/**
 * Cronograma section — text content and milestone data.
 * Each milestone maps to a node on the serpentine path.
 */
export const CRONOGRAMA_CONTENT = {
  label: "Cronograma",
  sectionId: "cronograma",
  titulo: "Hoja de ruta",
  tituloHighlight: "ruta",
  subtitulo:
    "Seis etapas que guiarán la construcción de la nueva identidad visual de Venezuela.",
};

/**
 * MILESTONES — each item is a node in the visual path.
 * `side`: 'left' | 'right' determines which side the card floats.
 * `active`: highlights the current phase.
 */
export const MILESTONES = [
  {
    id: "pre-launch",
    numero: "01",
    fecha: "Abr 27 – May 8",
    evento: "Pre-lanzamiento",
    descripcion: "Fase preparatoria y de difusión nacional e internacional previa al inicio formal de la convocatoria.",
    iconName: "Megaphone",
    side: "left",
    activo: true,
  },
  {
    id: "open-call",
    numero: "02",
    fecha: "May 8 – Jun 15",
    evento: "Convocatoria Abierta",
    descripcion: "Periodo oficial para que el talento venezolano registre sus datos y envíe sus propuestas a través de la plataforma web.",
    iconName: "Send",
    side: "right",
    activo: false,
  },
  {
    id: "evaluation",
    numero: "03",
    fecha: "Jun 16 – Jul 31",
    evento: "Evaluación y Filtros",
    descripcion: "Etapa de revisión técnica por el Comité de Admisibilidad y valoración estratégica por el Jurado Nacional Institucional.",
    iconName: "SlidersHorizontal",
    side: "left",
    activo: false,
  },
  {
    id: "finalists",
    numero: "04",
    fecha: "Ago 3 – Sep 1",
    evento: "Finalistas y Consulta",
    descripcion: "Presentación de propuestas seleccionadas y realización de consultas ciudadanas (digital y territorial) para la votación pública.",
    iconName: "Users",
    side: "right",
    activo: false,
  },
  {
    id: "technical",
    numero: "05",
    fecha: "Sep 2 – Oct 16",
    evento: "Desarrollo Técnico",
    descripcion: "Fase de ajustes finales del sistema de marca, preparación técnica y realización de la gala oficial de premiación.",
    iconName: "Layers",
    side: "left",
    activo: false,
  },
  {
    id: "implementation",
    numero: "06",
    fecha: "Oct 17",
    evento: "Implementación",
    descripcion: "Lanzamiento oficial y puesta en marcha definitiva de la nueva identidad de Marca País Venezuela.",
    iconName: "Flag",
    side: "right",
    activo: false,
  },
];
