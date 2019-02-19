var sqlite3 = require('sqlite3');

var db = new sqlite3.Database('db.sqlite3', (error) => {
    if (error) {
        return console.error('error: ', error);
    }
});

module.exports = db;