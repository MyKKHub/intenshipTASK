// ShopContext.js
import React, { createContext, useContext, useReducer } from 'react';
import shopData from './Data';
import './ShopContext.css'; // Import the new CSS file

const ShopContext = createContext();

const initialState = { shopData: shopData };

const shopReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { shopData: [...state.shopData, action.payload] };
    case 'UPDATE_ITEM':
      const updatedData = state.shopData.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return { shopData: updatedData };
    case 'DELETE_ITEM':
      const filteredData = state.shopData.filter(
        (item) => item.id !== action.payload
      );
      return { shopData: filteredData };
    default:
      return state;
  }
};

const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);
  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
};

const useShopContext = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShopContext must be used within a ShopProvider');
  }
  return context;
};

export { ShopProvider, useShopContext };
