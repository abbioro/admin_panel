var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    if (req.session.logged_in) {
        res.redirect('/admin');
        return;
    }
    res.render('index');
});

module.exports = router;
