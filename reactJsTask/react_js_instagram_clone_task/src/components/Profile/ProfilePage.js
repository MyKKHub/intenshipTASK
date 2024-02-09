// src/components/ProfilePage.js
import React, { useState } from 'react';
import Header from '../Header/Header';
import ProfileMain from './ProfileMain';
import { GearWideConnected } from 'react-bootstrap-icons';
import './ProfilePage.css';

function ProfilePage() {
  const [showSettings, setShowSettings] = useState(false);

  const handleSettingsClick = () => {
    setShowSettings(!showSettings);
  };

  const handleLogout = () => {
    // Handle logout logic here
    alert('Logout clicked!');
  };

  return (
    <div className="profile-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            {/* Left Sidebar - You can add left sidebar content here */}
            <div className="sidebar">
              {/* Left Sidebar Content */}
              <Header />
            </div>
          </div>
          <div className="col-lg-8">
            {/* Middle Content - Feed */}
            <div className="feed">
              <ProfileMain />
            </div>
          </div>
          <div className="col-lg-2">
            {/* Right Sidebar - Suggestions */}
            <div className="sidebar">
              {/* Right Sidebar Content */}
              <button className="edit-profile-button" onClick={() => alert('Edit Profile clicked!')}>
                Edit Profile
              </button>
              <div className="settings-icon" onClick={handleSettingsClick}>
                <GearWideConnected size={24} />
              </div>
              {showSettings && (
                <div className="settings-modal">
                  <ul>
                    <li onClick={handleLogout}>Logout</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
