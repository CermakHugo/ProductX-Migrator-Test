

const express = require('express');
const _ = require('lodash');

class CalculatorController {
  constructor() {
    this.router = express.Router();
    this.initRoutes();
  }

  clearDisplayField(req, res) {
    try {
      if (!req || !res) {
        throw new Error('Invalid request or response object');
      }
      return res.send('');
    } catch (error) {
      console.error('Error clearing display field:', error);
      return res.status(500).send('Error clearing display field');
    }
  }

  initRoutes() {
    this.router.get('/clearDisplayField', this.clearDisplayField);
  }
}

module.exports = CalculatorController;