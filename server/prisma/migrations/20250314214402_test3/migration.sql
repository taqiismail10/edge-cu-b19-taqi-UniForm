/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "password" VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Student_phone_key" ON "Student"("phone");
