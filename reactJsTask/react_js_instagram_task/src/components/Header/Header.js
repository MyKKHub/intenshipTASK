// src/components/Header.js
import React from 'react';
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
import profile from '../images/profile/luffy.jpg'

const Header = () => {
  return (
    <header className="mb-8">
      <nav className="navbar navbar-expand-lg navbar-light bg-light flex-column">
        <a className="navbar-brand" href="/">
        <img src={insta} alt="logo" class="icon instagram-icon"/>
        <h1 class="insta-text" >Instagram</h1>
        </a>
        
        <div id="navbarNav">
          <ul className="navbar-nav mt-3 flex-column">
            <div>
            <li className="nav-item active">
              <a className="nav-link" href="/">
                <img src={home} alt="home" class="icon"/> <b className='nav-text'>Home</b> 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
              <img src={search} alt="search" class="icon"/> <b className='nav-text'>Search</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
              <img src={explore} alt="explore" class="icon"/> <b className='nav-text'>Explore</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
              <img src={reels} alt="reels" class="icon"/> <b className='nav-text'>Reels</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
              <img src={message} alt="message" class="icon"/> <b className='nav-text'>Messages</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
              <img src={notify} alt="notify" class="icon"/> <b className='nav-text'>Notifications</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
              <img src={create} alt="create" class="icon"/> <b className='nav-text'>Create</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
              <span className="avatarr">
                <img
                  src={profile} // Placeholder image, replace with your own
                  alt="User"
                  className="rounded-circle"
                />
              </span>
               <b className='nav-text'>Profile</b>
              </a>
            </li>
            </div>
            <div>
            <ul className="navbar-nav flex-column navbar-nav-bottom ">
                <li className="nav-item">
                    <a className="nav-link" href="/">
                    <img src={threads} alt="home" class="icon"/> <b className='nav-text'>Threads</b>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                    <img src={menu} alt="menu" class="icon"/> <b className='nav-text'>More</b>
                    </a>
                </li>
            </ul>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
