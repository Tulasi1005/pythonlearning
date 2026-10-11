import app from "./app.js";
import { config } from "./config/env.js";
import { pool, checkDatabaseHealth } from "./config/db.js";

async function startServer() {
  const isDbHealthy = await checkDatabaseHealth();
  if (!isDbHealthy) {
    console.warn("WARNING: Unable to verify initial PostgreSQL connection on startup.");
  } else {
    console.log("Connected to PostgreSQL successfully.");
  }

  const server = app.listen(config.port, () => {
    console.log(`Backend API Server running at http://localhost:${config.port}`);
    console.log(`Health Check available at: http://localhost:${config.port}/api/health`);
    console.log(`Configured Frontend Origin: ${config.frontendUrl}`);
  });

  const shutdown = async (signal) => {
    console.log(`\nReceived ${signal}. Shutting down gracefully...`);
    server.close(() => {
      console.log("HTTP server closed.");
    });
    try {
      await pool.end();
      console.log("PostgreSQL connection pool closed.");
    } catch (err) {
      console.error("Error closing PostgreSQL pool:", err);
    }
    process.exit(0);
  };

  process.on("SIGINT", () => shutdown("SIGINT"));
  process.on("SIGTERM", () => shutdown("SIGTERM"));
}

startServer().catch((err) => {
  console.error("Fatal server startup error:", err);
  process.exit(1);
});
