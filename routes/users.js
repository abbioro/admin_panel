var express = require('express');
var db = require('../lib/db');

var router = express.Router();

// Get users as JSON
router.get('/', function (req, res, next) {
    db.all('SELECT * FROM users', function (error, rows) {
        if (error) {
            console.log(error);
        } else {
            res.json(rows);
        }
    });
});

// Update multiple users at once
router.patch('/', function (req, res, next) {
    if (req.body.action === 'usersDisable') {
        req.body.checkedUsers.forEach(id => {
            db.run('UPDATE users SET enabled = ? WHERE id = ?', 0, id);
        });
        res.send(204);
    }
    if (req.body.action === 'usersEnable') {
        req.body.checkedUsers.forEach(id => {
            db.run('UPDATE users SET enabled = ? WHERE id = ?', 1, id);
        });
        res.send(204);
    }
});

module.exports = router;
