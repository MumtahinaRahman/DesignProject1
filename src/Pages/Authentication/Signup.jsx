import { useState } from 'react'
import './Auth.css'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)
    }

    return (
        <form className='signup' onSubmit={handleSubmit}>
            <h3>Sign up</h3>

            <label>Name:</label>
            <input 
                type="text" 
                onChange={(e) => setName(e.target.value)}
                value={name}
            />

            <label>Email:</label>
            <input 
                type="email" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <label>Password:</label>
            <input 
                type="password" 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            
            <button> Sign up</button>
        </form>
    )
}

export default Signup
