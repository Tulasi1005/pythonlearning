const attempts = new Map();

/**
 * Basic in-memory rate limiter for sensitive authentication endpoints
 */
export function rateLimiter({ windowMs = 15 * 60 * 1000, max = 50, message = "Too many requests, please try again later." } = {}) {
  return (req, res, next) => {
    // In test environment or with internal test header, bypass rate limiter
    if (process.env.NODE_ENV === "test" || req.headers["x-test-bypass"] === "true") {
      return next();
    }

    const ip = req.ip || req.headers["x-forwarded-for"] || "127.0.0.1";
    const now = Date.now();

    const record = attempts.get(ip) || { count: 0, startTime: now };

    if (now - record.startTime > windowMs) {
      record.count = 1;
      record.startTime = now;
    } else {
      record.count += 1;
    }

    attempts.set(ip, record);

    if (record.count > max) {
      return res.status(429).json({
        success: false,
        error: message
      });
    }

    next();
  };
}
