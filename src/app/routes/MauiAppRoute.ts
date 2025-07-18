

import express, { Router } from 'express';
import MauiAppController from '../controllers/MauiAppController';
import CalculateController from '../controllers/CalculateController';
import MauiAppService from '../services/MauiAppService';

const router: Router = express.Router();
const mauiAppController = new MauiAppController();
const calculateController = new CalculateController();
const mauiAppService = new MauiAppService();

router.post('/Calculate', mauiAppController.Calculate);
router.post('/OnCalculate', calculateController.OnCalculate);
router.get('/ContentPage', (req, res) => {
  res.render('ContentPage');
});
router.post('/StartApplication', mauiAppController.StartApplication);
router.get('/GetCurrentCalculation', calculateController.GetCurrentCalculation);
router.put('/UpdateCurrentCalculation', calculateController.UpdateCurrentCalculation);

router.post('/CreateMauiApp', mauiAppService.CreateMauiApp);

export default router;