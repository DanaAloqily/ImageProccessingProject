import express, { Request, Response } from 'express';
import logger from '../../utilities/logger';

const route1 = express.Router();

route1.get('/', logger ,(req: Request, res: Response): void => {
    res.send('Route 1');
  });


  export default route1;