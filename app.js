var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var SQLiteStore = require('connect-sqlite3')(session);

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
    name: 'session',
    store: new SQLiteStore({
        db: 'sessions.sqlite3'
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 1000, // 60 seconds
        secure: true,
        httpOnly: true
    }
}));

// Routers
app.use('/', require('./routes/index'));
app.use('/login', require('./routes/login'));
app.use('/logout', require('./routes/logout'));
app.use('/admin', require('./routes/admin'));
app.use('/users', require('./routes/users'));

module.exports = app;
