const express = require("express");
const getRoutes = require("../controllers/routes.controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Routes
 *   description: API for managing available routes in the CMS
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     RouteResponse:
 *       type: object
 *       required:
 *         - routes
 *       properties:
 *         routes:
 *           type: array
 *           items:
 *             type: string
 *           description: List of available routes
 *           example: ["/about-page", "/blog", "/jobs", "/valves", "/blog/june/company-update"]
 *     ErrorResponse:
 *       type: object
 *       required:
 *         - error
 *       properties:
 *         error:
 *           type: string
 *           description: Error message
 *           example: "Error retrieving routes"
 *         stack:
 *           type: string
 *           description: Stack trace (only in non-production environments)
 *           example: "Error: Error retrieving routes\n    at getAllRoutes (/src/services/routesService.js:10:11)\n    ..."
 */

/**
 * @swagger
 * /api/routes:
 *   get:
 *     summary: Get all available routes
 *     description: Returns an array with all available routes in the CMS, sorted by depth and alphabetically
 *     tags: [Routes]
 *     responses:
 *       200:
 *         description: Routes list retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RouteResponse'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("/routes", getRoutes);

module.exports = router;
