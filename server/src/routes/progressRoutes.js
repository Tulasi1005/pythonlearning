import { Router } from "express";
import { progressController } from "../controllers/progressController.js";
import { requireAuth } from "../middleware/authMiddleware.js";
import { validateBody } from "../middleware/validate.js";
import { toggleProgressSchema } from "../validators/progressSchemas.js";

const router = Router();

router.use(requireAuth);

router.get("/", progressController.getProgress);
router.post("/toggle", validateBody(toggleProgressSchema), progressController.toggleCompletion);
router.post("/quiz", validateBody(toggleProgressSchema), progressController.recordQuiz);

export default router;
