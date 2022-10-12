import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import bg from './images/bg.png'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage';
import Footer from './components/Footer/Footer';
import Lessons from './Pages/Lessons/Lessons';
import Tests from './Pages/Tests';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';

// style={{backgroundImage:`url(${bg})`,  }}

function App() {
  return (
    <div className="App" >
      <Router>
          <NavBar />
          {/* <HomePage /> */}
          <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="lessons" element={<Lessons />}/>
          <Route path="tests" element={<Tests />}/>
          <Route path="login" element={<Login />}/>
          <Route path="profile" element={<Profile />}/>
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
