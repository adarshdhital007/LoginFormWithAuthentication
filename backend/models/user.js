const mongoose = require('mongoose');

const user1Schema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', user1Schema);

module.exports = User;
