const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Mock database for demonstration
const vehicles = [
  {
    id: "1",
    name: "Isuzu D-Max X-Terrain",
    type: "Pickup",
    engine: "3.0L Turbo Diesel",
    power: "190 HP",
    torque: "450 Nm",
    transmission: "6-speed automatic",
    drivetrain: "4x4",
    payload: "1,000 kg",
    towing: "3,500 kg",
    fuelEconomy: "8.0L/100km",
    price: 58900
  },
  {
    id: "2",
    name: "Isuzu D-Max LS-U+",
    type: "Pickup",
    engine: "3.0L Turbo Diesel",
    power: "190 HP",
    torque: "450 Nm",
    transmission: "6-speed automatic",
    drivetrain: "4x4",
    payload: "1,050 kg",
    towing: "3,500 kg",
    fuelEconomy: "7.8L/100km",
    price: 53900
  },
  {
    id: "3",
    name: "Isuzu NPS 75-155",
    type: "4x4 Truck",
    engine: "5.2L Turbo Diesel",
    power: "155 HP",
    torque: "419 Nm",
    transmission: "5-speed manual",
    drivetrain: "4x4",
    payload: "3,500 kg",
    towing: "3,500 kg",
    fuelEconomy: "13.5L/100km",
    price: 75900
  }
];

const quotations = [
  {
    id: "1",
    customer: {
      name: "Ahmed Corporation",
      company: "Ahmed Corp Ltd",
      email: "info@ahmedcorp.com",
      phone: "+966 12 345 6789"
    },
    vehicle: {
      id: "1",
      name: "Isuzu D-Max X-Terrain",
      price: 58900,
      specifications: {
        engine: "3.0L Turbo Diesel",
        transmission: "6-speed automatic"
      }
    },
    options: [
      { name: "Premium Paint", price: 1200 },
      { name: "Tow Bar", price: 850 }
    ],
    totalPrice: 60950,
    status: "sent",
    validUntil: "2025-05-24",
    notes: "Fleet discount applied",
    createdBy: "salesperson1",
    createdAt: "2025-04-10"
  },
  {
    id: "2",
    customer: {
      name: "Saudi Logistics",
      company: "Saudi Logistics Co.",
      email: "fleet@saudilogistics.com",
      phone: "+966 11 222 3333"
    },
    vehicle: {
      id: "3",
      name: "Isuzu NPS 75-155",
      price: 75900,
      specifications: {
        engine: "5.2L Turbo Diesel",
        transmission: "5-speed manual"
      }
    },
    options: [
      { name: "Heavy Duty Suspension", price: 2500 },
      { name: "Extended Warranty", price: 3000 }
    ],
    totalPrice: 81400,
    status: "accepted",
    validUntil: "2025-05-15",
    notes: "Delivery scheduled for June 2025",
    createdBy: "salesperson2",
    createdAt: "2025-04-05"
  }
];

const salesEfficiency = [
  {
    id: "1",
    salesperson: "Mohammed Al-Harbi",
    month: "March",
    year: 2025,
    customerVisits: 45,
    quotationsCreated: 22,
    quotationsAccepted: 8,
    salesClosed: 6,
    revenue: 425000,
    conversionRate: 13.33,
    notes: "Exceeded monthly target"
  },
  {
    id: "2",
    salesperson: "Fatima Al-Saud",
    month: "March",
    year: 2025,
    customerVisits: 38,
    quotationsCreated: 19,
    quotationsAccepted: 10,
    salesClosed: 7,
    revenue: 520000,
    conversionRate: 18.42,
    notes: "Top performer for the month"
  }
];

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API Routes
app.get('/api/vehicles', (req, res) => {
  res.json({
    success: true,
    message: "Vehicle data retrieved successfully",
    data: vehicles
  });
});

app.get('/api/quotations', (req, res) => {
  res.json({
    success: true,
    message: "Quotation data retrieved successfully",
    data: quotations
  });
});

app.get('/api/sales-efficiency', (req, res) => {
  res.json({
    success: true,
    message: "Sales efficiency data retrieved successfully",
    data: salesEfficiency
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
