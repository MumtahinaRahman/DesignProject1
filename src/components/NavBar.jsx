import React from 'react'
import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    // <Nav>
    <ul class="nav justify-content-center">
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Learn</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Interpret</a>
        </li>
    </ul>
    // </Nav>
  )
}

export default NavBar
