

const express = require('express');
const router = express.Router();
const calculateController = require('../controllers/calculate.controller');

router.post('/calculate', calculateController.calculate);

module.exports = router;