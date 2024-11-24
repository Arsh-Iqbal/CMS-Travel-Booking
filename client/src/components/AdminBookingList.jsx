import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminBookingList = () => {
  const [bookings, setBookings] = useState([]);
  console.log(bookings);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('/api/booking/getbooking');
        setBookings(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookings();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      const response = await axios.put(`/api/booking/updatestatus/${id}`, { status });
      setBookings((prev) =>
        prev.map((booking) => (booking._id === id ? response.data : booking))
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">All Bookings</h2>

        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-left">
              <th className="py-3 px-4 border">Contact Info</th>
              <th className="py-3 px-4 border">Travelers</th>
              <th className="py-3 px-4 border">Status</th>
              <th className="py-3 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <tr key={booking._id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 border">{booking.contactInfo}</td>
                  <td className="py-3 px-4 border">{booking.numberOfTravelers}</td>
                  <td
                    className={`py-3 px-4 border ${
                      booking.status === 'Confirmed'
                        ? 'text-green-600'
                        : booking.status === 'Cancelled'
                        ? 'text-red-600'
                        : 'text-yellow-600'
                    }`}
                  >
                    {booking.status}
                  </td>
                  <td className="py-3 px-4 border space-x-2">
                    <button
                      onClick={() => updateStatus(booking._id, 'Confirmed')}
                      className="w-24 h-10 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-500"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => updateStatus(booking._id, 'Cancelled')}
                      className="w-24 h-10 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-500"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-3 px-4 text-center text-gray-500">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBookingList;
