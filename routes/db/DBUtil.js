var mysql = require('mysql');
var dbConfig = require('../../config/db.config');

var connection = mysql.createConnection({
    host     : dbConfig.host,
    user     : dbConfig.username,
    password : dbConfig.password
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
});

connection.end();