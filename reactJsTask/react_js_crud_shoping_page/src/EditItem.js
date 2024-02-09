// EditItem.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useShopContext } from './ShopContext';
import './EditItem.css';

const EditItem = () => {
  const { state, dispatch } = useShopContext();
  const { id } = useParams();
  const navigate = useNavigate(); // Use useNavigate

  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  useEffect(() => {
    const currentItem = state.shopData.find((item) => item.id === parseInt(id));
    if (currentItem) {
      setItemName(currentItem.name);
      setItemPrice(currentItem.price.toString());
    } else {
      // Handle item not found (redirect or show error)
    }
  }, [id, state.shopData]);

  const handleUpdateItem = () => {
    const updatedItem = {
      id: parseInt(id),
      name: itemName,
      price: parseFloat(itemPrice),
    };

    dispatch({ type: 'UPDATE_ITEM', payload: updatedItem });
    // Additional logic for API call to update data on the server

    navigate('/');
  };

  return (
    <div>
      <h2 className="mb-4">Edit Item</h2>
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
          onClick={handleUpdateItem}
          className="btn btn-primary mr-2"
        >
          Update Item
        </button>
      </form>
    </div>
  );
};

export default EditItem;