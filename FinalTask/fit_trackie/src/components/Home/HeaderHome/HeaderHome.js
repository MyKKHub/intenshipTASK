// src/components/Header/HeaderHome.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import './HeaderHome.css'; // Import the CSS file

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="nav_container">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <span className="logo-icon">
            {/* Add your Fit Trackie icon code or image here */}
            <i className="bi bi-heart"></i> {/* Assuming you are using Bootstrap Icons */}
          </span>
          <h3>FIT TRACKIE</h3>
        </Link>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <Link to="/dashboard" className="nav-link"><b>DASH BOARD</b></Link>
            </li>
          <li className="nav-item">
              <Link to="/home" className="nav-link"><b>HOME</b></Link>
            </li>
            <li className="nav-item">
              <Link to="/fitness" className="nav-link">FITNESS</Link>
            </li>
            <li className="nav-item">
              <Link to="/care" className="nav-link">CARE</Link>
            </li>
            <li className="nav-item">
              <Link to="/store" className="nav-link">STORE</Link>
            </li>
            
            {/* Profile Icon with Login and Signup */}
            <li className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                id="profileDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="bi bi-person-circle"></i>
                Profile {/* Assuming you are using Bootstrap Icons */}
              </Link>
              <div className="dropdown-menu" aria-labelledby="profileDropdown">
                <Link to="/login" className="dropdown-item">Login</Link>
                <Link to="/signup" className="dropdown-item">Signup</Link>
              </div>
            </li>

            {/* FITNESS & NUTRITION */}
<li className="nav-item dropdown">
  <Link
    to="#"
    className="nav-link dropdown-toggle"
    id="fitnessNutritionDropdown"
    role="button"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    FITNESS & NUTRITION
  </Link>
  <div className="dropdown-menu" aria-labelledby="fitnessNutritionDropdown">
    {/* Programs */}
    <div className="dropdown-programs">
      <Link
        to="#"
        className="dropdown-toggle"
        id="programsDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Programs
      </Link>
      <div className="dropdown-menu-program" aria-labelledby="programsDropdown">
        <Link to="/fitness-programs" className="dropdown-item">Fitness Programs</Link>
        <Link to="/beginner-shred" className="dropdown-item">Beginner Shred 2.0</Link>
        <Link to="/beginner-build" className="dropdown-item">Beginner Build 2.0</Link>
        {/* ... add other program links ... */}
      </div>
    </div>

    {/* Coaching */}
    <div className="dropdown-coaching">
      <Link
        to="#"
        className="dropdown-toggle"
        id="coachingDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Coaching
      </Link>
      <div className="dropdown-menu-coaching" aria-labelledby="coachingDropdown">
        <Link to="/fitness-nutrition-programs" className="dropdown-item">Fitness & Nutrition Programs</Link>
        <Link to="/2-on-1-coaching" className="dropdown-item">2-on-1 Coaching</Link>
        <Link to="/1-on-1-coaching" className="dropdown-item">1-on-1 Coaching</Link>
      </div>
    </div>
  </div>
</li>

            {/* Additional Links */}
            <li className="nav-item">
              <Link to="/supplements" className="nav-link">SUPPLEMENTS</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">BLOG</Link>
            </li>
            <li className="nav-item">
              <Link to="/quiz" className="nav-link">START YOUR QUIZ</Link>
            </li>

            {/* Placeholder for "GET APP" button */}
            <li className="nav-item">
              <Link to="#" className="nav-link btn btn-primary">GET APP</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
