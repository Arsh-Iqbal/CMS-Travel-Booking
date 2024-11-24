import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PackageList = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get('/api/package/getpackages');
        setPackages(response.data);
      } catch (error) {
        console.error('Error fetching packages:', error);
      }
    };

    fetchPackages();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Available Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg._id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{pkg.title}</h3>
              <p className="text-gray-600 mb-4">{pkg.description}</p>
              <p className="text-gray-800 font-medium mb-2">
                <span className="font-semibold">Destination:</span> {pkg.destination}
              </p>
              <p className="text-gray-800 font-medium mb-2">
                <span className="font-semibold">Price:</span> ${pkg.price}
              </p>
              <p className="text-gray-800 font-medium mb-2">
                <span className="font-semibold">Available Dates:</span>{' '}
                {pkg.availableDates.join(', ')}
              </p>
              <p className="text-gray-800 font-medium">
                <span className="font-semibold">Max Travelers:</span> {pkg.maxTravelers}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageList;
