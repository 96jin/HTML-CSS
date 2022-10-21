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
  let optionRef = useRef()
  let divRef = useRef()
  
  const [articleTitles, setArticleTitles] = useState(['리액트 공부하기','점심먹기','JS 작동원리 파악'])
  const [input, setInput] = useState(articleTitles)
  
  const handleOnInput = () => {
    console.log('input : '+input)
    
  }

  function keyEffect(){
    let changeIdx = optionRef.current.value
    divRef.current.children[changeIdx].style.animation = ''
    const copyArticleTitles = [...articleTitles]
    copyArticleTitles[changeIdx] = inputRef.current.value
    setInput(copyArticleTitles)
    setArticleTitles(copyArticleTitles)
    inputRef.current.value = ''
    inputRef.current.focus()
    setTimeout(()=>{divRef.current.children[changeIdx].style.animation = 'color 2s'},0)
  }

  const handleClickButton = () => {
    keyEffect()
  }
  const handleKeyDownEnter=(e)=>{
    if(e.keyCode === 13){
      keyEffect()
    }
  }
  const handleClickSort = () => {
    const copyArticleTitles = [...articleTitles]
    copyArticleTitles.sort()
    setInput(copyArticleTitles)
    setArticleTitles(copyArticleTitles)
  }

  return (
    <div className="App">
      {/* <Header style={{backgroundColor:'green', color:'white'}}/>
      <Slide/>
      <Contents/>
      <Footer/> */}
      <div className='wrap'>
        <input className='inputBox' onChange={handleOnInput} onKeyDown={handleKeyDownEnter} ref={inputRef}></input>
        <select className='sel' ref={optionRef}>
          <option value='0'>1번</option>
          <option value='1'>2번</option>
          <option value='2'>3번</option>
        </select>
        <button className='change' onClick={handleClickButton}>목록 변경</button>
        <br/>
        <button className='sort' onClick={handleClickSort}>정렬</button><br/>
        <div className='article' ref={divRef}> 
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
    </div>
  );
}

// App 컴포넌트를 외부로 보낸다. 그리고 index.js에서 import해서 사용
export default App;
