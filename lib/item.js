var Item;
var crypto = require('crypto');
var HASH_LEN = process.env.HASH_LEN;

function _lazyload() {
  if (!Item) {
    Item = require('./models/Item');
  }
}

function _md5(raw) {
  return crypto.createHash('md5').update(raw).digest("hex")
}

function _generateHash(url, step) {
  step = step || 1;
  var strs = [
    url+step,
    url+(step+1)
  ];
  var hash = _md5(strs[0]).slice(0, HASH_LEN);
  var overlay = _md5(strs[1]).slice(0, HASH_LEN);
  overlay = overlay.split('').map(function(char) {
    var charCode = char.charCodeAt(0);
    return charCode % 2;
  });
  hash = hash.split('').map(function(char, idx) {
    if (/[0-9]/.test(char)) {
      // digit
      var digit = char.charCodeAt(0) - '0'.charCodeAt(0);
      digit = (digit + overlay[idx]) % 10;
      return digit;
    }
    else {
      // latin
      return overlay[idx] > 0 ? char.toUpperCase() : char.toLowerCase();
    }
  }).join('');
  return hash;
}

function generateItem(url, callback) {
  _lazyload();
  var result = null,
    step = 1;

  !function inner() {
    var hash = _generateHash(url, step);
    Item.findOne({hash: hash}, function(err, item) {
      if (err) callback(err);
      if (!item) {
        // this hash is available
        item = new Item({
          originalUrl: url,
          hash: hash
        });
        item.save(function(err) {
          if (err) callback(err);
          callback(null, item);
        });
      }
      else {
        // hash not available
        if (item.originalUrl === url) {
          // but it is the same url we are storing
          callback(item);
        }
        else {
          // increate step and try again
          step ++;
          inner();
        }
      }
    });
  }();
}

function find(hash, callback) {
  _lazyload();
  Item.findOne({hash: hash}, callback);
}

module.exports = {
  generateItem: generateItem,
  _generateHash: _generateHash,
  find: find,

  HASH_LEN: HASH_LEN,
};