import React from 'react';
import './FooterHome.css';

function FooterHome() {
  return (
    <footer className="custom-footer mt-5 py-3">
      <div className="custom-footer-container text-center">
        <i>&copy; 2023 Fit Trackie. All rights reserved.</i>
        <div className="custom-footer-menu">
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> | <a href="#">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default FooterHome;
