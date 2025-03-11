const routesService = require("../services/routesService");

const getRoutes = async (req, res, next) => {
  try {
    const routes = routesService.getAllRoutes();

    res.json({ routes });
  } catch (error) {
    next(error);
  }
};

module.exports = getRoutes;
