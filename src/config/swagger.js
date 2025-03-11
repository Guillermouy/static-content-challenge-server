const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "CMS API",
      version: "1.0.0",
      description: "API for the static content management system",
      contact: {
        name: "Guillermo Odabachian",
        url: "https://github.com/guillermouy",
        email: "odabachiang@gmail.com",
      },
      license: {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT",
      },
    },
    servers: [
      {
        url: "http://localhost:3001",
        description: "Development server",
      },
    ],
  },
  apis: ["./src/routes/*.js", "./src/controllers/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const swaggerUiOptions = {
  explorer: true,
  customCss: ".swagger-ui .topbar { display: none }",
  customSiteTitle: "CMS API Documentation",
};

module.exports = {
  swaggerUi,
  swaggerDocs,
  swaggerUiOptions,
};
