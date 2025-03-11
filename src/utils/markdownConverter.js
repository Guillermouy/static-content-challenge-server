const marked = require("marked");

const convertToHtml = (markdownContent) => {
  return marked.parse(markdownContent);
};

module.exports = {
  convertToHtml,
};
