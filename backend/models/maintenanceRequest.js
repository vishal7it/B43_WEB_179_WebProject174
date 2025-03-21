const mongoose = require('mongoose');

const MaintenanceRequestSchema = new mongoose.Schema({
  category: { type: String, required: true },
  urgency: { type: String, required: true },
  description: { type: String, required: true },
  images: [String], // Array of image URLs
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MaintenanceRequest', MaintenanceRequestSchema);
