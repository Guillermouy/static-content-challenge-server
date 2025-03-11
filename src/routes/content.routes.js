const express = require("express");
const getContent = require("../controllers/content.controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Content
 *   description: Endpoints for retrieving page content
 */

/**
 * @swagger
 * /{path}:
 *   get:
 *     summary: Get HTML content for a page
 *     description: Returns the HTML content generated from the markdown file corresponding to the requested path
 *     tags: [Content]
 *     parameters:
 *       - in: path
 *         name: path
 *         schema:
 *           type: string
 *         required: false
 *         description: Path of the requested page (if omitted, redirects to /about-page)
 *         example: blog/june
 *     responses:
 *       200:
 *         description: HTML content of the page
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 *               example: "<html><body><h1>Page Title</h1><p>Content</p></body></html>"
 *       302:
 *         description: Redirect to main page
 *         headers:
 *           Location:
 *             schema:
 *               type: string
 *             description: URL to redirect to
 *             example: "/about-page"
 *       404:
 *         description: Page not found
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Page not found"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("*", getContent);

module.exports = router;
