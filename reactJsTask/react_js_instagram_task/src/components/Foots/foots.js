// src/components/Feed/Feed.js
import React from 'react';
import Suggestions from '../Suggestions/Suggestions';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import './Foots.css';

function Foots() {
  return (
    <div className='foots-hide ml-auto'>
      {/* Profile component */}
      <Profile />
      
      {/* Suggestions component */}
      <Suggestions />
      
      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default Foots;
