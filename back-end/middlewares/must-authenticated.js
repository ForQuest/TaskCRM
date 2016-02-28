/**
 * Module dependencies.
 */

var log = require('../libs/log')(module);

// End of dependencies.


module.exports = function (req, res, next){
  req.isAuthenticated()
    ? next()
    : res.redirect('/');
};