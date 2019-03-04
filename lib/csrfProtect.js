function csrfCheck(req, res, next) {
    if (!req.session.token) {
        res.redirect('/');
        return;
    }

    if (!req.body._csrf || req.body._csrf !== req.session.token) {
        res.status(404);
        return;
    }

    next();
}

module.exports = csrfCheck;
