const express = require('express');
const {
  createPackage,
  getPackages,
  updatePackage,
  deletePackage,
} = require('../controllers/packageController.js');
const { verifyToken } = require( '../middleware/verifyUser.js');

const router = express.Router();
router.get('/getpackages', getPackages);
router.post('/create', verifyToken, createPackage);
router.put('/updatepost/:id', verifyToken, updatePackage);
router.delete('/deletepost/:id', verifyToken, deletePackage);

module.exports = router;

