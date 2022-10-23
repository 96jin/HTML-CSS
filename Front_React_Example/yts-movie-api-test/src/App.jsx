import axios from 'axios'
import { useState } from 'react';
import './App.css';

function App() {
  const [img, setImg] = useState([])
  const [title, setTitle] = useState([])
  const getMovieData = async() => {
    const result = await axios.get('https://yts.mx./api/v2/list_movies.json')
    console.log(result)
    const imgSrc = result.data.data.movies.map((movies)=>(movies.small_cover_image))
    const titleList = result.data.data.movies.map((movies)=>(movies.title))
    setImg(imgSrc)
    setTitle(titleList)
  }
  return (
    <div className="App">
      <h1>YTS영화 API 테스트</h1>
      <button onClick={getMovieData}>데이터 요청</button>
      <br />
      {img.map((src,i)=>
        <>
          <div style={{width:'250px',height:'70px',marginBottom:'50px'}}>
            <img src={src}/><br />
            {title[i]}
            </div>
        </>
          )}
    </div>
  );
}

export default App;
