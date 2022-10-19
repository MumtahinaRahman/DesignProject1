import React from 'react'
// import Card from 'react-bootstrap/Card';
import './Tests.css';
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Tests() {
  return (
    <div className='test-card-wrapper'>
      <div className='card1'>
      <Card sx={{ maxWidth: 345 }}>
        <Link to="/tests/quiz" style={{textDecoration: "none"}}>
      {/* <CardMedia
        component="img"
        height="140"
        image="../../images/vaat.png"
        alt="green iguana"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Quiz
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Take some fun interactive quiz to test what you learned!
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='button' size="small">Take Quiz</Button>
      </CardActions>
      </Link>
    </Card>
    </div>
    
    <div className='card2'>
    <Card sx={{ maxWidth: 345 }}>
      <Link to="/tests/webcam" style={{textDecoration: "none"}}>
      {/* <CardMedia
        component="img"
        height="140"
        image="../../images/vaat.png"
        alt="green iguana"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Gesture Recognition
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Use our hand gesture recognition to test your learning!
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='button' size="small">Take Quiz</Button>
      </CardActions>
      </Link>
    </Card>
    </div>
    </div>

  /* //   <div className='test-card-wrapper'>

  //   <Card style={{ width: '18rem' }}>
  //     <Link to="/tests/quiz" style={{textDecoration: "none"}}>
  //       <Card.Body>
  //         <Card.Title>Quiz</Card.Title>
  //         <Card.Subtitle className="mb-2 text-muted">Test your knowledge through some interactive Quiz</Card.Subtitle>
  //       </Card.Body>
  //     </Link>
  //   </Card>

  //   <Card style={{ width: '18rem'}}>
  //     <Link to="/tests/webcam" style={{textDecoration: "none"}}>
  //       <Card.Body>
  //         <Card.Title>Gesture recognition</Card.Title>
  //         <Card.Subtitle className="mb-2 text-muted">Test you knowledge using our Gesture Recognition Feature</Card.Subtitle>
  //       </Card.Body>
  //     </Link>
  //   </Card>

  // </div> */
  )
}
export default Tests