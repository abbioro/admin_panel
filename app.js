var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var SQLiteStore = require('connect-sqlite3')(session);

// Local includes
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var adminRouter = require('./routes/admin');
var usersRouter = require('./routes/users');
var htmlEngine = require('./lib/html_engine');

var app = express();

// Default middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Set up HTML render engine
app.engine('html', htmlEngine);
app.set('view engine', 'html');

// Sessions
app.use(session({
    name: 'user_session',
    store: new SQLiteStore({
        db: 'sessions.sqlite3'
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60 * 1000, // 60 seconds
        secure: true,
        httpOnly: true
    }
}));

// Routers
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/admin', adminRouter);
app.use('/users', usersRouter);

module.exports = app;
