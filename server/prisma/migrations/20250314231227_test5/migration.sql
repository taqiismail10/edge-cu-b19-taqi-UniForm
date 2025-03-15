/*
  Warnings:

  - You are about to alter the column `address` on the `Student` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(300)`.

*/
-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "address" SET DATA TYPE VARCHAR(300);
