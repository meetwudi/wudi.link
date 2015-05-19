var wd = require('../base');

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
        console.log(new FormData(that.form));
        fetch('/api/secret', {
          method: 'post',
          body: new FormData(that.form)
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