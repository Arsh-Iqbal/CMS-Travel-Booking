import React, { useState } from 'react';

const PackageForm = ({ onSubmit, initialData = {}, buttonText }) => {
  const [formData, setFormData] = useState({
    destination: initialData.destination || '',
    title: initialData.title || '',
    description: initialData.description || '',
    price: initialData.price || '',
    availableDates: initialData.availableDates || '',
    maxTravelers: initialData.maxTravelers || '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      availableDates: formData.availableDates.split(',').map((date) => new Date(date)),
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {buttonText === "Update Package" ? "Update Package" : "Create Package"}
        </h2>

        <div className="mb-4">
          <label
            htmlFor="destination"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Destination:
          </label>
          <input
            type="text"
            name="destination"
            id="destination"
            placeholder="Destination"
            value={formData.destination}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Title:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Description:
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Price:
          </label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="availableDates"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Available Dates (comma-separated):
          </label>
          <input
            type="text"
            name="availableDates"
            id="availableDates"
            placeholder="Available Dates"
            value={formData.availableDates}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="maxTravelers"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Max Travelers:
          </label>
          <input
            type="number"
            name="maxTravelers"
            id="maxTravelers"
            placeholder="Max Travelers"
            value={formData.maxTravelers}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default PackageForm;
