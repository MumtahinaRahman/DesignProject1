import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import './Lessons.css';
import vowel from '../../images/vowel.png'
import consonant from '../../images/consonant.png'
import shortVowel from '../../images/shortVowel.png'
// import mon from '../../images/mon-valo-nei.png'
// import non from '../../images/non.jpeg'
import word from '../../images/word.png'
import everyday from '../../images/everyday.png'
import vaat from '../../images/vaat.png'
import numbers from '../../images/dui.png'
// import jhuli from '../../images/jhuli.jpg'

function Lessons() {
  return (
    // className='wrapper' style={{"text-decoration":"none"}}
    // Comic Sans MS, Comic Sans, cursive
    <div >
            <h3 style={{"padding-top": "100px", "fontFamily":"Verdana, sans-serif", "fontStyle": "bold"}}> <b style={{"font-size": "50px"}}>A</b> World of Learning Is Waiting For You. </h3>
            <h4 style={{"padding-top": "10px", "fontFamily":"Verdana, sans-serif", "fontStyle": "bold"}}><b style={{"font-size": "45px"}}>S</b>tart your sign language journey today.</h4>
            <div className='justify-content-center' style={{"padding-top": "50px", "padding-bottom": "70px", "display": "flex", "overflow": "hidden"}}>
            
            <div  className="wrapper row row-cols-1 row-cols-md-3 g-2 ">

          <div className="col">
          
            <div className="card">
            <Link to='/lessons/lesson' style={{"text-decoration":"none"}}>
              <img src={vowel} className="card-img-top lesson-img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Vowels</h5>
              </div>
            </Link>
            </div>
          
          </div>
          <div className="col">
            <div className="card">
              <Link to='/Consonants/Consonants' style={{"text-decoration":"none"}}>
              <img src={consonant} className="card-img-top lesson-img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Consonants</h5>
              </div>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link to='/Numbers/Numbers' style={{"text-decoration":"none"}}>
              <img src={numbers} className="card-img-top lesson-img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Numbers</h5>
                </div>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link to='/lessons/lesson' style={{"text-decoration":"none"}}>
              <img src={word} className="card-img-top lesson-img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Basic words</h5>
                </div>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link to='/lessons/lesson' style={{"text-decoration":"none"}}>
              <img src={everyday} className="card-img-top lesson-img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Everyday words</h5>
                </div>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link to='/lessons/lesson' style={{"text-decoration":"none"}}>
              <img src={vaat} className="card-img-top lesson-img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Everyday phrases</h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
            </div>
            </div>
            
    
  )
}

export default Lessons