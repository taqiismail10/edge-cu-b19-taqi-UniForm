/*
  Warnings:

  - Made the column `lastName` on table `Student` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "lastName" SET NOT NULL;
