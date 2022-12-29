import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Interpret.css';
import interpret1 from '../../images/interpret1.jpg'
import {Link } from 'react-router-dom'

const Learn = () => {
  return (
    <div className='interpret justify-content-center'>
      <div className="card card-interpret mb-3">
      <div className="row g-0">
      <div className="col-md-4">
        <img src={interpret1} className="img-fluid rounded-start" alt="..." />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">Assessment</h5>
          <p className="card-text">Test against learned words though quiz and gesture recognition</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          <Link to='/tests'><button type="button" className="btn btn-outline-dark">Start now</button></Link>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Learn