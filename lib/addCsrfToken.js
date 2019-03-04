var _sodium = require('libsodium-wrappers');

function addCsrfToken(req, res, next) {
    if (!req.session.token) {
        (async () => {
            await _sodium.ready;
            const sodium = _sodium;

            // 22 base64 encoded chars = 132 bits,
            // OWASP recommends minimum 128 so we should be good
            let arr = sodium.randombytes_buf(22);
            req.session.token = sodium.to_base64(arr);
        })();
    }

    next();
}

module.exports = addCsrfToken;
