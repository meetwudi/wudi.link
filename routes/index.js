var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
    title: 'wudi.link portal', 
    scripts: ['app'] 
  });
});

module.exports = router;
