import React from 'react'
// import Card from 'react-bootstrap/Card';
import './Consonants.css';
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import kaw from '../../images/kaw.png'
import khaw from '../../images/khaw.png'
import gaw from '../../images/gaw.png'
import ghaw from '../../images/ghaw.png'
import ungo from '../../images/ungo.png'

function Consonants() {
  return (
    <div className='test-card-wrapper'>
      <div className='card1'>
      <Card sx={{ maxWidth: 345 }}>
        <Link to="/tests/quiz" style={{textDecoration: "none"}}>
      <CardMedia
        component="img"
        height="140"
        image= {kaw}
        alt="green iguana"
      />
      {/* <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Quiz
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Take some fun interactive quiz to test what you learned!
        </Typography>
      </CardContent> */}
      <CardActions>
        <Button className='button' size="small">Ka </Button>
      </CardActions>
      </Link>
    </Card>
    </div>
    
    <div className='card2'>
      <Card sx={{ maxWidth: 345 }}>
        <Link to="/tests/quiz" style={{textDecoration: "none"}}>
      <CardMedia
        component="img"
        height="140"
        image= {khaw}
        alt="green iguana"
      />
      {/* <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Quiz
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Take some fun interactive quiz to test what you learned!
        </Typography>
      </CardContent> */}
      <CardActions>
        <Button className='button' size="small">Kha </Button>
      </CardActions>
      </Link>
    </Card>
    </div>
    <div className='card3'>
      <Card sx={{ maxWidth: 345 }}>
        <Link to="/tests/quiz" style={{textDecoration: "none"}}>
      <CardMedia
        component="img"
        height="140"
        image= {gaw}
        alt="green iguana"
      />
      {/* <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Quiz
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Take some fun interactive quiz to test what you learned!
        </Typography>
      </CardContent> */}
      <CardActions>
        <Button className='button' size="small">Ga </Button>
      </CardActions>
      </Link>
    </Card>
    </div>
    <div className='card4'>
      <Card sx={{ maxWidth: 345 }}>
        <Link to="/tests/quiz" style={{textDecoration: "none"}}>
      <CardMedia
        component="img"
        height="140"
        image= {ghaw}
        alt="green iguana"
      />
      {/* <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Quiz
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Take some fun interactive quiz to test what you learned!
        </Typography>
      </CardContent> */}
      <CardActions>
        <Button className='button' size="small">Gha </Button>
      </CardActions>
      </Link>
    </Card>
    </div>
    <div className='card5'>
      <Card sx={{ maxWidth: 345 }}>
        <Link to="/tests/quiz" style={{textDecoration: "none"}}>
      <CardMedia
        component="img"
        height="140"
        image= {ungo}
        alt="green iguana"
      />
      {/* <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Quiz
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Take some fun interactive quiz to test what you learned!
        </Typography>
      </CardContent> */}
      <CardActions>
        <Button className='button' size="small">Ungo </Button>
      </CardActions>
      </Link>
    </Card>
    </div>
    </div>
  )
}

export default Consonants