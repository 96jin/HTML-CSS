const express = require('express')

const app = express()

const PORT = process.env.PORT || 4000

app.get('/api',(req,res)=>{
  res.send('계산 서버입니다.')
})

app.get('/api/add/num1=:num1&num2=:num2', (req,res)=>{
  const num1 =  parseInt(req.params.num1)
  const num2 = parseInt(req.params.num2)
  const sum = num1 + num2
  res.send(`덧셈 결과 : ${sum}`)
})

app.get('/api/sub/num1=:num1&num2=:num2', (req,res)=>{
  const num1 = req.params.num1
  const num2 = req.params.num2
  const sub = num1 - num2
  res.send(`뺼셈 결과 : ${sub}`)
})

app.get('/api/mul/num1=:num1&num2=:num2', (req,res)=>{
  const num1 = req.params.num1
  const num2 = req.params.num2
  const mul = num1 * num2
  res.send(`곱셈 결과 : ${mul}`)
})

app.get('/api/div/num1=:num1&num2=:num2', (req,res)=>{
  const num1 = req.params.num1
  const num2 = req.params.num2
  const div = num1 / num2
  res.send(`나눗셈 결과 : ${div}`)
})



app.listen(PORT, ()=>{
  console.log(`Server On : httpL//localhost:${PORT}`)
})
