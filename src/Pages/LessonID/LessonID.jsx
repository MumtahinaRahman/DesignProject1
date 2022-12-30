import React from 'react'
import Card from 'react-bootstrap/Card';
import './LessonID.css'
import animation from '../../images/animation.gif';
import axios from 'axios'

function Lesson() {

  const changeStatus = async () => {
    console.log("running")
    const url = "http://localhost:4000/api/lessons/634a5737bfa30f3712f5aaee"
    const res = await axios.put(url, {
      "done": true        
    })
    .then((response) => {
      res.json({ message: "successful" })
    })
  }

  const getDescription = async () => {
    const url ="http://localhost:4000/api/lessons/634ed4fd7b54751d89f2e5b3"
    const res = await axios.get(url)
    .then((response) => {
      res.json(response.data.description)
    })
  }

  // const goToPrevious = () => {
  //   setCurrentIndex(newIndex);
  //   const isFirstVideo = currentIndex === 0;
  //   const newIndex= isFirstVideo ? videos.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // }

  // const goToNext = () => {
  //   const isLastVideo = currentIndex === videos.length - 1;
  //   const newIndex= isLastVideo ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // }

  // const dotsContainerStyles = {
  //   display: 'flex',
  //   justifyContent: 'center'
  // }

  // const dotStyles = {
  //   margin: '0 3px',
  //   cursor: 'pointer',
  //   fontSize: '200px'
  // }

  // const goToVideo = (videoIndex) => {
  //   setCurrentIndex(videoIndex);
  // }


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
                {/* <VideoPlayer videos={videos}/> */}
              </div>

              <div className='col-5 animation-description'>
                <Card.Title>description</Card.Title>
                <Card.Text>
                  this will be the description of the anination.
                  {/* {getDescription} */}
                </Card.Text>
              </div>
            </div>

            <div className='row lesson-buttons'>
              <div className='col-12'>
                <button type="button" className="btn btn-outline-secondary lesson-btn">Prev</button>
                <button type="button" className="btn btn-outline-success lesson-btn" onClick={changeStatus}>Done</button>
                <button type="button" className="btn btn-outline-secondary lesson-btn">Next</button>
              </div>
            </div>

          </Card.Body>
        </Card>

{/* 
        <div style={dotsContainerStyles}>
          {videos.map((video, videoIndex) => (
            <div key={videoIndex} style={dotStyles} onClick={() => goToVideo(videoIndex)}>-</div>
          ))}
        </div> */}


    </div>
  )
}

export default Lesson