const mysql = require('mysql2');

const mySqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'adminadmin',
    database: 'todos',
});

module.exports = mySqlPool;
