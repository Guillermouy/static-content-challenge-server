const express = require("express");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");
const contentRoutes = require("./routes/contentRoutes");
const apiRoutes = require("./routes/apiRoutes");
const { PORT, CONTENT_PATH, PUBLIC_PATH } = require("./config");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.static(CONTENT_PATH));
app.use(express.static(PUBLIC_PATH));

app.use("/api", apiRoutes);
app.use("/", contentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
