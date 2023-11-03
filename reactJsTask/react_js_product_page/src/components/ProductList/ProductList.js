import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css'; // Import the CSS file for the ProductList component


const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 49.99,
    imageUrl: '/images/product1.jpg', // Replace with the actual image URL
  },
  {
    id: 2,
    name: 'Product 2',
    price: 39.99,
    imageUrl: '/images/product2.jpg', // Replace with the actual image URL
  },
  {
    id: 3,
    name: 'Product 3',
    price: 59.99,
    imageUrl: '/images/product3.jpg', // Replace with the actual image URL
  },
  {
    id: 4,
    name: 'Product 4',
    price: 29.99,
    imageUrl: '/images/product4.jpg', // Replace with the actual image URL
  },
];


function ProductList() {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
