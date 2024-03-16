import './App.css';
import "./App.scss"

import Heading from './components/header';
import Main from './components/main';




function App() {
  return (
    <div id="App">
      <Heading className="heading-component"/>
      <Main/>
    </div>
  );
}

export default App;
