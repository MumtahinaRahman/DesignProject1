import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Interpret.css';
import interpret1 from '../../images/interpret1.jpg'

const Learn = () => {
  return (
    <div className='interpret justify-content-center'>
      <div className="card card-interpret mb-3">
      <div class="row g-0">
      <div className="col-md-4">
        <img src={interpret1} class="img-fluid rounded-start" alt="..." />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">Interpret</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          <button type="button" className="btn btn-outline-dark">Start now</button>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Learn