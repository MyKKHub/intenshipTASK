// src/components/HomePage.js
import React from 'react';
import Header from '../Header/Header';
import Foots from '../Foots/foots';
import Feed from '../Feed/Feed';

function HomePage() {
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
              <Feed />
            </div>
          </div>
          <div className="col-lg-2">
            {/* Right Sidebar - Suggestions */}
            {/* Reusing the existing Suggestions component */}
            <div className="sidebar">
              {/* Right Sidebar Content */}
              <Foots />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
