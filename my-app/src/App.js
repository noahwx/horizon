import './index';
import { Routes ,Route } from 'react-router-dom';
import Main from './Main'
import Navbar from './Navbar';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <SignUp />
    </div>
  );
}

export default App;
