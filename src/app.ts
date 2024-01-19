import * as dotenv from 'dotenv';
dotenv.config();
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swaggerConfig';
import express from 'express';
import mongoConnection from './model/mongoose';
import router from './routes';

const PORT = 5000;

const startServer = async () => {
  try {
    await mongoConnection;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

const app = express();

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);
// Serve Swagger documentation using Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

startServer();
