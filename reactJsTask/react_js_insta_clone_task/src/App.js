// src/App.js
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Reels from './components/Reels/Reels';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes >
        <Route path="/" element={ <Home /> } />
        <Route path="/reels" element={ <Reels /> } />
      </Routes>
    </div>
  );
};

export default App;
