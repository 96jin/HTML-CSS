import './App.css';
import TestMocking from './components/TestMocking';
import Counter from './features/counter/Counter'
import CounterTwo from './components/CounterTwo'

function App() {
  return (
    <div className="App">
      <TestMocking/>
      <Counter/>
      <br/>
      <br/>
      <br/>
      {/* <CounterTwo/> */}
      {/* 컴포넌트가 분리되어있음에도 상태가 공유된다. why? Provider덕분에 */}
    </div>
  );
}

export default App;
