var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log(req.session);
  return res.render('index', { 
    title: 'wudi.link portal', 
    scripts: ['app'],
    csrfToken: req.csrfToken()
  });
});

module.exports = router;
