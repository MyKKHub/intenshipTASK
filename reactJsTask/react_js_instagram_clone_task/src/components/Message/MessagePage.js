// src/components/HomePage.js
import React from 'react';
import Header from '../Header/Header';
import MessageUser from './MessageUser/MessageUser';
import Message from './Message/Message';

function MessagePage() {
  return (
    <div className="App">
      <div className="container ">
        <div className="row">
          <div className="col-lg-2">
            {/* Left Sidebar - You can add left sidebar content here */}
            <div className="sidebar">
              {/* Left Sidebar Content */}
              <Header />
            </div>
          </div>
          <div className="col-lg-4">
            {/* Middle Content - Feed */}
            <div className="messageuser ">
              <MessageUser />
            </div>
          </div>
          <div className="col-lg-6">
            {/* Right Sidebar - Suggestions */}
            {/* Reusing the existing Suggestions component */}
            <div className="message">
              {/* Right Sidebar Content */}
              <Message />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagePage;
