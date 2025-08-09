import prisma from "../DB/db.config.js";
import { errors } from "@vinejs/vine";

class institutionService {
    static async getAllInstitutions() {
        try {
            return await prisma.institution.findMany();
        } catch (error) {
                    if (error instanceof errors.E_VALIDATION_ERROR) {
                        // console.log(error.messages)
                        return res.status(400).json({errors: error.messages});
                    } else {
                        return res.status(500).json({ status: 500, message: "Something went wrong" });
                    }
                }
    }

    static async getFormRequirements(institutionId) {
        try {
            return await prisma.institutionForm.findMany({
                where: { institutionId },
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

export default institutionService;