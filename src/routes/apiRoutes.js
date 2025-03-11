const express = require("express");
const getRoutes = require("../controllers/routesController");

const router = express.Router();

router.get("/routes", getRoutes);

module.exports = router;
