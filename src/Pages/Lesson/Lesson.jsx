import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Lesson.css'

function Lesson() {
  return (
    <div className='lesson-wrapper'>
        <Row xs={1} md={5} className="g-4">
            {Array.from({ length: 15 }).map((_, idx) => (
                <Col>
                    <Link to='/lessons/lesson/:id' style={{textDecoration: "none"}}>
                        <Card className='single-lesson-id-card'>
                            <Card.Body>
                            <Card.Text>
                                id
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