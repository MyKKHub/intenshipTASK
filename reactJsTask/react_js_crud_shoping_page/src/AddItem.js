// AddItem.js
import React, { useState } from 'react';
import { useShopContext } from './ShopContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './AddItem.css';

const AddItem = () => {
  const { dispatch } = useShopContext();
  const navigate = useNavigate(); // Use useNavigate
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const handleAddItem = () => {
    const newItem = {
      id: Date.now(), // Simple ID generation for demo purposes
      name: itemName,
      price: parseFloat(itemPrice),
    };

    dispatch({ type: 'ADD_ITEM', payload: newItem });
    // Additional logic for API call to save data on the server

    navigate('/'); // Navigate to the home page
  };

  return (
    <div>
      <h2 className="mb-4">Add Item</h2>
      <form>
        <div className="form-group">
          <label htmlFor="itemName">Item Name</label>
          <input
            type="text"
            className="form-control"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="itemPrice">Item Price</label>
          <input
            type="number"
            className="form-control"
            id="itemPrice"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={handleAddItem}
          className="btn btn-success mr-2"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;
