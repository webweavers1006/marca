/*
  Warnings:

  - The primary key for the `postulaciones` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `postulaciones` table. All the data in the column will be lost.
  - You are about to drop the column `educationLevel` on the `postulaciones` table. All the data in the column will be lost.
  - You are about to drop the column `experienceArea` on the `postulaciones` table. All the data in the column will be lost.
  - You are about to drop the column `howDidYouHear` on the `postulaciones` table. All the data in the column will be lost.
  - You are about to drop the column `participationType` on the `postulaciones` table. All the data in the column will be lost.
  - You are about to drop the column `previousWorkDescription` on the `postulaciones` table. All the data in the column will be lost.
  - You are about to drop the column `previousWorkLinks` on the `postulaciones` table. All the data in the column will be lost.
  - You are about to drop the column `socialFacebook` on the `postulaciones` table. All the data in the column will be lost.
  - You are about to drop the column `socialInstagram` on the `postulaciones` table. All the data in the column will be lost.
  - You are about to drop the column `socialLinkedIn` on the `postulaciones` table. All the data in the column will be lost.
  - You are about to drop the column `socialOther` on the `postulaciones` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `postulaciones` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `postulaciones` table. All the data in the column will be lost.
  - You are about to drop the column `yearsOfExperience` on the `postulaciones` table. All the data in the column will be lost.
  - The `id` column on the `postulaciones` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `postulados` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "postulados" DROP CONSTRAINT "postulados_submissionId_fkey";

-- AlterTable
ALTER TABLE "postulaciones" DROP CONSTRAINT "postulaciones_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "educationLevel",
DROP COLUMN "experienceArea",
DROP COLUMN "howDidYouHear",
DROP COLUMN "participationType",
DROP COLUMN "previousWorkDescription",
DROP COLUMN "previousWorkLinks",
DROP COLUMN "socialFacebook",
DROP COLUMN "socialInstagram",
DROP COLUMN "socialLinkedIn",
DROP COLUMN "socialOther",
DROP COLUMN "status",
DROP COLUMN "updatedAt",
DROP COLUMN "yearsOfExperience",
ADD COLUMN     "descripcion_proyecto_relevante" TEXT,
ADD COLUMN     "enlace_proyectos_previos" VARCHAR(500),
ADD COLUMN     "id_medio_difusion" INTEGER,
ADD COLUMN     "id_tipo_participacion" INTEGER,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "postulaciones_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "postulados";

-- DropEnum
DROP TYPE "NationalityCondition";

-- DropEnum
DROP TYPE "ParticipationType";

-- DropEnum
DROP TYPE "SubmissionStatus";

-- CreateTable
CREATE TABLE "tipos_integrantes" (
    "id" SERIAL NOT NULL,
    "tipo_integrante" VARCHAR(100) NOT NULL,

    CONSTRAINT "tipos_integrantes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "areas_xp" (
    "id" SERIAL NOT NULL,
    "area" VARCHAR(100) NOT NULL,

    CONSTRAINT "areas_xp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tiempos_xp" (
    "id" SERIAL NOT NULL,
    "tiempo" VARCHAR(100) NOT NULL,

    CONSTRAINT "tiempos_xp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "niveles_educativos" (
    "id" SERIAL NOT NULL,
    "nivel_educativo" VARCHAR(100) NOT NULL,

    CONSTRAINT "niveles_educativos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "integrantes" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "identificacion" VARCHAR(50) NOT NULL,
    "email" VARCHAR(255),
    "telefono" VARCHAR(50),
    "id_tipo_integrante" INTEGER,
    "id_area_xp" INTEGER,
    "id_tiempo_xp" INTEGER,
    "id_nivel_educativo" INTEGER,

    CONSTRAINT "integrantes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "empresas" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "numero_registro_fiscal" VARCHAR(100),
    "email" VARCHAR(255),
    "telefono" VARCHAR(50),
    "id_pais" INTEGER,
    "id_estado" INTEGER,
    "provincia_municipio" VARCHAR(255),
    "ciudad" VARCHAR(255),

    CONSTRAINT "empresas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_participacion" (
    "id" SERIAL NOT NULL,
    "participacion" VARCHAR(100) NOT NULL,

    CONSTRAINT "tipo_participacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medios_difusion" (
    "id" SERIAL NOT NULL,
    "medio" VARCHAR(100) NOT NULL,

    CONSTRAINT "medios_difusion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "empresas_postulaciones" (
    "id" SERIAL NOT NULL,
    "id_empresa" INTEGER,
    "id_postulacion" INTEGER,

    CONSTRAINT "empresas_postulaciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "integrantes_postulaciones" (
    "id" SERIAL NOT NULL,
    "id_integrante" INTEGER,
    "id_postulacion" INTEGER,

    CONSTRAINT "integrantes_postulaciones_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "integrantes" ADD CONSTRAINT "integrantes_id_tipo_integrante_fkey" FOREIGN KEY ("id_tipo_integrante") REFERENCES "tipos_integrantes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integrantes" ADD CONSTRAINT "integrantes_id_area_xp_fkey" FOREIGN KEY ("id_area_xp") REFERENCES "areas_xp"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integrantes" ADD CONSTRAINT "integrantes_id_tiempo_xp_fkey" FOREIGN KEY ("id_tiempo_xp") REFERENCES "tiempos_xp"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integrantes" ADD CONSTRAINT "integrantes_id_nivel_educativo_fkey" FOREIGN KEY ("id_nivel_educativo") REFERENCES "niveles_educativos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postulaciones" ADD CONSTRAINT "postulaciones_id_tipo_participacion_fkey" FOREIGN KEY ("id_tipo_participacion") REFERENCES "tipo_participacion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postulaciones" ADD CONSTRAINT "postulaciones_id_medio_difusion_fkey" FOREIGN KEY ("id_medio_difusion") REFERENCES "medios_difusion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "empresas_postulaciones" ADD CONSTRAINT "empresas_postulaciones_id_empresa_fkey" FOREIGN KEY ("id_empresa") REFERENCES "empresas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "empresas_postulaciones" ADD CONSTRAINT "empresas_postulaciones_id_postulacion_fkey" FOREIGN KEY ("id_postulacion") REFERENCES "postulaciones"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integrantes_postulaciones" ADD CONSTRAINT "integrantes_postulaciones_id_integrante_fkey" FOREIGN KEY ("id_integrante") REFERENCES "integrantes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integrantes_postulaciones" ADD CONSTRAINT "integrantes_postulaciones_id_postulacion_fkey" FOREIGN KEY ("id_postulacion") REFERENCES "postulaciones"("id") ON DELETE SET NULL ON UPDATE CASCADE;
