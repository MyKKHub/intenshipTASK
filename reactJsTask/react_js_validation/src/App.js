import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Assuming you have a dark-themed CSS in App.css
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer'; // Import the Footer component

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Include the Header component */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer /> {/* Include the Footer component */}
      </div>
    </Router>
  );
}

export default App;
