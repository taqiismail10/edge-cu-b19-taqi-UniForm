import prisma from "../DB/db.config.js";
import vine from "@vinejs/vine";
import { formValidationSchema } from "../validations/formValidation.js";

class formController {
    static async submitForm(req, res) {
        try {
            const { studentId, board, reg, hscRoll, sscRoll, hscGPA, sscGPA } = req.body;

            // Validate form fields
            const validator = vine.compile(formValidationSchema);
            const payload = await validator.validate(req.body);

            // Check if form already exists for the student
            const existingForm = await prisma.form.findUnique({
                where: { studentId },
            });

            if (existingForm) {
                return res.status(400).json({ message: "Form already submitted." });
            }

            // Store form details in the database
            const form = await prisma.form.create({
                data: payload,
            });

            return res.status(201).json({
                status: 201,
                message: "Form submitted successfully!",
                form,
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            return res.status(500).json({ message: "Something went wrong." });
        }
    }
}

export default formController;