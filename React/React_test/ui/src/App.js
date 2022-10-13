import './App.css';

// Webpack CSS import
// import 'onsenui/css/onsenui.css';
// import 'onsenui/css/onsen-css-components.css';
// index에다가 css를 import 해야한다.

import AntDesignExample from './Components/AntDesign/AntDesignExample';
import OnsenUiExample from './Components/OnsenUi/OnsenUiExample';
import SemanticUiExample from './Components/SemanticUi/SemanticUiExample';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    // <OnsenUiExample/>
    <div className="App">
      <SemanticUiExample/>
      {/* <AntDesignExample/> */}
    </div>
  );
}

export default App;
