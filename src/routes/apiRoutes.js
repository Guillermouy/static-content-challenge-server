const express = require("express");
const routesService = require("../services/routesService");

const router = express.Router();

router.get("/routes", (req, res) => {
  const routes = routesService.getAllRoutes();
  res.json({ routes });
});

module.exports = router;
