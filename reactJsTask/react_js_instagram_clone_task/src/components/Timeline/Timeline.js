// src/components/Timeline.js
import React, { useState } from "react";
import Post from "../Post/Post";
import "./Timeline.css";
import luffyPost from "../images/luffypost.jpg";
import zoroPost from "../images/zoropost.jpg";
import sanjiPost from "../images/sanjipost.jpg";
import narutoPost from "../images/narutopost.jpg";
import gojoPost from "../images/gojopost.jpg";
import saitamaPost from "../images/saitamapost.jpg";
import luffyAvatar from "../images/profile/luffy.jpg";
import zoroAvatar from "../images/profile/zoro.jpg";
import sanjiAvatar from "../images/profile/sanji.jpeg";
import narutoAvatar from "../images/profile/naruto.webp";
import gojoAvatar from "../images/profile/gojo.webp";
import saitamaAvatar from "../images/profile/saitama.jpg";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      postId:"1",
      user: "Luffy",
      postImage: luffyPost,
      likes: 9999,
      timestamp: "2d",
      avatar: luffyAvatar,
    },
    {
      postId:"2",
      user: "zoro",
      postImage: zoroPost,
      likes: 8796,
      timestamp: "2d",
      avatar: zoroAvatar,
    },
    {
      postId:"3",
      user: "sanji",
      postImage: sanjiPost,
      likes: 6789,
      timestamp: "2d",
      avatar: sanjiAvatar,
    },
    {
      postId:"4",
      user: "naruto",
      postImage: narutoPost,
      likes: 8599,
      timestamp: "2d",
      avatar: narutoAvatar,
    },
    {
      postId:"5",
      user: "gojo",
      postImage: gojoPost,
      likes: 8732,
      timestamp: "2d",
      avatar: gojoAvatar,
    },
    {
      postId:"6",
      user: "saitama",
      postImage: saitamaPost,
      likes: 6798,
      timestamp: "2d",
      avatar: saitamaAvatar,
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              key={post.postId}  // Add a key for each post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
              avatar={post.avatar}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
