const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

// Routes
const maintenanceRoutes = require('./routes/maintenance');
const paymentRoutes = require('./routes/payment');

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to database
connectDB();

// Use Routes
app.use('/api/maintenance', maintenanceRoutes);
app.use('/api/payment', paymentRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
