import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Signup.css";

function Signup({onSignup}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    // Get existing users from local storage or initialize an empty array
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    // Check if the user already exists
    const existingUser = storedUsers.find((u) => u.email === email);

    if (existingUser) {
      alert("User already exists with this email");
    } else {
      // Add the new user to the stored users
      const newUser = { email, password, username };
      const updatedUsers = [...storedUsers, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      alert("Sign up successful!");
      navigate('/');
    }
  };

  return (
    <div className="signup">
      <h1 className="insta-login-text">Instagram</h1>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
      />
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
        value={username}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
      />
       <button onClick={handleSignUp}>Sign up</button>
    </div>
  );
}

export default Signup;
