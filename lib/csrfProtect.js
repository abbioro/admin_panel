function csrfCheck(req, res, next) {
    if (!req.session.token) {
        res.redirect('/');
        return;
    }

    var token = req.header('X-CSRF-TOKEN') || req.body._csrf;

    if (!token || token !== req.session.token) {
        res.status(404).end();
        console.log('[WARNING]: CSRF check failed, possible attack? IP: ' + req.ip);
        return;
    }

    next();
}

module.exports = csrfCheck;
