const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database with catalogs...");

  // 1. tipos_integrantes
  await prisma.tipos_integrantes.createMany({
    data: [
      { tipo_integrante: "Representante Legal" },
      { tipo_integrante: "Socio" },
      { tipo_integrante: "Colaborador" },
    ],
    skipDuplicates: true,
  });

  // 2. areas_xp
  await prisma.areas_xp.createMany({
    data: [
      { area: "Diseño" },
      { area: "Marketing" },
      { area: "Publicidad" },
      { area: "Branding" },
      { area: "Producción Audio Visual" },
      { area: "Artista Creativo" },
      { area: "Otro" },
    ],
    skipDuplicates: true,
  });

  // 3. tiempos_xp
  await prisma.tiempos_xp.createMany({
    data: [
      { tiempo: "Menos de 2 años" },
      { tiempo: "3-5 años" },
      { tiempo: "6-10 años" },
      { tiempo: "Más de 10 años" },
    ],
    skipDuplicates: true,
  });

  // 4. niveles_educativos
  await prisma.niveles_educativos.createMany({
    data: [
      { nivel_educativo: "Basico" },
      { nivel_educativo: "Bachiller" },
      { nivel_educativo: "Técnico Superior" },
      { nivel_educativo: "Universitario (Pregrado)" },
      { nivel_educativo: "Postgrado" },
      { nivel_educativo: "Otro" },
    ],
    skipDuplicates: true,
  });

  // 7. tipo_participacion
  await prisma.tipo_participacion.createMany({
    data: [
      { participacion: "Individual" },
      { participacion: "Colectivo" },
      { participacion: "Empresa" },
      { participacion: "Institución / Organización Publica" },
      { participacion: "Institución / Organización Privada" },
      { participacion: "Instituto Educativo" },
    ],
    skipDuplicates: true,
  });

  // 8. medios_difusion
  await prisma.medios_difusion.createMany({
    data: [
      { medio: "Facebook" },
      { medio: "Instagram" },
      { medio: "X" },
      { medio: "Linkedin" },
      { medio: "Correo Electrónico" },
      { medio: "Página Web" },
      { medio: "Universidad" },
      { medio: "TV" },
      { medio: "Otro" },
    ],
    skipDuplicates: true,
  });

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
