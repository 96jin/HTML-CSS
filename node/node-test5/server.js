const express = require('express')

const app = express()

const PORT = process.env.PORT || 4000

let carList = [
  {name : '소나타', price : '3000만', eff : '12.8km'},
  {name : '아반떼', price : '3500만', eff : '13.2km'},
  {name : '투싼', price : '3800만', eff : '13.6km'},

]

app.get('/',(req,res)=>{
  res.send('root!')
})

// 모든 차 출력
app.get('/car', (req,res)=>{
  console.log('모두 출력')
  for(let i=0; i<carList.length; i++){
    console.log(carList[i].name)
    console.log(carList[i].price)
    console.log(carList[i].eff+'\n')
  }
})

// 조건부 출력
app.get('/car/:name', (req,res)=>{
  const name = req.params.name
  console.log(`${name} 출력`)
  for(let i=0; i<carList.length; i++){
    if(name === carList[i].name){
      console.log(carList[i].name)
      console.log(carList[i].price)
      console.log(carList[i].eff+'\n')
    }
  }
})

// 추가
app.get('/car/add/:name&:price&:eff', (req,res)=>{
  const carObj = req.params
  carList.push(carObj)
  console.log('추가 완료')
  for(let i=0; i<carList.length; i++){
    console.log(carList[i].name)
    console.log(carList[i].price)
    console.log(carList[i].eff+'\n')
  }
})

// 수정
app.get('/car/update/:name&:price', (req,res)=>{
  const name = req.params.name
  const price = req.params.price
  for(let i=0; i<carList.length; i++){
    if(name === carList[i].name){
      carList[i].price = price
    }
  }
  console.log('수정 완료')
  for(let i=0; i<carList.length; i++){
    console.log(carList[i].name)
    console.log(carList[i].price)
    console.log(carList[i].eff+'\n')
  }
})

// 제거
app.get('/car/delete/:name', (req,res)=>{
  const name = req.params.name

  for(let i=0; i<carList.length; i++){
    if(name === carList[i].name){
      // carList.splice(i,1)
      carList = carList.filter(data => data.name!=name)
    }
  }
  console.log('삭제 완료')
  for(let i=0; i<carList.length; i++){
    console.log(carList[i].name)
    console.log(carList[i].price)
    console.log(carList[i].eff+'\n')
  }
})
// filter 메서드
// json데이터가 한개씩 data로 넘어와서 함수 내용에 제시한 조건을 만족할 경우 저장됨
// const result = carList.filter(data => data.name ~~~)
// data 에 carList의 인자가 하나씩 들어가서 조건식이랑 비교.
// 조건식을 만족하는 값들만 새로 배열을 생성한다.


app.listen(PORT, ()=>{
  console.log(`Server On : httpL//localhost:${PORT}`)
})
