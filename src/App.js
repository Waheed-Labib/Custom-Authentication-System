import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

  return (
    <div className="flex justify-between">
      <Login></Login>
      <Signup></Signup>
    </div>
  );
}

export default App;
