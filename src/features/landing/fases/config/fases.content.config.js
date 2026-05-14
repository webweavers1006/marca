/**
 * Fases section text content and data configuration.
 * Video/behavior options live in fases.config.js.
 */

/** ID of the cycle currently in progress. Change to reflect live status. */
export const CURRENT_CYCLE_ID = "ciclo-1";

export const FASES_CONTENT = {
  label: "Sistema de Selección y Fases",
  sectionId: "fases",
  titulo: "De miles a una propuesta: Un proceso en 6 Ciclos",
  tituloHighlight: "6 Ciclos",
  sidebarLabel: "Índice de procesos",
  sidebarCyclePrefix: "Nº",
};

export const SELECTION_CYCLES = [
  {
    id: "ciclo-1",
    numero: "01",
    titulo: "Comité Técnico de Admisibilidad",
    descripcion: "Representado por el Instituto Marca País para realizar el primer filtro técnico formal de todas las postulaciones masivas."
  },
  {
    id: "ciclo-2",
    numero: "02",
    titulo: "Jurado Nacional Institucional",
    descripcion: "Instituciones vinculadas al turismo, exportaciones y academia que evalúan el potencial de atracción, competitividad y rigor conceptual."
  },
  {
    id: "ciclo-3",
    numero: "03",
    titulo: "Jurado Evaluador Especializado",
    descripcion: "Panel de 21 referentes que evalúa la calidad conceptual, estratégica y estética de las propuestas para seleccionar a los semifinalistas."
  },
  {
    id: "ciclo-4",
    numero: "04",
    titulo: "Consulta Digital Ciudadana",
    descripcion: "Plataforma web con validación de identidad donde se esperan +1.600.000 participantes votando en tiempo real, incluyendo a la diáspora."
  },
  {
    id: "ciclo-5",
    numero: "05",
    titulo: "Consulta Territorial Ciudadana",
    descripcion: "Jornada presencial de un día desplegada en 15.700 centros de votación y plazas públicas a lo largo de 335 municipios del país."
  },
  {
    id: "ciclo-6",
    numero: "06",
    titulo: "Fallo final y premiación",
    descripcion: "Sumatoria de las evaluaciones técnicas y los votos de la consulta popular para anunciar a la propuesta ganadora del premio."
  },
];
