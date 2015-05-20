var express = require('express');
var router = express.Router();

/* Secret API */
router.post('/secret', function(req, res) {
  res.send(req.body);
});

module.exports = router;
