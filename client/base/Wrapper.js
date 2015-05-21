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
  this.eventHandlers = {};
  this.didAttach();
}

Wrapper.prototype.didAttach = emptyFn;

Wrapper.prototype._getEventHandlers = function(eventName) {
  if (!this.eventHandlers.eventName) {
    this.eventHandlers.eventName = [];
  }
  return this.eventHandlers.eventName;
};

Wrapper.prototype.trigger = function(eventName) {
  var eventHandlers = this._getEventHandlers(eventName);
  var payloads = [].slice.call(arguments).slice(1);
  eventHandlers.forEach((handler) => handler.apply(this, payloads));
};

Wrapper.prototype.on = function(eventName, handler) {
  var eventHandlers = this._getEventHandlers(eventName);
  eventHandlers.push(handler);
};

module.exports = Wrapper;