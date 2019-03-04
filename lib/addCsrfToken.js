var sodium = require('libsodium-wrappers');

function addCsrfToken(req, res, next) {
    if (!req.session.token) {
        sodium.ready.then(function () {
            // 22 base64 encoded chars = 132 bits, OWASP recommends a
            // minimum of 128 so we should be good
            var bytes = sodium.randombytes_buf(22);
            req.session.token = sodium.to_base64(bytes);
        });
    }

    next();
}

module.exports = addCsrfToken;
