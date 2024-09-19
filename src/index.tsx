

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

// Check if the element exists
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);  // Now `rootElement` is guaranteed to be non-null
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}

// For performance measuring
reportWebVitals();
