const request = require("supertest");
const app = require("../app");

describe("API Routes", () => {
  test("GET /api/routes should return a list of routes", async () => {
    const response = await request(app).get("/api/routes");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("routes");
    expect(Array.isArray(response.body.routes)).toBe(true);
  });

  test("Invalid API endpoint should return 404", async () => {
    const response = await request(app).get("/api/nonexistent");

    expect(response.status).toBe(404);
  });
});
