import React from 'react'
import { useState } from "react";
import ReactPlayer from "react";
import Card from 'react-bootstrap/Card';
import ami from '../../videos/ami.mp4';

// import './LessonID.css'
// import animation from '../../images/animation.gif';
import axios from 'axios'

// import VideoSlider from "./VideoSlider"


function BasicWords() {

    const [currentIndex, setCurrentIndex] = useState(0);

//   const videos = [
//     {url: "../../../public/ajke(today).mp4", title: "cat"},
//     {url: "http://localhost:3000/baba(father).mp4", title: "petni"}
//   ];


    const videos = [ ami ];



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

  const goToPrevious = () => {
    const isFirstVideo = currentIndex === 0;
    const newIndex= isFirstVideo ? videos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isLastVideo = currentIndex === videos.length - 1;
    const newIndex= isLastVideo ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center'
  }

  const dotStyles = {
    marginTop: '0px',
    cursor: 'pointer',
    fontSize: '80px'
  }

  const goToVideo = (videoIndex) => {
    setCurrentIndex(videoIndex);
  }


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
                    {/* <div style={{backgroundImage: `url(${videos[currentIndex].url})`, height: "200px", width: "250px", marginLeft: "50px"}}></div> */}
                    {/* <ReactPlayer url={videos[currentIndex].url} 
                        width = "100%"
                        pip = {true}
                        controls = {true} 
                        playing = {true}
                    /> */}
                    <div>
                      <video src={ami} autoPlay loop muted/>
                    </div>
                    
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
                <button type="button" className="btn btn-outline-secondary lesson-btn" onClick={goToPrevious}>Prev</button>
                <button type="button" className="btn btn-outline-success lesson-btn" onClick={changeStatus}>Done</button>
                <button type="button" className="btn btn-outline-secondary lesson-btn" onClick={goToNext}>Next</button>
              </div>
            </div>

          </Card.Body>
        </Card> 


        <div style={dotsContainerStyles}>
             {videos.map((video, videoIndex) => (
                         <div key={videoIndex} style={dotStyles} onClick={() => goToVideo(videoIndex)}>-</div>
                ))}
        </div>

    </div>

            


  )
}

export default BasicWords