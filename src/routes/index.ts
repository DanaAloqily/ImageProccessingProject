import express, { Request, Response } from 'express';
import route1 from './api/route1';
import route2 from './api/route2';

const routes = express.Router();

routes.get('/', (req: Request, res: Response): void => {
    res.send('Main API Route');
  });

routes.use('/route1', route1);
routes.use('/route2',route2);

  export default routes;