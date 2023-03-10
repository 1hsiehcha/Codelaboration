import React from 'react';
import './Footer.css';
import { emailIcon, instagramIcon } from './imports.js';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__contact-icons">
          <p>
            <h2>Contact Us</h2>
            <br />
            
            <a href="mailto:codelaborationofficial@gmail.com?subject = Feedback&body = Message">
              <img src={emailIcon} alt="" />
            </a>

            <a href="https://www.instagram.com/code.laboration/">
              <img src={instagramIcon} alt="" />
            </a>
          </p>
        </div>

        <p>
          Copyright © 2023 Codelaboration Exec. 
          <br />All Rights Reserved.
          <br />Last Updated on January 1st, 2023.
        </p>
      </div>
    </>
  )
}

export default Footer