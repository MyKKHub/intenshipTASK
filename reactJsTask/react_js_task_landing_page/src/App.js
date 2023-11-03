import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="carousel-container">
        <Carousel />
      </div>
      <Footer />
    </div>
  );
}

export default App;
