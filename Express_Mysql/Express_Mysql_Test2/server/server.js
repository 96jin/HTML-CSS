const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const db = require('./config/db.js')

app.get('/',(req,res)=>{
  console.log('root')
})

// 조회
app.get('/cars',(req,res)=>{
  console.log('cars!')
  let a,b = db.query()

  db.query(`select * from car`,(err,data)=>{
    if(!err){
      console.log(data)
    }
    else{
      console.log(err)
    }
  })
})

// 선택 조회
app.get('/cars/model=:model',(req,res)=>{
  let model = req.params.model

  db.query(`select * from car where model='${model}'`,(err,data)=>{
    if(!err){
      console.log(`${model}정보 조회`)
      console.log(data)
    }
    else{
      console.log(err)
    }
  })
})

// 입력
app.get('/cars/insert/model=:model&price=:price&eff=:eff',(req,res)=>{
  let model = req.params.model
  let price = req.params.price
  let eff = req.params.eff
  let unit = 'km'


  db.query(`insert into car values ('${model}',${price},${eff},'${unit}')`,(err,data)=>{
    if(!err){
      console.log('입력이 왼료되었습니다.')
    }
    else{
      console.log(err)
    }
  })
})

// 수정
app.get('/cars/update/price=:price&model=:model',(req,res)=>{
  let price = req.params.price
  let model = req.params.model

  db.query(`update car set price = ${price} where model='${model}'`,(err,data)=>{
    if(!err){
      console.log('수정이 완료되었습니다.')
    }
    else{
      console.log(err)
    }
  })
})

app.listen(PORT,()=>{
  console.log(`Server on : http://localhost${PORT}`)
})