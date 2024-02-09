// src/components/eed.js
import React from 'react';
import Timeline from '../Timeline/Timeline';
import Story from '../Story/Story';

function Feed() {
  return (
    <div className="feed">
      <div className="container d-flex justify-content-center">
        {/* Content - Story */}
        <div className="story">
          <Story />
        </div>
      </div>
      <div className="container d-flex justify-content-center">
        {/* Content - Timeline */}
        <div className="timeline">
          <Timeline />
        </div>
      </div>
    </div>
  );
}

export default Feed;
