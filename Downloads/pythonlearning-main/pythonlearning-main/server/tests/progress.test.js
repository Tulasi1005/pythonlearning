import { authService } from "../src/services/authService.js";
import { progressService } from "../src/services/progressService.js";

export async function testProgress() {
  const results = [];
  const runTest = async (name, fn) => {
    try {
      await fn();
      results.push({ name, passed: true });
    } catch (err) {
      results.push({ name, passed: false, error: err.message });
    }
  };

  const testEmail = `progress_tester_${Date.now()}@example.com`;
  const reg = await authService.register({
    name: "Progress Tester",
    email: testEmail,
    password: "Password123!"
  });
  const userId = reg.user.id;

  await runTest("Completing a topic awards +30 XP and records completion", async () => {
    const res = await progressService.toggleCompletion(userId, "what-is-python", true);
    if (!res.isCompleted) {
      throw new Error("Topic should be marked completed");
    }
    if (res.user.stats.xp !== 80) { // 50 initial + 30
      throw new Error(`Expected 80 XP, got ${res.user.stats.xp}`);
    }
    if (!res.user.stats.completedTopics.includes("what-is-python")) {
      throw new Error("Completed topics list does not contain what-is-python");
    }
  });

  await runTest("Re-submitting the same completion does not inflate XP (Idempotency)", async () => {
    const res = await progressService.toggleCompletion(userId, "what-is-python", true);
    if (res.user.stats.xp !== 80) {
      throw new Error(`XP should remain 80 on duplicate completion, got ${res.user.stats.xp}`);
    }
  });

  await runTest("Submitting quiz score records score and awards XP bonus", async () => {
    const res = await progressService.recordQuiz(userId, "what-is-python", 95);
    if (res.user.stats.quizScores["what-is-python"] !== 95) {
      throw new Error("Quiz score not recorded properly");
    }
    if (res.user.stats.xp !== 105) { // 80 + 25 (bonus for >=80%)
      throw new Error(`Expected 105 XP, got ${res.user.stats.xp}`);
    }
  });

  return results;
}
