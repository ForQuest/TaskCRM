var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
/*для сессии
var session = require('express-session');*/

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/*для сессии
app.use(session({secret: 'keyboard cat'}));*/
/*Поддержка сессий
app.use(express.cookieDecoder());
app.use(express.session());*/

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
/*
app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: new SessionStore(options)
}));
app.get('/', function(req, res, next) {
    console.log("aaa");
    req.session.number = req.session.number + 1 || 1;
    console.log(req.session.number)
    res.end("You saw this "+req.session.number.toString()+" times");
    next();
});
*/
/*
function loadUser(req, res, next) {
  if (req.session.user_id) {
    User.findById(req.session.user_id, function(user) {
      if (user) {
        req.currentUser = user;
        next();
      } else {
        res.redirect('/sessions/new');
      }
    });
  } else {
    res.redirect('/sessions/new');
  }
}
app.get('/documents.:format?', loadUser, function(req, res) {
  // ...
});
*/

/*
var //...
    middleWare_isLogged = [auth.checkUser],
    middleWare_canEditUsers = [auth.checkUser, auth.hasPrivilege('editUsers')];

app.get('/', function (req, res) {
// просто отдаём страницу

// some code here
});

app.get('/users', middleWare_isLogged, function (req, res) {
// проверям, залогинен ли пользователь

// some code here
});

app.post('/users/edit', middleWare_canEditUsers, function (req, res) {
// проверяем, имеет ли залогиненый пользователь привилегию "editUsers"

// some code here
});
*/
function accept(req, res) {

  if (req.url == '/digits?') {

    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Cache-Control': 'no-cache'
    });

    //var i = 0;
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    //var timer = setInterval(write, 1000);
    write();

    function write() {
      res.writeHead(200, {'Content-Type': 'text/html'});
      //('<html><body>Hello world!<script src=".js" type="text/javascript"></script></body></html>')
      res.end(..\Auto2.html);
    }
  } else {
    file.serve(req, res);
  }
}

module.exports = app;
