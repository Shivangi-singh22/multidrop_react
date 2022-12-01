import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Style.css';
import { faContactBook, faHome, faInfoCircle, faPhone, faEnvelope, faTasks } from '@fortawesome/free-solid-svg-icons';
import "bootstrap-icons/font/bootstrap-icons.css";
// import Chatbox from './Chatbox';


const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-4 col-sm-2 align-self-center'>
              <h5>Links</h5>
              <ul className='list-unstyled '>
                <li><a href='#'><FontAwesomeIcon icon={faHome}/></a></li>
                <li><a href='#'><FontAwesomeIcon icon={faInfoCircle}/></a></li>
                <li><a href='#'><FontAwesomeIcon icon={faContactBook}/></a></li>
                <li><a href='#'><FontAwesomeIcon icon={faTasks}/></a></li>
              </ul>
            </div>
            <div className='col-4 col-sm-4  '>
              <h5>Our Address</h5>
              <address>
                C 8/1,A Road, <br/>
                Satpur MIDC NICE,<br/>
                parijat Nagar, Nashik,<br/>
                Maharastra 422007<br/>
                <i><FontAwesomeIcon icon={faPhone}/></i> +91 8007041984<br/>
                <i><FontAwesomeIcon icon={faEnvelope}/></i> <a href='mailto:mail@example.org'>sales@datachamps.ai</a>
              </address>
            </div>

          <div className='social col-12 col-sm-3 align-self-center'>
            <a href='https://www.linkedin.com/company/datachamps-ai/mycompany/'><i className="icon bi-linkedin"></i></a>
            <a href='https://www.instagram.com/datachamps.ai/'><i className="icon bi-instagram"></i></a>
            <a href='https://twitter.com/Datachamps_ai'><i className='icon bi-twitter'></i></a>
            <a href='mailto:mail@example.org'><i className="icon bi-envelope"></i></a>
            <a href='#'><i className="icon bi-facebook"></i></a>
            <a href='#'><i className="icon bi-youtube"></i></a>
          </div>
          <div className='col-12 col-sm-2 align-self-center'>
            <a role="button" className='btn nav-link btn-light'
            data-toggle="tooltip" data-html="true" title="Or Call us at +91 8007041984"
            data-placement="bottom" href='#office'>Chat</a>
          </div>
          </div>
        </div>
        <div className='copyright'>
          <div className='col-auto'>
            <p><strong> © Copyright 2012 DataChamps.ai</strong></p>
          </div>
        </div>
      </footer>
    </>
  
  )
  }

export default Footer;
