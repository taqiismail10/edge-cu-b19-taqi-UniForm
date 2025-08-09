-- CreateTable
CREATE TABLE "AppliedInstitution" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "institutionId" TEXT NOT NULL,

    CONSTRAINT "AppliedInstitution_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AppliedInstitution" ADD CONSTRAINT "AppliedInstitution_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("studentId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppliedInstitution" ADD CONSTRAINT "AppliedInstitution_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution"("institutionId") ON DELETE RESTRICT ON UPDATE CASCADE;
