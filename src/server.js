const app = require("./app");
const { PORT, APP_PUBLIC_URL } = require("./config");

app.listen(PORT, () => {
  console.log(`Server running on ${APP_PUBLIC_URL}`);
  console.log(`API documentation available at ${APP_PUBLIC_URL}/api-docs`);
});
