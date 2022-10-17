import React from 'react'
import Card from 'react-bootstrap/Card';
import './Tests.css';
import { Link } from 'react-router-dom'


function Tests() {
  return (
    <div className='test-card-wrapper'>

    <Card style={{ width: '18rem' }}>
      <Link to="/tests/quiz" style={{textDecoration: "none"}}>
        <Card.Body>
          <Card.Title>quiz</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        </Card.Body>
      </Link>
    </Card>

    <Card style={{ width: '18rem'}}>
      <Link to="/tests/webcam" style={{textDecoration: "none"}}>
        <Card.Body>
          <Card.Title>gesture recognition</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        </Card.Body>
      </Link>
    </Card>

  </div>
  )
}
export default Tests