import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import SignupForm from './components/SignupForm';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleSignup = (data) => {
    setLoggedIn(true);
    setUserData(data);
  };

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login" exact>
          {loggedIn ? <Redirect to="/dashboard" /> : <LoginForm onLogin={handleLogin} />}
        </Route>
        <Route path="/dashboard" exact>
          {loggedIn ? <Dashboard userData={userData} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/signup" exact>
          {loggedIn ? <Redirect to="/dashboard" /> : <SignupForm onSignup={handleSignup} />}
        </Route>
        <Redirect to="/login" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;