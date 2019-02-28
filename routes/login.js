var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    res.cookie('username', String(req.body.user_name), {
        maxAge: 30 * 1000
    });

    if (req.body.user_name === 'abbi') {
        res.redirect('/admin');
    } else {
        res.send(req.body);
    }
});

module.exports = router;
