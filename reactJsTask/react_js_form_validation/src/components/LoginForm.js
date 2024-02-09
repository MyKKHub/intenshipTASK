// src/components/LoginForm.js
import React, { useState } from 'react';
import './styles.css';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email === 'user@example.com' && password === 'password') {
      onLogin();
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <form className="form">
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
      {error && <p>{error}</p>}
    </form>
  );
};

export default LoginForm;