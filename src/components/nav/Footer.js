import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

function Footer() {
  return (
    <>
      <div className='footer-container'>
        <div className='alpha'>
          MIKLO: A creative visual portfolio by Carl Redding.
        </div>
        {/* linkedin, github and instagram links */}
        <div className='bravo'>
          <div>Say hi!</div>
          <div className='footer-icons'>
            <a href='https://www.linkedin.com/in/carl-redding-000a4281/'>
              <i className='fab fa-linkedin'></i>
            </a>
            <a href='https://instagram.com/miklo_a/'>
              <i className='fab fa-instagram-square'></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
