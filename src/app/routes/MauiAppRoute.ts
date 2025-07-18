

```typescript
import express, { Router } from 'express';
import MauiAppController from '../controllers/MauiAppController';

const router: Router = express.Router();
const mauiAppController = new MauiAppController();

router.post('/maui-app', mauiAppController.createMauiApp);

// Add routes for other methods
router.post('/format-decimal', mauiAppController.formatDecimal);
router.get('/get-result-text', mauiAppController.getResultText);
router.put('/update-result-text', mauiAppController.updateResultText);
router.delete('/clear-result-text', mauiAppController.clearResultText);
router.post('/append-number-to-result-text', mauiAppController.appendNumberToResultText);
router.get('/get-configuration', mauiAppController.getConfiguration);
router.post('/select-number', mauiAppController.selectNumber);
router.post('/select-operator', mauiAppController.selectOperator);
router.post('/calculate-result-text', mauiAppController.calculateResultText);
router.put('/set-maui-app', mauiAppController.setMauiApp);

export default router;
```