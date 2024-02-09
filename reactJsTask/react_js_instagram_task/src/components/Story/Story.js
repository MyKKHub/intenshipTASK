// src/components/Story.js
import React, { useRef, useEffect } from 'react';
import './Story.css';
import luffyAvatar from "../images/profile/luffy.jpg";
import zoroAvatar from "../images/profile/zoro.jpg";
import sanjiAvatar from "../images/profile/sanji.jpeg";
import narutoAvatar from "../images/profile/naruto.webp";
import gojoAvatar from "../images/profile/gojo.webp";
import saitamaAvatar from "../images/profile/saitama.jpg";
import itachiAvatar from "../images/profile/itachi.png";
import jirayaAvatar from "../images/profile/jiraya.jpg";
import rayleighAvatar from "../images/profile/rayleigh.jpg";
import zenitsuAvatar from "../images/profile/zenitsu.jpg";
import inosukiAvatar from "../images/profile/inosuki.jpg";

const Story = () => {
  const containerRef = useRef(null);

  const stories = [
    { id: 1, avatar: luffyAvatar, username: 'Your Story' },
    { id: 2, avatar: zoroAvatar, username: 'zoro' },
    { id: 3, avatar: sanjiAvatar, username: 'sanji' },
    { id: 4, avatar: narutoAvatar, username: 'naruto' },
    { id: 5, avatar: gojoAvatar, username: 'gojo' },
    { id: 6, avatar: saitamaAvatar, username: 'saitama' },
    { id: 7, avatar: jirayaAvatar, username: 'jiraya' },
    { id: 8, avatar: itachiAvatar, username: 'itachi' },
    { id: 9, avatar: rayleighAvatar, username: 'rayleigh' },
    { id: 10, avatar: zenitsuAvatar, username: 'zenitsu' },
    { id: 11, avatar: inosukiAvatar, username: 'inosuki' },
  ];

  useEffect(() => {
    // Calculate the width of each storyUser div to determine when to load more stories
    const storyUserWidth = containerRef.current?.querySelector('.storyUser')?.offsetWidth || 0;
    const totalWidth = stories.length * (storyUserWidth + 5); // Assuming 5% gap between storyUser items

    // Load more stories when the container is scrolled to the right
    const handleScroll = () => {
      if (containerRef.current.scrollLeft >= totalWidth - containerRef.current.offsetWidth) {
        // Load more stories here
        // You can set the number of additional stories to load based on your design
        console.log('Load more stories');
      }
    };

    // Attach the scroll event listener
    containerRef.current.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      containerRef.current.removeEventListener('scroll', handleScroll);
    };
  }, [stories]);

  return (
    <div className="post-container custom-container ">
      <div ref={containerRef} className="story-container">
        {stories.map((story) => (
          <div key={story.id} className="storyUser">
            <div className="storyBorder">
              
                <img
                  src={story.avatar}
                  alt="User Story"
                  className="rounded-circle"
                />
            </div>
            <p className="username">{story.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Story;
