var express = require('express');
var router = express.Router();
var verify = require('../lib/middlewares/verify')();
var item = require('../lib/item');

/* Secret API */
router.post('/secret', function(req, res) {
  var secret = process.env.SECRET;
  if (req.body.secret === secret) {
    req.session.verified = true;
    return res.json({
      verified: true
    });
  }
  else {
    req.session.verified = false;
    return res.json({
      verified: false
    });
  }
});

router.get('/secret', function(req, res) {
  return res.json({
    verified: !!req.session.verified
  });
});

router.use(verify);

/* Url API */
router.post('/shorten', function(req, res) {
  var url = req.body.url;
  if (!url) {
    return res.status(400).json({error: "no url specified"});
  }
  item.generateItem(url, function(err, item) {
    if (err) return res.send(err);
    return res.json(item);
  });
});

router.get('hash/:hash', function(req, res) {
  item.find(req.params.hash, function(err, item) {
    if (err) { return res.status(400).json(err); }
    if (!item) { return res.status(404).end(); }
    return res.json(item);
  });
});

module.exports = router;
