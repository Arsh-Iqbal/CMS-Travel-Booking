const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  destination: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  availableDates: { type: [Date], required: true },
  maxTravelers: { type: Number, required: true },
});

module.exports = mongoose.model('Package', packageSchema);

