function csrfCheck (req, res, next) {
    if (!req.body._csrf || req.body._csrf !== req.session.token) {
        res.status(401).send('bad token');
        return;
    }
    
    next();
}

module.exports = csrfCheck;
