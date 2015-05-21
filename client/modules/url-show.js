var wd = require('../base');

var urlShowFactory = new wd.Module({
  didAttach() {
    this.bindEvents();
  },

  bindEvents() {
    this.on('item', (item) => {
      var url = location.protocol + '//' + location.host + '/' + item.hash;
      this.el.querySelector('[name="url-show"]').setAttribute('value', url);
    });
  }
});

module.exports = urlShowFactory;