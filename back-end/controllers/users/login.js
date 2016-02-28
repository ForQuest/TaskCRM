/**
 * Module dependencies.
 */

var log            = require('../../libs/log')(module);
var config         = require('nconf');

var passport       = require('passport');

// End of dependencies.


module.exports = function(req, res, next) {

  log.info('someone trying to login');

  passport.authenticate('local',
    function(err, user, info) {
      log.info('user:', user);
      return err 
        ? next(err)
        : user
          ? req.logIn(user, function(err) {
              return err
                ? next(err)
                : res.redirect('/private');
            })
          : res.redirect('/fail');
    }
  )(req, res, next);

};