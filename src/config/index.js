const path = require("path");

module.exports = {
  PORT: process.env.PORT || 3001,
  APP_PUBLIC_URL: process.env.APP_PUBLIC_URL || "http://localhost:3001",
  CONTENT_PATH: path.join(__dirname, "content"),
  PUBLIC_PATH: path.join(__dirname, "..", "public"),
};
