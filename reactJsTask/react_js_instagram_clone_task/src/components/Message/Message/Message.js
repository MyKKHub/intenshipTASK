import React from 'react';
import './Message.css'; // Import your CSS file for styling

const Message = () => {
  return (
    <div className="instagram-message-container">
      {/* Header */}
      <div className="header">
        <img
          className="profile-picture"
          src="https://placekitten.com/50/50" // Replace with actual profile picture URL
          alt="Profile"
        />
        <div className="username">new user</div>
      </div>

      {/* Message body */}
      <div className="message-body">
        <div className="message received">
          <div className="message-content">Hey, how's it going?</div>
          <div className="message-timestamp">10:15 AM</div>
        </div>
        <div className="message sent">
          <div className="message-content">
            It's going well, thanks! How about you?
          </div>
          <div className="message-timestamp">10:18 AM</div>
        </div>
        {/* Add more messages here */}
      </div>

      {/* Input for new message */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Type a message..."
          className="message-input"
        />
        <button className="send-button">Send</button>
      </div>
    </div>
  );
};

export default Message;
