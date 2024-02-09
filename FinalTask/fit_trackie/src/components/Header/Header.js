// src/components/Header.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import homeIcon from '../icons/home.png';
import activityIcon from '../icons/activity.png'; // Assuming you have an activity icon
import exploreIcon from '../icons/explore.png';
import leaderboardIcon from '../icons/leaderboard.png';
import profileIcon from '../icons/profile.png';
import settingsIcon from '../icons/settings.png';
import logoutIcon from '../icons/logout.png';

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="mb-8">
      <nav className="navbar navbar-expand-lg navbar-light bg-light flex-column">
        <a className="navbar-brand" href="/">
          <img src={insta} alt="logo" className="instagram-icon" />
          <h1 className="insta-text">Fit Trackie</h1>
        </a>

        <div id="navbarNav">
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="navbar-nav mt-3 flex-column">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/dashboard">
                  <img src={homeIcon} alt="home" className="nicon" /> <b className="nav-text">Dashboard</b>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/activity-log">
                  <img src={activityIcon} alt="activity" className="nicon"/> <b className='nav-text'>Activity Log</b>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/explore">
                  <img src={exploreIcon} alt="explore" className="nicon"/> <b className='nav-text'>Explore</b>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/leaderboard">
                  <img src={leaderboardIcon} alt="leaderboard" className="nicon"/> <b className='nav-text'>Leaderboard</b>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  <img src={profileIcon} alt="profile" className="nicon"/> <b className='nav-text'>Profile</b>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/settings">
                  <img src={settingsIcon} alt="settings" className="nicon"/> <b className='nav-text'>Settings</b>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/logout">
                  <img src={logoutIcon} alt="logout" className="nicon" /> <b className="nav-text">Logout</b>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:hidden text-gray-500 cursor-pointer" onClick={toggleMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24">
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
          </svg>
        </div>
      </nav>
    </header>
  );
}

export default Header;
