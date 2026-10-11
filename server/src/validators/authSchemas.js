import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().trim().min(2, "Full name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please provide a valid email address").max(255),
  password: z.string().min(6, "Password must be at least 6 characters").max(128),
  stage: z.enum(["kid", "young", "college", "graduate", "professional"]).default("young"),
  language: z.enum(["english", "english-telugu", "telugu", "hindi"]).default("english"),
  avatar: z.string().max(50).default("snake_blue"),
  bio: z.string().max(500).optional().default("")
});

export const loginSchema = z.object({
  emailOrUsername: z.string().trim().min(1, "Email or username is required").max(255),
  password: z.string().min(1, "Password is required").max(128),
  rememberMe: z.boolean().optional().default(true)
});

export const forgotPasswordSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address")
});

export const resetPasswordSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address"),
  newPassword: z.string().min(6, "New password must be at least 6 characters").max(128),
  token: z.string().optional()
});
