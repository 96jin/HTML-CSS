const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())
// req.body를 나오게 하기위해 사용, 사용하지않으면 body가 undefined가 나온다.

const db = require('./config/db.js')

const PORT = process.env.PORT || 3500

app.get('/',(req,res)=>{
    console.log('root')
  })

app.get('/movies',(req,res)=>{
    console.log('/movies')
    db.query("select * from movie",(err,data)=>{
        if(!err){
            console.log(data)
            res.send(data)
            // response, send
            // 응답을 클라이언트쪽으로 보낸다. data가 react로 보내진다.
        }
        else{
            console.log(err)
        }
    })
})

app.get('/movies/:id',(req,res)=>{
    console.log('/movie/:id')
    const id = req.params.id
    console.log(id)
    db.query(`select * from movie where id=${id}`,(err,data)=>{
        if(!err){
            console.log(data)
            res.send(data)
        }
        else{
            console.log(err)
        }
    })
})

app.post('/movies',(req,res)=>{
    console.log('/movies(post)')
    const target = req.body
    const id = target.id
    const title = target.title
    const director = target.director
    const run_time = target.running_time
    console.log(req.body)

    db.query(`insert into movie values(${id},'${title}','${director}',${run_time})`,(err,data)=>{
        if(!err){
            console.log('입력이 완료되었습니다.')
        }
        else{
            console.log(err)
        }
    })
    // get 으로 넘어온 정보는 req.params 지만 post로 넘어온 정보는 req.body에 있다.
})

app.put('/movies',(req,res)=>{
    console.log('movies(update)')
    console.log(req.body)
    const target = req.body
    const id = target.id
    const director = target.director
    const run_time = target.running_time

    db.query(`update movie set director = '${director}',running_time=${run_time} where id=${id}`,(err,data)=>{
        if(!err){
            console.log('수정 완료!')
        }
        else{
            console.log(err)
        }
    })
})

app.delete('/movies/:id',(req,res)=>{
    console.log('movies(delete)')
    console.log(req.body)
    console.log(req.params.id)
    const id = req.params.id
    db.query(`delete from movie where id = ${id}`,(err,data)=>{
        if(!err){
            console.log('삭제 완료')
        }
        else{
            console.log(err)
        }
    })
})

app.listen(PORT,()=>{
    console.log(`Server Connected : http://localhost:${PORT}`)
})