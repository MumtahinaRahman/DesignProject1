import { useState } from "react"
import { useLessonsContext } from "../hooks/useLessonsContext"
import { useAuthContext } from "../hooks/useAuthContext"

const Lessonform = () => {

    const {dispatch} = useLessonsContext()
    const {user} = useAuthContext()

    const [lessonNo, setLessonNo] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(!user) {
            setError('You must be logged in')
            return
        }

        const lesson = {lessonNo, name, description}

        const response = await fetch('/api/lessons', {
            method: 'POST',
            body: JSON.stringify(lesson),
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }

        if(response.ok) {
            setLessonNo('')
            setName('')
            setDescription('')
            setError(null)
            console.log('New lesson added', json)
            dispatch({type: 'CREATE_LESSON', payload: json})
        }
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new lesson</h3>

            <label>Lesson No:</label>
            <input type='number' 
                    onChange={(e) => setLessonNo(e.target.value)} 
                    value={lessonNo}
            />

            <label>Lesson Name:</label>
            <input type='text' 
                    onChange={(e) => setName(e.target.value)} 
                    value={name}
            />
            <label>Description:</label>
            <input type='text' 
                    onChange={(e) => setDescription(e.target.value)} 
                    value={description}
            />
            <button>Add Lesson</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Lessonform