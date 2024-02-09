// src/components/HomePage.js
import React from 'react';
import { Container } from 'react-bootstrap';
import ReelsCard from './ReelsCard';
import UserReels from './ReelsUser';
import Header from '../Header/Header';


const Reels = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="sidebar">
              <Header />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="feed">
            <Container className="reels-container custom-container">
              {UserReels.map((currentUser) => (
              <ReelsCard key={currentUser.userName} {...currentUser} />
              ))}
            </Container>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="sidebar">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reels;
