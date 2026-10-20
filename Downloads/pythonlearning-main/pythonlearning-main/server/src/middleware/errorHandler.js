export function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  const isDev = process.env.NODE_ENV === "development";

  if (statusCode === 500) {
    console.error("Unhandled Server Error:", err);
  }

  res.status(statusCode).json({
    success: false,
    error: err.message || "Internal server error",
    ...(isDev && err.stack ? { stack: err.stack } : {})
  });
}
