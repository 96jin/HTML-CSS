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

  // 리액트에서 img src 사용할때에는 public 내부가 기본경로로 설정되어있다.
  return (
    <div className="App">
      <Header style={{backgroundColor:'green', color:'white'}}/>
      <Slide/>
      <Contents/>
      <Footer/>
    </div>
  );
}

// App 컴포넌트를 외부로 보낸다. 그리고 index.js에서 import해서 사용
export default App;
