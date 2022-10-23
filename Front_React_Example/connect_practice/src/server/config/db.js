const mysql = require('mysql')

const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '00000000',
    port : 4000,
    database : 'node_db'
})

module.exports = db