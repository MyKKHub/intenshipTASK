// ShopList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useShopContext } from './ShopContext';
import './ShopList.css'; // Import the new CSS file

const ShopList = () => {
  const { state, dispatch } = useShopContext();

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_ITEM', payload: id });
    // Additional logic for API call to delete data on the server
  };

  return (
    <div>
      <h2 className="mb-4">Shop Items</h2>
      <Link to="/add" className="btn btn-primary mb-4">
        Add Item
      </Link>
      <ul className="list-group">
        {state.shopData.map((item) => (
          <li key={item.id} className="list-group-item">
            <strong>{item.name}</strong> - ₹{item.price}
            <div className="float-right">
              <Link to={`/edit/${item.id}`} className="btn btn-warning btn-sm mr-2">
                Edit
              </Link>
              <button
                onClick={() => handleDelete(item.id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopList;
