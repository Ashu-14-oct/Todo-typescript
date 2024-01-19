const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'TODO App API',
      version: '1.0.0',
      description: 'API documentation for the TODO App',
    },
  },
  apis: ['./routes/index.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
