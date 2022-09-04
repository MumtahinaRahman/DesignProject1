import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
      </Router>
      <h1>a bridge between deaf-mute and us</h1>
    </div>
  );
}

export default App;
