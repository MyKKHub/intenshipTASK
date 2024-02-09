// src/components/Suggestions.js
import React from 'react';

import '../Profile/Profile.css';
import profile from '../images/profile/luffy.jpg'
const Profile = () => {
  return (
    <div className="suggestions card">
      <div className="card-body">
        <div className="suggestions-header">
          <h5 className="card-title suggestions__title">Your Profile</h5>
        </div>
        <div className="suggestions__usernames">
          <div className="suggestions__username card-text">
            <div className="username__left">
              <span className="avatar">
              <div className="storyBorder">
              <div className="storyIBgap">
                <img
                  src={profile}// Placeholder image, replace with your own
                  alt="User"
                  className="rounded-circle"
                />
                </div>
                </div>
              </span>
              <div className="username__info">
                <p className="username card-title"><a href="#">The_White_Griffen_</a></p>
                <p className="relation card-text">😇MeNtOoo PsYc😈</p>
              </div>
            </div>
            <a href="#" className="follow__button card-link">Switch</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
