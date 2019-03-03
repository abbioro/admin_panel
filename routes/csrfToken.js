var express = require('express');
var uid = require('uid-safe'); // TODO: Use libsodium

var router = express.Router();

router.get('/', function (req, res, next) {
    if (!req.session.token) {
        req.session.token = uid.sync(32); // TODO: Use libsodium
    }

    res.json({
        token: req.session.token
    });
});

module.exports = router;
