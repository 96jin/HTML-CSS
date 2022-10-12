import './App.css';

// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
// index에다가 css를 import 해야한다.

import AntDesignExample from './Components/AntDesign/AntDesignExample';
import OnsenUiExample from './Components/OnsenUi/OnsenUiExample';

function App() {
  return (
    // <OnsenUiExample/>
    <div className="App">
      <AntDesignExample/>
    </div>
  );
}

export default App;
