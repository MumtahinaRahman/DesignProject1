import React from 'react'
// import Card from 'react-bootstrap/Card';
import './Numbers.css';
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Number0 from '../../images/Number0.png'
import Number1 from '../../images/Number1.png'
import Number2 from '../../images/Number2.png'
import Number3 from '../../images/Number3.png'
import Number4 from '../../images/Number4.png'
import Number5 from '../../images/Number5.png'
import Number6 from '../../images/Number6.png'
import Number7 from '../../images/Number7.png'
import Number8 from '../../images/Number8.png'
import Number9 from '../../images/Number8.png'

function Numbers() {
  return (
    <div className='test-card-wrapper'>

      <div className='card1'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= {Number0}
        alt="green iguana"
      />
      <CardActions>
        <Button className='button' size="small">Number0 </Button>
      </CardActions>
    </Card>
    </div>
    
    <div className='card2'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= {Number1}
        alt="green iguana"
      />
      <CardActions>
        <Button className='button' size="small">Number1 </Button>
      </CardActions>
    </Card>
    </div>
    <div className='card3'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= {Number2}
        alt="green iguana"
      />
      <CardActions>
        <Button className='button' size="small">Number2 </Button>
      </CardActions>
    </Card>
    </div>
    <div className='card4'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= {Number3}
        alt="green iguana"
      />
      <CardActions>
        <Button className='button' size="small">Number3 </Button>
      </CardActions>
    </Card>
    </div>

    <div className='card5'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= {Number4}
        alt="green iguana"
      />
      <CardActions>
        <Button className='button' size="small">Number4 </Button>
      </CardActions>
    </Card></div>

    <div className='card6'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= {Number5}
        alt="green iguana"
      />
      <CardActions>
        <Button className='button' size="small">Number5 </Button>
      </CardActions>
    </Card>
    </div>

    <div className='card7'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= {Number6}
        alt="green iguana"
      />
      <CardActions>
        <Button className='button' size="small">Number6 </Button>
      </CardActions>
    </Card>
    </div>

    <div className='card8'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= {Number7}
        alt="green iguana"
      />
      <CardActions>
        <Button className='button' size="small">Number7 </Button>
      </CardActions>
    </Card>
    </div>

    <div className='card9'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= {Number8}
        alt="green iguana"
      />
      <CardActions>
        <Button className='button' size="small">Number8 </Button>
      </CardActions>
    </Card>
    </div>

    <div className='card10'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= {Number9}
        alt="green iguana"
      />
      <CardActions>
        <Button className='button' size="small">Number9 </Button>
      </CardActions>
    </Card>
    </div>

    </div>
  
  )
}

export default Numbers