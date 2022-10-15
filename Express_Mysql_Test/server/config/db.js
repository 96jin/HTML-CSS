import { createPool } from 'mysql'

const db = createPool({
  host:'localhost',
  user:'root',
  password:'00000000',
  database:'node_db',
  port:4000
})

export defaultdb