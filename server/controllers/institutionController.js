import vine, { errors } from "@vinejs/vine";
import institutionService from "../services/institutionService.js";
import { institutionSchema } from "../validations/institutionValidation.js";
import prisma from "../DB/db.config.js";

class institutionController {
    static async createInstitution(req, res) {
        try {
            
            const user = req.user;
            const body = req.body;
            const validator = vine.compile(institutionSchema);
            const payload = await validator.validate(body);

            // if (!req.files || Object.keys(req.files).length === 0) {
            //     return res.status(400).json({

            //     })
            // }

            // Validate input
            // if (!name || !requirementsHscGPA || !requirementsSscGPA) {
            //     return res.status(400).json({ message: "All fields are required." });
            // }
            
            // Create institution in the database
            const institution = await prisma.institution.create({
                data: payload,
            });

            return res.status(201).json({
                status: 201,
                message: "Institution added successfully!",
                institution,
            });
        } catch (error) {
            if (error instanceof errors.E_VALIDATION_ERROR) {
                // console.log(error.messages)
                return res.status(400).json({errors: error.messages});
            } else {
                return res.status(500).json({ status: 500, message: "Something went wrong" });
            }
        }
    }
    static async fetchInstitutions(req, res) {
        try {
            const institutions = await prisma.institution.findMany();
            // institutionService.getAllInstitutions();
            return res.status(200).json({ status: 200, institutions });
        } catch (error) {
            if (error instanceof errors.E_VALIDATION_ERROR) {
                // console.log(error.messages)
                return res.status(400).json({errors: error.messages});
            } else {
                return res.status(500).json({ status: 500, message: "Something went wrong" });
            }
        }
    }

    static async getInstitutionFormRequirements(req, res) {
        try {
            const { institutionId } = req.params;
            const formRequirements = await prisma.institution.findUnique(institutionId);
            // getFormRequirements(institutionId);

            if (!formRequirements) {
                return res.status(404).json({ message: "Institution not found." });
            }

            return res.status(200).json({ status: 200, formRequirements });
        } catch (error) {
            if (error instanceof errors.E_VALIDATION_ERROR) {
                // console.log(error.messages)
                return res.status(400).json({errors: error.messages});
            } else {
                return res.status(500).json({ status: 500, message: "Something went wrong" });
            }
        }
    }
    static async updateInstitution(req, res) {
    try {
        const { institutionId } = req.params;
        const { name, requirementsHscGPA, requirementsSscGPA } = req.body;

        // Validate input
        if (!name || !requirementsHscGPA || !requirementsSscGPA) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Update institution in the database
        const updatedInstitution = await prisma.institution.update({
            where: { institutionId },
            data: {
                name,
                requirementsHscGPA,
                requirementsSscGPA,
            },
        });

        return res.status(200).json({
            status: 200,
            message: "Institution updated successfully!",
            institution: updatedInstitution,
        });
    } catch (error) {
            if (error instanceof errors.E_VALIDATION_ERROR) {
                // console.log(error.messages)
                return res.status(400).json({errors: error.messages});
            } else {
                return res.status(500).json({ status: 500, message: "Something went wrong" });
            }
        }
    }
    static async deleteInstitution(req, res) {
    try {
        const { institutionId } = req.params;

        // Delete institution from the database
        await prisma.institution.delete({
            where: { institutionId },
        });

        return res.status(200).json({
            status: 200,
            message: "Institution deleted successfully!",
        });
    } catch (error) {
            if (error instanceof errors.E_VALIDATION_ERROR) {
                // console.log(error.messages)
                return res.status(400).json({errors: error.messages});
            } else {
                return res.status(500).json({ status: 500, message: "Something went wrong" });
            }
        }
}
}

export default institutionController;