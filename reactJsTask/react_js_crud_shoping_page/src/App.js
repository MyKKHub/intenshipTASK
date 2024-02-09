// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ShopProvider } from './ShopContext';
import ShopList from './ShopList';
import AddItem from './AddItem';
import EditItem from './EditItem';
import Header from './Header'; // Add Header
import Footer from './Footer'; // Add Footer

function App() {
  return (
    <Router>
      <ShopProvider>
        <div className="container mt-4">
          <Header /> {/* Add Header */}
          <Routes>
            <Route path="/" element={<ShopList />} />
            <Route path="/add" element={<AddItem />} />
            <Route path="/edit/:id" element={<EditItem />} />
          </Routes>
          <Footer /> {/* Add Footer */}
        </div>
      </ShopProvider>
    </Router>
  );
}

export default App;
