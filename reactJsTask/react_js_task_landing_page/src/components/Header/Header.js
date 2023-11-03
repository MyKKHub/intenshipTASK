import React, { useState } from 'react';
import './Header.css';
import icon from './img/icon.png';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="app-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            <img src={icon} alt="Icon" width="30" height="30" className="mr-2" />  
            <span className="brand-text">Wheelie Insurance</span>
          </a>
          <button
            className={`navbar-toggler ${isMenuOpen ? '' : 'collapsed'}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="nav-item-container">
                  <a className="nav-link" href="#">
                    Home
                    <div className="bubble"></div>
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-item-container">
                  <a className="nav-link" href="#">
                    Services
                    <div className="bubble"></div>
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-item-container">
                  <a className="nav-link" href="#">
                    About Us
                    <div className="bubble"></div>
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-item-container">
                  <a className="nav-link" href="#">
                    Contact
                    <div className="bubble"></div>
                  </a>
                </div>
              </li>
              <li className="nav-item ml-auto">
                <div className="nav-item-container">
                  <a className="nav-link" href="#">
                    Login
                    <div className="bubble"></div>
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-item-container">
                  <a className="nav-link" href="#">
                    Sign Up
                    <div className="bubble"></div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
