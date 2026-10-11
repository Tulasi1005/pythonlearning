import { userRepository } from "../repositories/userRepository.js";
import { buildFullUserProfile } from "./authService.js";

export const userService = {
  async updateProfile(userId, updates) {
    await userRepository.update(userId, updates);
    return await buildFullUserProfile(userId);
  },

  async deleteAccount(userId) {
    return await userRepository.delete(userId);
  }
};
