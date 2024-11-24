const Booking = require('../models/Booking.js');
const Package = require('../models/Package.js');

// Public: Create a booking
exports.createBooking = async (req, res) => {
  try {
    const { packageId, numberOfTravelers, contactInfo } = req.body;

    const travelPackage = await Package.findById(packageId);
    if (!travelPackage) return res.status(404).json({ message: 'Package not found' });
    
    try {
      
       const newBooking = new Booking({
        customer: req.user.id, // Use logged-in user's name
      contactInfo,
      package: packageId,
      numberOfTravelers,
      status: 'Pending',
    });
    
    await newBooking.save();
    console.log("error1");
    res.status(201).json({ message: 'Booking created successfully', newBooking });
    } catch (error) {
      console.log(error);
      
    }
   
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Admin: Get all bookings
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('package');
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Admin: Update booking status
exports.updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.status(200).json(updatedBooking);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
