import React from 'react'
import '../App.css';
import About from './About';
import Learn from './Learn/Learn';
import Interpret from './Interpret/Interpret';
import videoBG from '../videos/sign1.mp4';

const HomePage = () => {
  return (
    <div>
        {/* <NavBar /> */}
        <div className="homepage" id='homepage'>
            {/* <div className="overlay"></div> */}
            <video src={videoBG} autoPlay loop muted/>
            <div className='content'>
                <h1>SIGNUS</h1>
                <h4>a bridge between deaf-mute and us</h4>
                <h6>sign up to learn Bangladeshi sign language</h6>
                <button type="button" className="btn btn-outline-light sign-up">Sign up</button>
            </div>
        </div>
        <About />
        <Learn />
        <Interpret />
    </div>

  )
}


export default HomePage