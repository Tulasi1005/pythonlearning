export function validateBody(schema) {
  return (req, res, next) => {
    try {
      req.validatedBody = schema.parse(req.body);
      req.body = req.validatedBody;
      next();
    } catch (err) {
      if (err.errors && err.errors.length > 0) {
        const firstError = err.errors[0];
        return res.status(400).json({
          success: false,
          error: firstError.message || "Invalid input data",
          field: firstError.path.join(".")
        });
      }
      return res.status(400).json({
        success: false,
        error: "Validation failed"
      });
    }
  };
}
