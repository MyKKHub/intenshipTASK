// ReelsCard.js

import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import likeIcon from '../icons/love.png';
import commentIcon from '../icons/comment.png';
import shareIcon from '../icons/send.png';
import bookmarkIcon from '../icons/save-instagram.png';
import musicIcon from '../icons/music1.png';
import { Row, Col } from 'react-bootstrap';
import './Reels.css'; // Make sure to import your CSS file

const ReelsCard = ({ reelsVid, avatar, userName, caption, musicAvatar, like, com, sent }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [lastTapTime, setLastTapTime] = useState(0);

  const handleVideoClick = () => {
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - lastTapTime;

    if (timeDiff < 300) {
      // Double-tap occurred within 300 milliseconds
      toggleMute();
    }

    setLastTapTime(currentTime);

    const video = document.getElementById(`reelsVideo_${userName}`);

    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }

      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const video = document.getElementById(`reelsVideo_${userName}`);

    if (video) {
      video.muted = !video.muted;
    }
  };

  return (
    <div className="reels-card-container">
      {/* Video */}
      <Row>
        <Col md={10}>
          <video
            id={`reelsVideo_${userName}`}
            autoPlay
            loop
            muted
            className="reels-video"
            onClick={handleVideoClick}
          >
            <source src={reelsVid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>
        <Col md={2}>
         {/* Footer Icons */}
         <div className="reels-footer">
          <div className="reels-footer-icons">
            <img src={likeIcon} alt="Love Icon" className="icon" />
            <span className="icon-text">{like}</span>
            <img src={commentIcon} alt="Comment Icon" className="icon" />
            <span className="icon-text">{com}</span>
            <img src={shareIcon} alt="Share Icon" className="icon" />
            <span className="icon-text">{sent}</span>
            <img src={bookmarkIcon} alt="Bookmark Icon" className="icon" />
            <MoreHorizIcon className='icon'/>
          </div>
        <div className="reels-footer-icons">
          <Avatar src={musicAvatar} alt="Music Avatar" className="music-avatar" />
        </div>
      </div>
        
        </Col>
      </Row>

      {/* User Info */}
      <div className="user-info">
        <Avatar src={avatar} alt={`${userName}'s avatar`} className="user-avatar" />
        <div className="info-text">
          <p className="username iText">{userName}</p>
          <p className="caption iText">{caption}</p>
        </div>

        <div>
          <a href="#" className="follow__button card-link">
            Follow
          </a>
        </div>
      </div>
      <div className='music user-info'>
        <img src={musicIcon} alt="Music Icon" className="mus icon" />
        <marquee className="caption mText marquee ">Original Audio from {userName}</marquee>
      </div>
    </div>
  );
};

export default ReelsCard;
