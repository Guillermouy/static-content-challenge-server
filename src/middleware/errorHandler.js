const contentService = require("../services/content.service");
const { AppError, InternalServerError } = require("../utils/errors");

/**
 * Custom error handling middleware
 * Processes errors and returns appropriate responses
 *
 * @param {Error} err - Error object
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  let error = err;
  if (!(error instanceof AppError)) {
    error = new InternalServerError(error.message || "Internal server error");
  }

  const statusCode = error.statusCode;
  const message = error.message;

  if (req.path.startsWith("/") && !req.path.startsWith("/api/")) {
    try {
      let errorHtml = contentService.getPageContent(`error/${statusCode}`);

      if (!errorHtml) {
        errorHtml = contentService.getPageContent("error");
      }

      if (errorHtml) {
        return res.status(statusCode).send(errorHtml);
      }
    } catch (e) {
      console.error("Error rendering error page:", e);
    }
  }

  res.status(statusCode).json({
    error: message,
    stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
  });
};

module.exports = errorHandler;
