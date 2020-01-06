const mongoose = require('mongoose');
// schema maps to a collection
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: 'String',
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: 'String',
    required: true,
    trim: true
  },
  role: {
    type: 'String',
    required: true,
    trim: true
  },
  isactive: {
    type: 'Boolean',
    required: true,
    trim: true
  }
});

module.exports = mongoose.model('user', userSchema);