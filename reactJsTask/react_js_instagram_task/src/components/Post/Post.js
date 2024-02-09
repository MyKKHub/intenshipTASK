import React from "react";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import likeIcon from "../icons/love.png";
import commentIcon from "../icons/comment.png";
import shareIcon from "../icons/send.png";
import bookmarkIcon from "../icons/save-instagram.png";
import { Container, Image, Row, Col } from "react-bootstrap";
import "./Post.css"; // Make sure to import your CSS file

function Post({ user, postImage, likes, timestamp, avatar }) {
  return (
    <Container className="post-container">
      <Row className="mb-2 post-header">
        <Col xs={2}>
          <Avatar src={avatar} alt={`${user}'s avatar`} />
        </Col>
        <Col xs={8} className="d-flex align-items-center">
          <span>{user} • {timestamp}</span>
        </Col>
        <Col xs={2} className="text-end">
          <MoreHorizIcon />
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={postImage} alt="Post Image" fluid className="post-image" />
        </Col>
      </Row>
      <Row className="mt-2 post-footer-icons">
        <Col>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <img src={likeIcon} alt="Love Icon" className="icon me-2" />
              <img src={commentIcon} alt="Comment Icon" className="icon me-2" />
              <img src={shareIcon} alt="Share Icon" className="icon me-2" />
            </div>
            <div>
              <img src={bookmarkIcon} alt="Bookmark Icon" className="icon" />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Liked by {likes} people.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Post;
