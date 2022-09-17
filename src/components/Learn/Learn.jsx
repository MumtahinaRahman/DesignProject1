import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Learn.css';
import learn1 from '../../images/learn1.jpg'

const Learn = () => {
  return (
    <div className='learn justify-content-center'>
      <h2>Learn</h2>
      <div className="card bg-light text-white">
      <img src={learn1} className="card-img" alt="..."/>
      <div className="card-img-overlay">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text">Last updated 3 mins ago</p>
      <button type="button" className="btn btn-outline-light">Get started</button>
      </div>
      </div>
    </div>
  )
}

export default Learn