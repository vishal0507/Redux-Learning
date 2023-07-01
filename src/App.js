import './App.css';
import Login from './Login';
import Profile from './Profile';
import ColorSelector from './ColorSelector';

function App() {
  return (
    <div className="App">
     <h1>Redux</h1>
     <Profile/>
     <Login/>
     <ColorSelector/>
    </div>
  );
}

export default App;
