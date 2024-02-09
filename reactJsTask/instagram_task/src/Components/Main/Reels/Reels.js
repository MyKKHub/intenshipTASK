// Reels.js

import React from 'react';
import { Container } from 'react-bootstrap';
import ReelsCard from './ReelsCard';
import UserReels from './ReelsUser';

const Reels = () => {
  return (
    <Container className="reels-container custom-container">
      {UserReels.map((currentUser) => (
        <ReelsCard key={currentUser.userName} {...currentUser} />
      ))}
    </Container>
  );
};

export default Reels;
