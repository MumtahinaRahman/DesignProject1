import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'
import HomePage from './components/HomePage';
import Footer from './components/Footer/Footer';
import Lessons from './Pages/Lessons';
import Tests from './Pages/Tests';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
          <NavBar />
          {/* <HomePage /> */}
          <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="lessons" element={<Lessons />}/>
          <Route path="tests" element={<Tests />}/>
          <Route path="login" element={<Login />}/>
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
