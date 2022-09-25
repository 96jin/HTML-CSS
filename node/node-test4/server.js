const express = require('express')

const app = express()

const PORT = process.env.PORT || 4000

let personList = [
  {name : '이민호', age : 20, height:176.6},
  {name : '정채연', age : 21, height:165.2},
  {name : '송중기', age : 22, height:179.6},
]
// 길이가 3인 JSON 배열

app.get('/',(req,res)=>{
  res.send('root!')
})

// 사람 정보 모두 조회
app.get('/person',(req,res)=>{
  console.log('/person')
  for(let i=0 ; i<personList.length; i++){
      console.log(`${i+1} 번쨰 이름 : `+personList[i].name)
      console.log(`${i+1} 번쨰 나이 : `+personList[i].age)
      console.log(`${i+1} 번쨰 키 : `+personList[i].height+'\n')
  }
})

// 특정 사람 조회
app.get('/person/:name',(req,res)=>{
  const name = req.params.name
  console.log('/person/'+name)
  for(let i=0 ; i<personList.length; i++){
    if(name === personList[i].name){
      console.log(`이름 : `+personList[i].name)
      console.log(`나이 : `+personList[i].age)
      console.log(`키 : `+personList[i].height+'\n')
    }
  }
})

// 클라이언트 객체를 넘긴다.
// axios.post('/person',personObj) - 리액트 클라이언트
// app.post('/person') - express 서버
app.get('/person/add/:name&:age&:height',(req,res)=>{
  const name = req.params.name
  const age = req.params.age
  const height = req.params.height
  const personObj = req.params
  console.log('/person/:name&:age&:height')
  personList.push({name : name, age : age, height: height})
  // personList.push(personObj)
  console.log(personList[personList.length-1].name)
  console.log(personList[personList.length-1].age)
  console.log(personList[personList.length-1].height)
})


app.listen(PORT, ()=>{
  console.log(`Server On : httpL//localhost:${PORT}`)
})
