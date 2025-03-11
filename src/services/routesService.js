const path = require("path");
const {
  exploreDirectoryForRoutes,
  sortRoutesByDepthAndAlphabetically,
} = require("../utils/routesUtils");

const getAllRoutes = () => {
  const contentDir = path.join(__dirname, "..", "content");

  const routes = exploreDirectoryForRoutes(contentDir);
  const sortedRoutes = sortRoutesByDepthAndAlphabetically(routes);

  return sortedRoutes.map((route) => route.path);
};

module.exports = {
  getAllRoutes,
};
