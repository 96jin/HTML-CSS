import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Article from './components/Article';
import Board from './components/Board';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home/>
        <Routes>
          <Route path='/' element={<Article/>}/>  
          <Route path='/board' element={<Board/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes >  
      </BrowserRouter>
    </div>
  );
}

export default App;
