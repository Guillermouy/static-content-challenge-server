const express = require("express");
const getContent = require("../controllers/contentRoutes");

const router = express.Router();

router.get("*", getContent);

module.exports = router;
