var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    if (req.body.user_name === "abbi") {
        res.redirect('/admin')
    } else {
        res.send(req.body);
    }
});

module.exports = router;
