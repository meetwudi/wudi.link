var express = require('express');
var router = express.Router();
var item = require('../lib/item');

/* GET home page. */
router.get('/', function(req, res) {
  console.log(req.session);
  return res.render('index', { 
    title: 'wudi.link portal', 
    scripts: ['app'],
    csrfToken: req.csrfToken()
  });
});

router.get('/:hash', function(req, res) {
  item.find(req.params.hash, function(err, item) {
    if (err) { return res.status(400).json(err); }
    if (!item) { return res.status(404).end(); }
    return res.redirect(item.originalUrl);
  });
});
module.exports = router;
