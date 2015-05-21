module.exports = function() {
  return function(req, res, next) {
    if (!req.session.verified) {
      return res.status(400).json({error: 'unauthorized'});
    }
    next();
  };
};