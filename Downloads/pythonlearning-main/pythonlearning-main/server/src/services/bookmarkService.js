import { bookmarkRepository } from "../repositories/bookmarkRepository.js";
import { activityRepository } from "../repositories/activityRepository.js";
import { buildFullUserProfile } from "./authService.js";

export const bookmarkService = {
  async getBookmarks(userId) {
    return await bookmarkRepository.getByUserId(userId);
  },

  async toggleBookmark(userId, topicId) {
    const { isBookmarked } = await bookmarkRepository.toggleBookmark(userId, topicId);
    if (isBookmarked) {
      await activityRepository.log(userId, "BOOKMARK_ADD", topicId, 0);
    }
    const user = await buildFullUserProfile(userId);
    return {
      isBookmarked,
      user
    };
  }
};
