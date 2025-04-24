const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Fleet Sales Management System API is running');
});

// Mock vehicle data route
app.get('/api/vehicles', (req, res) => {
  res.json({
    success: true,
    message: 'Vehicle data retrieved successfully',
    data: [
      {
        id: "1",
        name: "Isuzu D-Max X-Terrain",
        type: "Pickup",
        price: 58900
      },
      {
        id: "2",
        name: "Isuzu D-Max LS-U+",
        type: "Pickup",
        price: 53900
      }
    ]
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
