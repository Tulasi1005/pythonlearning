import { progressService } from "../services/progressService.js";

export const progressController = {
  async getProgress(req, res, next) {
    try {
      const progress = await progressService.getProgress(req.user.id);
      res.status(200).json({
        success: true,
        data: progress
      });
    } catch (err) {
      next(err);
    }
  },

  async toggleCompletion(req, res, next) {
    try {
      const { topicId, completed } = req.body;
      const isCompletedTarget = completed !== undefined ? completed : true;
      const result = await progressService.toggleCompletion(
        req.user.id,
        topicId,
        isCompletedTarget
      );

      res.status(200).json({
        success: true,
        data: result,
        message: result.isCompleted ? "Topic marked as complete" : "Topic unmarked"
      });
    } catch (err) {
      next(err);
    }
  },

  async recordQuiz(req, res, next) {
    try {
      const { topicId, quizScore } = req.body;
      const result = await progressService.recordQuiz(
        req.user.id,
        topicId,
        quizScore || 100
      );

      res.status(200).json({
        success: true,
        data: result,
        message: "Quiz score recorded successfully"
      });
    } catch (err) {
      next(err);
    }
  }
};
