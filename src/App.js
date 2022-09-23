import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import About from './components/About';
import Learn from './components/Learn/Learn';
import Interpret from './components/Interpret/Interpret';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Routes> */}
          {/* <Route path="/" element={<HomePage />}/> */}
          <HomePage />
          <About />
          {/* <Route path="/learn" element={<Learn />}/> */}
          <Learn />
          <Interpret />
        {/* </Routes> */}

        <Footer />
      </Router>
    </div>
  );
}

export default App;
