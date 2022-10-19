import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import sign1 from '../images/sign1.jpg'
import sign2 from '../images/sign2.jpg'
import test1 from '../images/test1.jpeg'


const About = () => {
  return (
    <div className='about' id='about'>
        <h2>What We Do</h2>
        <p>Signus is a web platform to learn <br/> Bangla sign language and test your knowledge</p>

        <div className='cards justify-content-center'>

          <div className="card">
            <img className="card-img-top" src={sign1} alt="hands" />
            <div className="card-body">
              <h5 className="card-title">We Teach</h5>
              <p className="card-text">Learn sign language using our custom animation</p>
              {/* <a href="#learn" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src={test1} alt="test" />
            <div className="card-body">
              <h5 className="card-title">We Test</h5>
              <p className="card-text">Test your knowledge using our gesture recognition feature</p>
              {/* <a href="#learn" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src={sign2} alt="hands" />
            <div className="card-body">
              <h5 className="card-title">We Interpret</h5>
              <p className="card-text">Quick interpretation of basic phrases</p>
              {/* <a href="#learn" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>

        </div>
    </div>
  )
}

export default About