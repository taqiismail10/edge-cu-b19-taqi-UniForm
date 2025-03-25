import { Router } from 'express';
import authController from '../controllers/authController.js';
import profileController from '../controllers/profileController.js';
import authMiddleware from '../middleware/authenticate.js';
const router = Router()


router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);

// * Profile routes
router.get("/profile", authMiddleware, profileController.index); // Private route
router.put("/profile/:id", authMiddleware, profileController.update); // Private route

export default router;