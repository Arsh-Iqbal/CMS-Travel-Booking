import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [packageId, setPackageId] = useState('');
  const [numberOfTravelers, setNumberOfTravelers] = useState(1);
  const [contactInfo, setContactInfo] = useState('');

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/booking/createbooking', {
        packageId,
        numberOfTravelers,
        contactInfo,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleBooking}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Booking</h2>

        <div className="mb-4">
          <label
            htmlFor="packageId"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Package ID:
          </label>
          <input
            id="packageId"
            type="text"
            value={packageId}
            onChange={(e) => setPackageId(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="numberOfTravelers"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Number of Travelers:
          </label>
          <input
            id="numberOfTravelers"
            type="number"
            value={numberOfTravelers}
            onChange={(e) => setNumberOfTravelers(e.target.value)}
            min="1"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="contactInfo"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Contact Info:
          </label>
          <input
            id="contactInfo"
            type="text"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
