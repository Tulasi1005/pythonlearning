import { Router } from "express";
import { rewardController } from "../controllers/rewardController.js";
import { requireAuth } from "../middleware/authMiddleware.js";

const router = Router();

router.use(requireAuth);

router.get("/", rewardController.getRewards);

export default router;
