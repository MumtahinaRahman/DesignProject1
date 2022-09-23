import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a href="#" class="navbar-brand">Signus</a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
                <a href="./HomePage/#home" class="nav-item nav-link">Home</a>
                <a href="./About/#about" class="nav-item nav-link">About</a>
                <a href="#learn" class="nav-item nav-link">Learn</a>
                <a href="#interpret" class="nav-item nav-link">Interpret</a>
            </div>
            <div class="navbar-nav ms-auto">
                <a href="#login" class="nav-item nav-link">Login</a>
            </div>
        </div>
    </div>
</nav>

  )
}

export default NavBar
