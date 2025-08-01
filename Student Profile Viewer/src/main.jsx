import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';

import App from "./App.jsx";  // If the file is actually App.js
// import { BrowserRouter } from 'react-router-dom';


// Properly using createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <BrowserRouter>
    <App />
  // </BrowserRouter>
  
  // </React.StrictMode>
);
