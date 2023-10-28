import React from 'react';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import CardComponent from './components/CardComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <main>
        <CardComponent />
      </main>
      <footer className="footer">
        &copy; 2023 My Anime
      </footer>
    </div>
  );
}

export default App;
