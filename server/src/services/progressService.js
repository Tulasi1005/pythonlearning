import { withTransaction } from "../config/db.js";
import { progressRepository } from "../repositories/progressRepository.js";
import { rewardRepository } from "../repositories/rewardRepository.js";
import { activityRepository } from "../repositories/activityRepository.js";
import { buildFullUserProfile } from "./authService.js";

export const progressService = {
  async getProgress(userId) {
    return await progressRepository.getByUserId(userId);
  },

  async toggleCompletion(userId, topicId, completed = true) {
    return await withTransaction(async (client) => {
      const { record, wasAlreadyCompleted } = await progressRepository.toggleCompletion(
        userId,
        topicId,
        completed,
        client
      );

      // Award or adjust XP only on state transition (prevents duplicate XP inflation)
      let xpDelta = 0;
      if (completed && !wasAlreadyCompleted) {
        xpDelta = 30; // +30 XP for new completion
        await rewardRepository.addXP(userId, xpDelta, client);
        await activityRepository.log(userId, "LESSON_COMPLETE", topicId, xpDelta, {}, client);
      } else if (!completed && wasAlreadyCompleted) {
        xpDelta = -30;
        await rewardRepository.addXP(userId, xpDelta, client);
        await activityRepository.log(userId, "LESSON_UNCOMPLETE", topicId, xpDelta, {}, client);
      }

      const updatedProfile = await buildFullUserProfile(userId, client);
      return {
        record,
        isCompleted: Boolean(record.completed),
        user: updatedProfile
      };
    });
  },

  async recordQuiz(userId, topicId, scorePercent) {
    return await withTransaction(async (client) => {
      const prevProgress = await progressRepository.getTopicProgress(userId, topicId, client);
      const prevScore = prevProgress?.quiz_score || 0;

      const record = await progressRepository.saveQuizResult(
        userId,
        topicId,
        scorePercent,
        client
      );

      // Award XP bonus only if score improved
      if (scorePercent > prevScore) {
        const xpDelta = scorePercent >= 80 ? 25 : 10;
        await rewardRepository.addXP(userId, xpDelta, client);
        await activityRepository.log(
          userId,
          "QUIZ_SUBMIT",
          topicId,
          xpDelta,
          { score: scorePercent },
          client
        );
      }

      const updatedProfile = await buildFullUserProfile(userId, client);
      return {
        record,
        user: updatedProfile
      };
    });
  }
};
