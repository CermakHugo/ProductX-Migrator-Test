

package backend.controllers;

import express, { Request, Response } from 'express';
import _ from 'lodash';

const operators = ['+', '-', '*', '/'];

interface CalculationInput {
  numbers: number[];
  operators: string[];
}

const calculate = async (req: Request, res: Response) => {
  const { numbers, operators: ops } = req.body as CalculationInput;
  let result = 0;
  let currentEntry = '';

  if (!numbers.length || !ops.length) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const op = ops[i];

    if (!operators.includes(op) && op !== '%' && op !== '') {
      return res.status(400).json({ error: 'Invalid operator' });
    }

    if (op === '%') {
      currentEntry = String(num / 100);
    } else if (op === '-') {
      currentEntry = String(-num);
    } else {
      currentEntry = String(num);
    }

    if (i === 0) {
      result = Number(currentEntry);
    } else {
      if (ops[i - 1] === '' || ops[i - 1] === '%') {
        return res.status(400).json({ error: 'Invalid operator sequence' });
      }

      switch (ops[i - 1]) {
        case '+':
          result += Number(currentEntry);
          break;
        case '-':
          result -= Number(currentEntry);
          break;
        case '*':
          result *= Number(currentEntry);
          break;
        case '/':
          if (Number(currentEntry) === 0) {
            return res.status(400).json({ error: 'Division by zero' });
          }
          result /= Number(currentEntry);
          break;
        default:
          break;
      }
    }
  }

  return res.json({ result });
};

export default calculate;