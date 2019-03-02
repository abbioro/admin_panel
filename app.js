var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var SQLiteStore = require('connect-sqlite3')(session);

var app = express();

// Default middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Set up HTML render engine
app.engine('html', require('./lib/html_engine'));
app.set('view engine', 'html');

// Sessions
app.use(session({
    name: 'session',
    store: new SQLiteStore({
        db: 'sessions.sqlite3'
    }),
    secret: process.env.SESSION_SECRET,
    resave: false, // don't save the session if unmodified
    saveUninitialized: false, // don't create session until something is stored
    cookie: {
        maxAge: 60 * 1000, // 60 seconds
        secure: true,
        httpOnly: true
    }
}));

// --- Unrestricted routes ---
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', require('./routes/index'));
app.use('/login', require('./routes/login'));

// Any routes beneath this require authentication
app.use('/', require('./lib/authenticate'));

// --- Restricted routes ---
app.use('/logout', require('./routes/logout'));
app.use('/admin', require('./routes/admin'));
app.use('/users', require('./routes/users'));

module.exports = app;
