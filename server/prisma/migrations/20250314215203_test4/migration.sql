/*
  Warnings:

  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Application` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Feedback` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Payment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StudentProfile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SupportRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `University` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_universityId_fkey";

-- DropForeignKey
ALTER TABLE "Application" DROP CONSTRAINT "Application_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Application" DROP CONSTRAINT "Application_studentId_fkey";

-- DropForeignKey
ALTER TABLE "Application" DROP CONSTRAINT "Application_universityId_fkey";

-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_studentId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_studentId_fkey";

-- DropForeignKey
ALTER TABLE "StudentProfile" DROP CONSTRAINT "StudentProfile_studentId_fkey";

-- DropForeignKey
ALTER TABLE "StudentProfile" DROP CONSTRAINT "StudentProfile_universityId_fkey";

-- DropForeignKey
ALTER TABLE "SupportRequest" DROP CONSTRAINT "SupportRequest_adminId_fkey";

-- DropForeignKey
ALTER TABLE "SupportRequest" DROP CONSTRAINT "SupportRequest_studentId_fkey";

-- DropIndex
DROP INDEX "Student_phone_key";

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'STUDENT';

-- DropTable
DROP TABLE "Admin";

-- DropTable
DROP TABLE "Application";

-- DropTable
DROP TABLE "Feedback";

-- DropTable
DROP TABLE "Payment";

-- DropTable
DROP TABLE "StudentProfile";

-- DropTable
DROP TABLE "SupportRequest";

-- DropTable
DROP TABLE "University";

-- DropEnum
DROP TYPE "AdminRole";

-- DropEnum
DROP TYPE "ApplicationStatus";

-- DropEnum
DROP TYPE "SupportStatus";
