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
  // 추가 메서드에는 push, concat가 있다.
  // concat은 추가된 배열이 반환되기 때문에 그 값을 받아주는 변수가 있어야한다.
  // newPersonList = personList.concat(personObj)
  personList.push({name : name, age : age, height: height})
  // personList.push(personObj)
  console.log(personList[personList.length-1].name)
  console.log(personList[personList.length-1].age)
  console.log(personList[personList.length-1].height)
})


// axios.put() - 클라이언트 (리액트)
// app.put - 서버 (express)
app.get('/person/update/:name&:age',(req,res)=>{
  console.log('update')
  console.log(req.params)
  const name = req.params.name
  const age = req.params.age
  for(let i=0 ; i<personList.length; i++){
    if(name === personList[i].name){
      personList[i].age = age
    }
  }
  console.log('변경 완료')
  for(let i=0 ; i<personList.length; i++){
    console.log(`${i+1} 번쨰 이름 : `+personList[i].name)
    console.log(`${i+1} 번쨰 나이 : `+personList[i].age)
    console.log(`${i+1} 번쨰 키 : `+personList[i].height+'\n')
}
})

app.get('/person/delete/:name',(req,res)=>{
  console.log('delete')
  console.log(req.params)
  const name = req.params.name
  for(let i=0 ; i<personList.length; i++){
    if(name === personList[i].name){
      personList.splice(i,1)
      // splice : i번쨰 인덱스부터 ~개의 원소를 잘라낸다.
    }
  }
  console.log('삭제 완료')
  for(let i=0 ; i<personList.length; i++){
    console.log(`${i+1} 번쨰 이름 : `+personList[i].name)
    console.log(`${i+1} 번쨰 나이 : `+personList[i].age)
    console.log(`${i+1} 번쨰 키 : `+personList[i].height+'\n')
}
})


app.listen(PORT, ()=>{
  console.log(`Server On : httpL//localhost:${PORT}`)
})
