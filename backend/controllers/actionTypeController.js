

const express = require('express');
const router = express.Router();
const Joi = require('joi');

const schema = Joi.object({
  userInput: Joi.string().required(),
});

function getActionType(userInput) {
  switch (userInput) {
    case 'create':
      return { actionType: 'create' };
    case 'read':
      return { actionType: 'read' };
    case 'update':
      return { actionType: 'update' };
    case 'delete':
      return { actionType: 'delete' };
    default:
      return { actionType: 'unknown' };
  }
}

router.post('/get-action-type', (req, res) => {
  try {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: 'Invalid request', error: error.details[0].message });
    }
    const userInput = req.body.userInput;
    const actionType = getActionType(userInput);
    return res.json({ status: 'success', data: actionType });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

module.exports = router;