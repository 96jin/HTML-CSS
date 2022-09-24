const express = require('express')

const app = express()

const PORT = process.env.PORT || 8080

app.get('/',(req,res)=>{
  res.send('root!')
})

app.get('/car1/:model',(req,res)=>{
  const model = req.params.model
  res.send(`모델 : ${model}`)
})

app.get('/car2/:model&:price',(req,res)=>{
  const model = req.params.model
  const price = req.params.price
  res.send(`모델 : ${model} , 가격 : ${price}`)  
})

app.get('/car3/:model&:price&:eff',(req,res)=>{
  const model = req.params.model
  const price = req.params.price
  const eff = req.params.eff
  res.send(`모델 : ${model} , 가격 : ${price} , 연비 : ${eff}`)
  
})

app.listen(PORT, ()=>{
  console.log(`Server On : http://localhost:${PORT}`)
})