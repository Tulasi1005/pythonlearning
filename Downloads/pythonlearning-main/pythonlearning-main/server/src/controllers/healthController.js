import { checkDatabaseHealth } from "../config/db.js";

export const healthController = {
  async getHealth(req, res) {
    const isDbHealthy = await checkDatabaseHealth();
    const status = isDbHealthy ? 200 : 503;

    res.status(status).json({
      status: isDbHealthy ? "healthy" : "degraded",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      services: {
        database: isDbHealthy ? "connected" : "disconnected",
        api: "running"
      }
    });
  }
};
