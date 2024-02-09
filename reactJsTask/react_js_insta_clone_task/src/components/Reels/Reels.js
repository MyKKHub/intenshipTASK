// src/components/HomePage.js
import React from 'react';
import { Container } from 'react-bootstrap';
import ReelsCard from './ReelsCard';
import UserReels from './ReelsUser';
import Header from '../Header/Header';
import './Reel.css';

const Reels = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            {/* Left Sidebar - You can add left sidebar content here */}
            <div className="sidebar">
              {/* Left Sidebar Content */}
              <Header />
            </div>
          </div>
          <div className="col-lg-6">
            {/* Middle Content - Feed */}
            <div className="feed">
            <Container className="reels-container custom-container">
              {UserReels.map((currentUser) => (
              <ReelsCard key={currentUser.userName} {...currentUser} />
              ))}
            </Container>
            </div>
          </div>
          <div className="col-lg-2">
            {/* Right Sidebar - Suggestions */}
            {/* Reusing the existing Suggestions component */}
            <div className="sidebar">
              {/* Right Sidebar Content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reels;
