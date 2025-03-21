const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  tenantName: { type: String, required: true },
  amount: { type: Number, required: true },
  datePaid: { type: Date, default: Date.now },
  status: { type: String, default: 'Paid' }
});

module.exports = mongoose.model('Payment', PaymentSchema);
