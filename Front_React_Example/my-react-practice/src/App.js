import { useRef } from 'react';
import { useState } from 'react';
import './App.css';
import Contents from './components/Contents';
import Footer from './components/Footer';
import Header from './components/Header';
// from 의 경로에서 Header 컴포넌트를 가져온다.
import Slide from './components/Slide';

function App() {
  // 함수형 컴포넌트
  // 원래는 APP.jsx 형식인데  APP.js 라고 해도 된다.
  // jsx : JavaScript Extension
  // App가 사실상 메인 컴포넌트이고 하위컴포넌트들을 App의 return안에 넣어준다.
  let inputRef = useRef()
  let opRef = useRef()
  
  const [articleTitles, setArticleTitles] = useState(['서울역 3번출구','용산역 4번출구','강남역 2번출구'])
  const [input, setInput] = useState(articleTitles)
  
  const handleOnInput = () => {
    console.log('input : '+input)
    
  }
  const handleClickButton = () => {
    const copyArticleTitles = [...articleTitles]
    let changeIdx = opRef.current.value
    copyArticleTitles[changeIdx] = inputRef.current.value
    setInput(copyArticleTitles)
    setArticleTitles(copyArticleTitles)
    inputRef.current.value = ''
    inputRef.current.focus()
  }
  const handleKeyDownEnter=(e)=>{
    if(e.keyCode === 13){
      const copyArticleTitles = [...articleTitles]
      let changeIdx = opRef.current.value
      copyArticleTitles[changeIdx] = inputRef.current.value
      setInput(copyArticleTitles)
      setArticleTitles(copyArticleTitles)
      inputRef.current.value = ''
      inputRef.current.focus()
    }
  }
  const handleClickSort = () => {
    const copyArticleTitles = [...articleTitles]
    copyArticleTitles.sort()
    setInput(copyArticleTitles)
    console.log(opRef.current.value)
  }

  return (
    <div className="App">
      {/* <Header style={{backgroundColor:'green', color:'white'}}/>
      <Slide/>
      <Contents/>
      <Footer/> */}
      <button onClick={handleClickSort}>글자순정렬</button><br/>
      <input onChange={handleOnInput} onKeyDown={handleKeyDownEnter} ref={inputRef}></input>
      <br/>
      <select ref={opRef}>
        <option value='0'>1번</option>
        <option value='1'>2번</option>
        <option value='2'>3번</option>
      </select>
      <button onClick={handleClickButton}>게시판 이름 변경</button>
      <div className='article'> 
        <div className='art'>
          {input[0]}
        </div>
        <div className='art'>
          {input[1]}
        </div>
        <div className='art'>
          {input[2]}
        </div>
      </div>
    </div>
  );
}

// App 컴포넌트를 외부로 보낸다. 그리고 index.js에서 import해서 사용
export default App;
