const express = require('express');
const router = express.Router();

// Import models
const User = require('../models/User');
const Vehicle = require('../models/Vehicle');
const Quotation = require('../models/Quotation');
const SalesEfficiency = require('../models/SalesEfficiency');

// Vehicle routes
router.get('/vehicles', async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json({ success: true, count: vehicles.length, data: vehicles });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
});

// Quotation routes
router.get('/quotations', async (req, res) => {
  try {
    const quotations = await Quotation.find().populate('createdBy', 'name email');
    res.json({ success: true, count: quotations.length, data: quotations });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
});

// Sales efficiency routes
router.get('/sales-efficiency', async (req, res) => {
  try {
    const salesData = await SalesEfficiency.find().populate('salesperson', 'name email');
    res.json({ success: true, count: salesData.length, data: salesData });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
});

module.exports = router;
