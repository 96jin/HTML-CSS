import './App.css';
import axios from 'axios'
// axios 모듈에서 axios 함수를 불러온다. ($.ajax와 거의 같다.)
// axios를 쓰는 목적은 서버에 데이터를 요청할 때 비동기적으로 요청하려고

function App() {

  const selectAll = () =>{
    alert('selectAll')
    axios.get('/movies')

    // 서버에 전송해서 응답
    // package.json 에 proxy 설정해주면 앞의 경로를 생략가능
    // axios.get('/movies/')
  }

  return (
    <div id="App">
      <h1>React-Express-Mysql Connect</h1>
      <button onClick={selectAll}>모두 조회</button>
    </div>
  );
}

export default App;
