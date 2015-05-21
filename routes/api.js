var express = require('express');
var router = express.Router();
var verify = require('../lib/middlewares/verify')();

/* Secret API */
router.post('/secret', function(req, res) {
  var secret = process.env.SECRET;
  if (req.body.secret === secret) {
    req.session.verifed = true;
    res.json({
      verified: true
    });
  }
  else {
    req.session.verified = false;
    res.json({
      verified: false
    });
  }
});

router.get('/secret', function(req, res) {
  res.json({
    verified: !!req.session.verified
  });
});

router.use(verify);

/* Url API */
router.post('/shorten', function(req, res) {
  res.json({state: 'ok'});
});

module.exports = router;
