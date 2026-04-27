import { db } from "@/lib/prisma";

export async function createSubmission(data) {
  const { integrantes, empresa, ...postulacionData } = data;

  const postulacion = await db.$transaction(async (tx) => {
    // 1. Crear la postulación base
    const created = await tx.postulaciones.create({
      data: {
        id_tipo_participacion: postulacionData.id_tipo_participacion,
        descripcion_proyecto_relevante: postulacionData.descripcion_proyecto_relevante,
        enlace_proyectos_previos: postulacionData.enlace_proyectos_previos,
        id_medio_difusion: postulacionData.id_medio_difusion,
        fase2: false,
      },
    });

    // 2. Si hay empresa, crearla y enlazarla
    if (empresa) {
      const emp = await tx.empresas.create({ data: empresa });
      await tx.empresas_postulaciones.create({
        data: {
          id_empresa: emp.id,
          id_postulacion: created.id,
        },
      });
    }

    // 3. Si hay integrantes, crearlos y enlazarlos
    if (integrantes && integrantes.length > 0) {
      for (const integrante of integrantes) {
        const intg = await tx.integrantes.create({ data: integrante });
        await tx.integrantes_postulaciones.create({
          data: {
            id_integrante: intg.id,
            id_postulacion: created.id,
          },
        });
      }
    }

    return created;
  });

  return postulacion;
}

export async function getSubmissionById(id) {
  return db.postulaciones.findUnique({
    where: { id: parseInt(id, 10) },
    include: { 
      empresas: { include: { empresa: true } },
      integrantes: { include: { integrante: true } },
    },
  });
}
