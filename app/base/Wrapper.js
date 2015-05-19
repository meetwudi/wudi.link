var util = require('./util');

/**
 * Module wrapper
 *
 * @class Wrapper class for a DOM element
 */
function Wrapper(el, methods) {
  this.el = el;
  util.merge(methods).to(this);
}

module.exports = Wrapper;