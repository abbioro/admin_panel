var fs = require('fs');

// Basic HTML view engine for Express with caching

module.exports = function (filePath, options, callback) {
    var cachedName = filePath + ':html';

    if (cachedName in module.exports.cache) {
        return callback(null, module.exports.cache[cachedName]);
    }

    fs.readFile(filePath, 'utf8', function (err, content) {
        if (err) { return callback(err); }

        module.exports.cache[cachedName] = content;
        return callback(null, content);
    });
};

module.exports.cache = {};
