var fs = require('fs');

// Basic HTML view engine for Express with caching

module.exports = function (filePath, options, callback) {
    let cachedName = filePath + ':html';

    if (cachedName in module.exports.cache) {
        return callback(null, module.exports.cache[cachedName]);
    } else {
        fs.readFile(filePath, 'utf8', function (err, data) {
            if (err) { return callback(err); }

            module.exports.cache[cachedName] = data;
            return callback(null, data);
        });
    }
};

module.exports.cache = {};
