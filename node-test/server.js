// express 는 웹 프레임워크이다.
// get, post, put, delete ,,, 


// server 만들기

const express = require('express')
// express 모듈을 할당해서 객체 생성

const app = express()
// express 객체 생성해서 app 변수에 할당

const PORT = process.env.PORT || 4000;
// PORT를 할당하거나 PORT가 없으면 서버 포트 4000번을 할당
// 웰 논 포트 (well known port) : 3306(MySql) , 1521(Oracle) , 31(FTP) , 32(SFTP)

app.get('/',(req,res)=>{
  console.log('root!')
})

app.get('/hello',(req,res)=>{
  console.log('hello!')
})
app.listen(PORT, ()=>{
  console.log(`Server On : httpL//localhost:${PORT}`)
})
// PORT가 있으면 함수 실행
