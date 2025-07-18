

import express, { Router } from 'express';
import MainController from '../controllers/MainController';
import ContentPage from '../components/ContentPage';

const router: Router = express.Router();
const mainController = new MainController();

router.post('/main', (req, res) => mainController.Main(req.body.args));

router.post('/initialize-calculator', (req, res) => mainController.InitializeCalculator(req.body));

router.post('/perform-calculation', (req, res) => mainController.PerformCalculation(req.body));

router.post('/reset-calculator', (req, res) => mainController.ResetCalculator(req.body));

router.get('/get-layout', (req, res) => mainController.getLayout(req.query));

router.get('/get-behavior', (req, res) => mainController.getBehavior(req.query));

router.get('/', (req, res) => {
  const contentPage = new ContentPage();
  res.send(contentPage.render());
});

export default router;