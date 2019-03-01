var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    req.session.destroy(function () {
        res.clearCookie('session');
        res.redirect('/');
    });
});

module.exports = router;
