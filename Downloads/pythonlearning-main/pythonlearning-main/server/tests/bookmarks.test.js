import { authService } from "../src/services/authService.js";
import { bookmarkService } from "../src/services/bookmarkService.js";

export async function testBookmarks() {
  const results = [];
  const runTest = async (name, fn) => {
    try {
      await fn();
      results.push({ name, passed: true });
    } catch (err) {
      results.push({ name, passed: false, error: err.message });
    }
  };

  const userA = await authService.register({
    name: "User A",
    email: `user_a_${Date.now()}@example.com`,
    password: "Password123!"
  });

  const userB = await authService.register({
    name: "User B",
    email: `user_b_${Date.now()}@example.com`,
    password: "Password123!"
  });

  await runTest("Toggle bookmark adds and removes topic bookmark", async () => {
    // Add bookmark
    const addRes = await bookmarkService.toggleBookmark(userA.user.id, "oop-classes-objects");
    if (!addRes.isBookmarked) {
      throw new Error("Expected bookmark to be added");
    }
    if (!addRes.user.stats.bookmarkedTopics.includes("oop-classes-objects")) {
      throw new Error("Bookmark not reflected in user profile");
    }

    // Toggle again -> remove
    const removeRes = await bookmarkService.toggleBookmark(userA.user.id, "oop-classes-objects");
    if (removeRes.isBookmarked) {
      throw new Error("Expected bookmark to be removed on second toggle");
    }
    if (removeRes.user.stats.bookmarkedTopics.includes("oop-classes-objects")) {
      throw new Error("Bookmark should have been removed from user profile");
    }
  });

  await runTest("User bookmark data isolation (User A cannot see or mutate User B's bookmarks)", async () => {
    await bookmarkService.toggleBookmark(userA.user.id, "topic-exclusive-to-a");
    const userBBookmarks = await bookmarkService.getBookmarks(userB.user.id);

    if (userBBookmarks.includes("topic-exclusive-to-a")) {
      throw new Error("Data isolation breach: User B has access to User A's bookmark");
    }
  });

  return results;
}
