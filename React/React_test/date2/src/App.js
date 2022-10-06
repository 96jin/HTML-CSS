import './App.css';
import DayFnsExample from './components/DateFns/DayFnsExample';
import DayjsExample from './components/Dayjs/DayjsExample';
import MomentExample from './components/Moment/MomentExample';

function App() {
  return (
    <div className="App">
      <DayFnsExample/>
      <DayjsExample/>
      <MomentExample/>
    </div>
  );
}

export default App;
