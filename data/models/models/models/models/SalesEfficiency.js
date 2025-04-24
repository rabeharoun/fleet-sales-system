const mongoose = require('mongoose');

const SalesEfficiencySchema = new mongoose.Schema({
  salesperson: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  month: {
    type: String,
    required: [true, 'Please specify the month']
  },
  year: {
    type: Number,
    required: [true, 'Please specify the year']
  },
  customerVisits: {
    type: Number,
    default: 0
  },
  quotationsCreated: {
    type: Number,
    default: 0
  },
  quotationsAccepted: {
    type: Number,
    default: 0
  },
  salesClosed: {
    type: Number,
    default: 0
  },
  revenue: {
    type: Number,
    default: 0
  },
  conversionRate: {
    type: Number,
    default: 0
  },
  notes: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Calculate conversion rate before saving
SalesEfficiencySchema.pre('save', function(next) {
  if (this.customerVisits > 0) {
    this.conversionRate = (this.salesClosed / this.customerVisits) * 100;
  }
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('SalesEfficiency', SalesEfficiencySchema);
