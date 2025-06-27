

const mongoose = require('mongoose');

const actionTypeSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  actionType: { type: String, required: true },
  description: { type: String, required: true }
});

const ActionType = mongoose.model('ActionType', actionTypeSchema);

const getActionTypeData = async () => {
  try {
    const actionTypes = await ActionType.find().exec();
    if (!actionTypes) {
      throw new Error('No action types found');
    }
    return actionTypes;
  } catch (error) {
    throw new Error(`Error retrieving action types: ${error.message}`);
  }
};

module.exports = { getActionTypeData };