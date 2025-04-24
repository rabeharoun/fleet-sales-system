const mongoose = require('mongoose');

const QuotationSchema = new mongoose.Schema({
  customer: {
    name: {
      type: String,
      required: [true, 'Please add customer name'],
      trim: true
    },
    company: {
      type: String,
      required: [true, 'Please add company name'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Please add customer email'],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email'
      ]
    },
    phone: {
      type: String,
      required: [true, 'Please add customer phone']
    }
  },
  vehicle: {
    id: {
      type: String,
      required: [true, 'Please select a vehicle']
    },
    name: {
      type: String,
      required: [true, 'Vehicle name is required']
    },
    price: {
      type: Number,
      required: [true, 'Vehicle price is required']
    },
    specifications: {
      type: Object,
      required: [true, 'Vehicle specifications are required']
    }
  },
  options: [{
    name: String,
    price: Number
  }],
  totalPrice: {
    type: Number,
    required: [true, 'Total price is required']
  },
  status: {
    type: String,
    enum: ['draft', 'sent', 'accepted', 'rejected', 'expired'],
    default: 'draft'
  },
  validUntil: {
    type: Date,
    required: [true, 'Please add validity date']
  },
  notes: {
    type: String
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Quotation', QuotationSchema);
