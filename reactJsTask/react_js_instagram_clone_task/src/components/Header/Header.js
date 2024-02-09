import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import home from '../icons/home.png';
import search from '../icons/search.png';
import explore from '../icons/explore.png';
import reels from '../icons/reels.png';
import message from '../icons/chat.png';
import notify from '../icons/love.png';
import create from '../icons/create.png';
import threads from '../icons/threads.png';
import menu from '../icons/menu.png';
import insta from '../icons/instagram.png';
import profile from '../images/profile/luffy.jpg';

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
          <h1 className="insta-text">Instagram</h1>
        </a>

        <div id="navbarNav">
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="navbar-nav mt-3 flex-column">
              <div>
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/home">
                    <img src={home} alt="home" className="nicon" /> <b className="nav-text">Home</b>
                  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/search">
                  <img src={search} alt="search" className="nicon"/> <b className='nav-text'>Search</b>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/explore">
                  <img src={explore} alt="explore" className="nicon"/> <b className='nav-text'>Explore</b>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/reels">
                  <img src={reels} alt="reels" className="nicon"/> <b className='nav-text'>Reels</b>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/message">
                  <img src={message} alt="message" className="nicon"/> <b className='nav-text'>Messages</b>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/notifications">
                  <img src={notify} alt="notify" className="nicon"/> <b className='nav-text'>Notifications</b>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/create">
                  <img src={create} alt="create" className="nicon"/> <b className='nav-text'>Create</b>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  <span className="avatarr">
                    <img
                    src={profile} // Placeholder image, replace with your own
                    alt="User"
                    className="nrounded-circle"/>
                    </span>
                    <b className='nav-text'>Profile</b>
                </NavLink>
              </li>
              </div>
              <div>
                <ul className="navbar-nav flex-column navbar-nav-bottom">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/threads">
                      <img src={threads} alt="home" className="nicon" /> <b className="nav-text">Threads</b>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/more">
                      <img src={menu} alt="menu" className="nicon" /> <b className="nav-text">More</b>
                    </NavLink>
                  </li>
                </ul>
              </div>
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
