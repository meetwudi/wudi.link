process.env.HASH_LEN = 6;

var should = require('should');
var item = require('../../lib/item.js');


describe('lib item', function() {
  it('should be able to generate hash', function() {
    item._generateHash('hello').should.equal('213aD6');
    item._generateHash('world').should.equal('49b31a');
  });

  it('should always generate hash with length 6', function() {
    var i;
    for (i = 0; i < 100; i ++) {
      item._generateHash('x' + i).length.
        should.equal(parseInt(process.env.HASH_LEN, 10));
    }
  });
});