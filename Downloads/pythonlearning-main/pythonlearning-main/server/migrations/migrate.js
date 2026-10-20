import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(process.cwd(), "server/.env") });

const { Client, Pool } = pg;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function runMigrations(dbUrl = process.env.DATABASE_URL) {
  if (!dbUrl) {
    throw new Error("DATABASE_URL is not set in environment.");
  }

  const parsedUrl = new URL(dbUrl);
  const targetDbName = parsedUrl.pathname.replace(/^\//, "");
  
  const isLocal = dbUrl.includes("localhost") || dbUrl.includes("127.0.0.1");

  // Connect to default 'postgres' database to ensure target DB exists (only on local environments)
  if (isLocal) {
    const rootUrl = `${parsedUrl.protocol}//${parsedUrl.username}:${parsedUrl.password}@${parsedUrl.host}/postgres`;
    const adminClient = new Client({ connectionString: rootUrl });

    try {
      await adminClient.connect();
      const checkDb = await adminClient.query(
        "SELECT 1 FROM pg_database WHERE datname = $1",
        [targetDbName]
      );

      if (checkDb.rows.length === 0) {
        console.log(`Creating database "${targetDbName}"...`);
        await adminClient.query(`CREATE DATABASE "${targetDbName}"`);
        console.log(`Database "${targetDbName}" created successfully.`);
      }
    } catch (err) {
      console.warn(`Note when checking database creation: ${err.message}`);
    } finally {
      await adminClient.end().catch(() => {});
    }
  }

  // Connect to target database and execute migrations
  const pool = new Pool({
    connectionString: dbUrl,
    ssl: isLocal ? false : { rejectUnauthorized: false }
  });
  try {
    const client = await pool.connect();
    try {
      console.log(`Connecting to database "${targetDbName}" to run migrations...`);

      // Create migrations tracker table
      await client.query(`
        CREATE TABLE IF NOT EXISTS schema_migrations (
          id SERIAL PRIMARY KEY,
          migration_name VARCHAR(255) NOT NULL UNIQUE,
          executed_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
      `);

      const migrationFiles = fs
        .readdirSync(__dirname)
        .filter((file) => file.endsWith(".sql"))
        .sort();

      for (const file of migrationFiles) {
        const isRun = await client.query(
          "SELECT 1 FROM schema_migrations WHERE migration_name = $1",
          [file]
        );

        if (isRun.rows.length === 0) {
          console.log(`Running migration: ${file}...`);
          const sql = fs.readFileSync(path.join(__dirname, file), "utf-8");
          await client.query("BEGIN");
          await client.query(sql);
          await client.query(
            "INSERT INTO schema_migrations (migration_name) VALUES ($1)",
            [file]
          );
          await client.query("COMMIT");
          console.log(`Migration ${file} executed successfully.`);
        } else {
          console.log(`Migration ${file} already applied.`);
        }
      }
      console.log("All PostgreSQL migrations completed successfully!");
    } catch (err) {
      await client.query("ROLLBACK").catch(() => {});
      throw err;
    } finally {
      client.release();
    }
  } finally {
    await pool.end();
  }
}

// If run directly from CLI
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runMigrations()
    .then(() => {
      console.log("Migration task finished.");
      process.exit(0);
    })
    .catch((err) => {
      console.error("Migration error:", err);
      process.exit(1);
    });
}
