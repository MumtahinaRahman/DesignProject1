import React from 'react'
import Card from 'react-bootstrap/Card';
import './LessonID.css'
import animation from '../../images/animation.gif';

function Lesson() {
  return (
    <div className='lesson-card-wrapper'>
         <Card className='lesson-card'>
          <Card.Body>

            <div className='row lesson-contents'>
              <div className='col-7 animation-player'>
                <Card.Title>animation</Card.Title>
                <Card.Text>
                  the animation will be displayed here.
                </Card.Text>
                <Card.Img className='animation-display' variant="top" src={animation} />
              </div>

              <div className='col-5 animation-description'>
                <Card.Title>description</Card.Title>
                <Card.Text>
                  this will be the description of the anination.
                </Card.Text>
              </div>
            </div>

            <div className='row lesson-buttons'>
              <div className='col-12'>
                <button type="button" className="btn btn-outline-secondary lesson-btn">Prev</button>
                <button type="button" className="btn btn-outline-success lesson-btn">Done</button>
                <button type="button" className="btn btn-outline-secondary lesson-btn">Next</button>
              </div>
            </div>

          </Card.Body>
        </Card>
    </div>
  )
}

export default Lesson