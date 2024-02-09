import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Login.css";


function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authMode, setAuthMode] = useState("login");
  
    const handleLogin = () => {
      // Check if the user credentials are stored in local storage
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const user = storedUsers.find((u) => u.email === email && u.password === password);
  
      if (user) {
        alert("Login successful!");
        // You can navigate to the home page or set user state as needed
        onLogin();

  
      } else {
        alert("Invalid credentials");
      }
    };


    const handleSignupClick = () => {
      setAuthMode("signup");
    };

    return (
        <div className="login-container">
          <h1 className="insta-login-text">Instagram</h1>
          <div className="login-form">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="login-input"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="login-input"
            />
            <button onClick={handleLogin} className="login-button">
              Log in
            </button>
        
        {/* Additional sections */}
        <div className="additional-sections">
          <div className="separator-container">
            <div className="separator"></div>
            <span className="separator-text">OR</span>
            <div className="separator"></div>
          </div>

          <button className="login-facebook-button">Login with Facebook</button>
          <a href="#" className="forgot-password-link">Forgot password?</a>
         
        </div>
       </div>
    </div>
  );
}

export default Login;