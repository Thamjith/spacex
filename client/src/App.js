import './App.css';
import logo from './logo.png';
import Launches from './components/Launches'

function App() {
  return (
      <div className="container">
        <img src={logo} alt="spaceX" style={{ width:300, display: 'block', margin: 'auto' }}></img>
        <Launches />
      </div>
  );
}

export default App;
