import { query } from "../config/db.js";

export const progressRepository = {
  async getByUserId(userId, dbClient = null) {
    const q = dbClient ? dbClient.query.bind(dbClient) : query;
    const res = await q(
      `
      SELECT topic_id, completed, completed_at, quiz_score, last_accessed_at
      FROM user_learning_progress
      WHERE user_id = $1
      ORDER BY last_accessed_at DESC;
      `,
      [userId]
    );
    return res.rows;
  },

  async getTopicProgress(userId, topicId, dbClient = null) {
    const q = dbClient ? dbClient.query.bind(dbClient) : query;
    const res = await q(
      `
      SELECT * FROM user_learning_progress
      WHERE user_id = $1 AND topic_id = $2
      LIMIT 1;
      `,
      [userId, topicId]
    );
    return res.rows[0] || null;
  },

  async toggleCompletion(userId, topicId, completed = true, dbClient = null) {
    const q = dbClient ? dbClient.query.bind(dbClient) : query;
    
    let existing = null;
    try {
      const lockRes = await q(
        "SELECT * FROM user_learning_progress WHERE user_id = $1 AND topic_id = $2 FOR UPDATE",
        [userId, topicId]
      );
      existing = lockRes.rows[0] || null;
    } catch {
      const fallbackRes = await q(
        "SELECT * FROM user_learning_progress WHERE user_id = $1 AND topic_id = $2",
        [userId, topicId]
      );
      existing = fallbackRes.rows[0] || null;
    }

    if (!existing) {
      const res = await q(
        `
        INSERT INTO user_learning_progress (user_id, topic_id, completed, completed_at, last_accessed_at)
        VALUES ($1, $2, $3, CASE WHEN $3 THEN NOW() ELSE NULL END, NOW())
        ON CONFLICT (user_id, topic_id) DO UPDATE
          SET completed = EXCLUDED.completed,
              completed_at = CASE WHEN EXCLUDED.completed THEN COALESCE(user_learning_progress.completed_at, NOW()) ELSE NULL END,
              last_accessed_at = NOW()
        RETURNING *;
        `,
        [userId, topicId, completed]
      );
      return { record: res.rows[0], wasAlreadyCompleted: false };
    }

    const wasAlreadyCompleted = Boolean(existing.completed);
    const res = await q(
      `
      UPDATE user_learning_progress
      SET completed = $3,
          completed_at = CASE WHEN $3 THEN COALESCE(completed_at, NOW()) ELSE NULL END,
          last_accessed_at = NOW()
      WHERE user_id = $1 AND topic_id = $2
      RETURNING *;
      `,
      [userId, topicId, completed]
    );

    return { record: res.rows[0], wasAlreadyCompleted };
  },

  async saveQuizResult(userId, topicId, scorePercent, dbClient = null) {
    const q = dbClient ? dbClient.query.bind(dbClient) : query;
    const res = await q(
      `
      INSERT INTO user_learning_progress (user_id, topic_id, quiz_score, last_accessed_at)
      VALUES ($1, $2, $3, NOW())
      ON CONFLICT (user_id, topic_id) DO UPDATE
        SET quiz_score = GREATEST(COALESCE(user_learning_progress.quiz_score, 0), EXCLUDED.quiz_score),
            last_accessed_at = NOW()
      RETURNING *;
      `,
      [userId, topicId, scorePercent]
    );
    return res.rows[0];
  }
};
