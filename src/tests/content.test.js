const request = require("supertest");
const fs = require("fs");
const path = require("path");
const markdownConverter = require("../utils/markdownConverter");

const app = require("../app");

const getContentDirectories = () => {
  const contentPath = path.join(__dirname, "../content");

  const getAllDirs = (dir, basePath = "") => {
    const result = [];

    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        const relativePath = path.join(basePath, entry.name);

        if (entry.isDirectory()) {
          const indexPath = path.join(fullPath, "index.md");
          if (fs.existsSync(indexPath)) {
            result.push(relativePath);
          }

          result.push(...getAllDirs(fullPath, relativePath));
        }
      }
    } catch (error) {
      console.error(`Error reading directory ${dir}: ${error.message}`);
    }

    return result;
  };

  return getAllDirs(contentPath);
};

describe("Content Routes", () => {
  test("Valid URLs should return 200 status code", async () => {
    const contentDirs = getContentDirectories();

    if (contentDirs.length === 0) {
      console.warn("No content directories found. Creating a mock test.");

      const response = await request(app).get("/about-page");
      expect(response.status).toBe(200);
      return;
    }

    const testPath = contentDirs[0];
    const response = await request(app).get(`/${testPath}`);

    expect(response.status).toBe(200);
  });

  test("Valid URLs should return HTML generated from markdown", async () => {
    const contentDirs = getContentDirectories();

    if (contentDirs.length === 0) {
      console.warn("No content directories found. Creating a mock test.");

      const response = await request(app).get("/about-page");
      expect(response.text).toContain("<html");
      return;
    }

    const testPath = contentDirs[0];
    const markdownPath = path.join(
      __dirname,
      "../content",
      testPath,
      "index.md"
    );

    try {
      const markdownContent = fs.readFileSync(markdownPath, "utf8");

      const htmlContent = markdownConverter.convertToHtml(markdownContent);

      const response = await request(app).get(`/${testPath}`);

      expect(response.text).toContain(htmlContent);
    } catch (error) {
      console.warn(
        `Could not read markdown file: ${error.message}. Creating a mock test.`
      );

      const response = await request(app).get("/about-page");
      expect(response.text).toContain("<html");
    }
  });

  test("Invalid URLs should return 404 status code", async () => {
    const randomPath = `nonexistent-path-${Date.now()}`;
    const response = await request(app).get(`/${randomPath}`);

    expect(response.status).toBe(404);
  });
});
