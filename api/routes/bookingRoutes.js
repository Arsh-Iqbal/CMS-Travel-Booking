const express = require( 'express');
const {
  createBooking,
  getBookings,
  updateBookingStatus,
} = require( '../controllers/bookingController.js');
const { verifyToken } = require( '../middleware/verifyUser.js');

const router = express.Router();
router.post('/createbooking', verifyToken, createBooking);
router.get('/getbooking', verifyToken, getBookings);
router.put('/updatestatus/:id', verifyToken, updateBookingStatus);

module.exports = router;
