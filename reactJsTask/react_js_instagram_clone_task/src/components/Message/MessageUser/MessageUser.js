// src/components/MessageList.js
import React from 'react';
import './MessageUser.css'; // Create a new CSS file for styling the MessageList component
import shanks from "../../images/profile/shanks.jpg";
import sukuna from "../../images/profile/sukuna.jpg";
import denji from "../../images/profile/denji.jpg";
import tanjiro from "../../images/profile/tanjiro.jpg";

const MessageList = () => {
  return (
    <div className="message-list card">
      <div className="card-body">
        <div className="message-list-header">
          <h5 className="card-title message-list__title">Messages</h5>
        </div>
        <div className="message-list__users">
          <div className="message-list__user card-text">
            <div className="message-list-user__left">
              <span className="message-list-avatar">
                <img
                  src={shanks}
                  alt="User"
                  className="rounded-circle"
                />
              </span>
              <div className="message-list-user__info">
                <p className="message-list-username card-title"><a href="#">Shanks</a></p>
              </div>
            </div>
          </div>

          <div className="message-list__user card-text">
            <div className="message-list-user__left">
              <span className="message-list-avatar">
                <img
                  src={sukuna}
                  alt="User"
                  className="rounded-circle"
                />
              </span>
              <div className="message-list-user__info">
                <p className="message-list-username card-title"><a href="#">sukuna</a></p>
              </div>
            </div>
          </div>

          <div className="message-list__user card-text">
            <div className="message-list-user__left">
              <span className="message-list-avatar">
                <img
                  src={denji}
                  alt="User"
                  className="rounded-circle"
                />
              </span>
              <div className="message-list-user__info">
                <p className="message-list-username card-title"><a href="#">denji</a></p>
              </div>
            </div>
          </div>

          <div className="message-list__user card-text">
            <div className="message-list-user__left">
              <span className="message-list-avatar">
                <img
                  src={tanjiro}
                  alt="User"
                  className="rounded-circle"
                />
              </span>
              <div className="message-list-user__info">
                <p className="message-list-username card-title"><a href="#">tanjiro</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageList;
