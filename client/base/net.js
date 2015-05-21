var util = require('./util');

/* fetch polyfill */
require('whatwg-fetch');

function fetchWrapper(input, init) {
  if (!init.headers) {
    init.headers = {};
  }
  init.mode = 'cors';
  init.credentials = 'include';
  util.
    merge({
      'X-CSRF-Token': window.vals.csrfToken
    }).
    to(init.headers);
  return window.fetch(input, init);
}

module.exports = {
  fetch: fetchWrapper
};