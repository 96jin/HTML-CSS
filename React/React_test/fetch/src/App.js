import './App.css';
import TestMocking from './components/TestMocking';
import Counter from './features/counter/Counter'
import CounterTwo from './components/CounterTwo'
import MobXExample from './components/MobXExample';
import TodoList from './components/TodoList';
import { observableTodoStore } from './app/ObservableTodoStore';

function App() {
  return (
    <div className="App">
      {/* <TestMocking/>
      <Counter/> */}
      {/* <br/>
      <br/>
      <br/> */}
      {/* <CounterTwo/> */}
      {/* 컴포넌트가 분리되어있음에도 상태가 공유된다. why? Provider덕분에 */}
      {/* <MobXExample/> */}
      <TodoList store={observableTodoStore}/>
    </div>
  );
}

export default App;
