import React from 'react';
import './Style.css'
import img1 from '../img/Logo_Mark.png';
import Multi_Drop from '../Components/Multi_Drop';
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faContactBook, faHome, faInfoCircle, faTasks } from "@fortawesome/free-solid-svg-icons"; 


const Header = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-sm fixed-top col-12 align-self-center">
        <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="Navbar">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active"><a className="nav-link" href="#"><i><FontAwesomeIcon icon={faHome}/></i>Platform</a></li>
                <li className="nav-item"><a className="nav-link" href="./About.js"><i><FontAwesomeIcon icon={faInfoCircle}/></i>About Us</a></li>
                <li className="nav-item"><a className="nav-link" href="#"><i><FontAwesomeIcon icon={faContactBook}/></i>Contact</a></li>
                <li className="nav-item"><a className="nav-link" href="#"><i><FontAwesomeIcon icon={faTasks}/></i>Careers</a></li>
            </ul>
            </div>
            <a className="navbar-brand"><h4><img src={img1} height='40' width='50'></img></h4></a>

        </div>
    </nav> 
    {/* <header className="jumbotron">
      <div className="container">
        <div className='row row-header'>
        <div className='col-12 col-sm-6'>
          <h1>DataChamps</h1>
          <h2>Democratize Data Analytics</h2>
          <p>DataChamps is a platform with readymade workflows right from Data to Descision</p>
      </div>
      <div className='col-12 col-sm align-self-center'>
        <img src={img1} className='img-fluid'/>
      </div>
      </div>
      </div>
    </header> */}
    <Multi_Drop/>
     </div>
    
  )
}

export default Header
