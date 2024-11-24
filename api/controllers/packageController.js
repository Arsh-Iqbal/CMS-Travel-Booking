const Package = require('../models/Package');


// Admin: Create a package
exports.createPackage = async (req, res) => {
  try {
    const packageData = req.body;
    const newPackage = new Package(packageData);
    await newPackage.save();
    res.status(201).json(newPackage);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Public: Get all packages
exports.getPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.status(200).json(packages);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Admin: Update a package
exports.updatePackage = async (req, res) => {
  try {
    const updatedPackage = await Package.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPackage) return res.status(404).json({ message: 'Package not found' });
    res.status(200).json(updatedPackage);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Admin: Delete a package
exports.deletePackage = async (req, res) => {
  try {
    const deletedPackage = await Package.findByIdAndDelete(req.params.id);
    if (!deletedPackage) return res.status(404).json({ message: 'Package not found' });
    res.status(200).json({ message: 'Package deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
