// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ShopProvider } from './ShopContext';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ShopProvider>
      <App />
    </ShopProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
