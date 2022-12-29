import React from 'react'
import '../App.css';
import About from './About';
import Learn from './Learn/Learn';
import Interpret from './Interpret/Interpret';
import videoBG from '../videos/sign1.mp4';
import {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
        {/* <NavBar /> */}
        <div className="homepage" id='homepage'>
            {/* <div className="overlay"></div> */}
            <video src={videoBG} autoPlay loop muted/>
            <div className='content'>
                {/* <h1>SIGNUS</h1> */}
                <p> <h2> <span> <b> Sign</b></span>Us </h2></p>
                <h4>A bridge between deaf-mute and us</h4>
                <h6>LEARN BANGLA SIGN LANGUAGE</h6>
                <Link to='/signup'><button type="button" className="btn btn-outline-light sign-up">Sign up</button></Link>
            </div>
        </div>
        <About />
        <Learn />
        <Interpret />
    </div>

  )
}


export default HomePage