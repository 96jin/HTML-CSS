// -----server 만들기-----

const express = require('express')
// express 모듈을 할당해서 객체 생성

const app = express()
// express 객체 생성해서 app 변수에 할당

const PORT = process.env.PORT || 4000;
// PORT를 할당하거나 PORT가 없으면 서버 포트 4000번을 할당
// 웰 논 포트 (well known port) : 3306(MySql) , 1521(Oracle) , 31(FTP) , 32(SFTP)

app.get('/',(req,res)=>{
  // console.log('root!') // console로만 나옴
  res.send('root!') // 화면에 찍힌다.
})

app.get('/hello',(req,res)=>{
  // console.log('hello!')
  res.send('hello!')
})

app.get('/api/person',(req,res)=>{
  res.send('All person!')
})

// 콜론(:) 을 붙이면 key value 형태로 값이 저장된다.
app.get('/api/person1/:name',(req,res)=>{
  const name = req.params.name
  // request parameters name
  res.send('person!'+name)
})

app.get('/api/person2/:name&:age',(req,res)=>{
  const name = req.params.name
  const age = req.params.age
  // request parameters name
  console.log(req.params)
  res.send(`이름 : ${name} , 나이 : ${age}`)
})

app.get('/api/person3/:name&:age&:height',(req,res)=>{
  const name = req.params.name
  const age = req.params.age
  const height = req.params.height
  // request parameters name
  console.log(req.params)
  res.send(`이름 : ${name} , 나이 : ${age} , 키 : ${height}`)
})
// res : response, req : request
// response : 서버 응답, request : 클라이언트의 요청

app.listen(PORT, ()=>{
  console.log(`Server On : httpL//localhost:${PORT}`)
})
// PORT가 있으면 함수 실행

