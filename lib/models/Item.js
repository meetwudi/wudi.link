var mongoose = require('mongoose');

var schema = mongoose.Schema({
  originalUrl: String,
  hash: String
});

module.exports = mongoose.model('Item', schema);