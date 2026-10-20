import { Router } from "express";
import { bookmarkController } from "../controllers/bookmarkController.js";
import { requireAuth } from "../middleware/authMiddleware.js";
import { validateBody } from "../middleware/validate.js";
import { toggleBookmarkSchema } from "../validators/progressSchemas.js";

const router = Router();

router.use(requireAuth);

router.get("/", bookmarkController.getBookmarks);
router.post("/toggle", validateBody(toggleBookmarkSchema), bookmarkController.toggleBookmark);

export default router;
