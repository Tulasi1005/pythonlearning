import { authService } from "../src/services/authService.js";
import { userRepository } from "../src/repositories/userRepository.js";
import { sessionRepository } from "../src/repositories/sessionRepository.js";

export async function testAuth() {
  const results = [];
  const runTest = async (name, fn) => {
    try {
      await fn();
      results.push({ name, passed: true });
    } catch (err) {
      results.push({ name, passed: false, error: err.message });
    }
  };

  const testEmail = `test_runner_${Date.now()}@example.com`;

  await runTest("User registration creates record, password hash, and +50 XP bonus", async () => {
    const res = await authService.register({
      name: "Test Runner",
      email: testEmail,
      password: "TestPassword123!",
      stage: "college",
      language: "english",
      avatar: "robot"
    });

    if (!res.user || res.user.email !== testEmail) {
      throw new Error("User object not returned or email mismatch");
    }
    if (res.user.stats.xp !== 50) {
      throw new Error(`Expected 50 XP, got ${res.user.stats.xp}`);
    }
    if (!res.sessionToken) {
      throw new Error("Session token was not issued");
    }

    // Check DB raw password
    const rawUser = await userRepository.findByEmail(testEmail);
    if (rawUser.password_hash === "TestPassword123!" || !rawUser.password_hash.startsWith("$2")) {
      throw new Error("Password was not securely hashed with bcrypt");
    }
  });

  await runTest("Duplicate email registration is rejected with 409 Conflict", async () => {
    try {
      await authService.register({
        name: "Test Runner 2",
        email: testEmail,
        password: "AnotherPassword123!"
      });
      throw new Error("Should have thrown duplicate email error");
    } catch (err) {
      if (!err.message.includes("already exists")) {
        throw err;
      }
    }
  });

  await runTest("Login succeeds with valid credentials and loads full profile", async () => {
    const res = await authService.login({
      emailOrUsername: testEmail,
      password: "TestPassword123!"
    });

    if (!res.user || res.user.email !== testEmail) {
      throw new Error("Login failed to return correct user");
    }
    if (!res.sessionToken) {
      throw new Error("Login failed to issue session token");
    }
  });

  await runTest("Login fails with invalid password", async () => {
    try {
      await authService.login({
        emailOrUsername: testEmail,
        password: "WrongPassword999!"
      });
      throw new Error("Login should have failed on wrong password");
    } catch (err) {
      if (!err.message.includes("Incorrect password")) {
        throw err;
      }
    }
  });

  await runTest("Session resolution and logout invalidation", async () => {
    const loginRes = await authService.login({
      emailOrUsername: testEmail,
      password: "TestPassword123!"
    });

    const sessionUser = await authService.getSessionUser(loginRes.sessionToken);
    if (!sessionUser || sessionUser.id !== loginRes.user.id) {
      throw new Error("Session resolution failed");
    }

    // Logout
    await authService.logout(loginRes.sessionToken);

    // Verify session revoked
    const afterLogoutUser = await authService.getSessionUser(loginRes.sessionToken);
    if (afterLogoutUser !== null) {
      throw new Error("Session should be null after logout");
    }
  });

  return results;
}
