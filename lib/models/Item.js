var mongoose = require('mongoose');

var schema = mongoose.Schema({
  originalUrl: string,
  hash: string
});

module.exports = mongoose.model('Item', schema);