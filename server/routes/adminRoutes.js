import { Router } from "express";
import adminAuthController from "../controllers/adminAuthController.js";
import institutionController from "../controllers/institutionController.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = Router();

// Admin authentication
router.post("/auth/login", adminAuthController.login);

// Institution routes
router.post("/institutions", adminMiddleware, institutionController.createInstitution);
router.get("/institutions", adminMiddleware, institutionController.fetchInstitutions);

router.put("/institutions/:institutionId", adminMiddleware, institutionController.updateInstitution);
router.delete("/institutions/:institutionId", adminMiddleware, institutionController.deleteInstitution);

export default router;