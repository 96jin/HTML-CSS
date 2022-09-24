
import './App.css';
import Extraction from './components/2-4.Props/Extraction/Extraction'
import Composition from './components/2-4.Props/Composition'
import ClassComponent from './components/2-5.State/ClassComponent'
import FunctionalComponent from './components/2-5.State/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <FunctionalComponent/>
      <ClassComponent />
      <Extraction/>
      <Composition/>
    </div>
  );
}

export default App;
