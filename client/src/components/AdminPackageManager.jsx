import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PackageForm from './PackageForm';
import { Link } from 'react-router-dom';

const AdminPackageManager = () => {
  const [packages, setPackages] = useState([]);
  const [editingPackage, setEditingPackage] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/package/getpackages');
        setPackages(response.data);
      } catch (error) {
        console.error('Error fetching packages:', error);
      }
    };

    fetchPackages();
  }, []);

  const handleCreate = async (packageData) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/package/create',
        packageData,
        { withCredentials: true }
      );
      setPackages([...packages, response.data]);
    } catch (error) {
      console.error('Error creating package:', error);
    }
  };

  const handleUpdate = async (id, packageData) => {
    try {
      const response = await axios.put(`/api/package/updatepost/${id}`, packageData);
      setPackages(packages.map((pkg) => (pkg._id === id ? response.data : pkg)));
      setEditingPackage(null);
    } catch (error) {
      console.error('Error updating package:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/package/deletepost/${id}`, { withCredentials: true });
      setPackages(packages.filter((pkg) => pkg._id !== id));
    } catch (error) {
      console.error('Error deleting package:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Admin Package Manager</h2>

        {editingPackage ? (
          <PackageForm
            initialData={editingPackage}
            onSubmit={(data) => handleUpdate(editingPackage._id, data)}
            buttonText="Update Package"
          />
        ) : (
          <PackageForm onSubmit={handleCreate} buttonText="Create Package" />
        )}

        <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-4">Existing Packages</h3>
        <div className="space-y-4">
          {packages.map((pkg) => (
            <div
              key={pkg._id}
              className="flex justify-between items-center bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm"
            >
              <div>
                <h4 className="text-lg font-medium text-gray-800">{pkg.title}</h4>
                <p className="text-sm text-gray-600">{pkg.description}</p>
              </div>
              <div className="space-x-3">
                <button
                  onClick={() => setEditingPackage(pkg)}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(pkg._id)}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/admin/bookings"
          className="inline-block mt-6 px-6 py-3 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-500"
        >
          Check Status
        </Link>
      </div>
    </div>
  );
};

export default AdminPackageManager;
