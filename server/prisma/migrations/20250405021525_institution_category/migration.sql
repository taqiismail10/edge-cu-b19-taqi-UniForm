/*
  Warnings:

  - You are about to alter the column `password` on the `Admin` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "Admin" ALTER COLUMN "password" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "Institution" ADD COLUMN     "institutionCategoryInstitutionCategoryId" VARCHAR(255);

-- CreateTable
CREATE TABLE "InstitutionCategory" (
    "institutionCategoryId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "InstitutionCategory_pkey" PRIMARY KEY ("institutionCategoryId")
);

-- AddForeignKey
ALTER TABLE "Institution" ADD CONSTRAINT "Institution_institutionCategoryInstitutionCategoryId_fkey" FOREIGN KEY ("institutionCategoryInstitutionCategoryId") REFERENCES "InstitutionCategory"("institutionCategoryId") ON DELETE SET NULL ON UPDATE CASCADE;
