var express = require('express');
var router = express.Router();

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

module.exports = router;
