const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: process.env.LIMIT,
    password:process.env.PW,
    user:process.env.USER,
    database: process.env.DATABASE,
    host: process.env.HOST,
})

module.exports = pool;