

```typescript
import express, { Router } from 'express';

enum CalculationType {
  ADDITION = 'ADDITION',
  SUBTRACTION = 'SUBTRACTION',
  MULTIPLICATION = 'MULTIPLICATION',
  DIVISION = 'DIVISION'
}

function getCalculationType(input: string): CalculationType {
  switch (input) {
    case 'add':
    case 'addition':
      return CalculationType.ADDITION;
    case 'subtract':
    case 'subtraction':
      return CalculationType.SUBTRACTION;
    case 'multiply':
    case 'multiplication':
      return CalculationType.MULTIPLICATION;
    case 'divide':
    case 'division':
      return CalculationType.DIVISION;
    default:
      throw new Error('Invalid calculation type');
  }
}

const router: Router = express.Router();

router.get('/getCalculationType', (req, res) => {
  const input = req.query.input;
  if (input === null || input === undefined) {
    res.status(400).json({ error: 'Input is required' });
    return;
  }
  if (typeof input !== 'string') {
    res.status(400).json({ error: 'Input must be a string' });
    return;
  }
  try {
    const calculationType = getCalculationType(input);
    res.json({ calculationType });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
```