import { authService } from "../src/services/authService.js";
import { userRepository } from "../src/repositories/userRepository.js";

export async function testSecurity() {
  const results = [];
  const runTest = async (name, fn) => {
    try {
      await fn();
      results.push({ name, passed: true });
    } catch (err) {
      results.push({ name, passed: false, error: err.message });
    }
  };

  await runTest("SQL injection payload in email is safely parameterized and rejected", async () => {
    const maliciousEmail = "' OR '1'='1' -- @example.com";
    try {
      await authService.login({
        emailOrUsername: maliciousEmail,
        password: "password123"
      });
      throw new Error("Should not log in with SQL injection query");
    } catch (err) {
      if (!err.message.includes("No account found")) {
        throw err;
      }
    }
  });

  await runTest("Password hashes are not exposed in returned user objects", async () => {
    const email = `sec_test_${Date.now()}@example.com`;
    const reg = await authService.register({
      name: "Security User",
      email,
      password: "SuperSecretPassword123!"
    });

    if ("password_hash" in reg.user || "password" in reg.user) {
      throw new Error("Password field detected in returned user profile object");
    }
  });

  return results;
}
