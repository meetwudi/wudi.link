var Wrapper = require('./Wrapper'),
  util = require('./util');

/**
 * Module
 *
 * @class Declare a module
 * @param {{
 * 
 * }} config - Module configuration
 */
function Module(config) {
  this._config = config;
  this._methods = {};

  // Copy all functions in config as shared
  // method for all module wrappers of this
  // module
  for (var methodName in config) {
    if (config.hasOwnProperty(methodName) &&
      util.isFunction(config[methodName])) {
      this._methods[methodName] = config[methodName];
    }
  }
}

/**
 * Attach a module wrapper to a DOM element
 * 
 * @param  {HTMLElement} el - Designated DOM element
 * @return {Wrapper}    - Module wrapper
 */
Module.prototype.attach = function(el) {
  if (!el) return null;
  var wrapper = new Wrapper(el, this._methods);
};

module.exports = Module;