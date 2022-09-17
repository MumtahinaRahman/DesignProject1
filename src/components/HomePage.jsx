import React from 'react'
import '../App.css';
import NavBar from './NavBar'
import videoBG from '../videos/sign1.mp4';

const HomePage = () => {
  return (
    <div>
        <NavBar />
        <div className="homepage">
            {/* <div className="overlay"></div> */}
            <video src={videoBG} autoPlay loop muted/>
            <div className='content'>
                <h1>SIGNUS</h1>
                <h4>a bridge between deaf-mute and us</h4>
                <h6>sign up to learn Bangladeshi sign language</h6>
                <button type="button" class="btn btn-outline-light sign-up">Sign up</button>
            </div>
        </div>
    </div>

  )
}


export default HomePage