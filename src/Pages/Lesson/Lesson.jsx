import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Lesson.css'
import axios from 'axios'

function Lesson() {

    // fetch data 
    // using axios/fetch
    // lessons : all fetched data
    // iterate (lessons)
    // lessons.name, lessons.description
    // localhost:4000/api/lessons/

    const [lessons, setLessons] = useState([])

    const fetchLessons = async () => {
        try {
          const response = await axios.get(`http://localhost:4000/api/lessons/`)
          setLessons(response.data)
          console.log(response)
          return response
        } catch (error) {
          if (error) 
            console.log(console.response);
        }
        
    }

    useEffect(() => {
        fetchLessons()
    }, [])
    
    //const lessons = fetchLessons()
    //console.log(lessons)

    //{Array.from({ length: 15 }).map((_, idx) => (

  return (
    <div className='lesson-wrapper'>
        <Row xs={1} md={5} className="g-4">
            {lessons.map((lesson, idx) => (
                <Col>
                    <Link to='/lessons/lesson/:id' style={{textDecoration: "none"}}>
                        <Card className='single-lesson-id-card'>
                            <Card.Body>
                            <Card.Text>
                                {lesson.name}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default Lesson