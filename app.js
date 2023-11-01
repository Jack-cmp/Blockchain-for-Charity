var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require("express-session")
var flash = require('connect-flash')
var login = require('./routes/login1')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homeRouter = require('./routes/home');
var payeeRouter = require('./routes/payee'); //需要拦截
var contributeRouter = require('./routes/contribute'); //需要拦截
var contributeFailRouter = require('./routes/contributeFail');
var contributeSuccessRouter = require('./routes/contributeSuccess');
var houRouter = require('./routes/hou');
var houloginRouter = require('./routes/houlogin');
var informationRouter = require('./routes/information'); //需要拦截
var inspectRouter = require('./routes/inspect');
var loginRouter = require('./routes/login'); //登录
var registerRouter = require('./routes/register');
var submitFailRouter = require('./routes/submitFail');
var submitSuccessRouter = require('./routes/submitSuccess');
var wishRouter = require('./routes/wish');  //需要拦截
var wishSuccessRouter = require('./routes/wishSuccess');
var satisfyConditionRouter = require('./routes/satisfyCondition');
var houwishRouter = require('./routes/houwish');
var wdRouter = require('./routes/wd'); //需要拦截
var txRouter = require('./routes/tx');
var houHomeRouter = require('./routes/houHome');




var ejs = require('ejs')
 
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',ejs.__express)
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'bitiancanshu',
 //以下是必填参数，但是不填会提示警告
 resave: false,
 saveUninitialized: true,
 // 设置connect.sid
 name: 'aaa',
 //设置生命周期
 cookie: { maxAge: 60000000},
}))

app.use(flash())
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/home',homeRouter);


app.use('/contributeFail',contributeFailRouter);
app.use('/contributeSuccess',contributeSuccessRouter);
app.use('/hou',houRouter);
app.use('/houlogin',houloginRouter);
app.use('/inspect',inspectRouter);
app.use('/login',loginRouter);
app.use('/register',registerRouter);
app.use('/submitFail',submitFailRouter);
app.use('/submitSuccess',submitSuccessRouter);

app.use('/wishSuccess',wishSuccessRouter);
app.use('/satisfyCondition',satisfyConditionRouter);
app.use('/houwish',houwishRouter);

app.use('/tx',txRouter);
app.use('/houHome',houHomeRouter);


// app.use(login)
app.use('/payee',payeeRouter); //需要拦截
app.use('/contribute',contributeRouter); //需要拦截
app.use('/information',informationRouter); //需要拦截
app.use('/wish',wishRouter); //需要拦截
app.use('/wd',wdRouter); //需要拦截






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
