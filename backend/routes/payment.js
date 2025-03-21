const express = require('express');
const router = express.Router();
const Payment = require('../models/payment');

// Fetch Payment History
router.get('/history', async (req, res) => {
  try {
    const payments = await Payment.find();
    res.status(200).json({ payments });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching payment history' });
  }
});

module.exports = router;
