

const mongoose = require('mongoose');
const validator = require('validator');

const timePickerSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  time: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

const TimePicker = mongoose.model('TimePicker', timePickerSchema);

const create = async (data) => {
  if (!validator.isLength(data.id, { min: 1, max: 255 })) {
    throw new Error('Invalid id length');
  }
  if (!validator.isTime(data.time)) {
    throw new Error('Invalid time format');
  }
  if (!(data.date instanceof Date)) {
    throw new Error('Invalid date format');
  }
  const timePicker = new TimePicker(data);
  try {
    return await timePicker.save();
  } catch (err) {
    throw new Error('Failed to create TimePicker data');
  }
};

const read = async (id) => {
  if (!validator.isLength(id, { min: 1, max: 255 })) {
    throw new Error('Invalid id length');
  }
  try {
    return await TimePicker.findById(id);
  } catch (err) {
    throw new Error('Failed to read TimePicker data');
  }
};

const update = async (id, data) => {
  if (!validator.isLength(id, { min: 1, max: 255 })) {
    throw new Error('Invalid id length');
  }
  if (data.time && !validator.isTime(data.time)) {
    throw new Error('Invalid time format');
  }
  if (data.date && !(data.date instanceof Date)) {
    throw new Error('Invalid date format');
  }
  try {
    return await TimePicker.findByIdAndUpdate(id, data, { new: true });
  } catch (err) {
    throw new Error('Failed to update TimePicker data');
  }
};

const remove = async (id) => {
  if (!validator.isLength(id, { min: 1, max: 255 })) {
    throw new Error('Invalid id length');
  }
  try {
    return await TimePicker.findByIdAndRemove(id);
  } catch (err) {
    throw new Error('Failed to remove TimePicker data');
  }
};

module.exports = { create, read, update, remove };