import express, { Request, Response } from 'express';
import resize from '../../middleware/resize';
import { promises as fsPromises } from 'fs';

const resizeRoute = express.Router();

// endpoint goes through 2 middleware, one for checking if the image already exists, the second if not exist, resizes it.
resizeRoute.get('/', resize, (req: Request, res: Response): void => {
  res.status(200);
});

export default resizeRoute;
