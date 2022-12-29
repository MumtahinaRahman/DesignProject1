import React, { useEffect} from 'react'
import { useAuthContext } from '../../hooks/useAuthContext';
import { useLessonsContext } from '../../hooks/useLessonsContext';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SearchIcon from '@mui/icons-material/Search';
import './Lesson.css'
import './Search.css'
import axios from 'axios'
import vaat from '../../images/vaat.png'

// components

import Phrases from '../../components/Phrases'
import Lessonform from '../../components/Lessonform';

const Lesson = () => {

    // const [lessons, setLessons] = useState(null)
    const {lessons, dispatch} = useLessonsContext()
    const {user} = useAuthContext()

    useEffect(() => {

        const fetchLessons = async() => {
            const response = await fetch('/api/lessons/', {
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                }
            })
            
            const json = await response.json()
            console.log('geseeeeeee', response)
            

            if(response.ok) {
                // setLessons(json)
                dispatch({type: 'SET_LESSONS', payload: json})
            }

        }
        if(user) {
            fetchLessons()
        }
        
    }, [dispatch, user]) 


    return (
        
        <div className='lesson-wrapper'>
            <div className='lesson-title'>
                <h2> Everyday Phrases </h2>
            </div>
            <div className='container'>
             <input type="text" placeholder="Search phrases"></input> 
             {/* <SearchIcon /> */}
             <div className='search'> </div>
            </div>
            <div className='phrases'>
                {lessons && lessons.map((lesson) => (
                    <Phrases key={lesson._id} lesson={lesson} />
                ))}
            </div>
            <Lessonform />

        </div>
    )
}

// function Lesson() {

//     // fetch data 
//     // using axios/fetch
//     // lessons : all fetched data
//     // iterate (lessons)
//     // lessons.name, lessons.description
//     // localhost:4000/api/lessons/

//     const [lessons, setLessons] = useState([])
//     const { user } = useAuthContext()

//     const fetchLessons = async () => {
//         try {
//           const response = await axios.get(`http://localhost:4000/api/lessons/`)
//         // const response = await fetch('/api/lessons/', {
//         //     headers: {
//         //         Authorization: `Bearer ${user.token}`
//         //     }
//         // })
//           setLessons(response.data)
//           console.log(response)
//           return response
//         } catch (error) {
//           if (error) 
//             console.log(console.response);
//         }
        
//     }

//     useEffect(() => {

//         if(user) {
//             fetchLessons()
//         }
        
//     }, [user])
    
//     //const lessons = fetchLessons()
//     //console.log(lessons)

//     //{Array.from({ length: 15 }).map((_, idx) => (

//   return (
//     <div className='lesson-wrapper'>
//         <div className='lesson-title'>
//             <h2> Everyday Phrases </h2>
//         </div>
//         <div className='container'>
//             <input type="text" placeholder="Search phrases"></input> 
//             <SearchIcon />
//             <div className='search'> </div>
//         </div>
        
//         <Row xs={1} md={5} className="g-4">
//             {lessons.map((lesson, idx) => (
//                 <Col>
//                     <Link to='/lessons/lesson/:id' style={{textDecoration: "none"}}>
//                         <Card className='single-lesson-id-card'>
//                             <Card.Body>
//                                 <Card.Img src={vaat} />
//                             <Card.Text>
//                                 {lesson.name}
//                             </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Link>
//                 </Col>
//             ))}
//         </Row>
//     </div>
//   )
// }

export default Lesson