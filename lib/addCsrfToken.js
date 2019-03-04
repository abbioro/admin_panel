var sodium = require('libsodium-wrappers');

function addCsrfToken(req, res, next) {
    if (!req.session.token) {
        sodium.ready.then(function () {
            // 32 bytes = 256 bits, 43 base64 encoded chars
            var bytes = sodium.randombytes_buf(32);
            req.session.token = sodium.to_base64(bytes);
        });
    }

    next();
}

module.exports = addCsrfToken;
