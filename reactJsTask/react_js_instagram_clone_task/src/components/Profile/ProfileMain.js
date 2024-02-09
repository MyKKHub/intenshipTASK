// InstagramProfile.js
import React, { useState } from 'react';
import '../Profile/ProfilePage.css';
import Post1 from '../images/luffypost.jpg';
import profileImage from '../images/profile/luffy.jpg';
import Post2 from "../images/zoropost.jpg";
import Post3 from "../images/sanjipost.jpg";
import { GearWideConnected } from 'react-bootstrap-icons';

const InstagramProfile = () => {
  
  return (
    <div className="instagram-profile">
      <div className="profile-header">
        <div className="profile-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="profile-info">
          <h1>The_White_Griffen_</h1>
          <div className="profile-stats">
            <p><strong>100</strong> posts</p>
            <p><strong>10k</strong> followers</p>
            <p><strong>500</strong> following</p>
          </div>
          <h2>😇MeNtOoo PsYc😈</h2>
          <pre>👔iNtRoVeRt
            💪GyM_frEaK🏋️
            📌HaTe mE oR DAtE mE
            👍LoGiN In tHe wOrLd 11Th NoV
            👔ŞiMpLe BoY
            🏁OnLy LuB mYsElF😎
            ♍I'm nOt RiCh ßuT I'm RoYaL
            👍LiVe📿LaUgH😊LoVe❤</pre>
          
        </div>
      </div>
      <div className="profile-posts">
        {/* Display user's posts */}
        <div className="post">
          <img src={Post1} alt="Post 1" />
        </div>
        <div className="post">
          <img src={Post2} alt="Post 2" />
        </div>
        <div className="post">
          <img src={Post3} alt="Post 3" />
        </div>
        {/* Add more posts as needed */}
      </div>
      <div className="footer card">
      <div className="card-body">
        <div className="footer-header">
          
        </div>
        <div className="footer__usernames">
        <div className="footer">
      <div className="footer-links">
        <a href="#">About</a>
        <a href="#">Help</a>
        <a href="#">Press</a>
        <a href="#">API</a>
        <a href="#">Jobs</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Locations</a>
        <a href="#">Language</a>
        <a href="#">Meta Verified</a>
      </div>
      <div className="footer-meta">
        <p>© 2023 INSTAGRAM CLONE</p>
      </div>
    </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default InstagramProfile;
