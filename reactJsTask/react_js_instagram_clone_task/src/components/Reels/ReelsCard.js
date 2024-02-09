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
import './Reels.css'; 

const ReelsCard = ({ reelsVid, avatar, userName, caption, musicAvatar, like, com, sent }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [lastTapTime, setLastTapTime] = useState(0);

  const handleVideoClick = () => {
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - lastTapTime;

    if (timeDiff < 300) {
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
         <div className="reels-footer">
          <div className="reels-footer-icons">
            <img src={likeIcon} alt="Love Icon" className="ricon" />
            <span className="ricon-text">{like}</span>
            <img src={commentIcon} alt="Comment Icon" className="ricon" />
            <span className="ricon-text">{com}</span>
            <img src={shareIcon} alt="Share Icon" className="ricon" />
            <span className="ricon-text">{sent}</span>
            <img src={bookmarkIcon} alt="Bookmark Icon" className="ricon" />
            <MoreHorizIcon className='ricon'/>
          </div>
        <div className="reels-footer-icons">
          <Avatar src={musicAvatar} alt="Music Avatar" className="music-avatar" />
        </div>
      </div>
        
        </Col>
      </Row>

      
      <div className="ruser-info">
        <Avatar src={avatar} alt={`${userName}'s avatar`} className="ruser-avatar" />
        <div className="rinfo-text">
          <p className="rusername iText">{userName}</p>
          <p className="rcaption iText">{caption}</p>
        </div>

        <div>
          <a href="#" className="rfollow__button card-link">
            Follow
          </a>
        </div>
      </div>
      <div className='music ruser-info'>
        <img src={musicIcon} alt="Music Icon" className="mus ricon" />
        <marquee className="rcaption mText marquee ">Original Audio from {userName}</marquee>
      </div>
    </div>
  );
};

export default ReelsCard;
