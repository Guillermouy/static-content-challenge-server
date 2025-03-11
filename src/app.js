const express = require("express");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");
const { swaggerUi, swaggerDocs } = require("./config/swagger");
const contentRoutes = require("./routes/content.routes");
const apiRoutes = require("./routes/api.routes");
const { CONTENT_PATH, PUBLIC_PATH } = require("./config");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.static(CONTENT_PATH));
app.use(express.static(PUBLIC_PATH));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/api", apiRoutes);
app.use("/", contentRoutes);
app.use(errorHandler);

module.exports = app;
