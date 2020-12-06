import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import logo from './logo.png';
import Launches from './components/Launches'
import Launch from './components/Launch'

function App() {
  return (
    <Router>
      <div className="container">
        <img src={logo} alt="spaceX" style={{ width:300, display: 'block', margin: 'auto' }}></img>
        <Route exact path="/" component={Launches} />
        <Route exact path="/launch/:flight_number" component={Launch} />
      </div>
    </Router>
  );
}

export default App;
