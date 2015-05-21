module.exports = function() {
  return function(req, res, next) {
    if (!req.session.verified) {
      return res.json({error: 'unauthorized'});
    }
    next();
  };
};