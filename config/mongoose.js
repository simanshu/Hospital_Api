const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/hospital_api';

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));
db.once('open', function () {
  console.log('Connected to Database :: MongoDB');
});

module.exports = db;
