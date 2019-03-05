function authenticate(req, res, next) {
    if (!req.session.logged_in && req.xhr) {
        res.status(401).end();
        return;
    }

    if (!req.session.logged_in && !req.xhr) {
        res.redirect('/');
        return;
    }

    next();
}

module.exports = authenticate;
