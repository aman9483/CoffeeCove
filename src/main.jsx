import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';




// Get the root element
const rootElement = document.getElementById('root');

// Check if the root element exists
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
     
        <App />
        </BrowserRouter>
 
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
