-- CreateTable
CREATE TABLE "Form" (
    "formId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "board" TEXT NOT NULL,
    "reg" INTEGER NOT NULL,
    "hscRoll" INTEGER NOT NULL,
    "sscRoll" INTEGER NOT NULL,
    "hscGPA" DOUBLE PRECISION NOT NULL,
    "sscGPA" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("formId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Form_studentId_key" ON "Form"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "Form_reg_key" ON "Form"("reg");

-- CreateIndex
CREATE UNIQUE INDEX "Form_hscRoll_key" ON "Form"("hscRoll");

-- CreateIndex
CREATE UNIQUE INDEX "Form_sscRoll_key" ON "Form"("sscRoll");

-- AddForeignKey
ALTER TABLE "Form" ADD CONSTRAINT "Form_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("studentId") ON DELETE RESTRICT ON UPDATE CASCADE;
