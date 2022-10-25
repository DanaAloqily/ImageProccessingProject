import express, { Request, Response } from 'express';
import resizeRoute from './api/resizeImage';


const routes = express.Router();

routes.get('/', (req: Request, res: Response): void => {
    res.send('Image Proccessing API ');
  });

  routes.use('/resizeImage', resizeRoute)


  export default routes;