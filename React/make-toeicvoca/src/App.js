import Day from './components/Day';
import DayList from './components/DayList';
import Header from './components/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import EmptyPage from './components/EmptyPage';
import CreateWord from './components/CreateWord';
import CreateDay from './components/CreateDay';

// npm install react-router-dom 으로 설치해준다
// 일단 BrowserRouter로 전체를 감싸주고, 공통 부분인 Header은 따로뺴고, 페이지가 바껴야할 부분을 Routes로 감싼다.
// 그리고 Route 태그 props로 path 와 들어갈 컴포넌트를 element 안에 넣어준다.
// 요청한 경로가 아닐때에는 path 에 '*' 을 넣어주고 element안에 보여줄 페이지를 넣어준다.
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route exact path='/' element={<DayList/>}/>
          <Route path='/day/:day' element={<Day/>}/>
          <Route path='*' element={<EmptyPage/>}/>
          <Route path='/create_word' element={<CreateWord/>}/>
          <Route path='/create_day' element={<CreateDay/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
