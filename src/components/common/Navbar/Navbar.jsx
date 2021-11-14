import React, { Component, useState } from "react";
import "./styles/navbar.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/images2/NavBar/Ready-Set-Grow_Logo 1.png";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="NavBarItems">
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>

      <div className="nav-menu-whole">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="nav-menu-mobile">
          <ul className={click ? "nav-menu active" : "nav-menu"}>

            <div className="first-three-menu">
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/events" className="nav-links" onClick={closeMobileMenu}>
                  Events
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about-us" className="nav-links" onClick={closeMobileMenu}>
                  About us
                </Link>
              </li>
            </div>


            {/* last two menus */}

            
            <div className="two-last-menu">
              <li className="nav-learn-more">
                <Link to="/learn-more" className="nav-links" onClick={closeMobileMenu}>
                  Learn More
                </Link>
              </li>

              {/* this is for the register now button web version */}

              <li className="nav-register-now">
                <Link to="/register-now" className="nav-links-register" onClick={closeMobileMenu}>
                  Register Now
                </Link>
              </li>

              {/* this is for the register now button mobile version */}

              <li className="nav-register-now-mobile">
                <Link to="/register-now" className="nav-links-register-mobile" onClick={closeMobileMenu}>
                  Register Now
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;