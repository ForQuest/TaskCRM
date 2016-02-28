'use strict';

/**
 * Module dependencies.
 */
var log            = require('../../libs/log')(module);
var config         = require('nconf');

var express        = require('express');
var cookieParser   = require('cookie-parser');
var bodyParser     = require('body-parser');
var session        = require('express-session');
var methodOverride = require('method-override');
var serveStatic    = require('serve-static');
var errorHandler   = require('errorhandler');
var multer         = require('multer');

var passport       = require('passport');
var path           = require('path');

// end of dependencies.


module.exports = function() {
  this.use(cookieParser());
  this.use(bodyParser());
  this.use(session({ secret: 'SECRET' }));
  this.use(methodOverride());
  this.use(serveStatic(path.join(__dirname, "public")));
  this.use(errorHandler());
  this.use(passport.initialize());
  this.use(passport.session());
};


