const contentService = require("../services/contentService");

const getContent = async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

module.exports = getContent;
