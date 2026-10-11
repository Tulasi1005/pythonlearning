import { bookmarkService } from "../services/bookmarkService.js";

export const bookmarkController = {
  async getBookmarks(req, res, next) {
    try {
      const bookmarks = await bookmarkService.getBookmarks(req.user.id);
      res.status(200).json({
        success: true,
        data: bookmarks
      });
    } catch (err) {
      next(err);
    }
  },

  async toggleBookmark(req, res, next) {
    try {
      const { topicId } = req.body;
      const result = await bookmarkService.toggleBookmark(req.user.id, topicId);
      res.status(200).json({
        success: true,
        data: result,
        message: result.isBookmarked ? "Bookmark added" : "Bookmark removed"
      });
    } catch (err) {
      next(err);
    }
  }
};
