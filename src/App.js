import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './components/HomePage';
import About from './components/About';
import Learn from './components/Learn/Learn';

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage />
        <About />
        <Learn />
      </Router>
    </div>
  );
}

export default App;
