var express = require('express');
var db = require('../lib/db');

var router = express.Router();

router.get('/', function (req, res, next) {
    sendUsers(res);
});

router.patch('/', function (req, res, next) {
    var data = req.body;

    if (data.action === 'setEnabled') {
        var stmt = db.prepare('UPDATE users SET enabled = ? WHERE id = ?');

        for (var id of data.userIds) {
            stmt.run(data.value, id);
        }

        stmt.finalize(function () {
            sendUsers(res);
        });
    }
});

module.exports = router;

function sendUsers(res) {
    db.all('SELECT * FROM users', function (error, rows) {
        if (error) {
            console.log(error);
        }
        else {
            res.json(rows);
        }
    });
}
