import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import sign1 from '../images/sign1.jpg'
import sign2 from '../images/sign2.jpg'
import test1 from '../images/test1.jpeg'


const About = () => {
  return (
    <div className='about'>
        <h2>What we do</h2>
        <p>Signus is a web platform to learn <br/> Bangladeshi sign language and test you knowledge</p>

        <div className='cards justify-content-center'>

          <div className="card">
            <img className="card-img-top" src={sign1} alt="hands" />
            <div className="card-body">
              <h5 className="card-title">we teach</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              {/* <a href="#learn" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src={test1} alt="test" />
            <div className="card-body">
              <h5 className="card-title">we test</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              {/* <a href="#learn" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src={sign2} alt="hands" />
            <div className="card-body">
              <h5 className="card-title">we interpret</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              {/* <a href="#learn" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>

        </div>
    </div>
  )
}

export default About