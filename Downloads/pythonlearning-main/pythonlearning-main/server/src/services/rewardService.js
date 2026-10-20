import { rewardRepository } from "../repositories/rewardRepository.js";

export const rewardService = {
  async getRewards(userId) {
    return (
      (await rewardRepository.getByUserId(userId)) || {
        total_xp: 50,
        current_streak: 1,
        longest_streak: 1
      }
    );
  }
};
