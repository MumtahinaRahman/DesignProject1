import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import './Lessons.css';
import vowel from '../../images/vowel.png'
import consonant from '../../images/consonant.png'
import shortVowel from '../../images/shortVowel.png'
import mon from '../../images/mon-valo-nei.png'
import non from '../../images/non.jpeg'
import jhuli from '../../images/jhuli.jpg'

function Lessons() {
  return (
    // className='wrapper' style={{"text-decoration":"none"}}
    <div >
            <h2 style={{"padding-top": "80px"}}>Browse all lessons here</h2>
            <div className='justify-content-center' style={{"padding-top": "50px", "padding-bottom": "70px", "display": "flex", "overflow": "hidden"}}>
            
            <div  className="wrapper row row-cols-1 row-cols-md-3 g-2 ">

          <div className="col">
          
            <div className="card">
            <Link style={{"text-decoration":"none"}}>
              <img src={vowel} className="card-img-top lesson-img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Vowels</h5>
              </div>
            </Link>
            </div>
          
          </div>
          <div className="col">
            <div className="card">
              <Link style={{"text-decoration":"none"}}>
              <img src={consonant} className="card-img-top lesson-img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Consonants</h5>
              </div>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link style={{"text-decoration":"none"}}>
              <img src={shortVowel} className="card-img-top lesson-img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Shortened vowels</h5>
                </div>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link style={{"text-decoration":"none"}}>
              <img src={non} className="card-img-top lesson-img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Basic words</h5>
                </div>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link style={{"text-decoration":"none"}}>
              <img src={jhuli} className="card-img-top lesson-img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Everyday words</h5>
                </div>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Link style={{"text-decoration":"none"}}>
              <img src={mon} className="card-img-top lesson-img" alt="..."/>
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