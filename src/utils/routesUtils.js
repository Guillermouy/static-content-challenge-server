const fs = require("fs");
const path = require("path");

const exploreDirectoryForRoutes = (baseDir) => {
  const routes = [];

  if (fs.existsSync(path.join(baseDir, "index.md"))) {
    routes.push({
      path: "/",
      depth: 0,
    });
  }

  const exploreDirectory = (dir, basePath = "") => {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);

      if (stat.isDirectory()) {
        const relativePath = path.join(basePath, item);

        if (fs.existsSync(path.join(itemPath, "index.md"))) {
          const depth = ("/" + relativePath).split("/").filter(Boolean).length;

          routes.push({
            path: "/" + relativePath,
            depth: depth,
          });
        }

        exploreDirectory(itemPath, relativePath);
      }
    }
  };

  exploreDirectory(baseDir);
  return routes;
};

const sortRoutesByDepthAndAlphabetically = (routes) => {
  return [...routes].sort((a, b) => {
    if (a.depth !== b.depth) {
      return a.depth - b.depth;
    }
    return a.path.localeCompare(b.path);
  });
};

module.exports = {
  exploreDirectoryForRoutes,
  sortRoutesByDepthAndAlphabetically,
};
