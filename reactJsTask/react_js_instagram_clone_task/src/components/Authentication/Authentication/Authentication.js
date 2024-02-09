// src/components/Authentication/Authentication/Authentication.js
import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
import "./Authentication.css";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Play from '../../icons/googleplay.png';
import Soft from '../../icons/microsoft.png'

function Authenticate({ onAuthentication }) {
  const [active, setActive] = useState("login");
  const [redirectTo, setRedirectTo] = useState(null);

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };

  const handleLogin = () => {
    // Your login logic

    // After successful login, call the onAuthentication prop
    onAuthentication();
    // Set the route to navigate
    setRedirectTo('/');
  };

  const handleSignup = () => {
    // Your signup logic

    // After successful signup, call the onAuthentication prop
    onAuthentication();
    // Set the route to navigate
    handleChange();
  };

  // Redirect to the specified route if needed
  if (redirectTo) {
    return <Navigate to={redirectTo} />;
  }


  return (
    <div className="authenticate">
      <div className="auth__left">
        <img
          src="https://i.imgur.com/P3Vm1Kq.png"
          alt="Instagram Screenshots"
        />
      </div>
      <div className="auth__right">
      {active === "login" ? <Login onLogin={handleLogin} /> : <Signup onSignup={handleSignup} />}

        <div className="auth__more">
          <span>
            {active === "login" ? (
              <>
                Don't have an account?{" "}
                <button onClick={handleChange}>Sign Up</button>
              </>
            ) : (
              <>
                Have an account? <button onClick={handleChange}>Log in</button>
              </>
            )}
          </span>
        </div>
        <div className="get-app-section">
        <p>Get the app.</p>
        <div className="app-buttons">
          <img src={Play} alt="Get it on Google Play" className="play" />
          <img src={Soft} alt="Get it from Microsoft" className="soft"/>
        </div>
        <div className="footer-login">
        <ul className="footer-links-login">
          <li>Meta</li>
          <li>About</li>
          <li>Blog</li>
          <li>Jobs</li>
          <li>Help</li>
          <li>API</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Locations</li>
          <li>Instagram Lite</li>
          <li>Threads</li>
        </ul>
        <div className="language-selector-login">
          <span>English</span>
        </div>
        <div className="copyright-login">
          <p>© 2023 Instagram from Meta</p>
        </div>
      </div>
      </div>
      </div>      
    </div>
  );
}

export default Authenticate;
