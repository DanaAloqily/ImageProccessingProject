import express, { Application, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const PORT = process.env.PORT || 3000;

// create an instance server
const app: Application = express();

// HTTP request logger middleware
app.use(routes);
// add routing for / path

// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at http://localhost:${PORT}`);
});
export default app;
console.log('TypeScript Eslint Prettier Starter Template!')
