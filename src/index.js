import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { initProducts } from './repository/products';
import { initUsers } from './repository/credentials';
import {initCart} from './repository/cart';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Initialise local storage data
initProducts();
initUsers();
initCart();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
