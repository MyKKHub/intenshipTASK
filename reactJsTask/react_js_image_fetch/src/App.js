import React from 'react';
import './App.css';
import ImageFetch from './ImageFetch';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <ImageFetch />
      </div>
      <Footer />
    </div>
  );
}

export default App;
