var express = require('express');
var db = require('../src/db');

var router = express.Router();

router.get('/', function (req, res, next) {
    db.all('SELECT * FROM users', function (error, rows) {
        if (error) {
            console.log(error);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;
