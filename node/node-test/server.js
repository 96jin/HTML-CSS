// express 는 웹 프레임워크이다.
// get, post, put, delete ,,, 
// tcp ip listen : 통신, TCP IP 에서 서버와 클라이언트 동작방식

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

app.get('/bye',(req,res)=>{
  // console.log('hello!')
  res.send('bye!')
})

app.listen(PORT, ()=>{
  console.log(`Server On : httpL//localhost:${PORT}`)
})
// PORT가 있으면 함수 실행






// localhost : 내컴퓨터 IP 주소 = 127.0.0.1 - me , 192.168.25.67
// http://localhost:4000 - 내컴퓨터에 있는 4000번 포트 프로그램
// http : 통신 요청을 보낸다. -> localhost:4000에다가
// 브라우저(클라이언트)가 서버(express웹프레임워크 기반 서버)에 요청을 보내서
// 요청 받은 서버가 요청을 구분해서 콘솔을 응답한다.

// node server.js
// node 명령어로 server.js파일 실행 - 서버 동작
// 서버가 프로세스에 동작하고있다. (서버가 돌고있다.)
// 프로세스는 동작하고있는 프로그램이 프로세스다.

// TCP - IP 기반 서버와 클라이언트의 통신방식
// listen : 서버 대기 상태이고
// 클라이언트가 요청을 보내면 accept로 넘어간다
// 그 다음에 서버-클라이언트 상호 통신