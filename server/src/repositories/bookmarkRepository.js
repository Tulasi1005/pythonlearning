import { query } from "../config/db.js";

export const bookmarkRepository = {
  async getByUserId(userId, dbClient = null) {
    const q = dbClient ? dbClient.query.bind(dbClient) : query;
    const res = await q(
      `
      SELECT topic_id, created_at
      FROM user_bookmarks
      WHERE user_id = $1
      ORDER BY created_at DESC;
      `,
      [userId]
    );
    return res.rows.map((r) => r.topic_id);
  },

  async addBookmark(userId, topicId, dbClient = null) {
    const q = dbClient ? dbClient.query.bind(dbClient) : query;
    const res = await q(
      `
      INSERT INTO user_bookmarks (user_id, topic_id)
      VALUES ($1, $2)
      ON CONFLICT (user_id, topic_id) DO NOTHING
      RETURNING *;
      `,
      [userId, topicId]
    );
    return res.rows[0] || null;
  },

  async removeBookmark(userId, topicId, dbClient = null) {
    const q = dbClient ? dbClient.query.bind(dbClient) : query;
    const res = await q(
      `
      DELETE FROM user_bookmarks
      WHERE user_id = $1 AND topic_id = $2
      RETURNING *;
      `,
      [userId, topicId]
    );
    return res.rowCount > 0;
  },

  async toggleBookmark(userId, topicId, dbClient = null) {
    const q = dbClient ? dbClient.query.bind(dbClient) : query;
    const check = await q(
      "SELECT 1 FROM user_bookmarks WHERE user_id = $1 AND topic_id = $2",
      [userId, topicId]
    );

    if (check.rows.length > 0) {
      await this.removeBookmark(userId, topicId, dbClient);
      return { isBookmarked: false };
    } else {
      await this.addBookmark(userId, topicId, dbClient);
      return { isBookmarked: true };
    }
  }
};
