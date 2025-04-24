const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a vehicle name'],
    trim: true
  },
  type: {
    type: String,
    required: [true, 'Please add a vehicle type']
  },
  engine: {
    type: String,
    required: [true, 'Please add engine specifications']
  },
  power: {
    type: String,
    required: [true, 'Please add power output']
  },
  torque: {
    type: String,
    required: [true, 'Please add torque specifications']
  },
  transmission: {
    type: String,
    required: [true, 'Please add transmission type']
  },
  drivetrain: {
    type: String,
    required: [true, 'Please add drivetrain configuration']
  },
  payload: {
    type: String,
    required: [true, 'Please add payload capacity']
  },
  towing: {
    type: String,
    required: [true, 'Please add towing capacity']
  },
  fuelEconomy: {
    type: String,
    required: [true, 'Please add fuel economy data']
  },
  price: {
    type: Number,
    required: [true, 'Please add base price']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Vehicle', VehicleSchema);
