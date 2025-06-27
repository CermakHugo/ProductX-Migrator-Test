

const express = require('express');
const mainApplicationController = require('./mainApplicationController');

const router = express.Router();

router.get('/', mainApplicationController.get);
router.post('/', mainApplicationController.post);

module.exports = router;