import { query } from "../config/db.js";

export const userRepository = {
  async findByEmail(email, dbClient = null) {
    const q = dbClient ? dbClient.query.bind(dbClient) : query;
    const res = await q(
      "SELECT * FROM users WHERE LOWER(email) = LOWER($1) LIMIT 1",
      [email]
    );
    return res.rows[0] || null;
  },

  async findByName(name, dbClient = null) {
    const q = dbClient ? dbClient.query.bind(dbClient) : query;
    const res = await q(
      "SELECT * FROM users WHERE LOWER(full_name) = LOWER($1) LIMIT 1",
      [name]
    );
    return res.rows[0] || null;
  },

  async findById(id, dbClient = null) {
    const q = dbClient ? dbClient.query.bind(dbClient) : query;
    const res = await q(
      "SELECT * FROM users WHERE id = $1 LIMIT 1",
      [id]
    );
    return res.rows[0] || null;
  },

  async create(userData, dbClient = null) {
    const q = dbClient ? dbClient.query.bind(dbClient) : query;
    const { name, email, passwordHash, stage, language, avatar, bio } = userData;
    const res = await q(
      `
      INSERT INTO users (full_name, email, password_hash, learning_stage, preferred_language, avatar, bio)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
      `,
      [name, email.toLowerCase(), passwordHash, stage, language, avatar || "snake_blue", bio || ""]
    );
    return res.rows[0];
  },

  async update(id, updates, dbClient = null) {
    const q = dbClient ? dbClient.query.bind(dbClient) : query;
    const fields = [];
    const values = [];
    let idx = 1;

    if (updates.name !== undefined) {
      fields.push(`full_name = $${idx++}`);
      values.push(updates.name);
    }
    if (updates.bio !== undefined) {
      fields.push(`bio = $${idx++}`);
      values.push(updates.bio);
    }
    if (updates.stage !== undefined) {
      fields.push(`learning_stage = $${idx++}`);
      values.push(updates.stage);
    }
    if (updates.language !== undefined) {
      fields.push(`preferred_language = $${idx++}`);
      values.push(updates.language);
    }
    if (updates.avatar !== undefined) {
      fields.push(`avatar = $${idx++}`);
      values.push(updates.avatar);
    }
    if (updates.passwordHash !== undefined) {
      fields.push(`password_hash = $${idx++}`);
      values.push(updates.passwordHash);
    }

    if (fields.length === 0) return await this.findById(id, dbClient);

    fields.push(`updated_at = NOW()`);
    values.push(id);

    const res = await q(
      `
      UPDATE users
      SET ${fields.join(", ")}
      WHERE id = $${idx}
      RETURNING *;
      `,
      values
    );
    return res.rows[0] || null;
  },

  async delete(id, dbClient = null) {
    const q = dbClient ? dbClient.query.bind(dbClient) : query;
    await q("DELETE FROM users WHERE id = $1", [id]);
    return true;
  }
};
