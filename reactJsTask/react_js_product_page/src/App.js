import React, { useState } from 'react';
import './App.css'; // Import your app-wide CSS file
import Header from './components/Header/Header'; // Import the Header component
import ProductList from './components/ProductList/ProductList'; // Import the ProductList component
import Footer from './components/Footer/Footer';

const products = [
  // Product data
];

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Header />
      <ProductList products={products} />
      {/* Shopping cart summary */}
      <Footer />
    </div>
  );
}

export default App;
