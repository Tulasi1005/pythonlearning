import crypto from "crypto";
import { query } from "../config/db.js";
import { config } from "../config/env.js";

export function hashResetToken(token) {
  return crypto.createHash("sha256").update(token + config.sessionSecret).digest("hex");
}

export const passwordResetRepository = {
  async createToken(userId, expiryMinutes = 15, dbClient = null) {
    const q = dbClient ? dbClient.query.bind(dbClient) : query;
    const rawToken = crypto.randomBytes(32).toString("hex");
    const tokenHash = hashResetToken(rawToken);
    const expiresAt = new Date(Date.now() + expiryMinutes * 60 * 1000);

    await q(
      `
      INSERT INTO password_reset_tokens (user_id, token_hash, expires_at)
      VALUES ($1, $2, $3);
      `,
      [userId, tokenHash, expiresAt]
    );

    return {
      rawToken,
      expiresAt
    };
  },

  async findValidToken(rawToken, dbClient = null) {
    if (!rawToken) return null;
    const q = dbClient ? dbClient.query.bind(dbClient) : query;
    const tokenHash = hashResetToken(rawToken);

    const res = await q(
      `
      SELECT prt.*, u.email, u.full_name
      FROM password_reset_tokens prt
      JOIN users u ON prt.user_id = u.id
      WHERE prt.token_hash = $1
        AND prt.used_at IS NULL
        AND prt.expires_at > NOW()
      LIMIT 1;
      `,
      [tokenHash]
    );

    return res.rows[0] || null;
  },

  async markTokenUsed(rawToken, dbClient = null) {
    if (!rawToken) return;
    const q = dbClient ? dbClient.query.bind(dbClient) : query;
    const tokenHash = hashResetToken(rawToken);
    await q(
      `
      UPDATE password_reset_tokens
      SET used_at = NOW()
      WHERE token_hash = $1;
      `,
      [tokenHash]
    );
  }
};
