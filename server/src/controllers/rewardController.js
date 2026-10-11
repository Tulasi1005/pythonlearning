import { rewardService } from "../services/rewardService.js";

export const rewardController = {
  async getRewards(req, res, next) {
    try {
      const rewards = await rewardService.getRewards(req.user.id);
      res.status(200).json({
        success: true,
        data: rewards
      });
    } catch (err) {
      next(err);
    }
  }
};
