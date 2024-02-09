// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Reels from './components/Reels/Reels';
import Profile from './components/Profile/ProfilePage';
import MessagePage from './components/Message/MessagePage';
import Authenticate from './components/Authentication/Authentication/Authentication';

const App = () => {
  const [isAuthenticated, setAuthentication] = useState(false);

  const handleAuthentication = () => {
    setAuthentication(true);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/home" /> : <Authenticate onAuthentication={handleAuthentication} />}
          />
          
          <Route path="/home" element={<Home />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/message" element={<MessagePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
