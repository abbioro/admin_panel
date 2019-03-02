var express = require('express');
var bcrypt = require('bcrypt');

var db = require('../lib/db');

var router = express.Router();

router.get('/', function (req, res, next) {
    if (req.session.logged_in) {
        res.redirect('/admin');
        return;
    }
    res.render('login');
})

router.post('/', function (req, res, next) {
    db.get('SELECT password FROM users WHERE username = ?',
        req.body.username,
        function (err, row) {
            if (err) {
                res.send(500);
                return err;
            }

            if (row === undefined) {
                res.status(400).send('Incorrect username or password.');
                return;
            }

            if (bcrypt.compareSync(req.body.password, row.password)) {
                req.session.logged_in = true;
                res.redirect('/admin');
                return;
            } else {
                res.status(400).send('Incorrect username or password.');
                return;
            }
        });
});

module.exports = router;
