

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

class OperatorsController {
    getOperators(req, res) {
        try {
            const operators = [
                { id: 1, name: 'Operator 1' },
                { id: 2, name: 'Operator 2' },
                { id: 3, name: 'Operator 3' }
            ];

            res.json(operators);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching operators' });
        }
    }
}

const operatorsController = new OperatorsController();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/operators', operatorsController.getOperators);

module.exports = { OperatorsController, router };
