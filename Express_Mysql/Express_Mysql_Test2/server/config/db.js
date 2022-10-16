let mysql = require('mysql')

const db = mysql.createPool({
  host:'localhost',
  user:'root',
  password:'00000000',
  database:'node_db',
  port:4000
})

module.exports = db