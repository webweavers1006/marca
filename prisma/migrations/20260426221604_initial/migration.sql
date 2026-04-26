-- CreateEnum
CREATE TYPE "ParticipationType" AS ENUM ('INDIVIDUAL', 'COLLECTIVE');

-- CreateEnum
CREATE TYPE "SubmissionStatus" AS ENUM ('DRAFT', 'SUBMITTED', 'UNDER_REVIEW', 'FINALIST', 'WINNER', 'REJECTED');

-- CreateTable
CREATE TABLE "postulaciones" (
    "id" TEXT NOT NULL,
    "teamName" VARCHAR(255) NOT NULL,
    "participationType" "ParticipationType" NOT NULL DEFAULT 'INDIVIDUAL',
    "motivation" TEXT NOT NULL,
    "conceptualBasis" TEXT NOT NULL,
    "countryNarrative" TEXT NOT NULL,
    "slogan" VARCHAR(500) NOT NULL,
    "visualIdentityUrl" VARCHAR(1000),
    "proposalPdfUrl" VARCHAR(1000),
    "authorshipLetterUrl" VARCHAR(1000),
    "status" "SubmissionStatus" NOT NULL DEFAULT 'SUBMITTED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "postulaciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "postulados" (
    "id" TEXT NOT NULL,
    "fullName" VARCHAR(255) NOT NULL,
    "idDocument" VARCHAR(50) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(30) NOT NULL,
    "countryOfResidence" VARCHAR(100) NOT NULL,
    "isRepresentative" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "submissionId" TEXT NOT NULL,

    CONSTRAINT "postulados_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "postulados" ADD CONSTRAINT "postulados_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "postulaciones"("id") ON DELETE CASCADE ON UPDATE CASCADE;
