var util = require('./util');

function emptyFn() {}

/**
 * Module wrapper
 *
 * @class Wrapper class for a DOM element
 */
function Wrapper(el, methods) {
  this.el = el;
  util.merge(methods).to(this);
  this.didAttach();
}

Wrapper.prototype.didAttach = emptyFn;

module.exports = Wrapper;