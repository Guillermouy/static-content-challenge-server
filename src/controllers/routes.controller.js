const routesService = require("../services/routes.service");

/**
 * Gets all available routes
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const getRoutes = (req, res, next) => {
  try {
    const routes = routesService.getAllRoutes();
    res.json({ routes });
  } catch (error) {
    next(error);
  }
};

module.exports = getRoutes;
