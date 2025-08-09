import vine from "@vinejs/vine";
import prisma from "../DB/db.config.js";
import { applicationValidationSchema } from "../validations/applicationValidation.js";

class applicationController {
static async applyToInstitution(req, res) {
        try {
            const { studentId, institutionId } = req.body;

            // Validate application fields
            const validator = vine.compile(applicationValidationSchema);
            const payload = await validator.validate(req.body);
  
            // Fetch institution requirements
            const institution = await prisma.institution.findUnique({
                where: { institutionId },
            });

            if (!institution) {
                return res.status(404).json({ message: "Institution not found." });
            }

            // Check GPA requirements
            const studentForm = await prisma.form.findUnique({
                where: { studentId },
            });

            if (
                studentForm.hscGPA < institution.requirementsHscGPA ||
                studentForm.sscGPA < institution.requirementsSscGPA
            ) {
                return res.status(400).json({ message: "GPA requirements not met." });
            }

            // Check if the student has already applied to this institution
            const existingApplication = await prisma.appliedInstitution.findFirst({
                where: {
                    studentId,
                    institutionId,
                },
            });

            if (existingApplication) {
                return res.status(400).json({ message: "You have already applied to this institution." });
            }

            // Store application in the database
            const application = await prisma.appliedInstitution.create({
                data: payload,
            });

            return res.status(201).json({
                status: 201,
                message: "Application submitted successfully!",
                application,
            });
        } catch (error) {
            console.error("Error applying to institution:", error);
            return res.status(500).json({ message: "Something went wrong." });
        }
    }

    static async getApplications(req, res) {
        try {
            const { id: studentId } = req.user;

            const applications = await prisma.appliedInstitution.findMany({
                where: { studentId },
                include: { institution: true },
            });

            return res.status(200).json({ status: 200, applications });
        } catch (error) {
            console.error("Error fetching applications:", error);
            return res.status(500).json({ message: "Something went wrong." });
        }
    }

    static async getApplicationById(req, res) {
        try {
            const { applicationId } = req.params;
            const { id: studentId } = req.user;

            const application = await prisma.appliedInstitution.findFirst({
                where: { id: applicationId, studentId },
                include: { institution: true },
            });

            if (!application) {
                return res.status(404).json({ message: "Application not found." });
            }

            return res.status(200).json({ status: 200, application });
        } catch (error) {
            console.error("Error fetching application:", error);
            return res.status(500).json({ message: "Something went wrong." });
        }
    }
}

export default applicationController;