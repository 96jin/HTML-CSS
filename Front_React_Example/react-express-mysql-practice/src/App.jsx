import './App.css';
import axios from 'axios'
import { useState } from 'react';

// axios 모듈에서 axios 함수를 불러온다. ($.ajax와 거의 같다.)
// axios를 쓰는 목적은 서버에 데이터를 요청할 때 비동기적으로 요청하려고



function App() {

  const [movie, setMovie] = useState([])

  const selectAll = async() =>{
    const result = await axios.get('/movies')
    console.log(result)
    // http://localhost:3500/movies
    // ES6 - template string, arrow function, async
    // async 하고 await axios~ 하면 해당 데이터를 받을때 까지 기다린다.는 뜻
    // 서버에서 보낸 정보를 받아와서 result에 넣고, 브라우저 console에 출력


    // 서버에 전송해서 응답
    // package.json 에 proxy 설정해주면 앞의 경로를 생략가능
    // axios.get('/movies/')
    setMovie([...result.data])
    console.log(movie)
  }

  const selectWhere = async() => {
    const result = await axios.get('/movies/'+3)
    console.log(result)
  }

  const insertData = async() => {
    alert('insertData')
    const movieObj = {id:4 , title : '블랙 아담', director:'드웨인 존슨', running_time:130}
    await axios.post('/movies',movieObj)
    // post : 추가(create) 요청할 때 쓰는 메서드
    // post는 뒤에 콤마 적고, 객체를 넣으면 알아서 넘어간다.
  }

  const updateData = async() => {
    alert('updateData')
    const updateObj = {id:3,director:'성시경', running_time:130}
    const result = await axios.put('/movies',updateObj)
  }

  const deleteData = async() => {
    alert('deleteData')
    const deleteObj = {id:5, title:'dfd'}
    const result = await axios.delete('/movies/'+5)
  }

  return (
    <div id="App">
      <h1>React-Express-Mysql Connect</h1>
      <button onClick={selectAll}>모두 조회</button>
      <button onClick={selectWhere}>조건 조회</button>
      <button onClick={insertData}>추가</button>
      <button onClick={updateData}>수정</button>
      <button onClick={deleteData}>삭제</button>
      {movie.map((data)=>(
        <div style={{width:'400px', height:'50px', backgroundColor:'pink', borderBottom:'1px solid gray'}} 
        key={data.id}>{data.id} {data.title} {data.director} {data.running_time} </div>
      ))}
    </div>
  );
}

export default App;
