import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(''); // Added email state
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setError('Please fill out all fields.');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match.');
    } else if (!isValidUsername(username)) {
      setError('Please enter a valid username.');
    } else if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
    } else if (!isValidPassword(password)) {
      setError('Password must meet certain requirements.');
    } else {
      // Store credentials in local storage for future login validation
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      navigate('/login');
    }
  };

  function isValidUsername(name) {
    return name.length >= 3;
  }

  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  function isValidPassword(password) {
    // Password must contain at least one digit, one lowercase and one uppercase letter, and be at least 8 characters long
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  }

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1 className="dashboard-heading">Sign Up</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-control"
            />
          </Form.Group>
          <Button type="submit" variant="primary" className="btn">
            Sign Up
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
