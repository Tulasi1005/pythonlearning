import { z } from "zod";

export const toggleProgressSchema = z.object({
  topicId: z.string().trim().min(1, "Topic ID is required").max(100),
  completed: z.boolean().optional(),
  quizScore: z.number().int().min(0).max(100).optional()
});

export const toggleBookmarkSchema = z.object({
  topicId: z.string().trim().min(1, "Topic ID is required").max(100)
});
