import express, { Request, Response } from 'express';

const route2 = express.Router();

route2.get('/', (req: Request, res: Response): void => {
    res.send('Route 2');
  });


  export default route2;