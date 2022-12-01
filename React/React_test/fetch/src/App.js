import './App.css';
import TestMocking from './components/TestMocking';
import Counter from './features/counter/Counter'
import CounterTwo from './components/CounterTwo'
import MobXExample from './components/MobXExample';
// import TodoList from './components/TodoList';
// import { observableTodoStore } from './app/ObservableTodoStore';
// import Text from './components/RecoilExample/Text';
// import FontButton from './components/RecoilExample/FontButton';
import { RecoilRoot } from 'recoil';
// import CharactorCount from './components/RecoilExample/CharactorCount';
import TodoList from './components/RecoilExample/Todo/TodoList';
import CurrentUserInfo from './components/RecoilExample/CurrentUser/CurrentUserInfo';
import Profile from './components/SWRExample/Profile';
import Cache from './components/SWRExample/Cache';

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
      {/* <TodoList store={observableTodoStore}/> */}
      {/* <RecoilRoot> */}
        {/* <TodoList/> */}
        {/* <CurrentUserInfo/> */}
        {/* <FontButton/>
        <Text/>
        <CharactorCount/> */}
      {/* </RecoilRoot> */}
      <Profile/>
      <Cache/>
    </div>
  );
}

export default App;
