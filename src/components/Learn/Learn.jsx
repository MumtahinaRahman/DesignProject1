import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Learn.css';
import learn1 from '../../images/learn1.jpg'
import {Link} from 'react-router-dom'

const Learn = () => {
  return (
    <div className='learn justify-content-center'>
      <h2> <span><b>Learn</b></span></h2>
      <div className="card bg-light text-white">
      <img src={learn1} className="card-img" alt="..."/>
      <div className="card-img-overlay">
      <h5 className="card-title">Custom Animation</h5>
      <p className="card-text">Using animation to learn Bangla sign language using our custom animated hand model.</p>
      <p className="card-text">Easy to learn and navigate</p>
      <Link to='/lessons'><button type="button" className="btn btn-outline-light">Get started</button></Link>
      </div>
      </div>
    </div>
  )
}

export default Learn