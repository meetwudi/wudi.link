var wd = require('../base'),
  serialize = require('form-serialize'),
  fetch = wd.net.fetch;

var secretPromptFactory = new wd.Module({
  didAttach() {
    this.submits = document.querySelectorAll('[data-submit="secret"]');
    this.form = this.el.querySelector('.form');
    this.bindEvents();
  },

  bindEvents() {
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
          if (result.verified) {
            that.showNext();
          }
        }).catch(function(ex) {
          console.log(ex);
        });
      });
    });
  },

  showNext() {
    this.el.classList.remove('step-visible');
    if (this.el.nextElementSibling) {
      this.el.nextElementSibling.classList.add('step-visible');
    }
  }
});

module.exports = secretPromptFactory;