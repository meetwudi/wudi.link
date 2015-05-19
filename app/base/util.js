/**
 * Util
 *
 * @class Utilities
 */
function Util() {}

/**
 * Check if an object is function
 * 
 * @return {Boolean} [description]
 */
Util.prototype.isFunction = function(obj) {
  return typeof obj === 'function';
};

/**
 * Merge an object into another
 * 
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
Util.prototype.merge = function(sourceObj) {
  return {
    to: function(targetObj) {
      for (var key in sourceObj)
        if (sourceObj.hasOwnProperty(key))
          targetObj[key] = sourceObj[key];
    }
  }
};


module.exports = new Util();