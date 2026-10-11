import { query } from "../config/db.js";

export const activityRepository = {
  async log(userId, activityType, topicId = null, xpEarned = 0, details = {}, dbClient = null) {
    const q = dbClient ? dbClient.query.bind(dbClient) : query;
    const res = await q(
      `
      INSERT INTO user_activity_logs (user_id, activity_type, topic_id, xp_earned, details)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
      `,
      [userId, activityType, topicId, xpEarned, JSON.stringify(details)]
    );
    return res.rows[0];
  },

  async getRecentActivity(userId, limit = 20) {
    const res = await query(
      `
      SELECT * FROM user_activity_logs
      WHERE user_id = $1
      ORDER BY created_at DESC
      LIMIT $2;
      `,
      [userId, limit]
    );
    return res.rows;
  }
};
