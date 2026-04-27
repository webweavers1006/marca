/*
  Warnings:

  - You are about to drop the column `authorshipLetterUrl` on the `postulaciones` table. All the data in the column will be lost.
  - You are about to drop the column `conceptualBasis` on the `postulaciones` table. All the data in the column will be lost.
  - You are about to drop the column `countryNarrative` on the `postulaciones` table. All the data in the column will be lost.
  - You are about to drop the column `motivation` on the `postulaciones` table. All the data in the column will be lost.
  - You are about to drop the column `proposalPdfUrl` on the `postulaciones` table. All the data in the column will be lost.
  - You are about to drop the column `slogan` on the `postulaciones` table. All the data in the column will be lost.
  - You are about to drop the column `teamName` on the `postulaciones` table. All the data in the column will be lost.
  - You are about to drop the column `visualIdentityUrl` on the `postulaciones` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "NationalityCondition" AS ENUM ('VENEZUELAN_IN_VENEZUELA', 'VENEZUELAN_ABROAD', 'FOREIGNER_IN_VENEZUELA');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ParticipationType" ADD VALUE 'COMPANY';
ALTER TYPE "ParticipationType" ADD VALUE 'PUBLIC_INSTITUTION';
ALTER TYPE "ParticipationType" ADD VALUE 'PRIVATE_INSTITUTION';
ALTER TYPE "ParticipationType" ADD VALUE 'EDUCATIONAL_INSTITUTE';

-- AlterTable
ALTER TABLE "postulaciones" DROP COLUMN "authorshipLetterUrl",
DROP COLUMN "conceptualBasis",
DROP COLUMN "countryNarrative",
DROP COLUMN "motivation",
DROP COLUMN "proposalPdfUrl",
DROP COLUMN "slogan",
DROP COLUMN "teamName",
DROP COLUMN "visualIdentityUrl",
ADD COLUMN     "educationLevel" VARCHAR(255),
ADD COLUMN     "experienceArea" VARCHAR(255),
ADD COLUMN     "howDidYouHear" VARCHAR(255),
ADD COLUMN     "previousWorkDescription" TEXT,
ADD COLUMN     "previousWorkLinks" TEXT,
ADD COLUMN     "socialFacebook" VARCHAR(500),
ADD COLUMN     "socialInstagram" VARCHAR(500),
ADD COLUMN     "socialLinkedIn" VARCHAR(500),
ADD COLUMN     "socialOther" VARCHAR(500),
ADD COLUMN     "yearsOfExperience" VARCHAR(100);

-- AlterTable
ALTER TABLE "postulados" ADD COLUMN     "city" VARCHAR(100),
ADD COLUMN     "nationalityCondition" "NationalityCondition",
ADD COLUMN     "rifDocumentUrl" VARCHAR(1000),
ADD COLUMN     "stateOrProvince" VARCHAR(100),
ALTER COLUMN "countryOfResidence" DROP NOT NULL;
