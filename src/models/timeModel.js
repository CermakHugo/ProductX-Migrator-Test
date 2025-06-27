

const mongoose = require('mongoose');

const timeSchema = new mongoose.Schema({
  currentTime: { type: Date, default: Date.now },
  timezone: String,
  timestamp: Number,
  utcOffset: Number,
  daylightSavingTime: Boolean
});

const Time = mongoose.model('Time', timeSchema);

module.exports = Time;