import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import React from 'react';
import './Profile.css'
import bilai from '../../images/bilai.jpg';

function TextExample() {
  return (
    <div className='profile-wrapper '>
      <Card className='profile-container ' style={{ width: '50rem' }}>
      <Card.Body className='row'>

        <Card.Text className='col-4 personal-info'>
          <Card.Title>Hello MomtuMomtu!</Card.Title>
          <Card.Img className='profile-pic' variant="top" src={bilai} />
          <Card.Subtitle className="mb-2 text-muted">Mumtahina Rahman</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">mumtahina29@iut-dhaka.edu</Card.Subtitle>
        </Card.Text>

        <Card.Text className='col-8 lesson-progress'>
          <Card.Subtitle className="mb-2 text-muted">Lessons attempted: 4</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">Lessons completed: 0</Card.Subtitle>
          
          <div className='profile-lesson-cards'>
          <Card body className='profile-lesson-card'>
            Vowels
            <ProgressBar striped variant="info" now={20} />
          </Card>
          <Card body className='profile-lesson-card'>
            Consonents
            <ProgressBar striped variant="info" now={85} />
          </Card>
          <Card body className='profile-lesson-card'>
            basic words
            <ProgressBar striped variant="info" now={70} />
          </Card>
          <Card body className='profile-lesson-card'>
            everyday words
            <ProgressBar striped variant="info" now={32} />
          </Card>
          </div>
        </Card.Text>

      </Card.Body>
    </Card>
    </div>
  );
}

export default TextExample;