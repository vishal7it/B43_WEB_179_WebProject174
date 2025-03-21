const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb uri', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
