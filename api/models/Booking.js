const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    contactInfo: { type: String, required: true },
    package: { type: mongoose.Schema.Types.ObjectId, ref: 'Package', required: true },
    numberOfTravelers: { type: Number, required: true },
    status: {
      type: String,
      enum: ['Pending', 'Confirmed', 'Cancelled'],
      default: 'Pending',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Booking', bookingSchema);
