import path from "path";
import bcrypt from "bcryptjs";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(process.cwd(), "server/.env") });

const { Pool } = pg;

export async function runSeeds(dbUrl = process.env.DATABASE_URL) {
  if (!dbUrl) {
    throw new Error("DATABASE_URL is required for seeding.");
  }

  const pool = new Pool({ connectionString: dbUrl });
  const client = await pool.connect();

  try {
    console.log("Starting PostgreSQL development seeding...");
    await client.query("BEGIN");

    // Standard dev password: "password123"
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash("password123", salt);

    // 1. Seed Alex Johnson (College stage)
    const alexRes = await client.query(
      `
      INSERT INTO users (full_name, email, password_hash, avatar, bio, learning_stage, preferred_language)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      ON CONFLICT ((LOWER(email))) DO UPDATE
        SET full_name = EXCLUDED.full_name,
            password_hash = EXCLUDED.password_hash,
            avatar = EXCLUDED.avatar,
            learning_stage = EXCLUDED.learning_stage,
            preferred_language = EXCLUDED.preferred_language
      RETURNING id;
      `,
      [
        "Alex Johnson",
        "alex@example.com",
        passwordHash,
        "snake_blue",
        "Computer Science undergrad learning Python data structures & web apps.",
        "college",
        "english"
      ]
    );

    const alexId = alexRes.rows[0].id;

    // Alex Rewards
    await client.query(
      `
      INSERT INTO user_rewards (user_id, total_xp, current_streak, longest_streak)
      VALUES ($1, 420, 5, 7)
      ON CONFLICT (user_id) DO UPDATE
        SET total_xp = EXCLUDED.total_xp,
            current_streak = EXCLUDED.current_streak,
            longest_streak = EXCLUDED.longest_streak;
      `,
      [alexId]
    );

    // Alex Progress
    const alexTopics = ["what-is-python", "installing-python", "variables-data-types"];
    for (const t of alexTopics) {
      await client.query(
        `
        INSERT INTO user_learning_progress (user_id, topic_id, completed, completed_at, quiz_score)
        VALUES ($1, $2, TRUE, NOW(), 95)
        ON CONFLICT (user_id, topic_id) DO NOTHING;
        `,
        [alexId, t]
      );
    }

    // Alex Bookmarks
    const alexBookmarks = ["functions-modules", "lists-tuples-dictionaries"];
    for (const b of alexBookmarks) {
      await client.query(
        `
        INSERT INTO user_bookmarks (user_id, topic_id)
        VALUES ($1, $2)
        ON CONFLICT (user_id, topic_id) DO NOTHING;
        `,
        [alexId, b]
      );
    }

    // 2. Seed Priya Sharma (Graduate stage)
    const priyaRes = await client.query(
      `
      INSERT INTO users (full_name, email, password_hash, avatar, bio, learning_stage, preferred_language)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      ON CONFLICT ((LOWER(email))) DO UPDATE
        SET full_name = EXCLUDED.full_name,
            password_hash = EXCLUDED.password_hash,
            avatar = EXCLUDED.avatar,
            learning_stage = EXCLUDED.learning_stage,
            preferred_language = EXCLUDED.preferred_language
      RETURNING id;
      `,
      [
        "Priya Sharma",
        "priya@example.com",
        passwordHash,
        "sparkles",
        "Software developer exploring Python for automation and backend services.",
        "graduate",
        "english-telugu"
      ]
    );

    const priyaId = priyaRes.rows[0].id;

    // Priya Rewards
    await client.query(
      `
      INSERT INTO user_rewards (user_id, total_xp, current_streak, longest_streak)
      VALUES ($1, 850, 12, 14)
      ON CONFLICT (user_id) DO UPDATE
        SET total_xp = EXCLUDED.total_xp,
            current_streak = EXCLUDED.current_streak,
            longest_streak = EXCLUDED.longest_streak;
      `,
      [priyaId]
    );

    // Priya Progress
    const priyaTopics = ["what-is-python", "installing-python", "control-flow-loops", "functions-modules"];
    for (const t of priyaTopics) {
      await client.query(
        `
        INSERT INTO user_learning_progress (user_id, topic_id, completed, completed_at, quiz_score)
        VALUES ($1, $2, TRUE, NOW(), 100)
        ON CONFLICT (user_id, topic_id) DO NOTHING;
        `,
        [priyaId, t]
      );
    }

    // Priya Bookmarks
    const priyaBookmarks = ["oop-classes-objects", "file-handling-exceptions"];
    for (const b of priyaBookmarks) {
      await client.query(
        `
        INSERT INTO user_bookmarks (user_id, topic_id)
        VALUES ($1, $2)
        ON CONFLICT (user_id, topic_id) DO NOTHING;
        `,
        [priyaId, b]
      );
    }

    await client.query("COMMIT");
    console.log("PostgreSQL seed data created successfully!");
    console.log("Seed Accounts:");
    console.log("  1) alex@example.com / password123 (College, 420 XP)");
    console.log("  2) priya@example.com / password123 (Graduate, 850 XP)");
  } catch (err) {
    await client.query("ROLLBACK").catch(() => {});
    throw err;
  } finally {
    client.release();
    await pool.end();
  }
}

if (process.argv[1] && process.argv[1].endsWith("seed.js")) {
  runSeeds()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Seed error:", err);
      process.exit(1);
    });
}
