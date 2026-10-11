import crypto from "crypto";
import { query } from "../config/db.js";
import { config } from "../config/env.js";

export function hashToken(token) {
  return crypto.createHash("sha256").update(token + config.sessionSecret).digest("hex");
}

export const sessionRepository = {
  async createSession(userId, ipAddress = null, userAgent = null, expiryDays = config.sessionExpiryDays, dbClient = null) {
    const q = dbClient ? dbClient.query.bind(dbClient) : query;
    const rawToken = crypto.randomBytes(32).toString("hex");
    const tokenHash = hashToken(rawToken);
    const expiresAt = new Date(Date.now() + expiryDays * 24 * 60 * 60 * 1000);

    const res = await q(
      `
      INSERT INTO user_sessions (user_id, session_token_hash, expires_at, ip_address, user_agent)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, expires_at;
      `,
      [userId, tokenHash, expiresAt, ipAddress, userAgent]
    );

    return {
      sessionId: res.rows[0].id,
      token: rawToken,
      expiresAt: res.rows[0].expires_at
    };
  },

  async findValidSession(rawToken, dbClient = null) {
    if (!rawToken) return null;
    const q = dbClient ? dbClient.query.bind(dbClient) : query;
    const tokenHash = hashToken(rawToken);

    const res = await q(
      `
      SELECT s.id as session_id, s.user_id, s.expires_at, s.revoked_at,
             u.id, u.full_name, u.email, u.avatar, u.bio, u.learning_stage, u.preferred_language, u.created_at
      FROM user_sessions s
      JOIN users u ON s.user_id = u.id
      WHERE s.session_token_hash = $1
        AND s.revoked_at IS NULL
        AND s.expires_at > NOW()
      LIMIT 1;
      `,
      [tokenHash]
    );

    return res.rows[0] || null;
  },

  async revokeSession(rawToken, dbClient = null) {
    if (!rawToken) return;
    const q = dbClient ? dbClient.query.bind(dbClient) : query;
    const tokenHash = hashToken(rawToken);
    await q(
      `
      UPDATE user_sessions
      SET revoked_at = NOW()
      WHERE session_token_hash = $1;
      `,
      [tokenHash]
    );
  },

  async revokeAllUserSessions(userId, dbClient = null) {
    const q = dbClient ? dbClient.query.bind(dbClient) : query;
    await q(
      `
      UPDATE user_sessions
      SET revoked_at = NOW()
      WHERE user_id = $1 AND revoked_at IS NULL;
      `,
      [userId]
    );
  }
};
