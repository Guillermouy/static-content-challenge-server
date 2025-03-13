const fs = require("fs");
const path = require("path");
const markdownConverter = require("../utils/markdownConverter");

const getTemplate = () => {
  return fs.readFileSync(path.join(__dirname, "..", "template.html"), "utf8");
};

const getContent = (contentPath) => {
  try {
    const markdownContent = fs.readFileSync(
      path.join(__dirname, "..", "..", "content", contentPath, "index.md"),
      "utf8"
    );
    return markdownConverter.convertToHtml(markdownContent);
  } catch (error) {
    return null;
  }
};

const getPageContent = (urlPath) => {
  const htmlContent = getContent(urlPath);

  if (!htmlContent) {
    return null;
  }

  const template = getTemplate();
  return template.replace("{{content}}", htmlContent);
};

module.exports = {
  getPageContent,
};
