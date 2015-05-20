var wd = require('../base'),
  serialize = require('form-serialize');

/* fetch polyfill */
require('whatwg-fetch');

var secretPromptFactory = new wd.Module({
  didAttach: function() {
    this.submits = document.querySelectorAll('[data-submit="secret"]');
    this.form = this.el.querySelector('.form');
    this.bindEvents();
  },

  bindEvents: function() {
    var that = this;
    [].slice.call(that.submits).forEach(function(submit) {
      submit.addEventListener('click', function(e) {
        e.preventDefault();
        fetch('/api/secret', {
          method: 'POST',
          headers: {
            'Accept': '*/*',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: serialize(that.form)
        }).then(function(response) {
          return response.json();
        }).then(function(result) {

        }).catch(function(ex) {
          console.log(ex);
        });
      });
    });
  }
});

module.exports = secretPromptFactory;