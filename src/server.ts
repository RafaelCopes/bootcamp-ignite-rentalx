import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { routes } from './routes';
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);

app.post('/courses', (req, res) => {
  const { name } = req.body;

  return res.json({ name });
});

app.listen(3333, () => console.log('The server is running on port 3333...'));
