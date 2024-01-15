//import logo from './logo.svg';
import './App.css';
import Count from './Components/Count';
import Hello from './Components/Hello';
import Message from './Components/Message';
import FunctionCounter from './Components/FunctionCounter';

function App() {
  return (
    <div className="App">
      <Hello/>
      <Message/>
      <Count/>
      <FunctionCounter/>
    </div>
  );
}

export default App;
