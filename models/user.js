const mongoose = require('../database/mongo');

const user = new mongoose.Schema({
  username: String,
  password: String,
}, { collection: 'user' });

user.index({ username: 'text' }, { default_language: 'pt', weights: { username: 2 } });
const User = mongoose.model('User', user);

module.exports = User;
