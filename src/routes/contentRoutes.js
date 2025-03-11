const express = require("express");
const contentService = require("../services/contentService");

const router = express.Router();

router.get("*", (req, res) => {
  let urlPath = req.path.substring(1);

  if (!urlPath) {
    return res.redirect("/about-page");
  }

  if (urlPath.endsWith("/")) {
    urlPath = urlPath.slice(0, -1);
  }

  const fullHtml = contentService.getPageContent(urlPath);

  if (!fullHtml) {
    return res.status(404).send("Page not found");
  }

  res.send(fullHtml);
});

module.exports = router;
