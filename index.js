// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define MongoDB schemas
const VehicleSchema = new mongoose.Schema({
  name: String,
  type: String,
  engine: String,
  power: String,
  torque: String,
  transmission: String,
  drivetrain: String,
  payload: String,
  towing: String,
  fuelEconomy: String,
  price: Number
});

const Vehicle = mongoose.model('Vehicle', VehicleSchema);
