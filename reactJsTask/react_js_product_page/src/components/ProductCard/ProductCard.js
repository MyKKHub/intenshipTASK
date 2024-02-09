import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">₹{product.price.toFixed(2)}</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
}

export default ProductCard;
