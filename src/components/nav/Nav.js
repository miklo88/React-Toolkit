import React from "react";
import { Link } from "react-router-dom";

import "./Nav.scss";

function Nav() {
  // menu toggle
  function toggleMenu(e) {
    e.preventDefault();
    // console.log("you clicked menu");
    document.getElementById("mobile-menu").classList.toggle("change");
    document.getElementById("nav-tabs").classList.toggle("show");
  }

  return (
    <div className='nav-container'>
      {/* home link */}
      <Link className='home-link' to='/'>
        MIKLO
      </Link>
      {/* dropdown menu mobile menu */}
      <button onClick={toggleMenu} className='mobile-nav' id='mobile-menu'>
        menu
      </button>

      {/* onclick menu aka dropdown */}
      {/* navigation links */}
      <nav className='nav-tabs' id='nav-tabs'>
        <button onClick={toggleMenu} className='mobile-nav'>
          le menu
        </button>
        {/* About page */}
        <Link className='links basic-button' to='/about'>
          about
        </Link>
        {/* link to design page  */}
        <Link className='links basic-button' to='/design'>
          design
        </Link>
        {/* contact page */}
        <Link className='links basic-button' to='/contactForm'>
          contact
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
