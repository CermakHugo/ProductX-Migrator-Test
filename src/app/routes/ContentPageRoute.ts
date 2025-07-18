

import express, { Router, Request, Response, NextFunction } from 'express';
import ContentPageController from '../controllers/ContentPageController';
import { validationResult } from 'express-validator';

const router: Router = express.Router();
const contentPageController = new ContentPageController();

router.get('/getContentPageLayout', 
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }, 
  contentPageController.getContentPageLayout
);

router.post('/configureContentPage', 
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }, 
  contentPageController.configureContentPage
);

export default router;