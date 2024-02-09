// src/components/Suggestions.js
import React from 'react';
import './Suggestions.css';
import shanks from "../images/profile/shanks.jpg"
import sukuna from "../images/profile/sukuna.jpg"
import denji from "../images/profile/denji.jpg"
import tanjiro from "../images/profile/tanjiro.jpg"

const Suggestions = () => {
  return (
    <div className="suggestions card">
      <div className="card-body">
        <div className="suggestions-header">
          <h5 className="card-title suggestions__title">Suggested for you</h5>
          <a href="#" className="see-all__button card-link">See All</a>
        </div>
        <div className="suggestions__usernames">
          <div className="suggestions__username card-text">
            <div className="username__left">
              <span className="avatar">
                <img
                  src={shanks} // Placeholder image, replace with your own
                  alt="User"
                  className="rounded-circle"
                />
              </span>
              <div className="username__info">
                <p className="username card-title"><a href="#">Shanks</a></p>
                <p className="relation card-text">Instagram recommended</p>
              </div>
            </div>
            <a href="#" className="follow__button card-link">Follow</a>
          </div>

          <div className="suggestions__username card-text">
            <div className="username__left">
              <span className="avatar">
                <img
                  src={sukuna} // Placeholder image, replace with your own
                  alt="User"
                  className="rounded-circle"
                />
              </span>
              <div className="username__info">
                <p className="username card-title"><a href="#">sukuna</a></p>
                <p className="relation card-text">Instagram recommended</p>
              </div>
            </div>
            <a href="#" className="follow__button card-link">Follow</a>
          </div>
          <div className="suggestions__username card-text">
            <div className="username__left">
              <span className="avatar">
                <img
                  src={denji} // Placeholder image, replace with your own
                  alt="User"
                  className="rounded-circle"
                />
              </span>
              <div className="username__info">
                <p className="username card-title"><a href="#">denji</a></p>
                <p className="relation card-text">Instagram recommended</p>
              </div>
            </div>
            <a href="#" className="follow__button card-link">Follow</a>
          </div>
          <div className="suggestions__username card-text">
            <div className="username__left">
              <span className="avatar">
                <img
                  src={tanjiro} // Placeholder image, replace with your own
                  alt="User"
                  className="rounded-circle"
                />
              </span>
              <div className="username__info">
                <p className="username card-title"><a href="#">tanjiro</a></p>
                <p className="relation card-text">Instagram recommended</p>
              </div>
            </div>
            <a href="#" className="follow__button card-link">Follow</a>
          </div>

          {/* Add more suggestion items as needed */}
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
