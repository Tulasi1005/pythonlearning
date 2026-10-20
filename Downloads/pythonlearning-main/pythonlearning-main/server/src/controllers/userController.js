import { userService } from "../services/userService.js";

export const userController = {
  async getProfile(req, res) {
    res.status(200).json({
      success: true,
      data: {
        user: req.user
      }
    });
  },

  async updateProfile(req, res, next) {
    try {
      const updatedUser = await userService.updateProfile(req.user.id, req.body);
      res.status(200).json({
        success: true,
        data: {
          user: updatedUser
        },
        message: "Profile updated successfully"
      });
    } catch (err) {
      next(err);
    }
  },

  async deleteAccount(req, res, next) {
    try {
      await userService.deleteAccount(req.user.id);
      res.clearCookie("py_adaptive_session_id");
      res.status(200).json({
        success: true,
        message: "Account deleted successfully"
      });
    } catch (err) {
      next(err);
    }
  }
};
