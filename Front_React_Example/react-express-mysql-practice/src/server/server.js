const express = require('express')
const app = express()

const db = require('./config/db.js')

const PORT = process.env.PORT || 3500

app.get('/',(req,res)=>{
    console.log('root')
  })

app.get('/movies',(req,res)=>{
    console.log('/movies')
})

app.get('/',(req,res)=>{


})

app.listen(PORT,()=>{
    console.log(`Server Connected : http://localhost:${PORT}`)
})