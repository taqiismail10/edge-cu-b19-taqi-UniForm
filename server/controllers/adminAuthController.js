import vine, { errors } from "@vinejs/vine";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../DB/db.config.js";
import { adminLoginSchema } from "../validations/authValidation.js";

const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync("AdminPassword123", salt);
console.log("New Hashed Password:", hashedPassword);

class adminAuthController {
    static async login(req, res) {
        try {
            const body = req.body;
            const validator = vine.compile(adminLoginSchema);
            const payload = await validator.validate(body);

            // Find admin by email
            const findAdmin = await prisma.admin.findUnique({ where: { email: payload.email } });
            console.log("Admin Record:", findAdmin); // Debugging log

            if (findAdmin) {
                // Compare passwords
                if (bcrypt.compareSync(payload.password, findAdmin.password)) {
                    console.log("Password comparison failed");
                    console.log("Entered Password:", payload.password);
                    console.log("Hashed Password:", findAdmin.password);
                    return res.json({ status: 400, message: "Invalid Credentials" });
                }

                // Generate JWT token
                const payloadData = {
                    adminId: findAdmin.adminId,
                    email: findAdmin.email                };

                const token = jwt.sign(payloadData, process.env.JWT_SECRET, { expiresIn: "365d" });
                return res.json({ status: 200, message: "User logged in successfully", access_token: `Bearer ${token}` });
            }

            return res.json({ status: 400, message: "User not found" });
        } catch (error) {
            console.error("Error during admin login:", error);
            if (error instanceof errors.E_VALIDATION_ERROR) {
                return res.status(400).json({ errors: error.messages });
            } else {
                return res.status(500).json({ status: 500, message: "Something went wrong" });
            }
        }
    }
    
}

export default adminAuthController;