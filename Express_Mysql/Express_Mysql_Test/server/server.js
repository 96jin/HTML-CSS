const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const db = require('./config/db.js')

let html_start = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>`

let html_end=`
</body>
</html>`

app.get('/',(req,res)=>{
  res.send('root')
  
})

app.get('/movies',(req,res)=>{
  console.log('movies')
  db.query("select * from movie",(err,data)=>{
    id = data[0].id
    title = data[0].title
    run = data[0].running_time
    if(!err){
      console.log(data)
      res.send(html_start+
        `<div>
          id : ${id}
          <br/>
          제목 : ${title}
          <br/>
          상영시간 : ${run}
        </div>`
        +html_end)
    }
    else{
      console.log(err)
    }
  })

})
app.get('/movies/:id',(req,res)=>{
  console.log('movies/:id')
  const id=req.params.id
  console
  db.query(`select * from movie where id=${id}`,(err,data)=>{
    if(!err){
      console.log(data)
      res.send(html_start+
        `
        <h1>제목 : ${data[0].title}</h1>
        <h3>
        감독 : ${data[0].director}
        <br/>
        상영시간 : ${data[0].running_time}</h3>
        `
        +html_end)
    }
    else{
      console.log(err)
    }
  })
})

app.get('/movies/insert/id=:id&title=:title&director=:director&running_time=:running_time',(req,res)=>{
  const id = req.params.id
  const title = req.params.title
  const director = req.params.director
  const running_time = req.params.running_time

  db.query(`insert into movie values(${id},'${title}','${director}',${running_time})`,(err,data)=>{
    if(!err){
      res.send(html_start+
        `
        <div>
          <h1>입력이 완료되었습니다.</h1>
          <br/>
          <h3>id : ${id} / 제목 : ${title} / 감독 : ${director} / 상영시간 : ${running_time}</h3>
        </div>
        `
        +html_end)
    }
    else{
      res.send(err)
    }
  })
})

//app.put
app.get('/movies/update/id=:id&running_time=:running_time',(req,res)=>{
  const id = req.params.id
  const running_time = req.params.running_time

  db.query(`update movie set running_time=${running_time} where id=${id}`,(err,data)=>{
    if(!err){
      res.send(html_start+
        `
        <div>
          <h1>상영시간 수정이 완료되었습니다.</h1>
          <br/>
          <h3>id : ${id} / 상영시간 : ${running_time}</h3>
        </div>
        `
        +html_end)
    }
    else{
      res.send(err)
    }
  })
})


app.listen(PORT, ()=>{
  console.log(`Server On : http://localhost:${PORT}/`)
})