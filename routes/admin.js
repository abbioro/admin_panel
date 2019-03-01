var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    if (!req.session.logged_in) {
        req.session.destroy(function () {
            res.clearCookie('session');
            res.redirect('/');
        });
        return;
    }

    res.render('admin');
});

module.exports = router;
