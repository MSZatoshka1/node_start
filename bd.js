const mysql = require('mysql');
const pool = mysql.createPool({
    host            : 'localhost',
    user            : 'root',
    password        : 'secret',
    database        : 'node_js'
});

module.exports = pool;