-- CreateTable
CREATE TABLE "Institution" (
    "institutionId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "requirementsHscGPA" DOUBLE PRECISION NOT NULL,
    "requirementsSscGPA" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Institution_pkey" PRIMARY KEY ("institutionId")
);

-- CreateTable
CREATE TABLE "InstitutionForm" (
    "institutionFormId" TEXT NOT NULL,
    "institutionId" TEXT NOT NULL,
    "fieldName" TEXT NOT NULL,
    "fieldType" TEXT NOT NULL,
    "isRequired" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "InstitutionForm_pkey" PRIMARY KEY ("institutionFormId")
);

-- AddForeignKey
ALTER TABLE "InstitutionForm" ADD CONSTRAINT "InstitutionForm_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution"("institutionId") ON DELETE RESTRICT ON UPDATE CASCADE;
