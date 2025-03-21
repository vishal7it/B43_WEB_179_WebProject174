const express = require('express');
const router = express.Router();
const MaintenanceRequest = require('../models/maintenanceRequest');

// Submit Maintenance Request
router.post('/submit', async (req, res) => {
  const { category, urgency, description, images } = req.body;
  try {
    const newRequest = new MaintenanceRequest({ category, urgency, description, images });
    await newRequest.save();
    res.status(201).json({ message: 'Request submitted successfully', newRequest });
  } catch (error) {
    res.status(500).json({ error: 'Error submitting request' });
  }
});

module.exports = router;
