import { SubmissionForm } from "@/features/submission/components/SubmissionForm";
import { db } from "@/lib/prisma";

export const metadata = {
  title: "Postulación · Marca País Venezuela",
  description: "Registra tu propuesta para el Concurso Nacional de la Marca País Venezuela.",
};

export default async function SubmissionPage() {
  const tiposIntegrantes = await db.tipos_integrantes.findMany();
  const areasXp = await db.areas_xp.findMany();
  const tiemposXp = await db.tiempos_xp.findMany();
  const nivelesEducativos = await db.niveles_educativos.findMany();
  const tipoParticipacion = await db.tipo_participacion.findMany();
  const mediosDifusion = await db.medios_difusion.findMany();

  const catalogs = {
    tiposIntegrantes,
    areasXp,
    tiemposXp,
    nivelesEducativos,
    tipoParticipacion,
    mediosDifusion,
  };

  return <SubmissionForm catalogs={catalogs} />;
}
