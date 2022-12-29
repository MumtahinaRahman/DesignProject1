import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import '../../src/Pages/Authentication/Auth.css'
import { useAuthContext } from '../hooks/useAuthContext';
// import { Badge } from '@material-ui/core';

const NavBar = () => {

    const {logout} = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    const navStyle = {
        "text-decoration": "none"
    };

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <div className="navbar-brand">
        <p> <h2> <span> <b> Sign</b></span>Us </h2></p>
        </div>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
                <Link style={navStyle} to='/'><li  className="nav-item nav-link">Home</li></Link>
                {/* <Link style={navStyle}><li  className="nav-item nav-link">About</li></Link> */}
                <Link style={navStyle} to='/lessons'><li  className="nav-item nav-link">Learn</li></Link>
                <Link style={navStyle} to='/tests'><li  className="nav-item nav-link">Test</li></Link>
                <Link style={navStyle} to='/interpret'><li  className="nav-item nav-link">Interpret</li></Link>
                
            </div>
            
            <div className="navbar-nav ms-auto">
                {user && (
                    <div>
                        <span>{user.email}</span>
                        <button onClick={handleClick} className='nav-logout'>Log out</button>
                        <Link style={navStyle} to='/profile'><li className="nav-item nav-link nav-profile">Profile</li></Link>
                    </div>
                )}
                
                {!user && (
                    <div className='loggedOut'>
                        <Link style={navStyle} to='/login'><li className="nav-item nav-link nav-login">Login</li></Link>
                        <Link style={navStyle} to='/signup'><li className="nav-item nav-link nav-signup">Signup</li></Link>
                    
                    </div>
                )}
                
                
            </div>
        </div>
    </div>
</nav>

  )
}

export default NavBar
