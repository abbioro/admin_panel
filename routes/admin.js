var express = require('express');
var restrict = require('../lib/restrict');
var router = express.Router();

router.get('/', restrict, function (req, res, next) {
    res.render('admin');
});

module.exports = router;
