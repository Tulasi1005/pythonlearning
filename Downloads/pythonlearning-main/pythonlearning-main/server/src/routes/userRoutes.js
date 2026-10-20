import { Router } from "express";
import { userController } from "../controllers/userController.js";
import { requireAuth } from "../middleware/authMiddleware.js";
import { validateBody } from "../middleware/validate.js";
import { updateProfileSchema } from "../validators/userSchemas.js";

const router = Router();

router.use(requireAuth);

router.get("/me", userController.getProfile);
router.patch("/me", validateBody(updateProfileSchema), userController.updateProfile);
router.delete("/me", userController.deleteAccount);

export default router;
