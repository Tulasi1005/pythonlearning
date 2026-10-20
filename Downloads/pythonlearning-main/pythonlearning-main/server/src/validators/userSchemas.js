import { z } from "zod";

export const updateProfileSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100).optional(),
  bio: z.string().max(500).optional(),
  stage: z.enum(["kid", "young", "college", "graduate", "professional"]).optional(),
  language: z.enum(["english", "english-telugu", "telugu", "hindi"]).optional(),
  avatar: z.string().max(50).optional()
});
