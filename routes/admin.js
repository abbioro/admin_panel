var express = require('express');
var session = require('express-session')
var router = express.Router();

router.get('/', function (req, res, next) {
    if (req.session.views) {
        req.session.views++
    } else {
        req.session.views = 1
    }
    console.log('session views: ' + req.session.views);
    res.render('admin');
});

module.exports = router;
