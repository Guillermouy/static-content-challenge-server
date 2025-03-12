const contentService = require("../services/content.service");

/**
 * Controller to handle content requests
 * Processes the requested path and returns the corresponding HTML content
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const getContent = (req, res, next) => {
  try {
    let urlPath = req.path.substring(1);

    if (!urlPath) {
      const rootContent = contentService.getPageContent("");
      if (rootContent) {
        return res.send(rootContent);
      }
      return res.redirect("/about-page");
    }

    if (urlPath.endsWith("/")) {
      urlPath = urlPath.slice(0, -1);
    }

    const fullHtml = contentService.getPageContent(urlPath);

    if (!fullHtml) {
      let notFoundHtml = contentService.getPageContent("error/404");

      if (!notFoundHtml) {
        notFoundHtml = contentService.getPageContent("error");
      }

      if (notFoundHtml) {
        return res.status(404).send(notFoundHtml);
      }

      return res.status(404).send("Page not found");
    }

    res.send(fullHtml);
  } catch (error) {
    next(error);
  }
};

module.exports = getContent;
