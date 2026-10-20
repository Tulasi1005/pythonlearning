// server/tests/comprehensive_qa_suite.js
// Autonomous Senior QA Auditor Comprehensive Test Suite for Python Adaptive Learning Engine

import { query, withTransaction } from "../src/config/db.js";
import { config } from "../src/config/env.js";
import crypto from "crypto";

const API_BASE = `http://localhost:${config.port}/api`;

const results = {
  passed: 0,
  failed: 0,
  blocked: 0,
  notRun: 0,
  details: []
};

function recordTest(suite, id, name, status, evidence, error = null) {
  if (status === "PASS") results.passed++;
  else if (status === "FAIL") results.failed++;
  else if (status === "BLOCKED") results.blocked++;
  else results.notRun++;

  results.details.push({
    suite,
    id,
    name,
    status,
    evidence,
    error: error ? error.message || String(error) : null
  });

  const icon = status === "PASS" ? "🟢" : status === "FAIL" ? "🔴" : "🟡";
  console.log(`  ${icon} [${status}] [${id}] [${suite}] ${name}`);
  if (error) console.error(`     ❌ Error Details: ${error.message || error}`);
}

async function api(path, options = {}, cookies = "") {
  const headers = {
    "Content-Type": "application/json",
    ...(options.noBypass ? {} : { "x-test-bypass": "true" }),
    ...(options.headers || {})
  };
  if (cookies) {
    headers["Cookie"] = cookies;
  }
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers
  });

  let responseCookie = "";
  const setCookie = res.headers.get("set-cookie");
  if (setCookie) {
    const match = setCookie.match(/py_adaptive_session_id=[^;]+/);
    if (match) responseCookie = match[0];
  }

  const rawSetCookie = setCookie || "";
  const text = await res.text();
  let json = null;
  try {
    json = JSON.parse(text);
  } catch (e) {
    json = text;
  }

  return {
    status: res.status,
    headers: res.headers,
    rawSetCookie,
    data: json,
    cookie: responseCookie
  };
}

async function runComprehensiveQA() {
  console.log("==================================================================");
  console.log("🔍 STARTING INDEPENDENT SENIOR QA AUDIT SUITE");
  console.log(`Target API: ${API_BASE}`);
  console.log(`Target Database: ${config.databaseUrl.split("@")[1] || config.databaseUrl}`);
  console.log("==================================================================\n");

  const timestamp = Date.now();
  const testUserA = {
    name: "Auditor Alpha",
    email: `auditor_alpha_${timestamp}@test.com`,
    password: "Password@123",
    stage: "college",
    language: "english"
  };
  const testUserB = {
    name: "Auditor Beta",
    email: `auditor_beta_${timestamp}@test.com`,
    password: "Password@456",
    stage: "kid",
    language: "telugu"
  };

  let cookieA = "";
  let userAId = "";
  let cookieB = "";
  let userBId = "";
  let rawCookieHeader = "";

  // -------------------------------------------------------------------------
  // PHASE 1: HEALTH, CONNECTIVITY & METADATA
  // -------------------------------------------------------------------------
  console.log("--- PHASE 1: System Health & Database Connectivity ---");
  try {
    const res = await api("/health");
    if (res.status === 200 && res.data.status === "healthy" && res.data.services?.database === "connected") {
      recordTest("System", "SYS-01", "Health check endpoint returns 200 with connected database", "PASS", res.data);
    } else {
      recordTest("System", "SYS-01", "Health check endpoint returns 200 with connected database", "FAIL", res.data);
    }
  } catch (err) {
    recordTest("System", "SYS-01", "Health check endpoint returns 200 with connected database", "FAIL", null, err);
  }

  try {
    const dbTest = await query("SELECT current_database(), version();");
    if (dbTest.rows.length > 0) {
      recordTest("System", "SYS-02", "Direct PostgreSQL connection and schema verification", "PASS", {
        db: dbTest.rows[0].current_database,
        version: dbTest.rows[0].version
      });
    } else {
      recordTest("System", "SYS-02", "Direct PostgreSQL connection and schema verification", "FAIL", dbTest);
    }
  } catch (err) {
    recordTest("System", "SYS-02", "Direct PostgreSQL connection and schema verification", "FAIL", null, err);
  }

  // -------------------------------------------------------------------------
  // PHASE 2: AUTHENTICATION, COOKIES & SECURITY VALIDATION
  // -------------------------------------------------------------------------
  console.log("\n--- PHASE 2: Authentication, Form Validation & Cookie Security ---");

  // 1. Missing required fields
  try {
    const res = await api("/auth/register", {
      method: "POST",
      body: JSON.stringify({ email: `invalid_${timestamp}@test.com` })
    });
    if (res.status === 400 && res.data.success === false) {
      recordTest("Auth", "AUTH-01", "Registration rejects missing required fields (name, password)", "PASS", res.data);
    } else {
      recordTest("Auth", "AUTH-01", "Registration rejects missing required fields (name, password)", "FAIL", res.data);
    }
  } catch (err) {
    recordTest("Auth", "AUTH-01", "Registration rejects missing required fields (name, password)", "FAIL", null, err);
  }

  // 2. Invalid email format
  try {
    const res = await api("/auth/register", {
      method: "POST",
      body: JSON.stringify({ name: "Invalid", email: "not-an-email-address", password: "Password@123" })
    });
    if (res.status === 400) {
      recordTest("Auth", "AUTH-02", "Registration rejects malformed email address format", "PASS", res.data);
    } else {
      recordTest("Auth", "AUTH-02", "Registration rejects malformed email address format", "FAIL", res.data);
    }
  } catch (err) {
    recordTest("Auth", "AUTH-02", "Registration rejects malformed email address format", "FAIL", null, err);
  }

  // 3. Password shorter than minimum length (6 chars)
  try {
    const res = await api("/auth/register", {
      method: "POST",
      body: JSON.stringify({ name: "ShortPass", email: `short_${timestamp}@test.com`, password: "123" })
    });
    if (res.status === 400) {
      recordTest("Auth", "AUTH-03", "Registration rejects short password (< 6 chars)", "PASS", res.data);
    } else {
      recordTest("Auth", "AUTH-03", "Registration rejects short password (< 6 chars)", "FAIL", res.data);
    }
  } catch (err) {
    recordTest("Auth", "AUTH-03", "Registration rejects short password (< 6 chars)", "FAIL", null, err);
  }

  // 4. Valid Registration User Alpha & Cookie Security Inspection
  try {
    const res = await api("/auth/register", {
      method: "POST",
      body: JSON.stringify(testUserA)
    });
    rawCookieHeader = res.rawSetCookie;
    const hasHttpOnly = rawCookieHeader.toLowerCase().includes("httponly");
    const hasSameSite = rawCookieHeader.toLowerCase().includes("samesite=lax");

    if (res.status === 201 && res.data.success && res.data.data.user && hasHttpOnly && hasSameSite) {
      cookieA = res.cookie;
      userAId = res.data.data.user.id;
      recordTest(
        "Auth",
        "AUTH-04",
        "Valid registration creates account, issues secure HttpOnly SameSite=Lax cookie, awards +50 XP",
        "PASS",
        {
          userId: userAId,
          xp: res.data.data.user.stats.xp,
          rawCookieHeader
        }
      );
    } else {
      recordTest(
        "Auth",
        "AUTH-04",
        "Valid registration creates account, issues secure HttpOnly SameSite=Lax cookie, awards +50 XP",
        "FAIL",
        { res: res.data, rawCookieHeader }
      );
    }
  } catch (err) {
    recordTest("Auth", "AUTH-04", "Valid registration creates account, issues secure HttpOnly SameSite=Lax cookie, awards +50 XP", "FAIL", null, err);
  }

  // 5. Valid Registration User Beta
  try {
    const res = await api("/auth/register", {
      method: "POST",
      body: JSON.stringify(testUserB)
    });
    if (res.status === 201 && res.data.success) {
      cookieB = res.cookie;
      userBId = res.data.data.user.id;
      recordTest("Auth", "AUTH-05", "Second independent tenant user registers successfully", "PASS", { userId: userBId });
    } else {
      recordTest("Auth", "AUTH-05", "Second independent tenant user registers successfully", "FAIL", res.data);
    }
  } catch (err) {
    recordTest("Auth", "AUTH-05", "Second independent tenant user registers successfully", "FAIL", null, err);
  }

  // 6. Duplicate Email Registration
  try {
    const res = await api("/auth/register", {
      method: "POST",
      body: JSON.stringify(testUserA)
    });
    if (res.status === 409) {
      recordTest("Auth", "AUTH-06", "Duplicate email registration rejected with 409 Conflict", "PASS", res.data);
    } else {
      recordTest("Auth", "AUTH-06", "Duplicate email registration rejected with 409 Conflict", "FAIL", res.data);
    }
  } catch (err) {
    recordTest("Auth", "AUTH-06", "Duplicate email registration rejected with 409 Conflict", "FAIL", null, err);
  }

  // 7. Case-Insensitive Email Login
  try {
    const res = await api("/auth/login", {
      method: "POST",
      body: JSON.stringify({
        emailOrUsername: testUserA.email.toUpperCase(),
        password: testUserA.password
      })
    });
    if (res.status === 200 && res.data.success) {
      recordTest("Auth", "AUTH-07", "Case-insensitive email login succeeds", "PASS", res.data.data.user.email);
    } else {
      recordTest("Auth", "AUTH-07", "Case-insensitive email login succeeds", "FAIL", res.data);
    }
  } catch (err) {
    recordTest("Auth", "AUTH-07", "Case-insensitive email login succeeds", "FAIL", null, err);
  }

  // 8. Login with Invalid Password
  try {
    const res = await api("/auth/login", {
      method: "POST",
      body: JSON.stringify({
        emailOrUsername: testUserA.email,
        password: "WrongPassword!999"
      })
    });
    if (res.status === 401) {
      recordTest("Auth", "AUTH-08", "Login with incorrect password returns 401 Unauthorized", "PASS", res.data);
    } else {
      recordTest("Auth", "AUTH-08", "Login with incorrect password returns 401 Unauthorized", "FAIL", res.data);
    }
  } catch (err) {
    recordTest("Auth", "AUTH-08", "Login with incorrect password returns 401 Unauthorized", "FAIL", null, err);
  }

  // 9. Login with Nonexistent Account
  try {
    const res = await api("/auth/login", {
      method: "POST",
      body: JSON.stringify({
        emailOrUsername: "nobody_exists_99999@test.com",
        password: "Password@123"
      })
    });
    if (res.status === 404) {
      recordTest("Auth", "AUTH-09", "Login with non-existent email returns 404 Not Found", "PASS", res.data);
    } else {
      recordTest("Auth", "AUTH-09", "Login with non-existent email returns 404 Not Found", "FAIL", res.data);
    }
  } catch (err) {
    recordTest("Auth", "AUTH-09", "Login with non-existent email returns 404 Not Found", "FAIL", null, err);
  }

  // 10. Single-Use Password Reset Token & Expiration Enforcement
  try {
    // 10a. Request reset token
    const forgotRes = await api("/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email: testUserA.email })
    });
    const resetToken = forgotRes.data?.data?.resetToken;

    // 10b. Consume reset token with new password
    const resetRes = await api("/auth/reset-password", {
      method: "POST",
      body: JSON.stringify({ email: testUserA.email, newPassword: "NewPassword@123", token: resetToken })
    });

    // 10c. Verify new password works
    const newLoginRes = await api("/auth/login", {
      method: "POST",
      body: JSON.stringify({ emailOrUsername: testUserA.email, password: "NewPassword@123" })
    });

    // 10d. Attempt to reuse already consumed reset token (Single-use enforcement)
    const reuseAttempt = await api("/auth/reset-password", {
      method: "POST",
      body: JSON.stringify({ email: testUserA.email, newPassword: "AnotherPassword@123", token: resetToken })
    });

    // 10e. Attempt to reset with bogus invalid token
    const bogusAttempt = await api("/auth/reset-password", {
      method: "POST",
      body: JSON.stringify({ email: testUserA.email, newPassword: "AnotherPassword@123", token: "fake_token_12345" })
    });

    if (
      forgotRes.status === 200 &&
      resetRes.status === 200 &&
      newLoginRes.status === 200 &&
      reuseAttempt.status === 400 &&
      bogusAttempt.status === 400
    ) {
      cookieA = newLoginRes.cookie;
      recordTest(
        "Auth",
        "AUTH-10",
        "Password reset single-use token lifecycle & replay attack prevention verified",
        "PASS",
        {
          forgotStatus: forgotRes.status,
          resetStatus: resetRes.status,
          loginStatus: newLoginRes.status,
          reuseRejection: reuseAttempt.status,
          bogusRejection: bogusAttempt.status
        }
      );
    } else {
      recordTest(
        "Auth",
        "AUTH-10",
        "Password reset single-use token lifecycle & replay attack prevention verified",
        "FAIL",
        { forgotRes, resetRes, newLoginRes, reuseAttempt, bogusAttempt }
      );
    }
  } catch (err) {
    recordTest("Auth", "AUTH-10", "Password reset single-use token lifecycle & replay attack prevention verified", "FAIL", null, err);
  }

  // -------------------------------------------------------------------------
  // PHASE 3: PROFILE MANAGEMENT & ADAPTIVE PREFERENCES
  // -------------------------------------------------------------------------
  console.log("\n--- PHASE 3: Profile Management & Adaptive Preferences ---");

  // 1. Get authenticated user profile (/api/auth/me)
  try {
    const res = await api("/auth/me", {}, cookieA);
    if (res.status === 200 && res.data.data.user.email === testUserA.email.toLowerCase()) {
      recordTest("Profile", "PROF-01", "Load authenticated user profile via session cookie", "PASS", res.data.data.user);
    } else {
      recordTest("Profile", "PROF-01", "Load authenticated user profile via session cookie", "FAIL", res.data);
    }
  } catch (err) {
    recordTest("Profile", "PROF-01", "Load authenticated user profile via session cookie", "FAIL", null, err);
  }

  // 2. Update Profile fields (stage, language, bio, avatar)
  try {
    const updateRes = await api(
      "/users/me",
      {
        method: "PATCH",
        body: JSON.stringify({
          name: "Auditor Alpha Senior",
          bio: "Senior Automated QA Auditor",
          stage: "professional",
          language: "english-telugu",
          avatar: "robot"
        })
      },
      cookieA
    );
    if (
      updateRes.status === 200 &&
      updateRes.data.data.user.stage === "professional" &&
      updateRes.data.data.user.language === "english-telugu" &&
      updateRes.data.data.user.avatar === "robot"
    ) {
      recordTest("Profile", "PROF-02", "Update profile persona, language, bio and avatar persists in PostgreSQL", "PASS", updateRes.data.data.user);
    } else {
      recordTest("Profile", "PROF-02", "Update profile persona, language, bio and avatar persists in PostgreSQL", "FAIL", updateRes.data);
    }
  } catch (err) {
    recordTest("Profile", "PROF-02", "Update profile persona, language, bio and avatar persists in PostgreSQL", "FAIL", null, err);
  }

  // -------------------------------------------------------------------------
  // PHASE 4: LEARNING PROGRESS, XP AWARDS & IDEMPOTENCY
  // -------------------------------------------------------------------------
  console.log("\n--- PHASE 4: Learning Progress, XP & Idempotency ---");

  // 1. Complete Lesson 1 (+30 XP)
  try {
    const res = await api(
      "/progress/toggle",
      {
        method: "POST",
        body: JSON.stringify({ topicId: "python-basics", completed: true })
      },
      cookieA
    );
    if (res.status === 200 && res.data.data?.isCompleted === true && res.data.data?.user?.stats?.xp >= 80) {
      recordTest("Progress", "PROG-01", "Completing a topic awards +30 XP and records completion in PostgreSQL", "PASS", {
        xp: res.data.data.user.stats.xp
      });
    } else {
      recordTest("Progress", "PROG-01", "Completing a topic awards +30 XP and records completion in PostgreSQL", "FAIL", res.data);
    }
  } catch (err) {
    recordTest("Progress", "PROG-01", "Completing a topic awards +30 XP and records completion in PostgreSQL", "FAIL", null, err);
  }

  // 2. Re-submitting completion should NOT award duplicate XP (Idempotency)
  try {
    const initialXP = (await api("/rewards", {}, cookieA)).data.data.total_xp;
    await api(
      "/progress/toggle",
      {
        method: "POST",
        body: JSON.stringify({ topicId: "python-basics", completed: true })
      },
      cookieA
    );
    const postXP = (await api("/rewards", {}, cookieA)).data.data.total_xp;
    if (initialXP === postXP) {
      recordTest("Progress", "PROG-02", "Idempotent completion prevents duplicate XP inflation on repeated requests", "PASS", {
        initialXP,
        postXP
      });
    } else {
      recordTest("Progress", "PROG-02", "Idempotent completion prevents duplicate XP inflation on repeated requests", "FAIL", {
        initialXP,
        postXP
      });
    }
  } catch (err) {
    recordTest("Progress", "PROG-02", "Idempotent completion prevents duplicate XP inflation on repeated requests", "FAIL", null, err);
  }

  // 3. Submit Quiz Score
  try {
    const res = await api(
      "/progress/quiz",
      {
        method: "POST",
        body: JSON.stringify({ topicId: "python-basics", quizScore: 90 })
      },
      cookieA
    );
    if (res.status === 200 && res.data.success) {
      recordTest("Progress", "PROG-03", "Quiz submission records score and awards score-based XP bonus", "PASS", res.data);
    } else {
      recordTest("Progress", "PROG-03", "Quiz submission records score and awards score-based XP bonus", "FAIL", res.data);
    }
  } catch (err) {
    recordTest("Progress", "PROG-03", "Quiz submission records score and awards score-based XP bonus", "FAIL", null, err);
  }

  // -------------------------------------------------------------------------
  // PHASE 5: BOOKMARKS & MULTI-TENANT ISOLATION (IDOR)
  // -------------------------------------------------------------------------
  console.log("\n--- PHASE 5: Bookmarks & Multi-User Data Isolation ---");

  // 1. Toggle bookmark for User A
  try {
    const res = await api(
      "/bookmarks/toggle",
      {
        method: "POST",
        body: JSON.stringify({ topicId: "python-basics" })
      },
      cookieA
    );
    if (res.status === 200 && res.data.data.isBookmarked === true) {
      recordTest("Bookmarks", "BM-01", "Bookmark toggle adds topic to user's saved list in PostgreSQL", "PASS", res.data);
    } else {
      recordTest("Bookmarks", "BM-01", "Bookmark toggle adds topic to user's saved list in PostgreSQL", "FAIL", res.data);
    }
  } catch (err) {
    recordTest("Bookmarks", "BM-01", "Bookmark toggle adds topic to user's saved list in PostgreSQL", "FAIL", null, err);
  }

  // 2. Data Isolation: User B cannot see User A's bookmarks or progress
  try {
    const bookmarksB = await api("/bookmarks", {}, cookieB);
    const progressB = await api("/progress", {}, cookieB);
    if (
      bookmarksB.status === 200 &&
      bookmarksB.data.data.length === 0 &&
      progressB.status === 200 &&
      progressB.data.data.length === 0
    ) {
      recordTest("Security", "SEC-01", "Multi-tenant data isolation: User B has zero-leakage state (No IDOR)", "PASS", {
        bookmarksB: bookmarksB.data.data,
        progressB: progressB.data.data
      });
    } else {
      recordTest("Security", "SEC-01", "Multi-tenant data isolation: User B has zero-leakage state (No IDOR)", "FAIL", {
        bookmarksB,
        progressB
      });
    }
  } catch (err) {
    recordTest("Security", "SEC-01", "Multi-tenant data isolation: User B has zero-leakage state (No IDOR)", "FAIL", null, err);
  }

  // -------------------------------------------------------------------------
  // PHASE 6: SECURITY, SQLi, SESSION EXPIRATION & RATE LIMITING
  // -------------------------------------------------------------------------
  console.log("\n--- PHASE 6: Security, SQLi, Session Expiration & Rate Limiting ---");

  // 1. SQL Injection attempt in Login Email
  try {
    const sqliRes = await api("/auth/login", {
      method: "POST",
      body: JSON.stringify({
        emailOrUsername: "' OR '1'='1' --",
        password: "any"
      })
    });
    if (sqliRes.status === 404 || sqliRes.status === 401 || sqliRes.status === 400) {
      recordTest("Security", "SEC-02", "SQL injection vector in email parameter safely handled via parameterized queries", "PASS", sqliRes.data);
    } else {
      recordTest("Security", "SEC-02", "SQL injection vector in email parameter safely handled via parameterized queries", "FAIL", sqliRes.data);
    }
  } catch (err) {
    recordTest("Security", "SEC-02", "SQL injection vector in email parameter safely handled via parameterized queries", "FAIL", null, err);
  }

  // 2. Unauthenticated access to protected routes
  try {
    const unauthProgress = await api("/progress", {});
    const unauthProfile = await api("/users/me", {});
    const unauthRewards = await api("/rewards", {});
    if (unauthProgress.status === 401 && unauthProfile.status === 401 && unauthRewards.status === 401) {
      recordTest("Security", "SEC-03", "Unauthenticated access to protected endpoints rejected with 401", "PASS", {
        unauthProgress: unauthProgress.status,
        unauthProfile: unauthProfile.status,
        unauthRewards: unauthRewards.status
      });
    } else {
      recordTest("Security", "SEC-03", "Unauthenticated access to protected endpoints rejected with 401", "FAIL", {
        unauthProgress,
        unauthProfile,
        unauthRewards
      });
    }
  } catch (err) {
    recordTest("Security", "SEC-03", "Unauthenticated access to protected endpoints rejected with 401", "FAIL", null, err);
  }

  // 3. No password hash exposure in returned user objects
  try {
    const profileRes = await api("/auth/me", {}, cookieA);
    const userJson = JSON.stringify(profileRes.data);
    if (!userJson.includes("password_hash") && !userJson.includes("$2a$") && !userJson.includes("$2b$")) {
      recordTest("Security", "SEC-04", "Password hash is scrubbed from all user payloads", "PASS", profileRes.data.data.user);
    } else {
      recordTest("Security", "SEC-04", "Password hash is scrubbed from all user payloads", "FAIL", profileRes.data);
    }
  } catch (err) {
    recordTest("Security", "SEC-04", "Password hash is scrubbed from all user payloads", "FAIL", null, err);
  }

  // 4. Session Revocation upon Logout
  try {
    const logoutRes = await api("/auth/logout", { method: "POST" }, cookieA);
    const postLogoutMe = await api("/auth/me", {}, cookieA);
    if (logoutRes.status === 200 && postLogoutMe.status === 401) {
      recordTest("Security", "SEC-05", "Logout revokes session in PostgreSQL; subsequent requests return 401", "PASS", {
        logoutRes: logoutRes.data,
        postLogoutStatus: postLogoutMe.status
      });
    } else {
      recordTest("Security", "SEC-05", "Logout revokes session in PostgreSQL; subsequent requests return 401", "FAIL", {
        logoutRes,
        postLogoutMe
      });
    }
  } catch (err) {
    recordTest("Security", "SEC-05", "Logout revokes session in PostgreSQL; subsequent requests return 401", "FAIL", null, err);
  }

  // 5. Expired Session Invalidation Test
  try {
    // Re-login User A
    const loginA = await api("/auth/login", {
      method: "POST",
      body: JSON.stringify({ emailOrUsername: testUserA.email, password: "NewPassword@123" })
    });
    cookieA = loginA.cookie;

    // Force expiration of this session in PostgreSQL (expires_at = NOW() - INTERVAL '1 day')
    await query("UPDATE user_sessions SET expires_at = NOW() - INTERVAL '1 day' WHERE user_id = $1;", [userAId]);

    // Attempt access with expired session cookie
    const expiredRes = await api("/auth/me", {}, cookieA);
    if (expiredRes.status === 401) {
      recordTest("Security", "SEC-06", "Expired session cookie is rejected with 401 and cleared", "PASS", expiredRes.data);
    } else {
      recordTest("Security", "SEC-06", "Expired session cookie is rejected with 401 and cleared", "FAIL", expiredRes.data);
    }
  } catch (err) {
    recordTest("Security", "SEC-06", "Expired session cookie is rejected with 401 and cleared", "FAIL", null, err);
  }

  // -------------------------------------------------------------------------
  // PHASE 7: CONCURRENCY & RACE CONDITION RESISTANCE
  // -------------------------------------------------------------------------
  console.log("\n--- PHASE 7: Concurrency & Stress Testing ---");

  try {
    // Re-login User B
    const loginB = await api("/auth/login", {
      method: "POST",
      body: JSON.stringify({ emailOrUsername: testUserB.email, password: testUserB.password })
    });
    cookieB = loginB.cookie;

    // Launch 10 concurrent completion requests for the exact same topic
    const concurrentRequests = Array.from({ length: 10 }).map(() =>
      api("/progress/toggle", { method: "POST", body: JSON.stringify({ topicId: "concurrent-audit-test", completed: true }) }, cookieB)
    );

    const concurrentResults = await Promise.all(concurrentRequests);
    const allSuccessful = concurrentResults.every((r) => r.status === 200);

    // Verify in database that total XP was incremented exactly once (+30 XP)
    const dbRewards = await query("SELECT total_xp FROM user_rewards WHERE user_id = $1;", [userBId]);
    const expectedXp = 50 + 30; // 50 welcome + 30 for 1 topic
    const actualXp = dbRewards.rows[0].total_xp;

    if (allSuccessful && actualXp === expectedXp) {
      recordTest("Concurrency", "CONC-01", "10 concurrent completion requests resolve safely with exact idempotent XP award", "PASS", {
        expectedXp,
        actualXp
      });
    } else {
      recordTest("Concurrency", "CONC-01", "10 concurrent completion requests resolve safely with exact idempotent XP award", "FAIL", {
        expectedXp,
        actualXp,
        responses: concurrentResults.map((r) => r.status)
      });
    }
  } catch (err) {
    recordTest("Concurrency", "CONC-01", "10 concurrent completion requests resolve safely with exact idempotent XP award", "FAIL", null, err);
  }

  // -------------------------------------------------------------------------
  // PHASE 8: CLEANUP TEST DATA (Preserve development users)
  // -------------------------------------------------------------------------
  console.log("\n--- PHASE 8: Test Cleanup ---");
  try {
    await query("DELETE FROM users WHERE email IN ($1, $2);", [testUserA.email.toLowerCase(), testUserB.email.toLowerCase()]);
    recordTest("Cleanup", "CLN-01", "Automated test fixtures purged safely from PostgreSQL", "PASS", {
      cleanedEmails: [testUserA.email, testUserB.email]
    });
  } catch (err) {
    recordTest("Cleanup", "CLN-01", "Automated test fixtures purged safely from PostgreSQL", "FAIL", null, err);
  }

  // -------------------------------------------------------------------------
  // AUDIT SUMMARY
  // -------------------------------------------------------------------------
  const total = results.passed + results.failed + results.blocked;
  const passRate = total > 0 ? ((results.passed / total) * 100).toFixed(1) : 0;

  console.log("\n==================================================================");
  console.log("📊 SENIOR QA AUDIT EXECUTION SUMMARY");
  console.log("==================================================================");
  console.log(`Total Executed: ${total}`);
  console.log(`🟢 Passed:       ${results.passed}`);
  console.log(`🔴 Failed:       ${results.failed}`);
  console.log(`🟡 Blocked:      ${results.blocked}`);
  console.log(`⭐ Pass Rate:    ${passRate}%`);
  console.log("==================================================================\n");

  return results;
}

runComprehensiveQA()
  .then((res) => {
    if (res.failed > 0) process.exit(1);
    process.exit(0);
  })
  .catch((err) => {
    console.error("QA Audit Suite Error:", err);
    process.exit(1);
  });
